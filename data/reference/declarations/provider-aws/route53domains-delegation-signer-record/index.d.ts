/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53DomainsDelegationSignerRecordConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_delegation_signer_record#domain_name Route53DomainsDelegationSignerRecord#domain_name}
    */
    readonly domainName: string;
    /**
    * signing_attributes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_delegation_signer_record#signing_attributes Route53DomainsDelegationSignerRecord#signing_attributes}
    */
    readonly signingAttributes?: Route53DomainsDelegationSignerRecordSigningAttributes[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_delegation_signer_record#timeouts Route53DomainsDelegationSignerRecord#timeouts}
    */
    readonly timeouts?: Route53DomainsDelegationSignerRecordTimeouts;
}
export interface Route53DomainsDelegationSignerRecordSigningAttributes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_delegation_signer_record#algorithm Route53DomainsDelegationSignerRecord#algorithm}
    */
    readonly algorithm: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_delegation_signer_record#flags Route53DomainsDelegationSignerRecord#flags}
    */
    readonly flags: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_delegation_signer_record#public_key Route53DomainsDelegationSignerRecord#public_key}
    */
    readonly publicKey: string;
}
export declare function route53DomainsDelegationSignerRecordSigningAttributesToTerraform(struct?: Route53DomainsDelegationSignerRecordSigningAttributes | cdktf.IResolvable): any;
export declare function route53DomainsDelegationSignerRecordSigningAttributesToHclTerraform(struct?: Route53DomainsDelegationSignerRecordSigningAttributes | cdktf.IResolvable): any;
export declare class Route53DomainsDelegationSignerRecordSigningAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53DomainsDelegationSignerRecordSigningAttributes | cdktf.IResolvable | undefined;
    set internalValue(value: Route53DomainsDelegationSignerRecordSigningAttributes | cdktf.IResolvable | undefined);
    private _algorithm?;
    get algorithm(): number;
    set algorithm(value: number);
    get algorithmInput(): number | undefined;
    private _flags?;
    get flags(): number;
    set flags(value: number);
    get flagsInput(): number | undefined;
    private _publicKey?;
    get publicKey(): string;
    set publicKey(value: string);
    get publicKeyInput(): string | undefined;
}
export declare class Route53DomainsDelegationSignerRecordSigningAttributesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53DomainsDelegationSignerRecordSigningAttributes[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53DomainsDelegationSignerRecordSigningAttributesOutputReference;
}
export interface Route53DomainsDelegationSignerRecordTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_delegation_signer_record#create Route53DomainsDelegationSignerRecord#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_delegation_signer_record#delete Route53DomainsDelegationSignerRecord#delete}
    */
    readonly delete?: string;
}
export declare function route53DomainsDelegationSignerRecordTimeoutsToTerraform(struct?: Route53DomainsDelegationSignerRecordTimeouts | cdktf.IResolvable): any;
export declare function route53DomainsDelegationSignerRecordTimeoutsToHclTerraform(struct?: Route53DomainsDelegationSignerRecordTimeouts | cdktf.IResolvable): any;
export declare class Route53DomainsDelegationSignerRecordTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53DomainsDelegationSignerRecordTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Route53DomainsDelegationSignerRecordTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_delegation_signer_record aws_route53domains_delegation_signer_record}
*/
export declare class Route53DomainsDelegationSignerRecord extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53domains_delegation_signer_record";
    /**
    * Generates CDKTF code for importing a Route53DomainsDelegationSignerRecord resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53DomainsDelegationSignerRecord to import
    * @param importFromId The id of the existing Route53DomainsDelegationSignerRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_delegation_signer_record#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53DomainsDelegationSignerRecord to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_delegation_signer_record aws_route53domains_delegation_signer_record} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53DomainsDelegationSignerRecordConfig
    */
    constructor(scope: Construct, id: string, config: Route53DomainsDelegationSignerRecordConfig);
    get dnssecKeyId(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    get id(): string;
    private _signingAttributes;
    get signingAttributes(): Route53DomainsDelegationSignerRecordSigningAttributesList;
    putSigningAttributes(value: Route53DomainsDelegationSignerRecordSigningAttributes[] | cdktf.IResolvable): void;
    resetSigningAttributes(): void;
    get signingAttributesInput(): cdktf.IResolvable | Route53DomainsDelegationSignerRecordSigningAttributes[] | undefined;
    private _timeouts;
    get timeouts(): Route53DomainsDelegationSignerRecordTimeoutsOutputReference;
    putTimeouts(value: Route53DomainsDelegationSignerRecordTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Route53DomainsDelegationSignerRecordTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
