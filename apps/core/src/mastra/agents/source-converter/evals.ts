import { openai } from "@ai-sdk/openai";
import { PromptAlignmentMetric } from "@mastra/evals/llm";
import { generateInstructions } from "./prompts.js";
 
const model = openai("gpt-4o-mini");
 
const instructions = generateInstructions();

const metric = new PromptAlignmentMetric(model, {
  instructions,
  scale: 1,
});
 
const result = await metric.measure(
  // TODO: figure this one out
  "describe the weather",
  "The sun is shining. Clouds float in the sky. A gentle breeze blows.",
);
 
console.log(result.score); // Alignment score from 0-1
console.log(result.info.reason); // Explanation of the score