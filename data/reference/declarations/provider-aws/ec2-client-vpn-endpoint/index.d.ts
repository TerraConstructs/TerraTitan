/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2ClientVpnEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}
    */
    readonly clientCidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#dns_servers Ec2ClientVpnEndpoint#dns_servers}
    */
    readonly dnsServers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#id Ec2ClientVpnEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#security_group_ids Ec2ClientVpnEndpoint#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}
    */
    readonly selfServicePortal?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}
    */
    readonly serverCertificateArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#session_timeout_hours Ec2ClientVpnEndpoint#session_timeout_hours}
    */
    readonly sessionTimeoutHours?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}
    */
    readonly splitTunnel?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#tags_all Ec2ClientVpnEndpoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}
    */
    readonly transportProtocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#vpc_id Ec2ClientVpnEndpoint#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#vpn_port Ec2ClientVpnEndpoint#vpn_port}
    */
    readonly vpnPort?: number;
    /**
    * authentication_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#authentication_options Ec2ClientVpnEndpoint#authentication_options}
    */
    readonly authenticationOptions: Ec2ClientVpnEndpointAuthenticationOptions[] | cdktf.IResolvable;
    /**
    * client_connect_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#client_connect_options Ec2ClientVpnEndpoint#client_connect_options}
    */
    readonly clientConnectOptions?: Ec2ClientVpnEndpointClientConnectOptions;
    /**
    * client_login_banner_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#client_login_banner_options Ec2ClientVpnEndpoint#client_login_banner_options}
    */
    readonly clientLoginBannerOptions?: Ec2ClientVpnEndpointClientLoginBannerOptions;
    /**
    * connection_log_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#connection_log_options Ec2ClientVpnEndpoint#connection_log_options}
    */
    readonly connectionLogOptions: Ec2ClientVpnEndpointConnectionLogOptions;
}
export interface Ec2ClientVpnEndpointAuthenticationOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#active_directory_id Ec2ClientVpnEndpoint#active_directory_id}
    */
    readonly activeDirectoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#root_certificate_chain_arn Ec2ClientVpnEndpoint#root_certificate_chain_arn}
    */
    readonly rootCertificateChainArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}
    */
    readonly samlProviderArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}
    */
    readonly selfServiceSamlProviderArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#type Ec2ClientVpnEndpoint#type}
    */
    readonly type: string;
}
export declare function ec2ClientVpnEndpointAuthenticationOptionsToTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptions | cdktf.IResolvable): any;
export declare function ec2ClientVpnEndpointAuthenticationOptionsToHclTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptions | cdktf.IResolvable): any;
export declare class Ec2ClientVpnEndpointAuthenticationOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2ClientVpnEndpointAuthenticationOptions | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2ClientVpnEndpointAuthenticationOptions | cdktf.IResolvable | undefined);
    private _activeDirectoryId?;
    get activeDirectoryId(): string;
    set activeDirectoryId(value: string);
    resetActiveDirectoryId(): void;
    get activeDirectoryIdInput(): string | undefined;
    private _rootCertificateChainArn?;
    get rootCertificateChainArn(): string;
    set rootCertificateChainArn(value: string);
    resetRootCertificateChainArn(): void;
    get rootCertificateChainArnInput(): string | undefined;
    private _samlProviderArn?;
    get samlProviderArn(): string;
    set samlProviderArn(value: string);
    resetSamlProviderArn(): void;
    get samlProviderArnInput(): string | undefined;
    private _selfServiceSamlProviderArn?;
    get selfServiceSamlProviderArn(): string;
    set selfServiceSamlProviderArn(value: string);
    resetSelfServiceSamlProviderArn(): void;
    get selfServiceSamlProviderArnInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Ec2ClientVpnEndpointAuthenticationOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Ec2ClientVpnEndpointAuthenticationOptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Ec2ClientVpnEndpointAuthenticationOptionsOutputReference;
}
export interface Ec2ClientVpnEndpointClientConnectOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#lambda_function_arn Ec2ClientVpnEndpoint#lambda_function_arn}
    */
    readonly lambdaFunctionArn?: string;
}
export declare function ec2ClientVpnEndpointClientConnectOptionsToTerraform(struct?: Ec2ClientVpnEndpointClientConnectOptionsOutputReference | Ec2ClientVpnEndpointClientConnectOptions): any;
export declare function ec2ClientVpnEndpointClientConnectOptionsToHclTerraform(struct?: Ec2ClientVpnEndpointClientConnectOptionsOutputReference | Ec2ClientVpnEndpointClientConnectOptions): any;
export declare class Ec2ClientVpnEndpointClientConnectOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2ClientVpnEndpointClientConnectOptions | undefined;
    set internalValue(value: Ec2ClientVpnEndpointClientConnectOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _lambdaFunctionArn?;
    get lambdaFunctionArn(): string;
    set lambdaFunctionArn(value: string);
    resetLambdaFunctionArn(): void;
    get lambdaFunctionArnInput(): string | undefined;
}
export interface Ec2ClientVpnEndpointClientLoginBannerOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#banner_text Ec2ClientVpnEndpoint#banner_text}
    */
    readonly bannerText?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function ec2ClientVpnEndpointClientLoginBannerOptionsToTerraform(struct?: Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference | Ec2ClientVpnEndpointClientLoginBannerOptions): any;
