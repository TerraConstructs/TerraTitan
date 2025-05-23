/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DetectiveOrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/detective_organization_configuration#auto_enable DetectiveOrganizationConfiguration#auto_enable}
    */
    readonly autoEnable: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/detective_organization_configuration#graph_arn DetectiveOrganizationConfiguration#graph_arn}
    */
    readonly graphArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/detective_organization_configuration#id DetectiveOrganizationConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/detective_organization_configuration aws_detective_organization_configuration}
*/
export declare class DetectiveOrganizationConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_detective_organization_configuration";
    /**
    * Generates CDKTF code for importing a DetectiveOrganizationConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DetectiveOrganizationConfiguration to import
    * @param importFromId The id of the existing DetectiveOrganizationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/detective_organization_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DetectiveOrganizationConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/detective_organization_configuration aws_detective_organization_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DetectiveOrganizationConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DetectiveOrganizationConfigurationConfig);
    private _autoEnable?;
    get autoEnable(): boolean | cdktf.IResolvable;
    set autoEnable(value: boolean | cdktf.IResolvable);
    get autoEnableInput(): boolean | cdktf.IResolvable | undefined;
    private _graphArn?;
    get graphArn(): string;
    set graphArn(value: string);
    get graphArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
