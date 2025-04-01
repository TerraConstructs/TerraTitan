import { Metric, MetricResult } from '@mastra/core/metric';
import { type LanguageModel } from '@mastra/core/llm';
import { SourceConverterJudge } from './judge.js';

export interface MetricResultWithInfo extends MetricResult {
  info: {
    reason: string;
  };
}
 
export class SourceConverterMetric extends Metric {
  private judge: SourceConverterJudge;
  constructor(model: LanguageModel) {
    super();
 
    this.judge = new SourceConverterJudge(model);
  }
 
  async measure(output: string): Promise<MetricResultWithInfo> {
    const { usesConstructs } = await this.judge.evaluate(output);
    const score = await this.calculateScore(usesConstructs);
    const reason = await this.judge.getReason({usesConstructs});
 
    return {
      score,
      info: {
        reason,
      },
    };
  }
 
  async calculateScore(usesConstructs: boolean): Promise<number> {
    return usesConstructs ? 1 : 0;
  }
}