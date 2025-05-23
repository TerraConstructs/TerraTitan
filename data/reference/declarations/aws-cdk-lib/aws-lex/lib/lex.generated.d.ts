import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * > Amazon Lex V2 is the only supported version in AWS CloudFormation .
 *
 * Specifies an Amazon Lex conversational bot.
 *
 * You must configure an intent based on the `AMAZON.FallbackIntent` built-in intent. If you don't add one, creating the bot will fail.
 *
 * @cloudformationResource AWS::Lex::Bot
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html
 */
export declare class CfnBot extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBot from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBot;
    /**
     * The Amazon Resource Name (ARN) of the bot.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique identifier of the bot.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Indicates whether Amazon Lex V2 should automatically build the locales for the bot after a change.
     */
    autoBuildBotLocales?: boolean | cdk.IResolvable;
    /**
     * The Amazon S3 location of files used to import a bot.
     */
    botFileS3Location?: cdk.IResolvable | CfnBot.S3LocationProperty;
    /**
     * A list of locales for the bot.
     */
    botLocales?: Array<CfnBot.BotLocaleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A list of tags to add to the bot.
     */
    botTags?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
    /**
     * By default, data stored by Amazon Lex is encrypted.
     */
    dataPrivacy: any | cdk.IResolvable;
    /**
     * The description of the version.
     */
    description?: string;
    /**
     * The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot.
     */
    idleSessionTtlInSeconds: number;
    /**
     * The name of the bot locale.
     */
    name: string;
    /**
     * Parameter used to create a replication of the source bot in the secondary region.
     */
    replication?: cdk.IResolvable | CfnBot.ReplicationProperty;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used to build and run the bot.
     */
    roleArn: string;
    /**
     * Specifies configuration settings for the alias used to test the bot.
     */
    testBotAliasSettings?: cdk.IResolvable | CfnBot.TestBotAliasSettingsProperty;
    /**
     * A list of tags to add to the test alias for a bot.
     */
    testBotAliasTags?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBotProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBot {
    /**
     * Provides configuration information for a locale.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botlocale.html
     */
    interface BotLocaleProperty {
        /**
         * Specifies a custom vocabulary to use with a specific locale.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botlocale.html#cfn-lex-bot-botlocale-customvocabulary
         */
        readonly customVocabulary?: CfnBot.CustomVocabularyProperty | cdk.IResolvable;
        /**
         * A description of the bot locale.
         *
         * Use this to help identify the bot locale in lists.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botlocale.html#cfn-lex-bot-botlocale-description
         */
        readonly description?: string;
        /**
         * One or more intents defined for the locale.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botlocale.html#cfn-lex-bot-botlocale-intents
         */
        readonly intents?: Array<CfnBot.IntentProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The identifier of the language and locale that the bot will be used in.
         *
         * The string must match one of the supported locales.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botlocale.html#cfn-lex-bot-botlocale-localeid
         */
        readonly localeId: string;
        /**
         * Determines the threshold where Amazon Lex will insert the `AMAZON.FallbackIntent` , `AMAZON.KendraSearchIntent` , or both when returning alternative intents. You must configure an `AMAZON.FallbackIntent` . `AMAZON.KendraSearchIntent` is only inserted if it is configured for the bot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botlocale.html#cfn-lex-bot-botlocale-nluconfidencethreshold
         */
        readonly nluConfidenceThreshold: number;
        /**
         * One or more slot types defined for the locale.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botlocale.html#cfn-lex-bot-botlocale-slottypes
         */
        readonly slotTypes?: Array<cdk.IResolvable | CfnBot.SlotTypeProperty> | cdk.IResolvable;
        /**
         * Defines settings for using an Amazon Polly voice to communicate with a user.
         *
         * Valid values include:
         *
         * - `standard`
         * - `neural`
         * - `long-form`
         * - `generative`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botlocale.html#cfn-lex-bot-botlocale-voicesettings
         */
        readonly voiceSettings?: cdk.IResolvable | CfnBot.VoiceSettingsProperty;
    }
    /**
     * Specifies a custom vocabulary.
     *
     * A custom vocabulary is a list of words that you expect to be used during a conversation with your bot.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-customvocabulary.html
     */
    interface CustomVocabularyProperty {
        /**
         * Specifies a list of words that you expect to be used during a conversation with your bot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-customvocabulary.html#cfn-lex-bot-customvocabulary-customvocabularyitems
         */
        readonly customVocabularyItems: Array<CfnBot.CustomVocabularyItemProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Specifies an entry in a custom vocabulary.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-customvocabularyitem.html
     */
    interface CustomVocabularyItemProperty {
        /**
         * The DisplayAs value for the custom vocabulary item from the custom vocabulary list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-customvocabularyitem.html#cfn-lex-bot-customvocabularyitem-displayas
         */
        readonly displayAs?: string;
        /**
         * Specifies 1 - 4 words that should be recognized.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-customvocabularyitem.html#cfn-lex-bot-customvocabularyitem-phrase
         */
        readonly phrase: string;
        /**
         * Specifies the degree to which the phrase recognition is boosted.
         *
         * The default value is 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-customvocabularyitem.html#cfn-lex-bot-customvocabularyitem-weight
         */
        readonly weight?: number;
    }
    /**
     * Describes a slot type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottype.html
     */
    interface SlotTypeProperty {
        /**
         * A description of the slot type.
         *
         * Use the description to help identify the slot type in lists.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottype.html#cfn-lex-bot-slottype-description
         */
        readonly description?: string;
        /**
         * Sets the type of external information used to create the slot type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottype.html#cfn-lex-bot-slottype-externalsourcesetting
         */
        readonly externalSourceSetting?: CfnBot.ExternalSourceSettingProperty | cdk.IResolvable;
        /**
         * The name of the slot type.
         *
         * A slot type name must be unique withing the account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottype.html#cfn-lex-bot-slottype-name
         */
        readonly name: string;
        /**
         * The built-in slot type used as a parent of this slot type.
         *
         * When you define a parent slot type, the new slot type has the configuration of the parent lot type.
         *
         * Only `AMAZON.AlphaNumeric` is supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottype.html#cfn-lex-bot-slottype-parentslottypesignature
         */
        readonly parentSlotTypeSignature?: string;
        /**
         * A list of SlotTypeValue objects that defines the values that the slot type can take.
         *
         * Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for the slot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottype.html#cfn-lex-bot-slottype-slottypevalues
         */
        readonly slotTypeValues?: Array<cdk.IResolvable | CfnBot.SlotTypeValueProperty> | cdk.IResolvable;
        /**
         * Determines the slot resolution strategy that Amazon Lex uses to return slot type values.
         *
         * The field can be set to one of the following values:
         *
         * - `ORIGINAL_VALUE` - Returns the value entered by the user, if the user value is similar to the slot value.
         * - `TOP_RESOLUTION` - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned.
         *
         * If you don't specify the `valueSelectionStrategy` , the default is `ORIGINAL_VALUE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottype.html#cfn-lex-bot-slottype-valueselectionsetting
         */
        readonly valueSelectionSetting?: cdk.IResolvable | CfnBot.SlotValueSelectionSettingProperty;
    }
    /**
     * Each slot type can have a set of values.
     *
     * Each `SlotTypeValue` represents a value that the slot type can take.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottypevalue.html
     */
    interface SlotTypeValueProperty {
        /**
         * The value of the slot type entry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottypevalue.html#cfn-lex-bot-slottypevalue-samplevalue
         */
        readonly sampleValue: cdk.IResolvable | CfnBot.SampleValueProperty;
        /**
         * Additional values related to the slot type entry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottypevalue.html#cfn-lex-bot-slottypevalue-synonyms
         */
        readonly synonyms?: Array<cdk.IResolvable | CfnBot.SampleValueProperty> | cdk.IResolvable;
    }
    /**
     * Defines one of the values for a slot type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-samplevalue.html
     */
    interface SampleValueProperty {
        /**
         * The value that can be used for a slot type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-samplevalue.html#cfn-lex-bot-samplevalue-value
         */
        readonly value: string;
    }
    /**
     * Contains settings used by Amazon Lex to select a slot value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueselectionsetting.html
     */
    interface SlotValueSelectionSettingProperty {
        /**
         * Provides settings that enable advanced recognition settings for slot values.
         *
         * You can use this to enable using slot values as a custom vocabulary for recognizing user utterances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueselectionsetting.html#cfn-lex-bot-slotvalueselectionsetting-advancedrecognitionsetting
         */
        readonly advancedRecognitionSetting?: CfnBot.AdvancedRecognitionSettingProperty | cdk.IResolvable;
        /**
         * A regular expression used to validate the value of a slot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueselectionsetting.html#cfn-lex-bot-slotvalueselectionsetting-regexfilter
         */
        readonly regexFilter?: cdk.IResolvable | CfnBot.SlotValueRegexFilterProperty;
        /**
         * Determines the slot resolution strategy that Amazon Lex uses to return slot type values.
         *
         * The field can be set to one of the following values:
         *
         * - `ORIGINAL_VALUE` - Returns the value entered by the user, if the user value is similar to the slot value.
         * - `TOP_RESOLUTION` - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned.
         *
         * If you don't specify the `valueSelectionStrategy` , the default is `ORIGINAL_VALUE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueselectionsetting.html#cfn-lex-bot-slotvalueselectionsetting-resolutionstrategy
         */
        readonly resolutionStrategy: string;
    }
    /**
     * Provides settings that enable advanced recognition settings for slot values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-advancedrecognitionsetting.html
     */
    interface AdvancedRecognitionSettingProperty {
        /**
         * Enables using the slot values as a custom vocabulary for recognizing user utterances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-advancedrecognitionsetting.html#cfn-lex-bot-advancedrecognitionsetting-audiorecognitionstrategy
         */
        readonly audioRecognitionStrategy?: string;
    }
    /**
     * Provides a regular expression used to validate the value of a slot.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueregexfilter.html
     */
    interface SlotValueRegexFilterProperty {
        /**
         * A regular expression used to validate the value of a slot.
         *
         * Use a standard regular expression. Amazon Lex supports the following characters in the regular expression:
         *
         * - A-Z, a-z
         * - 0-9
         * - Unicode characters ("\⁠u<Unicode>")
         *
         * Represent Unicode characters with four digits, for example "\⁠u0041" or "\⁠u005A".
         *
         * The following regular expression operators are not supported:
         *
         * - Infinite repeaters: *, +, or {x,} with no upper bound.
         * - Wild card (.)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueregexfilter.html#cfn-lex-bot-slotvalueregexfilter-pattern
         */
        readonly pattern: string;
    }
    /**
     * Provides information about the external source of the slot type's definition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-externalsourcesetting.html
     */
    interface ExternalSourceSettingProperty {
        /**
         * Settings required for a slot type based on a grammar that you provide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-externalsourcesetting.html#cfn-lex-bot-externalsourcesetting-grammarslottypesetting
         */
        readonly grammarSlotTypeSetting?: CfnBot.GrammarSlotTypeSettingProperty | cdk.IResolvable;
    }
    /**
     * Settings requried for a slot type based on a grammar that you provide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-grammarslottypesetting.html
     */
    interface GrammarSlotTypeSettingProperty {
        /**
         * The source of the grammar used to create the slot type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-grammarslottypesetting.html#cfn-lex-bot-grammarslottypesetting-source
         */
        readonly source?: CfnBot.GrammarSlotTypeSourceProperty | cdk.IResolvable;
    }
    /**
     * Describes the Amazon S3 bucket name and location for the grammar that is the source for the slot type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-grammarslottypesource.html
     */
    interface GrammarSlotTypeSourceProperty {
        /**
         * The AWS KMS key required to decrypt the contents of the grammar, if any.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-grammarslottypesource.html#cfn-lex-bot-grammarslottypesource-kmskeyarn
         */
        readonly kmsKeyArn?: string;
        /**
         * The name of the Amazon S3 bucket that contains the grammar source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-grammarslottypesource.html#cfn-lex-bot-grammarslottypesource-s3bucketname
         */
        readonly s3BucketName: string;
        /**
         * The path to the grammar in the Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-grammarslottypesource.html#cfn-lex-bot-grammarslottypesource-s3objectkey
         */
        readonly s3ObjectKey: string;
    }
    /**
     * Represents an action that the user wants to perform.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html
     */
    interface IntentProperty {
        /**
         * A description of the intent.
         *
         * Use the description to help identify the intent in lists.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html#cfn-lex-bot-intent-description
         */
        readonly description?: string;
        /**
         * Specifies that Amazon Lex invokes the alias Lambda function for each user input.
         *
         * You can invoke this Lambda function to personalize user interaction.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html#cfn-lex-bot-intent-dialogcodehook
         */
        readonly dialogCodeHook?: CfnBot.DialogCodeHookSettingProperty | cdk.IResolvable;
        /**
         * Specifies that Amazon Lex invokes the alias Lambda function when the intent is ready for fulfillment.
         *
         * You can invoke this function to complete the bot's transaction with the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html#cfn-lex-bot-intent-fulfillmentcodehook
         */
        readonly fulfillmentCodeHook?: CfnBot.FulfillmentCodeHookSettingProperty | cdk.IResolvable;
        /**
         * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html#cfn-lex-bot-intent-initialresponsesetting
         */
        readonly initialResponseSetting?: CfnBot.InitialResponseSettingProperty | cdk.IResolvable;
        /**
         * A list of contexts that must be active for this intent to be considered by Amazon Lex .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html#cfn-lex-bot-intent-inputcontexts
         */
        readonly inputContexts?: Array<CfnBot.InputContextProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Sets the response that Amazon Lex sends to the user when the intent is closed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html#cfn-lex-bot-intent-intentclosingsetting
         */
        readonly intentClosingSetting?: CfnBot.IntentClosingSettingProperty | cdk.IResolvable;
        /**
         * Provides prompts that Amazon Lex sends to the user to confirm the completion of an intent.
         *
         * If the user answers "no," the settings contain a statement that is sent to the user to end the intent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html#cfn-lex-bot-intent-intentconfirmationsetting
         */
        readonly intentConfirmationSetting?: CfnBot.IntentConfirmationSettingProperty | cdk.IResolvable;
        /**
         * Provides configuration information for the `AMAZON.KendraSearchIntent` intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html#cfn-lex-bot-intent-kendraconfiguration
         */
        readonly kendraConfiguration?: cdk.IResolvable | CfnBot.KendraConfigurationProperty;
        /**
         * The name of the intent.
         *
         * Intent names must be unique within the locale that contains the intent and can't match the name of any built-in intent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html#cfn-lex-bot-intent-name
         */
        readonly name: string;
        /**
         * A list of contexts that the intent activates when it is fulfilled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html#cfn-lex-bot-intent-outputcontexts
         */
        readonly outputContexts?: Array<cdk.IResolvable | CfnBot.OutputContextProperty> | cdk.IResolvable;
        /**
         * A unique identifier for the built-in intent to base this intent on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html#cfn-lex-bot-intent-parentintentsignature
         */
        readonly parentIntentSignature?: string;
        /**
         * A list of utterances that a user might say to signal the intent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html#cfn-lex-bot-intent-sampleutterances
         */
        readonly sampleUtterances?: Array<cdk.IResolvable | CfnBot.SampleUtteranceProperty> | cdk.IResolvable;
        /**
         * Indicates the priority for slots.
         *
         * Amazon Lex prompts the user for slot values in priority order.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html#cfn-lex-bot-intent-slotpriorities
         */
        readonly slotPriorities?: Array<cdk.IResolvable | CfnBot.SlotPriorityProperty> | cdk.IResolvable;
        /**
         * A list of slots that the intent requires for fulfillment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html#cfn-lex-bot-intent-slots
         */
        readonly slots?: Array<cdk.IResolvable | CfnBot.SlotProperty> | cdk.IResolvable;
    }
    /**
     * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-initialresponsesetting.html
     */
    interface InitialResponseSettingProperty {
        /**
         * Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-initialresponsesetting.html#cfn-lex-bot-initialresponsesetting-codehook
         */
        readonly codeHook?: CfnBot.DialogCodeHookInvocationSettingProperty | cdk.IResolvable;
        /**
         * Provides a list of conditional branches.
         *
         * Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-initialresponsesetting.html#cfn-lex-bot-initialresponsesetting-conditional
         */
        readonly conditional?: CfnBot.ConditionalSpecificationProperty | cdk.IResolvable;
        /**
         * Specifies a list of message groups that Amazon Lex uses to respond the user input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-initialresponsesetting.html#cfn-lex-bot-initialresponsesetting-initialresponse
         */
        readonly initialResponse?: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
        /**
         * The next step in the conversation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-initialresponsesetting.html#cfn-lex-bot-initialresponsesetting-nextstep
         */
        readonly nextStep?: CfnBot.DialogStateProperty | cdk.IResolvable;
    }
    /**
     * Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogcodehookinvocationsetting.html
     */
    interface DialogCodeHookInvocationSettingProperty {
        /**
         * Indicates whether a Lambda function should be invoked for the dialog.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogcodehookinvocationsetting.html#cfn-lex-bot-dialogcodehookinvocationsetting-enablecodehookinvocation
         */
        readonly enableCodeHookInvocation: boolean | cdk.IResolvable;
        /**
         * A label that indicates the dialog step from which the dialog code hook is happening.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogcodehookinvocationsetting.html#cfn-lex-bot-dialogcodehookinvocationsetting-invocationlabel
         */
        readonly invocationLabel?: string;
        /**
         * Determines whether a dialog code hook is used when the intent is activated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogcodehookinvocationsetting.html#cfn-lex-bot-dialogcodehookinvocationsetting-isactive
         */
        readonly isActive: boolean | cdk.IResolvable;
        /**
         * Contains the responses and actions that Amazon Lex takes after the Lambda function is complete.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogcodehookinvocationsetting.html#cfn-lex-bot-dialogcodehookinvocationsetting-postcodehookspecification
         */
        readonly postCodeHookSpecification: cdk.IResolvable | CfnBot.PostDialogCodeHookInvocationSpecificationProperty;
    }
    /**
     * Specifies next steps to run after the dialog code hook finishes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postdialogcodehookinvocationspecification.html
     */
    interface PostDialogCodeHookInvocationSpecificationProperty {
        /**
         * A list of conditional branches to evaluate after the dialog code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postdialogcodehookinvocationspecification.html#cfn-lex-bot-postdialogcodehookinvocationspecification-failureconditional
         */
        readonly failureConditional?: CfnBot.ConditionalSpecificationProperty | cdk.IResolvable;
        /**
         * Specifies the next step the bot runs after the dialog code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postdialogcodehookinvocationspecification.html#cfn-lex-bot-postdialogcodehookinvocationspecification-failurenextstep
         */
        readonly failureNextStep?: CfnBot.DialogStateProperty | cdk.IResolvable;
        /**
         * Specifies a list of message groups that Amazon Lex uses to respond the user input when the code hook fails.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postdialogcodehookinvocationspecification.html#cfn-lex-bot-postdialogcodehookinvocationspecification-failureresponse
         */
        readonly failureResponse?: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
        /**
         * A list of conditional branches to evaluate after the dialog code hook finishes successfully.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postdialogcodehookinvocationspecification.html#cfn-lex-bot-postdialogcodehookinvocationspecification-successconditional
         */
        readonly successConditional?: CfnBot.ConditionalSpecificationProperty | cdk.IResolvable;
        /**
         * Specifics the next step the bot runs after the dialog code hook finishes successfully.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postdialogcodehookinvocationspecification.html#cfn-lex-bot-postdialogcodehookinvocationspecification-successnextstep
         */
        readonly successNextStep?: CfnBot.DialogStateProperty | cdk.IResolvable;
        /**
         * Specifies a list of message groups that Amazon Lex uses to respond when the code hook succeeds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postdialogcodehookinvocationspecification.html#cfn-lex-bot-postdialogcodehookinvocationspecification-successresponse
         */
        readonly successResponse?: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
        /**
         * A list of conditional branches to evaluate if the code hook times out.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postdialogcodehookinvocationspecification.html#cfn-lex-bot-postdialogcodehookinvocationspecification-timeoutconditional
         */
        readonly timeoutConditional?: CfnBot.ConditionalSpecificationProperty | cdk.IResolvable;
        /**
         * Specifies the next step that the bot runs when the code hook times out.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postdialogcodehookinvocationspecification.html#cfn-lex-bot-postdialogcodehookinvocationspecification-timeoutnextstep
         */
        readonly timeoutNextStep?: CfnBot.DialogStateProperty | cdk.IResolvable;
        /**
         * Specifies a list of message groups that Amazon Lex uses to respond to the user input when the code hook times out.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postdialogcodehookinvocationspecification.html#cfn-lex-bot-postdialogcodehookinvocationspecification-timeoutresponse
         */
        readonly timeoutResponse?: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
    }
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-responsespecification.html
     */
    interface ResponseSpecificationProperty {
        /**
         * Indicates whether the user can interrupt a speech response from Amazon Lex.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-responsespecification.html#cfn-lex-bot-responsespecification-allowinterrupt
         */
        readonly allowInterrupt?: boolean | cdk.IResolvable;
        /**
         * A collection of responses that Amazon Lex can send to the user.
         *
         * Amazon Lex chooses the actual response to send at runtime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-responsespecification.html#cfn-lex-bot-responsespecification-messagegroupslist
         */
        readonly messageGroupsList: Array<cdk.IResolvable | CfnBot.MessageGroupProperty> | cdk.IResolvable;
    }
    /**
     * Provides one or more messages that Amazon Lex should send to the user.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-messagegroup.html
     */
    interface MessageGroupProperty {
        /**
         * The primary message that Amazon Lex should send to the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-messagegroup.html#cfn-lex-bot-messagegroup-message
         */
        readonly message: cdk.IResolvable | CfnBot.MessageProperty;
        /**
         * Message variations to send to the user.
         *
         * When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-messagegroup.html#cfn-lex-bot-messagegroup-variations
         */
        readonly variations?: Array<cdk.IResolvable | CfnBot.MessageProperty> | cdk.IResolvable;
    }
    /**
     * The object that provides message text and its type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-message.html
     */
    interface MessageProperty {
        /**
         * A message in a custom format defined by the client application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-message.html#cfn-lex-bot-message-custompayload
         */
        readonly customPayload?: CfnBot.CustomPayloadProperty | cdk.IResolvable;
        /**
         * A message that defines a response card that the client application can show to the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-message.html#cfn-lex-bot-message-imageresponsecard
         */
        readonly imageResponseCard?: CfnBot.ImageResponseCardProperty | cdk.IResolvable;
        /**
         * A message in plain text format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-message.html#cfn-lex-bot-message-plaintextmessage
         */
        readonly plainTextMessage?: cdk.IResolvable | CfnBot.PlainTextMessageProperty;
        /**
         * A message in Speech Synthesis Markup Language (SSML).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-message.html#cfn-lex-bot-message-ssmlmessage
         */
        readonly ssmlMessage?: cdk.IResolvable | CfnBot.SSMLMessageProperty;
    }
    /**
     * A custom response string that Amazon Lex sends to your application.
     *
     * You define the content and structure the string.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-custompayload.html
     */
    interface CustomPayloadProperty {
        /**
         * The string that is sent to your application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-custompayload.html#cfn-lex-bot-custompayload-value
         */
        readonly value: string;
    }
    /**
     * A card that is shown to the user by a messaging platform.
     *
     * You define the contents of the card, the card is displayed by the platform.
     *
     * When you use a response card, the response from the user is constrained to the text associated with a button on the card.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-imageresponsecard.html
     */
    interface ImageResponseCardProperty {
        /**
         * A list of buttons that should be displayed on the response card.
         *
         * The arrangement of the buttons is determined by the platform that displays the button.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-imageresponsecard.html#cfn-lex-bot-imageresponsecard-buttons
         */
        readonly buttons?: Array<CfnBot.ButtonProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The URL of an image to display on the response card.
         *
         * The image URL must be publicly available so that the platform displaying the response card has access to the image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-imageresponsecard.html#cfn-lex-bot-imageresponsecard-imageurl
         */
        readonly imageUrl?: string;
        /**
         * The subtitle to display on the response card.
         *
         * The format of the subtitle is determined by the platform displaying the response card.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-imageresponsecard.html#cfn-lex-bot-imageresponsecard-subtitle
         */
        readonly subtitle?: string;
        /**
         * The title to display on the response card.
         *
         * The format of the title is determined by the platform displaying the response card.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-imageresponsecard.html#cfn-lex-bot-imageresponsecard-title
         */
        readonly title: string;
    }
    /**
     * Describes a button to use on a response card used to gather slot values from a user.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-button.html
     */
    interface ButtonProperty {
        /**
         * The text that appears on the button.
         *
         * Use this to tell the user what value is returned when they choose this button.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-button.html#cfn-lex-bot-button-text
         */
        readonly text: string;
        /**
         * The value returned to Amazon Lex when the user chooses this button.
         *
         * This must be one of the slot values configured for the slot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-button.html#cfn-lex-bot-button-value
         */
        readonly value: string;
    }
    /**
     * Defines an ASCII text message to send to the user.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-plaintextmessage.html
     */
    interface PlainTextMessageProperty {
        /**
         * The message to send to the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-plaintextmessage.html#cfn-lex-bot-plaintextmessage-value
         */
        readonly value: string;
    }
    /**
     * Defines a Speech Synthesis Markup Language (SSML) prompt.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-ssmlmessage.html
     */
    interface SSMLMessageProperty {
        /**
         * The SSML text that defines the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-ssmlmessage.html#cfn-lex-bot-ssmlmessage-value
         */
        readonly value: string;
    }
    /**
     * Provides a list of conditional branches.
     *
     * Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalspecification.html
     */
    interface ConditionalSpecificationProperty {
        /**
         * A list of conditional branches.
         *
         * A conditional branch is made up of a condition, a response and a next step. The response and next step are executed when the condition is true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalspecification.html#cfn-lex-bot-conditionalspecification-conditionalbranches
         */
        readonly conditionalBranches: Array<CfnBot.ConditionalBranchProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The conditional branch that should be followed when the conditions for other branches are not satisfied.
         *
         * A conditional branch is made up of a condition, a response and a next step.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalspecification.html#cfn-lex-bot-conditionalspecification-defaultbranch
         */
        readonly defaultBranch: CfnBot.DefaultConditionalBranchProperty | cdk.IResolvable;
        /**
         * Determines whether a conditional branch is active.
         *
         * When `IsActive` is false, the conditions are not evaluated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalspecification.html#cfn-lex-bot-conditionalspecification-isactive
         */
        readonly isActive: boolean | cdk.IResolvable;
    }
    /**
     * A set of actions that Amazon Lex should run if none of the other conditions are met.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-defaultconditionalbranch.html
     */
    interface DefaultConditionalBranchProperty {
        /**
         * The next step in the conversation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-defaultconditionalbranch.html#cfn-lex-bot-defaultconditionalbranch-nextstep
         */
        readonly nextStep?: CfnBot.DialogStateProperty | cdk.IResolvable;
        /**
         * Specifies a list of message groups that Amazon Lex uses to respond the user input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-defaultconditionalbranch.html#cfn-lex-bot-defaultconditionalbranch-response
         */
        readonly response?: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
    }
    /**
     * The current state of the conversation with the user.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogstate.html
     */
    interface DialogStateProperty {
        /**
         * Defines the action that the bot executes at runtime when the conversation reaches this step.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogstate.html#cfn-lex-bot-dialogstate-dialogaction
         */
        readonly dialogAction?: CfnBot.DialogActionProperty | cdk.IResolvable;
        /**
         * Override settings to configure the intent state.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogstate.html#cfn-lex-bot-dialogstate-intent
         */
        readonly intent?: CfnBot.IntentOverrideProperty | cdk.IResolvable;
        /**
         * Map of key/value pairs representing session-specific context information.
         *
         * It contains application information passed between Amazon Lex and a client application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogstate.html#cfn-lex-bot-dialogstate-sessionattributes
         */
        readonly sessionAttributes?: Array<cdk.IResolvable | CfnBot.SessionAttributeProperty> | cdk.IResolvable;
    }
    /**
     * Defines the action that the bot executes at runtime when the conversation reaches this step.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogaction.html
     */
    interface DialogActionProperty {
        /**
         * If the dialog action is `ElicitSlot` , defines the slot to elicit from the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogaction.html#cfn-lex-bot-dialogaction-slottoelicit
         */
        readonly slotToElicit?: string;
        /**
         * When true the next message for the intent is not used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogaction.html#cfn-lex-bot-dialogaction-suppressnextmessage
         */
        readonly suppressNextMessage?: boolean | cdk.IResolvable;
        /**
         * The action that the bot should execute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogaction.html#cfn-lex-bot-dialogaction-type
         */
        readonly type: string;
    }
    /**
     * A key/value pair representing session-specific context information.
     *
     * It contains application information passed between Amazon Lex V2 and a client application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sessionattribute.html
     */
    interface SessionAttributeProperty {
        /**
         * The name of the session attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sessionattribute.html#cfn-lex-bot-sessionattribute-key
         */
        readonly key: string;
        /**
         * The session-specific context information for the session attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sessionattribute.html#cfn-lex-bot-sessionattribute-value
         */
        readonly value?: string;
    }
    /**
     * Override settings to configure the intent state.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentoverride.html
     */
    interface IntentOverrideProperty {
        /**
         * The name of the intent.
         *
         * Only required when you're switching intents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentoverride.html#cfn-lex-bot-intentoverride-name
         */
        readonly name?: string;
        /**
         * A map of all of the slot value overrides for the intent.
         *
         * The name of the slot maps to the value of the slot. Slots that are not included in the map aren't overridden.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentoverride.html#cfn-lex-bot-intentoverride-slots
         */
        readonly slots?: Array<cdk.IResolvable | CfnBot.SlotValueOverrideMapProperty> | cdk.IResolvable;
    }
    /**
     * Maps a slot name to the [SlotValueOverride](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_SlotValueOverride.html) object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueoverridemap.html
     */
    interface SlotValueOverrideMapProperty {
        /**
         * The name of the slot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueoverridemap.html#cfn-lex-bot-slotvalueoverridemap-slotname
         */
        readonly slotName?: string;
        /**
         * The SlotValueOverride object to which the slot name will be mapped.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueoverridemap.html#cfn-lex-bot-slotvalueoverridemap-slotvalueoverride
         */
        readonly slotValueOverride?: cdk.IResolvable | CfnBot.SlotValueOverrideProperty;
    }
    /**
     * The slot values that Amazon Lex uses when it sets slot values in a dialog step.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueoverride.html
     */
    interface SlotValueOverrideProperty {
        /**
         * When the shape value is `List` , it indicates that the `values` field contains a list of slot values.
         *
         * When the value is `Scalar` , it indicates that the `value` field contains a single value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueoverride.html#cfn-lex-bot-slotvalueoverride-shape
         */
        readonly shape?: string;
        /**
         * The current value of the slot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueoverride.html#cfn-lex-bot-slotvalueoverride-value
         */
        readonly value?: cdk.IResolvable | CfnBot.SlotValueProperty;
        /**
         * A list of one or more values that the user provided for the slot.
         *
         * For example, for a slot that elicits pizza toppings, the values might be "pepperoni" and "pineapple."
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueoverride.html#cfn-lex-bot-slotvalueoverride-values
         */
        readonly values?: Array<cdk.IResolvable | CfnBot.SlotValueOverrideProperty> | cdk.IResolvable;
    }
    /**
     * The value to set in a slot.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalue.html
     */
    interface SlotValueProperty {
        /**
         * The value that Amazon Lex determines for the slot.
         *
         * The actual value depends on the setting of the value selection strategy for the bot. You can choose to use the value entered by the user, or you can have Amazon Lex choose the first value in the `resolvedValues` list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalue.html#cfn-lex-bot-slotvalue-interpretedvalue
         */
        readonly interpretedValue?: string;
    }
    /**
     * A set of actions that Amazon Lex should run if the condition is matched.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalbranch.html
     */
    interface ConditionalBranchProperty {
        /**
         * Contains the expression to evaluate.
         *
         * If the condition is true, the branch's actions are taken.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalbranch.html#cfn-lex-bot-conditionalbranch-condition
         */
        readonly condition: CfnBot.ConditionProperty | cdk.IResolvable;
        /**
         * The name of the branch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalbranch.html#cfn-lex-bot-conditionalbranch-name
         */
        readonly name: string;
        /**
         * The next step in the conversation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalbranch.html#cfn-lex-bot-conditionalbranch-nextstep
         */
        readonly nextStep: CfnBot.DialogStateProperty | cdk.IResolvable;
        /**
         * Specifies a list of message groups that Amazon Lex uses to respond the user input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalbranch.html#cfn-lex-bot-conditionalbranch-response
         */
        readonly response?: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
    }
    /**
     * Provides an expression that evaluates to true or false.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-condition.html
     */
    interface ConditionProperty {
        /**
         * The expression string that is evaluated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-condition.html#cfn-lex-bot-condition-expressionstring
         */
        readonly expressionString: string;
    }
    /**
     * Determines if a Lambda function should be invoked for a specific intent.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentcodehooksetting.html
     */
    interface FulfillmentCodeHookSettingProperty {
        /**
         * Indicates whether a Lambda function should be invoked to fulfill a specific intent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentcodehooksetting.html#cfn-lex-bot-fulfillmentcodehooksetting-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * Provides settings for update messages sent to the user for long-running Lambda fulfillment functions.
         *
         * Fulfillment updates can be used only with streaming conversations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentcodehooksetting.html#cfn-lex-bot-fulfillmentcodehooksetting-fulfillmentupdatesspecification
         */
        readonly fulfillmentUpdatesSpecification?: CfnBot.FulfillmentUpdatesSpecificationProperty | cdk.IResolvable;
        /**
         * Determines whether the fulfillment code hook is used.
         *
         * When `active` is false, the code hook doesn't run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentcodehooksetting.html#cfn-lex-bot-fulfillmentcodehooksetting-isactive
         */
        readonly isActive?: boolean | cdk.IResolvable;
        /**
         * Provides settings for messages sent to the user for after the Lambda fulfillment function completes.
         *
         * Post-fulfillment messages can be sent for both streaming and non-streaming conversations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentcodehooksetting.html#cfn-lex-bot-fulfillmentcodehooksetting-postfulfillmentstatusspecification
         */
        readonly postFulfillmentStatusSpecification?: cdk.IResolvable | CfnBot.PostFulfillmentStatusSpecificationProperty;
    }
    /**
     * Provides a setting that determines whether the post-fulfillment response is sent to the user.
     *
     * For more information, see [](https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postfulfillmentstatusspecification.html
     */
    interface PostFulfillmentStatusSpecificationProperty {
        /**
         * A list of conditional branches to evaluate after the fulfillment code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postfulfillmentstatusspecification.html#cfn-lex-bot-postfulfillmentstatusspecification-failureconditional
         */
        readonly failureConditional?: CfnBot.ConditionalSpecificationProperty | cdk.IResolvable;
        /**
         * Specifies the next step the bot runs after the fulfillment code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postfulfillmentstatusspecification.html#cfn-lex-bot-postfulfillmentstatusspecification-failurenextstep
         */
        readonly failureNextStep?: CfnBot.DialogStateProperty | cdk.IResolvable;
        /**
         * Specifies a list of message groups that Amazon Lex uses to respond when fulfillment isn't successful.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postfulfillmentstatusspecification.html#cfn-lex-bot-postfulfillmentstatusspecification-failureresponse
         */
        readonly failureResponse?: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
        /**
         * A list of conditional branches to evaluate after the fulfillment code hook finishes successfully.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postfulfillmentstatusspecification.html#cfn-lex-bot-postfulfillmentstatusspecification-successconditional
         */
        readonly successConditional?: CfnBot.ConditionalSpecificationProperty | cdk.IResolvable;
        /**
         * Specifies the next step in the conversation that Amazon Lex invokes when the fulfillment code hook completes successfully.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postfulfillmentstatusspecification.html#cfn-lex-bot-postfulfillmentstatusspecification-successnextstep
         */
        readonly successNextStep?: CfnBot.DialogStateProperty | cdk.IResolvable;
        /**
         * Specifies a list of message groups that Amazon Lex uses to respond when the fulfillment is successful.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postfulfillmentstatusspecification.html#cfn-lex-bot-postfulfillmentstatusspecification-successresponse
         */
        readonly successResponse?: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
        /**
         * A list of conditional branches to evaluate if the fulfillment code hook times out.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postfulfillmentstatusspecification.html#cfn-lex-bot-postfulfillmentstatusspecification-timeoutconditional
         */
        readonly timeoutConditional?: CfnBot.ConditionalSpecificationProperty | cdk.IResolvable;
        /**
         * Specifies the next step that the bot runs when the fulfillment code hook times out.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postfulfillmentstatusspecification.html#cfn-lex-bot-postfulfillmentstatusspecification-timeoutnextstep
         */
        readonly timeoutNextStep?: CfnBot.DialogStateProperty | cdk.IResolvable;
        /**
         * Specifies a list of message groups that Amazon Lex uses to respond when fulfillment isn't completed within the timeout period.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postfulfillmentstatusspecification.html#cfn-lex-bot-postfulfillmentstatusspecification-timeoutresponse
         */
        readonly timeoutResponse?: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
    }
    /**
     * Provides information for updating the user on the progress of fulfilling an intent.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdatesspecification.html
     */
    interface FulfillmentUpdatesSpecificationProperty {
        /**
         * Determines whether fulfillment updates are sent to the user. When this field is true, updates are sent.
         *
         * If the `active` field is set to true, the `startResponse` , `updateResponse` , and `timeoutInSeconds` fields are required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdatesspecification.html#cfn-lex-bot-fulfillmentupdatesspecification-active
         */
        readonly active: boolean | cdk.IResolvable;
        /**
         * Provides configuration information for the message sent to users when the fulfillment Lambda functions starts running.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdatesspecification.html#cfn-lex-bot-fulfillmentupdatesspecification-startresponse
         */
        readonly startResponse?: CfnBot.FulfillmentStartResponseSpecificationProperty | cdk.IResolvable;
        /**
         * The length of time that the fulfillment Lambda function should run before it times out.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdatesspecification.html#cfn-lex-bot-fulfillmentupdatesspecification-timeoutinseconds
         */
        readonly timeoutInSeconds?: number;
        /**
         * Provides configuration information for messages sent periodically to the user while the fulfillment Lambda function is running.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdatesspecification.html#cfn-lex-bot-fulfillmentupdatesspecification-updateresponse
         */
        readonly updateResponse?: CfnBot.FulfillmentUpdateResponseSpecificationProperty | cdk.IResolvable;
    }
    /**
     * Provides settings for a message that is sent periodically to the user while a fulfillment Lambda function is running.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdateresponsespecification.html
     */
    interface FulfillmentUpdateResponseSpecificationProperty {
        /**
         * Determines whether the user can interrupt an update message while it is playing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdateresponsespecification.html#cfn-lex-bot-fulfillmentupdateresponsespecification-allowinterrupt
         */
        readonly allowInterrupt?: boolean | cdk.IResolvable;
        /**
         * The frequency that a message is sent to the user.
         *
         * When the period ends, Amazon Lex chooses a message from the message groups and plays it to the user. If the fulfillment Lambda returns before the first period ends, an update message is not played to the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdateresponsespecification.html#cfn-lex-bot-fulfillmentupdateresponsespecification-frequencyinseconds
         */
        readonly frequencyInSeconds: number;
        /**
         * 1 - 5 message groups that contain update messages.
         *
         * Amazon Lex chooses one of the messages to play to the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdateresponsespecification.html#cfn-lex-bot-fulfillmentupdateresponsespecification-messagegroups
         */
        readonly messageGroups: Array<cdk.IResolvable | CfnBot.MessageGroupProperty> | cdk.IResolvable;
    }
    /**
     * Provides settings for a message that is sent to the user when a fulfillment Lambda function starts running.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentstartresponsespecification.html
     */
    interface FulfillmentStartResponseSpecificationProperty {
        /**
         * Determines whether the user can interrupt the start message while it is playing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentstartresponsespecification.html#cfn-lex-bot-fulfillmentstartresponsespecification-allowinterrupt
         */
        readonly allowInterrupt?: boolean | cdk.IResolvable;
        /**
         * The delay between when the Lambda fulfillment function starts running and the start message is played.
         *
         * If the Lambda function returns before the delay is over, the start message isn't played.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentstartresponsespecification.html#cfn-lex-bot-fulfillmentstartresponsespecification-delayinseconds
         */
        readonly delayInSeconds: number;
        /**
         * 1 - 5 message groups that contain start messages.
         *
         * Amazon Lex chooses one of the messages to play to the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentstartresponsespecification.html#cfn-lex-bot-fulfillmentstartresponsespecification-messagegroups
         */
        readonly messageGroups: Array<cdk.IResolvable | CfnBot.MessageGroupProperty> | cdk.IResolvable;
    }
    /**
     * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html
     */
    interface IntentConfirmationSettingProperty {
        /**
         * The `DialogCodeHookInvocationSetting` object associated with intent's confirmation step.
         *
         * The dialog code hook is triggered based on these invocation settings when the confirmation next step or declination next step or failure next step is `InvokeDialogCodeHook` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html#cfn-lex-bot-intentconfirmationsetting-codehook
         */
        readonly codeHook?: CfnBot.DialogCodeHookInvocationSettingProperty | cdk.IResolvable;
        /**
         * A list of conditional branches to evaluate after the intent is closed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html#cfn-lex-bot-intentconfirmationsetting-confirmationconditional
         */
        readonly confirmationConditional?: CfnBot.ConditionalSpecificationProperty | cdk.IResolvable;
        /**
         * Specifies the next step that the bot executes when the customer confirms the intent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html#cfn-lex-bot-intentconfirmationsetting-confirmationnextstep
         */
        readonly confirmationNextStep?: CfnBot.DialogStateProperty | cdk.IResolvable;
        /**
         * Specifies a list of message groups that Amazon Lex uses to respond the user input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html#cfn-lex-bot-intentconfirmationsetting-confirmationresponse
         */
        readonly confirmationResponse?: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
        /**
         * A list of conditional branches to evaluate after the intent is declined.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html#cfn-lex-bot-intentconfirmationsetting-declinationconditional
         */
        readonly declinationConditional?: CfnBot.ConditionalSpecificationProperty | cdk.IResolvable;
        /**
         * Specifies the next step that the bot executes when the customer declines the intent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html#cfn-lex-bot-intentconfirmationsetting-declinationnextstep
         */
        readonly declinationNextStep?: CfnBot.DialogStateProperty | cdk.IResolvable;
        /**
         * When the user answers "no" to the question defined in `promptSpecification` , Amazon Lex responds with this response to acknowledge that the intent was canceled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html#cfn-lex-bot-intentconfirmationsetting-declinationresponse
         */
        readonly declinationResponse?: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
        /**
         * The `DialogCodeHookInvocationSetting` used when the code hook is invoked during confirmation prompt retries.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html#cfn-lex-bot-intentconfirmationsetting-elicitationcodehook
         */
        readonly elicitationCodeHook?: CfnBot.ElicitationCodeHookInvocationSettingProperty | cdk.IResolvable;
        /**
         * Provides a list of conditional branches.
         *
         * Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html#cfn-lex-bot-intentconfirmationsetting-failureconditional
         */
        readonly failureConditional?: CfnBot.ConditionalSpecificationProperty | cdk.IResolvable;
        /**
         * The next step to take in the conversation if the confirmation step fails.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html#cfn-lex-bot-intentconfirmationsetting-failurenextstep
         */
        readonly failureNextStep?: CfnBot.DialogStateProperty | cdk.IResolvable;
        /**
         * Specifies a list of message groups that Amazon Lex uses to respond the user input when the intent confirmation fails.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html#cfn-lex-bot-intentconfirmationsetting-failureresponse
         */
        readonly failureResponse?: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
        /**
         * Specifies whether the intent's confirmation is sent to the user.
         *
         * When this field is false, confirmation and declination responses aren't sent. If the `IsActive` field isn't specified, the default is true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html#cfn-lex-bot-intentconfirmationsetting-isactive
         */
        readonly isActive?: boolean | cdk.IResolvable;
        /**
         * Prompts the user to confirm the intent. This question should have a yes or no answer.
         *
         * Amazon Lex uses this prompt to ensure that the user acknowledges that the intent is ready for fulfillment. For example, with the `OrderPizza` intent, you might want to confirm that the order is correct before placing it. For other intents, such as intents that simply respond to user questions, you might not need to ask the user for confirmation before providing the information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html#cfn-lex-bot-intentconfirmationsetting-promptspecification
         */
        readonly promptSpecification: cdk.IResolvable | CfnBot.PromptSpecificationProperty;
    }
    /**
     * Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptspecification.html
     */
    interface PromptSpecificationProperty {
        /**
         * Indicates whether the user can interrupt a speech prompt from the bot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptspecification.html#cfn-lex-bot-promptspecification-allowinterrupt
         */
        readonly allowInterrupt?: boolean | cdk.IResolvable;
        /**
         * The maximum number of times the bot tries to elicit a response from the user using this prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptspecification.html#cfn-lex-bot-promptspecification-maxretries
         */
        readonly maxRetries: number;
        /**
         * A collection of messages that Amazon Lex can send to the user.
         *
         * Amazon Lex chooses the actual message to send at runtime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptspecification.html#cfn-lex-bot-promptspecification-messagegroupslist
         */
        readonly messageGroupsList: Array<cdk.IResolvable | CfnBot.MessageGroupProperty> | cdk.IResolvable;
        /**
         * Indicates how a message is selected from a message group among retries.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptspecification.html#cfn-lex-bot-promptspecification-messageselectionstrategy
         */
        readonly messageSelectionStrategy?: string;
        /**
         * Specifies the advanced settings on each attempt of the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptspecification.html#cfn-lex-bot-promptspecification-promptattemptsspecification
         */
        readonly promptAttemptsSpecification?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnBot.PromptAttemptSpecificationProperty>;
    }
    /**
     * Specifies the settings on a prompt attempt.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptattemptspecification.html
     */
    interface PromptAttemptSpecificationProperty {
        /**
         * Indicates the allowed input types of the prompt attempt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptattemptspecification.html#cfn-lex-bot-promptattemptspecification-allowedinputtypes
         */
        readonly allowedInputTypes: CfnBot.AllowedInputTypesProperty | cdk.IResolvable;
        /**
         * Indicates whether the user can interrupt a speech prompt attempt from the bot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptattemptspecification.html#cfn-lex-bot-promptattemptspecification-allowinterrupt
         */
        readonly allowInterrupt?: boolean | cdk.IResolvable;
        /**
         * Specifies the settings on audio and DTMF input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptattemptspecification.html#cfn-lex-bot-promptattemptspecification-audioanddtmfinputspecification
         */
        readonly audioAndDtmfInputSpecification?: CfnBot.AudioAndDTMFInputSpecificationProperty | cdk.IResolvable;
        /**
         * Specifies the settings on text input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptattemptspecification.html#cfn-lex-bot-promptattemptspecification-textinputspecification
         */
        readonly textInputSpecification?: cdk.IResolvable | CfnBot.TextInputSpecificationProperty;
    }
    /**
     * Specifies the text input specifications.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textinputspecification.html
     */
    interface TextInputSpecificationProperty {
        /**
         * Time for which a bot waits before re-prompting a customer for text input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textinputspecification.html#cfn-lex-bot-textinputspecification-starttimeoutms
         */
        readonly startTimeoutMs: number;
    }
    /**
     * Specifies the allowed input types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-allowedinputtypes.html
     */
    interface AllowedInputTypesProperty {
        /**
         * Indicates whether audio input is allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-allowedinputtypes.html#cfn-lex-bot-allowedinputtypes-allowaudioinput
         */
        readonly allowAudioInput: boolean | cdk.IResolvable;
        /**
         * Indicates whether DTMF input is allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-allowedinputtypes.html#cfn-lex-bot-allowedinputtypes-allowdtmfinput
         */
        readonly allowDtmfInput: boolean | cdk.IResolvable;
    }
    /**
     * Specifies the audio and DTMF input specification.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audioanddtmfinputspecification.html
     */
    interface AudioAndDTMFInputSpecificationProperty {
        /**
         * Specifies the settings on audio input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audioanddtmfinputspecification.html#cfn-lex-bot-audioanddtmfinputspecification-audiospecification
         */
        readonly audioSpecification?: CfnBot.AudioSpecificationProperty | cdk.IResolvable;
        /**
         * Specifies the settings on DTMF input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audioanddtmfinputspecification.html#cfn-lex-bot-audioanddtmfinputspecification-dtmfspecification
         */
        readonly dtmfSpecification?: CfnBot.DTMFSpecificationProperty | cdk.IResolvable;
        /**
         * Time for which a bot waits before assuming that the customer isn't going to speak or press a key.
         *
         * This timeout is shared between Audio and DTMF inputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audioanddtmfinputspecification.html#cfn-lex-bot-audioanddtmfinputspecification-starttimeoutms
         */
        readonly startTimeoutMs: number;
    }
    /**
     * Specifies the DTMF input specifications.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dtmfspecification.html
     */
    interface DTMFSpecificationProperty {
        /**
         * The DTMF character that clears the accumulated DTMF digits and immediately ends the input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dtmfspecification.html#cfn-lex-bot-dtmfspecification-deletioncharacter
         */
        readonly deletionCharacter: string;
        /**
         * The DTMF character that immediately ends input.
         *
         * If the user does not press this character, the input ends after the end timeout.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dtmfspecification.html#cfn-lex-bot-dtmfspecification-endcharacter
         */
        readonly endCharacter: string;
        /**
         * How long the bot should wait after the last DTMF character input before assuming that the input has concluded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dtmfspecification.html#cfn-lex-bot-dtmfspecification-endtimeoutms
         */
        readonly endTimeoutMs: number;
        /**
         * The maximum number of DTMF digits allowed in an utterance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dtmfspecification.html#cfn-lex-bot-dtmfspecification-maxlength
         */
        readonly maxLength: number;
    }
    /**
     * Specifies the audio input specifications.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiospecification.html
     */
    interface AudioSpecificationProperty {
        /**
         * Time for which a bot waits after the customer stops speaking to assume the utterance is finished.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiospecification.html#cfn-lex-bot-audiospecification-endtimeoutms
         */
        readonly endTimeoutMs: number;
        /**
         * Time for how long Amazon Lex waits before speech input is truncated and the speech is returned to application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiospecification.html#cfn-lex-bot-audiospecification-maxlengthms
         */
        readonly maxLengthMs: number;
    }
    /**
     * Settings that specify the dialog code hook that is called by Amazon Lex between eliciting slot values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-elicitationcodehookinvocationsetting.html
     */
    interface ElicitationCodeHookInvocationSettingProperty {
        /**
         * Indicates whether a Lambda function should be invoked for the dialog.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-elicitationcodehookinvocationsetting.html#cfn-lex-bot-elicitationcodehookinvocationsetting-enablecodehookinvocation
         */
        readonly enableCodeHookInvocation: boolean | cdk.IResolvable;
        /**
         * A label that indicates the dialog step from which the dialog code hook is happening.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-elicitationcodehookinvocationsetting.html#cfn-lex-bot-elicitationcodehookinvocationsetting-invocationlabel
         */
        readonly invocationLabel?: string;
    }
    /**
     * Specifies the definition of a slot.
     *
     * Amazon Lex elicits slot values from uses to fulfill the user's intent.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slot.html
     */
    interface SlotProperty {
        /**
         * The description of the slot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slot.html#cfn-lex-bot-slot-description
         */
        readonly description?: string;
        /**
         * Indicates whether a slot can return multiple values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slot.html#cfn-lex-bot-slot-multiplevaluessetting
         */
        readonly multipleValuesSetting?: cdk.IResolvable | CfnBot.MultipleValuesSettingProperty;
        /**
         * The name given to the slot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slot.html#cfn-lex-bot-slot-name
         */
        readonly name: string;
        /**
         * Determines whether the contents of the slot are obfuscated in Amazon CloudWatch Logs logs.
         *
         * Use obfuscated slots to protect information such as personally identifiable information (PII) in logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slot.html#cfn-lex-bot-slot-obfuscationsetting
         */
        readonly obfuscationSetting?: cdk.IResolvable | CfnBot.ObfuscationSettingProperty;
        /**
         * The name of the slot type that this slot is based on.
         *
         * The slot type defines the acceptable values for the slot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slot.html#cfn-lex-bot-slot-slottypename
         */
        readonly slotTypeName: string;
        /**
         * Determines the slot resolution strategy that Amazon Lex uses to return slot type values.
         *
         * The field can be set to one of the following values:
         *
         * - ORIGINAL_VALUE - Returns the value entered by the user, if the user value is similar to a slot value.
         * - TOP_RESOLUTION - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned.
         *
         * If you don't specify the `valueSelectionStrategy` , the default is `ORIGINAL_VALUE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slot.html#cfn-lex-bot-slot-valueelicitationsetting
         */
        readonly valueElicitationSetting: cdk.IResolvable | CfnBot.SlotValueElicitationSettingProperty;
    }
    /**
     * Specifies the elicitation setting details eliciting a slot.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueelicitationsetting.html
     */
    interface SlotValueElicitationSettingProperty {
        /**
         * A list of default values for a slot.
         *
         * Default values are used when Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables, session attributes, and defined values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueelicitationsetting.html#cfn-lex-bot-slotvalueelicitationsetting-defaultvaluespecification
         */
        readonly defaultValueSpecification?: cdk.IResolvable | CfnBot.SlotDefaultValueSpecificationProperty;
        /**
         * The prompt that Amazon Lex uses to elicit the slot value from the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueelicitationsetting.html#cfn-lex-bot-slotvalueelicitationsetting-promptspecification
         */
        readonly promptSpecification?: cdk.IResolvable | CfnBot.PromptSpecificationProperty;
        /**
         * If you know a specific pattern that users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy.
         *
         * This is optional. In most cases, Amazon Lex is capable of understanding user utterances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueelicitationsetting.html#cfn-lex-bot-slotvalueelicitationsetting-sampleutterances
         */
        readonly sampleUtterances?: Array<cdk.IResolvable | CfnBot.SampleUtteranceProperty> | cdk.IResolvable;
        /**
         * Specifies the settings that Amazon Lex uses when a slot value is successfully entered by a user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueelicitationsetting.html#cfn-lex-bot-slotvalueelicitationsetting-slotcapturesetting
         */
        readonly slotCaptureSetting?: cdk.IResolvable | CfnBot.SlotCaptureSettingProperty;
        /**
         * Specifies whether the slot is required or optional.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueelicitationsetting.html#cfn-lex-bot-slotvalueelicitationsetting-slotconstraint
         */
        readonly slotConstraint: string;
        /**
         * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueelicitationsetting.html#cfn-lex-bot-slotvalueelicitationsetting-waitandcontinuespecification
         */
        readonly waitAndContinueSpecification?: cdk.IResolvable | CfnBot.WaitAndContinueSpecificationProperty;
    }
    /**
     * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-waitandcontinuespecification.html
     */
    interface WaitAndContinueSpecificationProperty {
        /**
         * The response that Amazon Lex sends to indicate that the bot is ready to continue the conversation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-waitandcontinuespecification.html#cfn-lex-bot-waitandcontinuespecification-continueresponse
         */
        readonly continueResponse: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
        /**
         * Specifies whether the bot will wait for a user to respond.
         *
         * When this field is false, wait and continue responses for a slot aren't used. If the `IsActive` field isn't specified, the default is true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-waitandcontinuespecification.html#cfn-lex-bot-waitandcontinuespecification-isactive
         */
        readonly isActive?: boolean | cdk.IResolvable;
        /**
         * A response that Amazon Lex sends periodically to the user to indicate that the bot is still waiting for input from the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-waitandcontinuespecification.html#cfn-lex-bot-waitandcontinuespecification-stillwaitingresponse
         */
        readonly stillWaitingResponse?: cdk.IResolvable | CfnBot.StillWaitingResponseSpecificationProperty;
        /**
         * The response that Amazon Lex sends to indicate that the bot is waiting for the conversation to continue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-waitandcontinuespecification.html#cfn-lex-bot-waitandcontinuespecification-waitingresponse
         */
        readonly waitingResponse: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
    }
    /**
     * Defines the messages that Amazon Lex sends to a user to remind them that the bot is waiting for a response.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-stillwaitingresponsespecification.html
     */
    interface StillWaitingResponseSpecificationProperty {
        /**
         * Indicates that the user can interrupt the response by speaking while the message is being played.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-stillwaitingresponsespecification.html#cfn-lex-bot-stillwaitingresponsespecification-allowinterrupt
         */
        readonly allowInterrupt?: boolean | cdk.IResolvable;
        /**
         * How often a message should be sent to the user.
         *
         * Minimum of 1 second, maximum of 5 minutes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-stillwaitingresponsespecification.html#cfn-lex-bot-stillwaitingresponsespecification-frequencyinseconds
         */
        readonly frequencyInSeconds: number;
        /**
         * One or more message groups, each containing one or more messages, that define the prompts that Amazon Lex sends to the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-stillwaitingresponsespecification.html#cfn-lex-bot-stillwaitingresponsespecification-messagegroupslist
         */
        readonly messageGroupsList: Array<cdk.IResolvable | CfnBot.MessageGroupProperty> | cdk.IResolvable;
        /**
         * If Amazon Lex waits longer than this length of time for a response, it will stop sending messages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-stillwaitingresponsespecification.html#cfn-lex-bot-stillwaitingresponsespecification-timeoutinseconds
         */
        readonly timeoutInSeconds: number;
    }
    /**
     * Settings used when Amazon Lex successfully captures a slot value from a user.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotcapturesetting.html
     */
    interface SlotCaptureSettingProperty {
        /**
         * A list of conditional branches to evaluate after the slot value is captured.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotcapturesetting.html#cfn-lex-bot-slotcapturesetting-captureconditional
         */
        readonly captureConditional?: CfnBot.ConditionalSpecificationProperty | cdk.IResolvable;
        /**
         * Specifies the next step that the bot runs when the slot value is captured before the code hook times out.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotcapturesetting.html#cfn-lex-bot-slotcapturesetting-capturenextstep
         */
        readonly captureNextStep?: CfnBot.DialogStateProperty | cdk.IResolvable;
        /**
         * Specifies a list of message groups that Amazon Lex uses to respond the user input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotcapturesetting.html#cfn-lex-bot-slotcapturesetting-captureresponse
         */
        readonly captureResponse?: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
        /**
         * Code hook called after Amazon Lex successfully captures a slot value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotcapturesetting.html#cfn-lex-bot-slotcapturesetting-codehook
         */
        readonly codeHook?: CfnBot.DialogCodeHookInvocationSettingProperty | cdk.IResolvable;
        /**
         * Code hook called when Amazon Lex doesn't capture a slot value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotcapturesetting.html#cfn-lex-bot-slotcapturesetting-elicitationcodehook
         */
        readonly elicitationCodeHook?: CfnBot.ElicitationCodeHookInvocationSettingProperty | cdk.IResolvable;
        /**
         * A list of conditional branches to evaluate when the slot value isn't captured.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotcapturesetting.html#cfn-lex-bot-slotcapturesetting-failureconditional
         */
        readonly failureConditional?: CfnBot.ConditionalSpecificationProperty | cdk.IResolvable;
        /**
         * Specifies the next step that the bot runs when the slot value code is not recognized.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotcapturesetting.html#cfn-lex-bot-slotcapturesetting-failurenextstep
         */
        readonly failureNextStep?: CfnBot.DialogStateProperty | cdk.IResolvable;
        /**
         * Specifies a list of message groups that Amazon Lex uses to respond the user input when the slot fails to be captured.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotcapturesetting.html#cfn-lex-bot-slotcapturesetting-failureresponse
         */
        readonly failureResponse?: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
    }
    /**
     * A sample utterance that invokes an intent or respond to a slot elicitation prompt.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sampleutterance.html
     */
    interface SampleUtteranceProperty {
        /**
         * A sample utterance that invokes an intent or respond to a slot elicitation prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sampleutterance.html#cfn-lex-bot-sampleutterance-utterance
         */
        readonly utterance: string;
    }
    /**
     * The default value to use when a user doesn't provide a value for a slot.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotdefaultvaluespecification.html
     */
    interface SlotDefaultValueSpecificationProperty {
        /**
         * A list of default values.
         *
         * Amazon Lex chooses the default value to use in the order that they are presented in the list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotdefaultvaluespecification.html#cfn-lex-bot-slotdefaultvaluespecification-defaultvaluelist
         */
        readonly defaultValueList: Array<cdk.IResolvable | CfnBot.SlotDefaultValueProperty> | cdk.IResolvable;
    }
    /**
     * Specifies the default value to use when a user doesn't provide a value for a slot.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotdefaultvalue.html
     */
    interface SlotDefaultValueProperty {
        /**
         * The default value to use when a user doesn't provide a value for a slot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotdefaultvalue.html#cfn-lex-bot-slotdefaultvalue-defaultvalue
         */
        readonly defaultValue: string;
    }
    /**
     * Determines whether Amazon Lex obscures slot values in conversation logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-obfuscationsetting.html
     */
    interface ObfuscationSettingProperty {
        /**
         * Value that determines whether Amazon Lex obscures slot values in conversation logs.
         *
         * The default is to obscure the values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-obfuscationsetting.html#cfn-lex-bot-obfuscationsetting-obfuscationsettingtype
         */
        readonly obfuscationSettingType: string;
    }
    /**
     * Indicates whether a slot can return multiple values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-multiplevaluessetting.html
     */
    interface MultipleValuesSettingProperty {
        /**
         * Indicates whether a slot can return multiple values.
         *
         * When `true` , the slot may return more than one value in a response. When `false` , the slot returns only a single value.
         *
         * Multi-value slots are only available in the en-US locale. If you set this value to `true` in any other locale, Amazon Lex throws a `ValidationException` .
         *
         * If the `allowMutlipleValues` is not set, the default value is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-multiplevaluessetting.html#cfn-lex-bot-multiplevaluessetting-allowmultiplevalues
         */
        readonly allowMultipleValues?: boolean | cdk.IResolvable;
    }
    /**
     * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogcodehooksetting.html
     */
    interface DialogCodeHookSettingProperty {
        /**
         * Enables the dialog code hook so that it processes user requests.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogcodehooksetting.html#cfn-lex-bot-dialogcodehooksetting-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * A context that must be active for an intent to be selected by Amazon Lex.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-inputcontext.html
     */
    interface InputContextProperty {
        /**
         * The name of the context.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-inputcontext.html#cfn-lex-bot-inputcontext-name
         */
        readonly name: string;
    }
    /**
     * Provides configuration information for the `AMAZON.KendraSearchIntent` intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-kendraconfiguration.html
     */
    interface KendraConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the `AMAZON.KendraSearchIntent` intent to search. The index must be in the same account and Region as the Amazon Lex bot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-kendraconfiguration.html#cfn-lex-bot-kendraconfiguration-kendraindex
         */
        readonly kendraIndex: string;
        /**
         * A query filter that Amazon Lex sends to Amazon Kendra to filter the response from a query.
         *
         * The filter is in the format defined by Amazon Kendra. For more information, see [Filtering queries](https://docs.aws.amazon.com/kendra/latest/dg/filtering.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-kendraconfiguration.html#cfn-lex-bot-kendraconfiguration-queryfilterstring
         */
        readonly queryFilterString?: string;
        /**
         * Determines whether the `AMAZON.KendraSearchIntent` intent uses a custom query string to query the Amazon Kendra index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-kendraconfiguration.html#cfn-lex-bot-kendraconfiguration-queryfilterstringenabled
         */
        readonly queryFilterStringEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentclosingsetting.html
     */
    interface IntentClosingSettingProperty {
        /**
         * The response that Amazon Lex sends to the user when the intent is complete.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentclosingsetting.html#cfn-lex-bot-intentclosingsetting-closingresponse
         */
        readonly closingResponse?: cdk.IResolvable | CfnBot.ResponseSpecificationProperty;
        /**
         * A list of conditional branches associated with the intent's closing response.
         *
         * These branches are executed when the `nextStep` attribute is set to `EvalutateConditional` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentclosingsetting.html#cfn-lex-bot-intentclosingsetting-conditional
         */
        readonly conditional?: CfnBot.ConditionalSpecificationProperty | cdk.IResolvable;
        /**
         * Specifies whether an intent's closing response is used.
         *
         * When this field is false, the closing response isn't sent to the user. If the `IsActive` field isn't specified, the default is true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentclosingsetting.html#cfn-lex-bot-intentclosingsetting-isactive
         */
        readonly isActive?: boolean | cdk.IResolvable;
        /**
         * Specifies the next step that the bot executes after playing the intent's closing response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentclosingsetting.html#cfn-lex-bot-intentclosingsetting-nextstep
         */
        readonly nextStep?: CfnBot.DialogStateProperty | cdk.IResolvable;
    }
    /**
     * Describes a session context that is activated when an intent is fulfilled.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-outputcontext.html
     */
    interface OutputContextProperty {
        /**
         * The name of the output context.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-outputcontext.html#cfn-lex-bot-outputcontext-name
         */
        readonly name: string;
        /**
         * The amount of time, in seconds, that the output context should remain active.
         *
         * The time is figured from the first time the context is sent to the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-outputcontext.html#cfn-lex-bot-outputcontext-timetoliveinseconds
         */
        readonly timeToLiveInSeconds: number;
        /**
         * The number of conversation turns that the output context should remain active.
         *
         * The number of turns is counted from the first time that the context is sent to the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-outputcontext.html#cfn-lex-bot-outputcontext-turnstolive
         */
        readonly turnsToLive: number;
    }
    /**
     * Sets the priority that Amazon Lex should use when eliciting slot values from a user.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotpriority.html
     */
    interface SlotPriorityProperty {
        /**
         * The priority that Amazon Lex should apply to the slot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotpriority.html#cfn-lex-bot-slotpriority-priority
         */
        readonly priority: number;
        /**
         * The name of the slot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotpriority.html#cfn-lex-bot-slotpriority-slotname
         */
        readonly slotName: string;
    }
    /**
     * Defines settings for using an Amazon Polly voice to communicate with a user.
     *
     * Valid values include:
     *
     * - `standard`
     * - `neural`
     * - `long-form`
     * - `generative`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-voicesettings.html
     */
    interface VoiceSettingsProperty {
        /**
         * Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user.
         *
         * For more information, see the [`engine` parameter of the `SynthesizeSpeech` operation](https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html#polly-SynthesizeSpeech-request-Engine) in the *Amazon Polly developer guide* .
         *
         * If you do not specify a value, the default is `standard` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-voicesettings.html#cfn-lex-bot-voicesettings-engine
         */
        readonly engine?: string;
        /**
         * The identifier of the Amazon Polly voice to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-voicesettings.html#cfn-lex-bot-voicesettings-voiceid
         */
        readonly voiceId: string;
    }
    /**
     * Defines an Amazon S3 bucket location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3location.html
     */
    interface S3LocationProperty {
        /**
         * The S3 bucket name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3location.html#cfn-lex-bot-s3location-s3bucket
         */
        readonly s3Bucket: string;
        /**
         * The path and file name to the object in the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3location.html#cfn-lex-bot-s3location-s3objectkey
         */
        readonly s3ObjectKey: string;
        /**
         * The version of the object in the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3location.html#cfn-lex-bot-s3location-s3objectversion
         */
        readonly s3ObjectVersion?: string;
    }
    /**
     * Specifies configuration settings for the alias used to test the bot.
     *
     * If the `TestBotAliasSettings` property is not specified, the settings are configured with default values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-testbotaliassettings.html
     */
    interface TestBotAliasSettingsProperty {
        /**
         * Specifies settings that are unique to a locale.
         *
         * For example, you can use a different Lambda function depending on the bot's locale.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-testbotaliassettings.html#cfn-lex-bot-testbotaliassettings-botaliaslocalesettings
         */
        readonly botAliasLocaleSettings?: Array<CfnBot.BotAliasLocaleSettingsItemProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies settings for conversation logs that save audio, text, and metadata information for conversations with your users.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-testbotaliassettings.html#cfn-lex-bot-testbotaliassettings-conversationlogsettings
         */
        readonly conversationLogSettings?: CfnBot.ConversationLogSettingsProperty | cdk.IResolvable;
        /**
         * Specifies a description for the test bot alias.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-testbotaliassettings.html#cfn-lex-bot-testbotaliassettings-description
         */
        readonly description?: string;
        /**
         * Specifies whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-testbotaliassettings.html#cfn-lex-bot-testbotaliassettings-sentimentanalysissettings
         */
        readonly sentimentAnalysisSettings?: any | cdk.IResolvable;
    }
    /**
     * Specifies locale settings for a single locale.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botaliaslocalesettingsitem.html
     */
    interface BotAliasLocaleSettingsItemProperty {
        /**
         * Specifies locale settings for a locale.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botaliaslocalesettingsitem.html#cfn-lex-bot-botaliaslocalesettingsitem-botaliaslocalesetting
         */
        readonly botAliasLocaleSetting: CfnBot.BotAliasLocaleSettingsProperty | cdk.IResolvable;
        /**
         * Specifies the locale that the settings apply to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botaliaslocalesettingsitem.html#cfn-lex-bot-botaliaslocalesettingsitem-localeid
         */
        readonly localeId: string;
    }
    /**
     * Specifies settings that are unique to a locale.
     *
     * For example, you can use different Lambda function depending on the bot's locale.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botaliaslocalesettings.html
     */
    interface BotAliasLocaleSettingsProperty {
        /**
         * Specifies the Lambda function that should be used in the locale.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botaliaslocalesettings.html#cfn-lex-bot-botaliaslocalesettings-codehookspecification
         */
        readonly codeHookSpecification?: CfnBot.CodeHookSpecificationProperty | cdk.IResolvable;
        /**
         * Determines whether the locale is enabled for the bot.
         *
         * If the value is `false` , the locale isn't available for use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botaliaslocalesettings.html#cfn-lex-bot-botaliaslocalesettings-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * Contains information about code hooks that Amazon Lex calls during a conversation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-codehookspecification.html
     */
    interface CodeHookSpecificationProperty {
        /**
         * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-codehookspecification.html#cfn-lex-bot-codehookspecification-lambdacodehook
         */
        readonly lambdaCodeHook: cdk.IResolvable | CfnBot.LambdaCodeHookProperty;
    }
    /**
     * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-lambdacodehook.html
     */
    interface LambdaCodeHookProperty {
        /**
         * The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-lambdacodehook.html#cfn-lex-bot-lambdacodehook-codehookinterfaceversion
         */
        readonly codeHookInterfaceVersion: string;
        /**
         * The Amazon Resource Name (ARN) of the Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-lambdacodehook.html#cfn-lex-bot-lambdacodehook-lambdaarn
         */
        readonly lambdaArn: string;
    }
    /**
     * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conversationlogsettings.html
     */
    interface ConversationLogSettingsProperty {
        /**
         * The Amazon S3 settings for logging audio to an S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conversationlogsettings.html#cfn-lex-bot-conversationlogsettings-audiologsettings
         */
        readonly audioLogSettings?: Array<CfnBot.AudioLogSettingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The Amazon CloudWatch Logs settings for logging text and metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conversationlogsettings.html#cfn-lex-bot-conversationlogsettings-textlogsettings
         */
        readonly textLogSettings?: Array<cdk.IResolvable | CfnBot.TextLogSettingProperty> | cdk.IResolvable;
    }
    /**
     * Defines settings to enable text conversation logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textlogsetting.html
     */
    interface TextLogSettingProperty {
        /**
         * Specifies the Amazon CloudWatch Logs destination log group for conversation text logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textlogsetting.html#cfn-lex-bot-textlogsetting-destination
         */
        readonly destination: cdk.IResolvable | CfnBot.TextLogDestinationProperty;
        /**
         * Determines whether conversation logs should be stored for an alias.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textlogsetting.html#cfn-lex-bot-textlogsetting-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textlogdestination.html
     */
    interface TextLogDestinationProperty {
        /**
         * Defines the Amazon CloudWatch Logs log group where text and metadata logs are delivered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textlogdestination.html#cfn-lex-bot-textlogdestination-cloudwatch
         */
        readonly cloudWatch: CfnBot.CloudWatchLogGroupLogDestinationProperty | cdk.IResolvable;
    }
    /**
     * The Amazon CloudWatch Logs log group where the text and metadata logs are delivered.
     *
     * The log group must exist before you enable logging.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-cloudwatchloggrouplogdestination.html
     */
    interface CloudWatchLogGroupLogDestinationProperty {
        /**
         * The Amazon Resource Name (ARN) of the log group where text and metadata logs are delivered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-cloudwatchloggrouplogdestination.html#cfn-lex-bot-cloudwatchloggrouplogdestination-cloudwatchloggrouparn
         */
        readonly cloudWatchLogGroupArn: string;
        /**
         * The prefix of the log stream name within the log group that you specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-cloudwatchloggrouplogdestination.html#cfn-lex-bot-cloudwatchloggrouplogdestination-logprefix
         */
        readonly logPrefix: string;
    }
    /**
     * Settings for logging audio of conversations between Amazon Lex and a user.
     *
     * You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiologsetting.html
     */
    interface AudioLogSettingProperty {
        /**
         * Specifies the location of the audio log files collected when conversation logging is enabled for a bot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiologsetting.html#cfn-lex-bot-audiologsetting-destination
         */
        readonly destination: CfnBot.AudioLogDestinationProperty | cdk.IResolvable;
        /**
         * Determines whether audio logging in enabled for the bot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiologsetting.html#cfn-lex-bot-audiologsetting-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * The location of audio log files collected when conversation logging is enabled for a bot.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiologdestination.html
     */
    interface AudioLogDestinationProperty {
        /**
         * Specifies the Amazon S3 bucket where the audio files are stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiologdestination.html#cfn-lex-bot-audiologdestination-s3bucket
         */
        readonly s3Bucket: cdk.IResolvable | CfnBot.S3BucketLogDestinationProperty;
    }
    /**
     * Specifies an Amazon S3 bucket for logging audio conversations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3bucketlogdestination.html
     */
    interface S3BucketLogDestinationProperty {
        /**
         * The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3bucketlogdestination.html#cfn-lex-bot-s3bucketlogdestination-kmskeyarn
         */
        readonly kmsKeyArn?: string;
        /**
         * The S3 prefix to assign to audio log files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3bucketlogdestination.html#cfn-lex-bot-s3bucketlogdestination-logprefix
         */
        readonly logPrefix: string;
        /**
         * The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3bucketlogdestination.html#cfn-lex-bot-s3bucketlogdestination-s3bucketarn
         */
        readonly s3BucketArn: string;
    }
    /**
     * By default, data stored by Amazon Lex is encrypted.
     *
     * The `DataPrivacy` structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dataprivacy.html
     */
    interface DataPrivacyProperty {
        /**
         * For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying `true` or `false` in the `childDirected` field.
         *
         * By specifying `true` in the `childDirected` field, you confirm that your use of Amazon Lex *is* related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying `false` in the `childDirected` field, you confirm that your use of Amazon Lex *is not* related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the `childDirected` field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the [Amazon Lex FAQ](https://docs.aws.amazon.com/lex/faqs#data-security) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dataprivacy.html#cfn-lex-bot-dataprivacy-childdirected
         */
        readonly childDirected: boolean | cdk.IResolvable;
    }
    /**
     * Parameter used to create a replication of the source bot in the secondary region.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-replication.html
     */
    interface ReplicationProperty {
        /**
         * List of secondary regions for bot replication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-replication.html#cfn-lex-bot-replication-replicaregions
         */
        readonly replicaRegions: Array<string>;
    }
    /**
     * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sentimentanalysissettings.html
     */
    interface SentimentAnalysisSettingsProperty {
        /**
         * Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user utterances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sentimentanalysissettings.html#cfn-lex-bot-sentimentanalysissettings-detectsentiment
         */
        readonly detectSentiment: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnBot`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html
 */
export interface CfnBotProps {
    /**
     * Indicates whether Amazon Lex V2 should automatically build the locales for the bot after a change.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-autobuildbotlocales
     */
    readonly autoBuildBotLocales?: boolean | cdk.IResolvable;
    /**
     * The Amazon S3 location of files used to import a bot.
     *
     * The files must be in the import format specified in [JSON format for importing and exporting](https://docs.aws.amazon.com/lexv2/latest/dg/import-export-format.html) in the *Amazon Lex developer guide.*
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-botfiles3location
     */
    readonly botFileS3Location?: cdk.IResolvable | CfnBot.S3LocationProperty;
    /**
     * A list of locales for the bot.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-botlocales
     */
    readonly botLocales?: Array<CfnBot.BotLocaleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A list of tags to add to the bot.
     *
     * You can only add tags when you import a bot. You can't use the `UpdateBot` operation to update tags. To update tags, use the `TagResource` operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bottags
     */
    readonly botTags?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
    /**
     * By default, data stored by Amazon Lex is encrypted.
     *
     * The `DataPrivacy` structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dataprivacy
     */
    readonly dataPrivacy: any | cdk.IResolvable;
    /**
     * The description of the version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-description
     */
    readonly description?: string;
    /**
     * The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot.
     *
     * A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.
     *
     * You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-idlesessionttlinseconds
     */
    readonly idleSessionTtlInSeconds: number;
    /**
     * The name of the bot locale.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-name
     */
    readonly name: string;
    /**
     * Parameter used to create a replication of the source bot in the secondary region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-replication
     */
    readonly replication?: cdk.IResolvable | CfnBot.ReplicationProperty;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used to build and run the bot.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-rolearn
     */
    readonly roleArn: string;
    /**
     * Specifies configuration settings for the alias used to test the bot.
     *
     * If the `TestBotAliasSettings` property is not specified, the settings are configured with default values.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-testbotaliassettings
     */
    readonly testBotAliasSettings?: cdk.IResolvable | CfnBot.TestBotAliasSettingsProperty;
    /**
     * A list of tags to add to the test alias for a bot.
     *
     * You can only add tags when you import a bot. You can't use the `UpdateAlias` operation to update tags. To update tags on the test alias, use the `TagResource` operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-testbotaliastags
     */
    readonly testBotAliasTags?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
}
/**
 * > Amazon Lex V2 is the only supported version in AWS CloudFormation .
 *
 * Specifies an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot.
 *
 * For example, you can specify an alias called "PROD" that your applications use to call the Amazon Lex bot.
 *
 * @cloudformationResource AWS::Lex::BotAlias
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html
 */
export declare class CfnBotAlias extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBotAlias from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBotAlias;
    /**
     * The Amazon Resource Name (ARN) of the bot alias.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique identifier of the bot alias.
     *
     * @cloudformationAttribute BotAliasId
     */
    readonly attrBotAliasId: string;
    /**
     * The current status of the bot alias. When the status is Available the alias is ready for use with your bot.
     *
     * @cloudformationAttribute BotAliasStatus
     */
    readonly attrBotAliasStatus: string;
    /**
     * Specifies settings that are unique to a locale.
     */
    botAliasLocaleSettings?: Array<CfnBotAlias.BotAliasLocaleSettingsItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the bot alias.
     */
    botAliasName: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    botAliasTags?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The unique identifier of the bot.
     */
    botId: string;
    /**
     * The version of the bot that the bot alias references.
     */
    botVersion?: string;
    /**
     * Specifies whether Amazon Lex logs text and audio for conversations with the bot.
     */
    conversationLogSettings?: CfnBotAlias.ConversationLogSettingsProperty | cdk.IResolvable;
    /**
     * The description of the bot alias.
     */
    description?: string;
    /**
     * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
     */
    sentimentAnalysisSettings?: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBotAliasProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBotAlias {
    /**
     * Specifies settings that are unique to a locale.
     *
     * For example, you can use different Lambda function depending on the bot's locale.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-botaliaslocalesettingsitem.html
     */
    interface BotAliasLocaleSettingsItemProperty {
        /**
         * Specifies settings that are unique to a locale.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-botaliaslocalesettingsitem.html#cfn-lex-botalias-botaliaslocalesettingsitem-botaliaslocalesetting
         */
        readonly botAliasLocaleSetting: CfnBotAlias.BotAliasLocaleSettingsProperty | cdk.IResolvable;
        /**
         * The unique identifier of the locale.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-botaliaslocalesettingsitem.html#cfn-lex-botalias-botaliaslocalesettingsitem-localeid
         */
        readonly localeId: string;
    }
    /**
     * Specifies settings that are unique to a locale.
     *
     * For example, you can use different Lambda function depending on the bot's locale.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-botaliaslocalesettings.html
     */
    interface BotAliasLocaleSettingsProperty {
        /**
         * Specifies the Lambda function that should be used in the locale.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-botaliaslocalesettings.html#cfn-lex-botalias-botaliaslocalesettings-codehookspecification
         */
        readonly codeHookSpecification?: CfnBotAlias.CodeHookSpecificationProperty | cdk.IResolvable;
        /**
         * Determines whether the locale is enabled for the bot.
         *
         * If the value is `false` , the locale isn't available for use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-botaliaslocalesettings.html#cfn-lex-botalias-botaliaslocalesettings-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * Contains information about code hooks that Amazon Lex calls during a conversation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-codehookspecification.html
     */
    interface CodeHookSpecificationProperty {
        /**
         * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-codehookspecification.html#cfn-lex-botalias-codehookspecification-lambdacodehook
         */
        readonly lambdaCodeHook: cdk.IResolvable | CfnBotAlias.LambdaCodeHookProperty;
    }
    /**
     * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-lambdacodehook.html
     */
    interface LambdaCodeHookProperty {
        /**
         * The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-lambdacodehook.html#cfn-lex-botalias-lambdacodehook-codehookinterfaceversion
         */
        readonly codeHookInterfaceVersion: string;
        /**
         * The Amazon Resource Name (ARN) of the Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-lambdacodehook.html#cfn-lex-botalias-lambdacodehook-lambdaarn
         */
        readonly lambdaArn: string;
    }
    /**
     * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-conversationlogsettings.html
     */
    interface ConversationLogSettingsProperty {
        /**
         * The Amazon S3 settings for logging audio to an S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-conversationlogsettings.html#cfn-lex-botalias-conversationlogsettings-audiologsettings
         */
        readonly audioLogSettings?: Array<CfnBotAlias.AudioLogSettingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The Amazon CloudWatch Logs settings for logging text and metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-conversationlogsettings.html#cfn-lex-botalias-conversationlogsettings-textlogsettings
         */
        readonly textLogSettings?: Array<cdk.IResolvable | CfnBotAlias.TextLogSettingProperty> | cdk.IResolvable;
    }
    /**
     * Defines settings to enable text conversation logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-textlogsetting.html
     */
    interface TextLogSettingProperty {
        /**
         * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-textlogsetting.html#cfn-lex-botalias-textlogsetting-destination
         */
        readonly destination: cdk.IResolvable | CfnBotAlias.TextLogDestinationProperty;
        /**
         * Determines whether conversation logs should be stored for an alias.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-textlogsetting.html#cfn-lex-botalias-textlogsetting-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-textlogdestination.html
     */
    interface TextLogDestinationProperty {
        /**
         * Defines the Amazon CloudWatch Logs log group where text and metadata logs are delivered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-textlogdestination.html#cfn-lex-botalias-textlogdestination-cloudwatch
         */
        readonly cloudWatch: CfnBotAlias.CloudWatchLogGroupLogDestinationProperty | cdk.IResolvable;
    }
    /**
     * The Amazon CloudWatch Logs log group where the text and metadata logs are delivered.
     *
     * The log group must exist before you enable logging.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-cloudwatchloggrouplogdestination.html
     */
    interface CloudWatchLogGroupLogDestinationProperty {
        /**
         * The Amazon Resource Name (ARN) of the log group where text and metadata logs are delivered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-cloudwatchloggrouplogdestination.html#cfn-lex-botalias-cloudwatchloggrouplogdestination-cloudwatchloggrouparn
         */
        readonly cloudWatchLogGroupArn: string;
        /**
         * The prefix of the log stream name within the log group that you specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-cloudwatchloggrouplogdestination.html#cfn-lex-botalias-cloudwatchloggrouplogdestination-logprefix
         */
        readonly logPrefix: string;
    }
    /**
     * Settings for logging audio of conversations between Amazon Lex and a user.
     *
     * You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-audiologsetting.html
     */
    interface AudioLogSettingProperty {
        /**
         * The location of audio log files collected when conversation logging is enabled for a bot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-audiologsetting.html#cfn-lex-botalias-audiologsetting-destination
         */
        readonly destination: CfnBotAlias.AudioLogDestinationProperty | cdk.IResolvable;
        /**
         * Determines whether audio logging in enabled for the bot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-audiologsetting.html#cfn-lex-botalias-audiologsetting-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * Specifies the S3 bucket location where audio logs are stored.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-audiologdestination.html
     */
    interface AudioLogDestinationProperty {
        /**
         * The S3 bucket location where audio logs are stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-audiologdestination.html#cfn-lex-botalias-audiologdestination-s3bucket
         */
        readonly s3Bucket: cdk.IResolvable | CfnBotAlias.S3BucketLogDestinationProperty;
    }
    /**
     * Specifies an Amazon S3 bucket for logging audio conversations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-s3bucketlogdestination.html
     */
    interface S3BucketLogDestinationProperty {
        /**
         * The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-s3bucketlogdestination.html#cfn-lex-botalias-s3bucketlogdestination-kmskeyarn
         */
        readonly kmsKeyArn?: string;
        /**
         * The S3 prefix to assign to audio log files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-s3bucketlogdestination.html#cfn-lex-botalias-s3bucketlogdestination-logprefix
         */
        readonly logPrefix: string;
        /**
         * The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-s3bucketlogdestination.html#cfn-lex-botalias-s3bucketlogdestination-s3bucketarn
         */
        readonly s3BucketArn: string;
    }
    /**
     * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-sentimentanalysissettings.html
     */
    interface SentimentAnalysisSettingsProperty {
        /**
         * Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user utterances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-sentimentanalysissettings.html#cfn-lex-botalias-sentimentanalysissettings-detectsentiment
         */
        readonly detectSentiment: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnBotAlias`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html
 */
export interface CfnBotAliasProps {
    /**
     * Specifies settings that are unique to a locale.
     *
     * For example, you can use different Lambda function depending on the bot's locale.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-botaliaslocalesettings
     */
    readonly botAliasLocaleSettings?: Array<CfnBotAlias.BotAliasLocaleSettingsItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the bot alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-botaliasname
     */
    readonly botAliasName: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * You can only add tags when you specify an alias.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-botaliastags
     */
    readonly botAliasTags?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The unique identifier of the bot.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-botid
     */
    readonly botId: string;
    /**
     * The version of the bot that the bot alias references.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-botversion
     */
    readonly botVersion?: string;
    /**
     * Specifies whether Amazon Lex logs text and audio for conversations with the bot.
     *
     * When you enable conversation logs, text logs store text input, transcripts of audio input, and associated metadata in Amazon CloudWatch logs. Audio logs store input in Amazon S3 .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-conversationlogsettings
     */
    readonly conversationLogSettings?: CfnBotAlias.ConversationLogSettingsProperty | cdk.IResolvable;
    /**
     * The description of the bot alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-description
     */
    readonly description?: string;
    /**
     * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-sentimentanalysissettings
     */
    readonly sentimentAnalysisSettings?: any | cdk.IResolvable;
}
/**
 * > Amazon Lex V2 is the only supported version in AWS CloudFormation .
 *
 * Specifies a new version of the bot based on the `DRAFT` version. If the `DRAFT` version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version, it returns the last created version.
 *
 * When you specify the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1.
 *
 * @cloudformationResource AWS::Lex::BotVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html
 */
export declare class CfnBotVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBotVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBotVersion;
    /**
     * The version of the bot.
     *
     * @cloudformationAttribute BotVersion
     */
    readonly attrBotVersion: string;
    /**
     * The unique identifier of the bot.
     */
    botId: string;
    /**
     * Specifies the locales that Amazon Lex adds to this version.
     */
    botVersionLocaleSpecification: Array<CfnBotVersion.BotVersionLocaleSpecificationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the version.
     */
    description?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBotVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBotVersion {
    /**
     * Specifies the locale that Amazon Lex adds to this version.
     *
     * You can choose the Draft version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botversion-botversionlocalespecification.html
     */
    interface BotVersionLocaleSpecificationProperty {
        /**
         * The version of a bot used for a bot locale.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botversion-botversionlocalespecification.html#cfn-lex-botversion-botversionlocalespecification-botversionlocaledetails
         */
        readonly botVersionLocaleDetails: CfnBotVersion.BotVersionLocaleDetailsProperty | cdk.IResolvable;
        /**
         * The identifier of the locale to add to the version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botversion-botversionlocalespecification.html#cfn-lex-botversion-botversionlocalespecification-localeid
         */
        readonly localeId: string;
    }
    /**
     * The version of a bot used for a bot locale.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botversion-botversionlocaledetails.html
     */
    interface BotVersionLocaleDetailsProperty {
        /**
         * The version of a bot used for a bot locale.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botversion-botversionlocaledetails.html#cfn-lex-botversion-botversionlocaledetails-sourcebotversion
         */
        readonly sourceBotVersion: string;
    }
}
/**
 * Properties for defining a `CfnBotVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html
 */
export interface CfnBotVersionProps {
    /**
     * The unique identifier of the bot.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html#cfn-lex-botversion-botid
     */
    readonly botId: string;
    /**
     * Specifies the locales that Amazon Lex adds to this version.
     *
     * You can choose the Draft version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html#cfn-lex-botversion-botversionlocalespecification
     */
    readonly botVersionLocaleSpecification: Array<CfnBotVersion.BotVersionLocaleSpecificationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html#cfn-lex-botversion-description
     */
    readonly description?: string;
}
/**
 * > Amazon Lex V2 is the only supported version in AWS CloudFormation .
 *
 * Specifies a new resource policy with the specified policy statements.
 *
 * @cloudformationResource AWS::Lex::ResourcePolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-resourcepolicy.html
 */
export declare class CfnResourcePolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourcePolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourcePolicy;
    /**
     * The identifier of the resource policy.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Specifies the current revision of a resource policy.
     *
     * @cloudformationAttribute RevisionId
     */
    readonly attrRevisionId: string;
    /**
     * A resource policy to add to the resource.
     */
    policy: any | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
     */
    resourceArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourcePolicyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnResourcePolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-resourcepolicy.html
 */
export interface CfnResourcePolicyProps {
    /**
     * A resource policy to add to the resource.
     *
     * The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow IAM syntax. If the policy isn't valid, Amazon Lex returns a validation exception.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-resourcepolicy.html#cfn-lex-resourcepolicy-policy
     */
    readonly policy: any | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-resourcepolicy.html#cfn-lex-resourcepolicy-resourcearn
     */
    readonly resourceArn: string;
}
