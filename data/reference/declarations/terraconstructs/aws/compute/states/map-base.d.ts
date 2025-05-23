import { Construct } from "constructs";
import { State } from "./state";
import { Chain } from "../chain";
import { IChainable, INextable } from "../types";
/**
 * Properties for defining a Map state
 */
export interface MapBaseProps {
    /**
     * Optional name for this state
     *
     * @default - The construct ID will be used as state name
     */
    readonly stateName?: string;
    /**
     * An optional description for this state
     *
     * @default No comment
     */
    readonly comment?: string;
    /**
     * JSONPath expression to select part of the state to be the input to this state.
     *
     * May also be the special value JsonPath.DISCARD, which will cause the effective
     * input to be the empty object {}.
     *
     * @default $
     */
    readonly inputPath?: string;
    /**
     * JSONPath expression to select part of the state to be the output to this state.
     *
     * May also be the special value JsonPath.DISCARD, which will cause the effective
     * output to be the empty object {}.
     *
     * @default $
     */
    readonly outputPath?: string;
    /**
     * JSONPath expression to indicate where to inject the state's output
     *
     * May also be the special value JsonPath.DISCARD, which will cause the state's
     * input to become its output.
     *
     * @default $
     */
    readonly resultPath?: string;
    /**
     * JSONPath expression to select the array to iterate over
     *
     * @default $
     */
    readonly itemsPath?: string;
    /**
     * The JSON that you want to override your default iteration input (mutually exclusive  with `parameters`).
     *
     * @see
     * https://docs.aws.amazon.com/step-functions/latest/dg/input-output-itemselector.html
     *
     * @default $
     */
    readonly itemSelector?: {
        [key: string]: any;
    };
    /**
     * The JSON that will replace the state's raw result and become the effective
     * result before ResultPath is applied.
     *
     * You can use ResultSelector to create a payload with values that are static
     * or selected from the state's raw result.
     *
     * @see
     * https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-resultselector
     *
     * @default - None
     */
    readonly resultSelector?: {
        [key: string]: any;
    };
    /**
     * MaxConcurrency
     *
     * An upper bound on the number of iterations you want running at once.
     *
     * @see
     * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-asl-use-map-state-inline.html#map-state-inline-additional-fields
     *
     * @default - full concurrency
     */
    readonly maxConcurrency?: number;
    /**
     * MaxConcurrencyPath
     *
     * A JsonPath that specifies the maximum concurrency dynamically from the state input.
     *
     * @see
     * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-asl-use-map-state-inline.html#map-state-inline-additional-fields
     *
     * @default - full concurrency
     */
    readonly maxConcurrencyPath?: string;
}
/**
 * Returns true if the value passed is a positive integer
 * @param value the value to validate
 */
export declare const isPositiveInteger: (value: number) => boolean;
/**
 * Define a Map state in the state machine
 *
 * A `Map` state can be used to run a set of steps for each element of an input array.
 * A Map state will execute the same steps for multiple entries of an array in the state input.
 *
 * While the Parallel state executes multiple branches of steps using the same input, a Map state
 * will execute the same steps for multiple entries of an array in the state input.
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-map-state.html
 */
export declare abstract class MapBase extends State implements INextable {
    readonly endStates: INextable[];
    private readonly maxConcurrency?;
    private readonly maxConcurrencyPath?;
    protected readonly itemsPath?: string;
    protected readonly itemSelector?: {
        [key: string]: any;
    };
    constructor(scope: Construct, id: string, props?: MapBaseProps);
    /**
     * Continue normal execution with the given state
     */
    next(next: IChainable): Chain;
    /**
     * Return the Amazon States Language object for this state
     */
    toStateJson(): object;
    /**
     * Validate this state
     */
    protected validateState(): string[];
    private renderItemsPath;
    /**
     * Render ItemSelector in ASL JSON format
     */
    private renderItemSelector;
}
