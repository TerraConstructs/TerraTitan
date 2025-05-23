/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpclatticeTargetGroupAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group_attachment#id VpclatticeTargetGroupAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group_attachment#target_group_identifier VpclatticeTargetGroupAttachment#target_group_identifier}
    */
    readonly targetGroupIdentifier: string;
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group_attachment#target VpclatticeTargetGroupAttachment#target}
    */
    readonly target: VpclatticeTargetGroupAttachmentTarget;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group_attachment#timeouts VpclatticeTargetGroupAttachment#timeouts}
    */
    readonly timeouts?: VpclatticeTargetGroupAttachmentTimeouts;
}
export interface VpclatticeTargetGroupAttachmentTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group_attachment#id VpclatticeTargetGroupAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group_attachment#port VpclatticeTargetGroupAttachment#port}
    */
    readonly port?: number;
}
export declare function vpclatticeTargetGroupAttachmentTargetToTerraform(struct?: VpclatticeTargetGroupAttachmentTargetOutputReference | VpclatticeTargetGroupAttachmentTarget): any;
export declare function vpclatticeTargetGroupAttachmentTargetToHclTerraform(struct?: VpclatticeTargetGroupAttachmentTargetOutputReference | VpclatticeTargetGroupAttachmentTarget): any;
export declare class VpclatticeTargetGroupAttachmentTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeTargetGroupAttachmentTarget | undefined;
    set internalValue(value: VpclatticeTargetGroupAttachmentTarget | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
}
export interface VpclatticeTargetGroupAttachmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group_attachment#create VpclatticeTargetGroupAttachment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group_attachment#delete VpclatticeTargetGroupAttachment#delete}
    */
    readonly delete?: string;
}
export declare function vpclatticeTargetGroupAttachmentTimeoutsToTerraform(struct?: VpclatticeTargetGroupAttachmentTimeouts | cdktf.IResolvable): any;
export declare function vpclatticeTargetGroupAttachmentTimeoutsToHclTerraform(struct?: VpclatticeTargetGroupAttachmentTimeouts | cdktf.IResolvable): any;
export declare class VpclatticeTargetGroupAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeTargetGroupAttachmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeTargetGroupAttachmentTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group_attachment aws_vpclattice_target_group_attachment}
*/
export declare class VpclatticeTargetGroupAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpclattice_target_group_attachment";
    /**
    * Generates CDKTF code for importing a VpclatticeTargetGroupAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpclatticeTargetGroupAttachment to import
    * @param importFromId The id of the existing VpclatticeTargetGroupAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpclatticeTargetGroupAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group_attachment aws_vpclattice_target_group_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpclatticeTargetGroupAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: VpclatticeTargetGroupAttachmentConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _targetGroupIdentifier?;
    get targetGroupIdentifier(): string;
    set targetGroupIdentifier(value: string);
    get targetGroupIdentifierInput(): string | undefined;
    private _target;
    get target(): VpclatticeTargetGroupAttachmentTargetOutputReference;
    putTarget(value: VpclatticeTargetGroupAttachmentTarget): void;
    get targetInput(): VpclatticeTargetGroupAttachmentTarget | undefined;
    private _timeouts;
    get timeouts(): VpclatticeTargetGroupAttachmentTimeoutsOutputReference;
    putTimeouts(value: VpclatticeTargetGroupAttachmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpclatticeTargetGroupAttachmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
