/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LakeformationResourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource#arn LakeformationResource#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource#hybrid_access_enabled LakeformationResource#hybrid_access_enabled}
    */
    readonly hybridAccessEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource#id LakeformationResource#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource#role_arn LakeformationResource#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource#use_service_linked_role LakeformationResource#use_service_linked_role}
    */
    readonly useServiceLinkedRole?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource#with_federation LakeformationResource#with_federation}
    */
    readonly withFederation?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource aws_lakeformation_resource}
*/
export declare class LakeformationResource extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lakeformation_resource";
    /**
    * Generates CDKTF code for importing a LakeformationResource resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LakeformationResource to import
    * @param importFromId The id of the existing LakeformationResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LakeformationResource to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource aws_lakeformation_resource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LakeformationResourceConfig
    */
    constructor(scope: Construct, id: string, config: LakeformationResourceConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _hybridAccessEnabled?;
    get hybridAccessEnabled(): boolean | cdktf.IResolvable;
    set hybridAccessEnabled(value: boolean | cdktf.IResolvable);
    resetHybridAccessEnabled(): void;
    get hybridAccessEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastModified(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _useServiceLinkedRole?;
    get useServiceLinkedRole(): boolean | cdktf.IResolvable;
    set useServiceLinkedRole(value: boolean | cdktf.IResolvable);
    resetUseServiceLinkedRole(): void;
    get useServiceLinkedRoleInput(): boolean | cdktf.IResolvable | undefined;
    private _withFederation?;
    get withFederation(): boolean | cdktf.IResolvable;
    set withFederation(value: boolean | cdktf.IResolvable);
    resetWithFederation(): void;
    get withFederationInput(): boolean | cdktf.IResolvable | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
