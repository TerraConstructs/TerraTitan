import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::SSMContacts::Contact` resource specifies a contact or escalation plan.
 *
 * Incident Manager contacts are a subset of actions and data types that you can use for managing responder engagement and interaction.
 *
 * @cloudformationResource AWS::SSMContacts::Contact
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html
 */
export declare class CfnContact extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnContact from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnContact;
    /**
     * The Amazon Resource Name (ARN) of the `Contact` resource, such as `arn:aws:ssm-contacts:us-west-2:123456789012:contact/contactalias` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique and identifiable alias of the contact or escalation plan.
     */
    alias: string;
    /**
     * The full name of the contact or escalation plan.
     */
    displayName: string;
    /**
     * A list of stages.
     */
    plan?: Array<cdk.IResolvable | CfnContact.StageProperty> | cdk.IResolvable;
    /**
     * The type of contact.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnContactProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnContact {
    /**
     * The `Stage` property type specifies a set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-stage.html
     */
    interface StageProperty {
        /**
         * The time to wait until beginning the next stage.
         *
         * The duration can only be set to 0 if a target is specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-stage.html#cfn-ssmcontacts-contact-stage-durationinminutes
         */
        readonly durationInMinutes?: number;
        /**
         * The Amazon Resource Names (ARNs) of the on-call rotations associated with the plan.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-stage.html#cfn-ssmcontacts-contact-stage-rotationids
         */
        readonly rotationIds?: Array<string>;
        /**
         * The contacts or contact methods that the escalation plan or engagement plan is engaging.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-stage.html#cfn-ssmcontacts-contact-stage-targets
         */
        readonly targets?: Array<cdk.IResolvable | CfnContact.TargetsProperty> | cdk.IResolvable;
    }
    /**
     * The contact or contact channel that's being engaged.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-targets.html
     */
    interface TargetsProperty {
        /**
         * Information about the contact channel that Incident Manager engages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-targets.html#cfn-ssmcontacts-contact-targets-channeltargetinfo
         */
        readonly channelTargetInfo?: CfnContact.ChannelTargetInfoProperty | cdk.IResolvable;
        /**
         * The contact that Incident Manager is engaging during an incident.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-targets.html#cfn-ssmcontacts-contact-targets-contacttargetinfo
         */
        readonly contactTargetInfo?: CfnContact.ContactTargetInfoProperty | cdk.IResolvable;
    }
    /**
     * Information about the contact channel that Incident Manager uses to engage the contact.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-channeltargetinfo.html
     */
    interface ChannelTargetInfoProperty {
        /**
         * The Amazon Resource Name (ARN) of the contact channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-channeltargetinfo.html#cfn-ssmcontacts-contact-channeltargetinfo-channelid
         */
        readonly channelId: string;
        /**
         * The number of minutes to wait before retrying to send engagement if the engagement initially failed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-channeltargetinfo.html#cfn-ssmcontacts-contact-channeltargetinfo-retryintervalinminutes
         */
        readonly retryIntervalInMinutes: number;
    }
    /**
     * The contact that Incident Manager is engaging during an incident.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-contacttargetinfo.html
     */
    interface ContactTargetInfoProperty {
        /**
         * The Amazon Resource Name (ARN) of the contact.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-contacttargetinfo.html#cfn-ssmcontacts-contact-contacttargetinfo-contactid
         */
        readonly contactId: string;
        /**
         * A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-contacttargetinfo.html#cfn-ssmcontacts-contact-contacttargetinfo-isessential
         */
        readonly isEssential: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnContact`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html
 */
export interface CfnContactProps {
    /**
     * The unique and identifiable alias of the contact or escalation plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-alias
     */
    readonly alias: string;
    /**
     * The full name of the contact or escalation plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-displayname
     */
    readonly displayName: string;
    /**
     * A list of stages.
     *
     * A contact has an engagement plan with stages that contact specified contact channels. An escalation plan uses stages that contact specified contacts.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-plan
     */
    readonly plan?: Array<cdk.IResolvable | CfnContact.StageProperty> | cdk.IResolvable;
    /**
     * The type of contact.
     *
     * - `PERSONAL` : A single, individual contact.
     * - `ESCALATION` : An escalation plan.
     * - `ONCALL_SCHEDULE` : An on-call schedule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-type
     */
    readonly type: string;
}
/**
 * The `AWS::SSMContacts::ContactChannel` resource specifies a contact channel as the method that Incident Manager uses to engage your contact.
 *
 * > *Template example* : We recommend creating all Incident Manager `Contacts` resources using a single AWS CloudFormation template. For a demonstration, see the examples for [AWS::SSMContacts::Contacts](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html) .
 *
 * @cloudformationResource AWS::SSMContacts::ContactChannel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html
 */
