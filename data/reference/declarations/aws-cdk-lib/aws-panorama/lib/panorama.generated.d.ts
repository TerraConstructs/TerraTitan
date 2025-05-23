import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates an application instance and deploys it to a device.
 *
 * @cloudformationResource AWS::Panorama::ApplicationInstance
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html
 */
export declare class CfnApplicationInstance extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplicationInstance from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplicationInstance;
    /**
     * The application instance's ID.
     *
     * @cloudformationAttribute ApplicationInstanceId
     */
    readonly attrApplicationInstanceId: string;
    /**
     * The application instance's ARN.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The application instance's created time.
     *
     * @cloudformationAttribute CreatedTime
     */
    readonly attrCreatedTime: number;
    /**
     * The application instance's default runtime context device name.
     *
     * @cloudformationAttribute DefaultRuntimeContextDeviceName
     */
    readonly attrDefaultRuntimeContextDeviceName: string;
    /**
     * The application instance's health status.
     *
     * @cloudformationAttribute HealthStatus
     */
    readonly attrHealthStatus: string;
    /**
     * The application instance's last updated time.
     *
     * @cloudformationAttribute LastUpdatedTime
     */
    readonly attrLastUpdatedTime: number;
    /**
     * The application instance's status.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The application instance's status description.
     *
     * @cloudformationAttribute StatusDescription
     */
    readonly attrStatusDescription: string;
    /**
     * The ID of an application instance to replace with the new instance.
     */
    applicationInstanceIdToReplace?: string;
    /**
     * The device's ID.
     */
    defaultRuntimeContextDevice: string;
    /**
     * A description for the application instance.
     */
    description?: string;
    /**
     * Setting overrides for the application manifest.
     */
    manifestOverridesPayload?: cdk.IResolvable | CfnApplicationInstance.ManifestOverridesPayloadProperty;
    /**
     * The application's manifest document.
     */
    manifestPayload: cdk.IResolvable | CfnApplicationInstance.ManifestPayloadProperty;
    /**
     * A name for the application instance.
     */
    name?: string;
    /**
     * The ARN of a runtime role for the application instance.
     */
    runtimeRoleArn?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags for the application instance.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationInstanceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApplicationInstance {
    /**
     * Parameter overrides for an application instance.
     *
     * This is a JSON document that has a single key ( `PayloadData` ) where the value is an escaped string representation of the overrides document.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-manifestoverridespayload.html
     */
    interface ManifestOverridesPayloadProperty {
        /**
         * The overrides document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-manifestoverridespayload.html#cfn-panorama-applicationinstance-manifestoverridespayload-payloaddata
         */
        readonly payloadData?: string;
    }
    /**
     * A application verion's manifest file.
     *
     * This is a JSON document that has a single key ( `PayloadData` ) where the value is an escaped string representation of the application manifest ( `graph.json` ). This file is located in the `graphs` folder in your application source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-manifestpayload.html
     */
    interface ManifestPayloadProperty {
        /**
         * The application manifest.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-manifestpayload.html#cfn-panorama-applicationinstance-manifestpayload-payloaddata
         */
        readonly payloadData?: string;
    }
}
/**
 * Properties for defining a `CfnApplicationInstance`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html
 */
