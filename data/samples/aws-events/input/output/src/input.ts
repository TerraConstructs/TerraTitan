import {
  DefaultTokenResolver,
  IResolvable,
  IResolveContext,
  Lazy,
  StringConcat,
  Token,
  Tokenization,
} from "cdktf";
import { IRule } from "./rule-ref";
import { AwsStack } from "../aws-stack";

/**
 * The input to send to the event target
 */
export abstract class RuleTargetInput {
  /**
   * Pass text to the event target
   *
   * May contain strings returned by `EventField.from()` to substitute in parts of the
   * matched event.
   *
   * The Rule Target input value will be a single string: the string you pass
   * here.  Do not use this method to pass a complex value like a JSON object to
   * a Rule Target.  Use `RuleTargetInput.fromObject()` instead.
   */
  public static fromText(text: string): RuleTargetInput {
    return new FieldAwareEventInput(text, InputType.Text);
  }

  /**
   * Pass text to the event target, splitting on newlines.
   *
   * This is only useful when passing to a target that does not
   * take a single argument.
   *
   * May contain strings returned by `EventField.from()` to substitute in parts
   * of the matched event.
   */
  public static fromMultilineText(text: string): RuleTargetInput {
    return new FieldAwareEventInput(text, InputType.Multiline);
  }

  /**
   * Pass a JSON object to the event target
   *
   * May contain strings returned by `EventField.from()` to substitute in parts of the
   * matched event.
   */
  public static fromObject(obj: any): RuleTargetInput {
    return new FieldAwareEventInput(obj, InputType.Object);
  }

  /**
   * Take the event target input from a path in the event JSON
   */
  public static fromEventPath(path: string): RuleTargetInput {
    return new LiteralEventInput({ inputPath: path });
  }

  protected constructor() {}

  /**
   * Return the input properties for this input object
   */
  public abstract bind(rule: IRule): RuleTargetInputProperties;
}

/**
 * The input properties for an event target
 */
export interface RuleTargetInputProperties {
  /**
   * Literal input to the target service (must be valid JSON)
   *
   * @default - input for the event target. If the input contains a paths map
   *   values wil be extracted from event and inserted into the `inputTemplate`.
   */
  readonly input?: string;

  /**
   * JsonPath to take input from the input event
   *
   * @default - None. The entire matched event is passed as input
   */
  readonly inputPath?: string;

  /**
   * Input template to insert paths map into
   *
   * @default - None.
   */
  readonly inputTemplate?: string;

  /**
   * Paths map to extract values from event and insert into `inputTemplate`
   *
   * @default - No values extracted from event.
   */
  readonly inputPathsMap?: { [key: string]: string };
}

/**
 * Event Input that is directly derived from the construct
 */
class LiteralEventInput extends RuleTargetInput {
  constructor(private readonly props: RuleTargetInputProperties) {
    super();
  }

  /**
   * Return the input properties for this input object
   */
  public bind(_rule: IRule): RuleTargetInputProperties {
    return this.props;
  }
}

/**
 * Input object that can contain field replacements
 *
 * Evaluation is done in the bind() method because token resolution
 * requires access to the construct tree.
 *
 * Multiple tokens that use the same path will use the same substitution
 * key.
 *
 * One weird exception: if we're in object context, we MUST skip the quotes
 * around the placeholder. I assume this is so once a trivial string replace is
 * done later on by EventBridge, numbers are still numbers.
 *
 * So in string context:
 *
 *    "this is a string with a <field>"
 *
 * But in object context:
 *
 *    "{ \"this is the\": <field> }"
 *
 * To achieve the latter, we postprocess the JSON string to remove the surrounding
 * quotes by using a string replace.
 */
class FieldAwareEventInput extends RuleTargetInput {
  constructor(
    private readonly input: any,
    private readonly inputType: InputType
  ) {
    super();
  }

  public bind(rule: IRule): RuleTargetInputProperties {
    let fieldCounter = 0;
    const pathToKey = new Map<string, string>();
    const inputPathsMap: { [key: string]: string } = {};

    function keyForField(f: EventField) {
      const existing = pathToKey.get(f.path);
      if (existing !== undefined) {
        return existing;
      }

      fieldCounter += 1;
      const key = f.displayHint || `f${fieldCounter}`;
      pathToKey.set(f.path, key);
      return key;
    }

    class EventFieldReplacer extends DefaultTokenResolver {
      constructor() {
        super(new StringConcat());
      }

      public resolveToken(t: Token, _context: IResolveContext) {
        if (!isEventField(t)) {
          return Token.asString(t);
        }

        const key = keyForField(t);
        if (inputPathsMap[key] && inputPathsMap[key] !== t.path) {
          throw new Error(
            `Single key '${key}' is used for two different JSON paths: '${t.path}' and '${inputPathsMap[key]}'`
          );
        }
        inputPathsMap[key] = t.path;

        return `<${key}>`;
      }
    }

    const stack = AwsStack.ofAwsConstruct(rule);
    let resolved: string;
    if (this.inputType === InputType.Multiline) {
      // JSONify individual lines
      resolved = Tokenization.resolve(this.input, {
        scope: rule,
        resolver: new EventFieldReplacer(),
      });
      resolved = resolved.split("\n").map(stack.toJsonString).join("\n");
    } else {
      resolved = stack.toJsonString(
        Tokenization.resolve(this.input, {
          scope: rule,
          resolver: new EventFieldReplacer(),
        })
      );
    }

    const keys = Object.keys(inputPathsMap);

    if (keys.length === 0) {
      // Nothing special, just return 'input'
      return { input: resolved };
    }

    return {
      inputTemplate: this.unquoteKeyPlaceholders(resolved, keys),
      inputPathsMap,
    };
  }

