# Guide: Updating TerraTitan to the Latest Terraform AWS Provider

## 1. Cloning the Repository & Setting Up the Environment

1. **Clone the TerraTitan repo**: Use Git to clone the `TerraConstructs/TerraTitan` repository to your local machine. For example:

   ```bash
   git clone https://github.com/TerraConstructs/TerraTitan.git
   cd TerraTitan
   ```

2. **Install Node.js and pnpm**: TerraTitan is a Node.js monorepo using pnpm (with Turborepo). Ensure you have Node.js (v22 or above) installed (using a version manager like nvm is recommended). Enable Corepack (which includes pnpm) and install dependencies:

   ```bash
   # mise
   mise install

   # Enable Corepack to use pnpm
   corepack enable

   # Install all dependencies for the repo
   pnpm install
   ```

   TerraTitan’s README highlights these steps for getting started. All required packages (including CDKTF and the AWS provider bindings) will be installed.

3. **Set up environment variables**: Create a `.env` file in the project root (or export in shell) with any necessary API keys and tokens. In particular, if you plan to generate embeddings later, set your OpenAI API key (e.g. `OPENAI_API_KEY`) and, if using Upstash for vector storage, the Upstash credentials (we will detail this in a later section).

## 2. Updating the AWS Provider Version in CDKTF

Next, update TerraTitan to use the latest AWS Terraform provider. TerraTitan relies on the CDK for Terraform (CDKTF) provider bindings for AWS, provided as an NPM package. The current version is specified in the **`apps/core/package.json`** under devDependencies (e.g., `"@cdktf/provider-aws": "^19.54.0"` in the example below):

```json
  "devDependencies": {
    "@cdktf/provider-aws": "^19.54.0",
    "aws-cdk-lib": "^2.186.0",
    "cdktf": "^0.20.0",
    "constructs": "^10.4.2",
    ...
  }
```

*Update this version string* to the latest release of the CDKTF AWS provider. To find the latest version:

* Review release notes from https://github.com/cdktf/cdktf-provider-aws/releases
  * Versions `~19.0.0` track terraform-provider-aws v5 (up to v5.99.1) - TerraConstructs currently restricted to v5
  * Versions `~20.0.0` track terraform-provider-aws v5.100.0 (last compatible version for TerraConstructs at moment of writing)
  * Versions `>21.0.0` track terraform-provider-aws v6.x (incompatible with TerraConstructs for now)

After editing `package.json`, run `pnpm install` again to fetch the new provider library. This ensures the updated AWS provider bindings (classes, JSII data, etc.) are now in `node_modules`. Verify that the update was successful by checking the lockfile or running `pnpm why @cdktf/provider-aws` to see the resolved version.

**Tip:** Also consider updating the CDKTF CLI/library (`cdktf` npm package) if a new version is available, to maintain compatibility with the new provider. For example, if moving from Terraform AWS provider 4.x to 5.x, ensure CDKTF is up-to-date (the example above uses cdktf 0.20.0, which should support AWS provider 5.x, but newer versions might exist).

## 3. Updating Terraform Provider Documentation Data

TerraTitan uses the official Terraform AWS provider documentation in its workflow. It stores Markdown docs for each AWS resource and data source under `data/reference/docs`. To update these docs to the new provider version:

1. **Update the doc scraper configuration**: Open the script **`data/scripts/tf-doc-scrape.sh`**. This script downloads the AWS provider’s documentation from the HashiCorp GitHub repo. At the top, update the `VERSION` variable to the new provider tag (e.g. `"v5.100.0"` if that is the latest).

2. **Run the documentation fetch script**: Execute the script from the project root:

   ```bash
   bash data/scripts/tf-doc-scrape.sh
   ```

   This will download the Terraform AWS provider source at that tag and extract the Markdown docs for all **data sources** and **resources.** The script outputs them into `data/reference/docs/provider-aws` (for HCL docs) and `data/reference/docs/typescript/provider-aws` (CDKTF TypeScript usage docs). After running, you should see updated markdown files under `data/reference/docs/provider-aws/d/` (data sources) and `.../r/` (resources), as well as the TypeScript-specific docs in the parallel folders (if provided by HashiCorp).

   *This ensures you have the latest official descriptions, arguments, and attributes for every AWS resource and data source, which will be used in the next steps.*

## 4. Extracting AWS Resources and Data Sources from the New Provider

Now that the new provider is installed and documentation is updated, you need to extract a comprehensive list of all AWS **resources** and **data sources** (with their schemas and docs) for TerraTitan to use. TerraTitan provides a script (internally referred to as `parse-jsii.ts`) to generate a JSON catalog of all provider entities:

