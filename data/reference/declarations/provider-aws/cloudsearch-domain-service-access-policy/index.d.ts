/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudsearchDomainServiceAccessPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain_service_access_policy#access_policy CloudsearchDomainServiceAccessPolicy#access_policy}
    */
    readonly accessPolicy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain_service_access_policy#domain_name CloudsearchDomainServiceAccessPolicy#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain_service_access_policy#id CloudsearchDomainServiceAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain_service_access_policy#timeouts CloudsearchDomainServiceAccessPolicy#timeouts}
    */
    readonly timeouts?: CloudsearchDomainServiceAccessPolicyTimeouts;
}
export interface CloudsearchDomainServiceAccessPolicyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain_service_access_policy#delete CloudsearchDomainServiceAccessPolicy#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain_service_access_policy#update CloudsearchDomainServiceAccessPolicy#update}
    */
    readonly update?: string;
}
export declare function cloudsearchDomainServiceAccessPolicyTimeoutsToTerraform(struct?: CloudsearchDomainServiceAccessPolicyTimeouts | cdktf.IResolvable): any;
export declare function cloudsearchDomainServiceAccessPolicyTimeoutsToHclTerraform(struct?: CloudsearchDomainServiceAccessPolicyTimeouts | cdktf.IResolvable): any;
export declare class CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudsearchDomainServiceAccessPolicyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CloudsearchDomainServiceAccessPolicyTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain_service_access_policy aws_cloudsearch_domain_service_access_policy}
*/
export declare class CloudsearchDomainServiceAccessPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudsearch_domain_service_access_policy";
    /**
    * Generates CDKTF code for importing a CloudsearchDomainServiceAccessPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudsearchDomainServiceAccessPolicy to import
    * @param importFromId The id of the existing CloudsearchDomainServiceAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain_service_access_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudsearchDomainServiceAccessPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain_service_access_policy aws_cloudsearch_domain_service_access_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudsearchDomainServiceAccessPolicyConfig
    */
    constructor(scope: Construct, id: string, config: CloudsearchDomainServiceAccessPolicyConfig);
    private _accessPolicy?;
    get accessPolicy(): string;
    set accessPolicy(value: string);
    get accessPolicyInput(): string | undefined;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _timeouts;
    get timeouts(): CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference;
    putTimeouts(value: CloudsearchDomainServiceAccessPolicyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CloudsearchDomainServiceAccessPolicyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
