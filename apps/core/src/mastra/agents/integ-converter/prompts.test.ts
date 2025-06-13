import { expect, test, describe } from 'vitest';
import { Sample, type ConversionRequestProps } from '../../util/index.js';

import { generateInstructions, generateSampleInput, generateSampleResponse, generateNewPrompt } from './prompts.js';

const eventBus = Sample.fromName('aws-events/event-bus/integ');
describe('generateInstructions', () => {
  test('instructions snapshot', () => {
    expect(generateInstructions()).toMatchSnapshot();
  });
});
describe('generateSampleInput', () => {
  test('sample input prompt snapshot', () => {
    expect(generateSampleInput(eventBus)).toMatchSnapshot();
  });
});
describe('generateSampleResponse', () => {
  test('sample model response snapshot', () => {
    expect(generateSampleResponse(eventBus)).toMatchSnapshot();
  });
});
describe('generateNewPrompt', () => {
  test('new prompt snapshot', () => {
    const requestProps: ConversionRequestProps = {
      inputFile: eventBus.example.inputFile,
      inputRefFiles: eventBus.example.inputRefFiles,
      outputRefFiles: eventBus.example.outputRefFiles,
    };
    expect(generateNewPrompt(requestProps)).toMatchSnapshot();
  });
});
