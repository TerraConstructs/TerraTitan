import path from "path";
import { encoding_for_model } from "tiktoken";
import { OPENAI_MODEL } from "./models";

/**
 * Calculate the length of Tokens for an OpenAI Model
 *
 * using the TikToken library
 *
 * Ref: https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken
 */
export function calculateTokens(
  model: OPENAI_MODEL,
  ...prompts: string[]
): number[] {
  const enc = encoding_for_model(model);
  const lengths = prompts.map((p) => enc.encode(p).length);
  enc.free();
  return lengths;
}

/**
 * Get the base name of a typescript declaration file
 */
export function dtsBaseName(file: string): string {
  return path.basename(file, ".d.ts");
}

/**
 * Get the base name of a CDKTF ref file:
 *
 * for example:
 * "data/constructs/index.d.ts" => "constructs"
 */
export function cdktfBaseName(file: string): string {
  return path.basename(path.dirname(file));
}

export function forHuman(num: number | undefined, padding: number = 7): string {
  if (num === undefined) {
    return "N/A".padStart(padding, " ");
  }
  return num.toLocaleString().padStart(padding, " ");
}

export function getDateSuffix(): string {
  const now = new Date();
  return now
    .toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
    .replace(/[/:,\s]/g, "");
}

/**
 * Assuming ChatGPT writes code between two delimiters
 *
 * @deprecated use structured outputs instead
 */
export function extractCode(text: string): string | null {
  const delimiter =
    "---------------------------------------------------------------";
  const parts = text.split(delimiter);
  if (parts.length >= 3) {
    return parts[1]!.trim();
  }
  return null;
}
