/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingGroupTagAConfig extends cdktf.TerraformMetaArguments {
    /** (Required) Name of the Autoscaling Group to apply the tag to. */
    readonly autoscalingGroupName: string;
    /** */
    readonly id?: string;
    /** */
    readonly tag: AutoscalingGroupTagTag;
}
export interface AutoscalingGroupTagTag {
    /** (Required) Tag name. */
    readonly key: string;
    /** (Required) Whether to propagate the tags to instances launched by the ASG. */
    readonly propagateAtLaunch: boolean | cdktf.IResolvable;
    /** (Required) Tag value. */
    readonly value: string;
}
export declare function autoscalingGroupTagTagToTerraform(struct?: AutoscalingGroupTagTagOutputReference | AutoscalingGroupTagTag): any;
export declare function autoscalingGroupTagTagToHclTerraform(struct?: AutoscalingGroupTagTagOutputReference | AutoscalingGroupTagTag): any;
export declare class AutoscalingGroupTagTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupTagTag | undefined;
    set internalValue(value: AutoscalingGroupTagTag | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _propagateAtLaunch?;
    get propagateAtLaunch(): boolean | cdktf.IResolvable;
    set propagateAtLaunch(value: boolean | cdktf.IResolvable);
    get propagateAtLaunchInput(): boolean | cdktf.IResolvable | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_group_tag aws_autoscaling_group_tag}
*/
export declare class AutoscalingGroupTagA extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_autoscaling_group_tag";
    /**
    * Generates CDKTF code for importing a AutoscalingGroupTagA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AutoscalingGroupTagA to import
    * @param importFromId The id of the existing AutoscalingGroupTagA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_group_tag#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AutoscalingGroupTagA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_group_tag aws_autoscaling_group_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingGroupTagAConfig
    */
    constructor(scope: Construct, id: string, config: AutoscalingGroupTagAConfig);
    private _autoscalingGroupName?;
    get autoscalingGroupName(): string;
    set autoscalingGroupName(value: string);
    get autoscalingGroupNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _tag;
    get tag(): AutoscalingGroupTagTagOutputReference;
    putTag(value: AutoscalingGroupTagTag): void;
    get tagInput(): AutoscalingGroupTagTag | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
