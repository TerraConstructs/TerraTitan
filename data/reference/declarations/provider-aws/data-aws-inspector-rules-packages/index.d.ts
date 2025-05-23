/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsInspectorRulesPackagesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/inspector_rules_packages#id DataAwsInspectorRulesPackages#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/inspector_rules_packages aws_inspector_rules_packages}
*/
export declare class DataAwsInspectorRulesPackages extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_inspector_rules_packages";
    /**
    * Generates CDKTF code for importing a DataAwsInspectorRulesPackages resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsInspectorRulesPackages to import
    * @param importFromId The id of the existing DataAwsInspectorRulesPackages that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/inspector_rules_packages#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsInspectorRulesPackages to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/inspector_rules_packages aws_inspector_rules_packages} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsInspectorRulesPackagesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsInspectorRulesPackagesConfig);
    get arns(): string[];
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
