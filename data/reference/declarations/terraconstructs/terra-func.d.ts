import { TerraformVariableConfig, Fn as tfFn } from "cdktf";
import { Construct } from "constructs";
/**
 * TerraConstructs helper functions.
 */
export declare class Fn extends tfFn {
    /**
     * Split a string token into a token list of string values.
     *
     * Specify the location of splits with a delimiter such as ',' (a comma).
     * Renders to the `split` intrinsic terraform function.
     *
     * Lists with unknown lengths (default)
     * -------------------------------------
     *
     * Since this function is used to work with deploy-time values, if `assumedLength`
     * is not given the CDK cannot know the length of the resulting list at synthesis time.
     * This brings the following restrictions:
     *
     * - You must use `Fn.element(list, i)` to pick elements out of the list (you must not use
     *   `list[i]`).
     * - You cannot add elements to the list, remove elements from the list,
     *   combine two such lists together, or take a slice of the list.
     * - You cannot pass the list to constructs that do any of the above.
     *
     * The only valid operation with such a tokenized list is to pass it unmodified to a
     * Terraform Resource construct.
     *
     * Lists with assumed lengths
     * --------------------------
     *
     * Pass `assumedLength` if you know the length of the list that will be
     * produced by splitting. The actual list length at deploy time may be
     * *longer* than the number you pass, but not *shorter*.
     *
     * The returned list will look like:
     *
     * ```
     * [Fn.element(split, 0), Fn.element(split, 1), Fn.element(split, 2), ...]
     * ```
     *
     * The restrictions from the section "Lists with unknown lengths" will now be lifted,
     * at the expense of having to know and fix the length of the list.
     *
     * @param delimiter A string value that determines where the source string is divided.
     * @param source The string value that you want to split.
     * @param assumedLength The length of the list that will be produced by splitting
     * @returns a token represented as a string array
     */
    static splitv2(delimiter: string, source: string, assumedLength?: number): string[];
    /**
     * Similar to Fn.element, but with a shortcut if list is not unresolved
     *
     * The intrinsic function ``element`` returns a single object from a list of objects by index.
     * @param index The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
     * @param array The list of objects to select from. This list must not be null, nor can it have null entries.
     * @returns a token represented as a string
     */
    static select(index: number, array: string[]): string;
    /**
     * Given an url, parse the domain name
     * @param url the url to parse
     */
    static parseDomainName(url: string): string;
    /**
     * The intrinsic function ``Fn::ImportValue`` returns the value of an output
     * exported by another stack. You typically use this function to create
     * cross-stack references. In the following example template snippets, Stack A
     * exports VPC security group values and Stack B imports them.
     * @param id The stack output value that you want to import.
     * @returns a token represented as a string
     */
    static importValue(scope: Construct, id: string, options?: TerraformVariableConfig): string;
    /**
     * Like `Fn.importValue`, but import a list with a known length
     *
     * If you explicitly want a list with an unknown length, call `Fn.splitv2(',',
     * Fn.importValue(scope, exportName))`. See the documentation of `Fn.splitv2` to read
     * more about the limitations of using lists of unknown length.
     *
     * `Fn.importListValue(scope, exportName, assumedLength)` is the same as
     * `Fn.split(',', Fn.importValue(scope, exportName), assumedLength)`,
     * but easier to read and impossible to forget to pass `assumedLength`.
     */
    static importListValue(scope: Construct, sharedValueToImport: string, assumedLength: number, delimiter?: string): string[];
    /**
     * The intrinsic function `Fn::Length` returns the number of elements within an array
     * or an intrinsic function that returns an array.
     *
     * @param array The array you want to return the number of elements from
     */
    static len(array: any): number;
    /**
     * {@link https://developer.hashicorp.com/terraform/language/functions/join join} produces a string by concatenating together all elements of a given list of strings with the given delimiter.
     *
     * If any of the values are unresolved, the intrinsic function will be used.
     * if the list has only one element, the element will be returned.
     * if the list has more than one element, the elements will be joined with the delimiter.
     * @param {string} delimiter
     * @param {Array<string>} values
     */
    static join(delimiter: string, values: string[]): string;
}
