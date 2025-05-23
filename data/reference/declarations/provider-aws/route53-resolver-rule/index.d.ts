/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#domain_name Route53ResolverRule#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#id Route53ResolverRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#name Route53ResolverRule#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#resolver_endpoint_id Route53ResolverRule#resolver_endpoint_id}
    */
    readonly resolverEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#rule_type Route53ResolverRule#rule_type}
    */
    readonly ruleType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#tags Route53ResolverRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#tags_all Route53ResolverRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * target_ip block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#target_ip Route53ResolverRule#target_ip}
    */
    readonly targetIp?: Route53ResolverRuleTargetIp[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#timeouts Route53ResolverRule#timeouts}
    */
    readonly timeouts?: Route53ResolverRuleTimeouts;
}
export interface Route53ResolverRuleTargetIp {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#ip Route53ResolverRule#ip}
    */
    readonly ip?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#ipv6 Route53ResolverRule#ipv6}
    */
    readonly ipv6?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#port Route53ResolverRule#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#protocol Route53ResolverRule#protocol}
    */
    readonly protocol?: string;
}
export declare function route53ResolverRuleTargetIpToTerraform(struct?: Route53ResolverRuleTargetIp | cdktf.IResolvable): any;
export declare function route53ResolverRuleTargetIpToHclTerraform(struct?: Route53ResolverRuleTargetIp | cdktf.IResolvable): any;
export declare class Route53ResolverRuleTargetIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53ResolverRuleTargetIp | cdktf.IResolvable | undefined;
    set internalValue(value: Route53ResolverRuleTargetIp | cdktf.IResolvable | undefined);
    private _ip?;
    get ip(): string;
    set ip(value: string);
    resetIp(): void;
    get ipInput(): string | undefined;
    private _ipv6?;
    get ipv6(): string;
    set ipv6(value: string);
    resetIpv6(): void;
    get ipv6Input(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
}
export declare class Route53ResolverRuleTargetIpList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53ResolverRuleTargetIp[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53ResolverRuleTargetIpOutputReference;
}
export interface Route53ResolverRuleTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#create Route53ResolverRule#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#delete Route53ResolverRule#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#update Route53ResolverRule#update}
    */
    readonly update?: string;
}
export declare function route53ResolverRuleTimeoutsToTerraform(struct?: Route53ResolverRuleTimeouts | cdktf.IResolvable): any;
export declare function route53ResolverRuleTimeoutsToHclTerraform(struct?: Route53ResolverRuleTimeouts | cdktf.IResolvable): any;
export declare class Route53ResolverRuleTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53ResolverRuleTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Route53ResolverRuleTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule aws_route53_resolver_rule}
*/
export declare class Route53ResolverRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53_resolver_rule";
    /**
    * Generates CDKTF code for importing a Route53ResolverRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53ResolverRule to import
    * @param importFromId The id of the existing Route53ResolverRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53ResolverRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_rule aws_route53_resolver_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverRuleConfig
    */
    constructor(scope: Construct, id: string, config: Route53ResolverRuleConfig);
    get arn(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
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
    get ownerId(): string;
    private _resolverEndpointId?;
    get resolverEndpointId(): string;
    set resolverEndpointId(value: string);
    resetResolverEndpointId(): void;
    get resolverEndpointIdInput(): string | undefined;
    private _ruleType?;
    get ruleType(): string;
    set ruleType(value: string);
    get ruleTypeInput(): string | undefined;
    get shareStatus(): string;
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
    private _targetIp;
    get targetIp(): Route53ResolverRuleTargetIpList;
    putTargetIp(value: Route53ResolverRuleTargetIp[] | cdktf.IResolvable): void;
    resetTargetIp(): void;
    get targetIpInput(): cdktf.IResolvable | Route53ResolverRuleTargetIp[] | undefined;
    private _timeouts;
    get timeouts(): Route53ResolverRuleTimeoutsOutputReference;
    putTimeouts(value: Route53ResolverRuleTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Route53ResolverRuleTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
