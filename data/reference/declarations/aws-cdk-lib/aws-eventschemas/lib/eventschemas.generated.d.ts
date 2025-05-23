import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Use the `AWS::EventSchemas::Discoverer` resource to specify a *discoverer* that is associated with an event bus.
 *
 * A discoverer allows the Amazon EventBridge Schema Registry to automatically generate schemas based on events on an event bus.
 *
 * @cloudformationResource AWS::EventSchemas::Discoverer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html
 */
export declare class CfnDiscoverer extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDiscoverer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDiscoverer;
    /**
     * @cloudformationAttribute CrossAccount
     */
    readonly attrCrossAccount: cdk.IResolvable;
    /**
     * The ARN of the discoverer.
     *
     * @cloudformationAttribute DiscovererArn
     */
    readonly attrDiscovererArn: string;
    /**
     * The ID of the discoverer.
     *
     * @cloudformationAttribute DiscovererId
     */
    readonly attrDiscovererId: string;
    /**
     * The state of the discoverer.
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * Allows for the discovery of the event schemas that are sent to the event bus from another account.
     */
    crossAccount?: boolean | cdk.IResolvable;
    /**
     * A description for the discoverer.
     */
    description?: string;
    /**
     * The ARN of the event bus.
     */
    sourceArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags associated with the resource.
     */
    tagsRaw?: Array<CfnDiscoverer.TagsEntryProperty>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDiscovererProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDiscoverer {
    /**
     * Tags to associate with the discoverer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-discoverer-tagsentry.html
     */
    interface TagsEntryProperty {
        /**
         * The key of a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-discoverer-tagsentry.html#cfn-eventschemas-discoverer-tagsentry-key
         */
        readonly key: string;
        /**
         * The value of a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-discoverer-tagsentry.html#cfn-eventschemas-discoverer-tagsentry-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnDiscoverer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html
 */
export interface CfnDiscovererProps {
    /**
     * Allows for the discovery of the event schemas that are sent to the event bus from another account.
     *
     * @default - true
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html#cfn-eventschemas-discoverer-crossaccount
     */
    readonly crossAccount?: boolean | cdk.IResolvable;
    /**
     * A description for the discoverer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html#cfn-eventschemas-discoverer-description
     */
    readonly description?: string;
    /**
     * The ARN of the event bus.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html#cfn-eventschemas-discoverer-sourcearn
     */
    readonly sourceArn: string;
    /**
     * Tags associated with the resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html#cfn-eventschemas-discoverer-tags
     */
    readonly tags?: Array<CfnDiscoverer.TagsEntryProperty>;
}
/**
 * Use the `AWS::EventSchemas::Registry` to specify a schema registry.
 *
 * Schema registries are containers for Schemas. Registries collect and organize schemas so that your schemas are in logical groups.
 *
 * @cloudformationResource AWS::EventSchemas::Registry
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html
 */
export declare class CfnRegistry extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRegistry from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRegistry;
    /**
     * The ARN of the registry.
     *
     * @cloudformationAttribute RegistryArn
     */
    readonly attrRegistryArn: string;
    /**
     * The name of the registry.
     *
     * @cloudformationAttribute RegistryName
     */
    readonly attrRegistryName: string;
    /**
     * A description of the registry to be created.
     */
    description?: string;
    /**
     * The name of the schema registry.
     */
    registryName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags to associate with the registry.
     */
    tagsRaw?: Array<CfnRegistry.TagsEntryProperty>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnRegistryProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRegistry {
    /**
     * Tags to associate with the schema registry.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-registry-tagsentry.html
     */
    interface TagsEntryProperty {
        /**
         * The key of a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-registry-tagsentry.html#cfn-eventschemas-registry-tagsentry-key
         */
        readonly key: string;
        /**
         * The value of a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-registry-tagsentry.html#cfn-eventschemas-registry-tagsentry-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnRegistry`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html
 */
export interface CfnRegistryProps {
    /**
     * A description of the registry to be created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html#cfn-eventschemas-registry-description
     */
    readonly description?: string;
    /**
     * The name of the schema registry.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html#cfn-eventschemas-registry-registryname
     */
    readonly registryName?: string;
    /**
     * Tags to associate with the registry.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html#cfn-eventschemas-registry-tags
     */
    readonly tags?: Array<CfnRegistry.TagsEntryProperty>;
}
/**
 * Use the `AWS::EventSchemas::RegistryPolicy` resource to specify resource-based policies for an EventBridge Schema Registry.
 *
 * @cloudformationResource AWS::EventSchemas::RegistryPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html
 */
export declare class CfnRegistryPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRegistryPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRegistryPolicy;
    /**
     * The ID of the policy.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A resource-based policy.
     */
    policy: any | cdk.IResolvable;
    /**
     * The name of the registry.
     */
    registryName: string;
    /**
     * The revision ID of the policy.
     */
    revisionId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRegistryPolicyProps);
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
 * Properties for defining a `CfnRegistryPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html
 */
export interface CfnRegistryPolicyProps {
    /**
     * A resource-based policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html#cfn-eventschemas-registrypolicy-policy
     */
    readonly policy: any | cdk.IResolvable;
    /**
     * The name of the registry.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html#cfn-eventschemas-registrypolicy-registryname
     */
    readonly registryName: string;
    /**
     * The revision ID of the policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html#cfn-eventschemas-registrypolicy-revisionid
     */
    readonly revisionId?: string;
}
/**
 * Use the `AWS::EventSchemas::Schema` resource to specify an event schema.
 *
 * @cloudformationResource AWS::EventSchemas::Schema
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html
 */
export declare class CfnSchema extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSchema from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSchema;
    /**
     * The date and time that schema was modified.
     *
     * @cloudformationAttribute LastModified
     */
    readonly attrLastModified: string;
    /**
     * The ARN of the schema.
     *
     * @cloudformationAttribute SchemaArn
     */
    readonly attrSchemaArn: string;
    /**
     * The name of the schema.
     *
     * @cloudformationAttribute SchemaName
     */
    readonly attrSchemaName: string;
    /**
     * The version number of the schema.
     *
     * @cloudformationAttribute SchemaVersion
     */
    readonly attrSchemaVersion: string;
    /**
     * The date the schema version was created.
     *
     * @cloudformationAttribute VersionCreatedDate
     */
    readonly attrVersionCreatedDate: string;
    /**
     * The source of the schema definition.
     */
    content: string;
    /**
     * A description of the schema.
     */
    description?: string;
    /**
     * The name of the schema registry.
     */
    registryName: string;
    /**
     * The name of the schema.
     */
    schemaName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags associated with the schema.
     */
    tagsRaw?: Array<CfnSchema.TagsEntryProperty>;
    /**
     * The type of schema.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSchemaProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSchema {
    /**
     * Tags to associate with the schema.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-schema-tagsentry.html
     */
    interface TagsEntryProperty {
        /**
         * The key of a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-schema-tagsentry.html#cfn-eventschemas-schema-tagsentry-key
         */
        readonly key: string;
        /**
         * The value of a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-schema-tagsentry.html#cfn-eventschemas-schema-tagsentry-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnSchema`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html
 */
export interface CfnSchemaProps {
    /**
     * The source of the schema definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html#cfn-eventschemas-schema-content
     */
    readonly content: string;
    /**
     * A description of the schema.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html#cfn-eventschemas-schema-description
     */
    readonly description?: string;
    /**
     * The name of the schema registry.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html#cfn-eventschemas-schema-registryname
     */
    readonly registryName: string;
    /**
     * The name of the schema.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html#cfn-eventschemas-schema-schemaname
     */
    readonly schemaName?: string;
    /**
     * Tags associated with the schema.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html#cfn-eventschemas-schema-tags
     */
    readonly tags?: Array<CfnSchema.TagsEntryProperty>;
    /**
     * The type of schema.
     *
     * Valid types include `OpenApi3` and `JSONSchemaDraft4` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html#cfn-eventschemas-schema-type
     */
    readonly type: string;
}
