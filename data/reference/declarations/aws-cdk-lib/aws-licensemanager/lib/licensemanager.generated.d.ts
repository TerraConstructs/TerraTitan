import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specifies a grant.
 *
 * A grant shares the use of license entitlements with specific AWS accounts . For more information, see [Granted licenses](https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html) in the *AWS License Manager User Guide* .
 *
 * @cloudformationResource AWS::LicenseManager::Grant
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html
 */
export declare class CfnGrant extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGrant from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGrant;
    /**
     * The Amazon Resource Name (ARN) of the grant.
     *
     * @cloudformationAttribute GrantArn
     */
    readonly attrGrantArn: string;
    /**
     * The grant version.
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: string;
    /**
     * Allowed operations for the grant.
     */
    allowedOperations?: Array<string>;
    /**
     * Grant name.
     */
    grantName?: string;
    /**
     * Home Region of the grant.
     */
    homeRegion?: string;
    /**
     * License ARN.
     */
    licenseArn?: string;
    /**
     * The grant principals. You can specify one of the following as an Amazon Resource Name (ARN):.
     */
    principals?: Array<string>;
    /**
     * Granted license status.
     */
    status?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnGrantProps);
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
 * Properties for defining a `CfnGrant`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html
 */
export interface CfnGrantProps {
    /**
     * Allowed operations for the grant.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-allowedoperations
     */
    readonly allowedOperations?: Array<string>;
    /**
     * Grant name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-grantname
     */
    readonly grantName?: string;
    /**
     * Home Region of the grant.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-homeregion
     */
    readonly homeRegion?: string;
    /**
     * License ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-licensearn
     */
    readonly licenseArn?: string;
    /**
     * The grant principals. You can specify one of the following as an Amazon Resource Name (ARN):.
     *
     * - An AWS account, which includes only the account specified.
     *
     * - An organizational unit (OU), which includes all accounts in the OU.
     *
     * - An organization, which will include all accounts across your organization.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-principals
     */
    readonly principals?: Array<string>;
    /**
     * Granted license status.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-status
     */
    readonly status?: string;
}
/**
 * Specifies a granted license.
 *
 * Granted licenses are licenses for products that your organization purchased from AWS Marketplace or directly from a seller who integrated their software with managed entitlements. For more information, see [Granted licenses](https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html) in the *AWS License Manager User Guide* .
 *
 * @cloudformationResource AWS::LicenseManager::License
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html
 */
