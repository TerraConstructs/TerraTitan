import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::Greengrass::ConnectorDefinition` resource represents a connector definition for AWS IoT Greengrass .
 *
 * Connector definitions are used to organize your connector definition versions.
 *
 * Connector definitions can reference multiple connector definition versions. All connector definition versions must be associated with a connector definition. Each connector definition version can contain one or more connectors.
 *
 * > When you create a connector definition, you can optionally include an initial connector definition version. To associate a connector definition version later, create an [`AWS::Greengrass::ConnectorDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html) resource and specify the ID of this connector definition.
 * >
 * > After you create the connector definition version that contains the connectors you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
 *
 * @cloudformationResource AWS::Greengrass::ConnectorDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html
 */
export declare class CfnConnectorDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConnectorDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConnectorDefinition;
    /**
     * The Amazon Resource Name (ARN) of the `ConnectorDefinition` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/connectors/1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the `ConnectorDefinition` , such as `1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ARN of the last `ConnectorDefinitionVersion` that was added to the `ConnectorDefinition` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/connectors/1234a5b6-78cd-901e-2fgh-3i45j6k178l9/versions/9876ac30-4bdb-4f9d-95af-b5fdb66be1a2` .
     *
     * @cloudformationAttribute LatestVersionArn
     */
    readonly attrLatestVersionArn: string;
    /**
     * The name of the `ConnectorDefinition` , such as `MyConnectorDefinition` .
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The connector definition version to include when the connector definition is created.
     */
    initialVersion?: CfnConnectorDefinition.ConnectorDefinitionVersionProperty | cdk.IResolvable;
    /**
     * The name of the connector definition.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Application-specific metadata to attach to the connector definition.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConnectorDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConnectorDefinition {
    /**
     * A connector definition version contains a list of connectors.
     *
     * > After you create a connector definition version that contains the connectors you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
     *
     * In an AWS CloudFormation template, `ConnectorDefinitionVersion` is the property type of the `InitialVersion` property in the [`AWS::Greengrass::ConnectorDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connectordefinitionversion.html
     */
    interface ConnectorDefinitionVersionProperty {
        /**
         * The connectors in this version.
         *
         * Only one instance of a given connector can be added to a connector definition version at a time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connectordefinitionversion.html#cfn-greengrass-connectordefinition-connectordefinitionversion-connectors
         */
        readonly connectors: Array<CfnConnectorDefinition.ConnectorProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Connectors are modules that provide built-in integration with local infrastructure, device protocols, AWS , and other cloud services.
     *
     * For more information, see [Integrate with Services and Protocols Using Greengrass Connectors](https://docs.aws.amazon.com/greengrass/v1/developerguide/connectors.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, the `Connectors` property of the [`ConnectorDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connectordefinitionversion.html) property type contains a list of `Connector` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connector.html
     */
    interface ConnectorProperty {
        /**
         * The Amazon Resource Name (ARN) of the connector.
         *
         * For more information about connectors provided by AWS , see [Greengrass Connectors Provided by AWS](https://docs.aws.amazon.com/greengrass/v1/developerguide/connectors-list.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connector.html#cfn-greengrass-connectordefinition-connector-connectorarn
         */
        readonly connectorArn: string;
        /**
         * A descriptive or arbitrary ID for the connector.
         *
         * This value must be unique within the connector definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connector.html#cfn-greengrass-connectordefinition-connector-id
         */
        readonly id: string;
        /**
         * The parameters or configuration used by the connector.
         *
         * For more information about connectors provided by AWS , see [Greengrass Connectors Provided by AWS](https://docs.aws.amazon.com/greengrass/v1/developerguide/connectors-list.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connector.html#cfn-greengrass-connectordefinition-connector-parameters
         */
        readonly parameters?: any | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnConnectorDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html
 */
export interface CfnConnectorDefinitionProps {
    /**
     * The connector definition version to include when the connector definition is created.
     *
     * A connector definition version contains a list of [`connector`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connector.html) property types.
     *
     * > To associate a connector definition version after the connector definition is created, create an [`AWS::Greengrass::ConnectorDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html) resource and specify the ID of this connector definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html#cfn-greengrass-connectordefinition-initialversion
     */
    readonly initialVersion?: CfnConnectorDefinition.ConnectorDefinitionVersionProperty | cdk.IResolvable;
    /**
     * The name of the connector definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html#cfn-greengrass-connectordefinition-name
     */
    readonly name: string;
    /**
     * Application-specific metadata to attach to the connector definition.
     *
     * You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/v1/developerguide/tagging.html) in the *Developer Guide* .
     *
     * This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
     *
     * ```json
     * "Tags": { "KeyName0": "value", "KeyName1": "value", "KeyName2": "value"
     * }
     * ```
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html#cfn-greengrass-connectordefinition-tags
     */
    readonly tags?: any;
}
/**
 * The `AWS::Greengrass::ConnectorDefinitionVersion` resource represents a connector definition version for AWS IoT Greengrass .
 *
 * A connector definition version contains a list of connectors.
 *
 * > To create a connector definition version, you must specify the ID of the connector definition that you want to associate with the version. For information about creating a connector definition, see [`AWS::Greengrass::ConnectorDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html) .
 * >
 * > After you create a connector definition version that contains the connectors you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
 *
 * @cloudformationResource AWS::Greengrass::ConnectorDefinitionVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html
 */
export declare class CfnConnectorDefinitionVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConnectorDefinitionVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConnectorDefinitionVersion;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ID of the connector definition associated with this version.
     */
    connectorDefinitionId: string;
    /**
     * The connectors in this version.
     */
    connectors: Array<CfnConnectorDefinitionVersion.ConnectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConnectorDefinitionVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConnectorDefinitionVersion {
    /**
     * Connectors are modules that provide built-in integration with local infrastructure, device protocols, AWS , and other cloud services.
     *
     * For more information, see [Integrate with Services and Protocols Using Greengrass Connectors](https://docs.aws.amazon.com/greengrass/v1/developerguide/connectors.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, the `Connectors` property of the [`AWS::Greengrass::ConnectorDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html) resource contains a list of `Connector` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinitionversion-connector.html
     */
    interface ConnectorProperty {
        /**
         * The Amazon Resource Name (ARN) of the connector.
         *
         * For more information about connectors provided by AWS , see [Greengrass Connectors Provided by AWS](https://docs.aws.amazon.com/greengrass/v1/developerguide/connectors-list.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinitionversion-connector.html#cfn-greengrass-connectordefinitionversion-connector-connectorarn
         */
        readonly connectorArn: string;
        /**
         * A descriptive or arbitrary ID for the connector.
         *
         * This value must be unique within the connector definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinitionversion-connector.html#cfn-greengrass-connectordefinitionversion-connector-id
         */
        readonly id: string;
        /**
         * The parameters or configuration that the connector uses.
         *
         * For more information about connectors provided by AWS , see [Greengrass Connectors Provided by AWS](https://docs.aws.amazon.com/greengrass/v1/developerguide/connectors-list.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinitionversion-connector.html#cfn-greengrass-connectordefinitionversion-connector-parameters
         */
        readonly parameters?: any | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnConnectorDefinitionVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html
 */
export interface CfnConnectorDefinitionVersionProps {
    /**
     * The ID of the connector definition associated with this version.
     *
     * This value is a GUID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html#cfn-greengrass-connectordefinitionversion-connectordefinitionid
     */
    readonly connectorDefinitionId: string;
    /**
     * The connectors in this version.
     *
     * Only one instance of a given connector can be added to the connector definition version at a time.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html#cfn-greengrass-connectordefinitionversion-connectors
     */
    readonly connectors: Array<CfnConnectorDefinitionVersion.ConnectorProperty | cdk.IResolvable> | cdk.IResolvable;
}
/**
 * The `AWS::Greengrass::CoreDefinition` resource represents a core definition for AWS IoT Greengrass .
 *
 * Core definitions are used to organize your core definition versions.
 *
 * Core definitions can reference multiple core definition versions. All core definition versions must be associated with a core definition. Each core definition version can contain one Greengrass core.
 *
 * > When you create a core definition, you can optionally include an initial core definition version. To associate a core definition version later, create an [`AWS::Greengrass::CoreDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html) resource and specify the ID of this core definition.
 * >
 * > After you create the core definition version that contains the core you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
 *
 * @cloudformationResource AWS::Greengrass::CoreDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html
 */
export declare class CfnCoreDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCoreDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCoreDefinition;
    /**
     * The Amazon Resource Name (ARN) of the `CoreDefinition` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/cores/1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the `CoreDefinition` , such as `1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ARN of the last `CoreDefinitionVersion` that was added to the `CoreDefinition` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/cores/1234a5b6-78cd-901e-2fgh-3i45j6k178l9/versions/9876ac30-4bdb-4f9d-95af-b5fdb66be1a2` .
     *
     * @cloudformationAttribute LatestVersionArn
     */
    readonly attrLatestVersionArn: string;
    /**
     * The name of the `CoreDefinition` , such as `MyCoreDefinition` .
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The core definition version to include when the core definition is created.
     */
    initialVersion?: CfnCoreDefinition.CoreDefinitionVersionProperty | cdk.IResolvable;
    /**
     * The name of the core definition.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Application-specific metadata to attach to the core definition.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCoreDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCoreDefinition {
    /**
     * A core definition version contains a Greengrass [core](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-core.html) .
     *
     * > After you create a core definition version that contains the core you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
     *
     * In an AWS CloudFormation template, `CoreDefinitionVersion` is the property type of the `InitialVersion` property in the [`AWS::Greengrass::CoreDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-coredefinitionversion.html
     */
    interface CoreDefinitionVersionProperty {
        /**
         * The Greengrass core in this version.
         *
         * Currently, the `Cores` property for a core definition version can contain only one core.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-coredefinitionversion.html#cfn-greengrass-coredefinition-coredefinitionversion-cores
         */
        readonly cores: Array<CfnCoreDefinition.CoreProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * A core is an AWS IoT device that runs the AWS IoT Greengrass core software and manages local processes for a Greengrass group.
     *
     * For more information, see [What Is AWS IoT Greengrass ?](https://docs.aws.amazon.com/greengrass/v1/developerguide/what-is-gg.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, the `Cores` property of the [`CoreDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-coredefinitionversion.html) property type contains a list of `Core` property types. Currently, the list can contain only one core.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-core.html
     */
    interface CoreProperty {
        /**
         * The Amazon Resource Name (ARN) of the device certificate for the core.
         *
         * This X.509 certificate is used to authenticate the core with AWS IoT and AWS IoT Greengrass services.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-core.html#cfn-greengrass-coredefinition-core-certificatearn
         */
        readonly certificateArn: string;
        /**
         * A descriptive or arbitrary ID for the core.
         *
         * This value must be unique within the core definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-core.html#cfn-greengrass-coredefinition-core-id
         */
        readonly id: string;
        /**
         * Indicates whether the core's local shadow is synced with the cloud automatically.
         *
         * The default is false.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-core.html#cfn-greengrass-coredefinition-core-syncshadow
         */
        readonly syncShadow?: boolean | cdk.IResolvable;
        /**
         * The ARN of the core, which is an AWS IoT device (thing).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-core.html#cfn-greengrass-coredefinition-core-thingarn
         */
        readonly thingArn: string;
    }
}
/**
 * Properties for defining a `CfnCoreDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html
 */
export interface CfnCoreDefinitionProps {
    /**
     * The core definition version to include when the core definition is created.
     *
     * Currently, a core definition version can contain only one [`core`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-core.html) .
     *
     * > To associate a core definition version after the core definition is created, create an [`AWS::Greengrass::CoreDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html) resource and specify the ID of this core definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html#cfn-greengrass-coredefinition-initialversion
     */
    readonly initialVersion?: CfnCoreDefinition.CoreDefinitionVersionProperty | cdk.IResolvable;
    /**
     * The name of the core definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html#cfn-greengrass-coredefinition-name
     */
    readonly name: string;
    /**
     * Application-specific metadata to attach to the core definition.
     *
     * You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/v1/developerguide/tagging.html) in the *Developer Guide* .
     *
     * This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
     *
     * ```json
     * "Tags": { "KeyName0": "value", "KeyName1": "value", "KeyName2": "value"
     * }
     * ```
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html#cfn-greengrass-coredefinition-tags
     */
    readonly tags?: any;
}
/**
 * The `AWS::Greengrass::CoreDefinitionVersion` resource represents a core definition version for AWS IoT Greengrass .
 *
 * A core definition version contains a Greengrass core.
 *
 * > To create a core definition version, you must specify the ID of the core definition that you want to associate with the version. For information about creating a core definition, see [`AWS::Greengrass::CoreDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html) .
 * >
 * > After you create a core definition version that contains the core you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
 *
 * @cloudformationResource AWS::Greengrass::CoreDefinitionVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html
 */
export declare class CfnCoreDefinitionVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCoreDefinitionVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCoreDefinitionVersion;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ID of the core definition associated with this version.
     */
    coreDefinitionId: string;
    /**
     * The Greengrass core in this version.
     */
    cores: Array<CfnCoreDefinitionVersion.CoreProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCoreDefinitionVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCoreDefinitionVersion {
    /**
     * A core is an AWS IoT device that runs the AWS IoT Greengrass core software and manages local processes for a Greengrass group.
     *
     * For more information, see [What Is AWS IoT Greengrass ?](https://docs.aws.amazon.com/greengrass/v1/developerguide/what-is-gg.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, the `Cores` property of the [`AWS::Greengrass::CoreDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html) resource contains a list of `Core` property types. Currently, the list can contain only one core.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinitionversion-core.html
     */
    interface CoreProperty {
        /**
         * The ARN of the device certificate for the core.
         *
         * This X.509 certificate is used to authenticate the core with AWS IoT and AWS IoT Greengrass services.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinitionversion-core.html#cfn-greengrass-coredefinitionversion-core-certificatearn
         */
        readonly certificateArn: string;
        /**
         * A descriptive or arbitrary ID for the core.
         *
         * This value must be unique within the core definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinitionversion-core.html#cfn-greengrass-coredefinitionversion-core-id
         */
        readonly id: string;
        /**
         * Indicates whether the core's local shadow is synced with the cloud automatically.
         *
         * The default is false.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinitionversion-core.html#cfn-greengrass-coredefinitionversion-core-syncshadow
         */
        readonly syncShadow?: boolean | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of the core, which is an AWS IoT device (thing).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinitionversion-core.html#cfn-greengrass-coredefinitionversion-core-thingarn
         */
        readonly thingArn: string;
    }
}
/**
 * Properties for defining a `CfnCoreDefinitionVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html
 */
export interface CfnCoreDefinitionVersionProps {
    /**
     * The ID of the core definition associated with this version.
     *
     * This value is a GUID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html#cfn-greengrass-coredefinitionversion-coredefinitionid
     */
    readonly coreDefinitionId: string;
    /**
     * The Greengrass core in this version.
     *
     * Currently, the `Cores` property for a core definition version can contain only one core.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html#cfn-greengrass-coredefinitionversion-cores
     */
    readonly cores: Array<CfnCoreDefinitionVersion.CoreProperty | cdk.IResolvable> | cdk.IResolvable;
}
/**
 * The `AWS::Greengrass::DeviceDefinition` resource represents a device definition for AWS IoT Greengrass .
 *
 * Device definitions are used to organize your device definition versions.
 *
 * Device definitions can reference multiple device definition versions. All device definition versions must be associated with a device definition. Each device definition version can contain one or more devices.
 *
 * > When you create a device definition, you can optionally include an initial device definition version. To associate a device definition version later, create an [`AWS::Greengrass::DeviceDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html) resource and specify the ID of this device definition.
 * >
 * > After you create the device definition version that contains the devices you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
 *
 * @cloudformationResource AWS::Greengrass::DeviceDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html
 */
export declare class CfnDeviceDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDeviceDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDeviceDefinition;
    /**
     * The Amazon Resource Name (ARN) of the `DeviceDefinition` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/devices/1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the `DeviceDefinition` , such as `1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ARN of the last `DeviceDefinitionVersion` that was added to the `DeviceDefinition` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/devices/1234a5b6-78cd-901e-2fgh-3i45j6k178l9/versions/9876ac30-4bdb-4f9d-95af-b5fdb66be1a2` .
     *
     * @cloudformationAttribute LatestVersionArn
     */
    readonly attrLatestVersionArn: string;
    /**
     * The name of the device definition.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The device definition version to include when the device definition is created.
     */
    initialVersion?: CfnDeviceDefinition.DeviceDefinitionVersionProperty | cdk.IResolvable;
    /**
     * The name of the device definition.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Application-specific metadata to attach to the device definition.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDeviceDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDeviceDefinition {
    /**
     * A device definition version contains a list of [devices](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-device.html) .
     *
     * > After you create a device definition version that contains the devices you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
     *
     * In an AWS CloudFormation template, `DeviceDefinitionVersion` is the property type of the `InitialVersion` property in the [`AWS::Greengrass::DeviceDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-devicedefinitionversion.html
     */
    interface DeviceDefinitionVersionProperty {
        /**
         * The devices in this version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-devicedefinitionversion.html#cfn-greengrass-devicedefinition-devicedefinitionversion-devices
         */
        readonly devices: Array<CfnDeviceDefinition.DeviceProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * A device is an AWS IoT device (thing) that's added to a Greengrass group.
     *
     * Greengrass devices can communicate with the Greengrass core in the same group. For more information, see [What Is AWS IoT Greengrass ?](https://docs.aws.amazon.com/greengrass/v1/developerguide/what-is-gg.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, the `Devices` property of the [`DeviceDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-devicedefinitionversion.html) property type contains a list of `Device` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-device.html
     */
    interface DeviceProperty {
        /**
         * The Amazon Resource Name (ARN) of the device certificate for the device.
         *
         * This X.509 certificate is used to authenticate the device with AWS IoT and AWS IoT Greengrass services.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-device.html#cfn-greengrass-devicedefinition-device-certificatearn
         */
        readonly certificateArn: string;
        /**
         * A descriptive or arbitrary ID for the device.
         *
         * This value must be unique within the device definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-device.html#cfn-greengrass-devicedefinition-device-id
         */
        readonly id: string;
        /**
         * Indicates whether the device's local shadow is synced with the cloud automatically.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-device.html#cfn-greengrass-devicedefinition-device-syncshadow
         */
        readonly syncShadow?: boolean | cdk.IResolvable;
        /**
         * The ARN of the device, which is an AWS IoT device (thing).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-device.html#cfn-greengrass-devicedefinition-device-thingarn
         */
        readonly thingArn: string;
    }
}
/**
 * Properties for defining a `CfnDeviceDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html
 */
export interface CfnDeviceDefinitionProps {
    /**
     * The device definition version to include when the device definition is created.
     *
     * A device definition version contains a list of [`device`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-device.html) property types.
     *
     * > To associate a device definition version after the device definition is created, create an [`AWS::Greengrass::DeviceDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html) resource and specify the ID of this device definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html#cfn-greengrass-devicedefinition-initialversion
     */
    readonly initialVersion?: CfnDeviceDefinition.DeviceDefinitionVersionProperty | cdk.IResolvable;
    /**
     * The name of the device definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html#cfn-greengrass-devicedefinition-name
     */
    readonly name: string;
    /**
     * Application-specific metadata to attach to the device definition.
     *
     * You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/v1/developerguide/tagging.html) in the *Developer Guide* .
     *
     * This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
     *
     * ```json
     * "Tags": { "KeyName0": "value", "KeyName1": "value", "KeyName2": "value"
     * }
     * ```
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html#cfn-greengrass-devicedefinition-tags
     */
    readonly tags?: any;
}
/**
 * The `AWS::Greengrass::DeviceDefinitionVersion` resource represents a device definition version for AWS IoT Greengrass .
 *
 * A device definition version contains a list of devices.
 *
 * > To create a device definition version, you must specify the ID of the device definition that you want to associate with the version. For information about creating a device definition, see [`AWS::Greengrass::DeviceDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html) .
 * >
 * > After you create a device definition version that contains the devices you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
 *
 * @cloudformationResource AWS::Greengrass::DeviceDefinitionVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html
 */
export declare class CfnDeviceDefinitionVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDeviceDefinitionVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDeviceDefinitionVersion;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ID of the device definition associated with this version.
     */
    deviceDefinitionId: string;
    /**
     * The devices in this version.
     */
    devices: Array<CfnDeviceDefinitionVersion.DeviceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDeviceDefinitionVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDeviceDefinitionVersion {
    /**
     * A device is an AWS IoT device (thing) that's added to a Greengrass group.
     *
     * Greengrass devices can communicate with the Greengrass core in the same group. For more information, see [What Is AWS IoT Greengrass ?](https://docs.aws.amazon.com/greengrass/v1/developerguide/what-is-gg.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, the `Devices` property of the [`AWS::Greengrass::DeviceDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html) resource contains a list of `Device` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinitionversion-device.html
     */
    interface DeviceProperty {
        /**
         * The ARN of the device certificate for the device.
         *
         * This X.509 certificate is used to authenticate the device with AWS IoT and AWS IoT Greengrass services.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinitionversion-device.html#cfn-greengrass-devicedefinitionversion-device-certificatearn
         */
        readonly certificateArn: string;
        /**
         * A descriptive or arbitrary ID for the device.
         *
         * This value must be unique within the device definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinitionversion-device.html#cfn-greengrass-devicedefinitionversion-device-id
         */
        readonly id: string;
        /**
         * Indicates whether the device's local shadow is synced with the cloud automatically.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinitionversion-device.html#cfn-greengrass-devicedefinitionversion-device-syncshadow
         */
        readonly syncShadow?: boolean | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of the device, which is an AWS IoT device (thing).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinitionversion-device.html#cfn-greengrass-devicedefinitionversion-device-thingarn
         */
        readonly thingArn: string;
    }
}
/**
 * Properties for defining a `CfnDeviceDefinitionVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html
 */
export interface CfnDeviceDefinitionVersionProps {
    /**
     * The ID of the device definition associated with this version.
     *
     * This value is a GUID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html#cfn-greengrass-devicedefinitionversion-devicedefinitionid
     */
    readonly deviceDefinitionId: string;
    /**
     * The devices in this version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html#cfn-greengrass-devicedefinitionversion-devices
     */
    readonly devices: Array<CfnDeviceDefinitionVersion.DeviceProperty | cdk.IResolvable> | cdk.IResolvable;
}
/**
 * The `AWS::Greengrass::FunctionDefinition` resource represents a function definition for AWS IoT Greengrass .
 *
 * Function definitions are used to organize your function definition versions.
 *
 * Function definitions can reference multiple function definition versions. All function definition versions must be associated with a function definition. Each function definition version can contain one or more functions.
 *
 * > When you create a function definition, you can optionally include an initial function definition version. To associate a function definition version later, create an [`AWS::Greengrass::FunctionDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html) resource and specify the ID of this function definition.
 * >
 * > After you create the function definition version that contains the functions you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
 *
 * @cloudformationResource AWS::Greengrass::FunctionDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html
 */
export declare class CfnFunctionDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFunctionDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFunctionDefinition;
    /**
     * The Amazon Resource Name (ARN) of the `FunctionDefinition` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/functions/1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the `FunctionDefinition` , such as `1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ARN of the last `FunctionDefinitionVersion` that was added to the `FunctionDefinition` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/functions/1234a5b6-78cd-901e-2fgh-3i45j6k178l9/versions/9876ac30-4bdb-4f9d-95af-b5fdb66be1a2` .
     *
     * @cloudformationAttribute LatestVersionArn
     */
    readonly attrLatestVersionArn: string;
    /**
     * The name of the `FunctionDefinition` , such as `MyFunctionDefinition` .
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The function definition version to include when the function definition is created.
     */
    initialVersion?: CfnFunctionDefinition.FunctionDefinitionVersionProperty | cdk.IResolvable;
    /**
     * The name of the function definition.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Application-specific metadata to attach to the function definition.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFunctionDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFunctionDefinition {
    /**
     * A function definition version contains a list of functions.
     *
     * > After you create a function definition version that contains the functions you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
     *
     * In an AWS CloudFormation template, `FunctionDefinitionVersion` is the property type of the `InitialVersion` property in the [`AWS::Greengrass::FunctionDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functiondefinitionversion.html
     */
    interface FunctionDefinitionVersionProperty {
        /**
         * The default configuration that applies to all Lambda functions in the group.
         *
         * Individual Lambda functions can override these settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functiondefinitionversion.html#cfn-greengrass-functiondefinition-functiondefinitionversion-defaultconfig
         */
        readonly defaultConfig?: CfnFunctionDefinition.DefaultConfigProperty | cdk.IResolvable;
        /**
         * The functions in this version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functiondefinitionversion.html#cfn-greengrass-functiondefinition-functiondefinitionversion-functions
         */
        readonly functions: Array<CfnFunctionDefinition.FunctionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The default configuration that applies to all Lambda functions in the function definition version.
     *
     * Individual Lambda functions can override these settings.
     *
     * In an AWS CloudFormation template, `DefaultConfig` is a property of the [`FunctionDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functiondefinitionversion.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-defaultconfig.html
     */
    interface DefaultConfigProperty {
        /**
         * Configuration settings for the Lambda execution environment on the AWS IoT Greengrass core.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-defaultconfig.html#cfn-greengrass-functiondefinition-defaultconfig-execution
         */
        readonly execution: CfnFunctionDefinition.ExecutionProperty | cdk.IResolvable;
    }
    /**
     * Configuration settings for the Lambda execution environment on the AWS IoT Greengrass core.
     *
     * In an AWS CloudFormation template, `Execution` is a property of the [`DefaultConfig`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-defaultconfig.html) property type for a function definition version and the [`Environment`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-environment.html) property type for a function.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-execution.html
     */
    interface ExecutionProperty {
        /**
         * The containerization that the Lambda function runs in.
         *
         * Valid values are `GreengrassContainer` or `NoContainer` . Typically, this is `GreengrassContainer` . For more information, see [Containerization](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html#lambda-function-containerization) in the *Developer Guide* .
         *
         * - When set on the [`DefaultConfig`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-defaultconfig.html) property of a function definition version, this setting is used as the default containerization for all Lambda functions in the function definition version.
         * - When set on the [`Environment`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html) property of a function, this setting applies to the individual function and overrides the default. Omit this value to run the function with the default containerization.
         *
         * > We recommend that you run in a Greengrass container unless your business case requires that you run without containerization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-execution.html#cfn-greengrass-functiondefinition-execution-isolationmode
         */
        readonly isolationMode?: string;
        /**
         * The user and group permissions used to run the Lambda function.
         *
         * Typically, this is the ggc_user and ggc_group. For more information, see [Run as](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html#lambda-access-identity.html) in the *Developer Guide* .
         *
         * - When set on the [`DefaultConfig`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-defaultconfig.html) property of a function definition version, this setting is used as the default access identity for all Lambda functions in the function definition version.
         * - When set on the [`Environment`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html) property of a function, this setting applies to the individual function and overrides the default. You can override the user, group, or both. Omit this value to run the function with the default permissions.
         *
         * > Running as the root user increases risks to your data and device. Do not run as root (UID/GID=0) unless your business case requires it. For more information and requirements, see [Running a Lambda Function as Root](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html#lambda-running-as-root) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-execution.html#cfn-greengrass-functiondefinition-execution-runas
         */
        readonly runAs?: cdk.IResolvable | CfnFunctionDefinition.RunAsProperty;
    }
    /**
     * The access identity whose permissions are used to run the Lambda function.
     *
     * This setting overrides the default access identity that's specified for the group (by default, ggc_user and ggc_group). You can override the user, group, or both. For more information, see [Run as](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html#lambda-access-identity.html) in the *Developer Guide* .
     *
     * > Running as the root user increases risks to your data and device. Do not run as root (UID/GID=0) unless your business case requires it. For more information and requirements, see [Running a Lambda Function as Root](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html#lambda-running-as-root) .
     *
     * In an AWS CloudFormation template, `RunAs` is a property of the [`Execution`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-execution.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-runas.html
     */
    interface RunAsProperty {
        /**
         * The group ID whose permissions are used to run the Lambda function.
         *
         * You can use the `getent group` command on your core device to look up the group ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-runas.html#cfn-greengrass-functiondefinition-runas-gid
         */
        readonly gid?: number;
        /**
         * The user ID whose permissions are used to run the Lambda function.
         *
         * You can use the `getent passwd` command on your core device to look up the user ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-runas.html#cfn-greengrass-functiondefinition-runas-uid
         */
        readonly uid?: number;
    }
    /**
     * A function is a Lambda function that's referenced from an AWS IoT Greengrass group.
     *
     * The function is deployed to a Greengrass core where it runs locally. For more information, see [Run Lambda Functions on the AWS IoT Greengrass Core](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-functions.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, the `Functions` property of the [`FunctionDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functiondefinitionversion.html) property type contains a list of `Function` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-function.html
     */
    interface FunctionProperty {
        /**
         * The Amazon Resource Name (ARN) of the alias (recommended) or version of the referenced Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-function.html#cfn-greengrass-functiondefinition-function-functionarn
         */
        readonly functionArn: string;
        /**
         * The group-specific settings of the Lambda function.
         *
         * These settings configure the function's behavior in the Greengrass group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-function.html#cfn-greengrass-functiondefinition-function-functionconfiguration
         */
        readonly functionConfiguration: CfnFunctionDefinition.FunctionConfigurationProperty | cdk.IResolvable;
        /**
         * A descriptive or arbitrary ID for the function.
         *
         * This value must be unique within the function definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-function.html#cfn-greengrass-functiondefinition-function-id
         */
        readonly id: string;
    }
    /**
     * The group-specific configuration settings for a Lambda function.
     *
     * These settings configure the function's behavior in the Greengrass group. For more information, see [Controlling Execution of Greengrass Lambda Functions by Using Group-Specific Configuration](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, `FunctionConfiguration` is a property of the [`Function`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-function.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functionconfiguration.html
     */
    interface FunctionConfigurationProperty {
        /**
         * The expected encoding type of the input payload for the function.
         *
         * Valid values are `json` (default) and `binary` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functionconfiguration.html#cfn-greengrass-functiondefinition-functionconfiguration-encodingtype
         */
        readonly encodingType?: string;
        /**
         * The environment configuration of the function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functionconfiguration.html#cfn-greengrass-functiondefinition-functionconfiguration-environment
         */
        readonly environment?: CfnFunctionDefinition.EnvironmentProperty | cdk.IResolvable;
        /**
         * The execution arguments.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functionconfiguration.html#cfn-greengrass-functiondefinition-functionconfiguration-execargs
         */
        readonly execArgs?: string;
        /**
         * The name of the function executable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functionconfiguration.html#cfn-greengrass-functiondefinition-functionconfiguration-executable
         */
        readonly executable?: string;
        /**
         * The memory size (in KB) required by the function.
         *
         * > This property applies only to Lambda functions that run in a Greengrass container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functionconfiguration.html#cfn-greengrass-functiondefinition-functionconfiguration-memorysize
         */
        readonly memorySize?: number;
        /**
         * Indicates whether the function is pinned (or *long-lived* ).
         *
         * Pinned functions start when the core starts and process all requests in the same container. The default value is false.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functionconfiguration.html#cfn-greengrass-functiondefinition-functionconfiguration-pinned
         */
        readonly pinned?: boolean | cdk.IResolvable;
        /**
         * The allowed execution time (in seconds) after which the function should terminate.
         *
         * For pinned functions, this timeout applies for each request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functionconfiguration.html#cfn-greengrass-functiondefinition-functionconfiguration-timeout
         */
        readonly timeout?: number;
    }
    /**
     * The environment configuration for a Lambda function on the AWS IoT Greengrass core.
     *
     * In an AWS CloudFormation template, `Environment` is a property of the [`FunctionConfiguration`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functionconfiguration.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-environment.html
     */
    interface EnvironmentProperty {
        /**
         * Indicates whether the function is allowed to access the `/sys` directory on the core device, which allows the read device information from `/sys` .
         *
         * > This property applies only to Lambda functions that run in a Greengrass container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-environment.html#cfn-greengrass-functiondefinition-environment-accesssysfs
         */
        readonly accessSysfs?: boolean | cdk.IResolvable;
        /**
         * Settings for the Lambda execution environment in AWS IoT Greengrass .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-environment.html#cfn-greengrass-functiondefinition-environment-execution
         */
        readonly execution?: CfnFunctionDefinition.ExecutionProperty | cdk.IResolvable;
        /**
         * A list of the [resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html) in the group that the function can access, with the corresponding read-only or read-write permissions. The maximum is 10 resources.
         *
         * > This property applies only for Lambda functions that run in a Greengrass container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-environment.html#cfn-greengrass-functiondefinition-environment-resourceaccesspolicies
         */
        readonly resourceAccessPolicies?: Array<cdk.IResolvable | CfnFunctionDefinition.ResourceAccessPolicyProperty> | cdk.IResolvable;
        /**
         * Environment variables for the Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-environment.html#cfn-greengrass-functiondefinition-environment-variables
         */
        readonly variables?: any | cdk.IResolvable;
    }
    /**
     * A list of the [resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html) in the group that the function can access, with the corresponding read-only or read-write permissions. The maximum is 10 resources.
     *
     * > This property applies only to Lambda functions that run in a Greengrass container.
     *
     * In an AWS CloudFormation template, `ResourceAccessPolicy` is a property of the [`Environment`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-environment.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-resourceaccesspolicy.html
     */
    interface ResourceAccessPolicyProperty {
        /**
         * The read-only or read-write access that the Lambda function has to the resource.
         *
         * Valid values are `ro` or `rw` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-resourceaccesspolicy.html#cfn-greengrass-functiondefinition-resourceaccesspolicy-permission
         */
        readonly permission?: string;
        /**
         * The ID of the resource.
         *
         * This ID is assigned to the resource when you create the resource definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-resourceaccesspolicy.html#cfn-greengrass-functiondefinition-resourceaccesspolicy-resourceid
         */
        readonly resourceId: string;
    }
}
/**
 * Properties for defining a `CfnFunctionDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html
 */
export interface CfnFunctionDefinitionProps {
    /**
     * The function definition version to include when the function definition is created.
     *
     * A function definition version contains a list of [`function`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-function.html) property types.
     *
     * > To associate a function definition version after the function definition is created, create an [`AWS::Greengrass::FunctionDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html) resource and specify the ID of this function definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html#cfn-greengrass-functiondefinition-initialversion
     */
    readonly initialVersion?: CfnFunctionDefinition.FunctionDefinitionVersionProperty | cdk.IResolvable;
    /**
     * The name of the function definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html#cfn-greengrass-functiondefinition-name
     */
    readonly name: string;
    /**
     * Application-specific metadata to attach to the function definition.
     *
     * You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/v1/developerguide/tagging.html) in the *Developer Guide* .
     *
     * This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
     *
     * ```json
     * "Tags": { "KeyName0": "value", "KeyName1": "value", "KeyName2": "value"
     * }
     * ```
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html#cfn-greengrass-functiondefinition-tags
     */
    readonly tags?: any;
}
/**
 * The `AWS::Greengrass::FunctionDefinitionVersion` resource represents a function definition version for AWS IoT Greengrass .
 *
 * A function definition version contains contain a list of functions.
 *
 * > To create a function definition version, you must specify the ID of the function definition that you want to associate with the version. For information about creating a function definition, see [`AWS::Greengrass::FunctionDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html) .
 * >
 * > After you create a function definition version that contains the functions you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
 *
 * @cloudformationResource AWS::Greengrass::FunctionDefinitionVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html
 */
export declare class CfnFunctionDefinitionVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFunctionDefinitionVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFunctionDefinitionVersion;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The default configuration that applies to all Lambda functions in the group.
     */
    defaultConfig?: CfnFunctionDefinitionVersion.DefaultConfigProperty | cdk.IResolvable;
    /**
     * The ID of the function definition associated with this version.
     */
    functionDefinitionId: string;
    /**
     * The functions in this version.
     */
    functions: Array<CfnFunctionDefinitionVersion.FunctionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFunctionDefinitionVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFunctionDefinitionVersion {
    /**
     * The default configuration that applies to all Lambda functions in the function definition version.
     *
     * Individual Lambda functions can override these settings.
     *
     * In an AWS CloudFormation template, `DefaultConfig` is a property of the [`AWS::Greengrass::FunctionDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-defaultconfig.html
     */
    interface DefaultConfigProperty {
        /**
         * Configuration settings for the Lambda execution environment on the AWS IoT Greengrass core.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-defaultconfig.html#cfn-greengrass-functiondefinitionversion-defaultconfig-execution
         */
        readonly execution: CfnFunctionDefinitionVersion.ExecutionProperty | cdk.IResolvable;
    }
    /**
     * Configuration settings for the Lambda execution environment on the AWS IoT Greengrass core.
     *
     * In an AWS CloudFormation template, `Execution` is a property of the [`DefaultConfig`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-defaultconfig.html) property type for a function definition version and the [`Environment`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html) property type for a function.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-execution.html
     */
    interface ExecutionProperty {
        /**
         * The containerization that the Lambda function runs in.
         *
         * Valid values are `GreengrassContainer` or `NoContainer` . Typically, this is `GreengrassContainer` . For more information, see [Containerization](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html#lambda-function-containerization) in the *Developer Guide* .
         *
         * - When set on the [`DefaultConfig`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-defaultconfig.html) property of a function definition version, this setting is used as the default containerization for all Lambda functions in the function definition version.
         * - When set on the [`Environment`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html) property of a function, this setting applies to the individual function and overrides the default. Omit this value to run the function with the default containerization.
         *
         * > We recommend that you run in a Greengrass container unless your business case requires that you run without containerization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-execution.html#cfn-greengrass-functiondefinitionversion-execution-isolationmode
         */
        readonly isolationMode?: string;
        /**
         * The user and group permissions used to run the Lambda function.
         *
         * Typically, this is the ggc_user and ggc_group. For more information, see [Run as](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html#lambda-access-identity.html) in the *Developer Guide* .
         *
         * - When set on the [`DefaultConfig`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-defaultconfig.html) property of a function definition version, this setting is used as the default access identity for all Lambda functions in the function definition version.
         * - When set on the [`Environment`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html) property of a function, this setting applies to the individual function and overrides the default. You can override the user, group, or both. Omit this value to run the function with the default permissions.
         *
         * > Running as the root user increases risks to your data and device. Do not run as root (UID/GID=0) unless your business case requires it. For more information and requirements, see [Running a Lambda Function as Root](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html#lambda-running-as-root) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-execution.html#cfn-greengrass-functiondefinitionversion-execution-runas
         */
        readonly runAs?: cdk.IResolvable | CfnFunctionDefinitionVersion.RunAsProperty;
    }
    /**
     * The user and group permissions used to run the Lambda function.
     *
     * This setting overrides the default access identity that's specified for the group (by default, ggc_user and ggc_group). You can override the user, group, or both. For more information, see [Run as](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html#lambda-access-identity.html) in the *Developer Guide* .
     *
     * > Running as the root user increases risks to your data and device. Do not run as root (UID/GID=0) unless your business case requires it. For more information and requirements, see [Running a Lambda Function as Root](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html#lambda-running-as-root) .
     *
     * In an AWS CloudFormation template, `RunAs` is a property of the [`Execution`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-execution.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-runas.html
     */
    interface RunAsProperty {
        /**
         * The group ID whose permissions are used to run the Lambda function.
         *
         * You can use the `getent group` command on your core device to look up the group ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-runas.html#cfn-greengrass-functiondefinitionversion-runas-gid
         */
        readonly gid?: number;
        /**
         * The user ID whose permissions are used to run the Lambda function.
         *
         * You can use the `getent passwd` command on your core device to look up the user ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-runas.html#cfn-greengrass-functiondefinitionversion-runas-uid
         */
        readonly uid?: number;
    }
    /**
     * A function is a Lambda function that's referenced from an AWS IoT Greengrass group.
     *
     * The function is deployed to a Greengrass core where it runs locally. For more information, see [Run Lambda Functions on the AWS IoT Greengrass Core](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-functions.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, the `Functions` property of the [`AWS::Greengrass::FunctionDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html) resource contains a list of `Function` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-function.html
     */
    interface FunctionProperty {
        /**
         * The Amazon Resource Name (ARN) of the alias (recommended) or version of the referenced Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-function.html#cfn-greengrass-functiondefinitionversion-function-functionarn
         */
        readonly functionArn: string;
        /**
         * The group-specific settings of the Lambda function.
         *
         * These settings configure the function's behavior in the Greengrass group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-function.html#cfn-greengrass-functiondefinitionversion-function-functionconfiguration
         */
        readonly functionConfiguration: CfnFunctionDefinitionVersion.FunctionConfigurationProperty | cdk.IResolvable;
        /**
         * A descriptive or arbitrary ID for the function.
         *
         * This value must be unique within the function definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-function.html#cfn-greengrass-functiondefinitionversion-function-id
         */
        readonly id: string;
    }
    /**
     * The group-specific configuration settings for a Lambda function.
     *
     * These settings configure the function's behavior in the Greengrass group. For more information, see [Controlling Execution of Greengrass Lambda Functions by Using Group-Specific Configuration](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, `FunctionConfiguration` is a property of the [`Function`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-function.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html
     */
    interface FunctionConfigurationProperty {
        /**
         * The expected encoding type of the input payload for the function.
         *
         * Valid values are `json` (default) and `binary` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html#cfn-greengrass-functiondefinitionversion-functionconfiguration-encodingtype
         */
        readonly encodingType?: string;
        /**
         * The environment configuration of the function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html#cfn-greengrass-functiondefinitionversion-functionconfiguration-environment
         */
        readonly environment?: CfnFunctionDefinitionVersion.EnvironmentProperty | cdk.IResolvable;
        /**
         * The execution arguments.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html#cfn-greengrass-functiondefinitionversion-functionconfiguration-execargs
         */
        readonly execArgs?: string;
        /**
         * The name of the function executable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html#cfn-greengrass-functiondefinitionversion-functionconfiguration-executable
         */
        readonly executable?: string;
        /**
         * The memory size (in KB) required by the function.
         *
         * > This property applies only to Lambda functions that run in a Greengrass container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html#cfn-greengrass-functiondefinitionversion-functionconfiguration-memorysize
         */
        readonly memorySize?: number;
        /**
         * Indicates whether the function is pinned (or *long-lived* ).
         *
         * Pinned functions start when the core starts and process all requests in the same container. The default value is false.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html#cfn-greengrass-functiondefinitionversion-functionconfiguration-pinned
         */
        readonly pinned?: boolean | cdk.IResolvable;
        /**
         * The allowed execution time (in seconds) after which the function should terminate.
         *
         * For pinned functions, this timeout applies for each request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html#cfn-greengrass-functiondefinitionversion-functionconfiguration-timeout
         */
        readonly timeout?: number;
    }
    /**
     * The environment configuration for a Lambda function on the AWS IoT Greengrass core.
     *
     * In an AWS CloudFormation template, `Environment` is a property of the [`FunctionConfiguration`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html
     */
    interface EnvironmentProperty {
        /**
         * Indicates whether the function is allowed to access the `/sys` directory on the core device, which allows the read device information from `/sys` .
         *
         * > This property applies only to Lambda functions that run in a Greengrass container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html#cfn-greengrass-functiondefinitionversion-environment-accesssysfs
         */
        readonly accessSysfs?: boolean | cdk.IResolvable;
        /**
         * Settings for the Lambda execution environment in AWS IoT Greengrass .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html#cfn-greengrass-functiondefinitionversion-environment-execution
         */
        readonly execution?: CfnFunctionDefinitionVersion.ExecutionProperty | cdk.IResolvable;
        /**
         * A list of the [resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html) in the group that the function can access, with the corresponding read-only or read-write permissions. The maximum is 10 resources.
         *
         * > This property applies only to Lambda functions that run in a Greengrass container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html#cfn-greengrass-functiondefinitionversion-environment-resourceaccesspolicies
         */
        readonly resourceAccessPolicies?: Array<cdk.IResolvable | CfnFunctionDefinitionVersion.ResourceAccessPolicyProperty> | cdk.IResolvable;
        /**
         * Environment variables for the Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html#cfn-greengrass-functiondefinitionversion-environment-variables
         */
        readonly variables?: any | cdk.IResolvable;
    }
    /**
     * A list of the [resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html) in the group that the function can access, with the corresponding read-only or read-write permissions. The maximum is 10 resources.
     *
     * > This property applies only to Lambda functions that run in a Greengrass container.
     *
     * In an AWS CloudFormation template, `ResourceAccessPolicy` is a property of the [`Environment`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-resourceaccesspolicy.html
     */
    interface ResourceAccessPolicyProperty {
        /**
         * The read-only or read-write access that the Lambda function has to the resource.
         *
         * Valid values are `ro` or `rw` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-resourceaccesspolicy.html#cfn-greengrass-functiondefinitionversion-resourceaccesspolicy-permission
         */
        readonly permission?: string;
        /**
         * The ID of the resource.
         *
         * This ID is assigned to the resource when you create the resource definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-resourceaccesspolicy.html#cfn-greengrass-functiondefinitionversion-resourceaccesspolicy-resourceid
         */
        readonly resourceId: string;
    }
}
/**
 * Properties for defining a `CfnFunctionDefinitionVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html
 */
export interface CfnFunctionDefinitionVersionProps {
    /**
     * The default configuration that applies to all Lambda functions in the group.
     *
     * Individual Lambda functions can override these settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-defaultconfig
     */
    readonly defaultConfig?: CfnFunctionDefinitionVersion.DefaultConfigProperty | cdk.IResolvable;
    /**
     * The ID of the function definition associated with this version.
     *
     * This value is a GUID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-functiondefinitionid
     */
    readonly functionDefinitionId: string;
    /**
     * The functions in this version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-functions
     */
    readonly functions: Array<CfnFunctionDefinitionVersion.FunctionProperty | cdk.IResolvable> | cdk.IResolvable;
}
/**
 * AWS IoT Greengrass seamlessly extends AWS to edge devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage.
 *
 * With AWS IoT Greengrass , connected devices can run AWS Lambda functions, execute predictions based on machine learning models, keep device data in sync, and communicate with other devices securely – even when not connected to the internet. For more information, see the [Developer Guide](https://docs.aws.amazon.com/greengrass/v1/developerguide/what-is-gg.html) .
 *
 * > For AWS Region support, see [AWS CloudFormation Support for AWS IoT Greengrass](https://docs.aws.amazon.com/greengrass/v1/developerguide/cloudformation-support.html) in the *Developer Guide* .
 *
 * The `AWS::Greengrass::Group` resource represents a group in AWS IoT Greengrass . In the AWS IoT Greengrass API, groups are used to organize your group versions.
 *
 * Groups can reference multiple group versions. All group versions must be associated with a group. A group version references a device definition version, subscription definition version, and other version types that contain the components you want to deploy to a Greengrass core device.
 *
 * To deploy a group version, the group version must reference a core definition version that contains one core. Other version types are optionally included, depending on your business need.
 *
 * > When you create a group, you can optionally include an initial group version. To associate a group version later, create a [`AWS::Greengrass::GroupVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html) resource and specify the ID of this group.
 * >
 * > To change group components (such as devices, subscriptions, or functions), you must create new versions. This is because versions are immutable. For example, to add a function, you create a function definition version that contains the new function (and all other functions that you want to deploy). Then you create a group version that references the new function definition version (and all other version types that you want to deploy).
 *
 * *Deploying a Group Version*
 *
 * After you create the group version in your AWS CloudFormation template, you can deploy it using the [`aws greengrass create-deployment`](https://docs.aws.amazon.com/greengrass/v1/apireference/createdeployment-post.html) command in the AWS CLI or from the *Greengrass* node in the AWS IoT console. To deploy a group version, you must have a Greengrass service role associated with your AWS account . For more information, see [AWS CloudFormation Support for AWS IoT Greengrass](https://docs.aws.amazon.com/greengrass/v1/developerguide/cloudformation-support.html) in the *Developer Guide* .
 *
 * @cloudformationResource AWS::Greengrass::Group
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html
 */
export declare class CfnGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGroup;
    /**
     * The ARN of the `Group` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/groups/1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the `Group` , such as `1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ARN of the last `GroupVersion` that was added to the `Group` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/groups/1234a5b6-78cd-901e-2fgh-3i45j6k178l9/versions/9876ac30-4bdb-4f9d-95af-b5fdb66be1a2` .
     *
     * @cloudformationAttribute LatestVersionArn
     */
    readonly attrLatestVersionArn: string;
    /**
     * The name of the `Group` , such as `MyGroup` .
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The ARN of the IAM role that's attached to the `Group` , such as `arn:aws:iam::  :role/role-name` .
     *
     * @cloudformationAttribute RoleArn
     */
    readonly attrRoleArn: string;
    /**
     * The time (in milliseconds since the epoch) when the group role was attached to the `Group` .
     *
     * @cloudformationAttribute RoleAttachedAt
     */
    readonly attrRoleAttachedAt: string;
    /**
     * The group version to include when the group is created.
     */
    initialVersion?: CfnGroup.GroupVersionProperty | cdk.IResolvable;
    /**
     * The name of the group.
     */
    name: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role attached to the group.
     */
    roleArn?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Application-specific metadata to attach to the group.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGroup {
    /**
     * A group version in AWS IoT Greengrass , which references of a core definition version, device definition version, subscription definition version, and other version types that contain the components you want to deploy to a Greengrass core device.
     *
     * The group version must reference a core definition version that contains one core. Other version types are optionally included, depending on your business need.
     *
     * In an AWS CloudFormation template, `GroupVersion` is the property type of the `InitialVersion` property in the [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-group-groupversion.html
     */
    interface GroupVersionProperty {
        /**
         * The Amazon Resource Name (ARN) of the connector definition version that contains the connectors you want to deploy with the group version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-group-groupversion.html#cfn-greengrass-group-groupversion-connectordefinitionversionarn
         */
        readonly connectorDefinitionVersionArn?: string;
        /**
         * The ARN of the core definition version that contains the core you want to deploy with the group version.
         *
         * Currently, the core definition version can contain only one core.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-group-groupversion.html#cfn-greengrass-group-groupversion-coredefinitionversionarn
         */
        readonly coreDefinitionVersionArn?: string;
        /**
         * The ARN of the device definition version that contains the devices you want to deploy with the group version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-group-groupversion.html#cfn-greengrass-group-groupversion-devicedefinitionversionarn
         */
        readonly deviceDefinitionVersionArn?: string;
        /**
         * The ARN of the function definition version that contains the functions you want to deploy with the group version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-group-groupversion.html#cfn-greengrass-group-groupversion-functiondefinitionversionarn
         */
        readonly functionDefinitionVersionArn?: string;
        /**
         * The ARN of the logger definition version that contains the loggers you want to deploy with the group version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-group-groupversion.html#cfn-greengrass-group-groupversion-loggerdefinitionversionarn
         */
        readonly loggerDefinitionVersionArn?: string;
        /**
         * The ARN of the resource definition version that contains the resources you want to deploy with the group version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-group-groupversion.html#cfn-greengrass-group-groupversion-resourcedefinitionversionarn
         */
        readonly resourceDefinitionVersionArn?: string;
        /**
         * The ARN of the subscription definition version that contains the subscriptions you want to deploy with the group version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-group-groupversion.html#cfn-greengrass-group-groupversion-subscriptiondefinitionversionarn
         */
        readonly subscriptionDefinitionVersionArn?: string;
    }
}
/**
 * Properties for defining a `CfnGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html
 */
export interface CfnGroupProps {
    /**
     * The group version to include when the group is created.
     *
     * A group version references the Amazon Resource Name (ARN) of a core definition version, device definition version, subscription definition version, and other version types. The group version must reference a core definition version that contains one core. Other version types are optionally included, depending on your business need.
     *
     * > To associate a group version after the group is created, create an [`AWS::Greengrass::GroupVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html) resource and specify the ID of this group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-greengrass-group-initialversion
     */
    readonly initialVersion?: CfnGroup.GroupVersionProperty | cdk.IResolvable;
    /**
     * The name of the group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-greengrass-group-name
     */
    readonly name: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role attached to the group.
     *
     * This role contains the permissions that Lambda functions and connectors use to interact with other AWS services.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-greengrass-group-rolearn
     */
    readonly roleArn?: string;
    /**
     * Application-specific metadata to attach to the group.
     *
     * You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/v1/developerguide/tagging.html) in the *Developer Guide* .
     *
     * This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
     *
     * ```json
     * "Tags": { "KeyName0": "value", "KeyName1": "value", "KeyName2": "value"
     * }
     * ```
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-greengrass-group-tags
     */
    readonly tags?: any;
}
/**
 * The `AWS::Greengrass::GroupVersion` resource represents a group version in AWS IoT Greengrass .
 *
 * A group version references a core definition version, device definition version, subscription definition version, and other version types that contain the components you want to deploy to a Greengrass core device. The group version must reference a core definition version that contains one core. Other version types are optionally included, depending on your business need.
 *
 * > To create a group version, you must specify the ID of the group that you want to associate with the version. For information about creating a group, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
 *
 * @cloudformationResource AWS::Greengrass::GroupVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html
 */
export declare class CfnGroupVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGroupVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGroupVersion;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The Amazon Resource Name (ARN) of the connector definition version that contains the connectors you want to deploy with the group version.
     */
    connectorDefinitionVersionArn?: string;
    /**
     * The ARN of the core definition version that contains the core you want to deploy with the group version.
     */
    coreDefinitionVersionArn?: string;
    /**
     * The ARN of the device definition version that contains the devices you want to deploy with the group version.
     */
    deviceDefinitionVersionArn?: string;
    /**
     * The ARN of the function definition version that contains the functions you want to deploy with the group version.
     */
    functionDefinitionVersionArn?: string;
    /**
     * The ID of the group associated with this version.
     */
    groupId: string;
    /**
     * The ARN of the logger definition version that contains the loggers you want to deploy with the group version.
     */
    loggerDefinitionVersionArn?: string;
    /**
     * The ARN of the resource definition version that contains the resources you want to deploy with the group version.
     */
    resourceDefinitionVersionArn?: string;
    /**
     * The ARN of the subscription definition version that contains the subscriptions you want to deploy with the group version.
     */
    subscriptionDefinitionVersionArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGroupVersionProps);
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
 * Properties for defining a `CfnGroupVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html
 */
export interface CfnGroupVersionProps {
    /**
     * The Amazon Resource Name (ARN) of the connector definition version that contains the connectors you want to deploy with the group version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-connectordefinitionversionarn
     */
    readonly connectorDefinitionVersionArn?: string;
    /**
     * The ARN of the core definition version that contains the core you want to deploy with the group version.
     *
     * Currently, the core definition version can contain only one core.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-coredefinitionversionarn
     */
    readonly coreDefinitionVersionArn?: string;
    /**
     * The ARN of the device definition version that contains the devices you want to deploy with the group version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-devicedefinitionversionarn
     */
    readonly deviceDefinitionVersionArn?: string;
    /**
     * The ARN of the function definition version that contains the functions you want to deploy with the group version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-functiondefinitionversionarn
     */
    readonly functionDefinitionVersionArn?: string;
    /**
     * The ID of the group associated with this version.
     *
     * This value is a GUID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-groupid
     */
    readonly groupId: string;
    /**
     * The ARN of the logger definition version that contains the loggers you want to deploy with the group version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-loggerdefinitionversionarn
     */
    readonly loggerDefinitionVersionArn?: string;
    /**
     * The ARN of the resource definition version that contains the resources you want to deploy with the group version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-resourcedefinitionversionarn
     */
    readonly resourceDefinitionVersionArn?: string;
    /**
     * The ARN of the subscription definition version that contains the subscriptions you want to deploy with the group version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-subscriptiondefinitionversionarn
     */
    readonly subscriptionDefinitionVersionArn?: string;
}
/**
 * The `AWS::Greengrass::LoggerDefinition` resource represents a logger definition for AWS IoT Greengrass .
 *
 * Logger definitions are used to organize your logger definition versions.
 *
 * Logger definitions can reference multiple logger definition versions. All logger definition versions must be associated with a logger definition. Each logger definition version can contain one or more loggers.
 *
 * > When you create a logger definition, you can optionally include an initial logger definition version. To associate a logger definition version later, create an [`AWS::Greengrass::LoggerDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html) resource and specify the ID of this logger definition.
 * >
 * > After you create the logger definition version that contains the loggers you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
 *
 * @cloudformationResource AWS::Greengrass::LoggerDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinition.html
 */
export declare class CfnLoggerDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLoggerDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLoggerDefinition;
    /**
     * The Amazon Resource Name (ARN) of the `LoggerDefinition` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/loggers/1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the `LoggerDefinition` , such as `1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ARN of the last `LoggerDefinitionVersion` that was added to the `LoggerDefinition` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/loggers/1234a5b6-78cd-901e-2fgh-3i45j6k178l9/versions/9876ac30-4bdb-4f9d-95af-b5fdb66be1a2` .
     *
     * @cloudformationAttribute LatestVersionArn
     */
    readonly attrLatestVersionArn: string;
    /**
     * The name of the `LoggerDefinition` , such as `MyLoggerDefinition` .
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The logger definition version to include when the logger definition is created.
     */
    initialVersion?: cdk.IResolvable | CfnLoggerDefinition.LoggerDefinitionVersionProperty;
    /**
     * The name of the logger definition.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Application-specific metadata to attach to the logger definition.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLoggerDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLoggerDefinition {
    /**
     * A logger definition version contains a list of [loggers](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-logger.html) .
     *
     * > After you create a logger definition version that contains the loggers you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
     *
     * In an AWS CloudFormation template, `LoggerDefinitionVersion` is the property type of the `InitialVersion` property in the [`AWS::Greengrass::LoggerDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinition.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-loggerdefinitionversion.html
     */
    interface LoggerDefinitionVersionProperty {
        /**
         * The loggers in this version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-loggerdefinitionversion.html#cfn-greengrass-loggerdefinition-loggerdefinitionversion-loggers
         */
        readonly loggers: Array<cdk.IResolvable | CfnLoggerDefinition.LoggerProperty> | cdk.IResolvable;
    }
    /**
     * A logger represents logging settings for the AWS IoT Greengrass group, which can be stored in CloudWatch and the local file system of your core device.
     *
     * All log entries include a timestamp, log level, and information about the event. For more information, see [Monitoring with AWS IoT Greengrass Logs](https://docs.aws.amazon.com/greengrass/v1/developerguide/greengrass-logs-overview.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, the `Loggers` property of the [`LoggerDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-loggerdefinitionversion.html) property type contains a list of `Logger` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-logger.html
     */
    interface LoggerProperty {
        /**
         * The source of the log event.
         *
         * Valid values are `GreengrassSystem` or `Lambda` . When `GreengrassSystem` is used, events from Greengrass system components are logged. When `Lambda` is used, events from user-defined Lambda functions are logged.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-logger.html#cfn-greengrass-loggerdefinition-logger-component
         */
        readonly component: string;
        /**
         * A descriptive or arbitrary ID for the logger.
         *
         * This value must be unique within the logger definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-logger.html#cfn-greengrass-loggerdefinition-logger-id
         */
        readonly id: string;
        /**
         * The log-level threshold.
         *
         * Log events below this threshold are filtered out and aren't stored. Valid values are `DEBUG` , `INFO` (recommended), `WARN` , `ERROR` , or `FATAL` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-logger.html#cfn-greengrass-loggerdefinition-logger-level
         */
        readonly level: string;
        /**
         * The amount of file space (in KB) to use when writing logs to the local file system.
         *
         * This property does not apply for CloudWatch Logs .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-logger.html#cfn-greengrass-loggerdefinition-logger-space
         */
        readonly space?: number;
        /**
         * The storage mechanism for log events.
         *
         * Valid values are `FileSystem` or `AWSCloudWatch` . When `AWSCloudWatch` is used, log events are sent to CloudWatch Logs . When `FileSystem` is used, log events are stored on the local file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-logger.html#cfn-greengrass-loggerdefinition-logger-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnLoggerDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinition.html
 */
export interface CfnLoggerDefinitionProps {
    /**
     * The logger definition version to include when the logger definition is created.
     *
     * A logger definition version contains a list of [`logger`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-logger.html) property types.
     *
     * > To associate a logger definition version after the logger definition is created, create an [`AWS::Greengrass::LoggerDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html) resource and specify the ID of this logger definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinition.html#cfn-greengrass-loggerdefinition-initialversion
     */
    readonly initialVersion?: cdk.IResolvable | CfnLoggerDefinition.LoggerDefinitionVersionProperty;
    /**
     * The name of the logger definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinition.html#cfn-greengrass-loggerdefinition-name
     */
    readonly name: string;
    /**
     * Application-specific metadata to attach to the logger definition.
     *
     * You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/v1/developerguide/tagging.html) in the *Developer Guide* .
     *
     * This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
     *
     * ```json
     * "Tags": { "KeyName0": "value", "KeyName1": "value", "KeyName2": "value"
     * }
     * ```
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinition.html#cfn-greengrass-loggerdefinition-tags
     */
    readonly tags?: any;
}
/**
 * The `AWS::Greengrass::LoggerDefinitionVersion` resource represents a logger definition version for AWS IoT Greengrass .
 *
 * A logger definition version contains a list of loggers.
 *
 * > To create a logger definition version, you must specify the ID of the logger definition that you want to associate with the version. For information about creating a logger definition, see [`AWS::Greengrass::LoggerDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinition.html) .
 * >
 * > After you create a logger definition version that contains the loggers you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
 *
 * @cloudformationResource AWS::Greengrass::LoggerDefinitionVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html
 */
export declare class CfnLoggerDefinitionVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLoggerDefinitionVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLoggerDefinitionVersion;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ID of the logger definition associated with this version.
     */
    loggerDefinitionId: string;
    /**
     * The loggers in this version.
     */
    loggers: Array<cdk.IResolvable | CfnLoggerDefinitionVersion.LoggerProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLoggerDefinitionVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLoggerDefinitionVersion {
    /**
     * A logger represents logging settings for the AWS IoT Greengrass group, which can be stored in CloudWatch and the local file system of your core device.
     *
     * All log entries include a timestamp, log level, and information about the event. For more information, see [Monitoring with AWS IoT Greengrass Logs](https://docs.aws.amazon.com/greengrass/v1/developerguide/greengrass-logs-overview.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, the `Loggers` property of the [`AWS::Greengrass::LoggerDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html) resource contains a list of `Logger` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinitionversion-logger.html
     */
    interface LoggerProperty {
        /**
         * The source of the log event.
         *
         * Valid values are `GreengrassSystem` or `Lambda` . When `GreengrassSystem` is used, events from Greengrass system components are logged. When `Lambda` is used, events from user-defined Lambda functions are logged.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinitionversion-logger.html#cfn-greengrass-loggerdefinitionversion-logger-component
         */
        readonly component: string;
        /**
         * A descriptive or arbitrary ID for the logger.
         *
         * This value must be unique within the logger definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinitionversion-logger.html#cfn-greengrass-loggerdefinitionversion-logger-id
         */
        readonly id: string;
        /**
         * The log-level threshold.
         *
         * Log events below this threshold are filtered out and aren't stored. Valid values are `DEBUG` , `INFO` (recommended), `WARN` , `ERROR` , or `FATAL` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinitionversion-logger.html#cfn-greengrass-loggerdefinitionversion-logger-level
         */
        readonly level: string;
        /**
         * The amount of file space (in KB) to use when writing logs to the local file system.
         *
         * This property does not apply for CloudWatch Logs .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinitionversion-logger.html#cfn-greengrass-loggerdefinitionversion-logger-space
         */
        readonly space?: number;
        /**
         * The storage mechanism for log events.
         *
         * Valid values are `FileSystem` or `AWSCloudWatch` . When `AWSCloudWatch` is used, log events are sent to CloudWatch Logs . When `FileSystem` is used, log events are stored on the local file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinitionversion-logger.html#cfn-greengrass-loggerdefinitionversion-logger-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnLoggerDefinitionVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html
 */
export interface CfnLoggerDefinitionVersionProps {
    /**
     * The ID of the logger definition associated with this version.
     *
     * This value is a GUID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html#cfn-greengrass-loggerdefinitionversion-loggerdefinitionid
     */
    readonly loggerDefinitionId: string;
    /**
     * The loggers in this version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html#cfn-greengrass-loggerdefinitionversion-loggers
     */
    readonly loggers: Array<cdk.IResolvable | CfnLoggerDefinitionVersion.LoggerProperty> | cdk.IResolvable;
}
/**
 * The `AWS::Greengrass::ResourceDefinition` resource represents a resource definition for AWS IoT Greengrass .
 *
 * Resource definitions are used to organize your resource definition versions.
 *
 * Resource definitions can reference multiple resource definition versions. All resource definition versions must be associated with a resource definition. Each resource definition version can contain one or more resources. (In AWS CloudFormation , resources are named *resource instances* .)
 *
 * > When you create a resource definition, you can optionally include an initial resource definition version. To associate a resource definition version later, create an [`AWS::Greengrass::ResourceDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html) resource and specify the ID of this resource definition.
 * >
 * > After you create the resource definition version that contains the resources you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
 *
 * @cloudformationResource AWS::Greengrass::ResourceDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html
 */
export declare class CfnResourceDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourceDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourceDefinition;
    /**
     * The Amazon Resource Name (ARN) of the `ResourceDefinition` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/resources/1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the `ResourceDefinition` , such as `1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ARN of the last `ResourceDefinitionVersion` that was added to the `ResourceDefinition` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/resources/1234a5b6-78cd-901e-2fgh-3i45j6k178l9/versions/9876ac30-4bdb-4f9d-95af-b5fdb66be1a2` .
     *
     * @cloudformationAttribute LatestVersionArn
     */
    readonly attrLatestVersionArn: string;
    /**
     * The name of the `ResourceDefinition` , such as `MyResourceDefinition` .
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The resource definition version to include when the resource definition is created.
     */
    initialVersion?: cdk.IResolvable | CfnResourceDefinition.ResourceDefinitionVersionProperty;
    /**
     * The name of the resource definition.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Application-specific metadata to attach to the resource definition.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourceDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnResourceDefinition {
    /**
     * A resource definition version contains a list of resources. (In AWS CloudFormation , resources are named *resource instances* .).
     *
     * > After you create a resource definition version that contains the resources you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
     *
     * In an AWS CloudFormation template, `ResourceDefinitionVersion` is the property type of the `InitialVersion` property in the [`AWS::Greengrass::ResourceDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedefinitionversion.html
     */
    interface ResourceDefinitionVersionProperty {
        /**
         * The resources in this version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedefinitionversion.html#cfn-greengrass-resourcedefinition-resourcedefinitionversion-resources
         */
        readonly resources: Array<cdk.IResolvable | CfnResourceDefinition.ResourceInstanceProperty> | cdk.IResolvable;
    }
    /**
     * A local resource, machine learning resource, or secret resource.
     *
     * For more information, see [Access Local Resources with Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-local-resources.html) , [Perform Machine Learning Inference](https://docs.aws.amazon.com/greengrass/v1/developerguide/ml-inference.html) , and [Deploy Secrets to the AWS IoT Greengrass Core](https://docs.aws.amazon.com/greengrass/v1/developerguide/secrets.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, the `Resources` property of the [`AWS::Greengrass::ResourceDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html) resource contains a list of `ResourceInstance` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourceinstance.html
     */
    interface ResourceInstanceProperty {
        /**
         * A descriptive or arbitrary ID for the resource.
         *
         * This value must be unique within the resource definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourceinstance.html#cfn-greengrass-resourcedefinition-resourceinstance-id
         */
        readonly id: string;
        /**
         * The descriptive resource name, which is displayed on the AWS IoT Greengrass console.
         *
         * Maximum length 128 characters with pattern [a-zA-Z0-9:_-]+. This must be unique within a Greengrass group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourceinstance.html#cfn-greengrass-resourcedefinition-resourceinstance-name
         */
        readonly name: string;
        /**
         * A container for resource data.
         *
         * The container takes only one of the following supported resource data types: `LocalDeviceResourceData` , `LocalVolumeResourceData` , `SageMakerMachineLearningModelResourceData` , `S3MachineLearningModelResourceData` , or `SecretsManagerSecretResourceData` .
         *
         * > Only one resource type can be defined for a `ResourceDataContainer` instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourceinstance.html#cfn-greengrass-resourcedefinition-resourceinstance-resourcedatacontainer
         */
        readonly resourceDataContainer: cdk.IResolvable | CfnResourceDefinition.ResourceDataContainerProperty;
    }
    /**
     * A container for resource data, which defines the resource type.
     *
     * The container takes only one of the following supported resource data types: `LocalDeviceResourceData` , `LocalVolumeResourceData` , `SageMakerMachineLearningModelResourceData` , `S3MachineLearningModelResourceData` , or `SecretsManagerSecretResourceData` .
     *
     * > Only one resource type can be defined for a `ResourceDataContainer` instance.
     *
     * In an AWS CloudFormation template, `ResourceDataContainer` is a property of the [`ResourceInstance`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourceinstance.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html
     */
    interface ResourceDataContainerProperty {
        /**
         * Settings for a local device resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html#cfn-greengrass-resourcedefinition-resourcedatacontainer-localdeviceresourcedata
         */
        readonly localDeviceResourceData?: cdk.IResolvable | CfnResourceDefinition.LocalDeviceResourceDataProperty;
        /**
         * Settings for a local volume resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html#cfn-greengrass-resourcedefinition-resourcedatacontainer-localvolumeresourcedata
         */
        readonly localVolumeResourceData?: cdk.IResolvable | CfnResourceDefinition.LocalVolumeResourceDataProperty;
        /**
         * Settings for a machine learning resource stored in Amazon S3 .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html#cfn-greengrass-resourcedefinition-resourcedatacontainer-s3machinelearningmodelresourcedata
         */
        readonly s3MachineLearningModelResourceData?: cdk.IResolvable | CfnResourceDefinition.S3MachineLearningModelResourceDataProperty;
        /**
         * Settings for a machine learning resource saved as an SageMaker AI training job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html#cfn-greengrass-resourcedefinition-resourcedatacontainer-sagemakermachinelearningmodelresourcedata
         */
        readonly sageMakerMachineLearningModelResourceData?: cdk.IResolvable | CfnResourceDefinition.SageMakerMachineLearningModelResourceDataProperty;
        /**
         * Settings for a secret resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html#cfn-greengrass-resourcedefinition-resourcedatacontainer-secretsmanagersecretresourcedata
         */
        readonly secretsManagerSecretResourceData?: cdk.IResolvable | CfnResourceDefinition.SecretsManagerSecretResourceDataProperty;
    }
    /**
     * Settings for a secret resource, which references a secret from AWS Secrets Manager .
     *
     * AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions. For more information, see [Deploy Secrets to the AWS IoT Greengrass Core](https://docs.aws.amazon.com/greengrass/v1/developerguide/secrets.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, `SecretsManagerSecretResourceData` can be used in the [`ResourceDataContainer`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-secretsmanagersecretresourcedata.html
     */
    interface SecretsManagerSecretResourceDataProperty {
        /**
         * The staging labels whose values you want to make available on the core, in addition to `AWSCURRENT` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-secretsmanagersecretresourcedata.html#cfn-greengrass-resourcedefinition-secretsmanagersecretresourcedata-additionalstaginglabelstodownload
         */
        readonly additionalStagingLabelsToDownload?: Array<string>;
        /**
         * The Amazon Resource Name (ARN) of the Secrets Manager secret to make available on the core.
         *
         * The value of the secret's latest version (represented by the `AWSCURRENT` staging label) is included by default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-secretsmanagersecretresourcedata.html#cfn-greengrass-resourcedefinition-secretsmanagersecretresourcedata-arn
         */
        readonly arn: string;
    }
    /**
     * Settings for an Secrets Manager machine learning resource.
     *
     * For more information, see [Perform Machine Learning Inference](https://docs.aws.amazon.com/greengrass/v1/developerguide/ml-inference.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, `SageMakerMachineLearningModelResourceData` can be used in the [`ResourceDataContainer`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata.html
     */
    interface SageMakerMachineLearningModelResourceDataProperty {
        /**
         * The absolute local path of the resource inside the Lambda environment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata.html#cfn-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata-destinationpath
         */
        readonly destinationPath: string;
        /**
         * The owner setting for the downloaded machine learning resource.
         *
         * For more information, see [Access Machine Learning Resources from Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-ml-resources.html) in the *Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata.html#cfn-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata-ownersetting
         */
        readonly ownerSetting?: cdk.IResolvable | CfnResourceDefinition.ResourceDownloadOwnerSettingProperty;
        /**
         * The Amazon Resource Name (ARN) of the Amazon SageMaker AI training job that represents the source model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata.html#cfn-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata-sagemakerjobarn
         */
        readonly sageMakerJobArn: string;
    }
    /**
     * The owner setting for a downloaded machine learning resource.
     *
     * For more information, see [Access Machine Learning Resources from Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-ml-resources.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, `ResourceDownloadOwnerSetting` is the property type of the `OwnerSetting` property for the [`S3MachineLearningModelResourceData`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-s3machinelearningmodelresourcedata.html) and [`SageMakerMachineLearningModelResourceData`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata.html) property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedownloadownersetting.html
     */
    interface ResourceDownloadOwnerSettingProperty {
        /**
         * The group owner of the machine learning resource.
         *
         * This is the group ID (GID) of an existing Linux OS group on the system. The group's permissions are added to the Lambda process.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedownloadownersetting.html#cfn-greengrass-resourcedefinition-resourcedownloadownersetting-groupowner
         */
        readonly groupOwner: string;
        /**
         * The permissions that the group owner has to the machine learning resource.
         *
         * Valid values are `rw` (read-write) or `ro` (read-only).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedownloadownersetting.html#cfn-greengrass-resourcedefinition-resourcedownloadownersetting-grouppermission
         */
        readonly groupPermission: string;
    }
    /**
     * Settings for a local volume resource, which represents a file or directory on the root file system.
     *
     * For more information, see [Access Local Resources with Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-local-resources.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, `LocalVolumeResourceData` can be used in the [`ResourceDataContainer`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-localvolumeresourcedata.html
     */
    interface LocalVolumeResourceDataProperty {
        /**
         * The absolute local path of the resource in the Lambda environment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-localvolumeresourcedata.html#cfn-greengrass-resourcedefinition-localvolumeresourcedata-destinationpath
         */
        readonly destinationPath: string;
        /**
         * Settings that define additional Linux OS group permissions to give to the Lambda function process.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-localvolumeresourcedata.html#cfn-greengrass-resourcedefinition-localvolumeresourcedata-groupownersetting
         */
        readonly groupOwnerSetting?: CfnResourceDefinition.GroupOwnerSettingProperty | cdk.IResolvable;
        /**
         * The local absolute path of the volume resource on the host.
         *
         * The source path for a volume resource type cannot start with `/sys` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-localvolumeresourcedata.html#cfn-greengrass-resourcedefinition-localvolumeresourcedata-sourcepath
         */
        readonly sourcePath: string;
    }
    /**
     * Settings that define additional Linux OS group permissions to give to the Lambda function process.
     *
     * You can give the permissions of the Linux group that owns the resource or choose another Linux group. These permissions are in addition to the function's `RunAs` permissions.
     *
     * In an AWS CloudFormation template, `GroupOwnerSetting` is a property of the [`LocalDeviceResourceData`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-localdeviceresourcedata.html) and [`LocalVolumeResourceData`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-localvolumeresourcedata.html) property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-groupownersetting.html
     */
    interface GroupOwnerSettingProperty {
        /**
         * Indicates whether to give the privileges of the Linux group that owns the resource to the Lambda process.
         *
         * This gives the Lambda process the file access permissions of the Linux group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-groupownersetting.html#cfn-greengrass-resourcedefinition-groupownersetting-autoaddgroupowner
         */
        readonly autoAddGroupOwner: boolean | cdk.IResolvable;
        /**
         * The name of the Linux group whose privileges you want to add to the Lambda process.
         *
         * This value is ignored if `AutoAddGroupOwner` is true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-groupownersetting.html#cfn-greengrass-resourcedefinition-groupownersetting-groupowner
         */
        readonly groupOwner?: string;
    }
    /**
     * Settings for a local device resource, which represents a file under `/dev` .
     *
     * For more information, see [Access Local Resources with Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-local-resources.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, `LocalDeviceResourceData` can be used in the [`ResourceDataContainer`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-localdeviceresourcedata.html
     */
    interface LocalDeviceResourceDataProperty {
        /**
         * Settings that define additional Linux OS group permissions to give to the Lambda function process.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-localdeviceresourcedata.html#cfn-greengrass-resourcedefinition-localdeviceresourcedata-groupownersetting
         */
        readonly groupOwnerSetting?: CfnResourceDefinition.GroupOwnerSettingProperty | cdk.IResolvable;
        /**
         * The local absolute path of the device resource.
         *
         * The source path for a device resource can refer only to a character device or block device under `/dev` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-localdeviceresourcedata.html#cfn-greengrass-resourcedefinition-localdeviceresourcedata-sourcepath
         */
        readonly sourcePath: string;
    }
    /**
     * Settings for an Amazon S3 machine learning resource.
     *
     * For more information, see [Perform Machine Learning Inference](https://docs.aws.amazon.com/greengrass/v1/developerguide/ml-inference.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, `S3MachineLearningModelResourceData` can be used in the [`ResourceDataContainer`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-s3machinelearningmodelresourcedata.html
     */
    interface S3MachineLearningModelResourceDataProperty {
        /**
         * The absolute local path of the resource inside the Lambda environment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-s3machinelearningmodelresourcedata.html#cfn-greengrass-resourcedefinition-s3machinelearningmodelresourcedata-destinationpath
         */
        readonly destinationPath: string;
        /**
         * The owner setting for the downloaded machine learning resource.
         *
         * For more information, see [Access Machine Learning Resources from Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-ml-resources.html) in the *Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-s3machinelearningmodelresourcedata.html#cfn-greengrass-resourcedefinition-s3machinelearningmodelresourcedata-ownersetting
         */
        readonly ownerSetting?: cdk.IResolvable | CfnResourceDefinition.ResourceDownloadOwnerSettingProperty;
        /**
         * The URI of the source model in an Amazon S3 bucket.
         *
         * The model package must be in `tar.gz` or `.zip` format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-s3machinelearningmodelresourcedata.html#cfn-greengrass-resourcedefinition-s3machinelearningmodelresourcedata-s3uri
         */
        readonly s3Uri: string;
    }
}
/**
 * Properties for defining a `CfnResourceDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html
 */
export interface CfnResourceDefinitionProps {
    /**
     * The resource definition version to include when the resource definition is created.
     *
     * A resource definition version contains a list of [`resource instance`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourceinstance.html) property types.
     *
     * > To associate a resource definition version after the resource definition is created, create an [`AWS::Greengrass::ResourceDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html) resource and specify the ID of this resource definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-initialversion
     */
    readonly initialVersion?: cdk.IResolvable | CfnResourceDefinition.ResourceDefinitionVersionProperty;
    /**
     * The name of the resource definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-name
     */
    readonly name: string;
    /**
     * Application-specific metadata to attach to the resource definition.
     *
     * You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/v1/developerguide/tagging.html) in the *Developer Guide* .
     *
     * This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
     *
     * ```json
     * "Tags": { "KeyName0": "value", "KeyName1": "value", "KeyName2": "value"
     * }
     * ```
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-tags
     */
    readonly tags?: any;
}
/**
 * The `AWS::Greengrass::ResourceDefinitionVersion` resource represents a resource definition version for AWS IoT Greengrass .
 *
 * A resource definition version contains a list of resources. (In AWS CloudFormation , resources are named *resource instances* .)
 *
 * > To create a resource definition version, you must specify the ID of the resource definition that you want to associate with the version. For information about creating a resource definition, see [`AWS::Greengrass::ResourceDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html) .
 * >
 * > After you create a resource definition version that contains the resources you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
 *
 * @cloudformationResource AWS::Greengrass::ResourceDefinitionVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html
 */
export declare class CfnResourceDefinitionVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourceDefinitionVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourceDefinitionVersion;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ID of the resource definition associated with this version.
     */
    resourceDefinitionId: string;
    /**
     * The resources in this version.
     */
    resources: Array<cdk.IResolvable | CfnResourceDefinitionVersion.ResourceInstanceProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourceDefinitionVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnResourceDefinitionVersion {
    /**
     * A local resource, machine learning resource, or secret resource.
     *
     * For more information, see [Access Local Resources with Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-local-resources.html) , [Perform Machine Learning Inference](https://docs.aws.amazon.com/greengrass/v1/developerguide/ml-inference.html) , and [Deploy Secrets to the AWS IoT Greengrass Core](https://docs.aws.amazon.com/greengrass/v1/developerguide/secrets.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, the `Resources` property of the [`AWS::Greengrass::ResourceDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html) resource contains a list of `ResourceInstance` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html
     */
    interface ResourceInstanceProperty {
        /**
         * A descriptive or arbitrary ID for the resource.
         *
         * This value must be unique within the resource definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html#cfn-greengrass-resourcedefinitionversion-resourceinstance-id
         */
        readonly id: string;
        /**
         * The descriptive resource name, which is displayed on the AWS IoT Greengrass console.
         *
         * Maximum length 128 characters with pattern [a-zA-Z0-9:_-]+. This must be unique within a Greengrass group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html#cfn-greengrass-resourcedefinitionversion-resourceinstance-name
         */
        readonly name: string;
        /**
         * A container for resource data.
         *
         * The container takes only one of the following supported resource data types: `LocalDeviceResourceData` , `LocalVolumeResourceData` , `SageMakerMachineLearningModelResourceData` , `S3MachineLearningModelResourceData` , or `SecretsManagerSecretResourceData` .
         *
         * > Only one resource type can be defined for a `ResourceDataContainer` instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html#cfn-greengrass-resourcedefinitionversion-resourceinstance-resourcedatacontainer
         */
        readonly resourceDataContainer: cdk.IResolvable | CfnResourceDefinitionVersion.ResourceDataContainerProperty;
    }
    /**
     * A container for resource data, which defines the resource type.
     *
     * The container takes only one of the following supported resource data types: `LocalDeviceResourceData` , `LocalVolumeResourceData` , `SageMakerMachineLearningModelResourceData` , `S3MachineLearningModelResourceData` , or `SecretsManagerSecretResourceData` .
     *
     * > Only one resource type can be defined for a `ResourceDataContainer` instance.
     *
     * In an AWS CloudFormation template, `ResourceDataContainer` is a property of the [`ResourceInstance`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html
     */
    interface ResourceDataContainerProperty {
        /**
         * Settings for a local device resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html#cfn-greengrass-resourcedefinitionversion-resourcedatacontainer-localdeviceresourcedata
         */
        readonly localDeviceResourceData?: cdk.IResolvable | CfnResourceDefinitionVersion.LocalDeviceResourceDataProperty;
        /**
         * Settings for a local volume resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html#cfn-greengrass-resourcedefinitionversion-resourcedatacontainer-localvolumeresourcedata
         */
        readonly localVolumeResourceData?: cdk.IResolvable | CfnResourceDefinitionVersion.LocalVolumeResourceDataProperty;
        /**
         * Settings for a machine learning resource stored in Amazon S3 .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html#cfn-greengrass-resourcedefinitionversion-resourcedatacontainer-s3machinelearningmodelresourcedata
         */
        readonly s3MachineLearningModelResourceData?: cdk.IResolvable | CfnResourceDefinitionVersion.S3MachineLearningModelResourceDataProperty;
        /**
         * Settings for a machine learning resource saved as an SageMaker AI training job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html#cfn-greengrass-resourcedefinitionversion-resourcedatacontainer-sagemakermachinelearningmodelresourcedata
         */
        readonly sageMakerMachineLearningModelResourceData?: cdk.IResolvable | CfnResourceDefinitionVersion.SageMakerMachineLearningModelResourceDataProperty;
        /**
         * Settings for a secret resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html#cfn-greengrass-resourcedefinitionversion-resourcedatacontainer-secretsmanagersecretresourcedata
         */
        readonly secretsManagerSecretResourceData?: cdk.IResolvable | CfnResourceDefinitionVersion.SecretsManagerSecretResourceDataProperty;
    }
    /**
     * Settings for a secret resource, which references a secret from AWS Secrets Manager .
     *
     * AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions. For more information, see [Deploy Secrets to the AWS IoT Greengrass Core](https://docs.aws.amazon.com/greengrass/v1/developerguide/secrets.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, `SecretsManagerSecretResourceData` can be used in the [`ResourceDataContainer`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-secretsmanagersecretresourcedata.html
     */
    interface SecretsManagerSecretResourceDataProperty {
        /**
         * The staging labels whose values you want to make available on the core, in addition to `AWSCURRENT` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-secretsmanagersecretresourcedata.html#cfn-greengrass-resourcedefinitionversion-secretsmanagersecretresourcedata-additionalstaginglabelstodownload
         */
        readonly additionalStagingLabelsToDownload?: Array<string>;
        /**
         * The Amazon Resource Name (ARN) of the Secrets Manager secret to make available on the core.
         *
         * The value of the secret's latest version (represented by the `AWSCURRENT` staging label) is included by default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-secretsmanagersecretresourcedata.html#cfn-greengrass-resourcedefinitionversion-secretsmanagersecretresourcedata-arn
         */
        readonly arn: string;
    }
    /**
     * Settings for an Secrets Manager machine learning resource.
     *
     * For more information, see [Perform Machine Learning Inference](https://docs.aws.amazon.com/greengrass/v1/developerguide/ml-inference.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, `SageMakerMachineLearningModelResourceData` can be used in the [`ResourceDataContainer`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata.html
     */
    interface SageMakerMachineLearningModelResourceDataProperty {
        /**
         * The absolute local path of the resource inside the Lambda environment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata.html#cfn-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-destinationpath
         */
        readonly destinationPath: string;
        /**
         * The owner setting for the downloaded machine learning resource.
         *
         * For more information, see [Access Machine Learning Resources from Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-ml-resources.html) in the *Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata.html#cfn-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-ownersetting
         */
        readonly ownerSetting?: cdk.IResolvable | CfnResourceDefinitionVersion.ResourceDownloadOwnerSettingProperty;
        /**
         * The Amazon Resource Name (ARN) of the Amazon SageMaker AI training job that represents the source model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata.html#cfn-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-sagemakerjobarn
         */
        readonly sageMakerJobArn: string;
    }
    /**
     * The owner setting for a downloaded machine learning resource.
     *
     * For more information, see [Access Machine Learning Resources from Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-ml-resources.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, `ResourceDownloadOwnerSetting` is the property type of the `OwnerSetting` property for the [`S3MachineLearningModelResourceData`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-s3machinelearningmodelresourcedata.html) and [`SageMakerMachineLearningModelResourceData`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata.html) property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedownloadownersetting.html
     */
    interface ResourceDownloadOwnerSettingProperty {
        /**
         * The group owner of the machine learning resource.
         *
         * This is the group ID (GID) of an existing Linux OS group on the system. The group's permissions are added to the Lambda process.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedownloadownersetting.html#cfn-greengrass-resourcedefinitionversion-resourcedownloadownersetting-groupowner
         */
        readonly groupOwner: string;
        /**
         * The permissions that the group owner has to the machine learning resource.
         *
         * Valid values are `rw` (read-write) or `ro` (read-only).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedownloadownersetting.html#cfn-greengrass-resourcedefinitionversion-resourcedownloadownersetting-grouppermission
         */
        readonly groupPermission: string;
    }
    /**
     * Settings for a local volume resource, which represents a file or directory on the root file system.
     *
     * For more information, see [Access Local Resources with Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-local-resources.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, `LocalVolumeResourceData` can be used in the [`ResourceDataContainer`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localvolumeresourcedata.html
     */
    interface LocalVolumeResourceDataProperty {
        /**
         * The absolute local path of the resource in the Lambda environment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localvolumeresourcedata.html#cfn-greengrass-resourcedefinitionversion-localvolumeresourcedata-destinationpath
         */
        readonly destinationPath: string;
        /**
         * Settings that define additional Linux OS group permissions to give to the Lambda function process.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localvolumeresourcedata.html#cfn-greengrass-resourcedefinitionversion-localvolumeresourcedata-groupownersetting
         */
        readonly groupOwnerSetting?: CfnResourceDefinitionVersion.GroupOwnerSettingProperty | cdk.IResolvable;
        /**
         * The local absolute path of the volume resource on the host.
         *
         * The source path for a volume resource type cannot start with `/sys` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localvolumeresourcedata.html#cfn-greengrass-resourcedefinitionversion-localvolumeresourcedata-sourcepath
         */
        readonly sourcePath: string;
    }
    /**
     * Settings that define additional Linux OS group permissions to give to the Lambda function process.
     *
     * You can give the permissions of the Linux group that owns the resource or choose another Linux group. These permissions are in addition to the function's `RunAs` permissions.
     *
     * In an AWS CloudFormation template, `GroupOwnerSetting` is a property of the [`LocalDeviceResourceData`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localdeviceresourcedata.html) and [`LocalVolumeResourceData`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localvolumeresourcedata.html) property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-groupownersetting.html
     */
    interface GroupOwnerSettingProperty {
        /**
         * Indicates whether to give the privileges of the Linux group that owns the resource to the Lambda process.
         *
         * This gives the Lambda process the file access permissions of the Linux group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-groupownersetting.html#cfn-greengrass-resourcedefinitionversion-groupownersetting-autoaddgroupowner
         */
        readonly autoAddGroupOwner: boolean | cdk.IResolvable;
        /**
         * The name of the Linux group whose privileges you want to add to the Lambda process.
         *
         * This value is ignored if `AutoAddGroupOwner` is true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-groupownersetting.html#cfn-greengrass-resourcedefinitionversion-groupownersetting-groupowner
         */
        readonly groupOwner?: string;
    }
    /**
     * Settings for a local device resource, which represents a file under `/dev` .
     *
     * For more information, see [Access Local Resources with Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-local-resources.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, `LocalDeviceResourceData` can be used in the [`ResourceDataContainer`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localdeviceresourcedata.html
     */
    interface LocalDeviceResourceDataProperty {
        /**
         * Settings that define additional Linux OS group permissions to give to the Lambda function process.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localdeviceresourcedata.html#cfn-greengrass-resourcedefinitionversion-localdeviceresourcedata-groupownersetting
         */
        readonly groupOwnerSetting?: CfnResourceDefinitionVersion.GroupOwnerSettingProperty | cdk.IResolvable;
        /**
         * The local absolute path of the device resource.
         *
         * The source path for a device resource can refer only to a character device or block device under `/dev` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localdeviceresourcedata.html#cfn-greengrass-resourcedefinitionversion-localdeviceresourcedata-sourcepath
         */
        readonly sourcePath: string;
    }
    /**
     * Settings for an Amazon S3 machine learning resource.
     *
     * For more information, see [Perform Machine Learning Inference](https://docs.aws.amazon.com/greengrass/v1/developerguide/ml-inference.html) in the *Developer Guide* .
     *
     * In an AWS CloudFormation template, `S3MachineLearningModelResourceData` can be used in the [`ResourceDataContainer`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-s3machinelearningmodelresourcedata.html
     */
    interface S3MachineLearningModelResourceDataProperty {
        /**
         * The absolute local path of the resource inside the Lambda environment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-s3machinelearningmodelresourcedata.html#cfn-greengrass-resourcedefinitionversion-s3machinelearningmodelresourcedata-destinationpath
         */
        readonly destinationPath: string;
        /**
         * The owner setting for the downloaded machine learning resource.
         *
         * For more information, see [Access Machine Learning Resources from Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-ml-resources.html) in the *Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-s3machinelearningmodelresourcedata.html#cfn-greengrass-resourcedefinitionversion-s3machinelearningmodelresourcedata-ownersetting
         */
        readonly ownerSetting?: cdk.IResolvable | CfnResourceDefinitionVersion.ResourceDownloadOwnerSettingProperty;
        /**
         * The URI of the source model in an Amazon S3 bucket.
         *
         * The model package must be in `tar.gz` or `.zip` format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-s3machinelearningmodelresourcedata.html#cfn-greengrass-resourcedefinitionversion-s3machinelearningmodelresourcedata-s3uri
         */
        readonly s3Uri: string;
    }
}
/**
 * Properties for defining a `CfnResourceDefinitionVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html
 */
export interface CfnResourceDefinitionVersionProps {
    /**
     * The ID of the resource definition associated with this version.
     *
     * This value is a GUID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html#cfn-greengrass-resourcedefinitionversion-resourcedefinitionid
     */
    readonly resourceDefinitionId: string;
    /**
     * The resources in this version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html#cfn-greengrass-resourcedefinitionversion-resources
     */
    readonly resources: Array<cdk.IResolvable | CfnResourceDefinitionVersion.ResourceInstanceProperty> | cdk.IResolvable;
}
/**
 * The `AWS::Greengrass::SubscriptionDefinition` resource represents a subscription definition for AWS IoT Greengrass .
 *
 * Subscription definitions are used to organize your subscription definition versions.
 *
 * Subscription definitions can reference multiple subscription definition versions. All subscription definition versions must be associated with a subscription definition. Each subscription definition version can contain one or more subscriptions.
 *
 * > When you create a subscription definition, you can optionally include an initial subscription definition version. To associate a subscription definition version later, create an [`AWS::Greengrass::SubscriptionDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html) resource and specify the ID of this subscription definition.
 * >
 * > After you create the subscription definition version that contains the subscriptions you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
 *
 * @cloudformationResource AWS::Greengrass::SubscriptionDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinition.html
 */
export declare class CfnSubscriptionDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSubscriptionDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSubscriptionDefinition;
    /**
     * The Amazon Resource Name (ARN) of the `SubscriptionDefinition` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/subscriptions/1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the `SubscriptionDefinition` , such as `1234a5b6-78cd-901e-2fgh-3i45j6k178l9` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ARN of the last `SubscriptionDefinitionVersion` that was added to the `SubscriptionDefinition` , such as `arn:aws:greengrass:us-east-1:  :/greengrass/definition/subscriptions/1234a5b6-78cd-901e-2fgh-3i45j6k178l9/versions/9876ac30-4bdb-4f9d-95af-b5fdb66be1a2` .
     *
     * @cloudformationAttribute LatestVersionArn
     */
    readonly attrLatestVersionArn: string;
    /**
     * The name of the `SubscriptionDefinition` , such as `MySubscriptionDefinition` .
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The subscription definition version to include when the subscription definition is created.
     */
    initialVersion?: cdk.IResolvable | CfnSubscriptionDefinition.SubscriptionDefinitionVersionProperty;
    /**
     * The name of the subscription definition.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Application-specific metadata to attach to the subscription definition.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSubscriptionDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSubscriptionDefinition {
    /**
     * A subscription definition version contains a list of [subscriptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscription.html) .
     *
     * > After you create a subscription definition version that contains the subscriptions you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
     *
     * In an AWS CloudFormation template, `SubscriptionDefinitionVersion` is the property type of the `InitialVersion` property in the [`AWS::Greengrass::SubscriptionDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinition.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscriptiondefinitionversion.html
     */
    interface SubscriptionDefinitionVersionProperty {
        /**
         * The subscriptions in this version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscriptiondefinitionversion.html#cfn-greengrass-subscriptiondefinition-subscriptiondefinitionversion-subscriptions
         */
        readonly subscriptions: Array<cdk.IResolvable | CfnSubscriptionDefinition.SubscriptionProperty> | cdk.IResolvable;
    }
    /**
     * Subscriptions define how MQTT messages can be exchanged between devices, functions, and connectors in the group, and with AWS IoT or the local shadow service.
     *
     * A subscription defines a message source, message target, and a topic (or subject) that's used to route messages from the source to the target. A subscription defines the message flow in one direction, from the source to the target. For two-way communication, you must set up two subscriptions, one for each direction.
     *
     * In an AWS CloudFormation template, the `Subscriptions` property of the [`SubscriptionDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscriptiondefinitionversion.html) property type contains a list of `Subscription` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscription.html
     */
    interface SubscriptionProperty {
        /**
         * A descriptive or arbitrary ID for the subscription.
         *
         * This value must be unique within the subscription definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscription.html#cfn-greengrass-subscriptiondefinition-subscription-id
         */
        readonly id: string;
        /**
         * The originator of the message.
         *
         * The value can be a thing ARN, the ARN of a Lambda function alias (recommended) or version, a connector ARN, `cloud` (which represents the AWS IoT cloud), or `GGShadowService` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscription.html#cfn-greengrass-subscriptiondefinition-subscription-source
         */
        readonly source: string;
        /**
         * The MQTT topic used to route the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscription.html#cfn-greengrass-subscriptiondefinition-subscription-subject
         */
        readonly subject: string;
        /**
         * The destination of the message.
         *
         * The value can be a thing ARN, the ARN of a Lambda function alias (recommended) or version, a connector ARN, `cloud` (which represents the AWS IoT cloud), or `GGShadowService` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscription.html#cfn-greengrass-subscriptiondefinition-subscription-target
         */
        readonly target: string;
    }
}
/**
 * Properties for defining a `CfnSubscriptionDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinition.html
 */
export interface CfnSubscriptionDefinitionProps {
    /**
     * The subscription definition version to include when the subscription definition is created.
     *
     * A subscription definition version contains a list of [`subscription`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscription.html) property types.
     *
     * > To associate a subscription definition version after the subscription definition is created, create an [`AWS::Greengrass::SubscriptionDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html) resource and specify the ID of this subscription definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinition.html#cfn-greengrass-subscriptiondefinition-initialversion
     */
    readonly initialVersion?: cdk.IResolvable | CfnSubscriptionDefinition.SubscriptionDefinitionVersionProperty;
    /**
     * The name of the subscription definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinition.html#cfn-greengrass-subscriptiondefinition-name
     */
    readonly name: string;
    /**
     * Application-specific metadata to attach to the subscription definition.
     *
     * You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/v1/developerguide/tagging.html) in the *Developer Guide* .
     *
     * This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
     *
     * ```json
     * "Tags": { "KeyName0": "value", "KeyName1": "value", "KeyName2": "value"
     * }
     * ```
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinition.html#cfn-greengrass-subscriptiondefinition-tags
     */
    readonly tags?: any;
}
/**
 * The `AWS::Greengrass::SubscriptionDefinitionVersion` resource represents a subscription definition version for AWS IoT Greengrass .
 *
 * A subscription definition version contains a list of subscriptions.
 *
 * > To create a subscription definition version, you must specify the ID of the subscription definition that you want to associate with the version. For information about creating a subscription definition, see [`AWS::Greengrass::SubscriptionDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinition.html) .
 * >
 * > After you create a subscription definition version that contains the subscriptions you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) .
 *
 * @cloudformationResource AWS::Greengrass::SubscriptionDefinitionVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html
 */
export declare class CfnSubscriptionDefinitionVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSubscriptionDefinitionVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSubscriptionDefinitionVersion;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ID of the subscription definition associated with this version.
     */
    subscriptionDefinitionId: string;
    /**
     * The subscriptions in this version.
     */
    subscriptions: Array<cdk.IResolvable | CfnSubscriptionDefinitionVersion.SubscriptionProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSubscriptionDefinitionVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSubscriptionDefinitionVersion {
    /**
     * Subscriptions define how MQTT messages can be exchanged between devices, functions, and connectors in the group, and with AWS IoT or the local shadow service.
     *
     * A subscription defines a message source, message target, and a topic (or subject) that's used to route messages from the source to the target. A subscription defines the message flow in one direction, from the source to the target. For two-way communication, you must set up two subscriptions, one for each direction.
     *
     * In an AWS CloudFormation template, the `Subscriptions` property of the [`AWS::Greengrass::SubscriptionDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html) resource contains a list of `Subscription` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinitionversion-subscription.html
     */
    interface SubscriptionProperty {
        /**
         * A descriptive or arbitrary ID for the subscription.
         *
         * This value must be unique within the subscription definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinitionversion-subscription.html#cfn-greengrass-subscriptiondefinitionversion-subscription-id
         */
        readonly id: string;
        /**
         * The originator of the message.
         *
         * The value can be a thing ARN, the ARN of a Lambda function alias (recommended) or version, a connector ARN, `cloud` (which represents the AWS IoT cloud), or `GGShadowService` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinitionversion-subscription.html#cfn-greengrass-subscriptiondefinitionversion-subscription-source
         */
        readonly source: string;
        /**
         * The MQTT topic used to route the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinitionversion-subscription.html#cfn-greengrass-subscriptiondefinitionversion-subscription-subject
         */
        readonly subject: string;
        /**
         * The destination of the message.
         *
         * The value can be a thing ARN, the ARN of a Lambda function alias (recommended) or version, a connector ARN, `cloud` (which represents the AWS IoT cloud), or `GGShadowService` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinitionversion-subscription.html#cfn-greengrass-subscriptiondefinitionversion-subscription-target
         */
        readonly target: string;
    }
}
/**
 * Properties for defining a `CfnSubscriptionDefinitionVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html
 */
export interface CfnSubscriptionDefinitionVersionProps {
    /**
     * The ID of the subscription definition associated with this version.
     *
     * This value is a GUID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html#cfn-greengrass-subscriptiondefinitionversion-subscriptiondefinitionid
     */
    readonly subscriptionDefinitionId: string;
    /**
     * The subscriptions in this version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html#cfn-greengrass-subscriptiondefinitionversion-subscriptions
     */
    readonly subscriptions: Array<cdk.IResolvable | CfnSubscriptionDefinitionVersion.SubscriptionProperty> | cdk.IResolvable;
}
