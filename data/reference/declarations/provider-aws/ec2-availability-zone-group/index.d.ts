/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2AvailabilityZoneGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_availability_zone_group#group_name Ec2AvailabilityZoneGroup#group_name}
    */
    readonly groupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_availability_zone_group#id Ec2AvailabilityZoneGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_availability_zone_group#opt_in_status Ec2AvailabilityZoneGroup#opt_in_status}
    */
    readonly optInStatus: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_availability_zone_group aws_ec2_availability_zone_group}
*/
export declare class Ec2AvailabilityZoneGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_availability_zone_group";
    /**
    * Generates CDKTF code for importing a Ec2AvailabilityZoneGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2AvailabilityZoneGroup to import
    * @param importFromId The id of the existing Ec2AvailabilityZoneGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_availability_zone_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2AvailabilityZoneGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_availability_zone_group aws_ec2_availability_zone_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2AvailabilityZoneGroupConfig
    */
    constructor(scope: Construct, id: string, config: Ec2AvailabilityZoneGroupConfig);
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    get groupNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _optInStatus?;
    get optInStatus(): string;
    set optInStatus(value: string);
    get optInStatusInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