  /**
   * Removing surrounding quotes from any object placeholders
   * when key is the lone value.
   *
   * Those have been put there by JSON.stringify(), but we need to
   * remove them.
   *
   * Do not remove quotes when the key is part of a larger string.
   *
   * Valid: { "data": "Some string with \"quotes\"<key>" } // key will be string
   * Valid: { "data": <key> } // Key could be number, bool, obj, or string
   */
  private unquoteKeyPlaceholders(sub: string, keys: string[]) {
    if (this.inputType !== InputType.Object) {
      return sub;
    }

    return Lazy.stringValue({
      produce: (ctx: IResolveContext) =>
        Token.asString(deepUnquote(ctx.resolve(sub))),
    });

    function deepUnquote(resolved: any): any {
      if (Array.isArray(resolved)) {
        return resolved.map(deepUnquote);
      } else if (typeof resolved === "object" && resolved !== null) {
        for (const [key, value] of Object.entries(resolved)) {
          resolved[key] = deepUnquote(value);
        }
        return resolved;
      } else if (typeof resolved === "string") {
        return keys.reduce(
          (r, key) =>
            r.replace(new RegExp(`(?<!\\\\)\"\<${key}\>\"`, "g"), `<${key}>`),
          resolved
        );
      }
      return resolved;
    }
  }
}

/**
 * Represents a field in the event pattern
 */
export class EventField implements IResolvable {
  /**
   * Extract the event ID from the event
   */
  public static get eventId(): string {
    return this.fromPath("$.id");
  }

  /**
   * Extract the detail type from the event
   */
  public static get detailType(): string {
    return this.fromPath("$.detail-type");
  }

  /**
   * Extract the source from the event
   */
  public static get source(): string {
    return this.fromPath("$.source");
  }

  /**
   * Extract the account from the event
   */
  public static get account(): string {
    return this.fromPath("$.account");
  }

  /**
   * Extract the time from the event
   */
  public static get time(): string {
    return this.fromPath("$.time");
  }

  /**
   * Extract the region from the event
   */
  public static get region(): string {
    return this.fromPath("$.region");
  }

  /**
   * Extract a custom JSON path from the event
   */
  public static fromPath(path: string): string {
    return new EventField(path).toString();
  }

  /**
   * Human readable display hint about the event pattern
   */
  public readonly displayHint: string;
  public readonly creationStack: string[];

  /**
   *
   * @param path the path to a field in the event pattern
   */
  private constructor(public readonly path: string) {
    this.displayHint = this.path
      .replace(/^[^a-zA-Z0-9_-]+/, "")
      .replace(/[^a-zA-Z0-9_-]/g, "-");
    Object.defineProperty(this, EVENT_FIELD_SYMBOL, { value: true });

    // TODO: Implement stack traces
    // ref: https://github.com/hashicorp/terraform-cdk/blob/v0.20.7/packages/cdktf/lib/app.ts#L111
    // ref: https://github.com/hashicorp/terraform-cdk/blob/v0.20.9/packages/cdktf/lib/tokens/private/stack-trace.ts#L9
    // ref: https://github.com/aws/aws-cdk/blob/v2.143.0/packages/aws-cdk-lib/core/lib/stack-trace.ts#L22
    this.creationStack = ["stack traces disabled"];
  }

  public resolve(_ctx: IResolveContext): any {
    return this.path;
  }

  public toString() {
    return Token.asString(this, { displayHint: this.displayHint });
  }

  /**
   * Convert the path to the field in the event pattern to JSON
   */
  public toJSON() {
    return `<path:${this.path}>`;
  }
}

enum InputType {
  Object,
  Text,
  Multiline,
}

function isEventField(x: any): x is EventField {
  return EVENT_FIELD_SYMBOL in x;
}

const EVENT_FIELD_SYMBOL = Symbol.for(
  "terraconstructs/lib/aws/notify.EventField"
);
