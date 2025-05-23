/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#direction Route53ResolverEndpoint#direction}
    */
    readonly direction: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#id Route53ResolverEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#name Route53ResolverEndpoint#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#protocols Route53ResolverEndpoint#protocols}
    */
    readonly protocols?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#resolver_endpoint_type Route53ResolverEndpoint#resolver_endpoint_type}
    */
    readonly resolverEndpointType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#security_group_ids Route53ResolverEndpoint#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#tags Route53ResolverEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#tags_all Route53ResolverEndpoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * ip_address block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#ip_address Route53ResolverEndpoint#ip_address}
    */
    readonly ipAddress: Route53ResolverEndpointIpAddress[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#timeouts Route53ResolverEndpoint#timeouts}
    */
    readonly timeouts?: Route53ResolverEndpointTimeouts;
}
export interface Route53ResolverEndpointIpAddress {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#ip Route53ResolverEndpoint#ip}
    */
    readonly ip?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#ipv6 Route53ResolverEndpoint#ipv6}
    */
    readonly ipv6?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#subnet_id Route53ResolverEndpoint#subnet_id}
    */
    readonly subnetId: string;
}
export declare function route53ResolverEndpointIpAddressToTerraform(struct?: Route53ResolverEndpointIpAddress | cdktf.IResolvable): any;
export declare function route53ResolverEndpointIpAddressToHclTerraform(struct?: Route53ResolverEndpointIpAddress | cdktf.IResolvable): any;
export declare class Route53ResolverEndpointIpAddressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53ResolverEndpointIpAddress | cdktf.IResolvable | undefined;
    set internalValue(value: Route53ResolverEndpointIpAddress | cdktf.IResolvable | undefined);
    private _ip?;
    get ip(): string;
    set ip(value: string);
    resetIp(): void;
    get ipInput(): string | undefined;
    get ipId(): string;
    private _ipv6?;
    get ipv6(): string;
    set ipv6(value: string);
    resetIpv6(): void;
    get ipv6Input(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string | undefined;
}
export declare class Route53ResolverEndpointIpAddressList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53ResolverEndpointIpAddress[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53ResolverEndpointIpAddressOutputReference;
}
export interface Route53ResolverEndpointTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#create Route53ResolverEndpoint#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#delete Route53ResolverEndpoint#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#update Route53ResolverEndpoint#update}
    */
    readonly update?: string;
}
export declare function route53ResolverEndpointTimeoutsToTerraform(struct?: Route53ResolverEndpointTimeouts | cdktf.IResolvable): any;
export declare function route53ResolverEndpointTimeoutsToHclTerraform(struct?: Route53ResolverEndpointTimeouts | cdktf.IResolvable): any;
export declare class Route53ResolverEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53ResolverEndpointTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Route53ResolverEndpointTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint aws_route53_resolver_endpoint}
*/
export declare class Route53ResolverEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53_resolver_endpoint";
    /**
    * Generates CDKTF code for importing a Route53ResolverEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53ResolverEndpoint to import
    * @param importFromId The id of the existing Route53ResolverEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53ResolverEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_endpoint aws_route53_resolver_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverEndpointConfig
    */
    constructor(scope: Construct, id: string, config: Route53ResolverEndpointConfig);
    get arn(): string;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    get directionInput(): string | undefined;
    get hostVpcId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _protocols?;
    get protocols(): string[];
    set protocols(value: string[]);
    resetProtocols(): void;
    get protocolsInput(): string[] | undefined;
    private _resolverEndpointType?;
    get resolverEndpointType(): string;
    set resolverEndpointType(value: string);
    resetResolverEndpointType(): void;
    get resolverEndpointTypeInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
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
    private _ipAddress;
    get ipAddress(): Route53ResolverEndpointIpAddressList;
    putIpAddress(value: Route53ResolverEndpointIpAddress[] | cdktf.IResolvable): void;
    get ipAddressInput(): cdktf.IResolvable | Route53ResolverEndpointIpAddress[] | undefined;
    private _timeouts;
    get timeouts(): Route53ResolverEndpointTimeoutsOutputReference;
    putTimeouts(value: Route53ResolverEndpointTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Route53ResolverEndpointTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