export declare class CfnContactChannel extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnContactChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnContactChannel;
    /**
     * The Amazon Resource Name (ARN) of the `ContactChannel` resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The details that Incident Manager uses when trying to engage the contact channel.
     */
    channelAddress: string;
    /**
     * The name of the contact channel.
     */
    channelName: string;
    /**
     * The type of the contact channel. Incident Manager supports three contact methods:.
     */
    channelType: string;
    /**
     * The Amazon Resource Name (ARN) of the contact you are adding the contact channel to.
     */
    contactId: string;
    /**
     * If you want to activate the channel at a later time, you can choose to defer activation.
     */
    deferActivation?: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnContactChannelProps);
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
 * Properties for defining a `CfnContactChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html
 */
export interface CfnContactChannelProps {
    /**
     * The details that Incident Manager uses when trying to engage the contact channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-channeladdress
     */
    readonly channelAddress: string;
    /**
     * The name of the contact channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-channelname
     */
    readonly channelName: string;
    /**
     * The type of the contact channel. Incident Manager supports three contact methods:.
     *
     * - SMS
     * - VOICE
     * - EMAIL
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-channeltype
     */
    readonly channelType: string;
    /**
     * The Amazon Resource Name (ARN) of the contact you are adding the contact channel to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-contactid
     */
    readonly contactId: string;
    /**
     * If you want to activate the channel at a later time, you can choose to defer activation.
     *
     * Incident Manager can't engage your contact channel until it has been activated.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-deferactivation
     */
    readonly deferActivation?: boolean | cdk.IResolvable;
}
/**
 * Information about the stages and on-call rotation teams associated with an escalation plan or engagement plan.
 *
 * > *Template example* : We recommend creating all Incident Manager `Contacts` resources using a single AWS CloudFormation template. For a demonstration, see the examples for [AWS::SSMContacts::Contacts](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html) .
 *
 * @cloudformationResource AWS::SSMContacts::Plan
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html
 */
export declare class CfnPlan extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPlan from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPlan;
    /**
     * The Amazon Resource Name (ARN) of the `Plan` resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The Amazon Resource Name (ARN) of the contact.
     */
    contactId: string;
    /**
     * The Amazon Resource Names (ARNs) of the on-call rotations associated with the plan.
     */
    rotationIds?: Array<string>;
    /**
     * A list of stages that the escalation plan or engagement plan uses to engage contacts and contact methods.
     */
    stages?: Array<cdk.IResolvable | CfnPlan.StageProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPlanProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPlan {
    /**
     * A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-stage.html
     */
    interface StageProperty {
        /**
         * The time to wait until beginning the next stage.
         *
         * The duration can only be set to 0 if a target is specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-stage.html#cfn-ssmcontacts-plan-stage-durationinminutes
         */
        readonly durationInMinutes: number;
        /**
         * The contacts or contact methods that the escalation plan or engagement plan is engaging.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-stage.html#cfn-ssmcontacts-plan-stage-targets
         */
        readonly targets?: Array<cdk.IResolvable | CfnPlan.TargetsProperty> | cdk.IResolvable;
    }
    /**
     * The contact or contact channel that's being engaged.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-targets.html
     */
    interface TargetsProperty {
        /**
         * Information about the contact channel that Incident Manager engages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-targets.html#cfn-ssmcontacts-plan-targets-channeltargetinfo
         */
        readonly channelTargetInfo?: CfnPlan.ChannelTargetInfoProperty | cdk.IResolvable;
        /**
         * Information about the contact that Incident Manager engages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-targets.html#cfn-ssmcontacts-plan-targets-contacttargetinfo
         */
        readonly contactTargetInfo?: CfnPlan.ContactTargetInfoProperty | cdk.IResolvable;
    }
    /**
     * Information about the contact channel that Incident Manager uses to engage the contact.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-channeltargetinfo.html
     */
    interface ChannelTargetInfoProperty {
        /**
         * The Amazon Resource Name (ARN) of the contact channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-channeltargetinfo.html#cfn-ssmcontacts-plan-channeltargetinfo-channelid
         */
        readonly channelId: string;
        /**
         * The number of minutes to wait before retrying to send engagement if the engagement initially failed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-channeltargetinfo.html#cfn-ssmcontacts-plan-channeltargetinfo-retryintervalinminutes
         */
        readonly retryIntervalInMinutes: number;
    }
    /**
     * The contact that Incident Manager is engaging during an incident.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-contacttargetinfo.html
     */
    interface ContactTargetInfoProperty {
        /**
         * The Amazon Resource Name (ARN) of the contact.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-contacttargetinfo.html#cfn-ssmcontacts-plan-contacttargetinfo-contactid
         */
        readonly contactId: string;
        /**
         * A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-contacttargetinfo.html#cfn-ssmcontacts-plan-contacttargetinfo-isessential
         */
        readonly isEssential: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnPlan`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html
 */
