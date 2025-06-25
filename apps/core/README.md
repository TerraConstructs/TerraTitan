# Core

TerraTitan Core Workflows using Mastra.

[mastra](https://mastra.ai) is an open-source TypeScript LLM Agent framework

## Prerequisites

1. **Set up the OpenAI & Gemini API:**

   - If you're new to the OpenAI API, [sign up for an account](https://platform.openai.com/signup).
   - Follow the [Quickstart](https://platform.openai.com/docs/quickstart) to retrieve your API key.

   For Gemini

   - Follow the Gemini API [Quickstart](https://ai.google.dev/gemini-api/docs/quickstart?lang=node)
   - Get API Key from [aistudio - apikey](https://aistudio.google.com/apikey)

1. **Set the OpenAI API Key:**

   Set the `OPENAI_API_KEY` environment variable in the project: Create a `.env` file at the root of the project and add the following line (see `.env.exmaple` for reference):

   ```bash
   OPENAI_API_KEY=<your_api_key>
   ```

1. **Set the Gemini API Key:**

   Set the `GOOGLE_GENERATIVE_AI_API_KEY` environment variable in the project `.env` file:

   ```bash
   GOOGLE_GENERATIVE_AI_API_KEY=<your_api_key>
   ```

1. **To install dependencies:**

   ```bash
   pnpm install
   ```

1. **To build local dependencies:**

   ```bash
   # -w = run from workspace root
   pnpm -w build
   ```

1. **To install tfdocs2json CLI:**

   ```bash
   cd ../../data/scripts/tfdocs2json
   make install
   ```

   > `tfdocs2json` is used by the LLM workflow to extract terraform-provider schema with docs from markdown

1. **To run Mastra playground:**

   ```bash
   pnpm dev
   ```

1. **To Programmatically start the workflows defined under `src/index.ts`:**

   ```bash
   pnpm start
   ```

This project follows [mastra project structure](https://mastra.ai/docs/getting-started/project-structure)

## Upstash Vector

Retrieval Augmented Prompt generation with Vector embeddings.

> [!TIP]
> If you are part of the team, request to be added to the TerraTitan team on [Upstash](https://upstash.com/). This will give access to shared indices of vector embeddings.

To build and use your own embeddings:

1. Create [Upstash](https://upstash.com/) account
1. Create a Vector index
1. Update `getUpstashConfig` in [mastra/util/rag.ts](./src/mastra/util/rag.ts) to use your Upstash Index and Token.

Refer to [RAG Readme](./src/mastra/rag/README.md) for mor information on how Upstash index was populated and can be queried.
