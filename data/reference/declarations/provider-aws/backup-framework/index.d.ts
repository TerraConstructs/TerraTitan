/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupFrameworkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#description BackupFramework#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#id BackupFramework#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#name BackupFramework#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#tags BackupFramework#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#tags_all BackupFramework#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * control block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#control BackupFramework#control}
    */
    readonly control: BackupFrameworkControl[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#timeouts BackupFramework#timeouts}
    */
    readonly timeouts?: BackupFrameworkTimeouts;
}
export interface BackupFrameworkControlInputParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#name BackupFramework#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#value BackupFramework#value}
    */
    readonly value?: string;
}
export declare function backupFrameworkControlInputParameterToTerraform(struct?: BackupFrameworkControlInputParameter | cdktf.IResolvable): any;
export declare function backupFrameworkControlInputParameterToHclTerraform(struct?: BackupFrameworkControlInputParameter | cdktf.IResolvable): any;
export declare class BackupFrameworkControlInputParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BackupFrameworkControlInputParameter | cdktf.IResolvable | undefined;
    set internalValue(value: BackupFrameworkControlInputParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class BackupFrameworkControlInputParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BackupFrameworkControlInputParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BackupFrameworkControlInputParameterOutputReference;
}
export interface BackupFrameworkControlScope {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#compliance_resource_ids BackupFramework#compliance_resource_ids}
    */
    readonly complianceResourceIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#compliance_resource_types BackupFramework#compliance_resource_types}
    */
    readonly complianceResourceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#tags BackupFramework#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function backupFrameworkControlScopeToTerraform(struct?: BackupFrameworkControlScopeOutputReference | BackupFrameworkControlScope): any;
export declare function backupFrameworkControlScopeToHclTerraform(struct?: BackupFrameworkControlScopeOutputReference | BackupFrameworkControlScope): any;
export declare class BackupFrameworkControlScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BackupFrameworkControlScope | undefined;
    set internalValue(value: BackupFrameworkControlScope | undefined);
    private _complianceResourceIds?;
    get complianceResourceIds(): string[];
    set complianceResourceIds(value: string[]);
    resetComplianceResourceIds(): void;
    get complianceResourceIdsInput(): string[] | undefined;
    private _complianceResourceTypes?;
    get complianceResourceTypes(): string[];
    set complianceResourceTypes(value: string[]);
    resetComplianceResourceTypes(): void;
    get complianceResourceTypesInput(): string[] | undefined;
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
}
export interface BackupFrameworkControl {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#name BackupFramework#name}
    */
    readonly name: string;
    /**
    * input_parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#input_parameter BackupFramework#input_parameter}
    */
    readonly inputParameter?: BackupFrameworkControlInputParameter[] | cdktf.IResolvable;
    /**
    * scope block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#scope BackupFramework#scope}
    */
    readonly scope?: BackupFrameworkControlScope;
}
export declare function backupFrameworkControlToTerraform(struct?: BackupFrameworkControl | cdktf.IResolvable): any;
export declare function backupFrameworkControlToHclTerraform(struct?: BackupFrameworkControl | cdktf.IResolvable): any;
export declare class BackupFrameworkControlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BackupFrameworkControl | cdktf.IResolvable | undefined;
    set internalValue(value: BackupFrameworkControl | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _inputParameter;
    get inputParameter(): BackupFrameworkControlInputParameterList;
    putInputParameter(value: BackupFrameworkControlInputParameter[] | cdktf.IResolvable): void;
    resetInputParameter(): void;
    get inputParameterInput(): cdktf.IResolvable | BackupFrameworkControlInputParameter[] | undefined;
    private _scope;
    get scope(): BackupFrameworkControlScopeOutputReference;
    putScope(value: BackupFrameworkControlScope): void;
    resetScope(): void;
    get scopeInput(): BackupFrameworkControlScope | undefined;
}
export declare class BackupFrameworkControlList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BackupFrameworkControl[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BackupFrameworkControlOutputReference;
}
export interface BackupFrameworkTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#create BackupFramework#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#delete BackupFramework#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#update BackupFramework#update}
    */
    readonly update?: string;
}
export declare function backupFrameworkTimeoutsToTerraform(struct?: BackupFrameworkTimeouts | cdktf.IResolvable): any;
export declare function backupFrameworkTimeoutsToHclTerraform(struct?: BackupFrameworkTimeouts | cdktf.IResolvable): any;
export declare class BackupFrameworkTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BackupFrameworkTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BackupFrameworkTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework aws_backup_framework}
*/
export declare class BackupFramework extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_backup_framework";
    /**
    * Generates CDKTF code for importing a BackupFramework resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BackupFramework to import
    * @param importFromId The id of the existing BackupFramework that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BackupFramework to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_framework aws_backup_framework} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupFrameworkConfig
    */
    constructor(scope: Construct, id: string, config: BackupFrameworkConfig);
    get arn(): string;
    get creationTime(): string;
    get deploymentStatus(): string;
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
    private _control;
    get control(): BackupFrameworkControlList;
    putControl(value: BackupFrameworkControl[] | cdktf.IResolvable): void;
    get controlInput(): cdktf.IResolvable | BackupFrameworkControl[] | undefined;
    private _timeouts;
    get timeouts(): BackupFrameworkTimeoutsOutputReference;
    putTimeouts(value: BackupFrameworkTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BackupFrameworkTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