1. **Use CDKTF's JSII to load the provider schema**: TerraTitan leverages the JSII metadata included in `@cdktf/provider-aws` to introspect all resources. The `parse-jsii.ts` script uses *jsii-reflect* to load the AWS provider library and enumerate all resource and data source classes. It combines the information from the JSII assembly (which includes class definitions and any inline docs) with the Markdown documentation you fetched in the previous step. This yields a rich JSON representation of every resource type.

   > **Note:** As an alternative, one could use the Terraform CLI to output provider schemas (e.g. running `terraform providers schema -json` after an init) to get a machine-readable schema. However, the Terraform CLI’s JSON schema output does *not* include documentation content, so the TerraTitan approach of merging with Markdown docs is preferred for full context.

2. **Run the parsing script to generate the resource list**: Execute the JSII parse script. If TerraTitan does not have a pre-defined package script for this, you can run it via the TypeScript executor. For example, using `tsx`:

   ```bash
   pnpm exec tsx apps/core/src/mastra/rag/parse-jsii.ts
   ```

   This will produce an output file (e.g., `output/aws-resources.json`) containing an array of all AWS resource and data source definitions with their metadata. Each entry typically includes:

   * The fully qualified name (`fqn`) and class name of the resource,
   * Documentation summary and category (from the provider docs),
   * The URL to the official doc page (for reference),
   * Properties/arguments (possibly aggregated as text),
   * Source file references.

   Ensure that this JSON includes new resources/data sources introduced in the latest provider version. (For example, if the new provider added `aws_new_service_xyz`, it should appear in the JSON now.)

   *If the TerraTitan `parse-jsii` script is not readily available or you prefer a manual approach, you could script a similar extraction using the Terraform JSON schema:* for each resource in `all.json` from `terraform providers schema`, match it with the docs. However, since TerraTitan’s tooling is built for this, using the provided script is the most straightforward route.

## 5. Re-indexing the Updated Resources into the Vector Database

After extracting the resource list and documentation, the final step is to **embed these docs and index them** so that TerraTitan’s LLM workflows can retrieve relevant info via vector search. TerraTitan supports storing embeddings in a vector database – originally using a SaaS service (Upstash Vector), but you may also use a local Postgres database with pgvector. We’ll cover both.

### 5.1 Embedding Resource Data and Updating the Index

First, generate embeddings for the updated resource set and index them:

1. **Prepare the embedding script**: TerraTitan provides scripts like `embed.ts` / `embed-summary.ts` to handle embedding. These read the `aws-resources.json` generated earlier, chunk the content, call the OpenAI API for embeddings, and upsert them into the vector store. The difference is:

   * `embed.ts` – embeds both the **Summary** and **Arguments** sections of each resource’s docs (more comprehensive, but larger embeddings per resource).
   * `embed-summary.ts` – embeds only the **Summary** section for each resource (lighter and was the “final iteration” approach).

   For updating to a new provider, using the summary-only approach might be sufficient and faster (and was considered the final iteration in TerraTitan). Ensure your `.env` has the OpenAI API key set, since the script will call OpenAI’s embedding model.

2. **Configure access to the vector DB**: If using Upstash (or another SaaS vector DB), ensure the environment variables for its URL and access token are set (e.g., `UPSTASH_URL_provider-aws-resources` and `UPSTASH_TOKEN_provider-aws-resources`, depending on how `getUpstashConfig` is implemented). You should also have created the index in your Upstash account beforehand (with the appropriate dimension matching the embedding model, typically 1536 for `text-embedding-ada-002`). The TerraTitan code expects a pre-created index (e.g., `provider-aws-resources-large`). Upstash’s vector service is pay-as-you-go, so be mindful of usage costs.

   If using a local Postgres instead, ensure the database is running and available (we cover setup below). In that case, you would need to modify the embedding script to use a Postgres vector store client or write a separate script to insert embeddings into Postgres (since the provided script is wired for Upstash by default).

3. **Run the embedding process**: Execute the embed script to index the new data. For example:

   ```bash
   pnpm exec tsx apps/core/src/mastra/rag/embed-summary.ts
   ```

   This will load the JSON, prepare each resource’s text (combining name, summary description, and possibly arguments) and call the OpenAI embedding API. Embeddings are batched (e.g., 300 at a time) to respect rate limits. After each batch, the script **upserts** the vectors into the configured store along with metadata (like resource name and a reference URL).

   If configured for Upstash, it will directly call Upstash’s REST API to store the vectors (using the Upstash Vector client). If you’ve set up Postgres instead, you should adapt this step: one approach is to modify the script to use a PG client (e.g., using `pg` Node library) and insert into a table with a `VECTOR` column, or run the embedding in memory (the script prints out or saves embeddings to disk as well) and then manually import them into Postgres.

4. **Verify the indexing**: Once the script finishes, verify that the vector index contains the new embeddings. For Upstash, you can use their dashboard or API to confirm the number of vectors in the index increased. For Postgres, you can query the table (e.g., `SELECT COUNT(*) FROM embeddings;`) to ensure records were inserted. At this point, TerraTitan’s retrieval components (RAG pipeline) can use the updated vectors when converting CDK constructs to Terraform CDK, ensuring the LLM has the latest resource info to draw from.
