#!/bin/bash

set -euo pipefail

# Configuration
VERSION="v5.100.0"
BASE_DIR=$(git rev-parse --show-toplevel)/data || {
  echo "Error: Script must be run from within a Git repository" >&2
  exit 1
}
WORK_DIR="${BASE_DIR}/reference/docs/provider-aws"
WORK_TS_DIR="${BASE_DIR}/reference/docs/typescript/provider-aws"
CACHE_DIR="${BASE_DIR}/cache"
TARBALL="terraform-provider-aws-${VERSION#v}.tar.gz"

# Create base directories
mkdir -p "${WORK_DIR}"/{d,r}
mkdir -p "${WORK_TS_DIR}"/{d,r}
mkdir -p "${CACHE_DIR}"

echo "Working directory: ${WORK_DIR}"
echo "Cache directory: ${CACHE_DIR}"

# Download archive if not in cache
if [ ! -f "${CACHE_DIR}/${TARBALL}" ]; then
  echo "Downloading ${TARBALL}..."
  curl -L "https://github.com/hashicorp/terraform-provider-aws/archive/refs/tags/${VERSION}.tar.gz" \
    -o "${CACHE_DIR}/${TARBALL}"
else
  echo "Using cached ${TARBALL}"
fi

# Verify download
if [ ! -f "${CACHE_DIR}/${TARBALL}" ]; then
  echo "Error: Downloaded file not found at ${CACHE_DIR}/${TARBALL}"
  exit 1
fi

# Create temporary directory
TMP_DIR=$(mktemp -d)
echo "Using temporary directory: ${TMP_DIR}"

# Extract archive
echo "Extracting tarball to ${TMP_DIR}..."
tar xzf "${CACHE_DIR}/${TARBALL}" -C "${TMP_DIR}"

# Get the actual extracted directory name
EXTRACTED_DIR=$(find "${TMP_DIR}" -maxdepth 1 -type d -name "terraform-provider-aws*" | head -n 1)

if [ -z "${EXTRACTED_DIR}" ]; then
  echo "Error: Could not find extracted directory in ${TMP_DIR}"
  ls -la "${TMP_DIR}"
  exit 1
fi

echo "Extracted to: ${EXTRACTED_DIR}"

# Check if the website/docs directories exist
DOCS_DIR="${EXTRACTED_DIR}/website/docs"
if [ ! -d "${DOCS_DIR}" ]; then
  echo "Error: Docs directory not found at ${DOCS_DIR}"
  echo "Available directories in ${EXTRACTED_DIR}:"
  find "${EXTRACTED_DIR}" -type d -maxdepth 2
  exit 1
fi

DOCS_TS_DIR="${EXTRACTED_DIR}/website/docs/cdktf/typescript"
if [ ! -d "${DOCS_TS_DIR}" ]; then
  echo "Error: TypeScript docs directory not found at ${DOCS_TS_DIR}"
  echo "Available directories in ${EXTRACTED_DIR}:"
  find "${EXTRACTED_DIR}" -type d -maxdepth 2
  exit 1
fi

# Copy data sources and resources separately
echo "Copying documentation files..."
if [ -d "${DOCS_DIR}/d" ]; then
  cp -rv "${DOCS_DIR}/d/"* "${WORK_DIR}/d/"
else
  echo "Warning: Data sources docs not found at ${DOCS_DIR}/d"
fi

if [ -d "${DOCS_DIR}/r" ]; then
  cp -rv "${DOCS_DIR}/r/"* "${WORK_DIR}/r/"
else
  echo "Warning: Resource docs not found at ${DOCS_DIR}/r"
fi

# Copy TypeScript docs
if [ -d "${DOCS_TS_DIR}/d" ]; then
  cp -rv "${DOCS_TS_DIR}/d/"* "${WORK_TS_DIR}/d/"
else
  echo "Warning: TypeScript data sources docs not found at ${DOCS_TS_DIR}/d"
fi
if [ -d "${DOCS_TS_DIR}/r" ]; then
  cp -rv "${DOCS_TS_DIR}/r/"* "${WORK_TS_DIR}/r/"
else
  echo "Warning: TypeScript resource docs not found at ${DOCS_TS_DIR}/r"
fi

# Cleanup
echo "Cleaning up temporary directory..."
rm -rf "${TMP_DIR}"

echo "Documentation copied to:"
echo " - ${WORK_DIR}/d (Data Sources)"
echo " - ${WORK_DIR}/r (Resources)"

echo "TypeScript documentation copied to:"
echo " - ${WORK_TS_DIR}/d (Data Sources)"
echo " - ${WORK_TS_DIR}/r (Resources)"

# Make the script executable
chmod +x "${BASE_DIR}/scripts/tf-doc-scrape.sh"
