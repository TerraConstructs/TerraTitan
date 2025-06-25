#!/bin/bash
# reorder-to-git.sh
# Simple script to reorder the working file blocks to match git order

set -euo pipefail

FILE="../reference/docs/typescript/provider-aws/r/dynamodb_table.json"
OUTPUT_FILE="../reference/docs/typescript/provider-aws/r/dynamodb_table_reordered.json"

echo "Reordering $FILE blocks to match git order..."
echo "Output will be written to: $OUTPUT_FILE"

# Get git order (unique names only)
GIT_ORDER=$(git show HEAD:$FILE | jq -r '.blocks[].name' | awk '!seen[$0]++')

echo "Git block order:"
echo "$GIT_ORDER"

# Create a simple jq script to reorder blocks
ORDER_ARRAY=$(echo "$GIT_ORDER" | jq -R -s 'split("\n") | map(select(length > 0))')

echo "Creating reordered file..."
jq --argjson order "$ORDER_ARRAY" '
  . as $original |
  {
    arguments: .arguments,
    blocks: [
      $order[] as $name |
      $original.blocks[] |
      select(.name == $name)
    ]
  }
' "$FILE" > "$OUTPUT_FILE"

echo "✅ Created reordered file: $OUTPUT_FILE"
echo "To replace original: mv $OUTPUT_FILE $FILE"
echo "To compare: diff $FILE $OUTPUT_FILE"
