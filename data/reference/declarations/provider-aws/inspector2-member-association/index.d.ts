/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Inspector2MemberAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_member_association#account_id Inspector2MemberAssociation#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_member_association#id Inspector2MemberAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_member_association#timeouts Inspector2MemberAssociation#timeouts}
    */
    readonly timeouts?: Inspector2MemberAssociationTimeouts;
}
export interface Inspector2MemberAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_member_association#create Inspector2MemberAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_member_association#delete Inspector2MemberAssociation#delete}
    */
    readonly delete?: string;
}
export declare function inspector2MemberAssociationTimeoutsToTerraform(struct?: Inspector2MemberAssociationTimeouts | cdktf.IResolvable): any;
export declare function inspector2MemberAssociationTimeoutsToHclTerraform(struct?: Inspector2MemberAssociationTimeouts | cdktf.IResolvable): any;
export declare class Inspector2MemberAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Inspector2MemberAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2MemberAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_member_association aws_inspector2_member_association}
*/
export declare class Inspector2MemberAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_inspector2_member_association";
    /**
    * Generates CDKTF code for importing a Inspector2MemberAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Inspector2MemberAssociation to import
    * @param importFromId The id of the existing Inspector2MemberAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_member_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Inspector2MemberAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_member_association aws_inspector2_member_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Inspector2MemberAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Inspector2MemberAssociationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string | undefined;
    get delegatedAdminAccountId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get relationshipStatus(): string;
    get updatedAt(): string;
    private _timeouts;
    get timeouts(): Inspector2MemberAssociationTimeoutsOutputReference;
    putTimeouts(value: Inspector2MemberAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Inspector2MemberAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