export interface CfnApplicationInstanceProps {
    /**
     * The ID of an application instance to replace with the new instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html#cfn-panorama-applicationinstance-applicationinstanceidtoreplace
     */
    readonly applicationInstanceIdToReplace?: string;
    /**
     * The device's ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html#cfn-panorama-applicationinstance-defaultruntimecontextdevice
     */
    readonly defaultRuntimeContextDevice: string;
    /**
     * A description for the application instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html#cfn-panorama-applicationinstance-description
     */
    readonly description?: string;
    /**
     * Setting overrides for the application manifest.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html#cfn-panorama-applicationinstance-manifestoverridespayload
     */
    readonly manifestOverridesPayload?: cdk.IResolvable | CfnApplicationInstance.ManifestOverridesPayloadProperty;
    /**
     * The application's manifest document.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html#cfn-panorama-applicationinstance-manifestpayload
     */
    readonly manifestPayload: cdk.IResolvable | CfnApplicationInstance.ManifestPayloadProperty;
    /**
     * A name for the application instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html#cfn-panorama-applicationinstance-name
     */
    readonly name?: string;
    /**
     * The ARN of a runtime role for the application instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html#cfn-panorama-applicationinstance-runtimerolearn
     */
    readonly runtimeRoleArn?: string;
    /**
     * Tags for the application instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html#cfn-panorama-applicationinstance-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a package and storage location in an Amazon S3 access point.
 *
 * @cloudformationResource AWS::Panorama::Package
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-package.html
 */
export declare class CfnPackage extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPackage from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPackage;
    /**
     * The package's ARN.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * When the package was created.
     *
     * @cloudformationAttribute CreatedTime
     */
    readonly attrCreatedTime: number;
    /**
     * The package's ID.
     *
     * @cloudformationAttribute PackageId
     */
    readonly attrPackageId: string;
    /**
     * The location's binary prefix.
     *
     * @cloudformationAttribute StorageLocation.BinaryPrefixLocation
     */
    readonly attrStorageLocationBinaryPrefixLocation: string;
    /**
     * The location's bucket.
     *
     * @cloudformationAttribute StorageLocation.Bucket
     */
    readonly attrStorageLocationBucket: string;
    /**
     * The location's generated prefix.
     *
     * @cloudformationAttribute StorageLocation.GeneratedPrefixLocation
     */
    readonly attrStorageLocationGeneratedPrefixLocation: string;
    /**
     * The location's manifest prefix.
     *
     * @cloudformationAttribute StorageLocation.ManifestPrefixLocation
     */
    readonly attrStorageLocationManifestPrefixLocation: string;
    /**
     * The location's repo prefix.
     *
     * @cloudformationAttribute StorageLocation.RepoPrefixLocation
     */
    readonly attrStorageLocationRepoPrefixLocation: string;
    /**
     * A name for the package.
     */
    packageName: string;
    /**
     * A storage location.
     */
    storageLocation?: cdk.IResolvable | CfnPackage.StorageLocationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags for the package.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPackageProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPackage {
    /**
     * A storage location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-package-storagelocation.html
     */
    interface StorageLocationProperty {
        /**
         * The location's binary prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-package-storagelocation.html#cfn-panorama-package-storagelocation-binaryprefixlocation
         */
        readonly binaryPrefixLocation?: string;
        /**
         * The location's bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-package-storagelocation.html#cfn-panorama-package-storagelocation-bucket
         */
        readonly bucket?: string;
        /**
         * The location's generated prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-package-storagelocation.html#cfn-panorama-package-storagelocation-generatedprefixlocation
         */
        readonly generatedPrefixLocation?: string;
        /**
         * The location's manifest prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-package-storagelocation.html#cfn-panorama-package-storagelocation-manifestprefixlocation
         */
        readonly manifestPrefixLocation?: string;
        /**
         * The location's repo prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-package-storagelocation.html#cfn-panorama-package-storagelocation-repoprefixlocation
         */
        readonly repoPrefixLocation?: string;
    }
}
/**
 * Properties for defining a `CfnPackage`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-package.html
 */
export interface CfnPackageProps {
    /**
     * A name for the package.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-package.html#cfn-panorama-package-packagename
     */
    readonly packageName: string;
    /**
     * A storage location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-package.html#cfn-panorama-package-storagelocation
     */
    readonly storageLocation?: cdk.IResolvable | CfnPackage.StorageLocationProperty;
    /**
     * Tags for the package.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-package.html#cfn-panorama-package-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Registers a package version.
 *
 * @cloudformationResource AWS::Panorama::PackageVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html
 */
export declare class CfnPackageVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPackageVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPackageVersion;
    /**
     * Whether the package version is the latest version.
     *
     * @cloudformationAttribute IsLatestPatch
     */
    readonly attrIsLatestPatch: cdk.IResolvable;
    /**
     * The package version's ARN.
     *
     * @cloudformationAttribute PackageArn
     */
    readonly attrPackageArn: string;
    /**
     * The package version's name.
     *
     * @cloudformationAttribute PackageName
     */
    readonly attrPackageName: string;
    /**
     * The package version's registered time.
     *
     * @cloudformationAttribute RegisteredTime
     */
    readonly attrRegisteredTime: number;
    /**
     * The package version's status.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The package version's status description.
     *
     * @cloudformationAttribute StatusDescription
     */
    readonly attrStatusDescription: string;
    /**
     * Whether to mark the new version as the latest version.
     */
    markLatest?: boolean | cdk.IResolvable;
    /**
     * An owner account.
     */
    ownerAccount?: string;
    /**
     * A package ID.
     */
    packageId: string;
    /**
     * A package version.
     */
    packageVersion: string;
    /**
     * A patch version.
     */
    patchVersion: string;
    /**
     * If the version was marked latest, the new version to maker as latest.
     */
    updatedLatestPatchVersion?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPackageVersionProps);
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
 * Properties for defining a `CfnPackageVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html
 */
export interface CfnPackageVersionProps {
    /**
     * Whether to mark the new version as the latest version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html#cfn-panorama-packageversion-marklatest
     */
    readonly markLatest?: boolean | cdk.IResolvable;
    /**
     * An owner account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html#cfn-panorama-packageversion-owneraccount
     */
    readonly ownerAccount?: string;
    /**
     * A package ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html#cfn-panorama-packageversion-packageid
     */
    readonly packageId: string;
    /**
     * A package version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html#cfn-panorama-packageversion-packageversion
     */
    readonly packageVersion: string;
    /**
     * A patch version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html#cfn-panorama-packageversion-patchversion
     */
    readonly patchVersion: string;
    /**
     * If the version was marked latest, the new version to maker as latest.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html#cfn-panorama-packageversion-updatedlatestpatchversion
     */
    readonly updatedLatestPatchVersion?: string;
}