export interface CfnPlanProps {
    /**
     * The Amazon Resource Name (ARN) of the contact.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html#cfn-ssmcontacts-plan-contactid
     */
    readonly contactId: string;
    /**
     * The Amazon Resource Names (ARNs) of the on-call rotations associated with the plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html#cfn-ssmcontacts-plan-rotationids
     */
    readonly rotationIds?: Array<string>;
    /**
     * A list of stages that the escalation plan or engagement plan uses to engage contacts and contact methods.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html#cfn-ssmcontacts-plan-stages
     */
    readonly stages?: Array<cdk.IResolvable | CfnPlan.StageProperty> | cdk.IResolvable;
}
/**
 * Specifies a rotation in an on-call schedule.
 *
 * > *Template example* : We recommend creating all Incident Manager `Contacts` resources using a single AWS CloudFormation template. For a demonstration, see the examples for [AWS::SSMContacts::Contacts](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html) .
 *
 * @cloudformationResource AWS::SSMContacts::Rotation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html
 */
export declare class CfnRotation extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRotation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRotation;
    /**
     * The Amazon Resource Name (ARN) of the `Rotation` resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The Amazon Resource Names (ARNs) of the contacts to add to the rotation.
     */
    contactIds: Array<string>;
    /**
     * The name for the rotation.
     */
    name: string;
    /**
     * Information about the rule that specifies when shift team members rotate.
     */
    recurrence: cdk.IResolvable | CfnRotation.RecurrenceSettingsProperty;
    /**
     * The date and time the rotation goes into effect.
     */
    startTime: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Optional metadata to assign to the rotation.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The time zone to base the rotation’s activity on, in Internet Assigned Numbers Authority (IANA) format.
     */
    timeZoneId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRotationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRotation {
    /**
     * Information about when an on-call rotation is in effect and how long the rotation period lasts.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-recurrencesettings.html
     */
    interface RecurrenceSettingsProperty {
        /**
         * Information about on-call rotations that recur daily.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-recurrencesettings.html#cfn-ssmcontacts-rotation-recurrencesettings-dailysettings
         */
        readonly dailySettings?: Array<string>;
        /**
         * Information about on-call rotations that recur monthly.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-recurrencesettings.html#cfn-ssmcontacts-rotation-recurrencesettings-monthlysettings
         */
        readonly monthlySettings?: Array<cdk.IResolvable | CfnRotation.MonthlySettingProperty> | cdk.IResolvable;
        /**
         * The number of contacts, or shift team members designated to be on call concurrently during a shift.
         *
         * For example, in an on-call schedule that contains ten contacts, a value of `2` designates that two of them are on call at any given time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-recurrencesettings.html#cfn-ssmcontacts-rotation-recurrencesettings-numberofoncalls
         */
        readonly numberOfOnCalls: number;
        /**
         * The number of days, weeks, or months a single rotation lasts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-recurrencesettings.html#cfn-ssmcontacts-rotation-recurrencesettings-recurrencemultiplier
         */
        readonly recurrenceMultiplier: number;
        /**
         * Information about the days of the week included in on-call rotation coverage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-recurrencesettings.html#cfn-ssmcontacts-rotation-recurrencesettings-shiftcoverages
         */
        readonly shiftCoverages?: Array<cdk.IResolvable | CfnRotation.ShiftCoverageProperty> | cdk.IResolvable;
        /**
         * Information about on-call rotations that recur weekly.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-recurrencesettings.html#cfn-ssmcontacts-rotation-recurrencesettings-weeklysettings
         */
        readonly weeklySettings?: Array<cdk.IResolvable | CfnRotation.WeeklySettingProperty> | cdk.IResolvable;
    }
    /**
     * Information about the days of the week that the on-call rotation coverage includes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-shiftcoverage.html
     */
    interface ShiftCoverageProperty {
        /**
         * The start and end times of the shift.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-shiftcoverage.html#cfn-ssmcontacts-rotation-shiftcoverage-coveragetimes
         */
        readonly coverageTimes: Array<CfnRotation.CoverageTimeProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A list of days on which the schedule is active.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-shiftcoverage.html#cfn-ssmcontacts-rotation-shiftcoverage-dayofweek
         */
        readonly dayOfWeek: string;
    }
    /**
     * Information about when an on-call shift begins and ends.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-coveragetime.html
     */
    interface CoverageTimeProperty {
        /**
         * Information about when an on-call rotation shift ends.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-coveragetime.html#cfn-ssmcontacts-rotation-coveragetime-endtime
         */
        readonly endTime: string;
        /**
         * Information about when an on-call rotation shift begins.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-coveragetime.html#cfn-ssmcontacts-rotation-coveragetime-starttime
         */
        readonly startTime: string;
    }
    /**
     * Information about rotations that recur weekly.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-weeklysetting.html
     */
    interface WeeklySettingProperty {
        /**
         * The day of the week when weekly recurring on-call shift rotations begins.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-weeklysetting.html#cfn-ssmcontacts-rotation-weeklysetting-dayofweek
         */
        readonly dayOfWeek: string;
        /**
         * The time of day when a weekly recurring on-call shift rotation begins.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-weeklysetting.html#cfn-ssmcontacts-rotation-weeklysetting-handofftime
         */
        readonly handOffTime: string;
    }
    /**
     * Information about on-call rotations that recur monthly.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-monthlysetting.html
     */
    interface MonthlySettingProperty {
        /**
         * The day of the month when monthly recurring on-call rotations begin.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-monthlysetting.html#cfn-ssmcontacts-rotation-monthlysetting-dayofmonth
         */
        readonly dayOfMonth: number;
        /**
         * The time of day when a monthly recurring on-call shift rotation begins.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-monthlysetting.html#cfn-ssmcontacts-rotation-monthlysetting-handofftime
         */
        readonly handOffTime: string;
    }
}
/**
 * Properties for defining a `CfnRotation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html
 */
