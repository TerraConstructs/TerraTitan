/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBackupFrameworkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_framework#id DataAwsBackupFramework#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_framework#name DataAwsBackupFramework#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_framework#tags DataAwsBackupFramework#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsBackupFrameworkControlInputParameter {
}
export declare function dataAwsBackupFrameworkControlInputParameterToTerraform(struct?: DataAwsBackupFrameworkControlInputParameter): any;
export declare function dataAwsBackupFrameworkControlInputParameterToHclTerraform(struct?: DataAwsBackupFrameworkControlInputParameter): any;
export declare class DataAwsBackupFrameworkControlInputParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBackupFrameworkControlInputParameter | undefined;
    set internalValue(value: DataAwsBackupFrameworkControlInputParameter | undefined);
    get name(): string;
    get value(): string;
}
export declare class DataAwsBackupFrameworkControlInputParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsBackupFrameworkControlInputParameterOutputReference;
}
export interface DataAwsBackupFrameworkControlScope {
}
export declare function dataAwsBackupFrameworkControlScopeToTerraform(struct?: DataAwsBackupFrameworkControlScope): any;
export declare function dataAwsBackupFrameworkControlScopeToHclTerraform(struct?: DataAwsBackupFrameworkControlScope): any;
export declare class DataAwsBackupFrameworkControlScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBackupFrameworkControlScope | undefined;
    set internalValue(value: DataAwsBackupFrameworkControlScope | undefined);
    get complianceResourceIds(): string[];
    get complianceResourceTypes(): string[];
    private _tags;
    get tags(): cdktf.StringMap;
}
export declare class DataAwsBackupFrameworkControlScopeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsBackupFrameworkControlScopeOutputReference;
}
export interface DataAwsBackupFrameworkControl {
}
export declare function dataAwsBackupFrameworkControlToTerraform(struct?: DataAwsBackupFrameworkControl): any;
export declare function dataAwsBackupFrameworkControlToHclTerraform(struct?: DataAwsBackupFrameworkControl): any;
export declare class DataAwsBackupFrameworkControlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBackupFrameworkControl | undefined;
    set internalValue(value: DataAwsBackupFrameworkControl | undefined);
    private _inputParameter;
    get inputParameter(): DataAwsBackupFrameworkControlInputParameterList;
    get name(): string;
    private _scope;
    get scope(): DataAwsBackupFrameworkControlScopeList;
}
export declare class DataAwsBackupFrameworkControlList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsBackupFrameworkControlOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_framework aws_backup_framework}
*/
export declare class DataAwsBackupFramework extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_backup_framework";
    /**
    * Generates CDKTF code for importing a DataAwsBackupFramework resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsBackupFramework to import
    * @param importFromId The id of the existing DataAwsBackupFramework that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_framework#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsBackupFramework to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_framework aws_backup_framework} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBackupFrameworkConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsBackupFrameworkConfig);
    get arn(): string;
    private _control;
    get control(): DataAwsBackupFrameworkControlList;
    get creationTime(): string;
    get deploymentStatus(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get status(): string;
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
