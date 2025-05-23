import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates an annotation store.
 *
 * @cloudformationResource AWS::Omics::AnnotationStore
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html
 */
export declare class CfnAnnotationStore extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAnnotationStore from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAnnotationStore;
    /**
     * When the store was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The store's ID.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The store's status.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The store's status message.
     *
     * @cloudformationAttribute StatusMessage
     */
    readonly attrStatusMessage: string;
    /**
     * The store's ARN.
     *
     * @cloudformationAttribute StoreArn
     */
    readonly attrStoreArn: string;
    /**
     * The store's size in bytes.
     *
     * @cloudformationAttribute StoreSizeBytes
     */
    readonly attrStoreSizeBytes: cdk.IResolvable;
    /**
     * When the store was updated.
     *
     * @cloudformationAttribute UpdateTime
     */
    readonly attrUpdateTime: string;
    /**
     * A description for the store.
     */
    description?: string;
    /**
     * The name of the Annotation Store.
     */
    name: string;
    /**
     * The genome reference for the store's annotations.
     */
    reference?: cdk.IResolvable | CfnAnnotationStore.ReferenceItemProperty;
    /**
     * The store's server-side encryption (SSE) settings.
     */
    sseConfig?: cdk.IResolvable | CfnAnnotationStore.SseConfigProperty;
    /**
     * The annotation file format of the store.
     */
    storeFormat: string;
    /**
     * File parsing options for the annotation store.
     */
    storeOptions?: cdk.IResolvable | CfnAnnotationStore.StoreOptionsProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags for the store.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAnnotationStoreProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAnnotationStore {
    /**
     * A genome reference.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-referenceitem.html
     */
    interface ReferenceItemProperty {
        /**
         * The reference's ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-referenceitem.html#cfn-omics-annotationstore-referenceitem-referencearn
         */
        readonly referenceArn: string;
    }
    /**
     * Server-side encryption (SSE) settings for a store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-sseconfig.html
     */
    interface SseConfigProperty {
        /**
         * An encryption key ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-sseconfig.html#cfn-omics-annotationstore-sseconfig-keyarn
         */
        readonly keyArn?: string;
        /**
         * The encryption type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-sseconfig.html#cfn-omics-annotationstore-sseconfig-type
         */
        readonly type: string;
    }
    /**
     * The store's file parsing options.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-storeoptions.html
     */
    interface StoreOptionsProperty {
        /**
         * Formatting options for a TSV file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-storeoptions.html#cfn-omics-annotationstore-storeoptions-tsvstoreoptions
         */
        readonly tsvStoreOptions: cdk.IResolvable | CfnAnnotationStore.TsvStoreOptionsProperty;
    }
    /**
     * The store's parsing options.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-tsvstoreoptions.html
     */
    interface TsvStoreOptionsProperty {
        /**
         * The store's annotation type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-tsvstoreoptions.html#cfn-omics-annotationstore-tsvstoreoptions-annotationtype
         */
        readonly annotationType?: string;
        /**
         * The store's header key to column name mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-tsvstoreoptions.html#cfn-omics-annotationstore-tsvstoreoptions-formattoheader
         */
        readonly formatToHeader?: cdk.IResolvable | Record<string, string>;
        /**
         * The schema of an annotation store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-tsvstoreoptions.html#cfn-omics-annotationstore-tsvstoreoptions-schema
         */
        readonly schema?: any | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnAnnotationStore`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html
 */
export interface CfnAnnotationStoreProps {
    /**
     * A description for the store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-description
     */
    readonly description?: string;
    /**
     * The name of the Annotation Store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-name
     */
    readonly name: string;
    /**
     * The genome reference for the store's annotations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-reference
     */
    readonly reference?: cdk.IResolvable | CfnAnnotationStore.ReferenceItemProperty;
    /**
     * The store's server-side encryption (SSE) settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-sseconfig
     */
    readonly sseConfig?: cdk.IResolvable | CfnAnnotationStore.SseConfigProperty;
    /**
     * The annotation file format of the store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-storeformat
     */
    readonly storeFormat: string;
    /**
     * File parsing options for the annotation store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-storeoptions
     */
    readonly storeOptions?: cdk.IResolvable | CfnAnnotationStore.StoreOptionsProperty;
    /**
     * Tags for the store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Creates a reference store.
 *
 * @cloudformationResource AWS::Omics::ReferenceStore
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html
 */
export declare class CfnReferenceStore extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReferenceStore from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReferenceStore;
    /**
     * The store's ARN.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * When the store was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The store's ID.
     *
     * @cloudformationAttribute ReferenceStoreId
     */
    readonly attrReferenceStoreId: string;
    /**
     * A description for the store.
     */
    description?: string;
    /**
     * A name for the store.
     */
    name: string;
    /**
     * Server-side encryption (SSE) settings for the store.
     */
    sseConfig?: cdk.IResolvable | CfnReferenceStore.SseConfigProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags for the store.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReferenceStoreProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnReferenceStore {
    /**
     * Server-side encryption (SSE) settings for a store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-referencestore-sseconfig.html
     */
    interface SseConfigProperty {
        /**
         * An encryption key ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-referencestore-sseconfig.html#cfn-omics-referencestore-sseconfig-keyarn
         */
        readonly keyArn?: string;
        /**
         * The encryption type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-referencestore-sseconfig.html#cfn-omics-referencestore-sseconfig-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnReferenceStore`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html
 */
export interface CfnReferenceStoreProps {
    /**
     * A description for the store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html#cfn-omics-referencestore-description
     */
    readonly description?: string;
    /**
     * A name for the store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html#cfn-omics-referencestore-name
     */
    readonly name: string;
    /**
     * Server-side encryption (SSE) settings for the store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html#cfn-omics-referencestore-sseconfig
     */
    readonly sseConfig?: cdk.IResolvable | CfnReferenceStore.SseConfigProperty;
    /**
     * Tags for the store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html#cfn-omics-referencestore-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * You can optionally create a run group to limit the compute resources for the runs that you add to the group.
 *
 * @cloudformationResource AWS::Omics::RunGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html
 */
export declare class CfnRunGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRunGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRunGroup;
    /**
     * The run group's ARN.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * When the run group was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The run group's ID.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The group's maximum CPU count setting.
     */
    maxCpus?: number;
    /**
     * The group's maximum duration setting in minutes.
     */
    maxDuration?: number;
    /**
     * The maximum GPUs that can be used by a run group.
     */
    maxGpus?: number;
    /**
     * The group's maximum concurrent run setting.
     */
    maxRuns?: number;
    /**
     * The group's name.
     */
    name?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags for the group.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnRunGroupProps);
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
 * Properties for defining a `CfnRunGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html
 */
export interface CfnRunGroupProps {
    /**
     * The group's maximum CPU count setting.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html#cfn-omics-rungroup-maxcpus
     */
    readonly maxCpus?: number;
    /**
     * The group's maximum duration setting in minutes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html#cfn-omics-rungroup-maxduration
     */
    readonly maxDuration?: number;
    /**
     * The maximum GPUs that can be used by a run group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html#cfn-omics-rungroup-maxgpus
     */
    readonly maxGpus?: number;
    /**
     * The group's maximum concurrent run setting.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html#cfn-omics-rungroup-maxruns
     */
    readonly maxRuns?: number;
    /**
     * The group's name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html#cfn-omics-rungroup-name
     */
    readonly name?: string;
    /**
     * Tags for the group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html#cfn-omics-rungroup-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Creates a sequence store.
 *
 * @cloudformationResource AWS::Omics::SequenceStore
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html
 */
export declare class CfnSequenceStore extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSequenceStore from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSequenceStore;
    /**
     * The store's ARN.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * When the store was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The store's ID.
     *
     * @cloudformationAttribute SequenceStoreId
     */
    readonly attrSequenceStoreId: string;
    /**
     * A description for the store.
     */
    description?: string;
    /**
     * An S3 location that is used to store files that have failed a direct upload.
     */
    fallbackLocation?: string;
    /**
     * A name for the store.
     */
    name: string;
    /**
     * Server-side encryption (SSE) settings for the store.
     */
    sseConfig?: cdk.IResolvable | CfnSequenceStore.SseConfigProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags for the store.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSequenceStoreProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSequenceStore {
    /**
     * Server-side encryption (SSE) settings for a store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-sequencestore-sseconfig.html
     */
    interface SseConfigProperty {
        /**
         * An encryption key ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-sequencestore-sseconfig.html#cfn-omics-sequencestore-sseconfig-keyarn
         */
        readonly keyArn?: string;
        /**
         * The encryption type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-sequencestore-sseconfig.html#cfn-omics-sequencestore-sseconfig-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnSequenceStore`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html
 */
export interface CfnSequenceStoreProps {
    /**
     * A description for the store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-description
     */
    readonly description?: string;
    /**
     * An S3 location that is used to store files that have failed a direct upload.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-fallbacklocation
     */
    readonly fallbackLocation?: string;
    /**
     * A name for the store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-name
     */
    readonly name: string;
    /**
     * Server-side encryption (SSE) settings for the store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-sseconfig
     */
    readonly sseConfig?: cdk.IResolvable | CfnSequenceStore.SseConfigProperty;
    /**
     * Tags for the store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Create a store for variant data.
 *
 * @cloudformationResource AWS::Omics::VariantStore
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html
 */
export declare class CfnVariantStore extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVariantStore from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVariantStore;
    /**
     * When the store was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The store's ID.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The store's status.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The store's status message.
     *
     * @cloudformationAttribute StatusMessage
     */
    readonly attrStatusMessage: string;
    /**
     * The store's ARN.
     *
     * @cloudformationAttribute StoreArn
     */
    readonly attrStoreArn: string;
    /**
     * The store's size in bytes.
     *
     * @cloudformationAttribute StoreSizeBytes
     */
    readonly attrStoreSizeBytes: cdk.IResolvable;
    /**
     * When the store was updated.
     *
     * @cloudformationAttribute UpdateTime
     */
    readonly attrUpdateTime: string;
    /**
     * A description for the store.
     */
    description?: string;
    /**
     * A name for the store.
     */
    name: string;
    /**
     * The genome reference for the store's variants.
     */
    reference: cdk.IResolvable | CfnVariantStore.ReferenceItemProperty;
    /**
     * Server-side encryption (SSE) settings for the store.
     */
    sseConfig?: cdk.IResolvable | CfnVariantStore.SseConfigProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags for the store.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVariantStoreProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnVariantStore {
    /**
     * The read set's genome reference ARN.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-variantstore-referenceitem.html
     */
    interface ReferenceItemProperty {
        /**
         * The reference's ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-variantstore-referenceitem.html#cfn-omics-variantstore-referenceitem-referencearn
         */
        readonly referenceArn: string;
    }
    /**
     * Server-side encryption (SSE) settings for a store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-variantstore-sseconfig.html
     */
    interface SseConfigProperty {
        /**
         * An encryption key ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-variantstore-sseconfig.html#cfn-omics-variantstore-sseconfig-keyarn
         */
        readonly keyArn?: string;
        /**
         * The encryption type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-variantstore-sseconfig.html#cfn-omics-variantstore-sseconfig-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnVariantStore`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html
 */
export interface CfnVariantStoreProps {
    /**
     * A description for the store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html#cfn-omics-variantstore-description
     */
    readonly description?: string;
    /**
     * A name for the store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html#cfn-omics-variantstore-name
     */
    readonly name: string;
    /**
     * The genome reference for the store's variants.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html#cfn-omics-variantstore-reference
     */
    readonly reference: cdk.IResolvable | CfnVariantStore.ReferenceItemProperty;
    /**
     * Server-side encryption (SSE) settings for the store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html#cfn-omics-variantstore-sseconfig
     */
    readonly sseConfig?: cdk.IResolvable | CfnVariantStore.SseConfigProperty;
    /**
     * Tags for the store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html#cfn-omics-variantstore-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Creates a workflow.
 *
 * @cloudformationResource AWS::Omics::Workflow
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html
 */
export declare class CfnWorkflow extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWorkflow from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWorkflow;
    /**
     * The ARN for the workflow.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * When the workflow was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The workflow's ID.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The workflow's status.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The workflow's type.
     *
     * @cloudformationAttribute Type
     */
    readonly attrType: string;
    accelerators?: string;
    /**
     * The URI of a definition for the workflow.
     */
    definitionUri?: string;
    /**
     * The parameter's description.
     */
    description?: string;
    /**
     * An engine for the workflow.
     */
    engine?: string;
    /**
     * The path of the main definition file for the workflow.
     */
    main?: string;
    /**
     * The workflow's name.
     */
    name?: string;
    /**
     * The workflow's parameter template.
     */
    parameterTemplate?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnWorkflow.WorkflowParameterProperty>;
    /**
     * The default storage capacity for the workflow runs, in gibibytes.
     */
    storageCapacity?: number;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags for the workflow.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnWorkflowProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWorkflow {
    /**
     * A workflow parameter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-workflowparameter.html
     */
    interface WorkflowParameterProperty {
        /**
         * The parameter's description.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-workflowparameter.html#cfn-omics-workflow-workflowparameter-description
         */
        readonly description?: string;
        /**
         * Whether the parameter is optional.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-workflowparameter.html#cfn-omics-workflow-workflowparameter-optional
         */
        readonly optional?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnWorkflow`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html
 */
export interface CfnWorkflowProps {
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html#cfn-omics-workflow-accelerators
     */
    readonly accelerators?: string;
    /**
     * The URI of a definition for the workflow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html#cfn-omics-workflow-definitionuri
     */
    readonly definitionUri?: string;
    /**
     * The parameter's description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html#cfn-omics-workflow-description
     */
    readonly description?: string;
    /**
     * An engine for the workflow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html#cfn-omics-workflow-engine
     */
    readonly engine?: string;
    /**
     * The path of the main definition file for the workflow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html#cfn-omics-workflow-main
     */
    readonly main?: string;
    /**
     * The workflow's name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html#cfn-omics-workflow-name
     */
    readonly name?: string;
    /**
     * The workflow's parameter template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html#cfn-omics-workflow-parametertemplate
     */
    readonly parameterTemplate?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnWorkflow.WorkflowParameterProperty>;
    /**
     * The default storage capacity for the workflow runs, in gibibytes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html#cfn-omics-workflow-storagecapacity
     */
    readonly storageCapacity?: number;
    /**
     * Tags for the workflow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html#cfn-omics-workflow-tags
     */
    readonly tags?: Record<string, string>;
}
