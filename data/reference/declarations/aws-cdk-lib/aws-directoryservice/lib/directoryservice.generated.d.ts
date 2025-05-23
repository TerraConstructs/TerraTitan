import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::DirectoryService::MicrosoftAD` resource specifies a Microsoft Active Directory in AWS so that your directory users and groups can access the AWS Management Console and AWS applications using their existing credentials.
 *
 * For more information, see [AWS Managed Microsoft AD](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html) in the *AWS Directory Service Admin Guide* .
 *
 * @cloudformationResource AWS::DirectoryService::MicrosoftAD
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html
 */
export declare class CfnMicrosoftAD extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMicrosoftAD from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMicrosoftAD;
    /**
     * The alias for a directory. For example: `alias4-mydirectory-12345abcgmzsk` (if you have the `CreateAlias` property set to true).
     *
     * @cloudformationAttribute Alias
     */
    readonly attrAlias: string;
    /**
     * The IP addresses of the DNS servers for the directory, such as `[ "192.0.2.1", "192.0.2.2" ]` .
     *
     * @cloudformationAttribute DnsIpAddresses
     */
    readonly attrDnsIpAddresses: Array<string>;
    /**
     * The directory ID. For example: `d-12373a053a` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Specifies an alias for a directory and assigns the alias to the directory.
     */
    createAlias?: boolean | cdk.IResolvable;
    /**
     * AWS Managed Microsoft AD is available in two editions: `Standard` and `Enterprise` .
     */
    edition?: string;
    /**
     * Whether to enable single sign-on for a Microsoft Active Directory in AWS .
     */
    enableSso?: boolean | cdk.IResolvable;
    /**
     * The fully qualified domain name for the AWS Managed Microsoft AD directory, such as `corp.example.com` . This name will resolve inside your VPC only. It does not need to be publicly resolvable.
     */
    name: string;
    /**
     * The password for the default administrative user named `Admin` .
     */
    password: string;
    /**
     * The NetBIOS name for your domain, such as `CORP` .
     */
    shortName?: string;
    /**
     * Specifies the VPC settings of the Microsoft AD directory server in AWS .
     */
    vpcSettings: cdk.IResolvable | CfnMicrosoftAD.VpcSettingsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMicrosoftADProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMicrosoftAD {
    /**
     * Contains VPC information for the [CreateDirectory](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateDirectory.html) or [CreateMicrosoftAD](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateMicrosoftAD.html) operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directoryservice-microsoftad-vpcsettings.html
     */
    interface VpcSettingsProperty {
        /**
         * The identifiers of the subnets for the directory servers.
         *
         * The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directoryservice-microsoftad-vpcsettings.html#cfn-directoryservice-microsoftad-vpcsettings-subnetids
         */
        readonly subnetIds: Array<string>;
        /**
         * The identifier of the VPC in which to create the directory.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directoryservice-microsoftad-vpcsettings.html#cfn-directoryservice-microsoftad-vpcsettings-vpcid
         */
        readonly vpcId: string;
    }
}
/**
 * Properties for defining a `CfnMicrosoftAD`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html
 */
export interface CfnMicrosoftADProps {
    /**
     * Specifies an alias for a directory and assigns the alias to the directory.
     *
     * The alias is used to construct the access URL for the directory, such as `http://<alias>.awsapps.com` . By default, AWS CloudFormation does not create an alias.
     *
     * > After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-createalias
     */
    readonly createAlias?: boolean | cdk.IResolvable;
    /**
     * AWS Managed Microsoft AD is available in two editions: `Standard` and `Enterprise` .
     *
     * `Enterprise` is the default.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-edition
     */
    readonly edition?: string;
    /**
     * Whether to enable single sign-on for a Microsoft Active Directory in AWS .
     *
     * Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately. If you don't specify a value, AWS CloudFormation disables single sign-on by default.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-enablesso
     */
    readonly enableSso?: boolean | cdk.IResolvable;
    /**
     * The fully qualified domain name for the AWS Managed Microsoft AD directory, such as `corp.example.com` . This name will resolve inside your VPC only. It does not need to be publicly resolvable.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-name
     */
    readonly name: string;
    /**
     * The password for the default administrative user named `Admin` .
     *
     * If you need to change the password for the administrator account, see the [ResetUserPassword](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ResetUserPassword.html) API call in the *AWS Directory Service API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-password
     */
    readonly password: string;
    /**
     * The NetBIOS name for your domain, such as `CORP` .
     *
     * If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, `CORP` for the directory DNS `corp.example.com` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-shortname
     */
    readonly shortName?: string;
    /**
     * Specifies the VPC settings of the Microsoft AD directory server in AWS .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-vpcsettings
     */
    readonly vpcSettings: cdk.IResolvable | CfnMicrosoftAD.VpcSettingsProperty;
}
/**
 * The `AWS::DirectoryService::SimpleAD` resource specifies an AWS Directory Service Simple Active Directory ( Simple AD ) in AWS so that your directory users and groups can access the AWS Management Console and AWS applications using their existing credentials.
 *
 * Simple AD is a Microsoft Active Directory–compatible directory. For more information, see [Simple Active Directory](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html) in the *AWS Directory Service Admin Guide* .
 *
 * @cloudformationResource AWS::DirectoryService::SimpleAD
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html
 */
