/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBackupSelectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_selection#id DataAwsBackupSelection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_selection#plan_id DataAwsBackupSelection#plan_id}
    */
    readonly planId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_selection#selection_id DataAwsBackupSelection#selection_id}
    */
    readonly selectionId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_selection aws_backup_selection}
*/
export declare class DataAwsBackupSelection extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_backup_selection";
    /**
    * Generates CDKTF code for importing a DataAwsBackupSelection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsBackupSelection to import
    * @param importFromId The id of the existing DataAwsBackupSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_selection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsBackupSelection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_selection aws_backup_selection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBackupSelectionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsBackupSelectionConfig);
    get iamRoleArn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    private _planId?;
    get planId(): string;
    set planId(value: string);
    get planIdInput(): string | undefined;
    get resources(): string[];
    private _selectionId?;
    get selectionId(): string;
    set selectionId(value: string);
    get selectionIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
