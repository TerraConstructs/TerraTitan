/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmMaintenanceWindowTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_target#description SsmMaintenanceWindowTarget#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_target#id SsmMaintenanceWindowTarget#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_target#name SsmMaintenanceWindowTarget#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_target#owner_information SsmMaintenanceWindowTarget#owner_information}
    */
    readonly ownerInformation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_target#resource_type SsmMaintenanceWindowTarget#resource_type}
    */
    readonly resourceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_target#window_id SsmMaintenanceWindowTarget#window_id}
    */
    readonly windowId: string;
    /**
    * targets block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_target#targets SsmMaintenanceWindowTarget#targets}
    */
    readonly targets: SsmMaintenanceWindowTargetTargets[] | cdktf.IResolvable;
}
export interface SsmMaintenanceWindowTargetTargets {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_target#key SsmMaintenanceWindowTarget#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_target#values SsmMaintenanceWindowTarget#values}
    */
    readonly values: string[];
}
export declare function ssmMaintenanceWindowTargetTargetsToTerraform(struct?: SsmMaintenanceWindowTargetTargets | cdktf.IResolvable): any;
export declare function ssmMaintenanceWindowTargetTargetsToHclTerraform(struct?: SsmMaintenanceWindowTargetTargets | cdktf.IResolvable): any;
export declare class SsmMaintenanceWindowTargetTargetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmMaintenanceWindowTargetTargets | cdktf.IResolvable | undefined;
    set internalValue(value: SsmMaintenanceWindowTargetTargets | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class SsmMaintenanceWindowTargetTargetsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmMaintenanceWindowTargetTargets[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmMaintenanceWindowTargetTargetsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_target aws_ssm_maintenance_window_target}
*/
export declare class SsmMaintenanceWindowTarget extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssm_maintenance_window_target";
    /**
    * Generates CDKTF code for importing a SsmMaintenanceWindowTarget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsmMaintenanceWindowTarget to import
    * @param importFromId The id of the existing SsmMaintenanceWindowTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsmMaintenanceWindowTarget to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_target aws_ssm_maintenance_window_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmMaintenanceWindowTargetConfig
    */
    constructor(scope: Construct, id: string, config: SsmMaintenanceWindowTargetConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _ownerInformation?;
    get ownerInformation(): string;
    set ownerInformation(value: string);
    resetOwnerInformation(): void;
    get ownerInformationInput(): string | undefined;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string | undefined;
    private _windowId?;
    get windowId(): string;
    set windowId(value: string);
    get windowIdInput(): string | undefined;
    private _targets;
    get targets(): SsmMaintenanceWindowTargetTargetsList;
    putTargets(value: SsmMaintenanceWindowTargetTargets[] | cdktf.IResolvable): void;
    get targetsInput(): cdktf.IResolvable | SsmMaintenanceWindowTargetTargets[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
