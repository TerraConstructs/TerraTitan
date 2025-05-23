/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppstreamFleetStackAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet_stack_association#fleet_name AppstreamFleetStackAssociation#fleet_name}
    */
    readonly fleetName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet_stack_association#id AppstreamFleetStackAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet_stack_association#stack_name AppstreamFleetStackAssociation#stack_name}
    */
    readonly stackName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet_stack_association aws_appstream_fleet_stack_association}
*/
export declare class AppstreamFleetStackAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appstream_fleet_stack_association";
    /**
    * Generates CDKTF code for importing a AppstreamFleetStackAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppstreamFleetStackAssociation to import
    * @param importFromId The id of the existing AppstreamFleetStackAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet_stack_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppstreamFleetStackAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet_stack_association aws_appstream_fleet_stack_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamFleetStackAssociationConfig
    */
    constructor(scope: Construct, id: string, config: AppstreamFleetStackAssociationConfig);
    private _fleetName?;
    get fleetName(): string;
    set fleetName(value: string);
    get fleetNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _stackName?;
    get stackName(): string;
    set stackName(value: string);
    get stackNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
