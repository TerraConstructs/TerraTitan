/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesDomainIdentityVerificationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_domain_identity_verification#domain SesDomainIdentityVerification#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_domain_identity_verification#id SesDomainIdentityVerification#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_domain_identity_verification#timeouts SesDomainIdentityVerification#timeouts}
    */
    readonly timeouts?: SesDomainIdentityVerificationTimeouts;
}
export interface SesDomainIdentityVerificationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_domain_identity_verification#create SesDomainIdentityVerification#create}
    */
    readonly create?: string;
}
export declare function sesDomainIdentityVerificationTimeoutsToTerraform(struct?: SesDomainIdentityVerificationTimeouts | cdktf.IResolvable): any;
export declare function sesDomainIdentityVerificationTimeoutsToHclTerraform(struct?: SesDomainIdentityVerificationTimeouts | cdktf.IResolvable): any;
export declare class SesDomainIdentityVerificationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SesDomainIdentityVerificationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SesDomainIdentityVerificationTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_domain_identity_verification aws_ses_domain_identity_verification}
*/
export declare class SesDomainIdentityVerification extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ses_domain_identity_verification";
    /**
    * Generates CDKTF code for importing a SesDomainIdentityVerification resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SesDomainIdentityVerification to import
    * @param importFromId The id of the existing SesDomainIdentityVerification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_domain_identity_verification#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SesDomainIdentityVerification to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_domain_identity_verification aws_ses_domain_identity_verification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesDomainIdentityVerificationConfig
    */
    constructor(scope: Construct, id: string, config: SesDomainIdentityVerificationConfig);
    get arn(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _timeouts;
    get timeouts(): SesDomainIdentityVerificationTimeoutsOutputReference;
    putTimeouts(value: SesDomainIdentityVerificationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SesDomainIdentityVerificationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
