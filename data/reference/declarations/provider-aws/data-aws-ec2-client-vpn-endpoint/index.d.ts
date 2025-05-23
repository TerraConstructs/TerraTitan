/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2ClientVpnEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_client_vpn_endpoint#client_vpn_endpoint_id DataAwsEc2ClientVpnEndpoint#client_vpn_endpoint_id}
    */
    readonly clientVpnEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_client_vpn_endpoint#id DataAwsEc2ClientVpnEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_client_vpn_endpoint#tags DataAwsEc2ClientVpnEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_client_vpn_endpoint#filter DataAwsEc2ClientVpnEndpoint#filter}
    */
    readonly filter?: DataAwsEc2ClientVpnEndpointFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_client_vpn_endpoint#timeouts DataAwsEc2ClientVpnEndpoint#timeouts}
    */
    readonly timeouts?: DataAwsEc2ClientVpnEndpointTimeouts;
}
export interface DataAwsEc2ClientVpnEndpointAuthenticationOptions {
}
export declare function dataAwsEc2ClientVpnEndpointAuthenticationOptionsToTerraform(struct?: DataAwsEc2ClientVpnEndpointAuthenticationOptions): any;
export declare function dataAwsEc2ClientVpnEndpointAuthenticationOptionsToHclTerraform(struct?: DataAwsEc2ClientVpnEndpointAuthenticationOptions): any;
export declare class DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2ClientVpnEndpointAuthenticationOptions | undefined;
    set internalValue(value: DataAwsEc2ClientVpnEndpointAuthenticationOptions | undefined);
    get activeDirectoryId(): string;
    get rootCertificateChainArn(): string;
    get samlProviderArn(): string;
    get selfServiceSamlProviderArn(): string;
    get type(): string;
}
export declare class DataAwsEc2ClientVpnEndpointAuthenticationOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference;
}
export interface DataAwsEc2ClientVpnEndpointClientConnectOptions {
}
export declare function dataAwsEc2ClientVpnEndpointClientConnectOptionsToTerraform(struct?: DataAwsEc2ClientVpnEndpointClientConnectOptions): any;
export declare function dataAwsEc2ClientVpnEndpointClientConnectOptionsToHclTerraform(struct?: DataAwsEc2ClientVpnEndpointClientConnectOptions): any;
export declare class DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2ClientVpnEndpointClientConnectOptions | undefined;
    set internalValue(value: DataAwsEc2ClientVpnEndpointClientConnectOptions | undefined);
    get enabled(): cdktf.IResolvable;
    get lambdaFunctionArn(): string;
}
export declare class DataAwsEc2ClientVpnEndpointClientConnectOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference;
}
export interface DataAwsEc2ClientVpnEndpointClientLoginBannerOptions {
}
export declare function dataAwsEc2ClientVpnEndpointClientLoginBannerOptionsToTerraform(struct?: DataAwsEc2ClientVpnEndpointClientLoginBannerOptions): any;
export declare function dataAwsEc2ClientVpnEndpointClientLoginBannerOptionsToHclTerraform(struct?: DataAwsEc2ClientVpnEndpointClientLoginBannerOptions): any;
export declare class DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2ClientVpnEndpointClientLoginBannerOptions | undefined;
    set internalValue(value: DataAwsEc2ClientVpnEndpointClientLoginBannerOptions | undefined);
    get bannerText(): string;
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference;
}
export interface DataAwsEc2ClientVpnEndpointConnectionLogOptions {
}
export declare function dataAwsEc2ClientVpnEndpointConnectionLogOptionsToTerraform(struct?: DataAwsEc2ClientVpnEndpointConnectionLogOptions): any;
export declare function dataAwsEc2ClientVpnEndpointConnectionLogOptionsToHclTerraform(struct?: DataAwsEc2ClientVpnEndpointConnectionLogOptions): any;
export declare class DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2ClientVpnEndpointConnectionLogOptions | undefined;
    set internalValue(value: DataAwsEc2ClientVpnEndpointConnectionLogOptions | undefined);
    get cloudwatchLogGroup(): string;
    get cloudwatchLogStream(): string;
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsEc2ClientVpnEndpointConnectionLogOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference;
}
export interface DataAwsEc2ClientVpnEndpointFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_client_vpn_endpoint#name DataAwsEc2ClientVpnEndpoint#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_client_vpn_endpoint#values DataAwsEc2ClientVpnEndpoint#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2ClientVpnEndpointFilterToTerraform(struct?: DataAwsEc2ClientVpnEndpointFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2ClientVpnEndpointFilterToHclTerraform(struct?: DataAwsEc2ClientVpnEndpointFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2ClientVpnEndpointFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2ClientVpnEndpointFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2ClientVpnEndpointFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2ClientVpnEndpointFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2ClientVpnEndpointFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2ClientVpnEndpointFilterOutputReference;
}
export interface DataAwsEc2ClientVpnEndpointTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_client_vpn_endpoint#read DataAwsEc2ClientVpnEndpoint#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2ClientVpnEndpointTimeoutsToTerraform(struct?: DataAwsEc2ClientVpnEndpointTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2ClientVpnEndpointTimeoutsToHclTerraform(struct?: DataAwsEc2ClientVpnEndpointTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2ClientVpnEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2ClientVpnEndpointTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2ClientVpnEndpointTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint}
*/
export declare class DataAwsEc2ClientVpnEndpoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_client_vpn_endpoint";
    /**
    * Generates CDKTF code for importing a DataAwsEc2ClientVpnEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2ClientVpnEndpoint to import
    * @param importFromId The id of the existing DataAwsEc2ClientVpnEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_client_vpn_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2ClientVpnEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2ClientVpnEndpointConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2ClientVpnEndpointConfig);
    get arn(): string;
    private _authenticationOptions;
    get authenticationOptions(): DataAwsEc2ClientVpnEndpointAuthenticationOptionsList;
    get clientCidrBlock(): string;
    private _clientConnectOptions;
    get clientConnectOptions(): DataAwsEc2ClientVpnEndpointClientConnectOptionsList;
    private _clientLoginBannerOptions;
    get clientLoginBannerOptions(): DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList;
    private _clientVpnEndpointId?;
    get clientVpnEndpointId(): string;
    set clientVpnEndpointId(value: string);
    resetClientVpnEndpointId(): void;
    get clientVpnEndpointIdInput(): string | undefined;
    private _connectionLogOptions;
    get connectionLogOptions(): DataAwsEc2ClientVpnEndpointConnectionLogOptionsList;
    get description(): string;
    get dnsName(): string;
    get dnsServers(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get securityGroupIds(): string[];
    get selfServicePortal(): string;
    get selfServicePortalUrl(): string;
    get serverCertificateArn(): string;
    get sessionTimeoutHours(): number;
    get splitTunnel(): cdktf.IResolvable;
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
    get transportProtocol(): string;
    get vpcId(): string;
    get vpnPort(): number;
    private _filter;
    get filter(): DataAwsEc2ClientVpnEndpointFilterList;
    putFilter(value: DataAwsEc2ClientVpnEndpointFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2ClientVpnEndpointFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2ClientVpnEndpointTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2ClientVpnEndpointTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2ClientVpnEndpointTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
