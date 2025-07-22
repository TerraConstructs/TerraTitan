# TerraTitan

<img src="docs/terratitan.webp" alt="TerraTitan Logo" width="300px">

> Convert AWS CDK Constructs to Terraform-CDK using LLM

TerraTitan is an LLM-powered workflow that converts AWS CDK constructs to Terraform CDK (CDKTF). This tool is a major component used to generate and maintain the [TerraConstructs](https://github.com/TerraConstructs/base) library, providing reliable and trustworthy infrastructure components for everyone to use.

[Introduction Slides](https://gamma.app/docs/AI-Applied-Porting-libraries-with-RAG-l4khbikxmv3phrx)

## Goals

- Automated conversion of AWS CDK constructs to Terraform CDK
- Generate code for:
  - [x] Source Code (AWSCDK > CDKTF)
  - [x] Unit Tests (Jest)
  - [ ] Integration Tests (terratest / golang)
- CLI to manage LLM Code generation workflow
- Observability using [signoz](https://signoz.io/)

## Repo Layout

```console
.
├── apps
│  └── core                     # Core TerraTitan app
├── data
│  ├── reference                # Reference Data for LLM Prompting
│  │  ├── declarations          # Typescript declaration files
│  │  │   ├── aws-cdk-lib
│  │  │   ├── provider-aws
│  │  │   └── terraconstructs
│  │  ├── docs                  # Terraform Provider Docs (markdown)
│  │  │   ├── provider-aws
│  │  │   └── typescript
│  │  └── merged                # Typescript declaration merged with Provider Docs
│  │      └── provider-aws
│  ├── samples                  # AWS CDK -> CDKTF Sample conversions ( for few shot prompting + validation Evals)
│  │  ├── aws-events
│  │  ├── aws-iam
│  │  ├── aws-kinesis
│  │  ├── aws-sns
│  │  ├── aws-sqs
│  │  └── README.md
│  └── scripts                  # PoC Scripts to  ...
│     ├── claude-cli            # ... Anthropic prompt benchmarking (using bun.sh)
│     ├── mastra                # ... Mastra PoC workspaces (using NodeJS + pnpm)
│     ├── merge-docs            # ... merge Markdown docs into CDKTF provider declaration files (using bun.sh)
│     ├── openai-cli            # ... OpenAI/Gemini prompt benchmarking (using bun.sh)
│     ├── research-assitant     # ... demo mastra workflow (using bun.sh)
│     ├── tf-doc-scrape.sh      # ... download copy of Terraform Docs (markdown)
│     ├── tfdocs2json           # ... Export terraform-provider-xx schema and combine with Terraform Docs
│     └── validate-file         # ... run tsc syntax check on sourceFile
└── packages
   ├── eslint-config
   ├── typescript-config
   └── vitest-config
```

## Pnpm Worskpaces and Turbo Repo

This repository uses [pnpm](https://pnpm.io/) workspaces and [turbo](https://turbo.build) to easily manage multiple apps and libraries (as a monorepo).

### Getting Started

- Install all dependencies using [mise](https://mise.jdx.dev/getting-started.html) (or manually)

  ```bash
  mise install
  ```

  see [mise](mise.toml) for a list of required toolkits.

- Enable [corepack](https://github.com/nodejs/corepack?tab=readme-ov-file#default-installs):

  ```bash
  corepack enable
  ```

- Install repo-wide dependencies using [pnpm](https://pnpm.io/):

  ```bash
  pnpm install
  ```

- Build & Install the `tfdocs2json` binary (see requirements in mise.toml):

  ```bash
  cd data/scripts/tfdocs2json
  make install
  ```

### Run tasks

- `pnpm run test`: Runs the test in each package using Turborepo.
- `pnpm run view-report`: Collects coverage from each package and shows it in a merged report.
- `pnpm run build`: Runs build task
- `pnpm run repo-lint`: Lints repo-wide dependency versions

### Stand up Signoz

To stand up Signoz for observability, you can use the provided Docker Compose file:

```bash
cd signoz
./start.sh
```

## 📄 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Presented at DevOpsDay Singapore 2025 by Charles Martinot and Vincent De Smet
- Powered by [mastra.ai](https://mastra.ai)