export declare class CfnSimpleAD extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSimpleAD from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSimpleAD;
    /**
     * The alias for a directory. For example: `alias4-mydirectory-12345abcgmzsk` (if you have the `CreateAlias` property set to true).
     *
     * @cloudformationAttribute Alias
     */
    readonly attrAlias: string;
    /**
     * The directory ID. For example: `d-12373a053a` .
     *
     * @cloudformationAttribute DirectoryId
     */
    readonly attrDirectoryId: string;
    /**
     * The IP addresses of the DNS servers for the directory, such as `[ "172.31.3.154", "172.31.63.203" ]` .
     *
     * @cloudformationAttribute DnsIpAddresses
     */
    readonly attrDnsIpAddresses: Array<string>;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * If set to `true` , specifies an alias for a directory and assigns the alias to the directory.
     */
    createAlias?: boolean | cdk.IResolvable;
    /**
     * A description for the directory.
     */
    description?: string;
    /**
     * Whether to enable single sign-on for a directory.
     */
    enableSso?: boolean | cdk.IResolvable;
    /**
     * The fully qualified name for the directory, such as `corp.example.com` .
     */
    name: string;
    /**
     * The password for the directory administrator.
     */
    password?: string;
    /**
     * The NetBIOS name of the directory, such as `CORP` .
     */
    shortName?: string;
    /**
     * The size of the directory.
     */
    size: string;
    /**
     * A [DirectoryVpcSettings](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DirectoryVpcSettings.html) object that contains additional information for the operation.
     */
    vpcSettings: cdk.IResolvable | CfnSimpleAD.VpcSettingsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSimpleADProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSimpleAD {
    /**
     * Contains VPC information for the [CreateDirectory](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateDirectory.html) or [CreateMicrosoftAD](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateMicrosoftAD.html) operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directoryservice-simplead-vpcsettings.html
     */
    interface VpcSettingsProperty {
        /**
         * The identifiers of the subnets for the directory servers.
         *
         * The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directoryservice-simplead-vpcsettings.html#cfn-directoryservice-simplead-vpcsettings-subnetids
         */
        readonly subnetIds: Array<string>;
        /**
         * The identifier of the VPC in which to create the directory.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directoryservice-simplead-vpcsettings.html#cfn-directoryservice-simplead-vpcsettings-vpcid
         */
        readonly vpcId: string;
    }
}
/**
 * Properties for defining a `CfnSimpleAD`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html
 */
export interface CfnSimpleADProps {
    /**
     * If set to `true` , specifies an alias for a directory and assigns the alias to the directory.
     *
     * The alias is used to construct the access URL for the directory, such as `http://<alias>.awsapps.com` . By default, this property is set to `false` .
     *
     * > After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html#cfn-directoryservice-simplead-createalias
     */
    readonly createAlias?: boolean | cdk.IResolvable;
    /**
     * A description for the directory.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html#cfn-directoryservice-simplead-description
     */
    readonly description?: string;
    /**
     * Whether to enable single sign-on for a directory.
     *
     * If you don't specify a value, AWS CloudFormation disables single sign-on by default.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html#cfn-directoryservice-simplead-enablesso
     */
    readonly enableSso?: boolean | cdk.IResolvable;
    /**
     * The fully qualified name for the directory, such as `corp.example.com` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html#cfn-directoryservice-simplead-name
     */
    readonly name: string;
    /**
     * The password for the directory administrator.
     *
     * The directory creation process creates a directory administrator account with the user name `Administrator` and this password.
     *
     * If you need to change the password for the administrator account, see the [ResetUserPassword](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ResetUserPassword.html) API call in the *AWS Directory Service API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html#cfn-directoryservice-simplead-password
     */
    readonly password?: string;
    /**
     * The NetBIOS name of the directory, such as `CORP` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html#cfn-directoryservice-simplead-shortname
     */
    readonly shortName?: string;
    /**
     * The size of the directory.
     *
     * For valid values, see [CreateDirectory](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateDirectory.html) in the *AWS Directory Service API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html#cfn-directoryservice-simplead-size
     */
    readonly size: string;
    /**
     * A [DirectoryVpcSettings](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DirectoryVpcSettings.html) object that contains additional information for the operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html#cfn-directoryservice-simplead-vpcsettings
     */
    readonly vpcSettings: cdk.IResolvable | CfnSimpleAD.VpcSettingsProperty;
}