export interface CfnRotationProps {
    /**
     * The Amazon Resource Names (ARNs) of the contacts to add to the rotation.
     *
     * > Only the `PERSONAL` contact type is supported. The contact types `ESCALATION` and `ONCALL_SCHEDULE` are not supported for this operation.
     *
     * The order in which you list the contacts is their shift order in the rotation schedule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-contactids
     */
    readonly contactIds: Array<string>;
    /**
     * The name for the rotation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-name
     */
    readonly name: string;
    /**
     * Information about the rule that specifies when shift team members rotate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-recurrence
     */
    readonly recurrence: cdk.IResolvable | CfnRotation.RecurrenceSettingsProperty;
    /**
     * The date and time the rotation goes into effect.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-starttime
     */
    readonly startTime: string;
    /**
     * Optional metadata to assign to the rotation.
     *
     * Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For more information, see [Tagging Incident Manager resources](https://docs.aws.amazon.com/incident-manager/latest/userguide/tagging.html) in the *Incident Manager User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The time zone to base the rotation’s activity on, in Internet Assigned Numbers Authority (IANA) format.
     *
     * For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the [Time Zone Database](https://docs.aws.amazon.com/https://www.iana.org/time-zones) on the IANA website.
     *
     * > Designators for time zones that don’t support Daylight Savings Time rules, such as Pacific Standard Time (PST), are not supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-timezoneid
     */
    readonly timeZoneId: string;
}