export declare function ec2ClientVpnEndpointClientLoginBannerOptionsToHclTerraform(struct?: Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference | Ec2ClientVpnEndpointClientLoginBannerOptions): any;
export declare class Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2ClientVpnEndpointClientLoginBannerOptions | undefined;
    set internalValue(value: Ec2ClientVpnEndpointClientLoginBannerOptions | undefined);
    private _bannerText?;
    get bannerText(): string;
    set bannerText(value: string);
    resetBannerText(): void;
    get bannerTextInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface Ec2ClientVpnEndpointConnectionLogOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}
    */
    readonly cloudwatchLogGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}
    */
    readonly cloudwatchLogStream?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function ec2ClientVpnEndpointConnectionLogOptionsToTerraform(struct?: Ec2ClientVpnEndpointConnectionLogOptionsOutputReference | Ec2ClientVpnEndpointConnectionLogOptions): any;
export declare function ec2ClientVpnEndpointConnectionLogOptionsToHclTerraform(struct?: Ec2ClientVpnEndpointConnectionLogOptionsOutputReference | Ec2ClientVpnEndpointConnectionLogOptions): any;
export declare class Ec2ClientVpnEndpointConnectionLogOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2ClientVpnEndpointConnectionLogOptions | undefined;
    set internalValue(value: Ec2ClientVpnEndpointConnectionLogOptions | undefined);
    private _cloudwatchLogGroup?;
    get cloudwatchLogGroup(): string;
    set cloudwatchLogGroup(value: string);
    resetCloudwatchLogGroup(): void;
    get cloudwatchLogGroupInput(): string | undefined;
    private _cloudwatchLogStream?;
    get cloudwatchLogStream(): string;
    set cloudwatchLogStream(value: string);
    resetCloudwatchLogStream(): void;
    get cloudwatchLogStreamInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint}
*/
export declare class Ec2ClientVpnEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_client_vpn_endpoint";
    /**
    * Generates CDKTF code for importing a Ec2ClientVpnEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2ClientVpnEndpoint to import
    * @param importFromId The id of the existing Ec2ClientVpnEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2ClientVpnEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ClientVpnEndpointConfig
    */
    constructor(scope: Construct, id: string, config: Ec2ClientVpnEndpointConfig);
    get arn(): string;
    private _clientCidrBlock?;
    get clientCidrBlock(): string;
    set clientCidrBlock(value: string);
    get clientCidrBlockInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get dnsName(): string;
    private _dnsServers?;
    get dnsServers(): string[];
    set dnsServers(value: string[]);
    resetDnsServers(): void;
    get dnsServersInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _selfServicePortal?;
    get selfServicePortal(): string;
    set selfServicePortal(value: string);
    resetSelfServicePortal(): void;
    get selfServicePortalInput(): string | undefined;
    get selfServicePortalUrl(): string;
    private _serverCertificateArn?;
    get serverCertificateArn(): string;
    set serverCertificateArn(value: string);
    get serverCertificateArnInput(): string | undefined;
    private _sessionTimeoutHours?;
    get sessionTimeoutHours(): number;
    set sessionTimeoutHours(value: number);
    resetSessionTimeoutHours(): void;
    get sessionTimeoutHoursInput(): number | undefined;
    private _splitTunnel?;
    get splitTunnel(): boolean | cdktf.IResolvable;
    set splitTunnel(value: boolean | cdktf.IResolvable);
    resetSplitTunnel(): void;
    get splitTunnelInput(): boolean | cdktf.IResolvable | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _transportProtocol?;
    get transportProtocol(): string;
    set transportProtocol(value: string);
    resetTransportProtocol(): void;
    get transportProtocolInput(): string | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _vpnPort?;
    get vpnPort(): number;
    set vpnPort(value: number);
    resetVpnPort(): void;
    get vpnPortInput(): number | undefined;
    private _authenticationOptions;
    get authenticationOptions(): Ec2ClientVpnEndpointAuthenticationOptionsList;
    putAuthenticationOptions(value: Ec2ClientVpnEndpointAuthenticationOptions[] | cdktf.IResolvable): void;
    get authenticationOptionsInput(): cdktf.IResolvable | Ec2ClientVpnEndpointAuthenticationOptions[] | undefined;
    private _clientConnectOptions;
    get clientConnectOptions(): Ec2ClientVpnEndpointClientConnectOptionsOutputReference;
    putClientConnectOptions(value: Ec2ClientVpnEndpointClientConnectOptions): void;
    resetClientConnectOptions(): void;
    get clientConnectOptionsInput(): Ec2ClientVpnEndpointClientConnectOptions | undefined;
    private _clientLoginBannerOptions;
    get clientLoginBannerOptions(): Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference;
    putClientLoginBannerOptions(value: Ec2ClientVpnEndpointClientLoginBannerOptions): void;
    resetClientLoginBannerOptions(): void;
    get clientLoginBannerOptionsInput(): Ec2ClientVpnEndpointClientLoginBannerOptions | undefined;
    private _connectionLogOptions;
    get connectionLogOptions(): Ec2ClientVpnEndpointConnectionLogOptionsOutputReference;
    putConnectionLogOptions(value: Ec2ClientVpnEndpointConnectionLogOptions): void;
    get connectionLogOptionsInput(): Ec2ClientVpnEndpointConnectionLogOptions | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