export declare class CfnLicense extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLicense from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLicense;
    /**
     * The Amazon Resource Name (ARN) of the license.
     *
     * @cloudformationAttribute LicenseArn
     */
    readonly attrLicenseArn: string;
    /**
     * The license version.
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: string;
    /**
     * License beneficiary.
     */
    beneficiary?: string;
    /**
     * Configuration for consumption of the license.
     */
    consumptionConfiguration: CfnLicense.ConsumptionConfigurationProperty | cdk.IResolvable;
    /**
     * License entitlements.
     */
    entitlements: Array<CfnLicense.EntitlementProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Home Region of the license.
     */
    homeRegion: string;
    /**
     * License issuer.
     */
    issuer: cdk.IResolvable | CfnLicense.IssuerDataProperty;
    /**
     * License metadata.
     */
    licenseMetadata?: Array<cdk.IResolvable | CfnLicense.MetadataProperty> | cdk.IResolvable;
    /**
     * License name.
     */
    licenseName: string;
    /**
     * Product name.
     */
    productName: string;
    /**
     * Product SKU.
     */
    productSku?: string;
    /**
     * License status.
     */
    status?: string;
    /**
     * Date and time range during which the license is valid, in ISO8601-UTC format.
     */
    validity: cdk.IResolvable | CfnLicense.ValidityDateFormatProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLicenseProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLicense {
    /**
     * Details about a consumption configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-consumptionconfiguration.html
     */
    interface ConsumptionConfigurationProperty {
        /**
         * Details about a borrow configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-consumptionconfiguration.html#cfn-licensemanager-license-consumptionconfiguration-borrowconfiguration
         */
        readonly borrowConfiguration?: CfnLicense.BorrowConfigurationProperty | cdk.IResolvable;
        /**
         * Details about a provisional configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-consumptionconfiguration.html#cfn-licensemanager-license-consumptionconfiguration-provisionalconfiguration
         */
        readonly provisionalConfiguration?: cdk.IResolvable | CfnLicense.ProvisionalConfigurationProperty;
        /**
         * Renewal frequency.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-consumptionconfiguration.html#cfn-licensemanager-license-consumptionconfiguration-renewtype
         */
        readonly renewType?: string;
    }
    /**
     * Details about a borrow configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-borrowconfiguration.html
     */
    interface BorrowConfigurationProperty {
        /**
         * Indicates whether early check-ins are allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-borrowconfiguration.html#cfn-licensemanager-license-borrowconfiguration-allowearlycheckin
         */
        readonly allowEarlyCheckIn: boolean | cdk.IResolvable;
        /**
         * Maximum time for the borrow configuration, in minutes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-borrowconfiguration.html#cfn-licensemanager-license-borrowconfiguration-maxtimetoliveinminutes
         */
        readonly maxTimeToLiveInMinutes: number;
    }
    /**
     * Details about a provisional configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-provisionalconfiguration.html
     */
    interface ProvisionalConfigurationProperty {
        /**
         * Maximum time for the provisional configuration, in minutes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-provisionalconfiguration.html#cfn-licensemanager-license-provisionalconfiguration-maxtimetoliveinminutes
         */
        readonly maxTimeToLiveInMinutes: number;
    }
    /**
     * Date and time range during which the license is valid, in ISO8601-UTC format.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-validitydateformat.html
     */
    interface ValidityDateFormatProperty {
        /**
         * Start of the time range.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-validitydateformat.html#cfn-licensemanager-license-validitydateformat-begin
         */
        readonly begin: string;
        /**
         * End of the time range.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-validitydateformat.html#cfn-licensemanager-license-validitydateformat-end
         */
        readonly end: string;
    }
    /**
     * Details associated with the issuer of a license.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-issuerdata.html
     */
    interface IssuerDataProperty {
        /**
         * Issuer name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-issuerdata.html#cfn-licensemanager-license-issuerdata-name
         */
        readonly name: string;
        /**
         * Asymmetric KMS key from AWS Key Management Service .
         *
         * The KMS key must have a key usage of sign and verify, and support the RSASSA-PSS SHA-256 signing algorithm.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-issuerdata.html#cfn-licensemanager-license-issuerdata-signkey
         */
        readonly signKey?: string;
    }
    /**
     * Describes a resource entitled for use with a license.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-entitlement.html
     */
    interface EntitlementProperty {
        /**
         * Indicates whether check-ins are allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-entitlement.html#cfn-licensemanager-license-entitlement-allowcheckin
         */
        readonly allowCheckIn?: boolean | cdk.IResolvable;
        /**
         * Maximum entitlement count.
         *
         * Use if the unit is not None.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-entitlement.html#cfn-licensemanager-license-entitlement-maxcount
         */
        readonly maxCount?: number;
        /**
         * Entitlement name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-entitlement.html#cfn-licensemanager-license-entitlement-name
         */
        readonly name: string;
        /**
         * Indicates whether overages are allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-entitlement.html#cfn-licensemanager-license-entitlement-overage
         */
        readonly overage?: boolean | cdk.IResolvable;
        /**
         * Entitlement unit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-entitlement.html#cfn-licensemanager-license-entitlement-unit
         */
        readonly unit: string;
        /**
         * Entitlement resource.
         *
         * Use only if the unit is None.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-entitlement.html#cfn-licensemanager-license-entitlement-value
         */
        readonly value?: string;
    }
    /**
     * Describes key/value pairs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-metadata.html
     */
    interface MetadataProperty {
        /**
         * The key name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-metadata.html#cfn-licensemanager-license-metadata-name
         */
        readonly name: string;
        /**
         * The value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-metadata.html#cfn-licensemanager-license-metadata-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnLicense`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html
 */
export interface CfnLicenseProps {
    /**
     * License beneficiary.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html#cfn-licensemanager-license-beneficiary
     */
    readonly beneficiary?: string;
    /**
     * Configuration for consumption of the license.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html#cfn-licensemanager-license-consumptionconfiguration
     */
    readonly consumptionConfiguration: CfnLicense.ConsumptionConfigurationProperty | cdk.IResolvable;
    /**
     * License entitlements.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html#cfn-licensemanager-license-entitlements
     */
    readonly entitlements: Array<CfnLicense.EntitlementProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Home Region of the license.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html#cfn-licensemanager-license-homeregion
     */
    readonly homeRegion: string;
    /**
     * License issuer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html#cfn-licensemanager-license-issuer
     */
    readonly issuer: cdk.IResolvable | CfnLicense.IssuerDataProperty;
    /**
     * License metadata.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html#cfn-licensemanager-license-licensemetadata
     */
    readonly licenseMetadata?: Array<cdk.IResolvable | CfnLicense.MetadataProperty> | cdk.IResolvable;
    /**
     * License name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html#cfn-licensemanager-license-licensename
     */
    readonly licenseName: string;
    /**
     * Product name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html#cfn-licensemanager-license-productname
     */
    readonly productName: string;
    /**
     * Product SKU.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html#cfn-licensemanager-license-productsku
     */
    readonly productSku?: string;
    /**
     * License status.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html#cfn-licensemanager-license-status
     */
    readonly status?: string;
    /**
     * Date and time range during which the license is valid, in ISO8601-UTC format.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html#cfn-licensemanager-license-validity
     */
    readonly validity: cdk.IResolvable | CfnLicense.ValidityDateFormatProperty;
}
