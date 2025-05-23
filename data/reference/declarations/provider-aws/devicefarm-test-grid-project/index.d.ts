/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DevicefarmTestGridProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_test_grid_project#description DevicefarmTestGridProject#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_test_grid_project#id DevicefarmTestGridProject#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_test_grid_project#name DevicefarmTestGridProject#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_test_grid_project#tags DevicefarmTestGridProject#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_test_grid_project#tags_all DevicefarmTestGridProject#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_test_grid_project#vpc_config DevicefarmTestGridProject#vpc_config}
    */
    readonly vpcConfig?: DevicefarmTestGridProjectVpcConfig;
}
export interface DevicefarmTestGridProjectVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_test_grid_project#security_group_ids DevicefarmTestGridProject#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_test_grid_project#subnet_ids DevicefarmTestGridProject#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_test_grid_project#vpc_id DevicefarmTestGridProject#vpc_id}
    */
    readonly vpcId: string;
}
export declare function devicefarmTestGridProjectVpcConfigToTerraform(struct?: DevicefarmTestGridProjectVpcConfigOutputReference | DevicefarmTestGridProjectVpcConfig): any;
export declare function devicefarmTestGridProjectVpcConfigToHclTerraform(struct?: DevicefarmTestGridProjectVpcConfigOutputReference | DevicefarmTestGridProjectVpcConfig): any;
export declare class DevicefarmTestGridProjectVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DevicefarmTestGridProjectVpcConfig | undefined;
    set internalValue(value: DevicefarmTestGridProjectVpcConfig | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_test_grid_project aws_devicefarm_test_grid_project}
*/
export declare class DevicefarmTestGridProject extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_devicefarm_test_grid_project";
    /**
    * Generates CDKTF code for importing a DevicefarmTestGridProject resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DevicefarmTestGridProject to import
    * @param importFromId The id of the existing DevicefarmTestGridProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_test_grid_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DevicefarmTestGridProject to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_test_grid_project aws_devicefarm_test_grid_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DevicefarmTestGridProjectConfig
    */
    constructor(scope: Construct, id: string, config: DevicefarmTestGridProjectConfig);
    get arn(): string;
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
    get nameInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _vpcConfig;
    get vpcConfig(): DevicefarmTestGridProjectVpcConfigOutputReference;
    putVpcConfig(value: DevicefarmTestGridProjectVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): DevicefarmTestGridProjectVpcConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
