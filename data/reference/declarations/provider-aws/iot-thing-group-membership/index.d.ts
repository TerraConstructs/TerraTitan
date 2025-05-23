/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotThingGroupMembershipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group_membership#id IotThingGroupMembership#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group_membership#override_dynamic_group IotThingGroupMembership#override_dynamic_group}
    */
    readonly overrideDynamicGroup?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group_membership#thing_group_name IotThingGroupMembership#thing_group_name}
    */
    readonly thingGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group_membership#thing_name IotThingGroupMembership#thing_name}
    */
    readonly thingName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group_membership aws_iot_thing_group_membership}
*/
export declare class IotThingGroupMembership extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iot_thing_group_membership";
    /**
    * Generates CDKTF code for importing a IotThingGroupMembership resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IotThingGroupMembership to import
    * @param importFromId The id of the existing IotThingGroupMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group_membership#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IotThingGroupMembership to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group_membership aws_iot_thing_group_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotThingGroupMembershipConfig
    */
    constructor(scope: Construct, id: string, config: IotThingGroupMembershipConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _overrideDynamicGroup?;
    get overrideDynamicGroup(): boolean | cdktf.IResolvable;
    set overrideDynamicGroup(value: boolean | cdktf.IResolvable);
    resetOverrideDynamicGroup(): void;
    get overrideDynamicGroupInput(): boolean | cdktf.IResolvable | undefined;
    private _thingGroupName?;
    get thingGroupName(): string;
    set thingGroupName(value: string);
    get thingGroupNameInput(): string | undefined;
    private _thingName?;
    get thingName(): string;
    set thingName(value: string);
    get thingNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
