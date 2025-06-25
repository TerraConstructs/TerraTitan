/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsFisExperimentTemplatesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/fis_experiment_templates#tags DataAwsFisExperimentTemplates#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/fis_experiment_templates aws_fis_experiment_templates}
*/
export declare class DataAwsFisExperimentTemplates extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_fis_experiment_templates";
    /**
    * Generates CDKTF code for importing a DataAwsFisExperimentTemplates resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsFisExperimentTemplates to import
    * @param importFromId The id of the existing DataAwsFisExperimentTemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/fis_experiment_templates#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsFisExperimentTemplates to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/fis_experiment_templates aws_fis_experiment_templates} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsFisExperimentTemplatesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsFisExperimentTemplatesConfig);
    get ids(): string[];
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
