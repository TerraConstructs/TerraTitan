import { Mastra } from '@mastra/core';
import { createLogger, LogLevel } from '@mastra/core/logger';
import { LibSQLStore } from '@mastra/libsql';
import { OtelTransport } from 'mastra-otel-logger';

// import workflows
import { conversionWorkflow } from './workflows/conversion.js';
import { sourceConversionWorkflow } from './workflows/poc-source-convert.js';
import { unitConversionWorkflow } from './workflows/poc-unit-convert.js';
import { parentWorkflow } from './workflows/poc-dynamic.js';
import { cdktfRefWorkflow } from './workflows/poc-cdktf-ref.js';
import { upstreamWorkflow } from './workflows/poc-ensure-upstream.js';
import { vNextConversionWorkflow } from './workflows/vnext.js';
import { batchConversionWorkflow } from './workflows/poc-batch-source-convert.js';
import { batchTestConversionWorkflow } from './workflows/poc-batch-test-convert.js';
// import { sourceConverter } from './agents/source-converter/index.js';

export const mastra: Mastra = new Mastra({
  // TODO: sourceConverter should extend Agent?
  // agents: { sourceConverter },
  // ensure storage config for suspend/resume workflows
  storage: new LibSQLStore({
    url: 'file:.mastra/mastra.db',
  }),
  logger: createLogger({
    name: 'Mastra',
    level: LogLevel.INFO,
    transports: {
      otel: new OtelTransport({
        loggerName: 'mastra-cli',
        loggerVersion: '0.1.0',
      }),
    },
  }),
  telemetry: {
    serviceName: 'terratitan-cli',
    enabled: true,
    export: {
      type: 'otlp',
      protocol: 'http',
    },
  },
  workflows: {
    conversionWorkflow,
    // PoC workflows
    sourceConversionWorkflow,
    unitConversionWorkflow,
    parentWorkflow,
    cdktfRefWorkflow,
    upstreamWorkflow,
    batchConversionWorkflow,
    batchTestConversionWorkflow,
  },
  vnext_workflows: {
    vNextConversionWorkflow,
  },
});
