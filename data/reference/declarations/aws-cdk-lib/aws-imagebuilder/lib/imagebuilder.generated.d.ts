import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a new component that can be used to build, validate, test, and assess your image.
 *
 * The component is based on a YAML document that you specify using exactly one of the following methods:
 *
 * - Inline, using the `data` property in the request body.
 * - A URL that points to a YAML document file stored in Amazon S3, using the `uri` property in the request body.
 *
 * @cloudformationResource AWS::ImageBuilder::Component
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html
 */
export declare class CfnComponent extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnComponent from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnComponent;
    /**
     * Returns the Amazon Resource Name (ARN) of the component. The following pattern is applied: `^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the encryption status of the component. For example `true` or `false` .
     *
     * @cloudformationAttribute Encrypted
     */
    readonly attrEncrypted: cdk.IResolvable;
    /**
     * Returns the name of the component.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * Image Builder determines the component type based on the phases that are defined in the component document. If there is only one phase, and its name is "test", then the type is `TEST` . For all other components, the type is `BUILD` .
     *
     * @cloudformationAttribute Type
     */
    readonly attrType: string;
    /**
     * The change description of the component.
     */
    changeDescription?: string;
    /**
     * Component `data` contains inline YAML document content for the component.
     */
    data?: string;
    /**
     * Describes the contents of the component.
     */
    description?: string;
    /**
     * The ID of the KMS key that is used to encrypt this component.
     */
    kmsKeyId?: string;
    /**
     * The name of the component.
     */
    name: string;
    /**
     * The operating system platform of the component.
     */
    platform: string;
    /**
     * The operating system (OS) version supported by the component.
     */
    supportedOsVersions?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags that apply to the component.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The `uri` of a YAML component document file.
     */
    uri?: string;
    /**
     * The component version.
     */
    version: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnComponentProps);
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
 * Properties for defining a `CfnComponent`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html
 */
export interface CfnComponentProps {
    /**
     * The change description of the component.
     *
     * Describes what change has been made in this version, or what makes this version different from other versions of the component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-changedescription
     */
    readonly changeDescription?: string;
    /**
     * Component `data` contains inline YAML document content for the component.
     *
     * Alternatively, you can specify the `uri` of a YAML document file stored in Amazon S3. However, you cannot specify both properties.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-data
     */
    readonly data?: string;
    /**
     * Describes the contents of the component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-description
     */
    readonly description?: string;
    /**
     * The ID of the KMS key that is used to encrypt this component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The name of the component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-name
     */
    readonly name: string;
    /**
     * The operating system platform of the component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-platform
     */
    readonly platform: string;
    /**
     * The operating system (OS) version supported by the component.
     *
     * If the OS information is available, a prefix match is performed against the base image OS version during image recipe creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-supportedosversions
     */
    readonly supportedOsVersions?: Array<string>;
    /**
     * The tags that apply to the component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The `uri` of a YAML component document file.
     *
     * This must be an S3 URL ( `s3://bucket/key` ), and the requester must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota.
     *
     * Alternatively, you can specify the YAML document inline, using the component `data` property. You cannot specify both properties.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-uri
     */
    readonly uri?: string;
    /**
     * The component version.
     *
     * For example, `1.0.0` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-version
     */
    readonly version: string;
}
/**
 * Creates a new container recipe.
 *
 * Container recipes define how images are configured, tested, and assessed.
 *
 * @cloudformationResource AWS::ImageBuilder::ContainerRecipe
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html
 */
export declare class CfnContainerRecipe extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnContainerRecipe from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnContainerRecipe;
    /**
     * Returns the Amazon Resource Name (ARN) of the container recipe. For example, `arn:aws:imagebuilder:us-east-1:123456789012:container-recipe/mybasicrecipe/2020.12.17` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the name of the container recipe.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * Build and test components that are included in the container recipe.
     */
    components: Array<CfnContainerRecipe.ComponentConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the type of container, such as Docker.
     */
    containerType: string;
    /**
     * The description of the container recipe.
     */
    description?: string;
    /**
     * Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside.
     */
    dockerfileTemplateData?: string;
    /**
     * The S3 URI for the Dockerfile that will be used to build your container image.
     */
    dockerfileTemplateUri?: string;
    /**
     * Specifies the operating system version for the base image.
     */
    imageOsVersionOverride?: string;
    /**
     * A group of options that can be used to configure an instance for building and testing container images.
     */
    instanceConfiguration?: CfnContainerRecipe.InstanceConfigurationProperty | cdk.IResolvable;
    /**
     * Identifies which KMS key is used to encrypt the container image for distribution to the target Region.
     */
    kmsKeyId?: string;
    /**
     * The name of the container recipe.
     */
    name: string;
    /**
     * The base image for the container recipe.
     */
    parentImage: string;
    /**
     * Specifies the operating system platform when you use a custom base image.
     */
    platformOverride?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags that are attached to the container recipe.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The destination repository for the container image.
     */
    targetRepository: cdk.IResolvable | CfnContainerRecipe.TargetContainerRepositoryProperty;
    /**
     * The semantic version of the container recipe.
     */
    version: string;
    /**
     * The working directory for use during build and test workflows.
     */
    workingDirectory?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnContainerRecipeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnContainerRecipe {
    /**
     * Defines a custom base AMI and block device mapping configurations of an instance used for building and testing container images.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-instanceconfiguration.html
     */
    interface InstanceConfigurationProperty {
        /**
         * Defines the block devices to attach for building an instance from this Image Builder AMI.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-instanceconfiguration.html#cfn-imagebuilder-containerrecipe-instanceconfiguration-blockdevicemappings
         */
        readonly blockDeviceMappings?: Array<CfnContainerRecipe.InstanceBlockDeviceMappingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The AMI ID to use as the base image for a container build and test instance.
         *
         * If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-instanceconfiguration.html#cfn-imagebuilder-containerrecipe-instanceconfiguration-image
         */
        readonly image?: string;
    }
    /**
     * Defines block device mappings for the instance used to configure your image.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-instanceblockdevicemapping.html
     */
    interface InstanceBlockDeviceMappingProperty {
        /**
         * The device to which these mappings apply.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-instanceblockdevicemapping.html#cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-devicename
         */
        readonly deviceName?: string;
        /**
         * Use to manage Amazon EBS-specific configuration for this mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-instanceblockdevicemapping.html#cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-ebs
         */
        readonly ebs?: CfnContainerRecipe.EbsInstanceBlockDeviceSpecificationProperty | cdk.IResolvable;
        /**
         * Use to remove a mapping from the base image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-instanceblockdevicemapping.html#cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-nodevice
         */
        readonly noDevice?: string;
        /**
         * Use to manage instance ephemeral devices.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-instanceblockdevicemapping.html#cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-virtualname
         */
        readonly virtualName?: string;
    }
    /**
     * Amazon EBS-specific block device mapping specifications.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification.html
     */
    interface EbsInstanceBlockDeviceSpecificationProperty {
        /**
         * Use to configure delete on termination of the associated device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-deleteontermination
         */
        readonly deleteOnTermination?: boolean | cdk.IResolvable;
        /**
         * Use to configure device encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-encrypted
         */
        readonly encrypted?: boolean | cdk.IResolvable;
        /**
         * Use to configure device IOPS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-iops
         */
        readonly iops?: number;
        /**
         * Use to configure the KMS key to use when encrypting the device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * The snapshot that defines the device contents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-snapshotid
         */
        readonly snapshotId?: string;
        /**
         * *For GP3 volumes only* – The throughput in MiB/s that the volume supports.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-throughput
         */
        readonly throughput?: number;
        /**
         * Use to override the device's volume size.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-volumesize
         */
        readonly volumeSize?: number;
        /**
         * Use to override the device's volume type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-volumetype
         */
        readonly volumeType?: string;
    }
    /**
     * Configuration details of the component.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-componentconfiguration.html
     */
    interface ComponentConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-componentconfiguration.html#cfn-imagebuilder-containerrecipe-componentconfiguration-componentarn
         */
        readonly componentArn?: string;
        /**
         * A group of parameter settings that Image Builder uses to configure the component for a specific recipe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-componentconfiguration.html#cfn-imagebuilder-containerrecipe-componentconfiguration-parameters
         */
        readonly parameters?: Array<CfnContainerRecipe.ComponentParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Contains a key/value pair that sets the named component parameter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-componentparameter.html
     */
    interface ComponentParameterProperty {
        /**
         * The name of the component parameter to set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-componentparameter.html#cfn-imagebuilder-containerrecipe-componentparameter-name
         */
        readonly name: string;
        /**
         * Sets the value for the named component parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-componentparameter.html#cfn-imagebuilder-containerrecipe-componentparameter-value
         */
        readonly value: Array<string>;
    }
    /**
     * The container repository where the output container image is stored.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-targetcontainerrepository.html
     */
    interface TargetContainerRepositoryProperty {
        /**
         * The name of the container repository where the output container image is stored.
         *
         * This name is prefixed by the repository location. For example, `<repository location url>/repository_name` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-targetcontainerrepository.html#cfn-imagebuilder-containerrecipe-targetcontainerrepository-repositoryname
         */
        readonly repositoryName?: string;
        /**
         * Specifies the service in which this image was registered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-targetcontainerrepository.html#cfn-imagebuilder-containerrecipe-targetcontainerrepository-service
         */
        readonly service?: string;
    }
}
/**
 * Properties for defining a `CfnContainerRecipe`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html
 */
export interface CfnContainerRecipeProps {
    /**
     * Build and test components that are included in the container recipe.
     *
     * Recipes require a minimum of one build component, and can have a maximum of 20 build and test components in any combination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#cfn-imagebuilder-containerrecipe-components
     */
    readonly components: Array<CfnContainerRecipe.ComponentConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the type of container, such as Docker.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#cfn-imagebuilder-containerrecipe-containertype
     */
    readonly containerType: string;
    /**
     * The description of the container recipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#cfn-imagebuilder-containerrecipe-description
     */
    readonly description?: string;
    /**
     * Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside.
     *
     * The template data consists of contextual variables where Image Builder places build information or scripts, based on your container image recipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#cfn-imagebuilder-containerrecipe-dockerfiletemplatedata
     */
    readonly dockerfileTemplateData?: string;
    /**
     * The S3 URI for the Dockerfile that will be used to build your container image.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#cfn-imagebuilder-containerrecipe-dockerfiletemplateuri
     */
    readonly dockerfileTemplateUri?: string;
    /**
     * Specifies the operating system version for the base image.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#cfn-imagebuilder-containerrecipe-imageosversionoverride
     */
    readonly imageOsVersionOverride?: string;
    /**
     * A group of options that can be used to configure an instance for building and testing container images.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#cfn-imagebuilder-containerrecipe-instanceconfiguration
     */
    readonly instanceConfiguration?: CfnContainerRecipe.InstanceConfigurationProperty | cdk.IResolvable;
    /**
     * Identifies which KMS key is used to encrypt the container image for distribution to the target Region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#cfn-imagebuilder-containerrecipe-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The name of the container recipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#cfn-imagebuilder-containerrecipe-name
     */
    readonly name: string;
    /**
     * The base image for the container recipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#cfn-imagebuilder-containerrecipe-parentimage
     */
    readonly parentImage: string;
    /**
     * Specifies the operating system platform when you use a custom base image.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#cfn-imagebuilder-containerrecipe-platformoverride
     */
    readonly platformOverride?: string;
    /**
     * Tags that are attached to the container recipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#cfn-imagebuilder-containerrecipe-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The destination repository for the container image.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#cfn-imagebuilder-containerrecipe-targetrepository
     */
    readonly targetRepository: cdk.IResolvable | CfnContainerRecipe.TargetContainerRepositoryProperty;
    /**
     * The semantic version of the container recipe.
     *
     * > The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.
     * >
     * > *Assignment:* For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.
     * >
     * > *Patterns:* You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.
     * >
     * > *Filtering:* With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#cfn-imagebuilder-containerrecipe-version
     */
    readonly version: string;
    /**
     * The working directory for use during build and test workflows.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#cfn-imagebuilder-containerrecipe-workingdirectory
     */
    readonly workingDirectory?: string;
}
/**
 * A distribution configuration allows you to specify the name and description of your output AMI, authorize other AWS account s to launch the AMI, and replicate the AMI to other AWS Regions .
 *
 * It also allows you to export the AMI to Amazon S3 .
 *
 * @cloudformationResource AWS::ImageBuilder::DistributionConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html
 */
export declare class CfnDistributionConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDistributionConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDistributionConfiguration;
    /**
     * Returns the Amazon Resource Name (ARN) of this distribution configuration. The following pattern is applied: `^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the name of the distribution configuration.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The description of this distribution configuration.
     */
    description?: string;
    /**
     * The distributions of this distribution configuration formatted as an array of Distribution objects.
     */
    distributions: Array<CfnDistributionConfiguration.DistributionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of this distribution configuration.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags of this distribution configuration.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDistributionConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDistributionConfiguration {
    /**
     * The distribution configuration distribution defines the settings for a specific Region in the Distribution Configuration.
     *
     * You must specify whether the distribution is for an AMI or a container image. To do so, include exactly one of the following data types for your distribution:
     *
     * - amiDistributionConfiguration
     * - containerDistributionConfiguration
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html
     */
    interface DistributionProperty {
        /**
         * The specific AMI settings, such as launch permissions and AMI tags.
         *
         * For details, see example schema below.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html#cfn-imagebuilder-distributionconfiguration-distribution-amidistributionconfiguration
         */
        readonly amiDistributionConfiguration?: any | cdk.IResolvable;
        /**
         * Container distribution settings for encryption, licensing, and sharing in a specific Region.
         *
         * For details, see example schema below.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html#cfn-imagebuilder-distributionconfiguration-distribution-containerdistributionconfiguration
         */
        readonly containerDistributionConfiguration?: any | cdk.IResolvable;
        /**
         * The Windows faster-launching configurations to use for AMI distribution.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html#cfn-imagebuilder-distributionconfiguration-distribution-fastlaunchconfigurations
         */
        readonly fastLaunchConfigurations?: Array<CfnDistributionConfiguration.FastLaunchConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A group of launchTemplateConfiguration settings that apply to image distribution for specified accounts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html#cfn-imagebuilder-distributionconfiguration-distribution-launchtemplateconfigurations
         */
        readonly launchTemplateConfigurations?: Array<cdk.IResolvable | CfnDistributionConfiguration.LaunchTemplateConfigurationProperty> | cdk.IResolvable;
        /**
         * The License Manager Configuration to associate with the AMI in the specified Region.
         *
         * For more information, see the [LicenseConfiguration API](https://docs.aws.amazon.com/license-manager/latest/APIReference/API_LicenseConfiguration.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html#cfn-imagebuilder-distributionconfiguration-distribution-licenseconfigurationarns
         */
        readonly licenseConfigurationArns?: Array<string>;
        /**
         * The target Region for the Distribution Configuration.
         *
         * For example, `eu-west-1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html#cfn-imagebuilder-distributionconfiguration-distribution-region
         */
        readonly region: string;
    }
    /**
     * Define and configure faster launching for output Windows AMIs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchconfiguration.html
     */
    interface FastLaunchConfigurationProperty {
        /**
         * The owner account ID for the fast-launch enabled Windows AMI.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchconfiguration.html#cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-accountid
         */
        readonly accountId?: string;
        /**
         * A Boolean that represents the current state of faster launching for the Windows AMI.
         *
         * Set to `true` to start using Windows faster launching, or `false` to stop using it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchconfiguration.html#cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchconfiguration.html#cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-launchtemplate
         */
        readonly launchTemplate?: CfnDistributionConfiguration.FastLaunchLaunchTemplateSpecificationProperty | cdk.IResolvable;
        /**
         * The maximum number of parallel instances that are launched for creating resources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchconfiguration.html#cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-maxparallellaunches
         */
        readonly maxParallelLaunches?: number;
        /**
         * Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchconfiguration.html#cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-snapshotconfiguration
         */
        readonly snapshotConfiguration?: CfnDistributionConfiguration.FastLaunchSnapshotConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Identifies the launch template that the associated Windows AMI uses for launching an instance when faster launching is enabled.
     *
     * > You can specify either the `launchTemplateName` or the `launchTemplateId` , but not both.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchlaunchtemplatespecification.html
     */
    interface FastLaunchLaunchTemplateSpecificationProperty {
        /**
         * The ID of the launch template to use for faster launching for a Windows AMI.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchlaunchtemplatespecification.html#cfn-imagebuilder-distributionconfiguration-fastlaunchlaunchtemplatespecification-launchtemplateid
         */
        readonly launchTemplateId?: string;
        /**
         * The name of the launch template to use for faster launching for a Windows AMI.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchlaunchtemplatespecification.html#cfn-imagebuilder-distributionconfiguration-fastlaunchlaunchtemplatespecification-launchtemplatename
         */
        readonly launchTemplateName?: string;
        /**
         * The version of the launch template to use for faster launching for a Windows AMI.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchlaunchtemplatespecification.html#cfn-imagebuilder-distributionconfiguration-fastlaunchlaunchtemplatespecification-launchtemplateversion
         */
        readonly launchTemplateVersion?: string;
    }
    /**
     * Configuration settings for creating and managing pre-provisioned snapshots for a fast-launch enabled Windows AMI.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchsnapshotconfiguration.html
     */
    interface FastLaunchSnapshotConfigurationProperty {
        /**
         * The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchsnapshotconfiguration.html#cfn-imagebuilder-distributionconfiguration-fastlaunchsnapshotconfiguration-targetresourcecount
         */
        readonly targetResourceCount?: number;
    }
    /**
     * Identifies an Amazon EC2 launch template to use for a specific account.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration.html
     */
    interface LaunchTemplateConfigurationProperty {
        /**
         * The account ID that this configuration applies to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration.html#cfn-imagebuilder-distributionconfiguration-launchtemplateconfiguration-accountid
         */
        readonly accountId?: string;
        /**
         * Identifies the Amazon EC2 launch template to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration.html#cfn-imagebuilder-distributionconfiguration-launchtemplateconfiguration-launchtemplateid
         */
        readonly launchTemplateId?: string;
        /**
         * Set the specified Amazon EC2 launch template as the default launch template for the specified account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration.html#cfn-imagebuilder-distributionconfiguration-launchtemplateconfiguration-setdefaultversion
         */
        readonly setDefaultVersion?: boolean | cdk.IResolvable;
    }
    /**
     * Define and configure the output AMIs of the pipeline.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-amidistributionconfiguration.html
     */
    interface AmiDistributionConfigurationProperty {
        /**
         * The tags to apply to AMIs distributed to this Region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-amidistributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-amidistributionconfiguration-amitags
         */
        readonly amiTags?: cdk.IResolvable | Record<string, string>;
        /**
         * The description of the AMI distribution configuration.
         *
         * Minimum and maximum length are in characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-amidistributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-amidistributionconfiguration-description
         */
        readonly description?: string;
        /**
         * The KMS key identifier used to encrypt the distributed image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-amidistributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-amidistributionconfiguration-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * Launch permissions can be used to configure which AWS account s can use the AMI to launch instances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-amidistributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-amidistributionconfiguration-launchpermissionconfiguration
         */
        readonly launchPermissionConfiguration?: cdk.IResolvable | CfnDistributionConfiguration.LaunchPermissionConfigurationProperty;
        /**
         * The name of the output AMI.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-amidistributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-amidistributionconfiguration-name
         */
        readonly name?: string;
        /**
         * The ID of an account to which you want to distribute an image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-amidistributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-amidistributionconfiguration-targetaccountids
         */
        readonly targetAccountIds?: Array<string>;
    }
    /**
     * Describes the configuration for a launch permission.
     *
     * The launch permission modification request is sent to the [Amazon EC2 ModifyImageAttribute](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html) API on behalf of the user for each Region they have selected to distribute the AMI. To make an AMI public, set the launch permission authorized accounts to `all` . See the examples for making an AMI public at [Amazon EC2 ModifyImageAttribute](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchpermissionconfiguration.html
     */
    interface LaunchPermissionConfigurationProperty {
        /**
         * The ARN for an AWS Organizations organizational unit (OU) that you want to share your AMI with.
         *
         * For more information about key concepts for AWS Organizations , see [AWS Organizations terminology and concepts](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchpermissionconfiguration.html#cfn-imagebuilder-distributionconfiguration-launchpermissionconfiguration-organizationalunitarns
         */
        readonly organizationalUnitArns?: Array<string>;
        /**
         * The ARN for an AWS Organization that you want to share your AMI with.
         *
         * For more information, see [What is AWS Organizations ?](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchpermissionconfiguration.html#cfn-imagebuilder-distributionconfiguration-launchpermissionconfiguration-organizationarns
         */
        readonly organizationArns?: Array<string>;
        /**
         * The name of the group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchpermissionconfiguration.html#cfn-imagebuilder-distributionconfiguration-launchpermissionconfiguration-usergroups
         */
        readonly userGroups?: Array<string>;
        /**
         * The AWS account ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchpermissionconfiguration.html#cfn-imagebuilder-distributionconfiguration-launchpermissionconfiguration-userids
         */
        readonly userIds?: Array<string>;
    }
    /**
     * Container distribution settings for encryption, licensing, and sharing in a specific Region.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-containerdistributionconfiguration.html
     */
    interface ContainerDistributionConfigurationProperty {
        /**
         * Tags that are attached to the container distribution configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-containerdistributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-containerdistributionconfiguration-containertags
         */
        readonly containerTags?: Array<string>;
        /**
         * The description of the container distribution configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-containerdistributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-containerdistributionconfiguration-description
         */
        readonly description?: string;
        /**
         * The destination repository for the container distribution configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-containerdistributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-containerdistributionconfiguration-targetrepository
         */
        readonly targetRepository?: cdk.IResolvable | CfnDistributionConfiguration.TargetContainerRepositoryProperty;
    }
    /**
     * The container repository where the output container image is stored.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-targetcontainerrepository.html
     */
    interface TargetContainerRepositoryProperty {
        /**
         * The name of the container repository where the output container image is stored.
         *
         * This name is prefixed by the repository location. For example, `<repository location url>/repository_name` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-targetcontainerrepository.html#cfn-imagebuilder-distributionconfiguration-targetcontainerrepository-repositoryname
         */
        readonly repositoryName?: string;
        /**
         * Specifies the service in which this image was registered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-targetcontainerrepository.html#cfn-imagebuilder-distributionconfiguration-targetcontainerrepository-service
         */
        readonly service?: string;
    }
}
/**
 * Properties for defining a `CfnDistributionConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html
 */
export interface CfnDistributionConfigurationProps {
    /**
     * The description of this distribution configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-description
     */
    readonly description?: string;
    /**
     * The distributions of this distribution configuration formatted as an array of Distribution objects.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-distributions
     */
    readonly distributions: Array<CfnDistributionConfiguration.DistributionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of this distribution configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-name
     */
    readonly name: string;
    /**
     * The tags of this distribution configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Creates a new image.
 *
 * This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
 *
 * @cloudformationResource AWS::ImageBuilder::Image
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html
 */
export declare class CfnImage extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnImage from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnImage;
    /**
     * Returns the Amazon Resource Name (ARN) of the image. For example, `arn:aws:imagebuilder:us-west-2:123456789012:image/mybasicrecipe/2019.12.03/1` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the AMI ID of the Amazon EC2 AMI in the Region in which you are using Image Builder. Values are returned only for AMIs, and not for container images.
     *
     * @cloudformationAttribute ImageId
     */
    readonly attrImageId: string;
    /**
     * Returns the URI for a container image created in the context Region. Values are returned only for container images, and not for AMIs.
     *
     * @cloudformationAttribute ImageUri
     */
    readonly attrImageUri: string;
    /**
     * Returns the name of the image.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
     */
    containerRecipeArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline.
     */
    distributionConfigurationArn?: string;
    /**
     * Collects additional information about the image being created, including the operating system (OS) version and package list.
     */
    enhancedImageMetadataEnabled?: boolean | cdk.IResolvable;
    /**
     * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions.
     */
    executionRole?: string;
    /**
     * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
     */
    imageRecipeArn?: string;
    /**
     * Contains settings for vulnerability scans.
     */
    imageScanningConfiguration?: CfnImage.ImageScanningConfigurationProperty | cdk.IResolvable;
    /**
     * The image tests configuration of the image.
     */
    imageTestsConfiguration?: CfnImage.ImageTestsConfigurationProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested.
     */
    infrastructureConfigurationArn?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags of the image.
     */
    tagsRaw?: Record<string, string>;
    /**
     * Contains an array of workflow configuration objects.
     */
    workflows?: Array<cdk.IResolvable | CfnImage.WorkflowConfigurationProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnImageProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnImage {
    /**
     * Contains settings for Image Builder image resource and container image scans.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-imagescanningconfiguration.html
     */
    interface ImageScanningConfigurationProperty {
        /**
         * Contains Amazon ECR settings for vulnerability scans.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-imagescanningconfiguration.html#cfn-imagebuilder-image-imagescanningconfiguration-ecrconfiguration
         */
        readonly ecrConfiguration?: CfnImage.EcrConfigurationProperty | cdk.IResolvable;
        /**
         * A setting that indicates whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-imagescanningconfiguration.html#cfn-imagebuilder-image-imagescanningconfiguration-imagescanningenabled
         */
        readonly imageScanningEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * Settings that Image Builder uses to configure the ECR repository and the output container images that Amazon Inspector scans.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-ecrconfiguration.html
     */
    interface EcrConfigurationProperty {
        /**
         * Tags for Image Builder to apply to the output container image that Amazon Inspector scans.
         *
         * Tags can help you identify and manage your scanned images.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-ecrconfiguration.html#cfn-imagebuilder-image-ecrconfiguration-containertags
         */
        readonly containerTags?: Array<string>;
        /**
         * The name of the container repository that Amazon Inspector scans to identify findings for your container images.
         *
         * The name includes the path for the repository location. If you don’t provide this information, Image Builder creates a repository in your account named `image-builder-image-scanning-repository` for vulnerability scans of your output container images.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-ecrconfiguration.html#cfn-imagebuilder-image-ecrconfiguration-repositoryname
         */
        readonly repositoryName?: string;
    }
    /**
     * When you create an image or container recipe with Image Builder , you can add the build or test components that are used to create the final image.
     *
     * You must have at least one build component to create a recipe, but test components are not required. If you have added tests, they run after the image is created, to ensure that the target image is functional and can be used reliably for launching Amazon EC2 instances.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-imagetestsconfiguration.html
     */
    interface ImageTestsConfigurationProperty {
        /**
         * Determines if tests should run after building the image.
         *
         * Image Builder defaults to enable tests to run following the image build, before image distribution.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-imagetestsconfiguration.html#cfn-imagebuilder-image-imagetestsconfiguration-imagetestsenabled
         */
        readonly imageTestsEnabled?: boolean | cdk.IResolvable;
        /**
         * The maximum time in minutes that tests are permitted to run.
         *
         * > The timeout property is not currently active. This value is ignored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-imagetestsconfiguration.html#cfn-imagebuilder-image-imagetestsconfiguration-timeoutminutes
         */
        readonly timeoutMinutes?: number;
    }
    /**
     * Contains control settings and configurable inputs for a workflow resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-workflowconfiguration.html
     */
    interface WorkflowConfigurationProperty {
        /**
         * The action to take if the workflow fails.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-workflowconfiguration.html#cfn-imagebuilder-image-workflowconfiguration-onfailure
         */
        readonly onFailure?: string;
        /**
         * Test workflows are defined within named runtime groups called parallel groups.
         *
         * The parallel group is the named group that contains this test workflow. Test workflows within a parallel group can run at the same time. Image Builder starts up to five test workflows in the group at the same time, and starts additional workflows as others complete, until all workflows in the group have completed. This field only applies for test workflows.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-workflowconfiguration.html#cfn-imagebuilder-image-workflowconfiguration-parallelgroup
         */
        readonly parallelGroup?: string;
        /**
         * Contains parameter values for each of the parameters that the workflow document defined for the workflow resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-workflowconfiguration.html#cfn-imagebuilder-image-workflowconfiguration-parameters
         */
        readonly parameters?: Array<cdk.IResolvable | CfnImage.WorkflowParameterProperty> | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of the workflow resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-workflowconfiguration.html#cfn-imagebuilder-image-workflowconfiguration-workflowarn
         */
        readonly workflowArn?: string;
    }
    /**
     * Contains a key/value pair that sets the named workflow parameter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-workflowparameter.html
     */
    interface WorkflowParameterProperty {
        /**
         * The name of the workflow parameter to set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-workflowparameter.html#cfn-imagebuilder-image-workflowparameter-name
         */
        readonly name?: string;
        /**
         * Sets the value for the named workflow parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-workflowparameter.html#cfn-imagebuilder-image-workflowparameter-value
         */
        readonly value?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnImage`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html
 */
export interface CfnImageProps {
    /**
     * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-containerrecipearn
     */
    readonly containerRecipeArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-distributionconfigurationarn
     */
    readonly distributionConfigurationArn?: string;
    /**
     * Collects additional information about the image being created, including the operating system (OS) version and package list.
     *
     * This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-enhancedimagemetadataenabled
     */
    readonly enhancedImageMetadataEnabled?: boolean | cdk.IResolvable;
    /**
     * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-executionrole
     */
    readonly executionRole?: string;
    /**
     * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-imagerecipearn
     */
    readonly imageRecipeArn?: string;
    /**
     * Contains settings for vulnerability scans.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-imagescanningconfiguration
     */
    readonly imageScanningConfiguration?: CfnImage.ImageScanningConfigurationProperty | cdk.IResolvable;
    /**
     * The image tests configuration of the image.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-imagetestsconfiguration
     */
    readonly imageTestsConfiguration?: CfnImage.ImageTestsConfigurationProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-infrastructureconfigurationarn
     */
    readonly infrastructureConfigurationArn?: string;
    /**
     * The tags of the image.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * Contains an array of workflow configuration objects.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-workflows
     */
    readonly workflows?: Array<cdk.IResolvable | CfnImage.WorkflowConfigurationProperty> | cdk.IResolvable;
}
/**
 * An image pipeline is the automation configuration for building secure OS images on AWS .
 *
 * The Image Builder image pipeline is associated with an image recipe that defines the build, validation, and test phases for an image build lifecycle. An image pipeline can be associated with an infrastructure configuration that defines where your image is built. You can define attributes, such as instance types, a subnet for your VPC, security groups, logging, and other infrastructure-related configurations. You can also associate your image pipeline with a distribution configuration to define how you would like to deploy your image.
 *
 * @cloudformationResource AWS::ImageBuilder::ImagePipeline
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html
 */
export declare class CfnImagePipeline extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnImagePipeline from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnImagePipeline;
    /**
     * Returns the Amazon Resource Name (ARN) of the image pipeline. For example, `arn:aws:imagebuilder:us-west-2:123456789012:image-pipeline/mywindows2016pipeline` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the name of the image pipeline.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The Amazon Resource Name (ARN) of the container recipe that is used for this pipeline.
     */
    containerRecipeArn?: string;
    /**
     * The description of this image pipeline.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.
     */
    distributionConfigurationArn?: string;
    /**
     * Collects additional information about the image being created, including the operating system (OS) version and package list.
     */
    enhancedImageMetadataEnabled?: boolean | cdk.IResolvable;
    /**
     * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions.
     */
    executionRole?: string;
    /**
     * The Amazon Resource Name (ARN) of the image recipe associated with this image pipeline.
     */
    imageRecipeArn?: string;
    /**
     * Contains settings for vulnerability scans.
     */
    imageScanningConfiguration?: CfnImagePipeline.ImageScanningConfigurationProperty | cdk.IResolvable;
    /**
     * The configuration of the image tests that run after image creation to ensure the quality of the image that was created.
     */
    imageTestsConfiguration?: CfnImagePipeline.ImageTestsConfigurationProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.
     */
    infrastructureConfigurationArn: string;
    /**
     * The name of the image pipeline.
     */
    name: string;
    /**
     * The schedule of the image pipeline.
     */
    schedule?: cdk.IResolvable | CfnImagePipeline.ScheduleProperty;
    /**
     * The status of the image pipeline.
     */
    status?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags of this image pipeline.
     */
    tagsRaw?: Record<string, string>;
    /**
     * Contains the workflows that run for the image pipeline.
     */
    workflows?: Array<cdk.IResolvable | CfnImagePipeline.WorkflowConfigurationProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnImagePipelineProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnImagePipeline {
    /**
     * Contains settings for Image Builder image resource and container image scans.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-imagescanningconfiguration.html
     */
    interface ImageScanningConfigurationProperty {
        /**
         * Contains Amazon ECR settings for vulnerability scans.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-imagescanningconfiguration.html#cfn-imagebuilder-imagepipeline-imagescanningconfiguration-ecrconfiguration
         */
        readonly ecrConfiguration?: CfnImagePipeline.EcrConfigurationProperty | cdk.IResolvable;
        /**
         * A setting that indicates whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-imagescanningconfiguration.html#cfn-imagebuilder-imagepipeline-imagescanningconfiguration-imagescanningenabled
         */
        readonly imageScanningEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * Settings that Image Builder uses to configure the ECR repository and the output container images that Amazon Inspector scans.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-ecrconfiguration.html
     */
    interface EcrConfigurationProperty {
        /**
         * Tags for Image Builder to apply to the output container image that Amazon Inspector scans.
         *
         * Tags can help you identify and manage your scanned images.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-ecrconfiguration.html#cfn-imagebuilder-imagepipeline-ecrconfiguration-containertags
         */
        readonly containerTags?: Array<string>;
        /**
         * The name of the container repository that Amazon Inspector scans to identify findings for your container images.
         *
         * The name includes the path for the repository location. If you don’t provide this information, Image Builder creates a repository in your account named `image-builder-image-scanning-repository` for vulnerability scans of your output container images.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-ecrconfiguration.html#cfn-imagebuilder-imagepipeline-ecrconfiguration-repositoryname
         */
        readonly repositoryName?: string;
    }
    /**
     * A schedule configures when and how often a pipeline will automatically create a new image.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-schedule.html
     */
    interface ScheduleProperty {
        /**
         * The condition configures when the pipeline should trigger a new image build.
         *
         * When the `pipelineExecutionStartCondition` is set to `EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE` , and you use semantic version filters on the base image or components in your image recipe, Image Builder will build a new image only when there are new versions of the image or components in your recipe that match the semantic version filter. When it is set to `EXPRESSION_MATCH_ONLY` , it will build a new image every time the CRON expression matches the current time. For semantic version syntax, see [CreateComponent](https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html) in the *Image Builder API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-schedule.html#cfn-imagebuilder-imagepipeline-schedule-pipelineexecutionstartcondition
         */
        readonly pipelineExecutionStartCondition?: string;
        /**
         * The cron expression determines how often EC2 Image Builder evaluates your `pipelineExecutionStartCondition` .
         *
         * For information on how to format a cron expression in Image Builder, see [Use cron expressions in EC2 Image Builder](https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-cron.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-schedule.html#cfn-imagebuilder-imagepipeline-schedule-scheduleexpression
         */
        readonly scheduleExpression?: string;
    }
    /**
     * When you create an image or container recipe with Image Builder , you can add the build or test components that your image pipeline uses to create the final image.
     *
     * You must have at least one build component to create a recipe, but test components are not required. Your pipeline runs tests after it builds the image, to ensure that the target image is functional and can be used reliably for launching Amazon EC2 instances.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-imagetestsconfiguration.html
     */
    interface ImageTestsConfigurationProperty {
        /**
         * Defines if tests should be executed when building this image.
         *
         * For example, `true` or `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-imagetestsconfiguration.html#cfn-imagebuilder-imagepipeline-imagetestsconfiguration-imagetestsenabled
         */
        readonly imageTestsEnabled?: boolean | cdk.IResolvable;
        /**
         * The maximum time in minutes that tests are permitted to run.
         *
         * > The timeout property is not currently active. This value is ignored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-imagetestsconfiguration.html#cfn-imagebuilder-imagepipeline-imagetestsconfiguration-timeoutminutes
         */
        readonly timeoutMinutes?: number;
    }
    /**
     * Contains control settings and configurable inputs for a workflow resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-workflowconfiguration.html
     */
    interface WorkflowConfigurationProperty {
        /**
         * The action to take if the workflow fails.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-workflowconfiguration.html#cfn-imagebuilder-imagepipeline-workflowconfiguration-onfailure
         */
        readonly onFailure?: string;
        /**
         * Test workflows are defined within named runtime groups called parallel groups.
         *
         * The parallel group is the named group that contains this test workflow. Test workflows within a parallel group can run at the same time. Image Builder starts up to five test workflows in the group at the same time, and starts additional workflows as others complete, until all workflows in the group have completed. This field only applies for test workflows.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-workflowconfiguration.html#cfn-imagebuilder-imagepipeline-workflowconfiguration-parallelgroup
         */
        readonly parallelGroup?: string;
        /**
         * Contains parameter values for each of the parameters that the workflow document defined for the workflow resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-workflowconfiguration.html#cfn-imagebuilder-imagepipeline-workflowconfiguration-parameters
         */
        readonly parameters?: Array<cdk.IResolvable | CfnImagePipeline.WorkflowParameterProperty> | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of the workflow resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-workflowconfiguration.html#cfn-imagebuilder-imagepipeline-workflowconfiguration-workflowarn
         */
        readonly workflowArn?: string;
    }
    /**
     * Contains a key/value pair that sets the named workflow parameter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-workflowparameter.html
     */
    interface WorkflowParameterProperty {
        /**
         * The name of the workflow parameter to set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-workflowparameter.html#cfn-imagebuilder-imagepipeline-workflowparameter-name
         */
        readonly name?: string;
        /**
         * Sets the value for the named workflow parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-workflowparameter.html#cfn-imagebuilder-imagepipeline-workflowparameter-value
         */
        readonly value?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnImagePipeline`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html
 */
export interface CfnImagePipelineProps {
    /**
     * The Amazon Resource Name (ARN) of the container recipe that is used for this pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-containerrecipearn
     */
    readonly containerRecipeArn?: string;
    /**
     * The description of this image pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-description
     */
    readonly description?: string;
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-distributionconfigurationarn
     */
    readonly distributionConfigurationArn?: string;
    /**
     * Collects additional information about the image being created, including the operating system (OS) version and package list.
     *
     * This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-enhancedimagemetadataenabled
     */
    readonly enhancedImageMetadataEnabled?: boolean | cdk.IResolvable;
    /**
     * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-executionrole
     */
    readonly executionRole?: string;
    /**
     * The Amazon Resource Name (ARN) of the image recipe associated with this image pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-imagerecipearn
     */
    readonly imageRecipeArn?: string;
    /**
     * Contains settings for vulnerability scans.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-imagescanningconfiguration
     */
    readonly imageScanningConfiguration?: CfnImagePipeline.ImageScanningConfigurationProperty | cdk.IResolvable;
    /**
     * The configuration of the image tests that run after image creation to ensure the quality of the image that was created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-imagetestsconfiguration
     */
    readonly imageTestsConfiguration?: CfnImagePipeline.ImageTestsConfigurationProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-infrastructureconfigurationarn
     */
    readonly infrastructureConfigurationArn: string;
    /**
     * The name of the image pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-name
     */
    readonly name: string;
    /**
     * The schedule of the image pipeline.
     *
     * A schedule configures how often and when a pipeline automatically creates a new image.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-schedule
     */
    readonly schedule?: cdk.IResolvable | CfnImagePipeline.ScheduleProperty;
    /**
     * The status of the image pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-status
     */
    readonly status?: string;
    /**
     * The tags of this image pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * Contains the workflows that run for the image pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-workflows
     */
    readonly workflows?: Array<cdk.IResolvable | CfnImagePipeline.WorkflowConfigurationProperty> | cdk.IResolvable;
}
/**
 * An Image Builder image recipe is a document that defines the base image and the components to be applied to the base image to produce the desired configuration for the output image.
 *
 * You can use an image recipe to duplicate builds. Image Builder image recipes can be shared, branched, and edited using the console wizard, the AWS CLI , or the API. You can use image recipes with your version control software to maintain shareable versioned image recipes.
 *
 * @cloudformationResource AWS::ImageBuilder::ImageRecipe
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html
 */
export declare class CfnImageRecipe extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnImageRecipe from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnImageRecipe;
    /**
     * Returns the Amazon Resource Name (ARN) of the image recipe. For example, `arn:aws:imagebuilder:us-east-1:123456789012:image-recipe/mybasicrecipe/2019.12.03` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the image recipe.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * Before you create a new AMI, Image Builder launches temporary Amazon EC2 instances to build and test your image configuration.
     */
    additionalInstanceConfiguration?: CfnImageRecipe.AdditionalInstanceConfigurationProperty | cdk.IResolvable;
    /**
     * The block device mappings to apply when creating images from this recipe.
     */
    blockDeviceMappings?: Array<CfnImageRecipe.InstanceBlockDeviceMappingProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The components of the image recipe.
     */
    components: Array<CfnImageRecipe.ComponentConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the image recipe.
     */
    description?: string;
    /**
     * The name of the image recipe.
     */
    name: string;
    /**
     * The parent image of the image recipe.
     */
    parentImage: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags of the image recipe.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The semantic version of the image recipe.
     */
    version: string;
    /**
     * The working directory to be used during build and test workflows.
     */
    workingDirectory?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnImageRecipeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnImageRecipe {
    /**
     * Configuration details of the component.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-componentconfiguration.html
     */
    interface ComponentConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-componentconfiguration.html#cfn-imagebuilder-imagerecipe-componentconfiguration-componentarn
         */
        readonly componentArn?: string;
        /**
         * A group of parameter settings that Image Builder uses to configure the component for a specific recipe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-componentconfiguration.html#cfn-imagebuilder-imagerecipe-componentconfiguration-parameters
         */
        readonly parameters?: Array<CfnImageRecipe.ComponentParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Contains a key/value pair that sets the named component parameter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-componentparameter.html
     */
    interface ComponentParameterProperty {
        /**
         * The name of the component parameter to set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-componentparameter.html#cfn-imagebuilder-imagerecipe-componentparameter-name
         */
        readonly name: string;
        /**
         * Sets the value for the named component parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-componentparameter.html#cfn-imagebuilder-imagerecipe-componentparameter-value
         */
        readonly value: Array<string>;
    }
    /**
     * Defines block device mappings for the instance used to configure your image.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-instanceblockdevicemapping.html
     */
    interface InstanceBlockDeviceMappingProperty {
        /**
         * The device to which these mappings apply.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-instanceblockdevicemapping.html#cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-devicename
         */
        readonly deviceName?: string;
        /**
         * Use to manage Amazon EBS-specific configuration for this mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-instanceblockdevicemapping.html#cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-ebs
         */
        readonly ebs?: CfnImageRecipe.EbsInstanceBlockDeviceSpecificationProperty | cdk.IResolvable;
        /**
         * Enter an empty string to remove a mapping from the parent image.
         *
         * The following is an example of an empty string value in the `NoDevice` field.
         *
         * `NoDevice:""`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-instanceblockdevicemapping.html#cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-nodevice
         */
        readonly noDevice?: string;
        /**
         * Manages the instance ephemeral devices.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-instanceblockdevicemapping.html#cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-virtualname
         */
        readonly virtualName?: string;
    }
    /**
     * The image recipe EBS instance block device specification includes the Amazon EBS-specific block device mapping specifications for the image.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification.html
     */
    interface EbsInstanceBlockDeviceSpecificationProperty {
        /**
         * Configures delete on termination of the associated device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-deleteontermination
         */
        readonly deleteOnTermination?: boolean | cdk.IResolvable;
        /**
         * Use to configure device encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-encrypted
         */
        readonly encrypted?: boolean | cdk.IResolvable;
        /**
         * Use to configure device IOPS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-iops
         */
        readonly iops?: number;
        /**
         * Use to configure the KMS key to use when encrypting the device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * The snapshot that defines the device contents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-snapshotid
         */
        readonly snapshotId?: string;
        /**
         * *For GP3 volumes only* – The throughput in MiB/s that the volume supports.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-throughput
         */
        readonly throughput?: number;
        /**
         * Overrides the volume size of the device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-volumesize
         */
        readonly volumeSize?: number;
        /**
         * Overrides the volume type of the device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification.html#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-volumetype
         */
        readonly volumeType?: string;
    }
    /**
     * In addition to your infrastructure configuration, these settings provide an extra layer of control over your build instances.
     *
     * You can also specify commands to run on launch for all of your build instances.
     *
     * Image Builder does not automatically install the Systems Manager agent on Windows instances. If your base image includes the Systems Manager agent, then the AMI that you create will also include the agent. For Linux instances, if the base image does not already include the Systems Manager agent, Image Builder installs it. For Linux instances where Image Builder installs the Systems Manager agent, you can choose whether to keep it for the AMI that you create.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-additionalinstanceconfiguration.html
     */
    interface AdditionalInstanceConfigurationProperty {
        /**
         * Contains settings for the Systems Manager agent on your build instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-additionalinstanceconfiguration.html#cfn-imagebuilder-imagerecipe-additionalinstanceconfiguration-systemsmanageragent
         */
        readonly systemsManagerAgent?: cdk.IResolvable | CfnImageRecipe.SystemsManagerAgentProperty;
        /**
         * Use this property to provide commands or a command script to run when you launch your build instance.
         *
         * The userDataOverride property replaces any commands that Image Builder might have added to ensure that Systems Manager is installed on your Linux build instance. If you override the user data, make sure that you add commands to install Systems Manager, if it is not pre-installed on your base image.
         *
         * > The user data is always base 64 encoded. For example, the following commands are encoded as `IyEvYmluL2Jhc2gKbWtkaXIgLXAgL3Zhci9iYi8KdG91Y2ggL3Zhci$` :
         * >
         * > *#!/bin/bash*
         * >
         * > mkdir -p /var/bb/
         * >
         * > touch /var
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-additionalinstanceconfiguration.html#cfn-imagebuilder-imagerecipe-additionalinstanceconfiguration-userdataoverride
         */
        readonly userDataOverride?: string;
    }
    /**
     * Contains settings for the Systems Manager agent on your build instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-systemsmanageragent.html
     */
    interface SystemsManagerAgentProperty {
        /**
         * Controls whether the Systems Manager agent is removed from your final build image, prior to creating the new AMI.
         *
         * If this is set to true, then the agent is removed from the final image. If it's set to false, then the agent is left in, so that it is included in the new AMI. The default value is false.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-systemsmanageragent.html#cfn-imagebuilder-imagerecipe-systemsmanageragent-uninstallafterbuild
         */
        readonly uninstallAfterBuild?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnImageRecipe`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html
 */
export interface CfnImageRecipeProps {
    /**
     * Before you create a new AMI, Image Builder launches temporary Amazon EC2 instances to build and test your image configuration.
     *
     * Instance configuration adds a layer of control over those instances. You can define settings and add scripts to run when an instance is launched from your AMI.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html#cfn-imagebuilder-imagerecipe-additionalinstanceconfiguration
     */
    readonly additionalInstanceConfiguration?: CfnImageRecipe.AdditionalInstanceConfigurationProperty | cdk.IResolvable;
    /**
     * The block device mappings to apply when creating images from this recipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html#cfn-imagebuilder-imagerecipe-blockdevicemappings
     */
    readonly blockDeviceMappings?: Array<CfnImageRecipe.InstanceBlockDeviceMappingProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The components of the image recipe.
     *
     * Components are orchestration documents that define a sequence of steps for downloading, installing, configuring, and testing software packages. They also define validation and security hardening steps. A component is defined using a YAML document format.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html#cfn-imagebuilder-imagerecipe-components
     */
    readonly components: Array<CfnImageRecipe.ComponentConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the image recipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html#cfn-imagebuilder-imagerecipe-description
     */
    readonly description?: string;
    /**
     * The name of the image recipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html#cfn-imagebuilder-imagerecipe-name
     */
    readonly name: string;
    /**
     * The parent image of the image recipe.
     *
     * The string must be either an Image ARN or an AMI ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html#cfn-imagebuilder-imagerecipe-parentimage
     */
    readonly parentImage: string;
    /**
     * The tags of the image recipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html#cfn-imagebuilder-imagerecipe-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The semantic version of the image recipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html#cfn-imagebuilder-imagerecipe-version
     */
    readonly version: string;
    /**
     * The working directory to be used during build and test workflows.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html#cfn-imagebuilder-imagerecipe-workingdirectory
     */
    readonly workingDirectory?: string;
}
/**
 * Creates a new infrastructure configuration.
 *
 * An infrastructure configuration defines the environment in which your image will be built and tested.
 *
 * @cloudformationResource AWS::ImageBuilder::InfrastructureConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html
 */
export declare class CfnInfrastructureConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInfrastructureConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInfrastructureConfiguration;
    /**
     * Returns the Amazon Resource Name (ARN) of the infrastructure configuration. The following pattern is applied: `^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the infrastructure configuration.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The description of the infrastructure configuration.
     */
    description?: string;
    /**
     * The instance metadata options that you can set for the HTTP requests that pipeline builds use to launch EC2 build and test instances.
     */
    instanceMetadataOptions?: CfnInfrastructureConfiguration.InstanceMetadataOptionsProperty | cdk.IResolvable;
    /**
     * The instance profile to associate with the instance used to customize your Amazon EC2 AMI.
     */
    instanceProfileName: string;
    /**
     * The instance types of the infrastructure configuration.
     */
    instanceTypes?: Array<string>;
    /**
     * The key pair of the infrastructure configuration.
     */
    keyPair?: string;
    /**
     * The logging configuration of the infrastructure configuration.
     */
    logging?: cdk.IResolvable | CfnInfrastructureConfiguration.LoggingProperty;
    /**
     * The name of the infrastructure configuration.
     */
    name: string;
    /**
     * The instance placement settings that define where the instances that are launched from your image will run.
     */
    placement?: cdk.IResolvable | CfnInfrastructureConfiguration.PlacementProperty;
    /**
     * The metadata tags to assign to the Amazon EC2 instance that Image Builder launches during the build process.
     */
    resourceTags?: cdk.IResolvable | Record<string, string>;
    /**
     * The security group IDs to associate with the instance used to customize your Amazon EC2 AMI.
     */
    securityGroupIds?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.
     */
    snsTopicArn?: string;
    /**
     * The subnet ID in which to place the instance used to customize your Amazon EC2 AMI.
     */
    subnetId?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The metadata tags to assign to the infrastructure configuration resource that Image Builder creates as output.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The terminate instance on failure setting of the infrastructure configuration.
     */
    terminateInstanceOnFailure?: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnInfrastructureConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInfrastructureConfiguration {
    /**
     * Logging configuration defines where Image Builder uploads your logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-logging.html
     */
    interface LoggingProperty {
        /**
         * The Amazon S3 logging configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-logging.html#cfn-imagebuilder-infrastructureconfiguration-logging-s3logs
         */
        readonly s3Logs?: cdk.IResolvable | CfnInfrastructureConfiguration.S3LogsProperty;
    }
    /**
     * Amazon S3 logging configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-s3logs.html
     */
    interface S3LogsProperty {
        /**
         * The S3 bucket in which to store the logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-s3logs.html#cfn-imagebuilder-infrastructureconfiguration-s3logs-s3bucketname
         */
        readonly s3BucketName?: string;
        /**
         * The Amazon S3 path to the bucket where the logs are stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-s3logs.html#cfn-imagebuilder-infrastructureconfiguration-s3logs-s3keyprefix
         */
        readonly s3KeyPrefix?: string;
    }
    /**
     * The instance metadata options that apply to the HTTP requests that pipeline builds use to launch EC2 build and test instances.
     *
     * For more information about instance metadata options, see [Configure the instance metadata options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html) in the **Amazon EC2 User Guide** for Linux instances, or [Configure the instance metadata options](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html) in the **Amazon EC2 Windows Guide** for Windows instances.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-instancemetadataoptions.html
     */
    interface InstanceMetadataOptionsProperty {
        /**
         * Limit the number of hops that an instance metadata request can traverse to reach its destination.
         *
         * The default is one hop. However, if HTTP tokens are required, container image builds need a minimum of two hops.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-instancemetadataoptions.html#cfn-imagebuilder-infrastructureconfiguration-instancemetadataoptions-httpputresponsehoplimit
         */
        readonly httpPutResponseHopLimit?: number;
        /**
         * Indicates whether a signed token header is required for instance metadata retrieval requests.
         *
         * The values affect the response as follows:
         *
         * - *required* – When you retrieve the IAM role credentials, version 2.0 credentials are returned in all cases.
         * - *optional* – You can include a signed token header in your request to retrieve instance metadata, or you can leave it out. If you include it, version 2.0 credentials are returned for the IAM role. Otherwise, version 1.0 credentials are returned.
         *
         * The default setting is *optional* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-instancemetadataoptions.html#cfn-imagebuilder-infrastructureconfiguration-instancemetadataoptions-httptokens
         */
        readonly httpTokens?: string;
    }
    /**
     * By default, EC2 instances run on shared tenancy hardware.
     *
     * This means that multiple AWS accounts might share the same physical hardware. When you use dedicated hardware, the physical server that hosts your instances is dedicated to your AWS account . Instance placement settings contain the details for the physical hardware where instances that Image Builder launches during image creation will run.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-placement.html
     */
    interface PlacementProperty {
        /**
         * The Availability Zone where your build and test instances will launch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-placement.html#cfn-imagebuilder-infrastructureconfiguration-placement-availabilityzone
         */
        readonly availabilityZone?: string;
        /**
         * The ID of the Dedicated Host on which build and test instances run.
         *
         * This only applies if `tenancy` is `host` . If you specify the host ID, you must not specify the resource group ARN. If you specify both, Image Builder returns an error.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-placement.html#cfn-imagebuilder-infrastructureconfiguration-placement-hostid
         */
        readonly hostId?: string;
        /**
         * The Amazon Resource Name (ARN) of the host resource group in which to launch build and test instances.
         *
         * This only applies if `tenancy` is `host` . If you specify the resource group ARN, you must not specify the host ID. If you specify both, Image Builder returns an error.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-placement.html#cfn-imagebuilder-infrastructureconfiguration-placement-hostresourcegrouparn
         */
        readonly hostResourceGroupArn?: string;
        /**
         * The tenancy of the instance.
         *
         * An instance with a tenancy of `dedicated` runs on single-tenant hardware. An instance with a tenancy of `host` runs on a Dedicated Host.
         *
         * If tenancy is set to `host` , then you can optionally specify one target for placement – either host ID or host resource group ARN. If automatic placement is enabled for your host, and you don't specify any placement target, Amazon EC2 will try to find an available host for your build and test instances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-placement.html#cfn-imagebuilder-infrastructureconfiguration-placement-tenancy
         */
        readonly tenancy?: string;
    }
}
/**
 * Properties for defining a `CfnInfrastructureConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html
 */
export interface CfnInfrastructureConfigurationProps {
    /**
     * The description of the infrastructure configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html#cfn-imagebuilder-infrastructureconfiguration-description
     */
    readonly description?: string;
    /**
     * The instance metadata options that you can set for the HTTP requests that pipeline builds use to launch EC2 build and test instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html#cfn-imagebuilder-infrastructureconfiguration-instancemetadataoptions
     */
    readonly instanceMetadataOptions?: CfnInfrastructureConfiguration.InstanceMetadataOptionsProperty | cdk.IResolvable;
    /**
     * The instance profile to associate with the instance used to customize your Amazon EC2 AMI.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html#cfn-imagebuilder-infrastructureconfiguration-instanceprofilename
     */
    readonly instanceProfileName: string;
    /**
     * The instance types of the infrastructure configuration.
     *
     * You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html#cfn-imagebuilder-infrastructureconfiguration-instancetypes
     */
    readonly instanceTypes?: Array<string>;
    /**
     * The key pair of the infrastructure configuration.
     *
     * You can use this to log on to and debug the instance used to create your image.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html#cfn-imagebuilder-infrastructureconfiguration-keypair
     */
    readonly keyPair?: string;
    /**
     * The logging configuration of the infrastructure configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html#cfn-imagebuilder-infrastructureconfiguration-logging
     */
    readonly logging?: cdk.IResolvable | CfnInfrastructureConfiguration.LoggingProperty;
    /**
     * The name of the infrastructure configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html#cfn-imagebuilder-infrastructureconfiguration-name
     */
    readonly name: string;
    /**
     * The instance placement settings that define where the instances that are launched from your image will run.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html#cfn-imagebuilder-infrastructureconfiguration-placement
     */
    readonly placement?: cdk.IResolvable | CfnInfrastructureConfiguration.PlacementProperty;
    /**
     * The metadata tags to assign to the Amazon EC2 instance that Image Builder launches during the build process.
     *
     * Tags are formatted as key value pairs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html#cfn-imagebuilder-infrastructureconfiguration-resourcetags
     */
    readonly resourceTags?: cdk.IResolvable | Record<string, string>;
    /**
     * The security group IDs to associate with the instance used to customize your Amazon EC2 AMI.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html#cfn-imagebuilder-infrastructureconfiguration-securitygroupids
     */
    readonly securityGroupIds?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.
     *
     * > EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html#cfn-imagebuilder-infrastructureconfiguration-snstopicarn
     */
    readonly snsTopicArn?: string;
    /**
     * The subnet ID in which to place the instance used to customize your Amazon EC2 AMI.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html#cfn-imagebuilder-infrastructureconfiguration-subnetid
     */
    readonly subnetId?: string;
    /**
     * The metadata tags to assign to the infrastructure configuration resource that Image Builder creates as output.
     *
     * Tags are formatted as key value pairs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html#cfn-imagebuilder-infrastructureconfiguration-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The terminate instance on failure setting of the infrastructure configuration.
     *
     * Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html#cfn-imagebuilder-infrastructureconfiguration-terminateinstanceonfailure
     */
    readonly terminateInstanceOnFailure?: boolean | cdk.IResolvable;
}
/**
 * Create a lifecycle policy resource.
 *
 * @cloudformationResource AWS::ImageBuilder::LifecyclePolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html
 */
export declare class CfnLifecyclePolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLifecyclePolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLifecyclePolicy;
    /**
     * The Amazon Resource Name (ARN) of the lifecycle policy resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Optional description for the lifecycle policy.
     */
    description?: string;
    /**
     * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to run lifecycle actions.
     */
    executionRole: string;
    /**
     * The name of the lifecycle policy to create.
     */
    name: string;
    /**
     * Configuration details for the lifecycle policy rules.
     */
    policyDetails: Array<cdk.IResolvable | CfnLifecyclePolicy.PolicyDetailProperty> | cdk.IResolvable;
    /**
     * Selection criteria for the resources that the lifecycle policy applies to.
     */
    resourceSelection: cdk.IResolvable | CfnLifecyclePolicy.ResourceSelectionProperty;
    /**
     * The type of Image Builder resource that the lifecycle policy applies to.
     */
    resourceType: string;
    /**
     * Indicates whether the lifecycle policy resource is enabled.
     */
    status?: string;
    /**
     * Tags to apply to the lifecycle policy resource.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLifecyclePolicyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLifecyclePolicy {
    /**
     * The configuration details for a lifecycle policy resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-policydetail.html
     */
    interface PolicyDetailProperty {
        /**
         * Configuration details for the policy action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-policydetail.html#cfn-imagebuilder-lifecyclepolicy-policydetail-action
         */
        readonly action: CfnLifecyclePolicy.ActionProperty | cdk.IResolvable;
        /**
         * Additional rules to specify resources that should be exempt from policy actions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-policydetail.html#cfn-imagebuilder-lifecyclepolicy-policydetail-exclusionrules
         */
        readonly exclusionRules?: CfnLifecyclePolicy.ExclusionRulesProperty | cdk.IResolvable;
        /**
         * Specifies the resources that the lifecycle policy applies to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-policydetail.html#cfn-imagebuilder-lifecyclepolicy-policydetail-filter
         */
        readonly filter: CfnLifecyclePolicy.FilterProperty | cdk.IResolvable;
    }
    /**
     * Contains selection criteria for the lifecycle policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-action.html
     */
    interface ActionProperty {
        /**
         * Specifies the resources that the lifecycle policy applies to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-action.html#cfn-imagebuilder-lifecyclepolicy-action-includeresources
         */
        readonly includeResources?: CfnLifecyclePolicy.IncludeResourcesProperty | cdk.IResolvable;
        /**
         * Specifies the lifecycle action to take.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-action.html#cfn-imagebuilder-lifecyclepolicy-action-type
         */
        readonly type: string;
    }
    /**
     * Specifies how the lifecycle policy should apply actions to selected resources.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-includeresources.html
     */
    interface IncludeResourcesProperty {
        /**
         * Specifies whether the lifecycle action should apply to distributed AMIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-includeresources.html#cfn-imagebuilder-lifecyclepolicy-includeresources-amis
         */
        readonly amis?: boolean | cdk.IResolvable;
        /**
         * Specifies whether the lifecycle action should apply to distributed containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-includeresources.html#cfn-imagebuilder-lifecyclepolicy-includeresources-containers
         */
        readonly containers?: boolean | cdk.IResolvable;
        /**
         * Specifies whether the lifecycle action should apply to snapshots associated with distributed AMIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-includeresources.html#cfn-imagebuilder-lifecyclepolicy-includeresources-snapshots
         */
        readonly snapshots?: boolean | cdk.IResolvable;
    }
    /**
     * Defines filters that the lifecycle policy uses to determine impacted resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-filter.html
     */
    interface FilterProperty {
        /**
         * For age-based filters, this is the number of resources to keep on hand after the lifecycle `DELETE` action is applied.
         *
         * Impacted resources are only deleted if you have more than this number of resources. If you have fewer resources than this number, the impacted resource is not deleted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-filter.html#cfn-imagebuilder-lifecyclepolicy-filter-retainatleast
         */
        readonly retainAtLeast?: number;
        /**
         * Filter resources based on either `age` or `count` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-filter.html#cfn-imagebuilder-lifecyclepolicy-filter-type
         */
        readonly type: string;
        /**
         * Defines the unit of time that the lifecycle policy uses to determine impacted resources.
         *
         * This is required for age-based rules.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-filter.html#cfn-imagebuilder-lifecyclepolicy-filter-unit
         */
        readonly unit?: string;
        /**
         * The number of units for the time period or for the count.
         *
         * For example, a value of `6` might refer to six months or six AMIs.
         *
         * > For count-based filters, this value represents the minimum number of resources to keep on hand. If you have fewer resources than this number, the resource is excluded from lifecycle actions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-filter.html#cfn-imagebuilder-lifecyclepolicy-filter-value
         */
        readonly value: number;
    }
    /**
     * Specifies resources that lifecycle policy actions should not apply to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-exclusionrules.html
     */
    interface ExclusionRulesProperty {
        /**
         * Lists configuration values that apply to AMIs that Image Builder should exclude from the lifecycle action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-exclusionrules.html#cfn-imagebuilder-lifecyclepolicy-exclusionrules-amis
         */
        readonly amis?: CfnLifecyclePolicy.AmiExclusionRulesProperty | cdk.IResolvable;
        /**
         * Contains a list of tags that Image Builder uses to skip lifecycle actions for Image Builder image resources that have them.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-exclusionrules.html#cfn-imagebuilder-lifecyclepolicy-exclusionrules-tagmap
         */
        readonly tagMap?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * Defines criteria for AMIs that are excluded from lifecycle actions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-amiexclusionrules.html
     */
    interface AmiExclusionRulesProperty {
        /**
         * Configures whether public AMIs are excluded from the lifecycle action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-amiexclusionrules.html#cfn-imagebuilder-lifecyclepolicy-amiexclusionrules-ispublic
         */
        readonly isPublic?: boolean | cdk.IResolvable;
        /**
         * Specifies configuration details for Image Builder to exclude the most recent resources from lifecycle actions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-amiexclusionrules.html#cfn-imagebuilder-lifecyclepolicy-amiexclusionrules-lastlaunched
         */
        readonly lastLaunched?: cdk.IResolvable | CfnLifecyclePolicy.LastLaunchedProperty;
        /**
         * Configures AWS Region s that are excluded from the lifecycle action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-amiexclusionrules.html#cfn-imagebuilder-lifecyclepolicy-amiexclusionrules-regions
         */
        readonly regions?: Array<string>;
        /**
         * Specifies AWS account s whose resources are excluded from the lifecycle action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-amiexclusionrules.html#cfn-imagebuilder-lifecyclepolicy-amiexclusionrules-sharedaccounts
         */
        readonly sharedAccounts?: Array<string>;
        /**
         * Lists tags that should be excluded from lifecycle actions for the AMIs that have them.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-amiexclusionrules.html#cfn-imagebuilder-lifecyclepolicy-amiexclusionrules-tagmap
         */
        readonly tagMap?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * Defines criteria to exclude AMIs from lifecycle actions based on the last time they were used to launch an instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-lastlaunched.html
     */
    interface LastLaunchedProperty {
        /**
         * Defines the unit of time that the lifecycle policy uses to calculate elapsed time since the last instance launched from the AMI.
         *
         * For example: days, weeks, months, or years.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-lastlaunched.html#cfn-imagebuilder-lifecyclepolicy-lastlaunched-unit
         */
        readonly unit: string;
        /**
         * The integer number of units for the time period.
         *
         * For example `6` (months).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-lastlaunched.html#cfn-imagebuilder-lifecyclepolicy-lastlaunched-value
         */
        readonly value: number;
    }
    /**
     * Resource selection criteria for the lifecycle policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-resourceselection.html
     */
    interface ResourceSelectionProperty {
        /**
         * A list of recipes that are used as selection criteria for the output images that the lifecycle policy applies to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-resourceselection.html#cfn-imagebuilder-lifecyclepolicy-resourceselection-recipes
         */
        readonly recipes?: Array<cdk.IResolvable | CfnLifecyclePolicy.RecipeSelectionProperty> | cdk.IResolvable;
        /**
         * A list of tags that are used as selection criteria for the Image Builder image resources that the lifecycle policy applies to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-resourceselection.html#cfn-imagebuilder-lifecyclepolicy-resourceselection-tagmap
         */
        readonly tagMap?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * Specifies an Image Builder recipe that the lifecycle policy uses for resource selection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-recipeselection.html
     */
    interface RecipeSelectionProperty {
        /**
         * The name of an Image Builder recipe that the lifecycle policy uses for resource selection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-recipeselection.html#cfn-imagebuilder-lifecyclepolicy-recipeselection-name
         */
        readonly name: string;
        /**
         * The version of the Image Builder recipe specified by the `name` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-recipeselection.html#cfn-imagebuilder-lifecyclepolicy-recipeselection-semanticversion
         */
        readonly semanticVersion: string;
    }
}
/**
 * Properties for defining a `CfnLifecyclePolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html
 */
export interface CfnLifecyclePolicyProps {
    /**
     * Optional description for the lifecycle policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-description
     */
    readonly description?: string;
    /**
     * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to run lifecycle actions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-executionrole
     */
    readonly executionRole: string;
    /**
     * The name of the lifecycle policy to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-name
     */
    readonly name: string;
    /**
     * Configuration details for the lifecycle policy rules.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-policydetails
     */
    readonly policyDetails: Array<cdk.IResolvable | CfnLifecyclePolicy.PolicyDetailProperty> | cdk.IResolvable;
    /**
     * Selection criteria for the resources that the lifecycle policy applies to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-resourceselection
     */
    readonly resourceSelection: cdk.IResolvable | CfnLifecyclePolicy.ResourceSelectionProperty;
    /**
     * The type of Image Builder resource that the lifecycle policy applies to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-resourcetype
     */
    readonly resourceType: string;
    /**
     * Indicates whether the lifecycle policy resource is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-status
     */
    readonly status?: string;
    /**
     * Tags to apply to the lifecycle policy resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Create a new workflow or a new version of an existing workflow.
 *
 * @cloudformationResource AWS::ImageBuilder::Workflow
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html
 */
export declare class CfnWorkflow extends cdk.CfnResource implements cdk.IInspectable {
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
     * The Amazon Resource Name (ARN) of the workflow resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Describes what change has been made in this version of the workflow, or what makes this version different from other versions of the workflow.
     */
    changeDescription?: string;
    /**
     * Contains the UTF-8 encoded YAML document content for the workflow.
     */
    data?: string;
    /**
     * Describes the workflow.
     */
    description?: string;
    /**
     * The ID of the KMS key that is used to encrypt this workflow resource.
     */
    kmsKeyId?: string;
    /**
     * The name of the workflow to create.
     */
    name: string;
    /**
     * Tags that apply to the workflow resource.
     */
    tags?: Record<string, string>;
    /**
     * The phase in the image build process for which the workflow resource is responsible.
     */
    type: string;
    /**
     * The `uri` of a YAML component document file.
     */
    uri?: string;
    /**
     * The semantic version of this workflow resource. The semantic version syntax adheres to the following rules.
     */
    version: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWorkflowProps);
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
 * Properties for defining a `CfnWorkflow`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html
 */
export interface CfnWorkflowProps {
    /**
     * Describes what change has been made in this version of the workflow, or what makes this version different from other versions of the workflow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-changedescription
     */
    readonly changeDescription?: string;
    /**
     * Contains the UTF-8 encoded YAML document content for the workflow.
     *
     * Alternatively, you can specify the `uri` of a YAML document file stored in Amazon S3. However, you cannot specify both properties.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-data
     */
    readonly data?: string;
    /**
     * Describes the workflow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-description
     */
    readonly description?: string;
    /**
     * The ID of the KMS key that is used to encrypt this workflow resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The name of the workflow to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-name
     */
    readonly name: string;
    /**
     * Tags that apply to the workflow resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The phase in the image build process for which the workflow resource is responsible.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-type
     */
    readonly type: string;
    /**
     * The `uri` of a YAML component document file.
     *
     * This must be an S3 URL ( `s3://bucket/key` ), and the requester must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota.
     *
     * Alternatively, you can specify the YAML document inline, using the component `data` property. You cannot specify both properties.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-uri
     */
    readonly uri?: string;
    /**
     * The semantic version of this workflow resource. The semantic version syntax adheres to the following rules.
     *
     * > The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.
     * >
     * > *Assignment:* For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.
     * >
     * > *Patterns:* You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-version
     */
    readonly version: string;
}
