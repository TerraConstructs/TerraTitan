/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#aws_account_id QuicksightTemplate#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#id QuicksightTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#tags QuicksightTemplate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#tags_all QuicksightTemplate#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#template_id QuicksightTemplate#template_id}
    */
    readonly templateId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#version_description QuicksightTemplate#version_description}
    */
    readonly versionDescription: string;
    /**
    * definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#definition QuicksightTemplate#definition}
    */
    readonly definition?: any;
    /**
    * permissions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#permissions QuicksightTemplate#permissions}
    */
    readonly permissions?: QuicksightTemplatePermissions[] | cdktf.IResolvable;
    /**
    * source_entity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#source_entity QuicksightTemplate#source_entity}
    */
    readonly sourceEntity?: QuicksightTemplateSourceEntity;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#timeouts QuicksightTemplate#timeouts}
    */
    readonly timeouts?: QuicksightTemplateTimeouts;
}
export interface QuicksightTemplatePermissions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#actions QuicksightTemplate#actions}
    */
    readonly actions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#principal QuicksightTemplate#principal}
    */
    readonly principal: string;
}
export declare function quicksightTemplatePermissionsToTerraform(struct?: QuicksightTemplatePermissions | cdktf.IResolvable): any;
export declare function quicksightTemplatePermissionsToHclTerraform(struct?: QuicksightTemplatePermissions | cdktf.IResolvable): any;
export declare class QuicksightTemplatePermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightTemplatePermissions | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightTemplatePermissions | cdktf.IResolvable | undefined);
    private _actions?;
    get actions(): string[];
    set actions(value: string[]);
    get actionsInput(): string[] | undefined;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
}
export declare class QuicksightTemplatePermissionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightTemplatePermissions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightTemplatePermissionsOutputReference;
}
export interface QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#data_set_arn QuicksightTemplate#data_set_arn}
    */
    readonly dataSetArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#data_set_placeholder QuicksightTemplate#data_set_placeholder}
    */
    readonly dataSetPlaceholder: string;
}
export declare function quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform(struct?: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences | cdktf.IResolvable): any;
export declare function quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToHclTerraform(struct?: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences | cdktf.IResolvable): any;
export declare class QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences | cdktf.IResolvable | undefined);
    private _dataSetArn?;
    get dataSetArn(): string;
    set dataSetArn(value: string);
    get dataSetArnInput(): string | undefined;
    private _dataSetPlaceholder?;
    get dataSetPlaceholder(): string;
    set dataSetPlaceholder(value: string);
    get dataSetPlaceholderInput(): string | undefined;
}
export declare class QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference;
}
export interface QuicksightTemplateSourceEntitySourceAnalysis {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}
    */
    readonly arn: string;
    /**
    * data_set_references block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#data_set_references QuicksightTemplate#data_set_references}
    */
    readonly dataSetReferences: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences[] | cdktf.IResolvable;
}
export declare function quicksightTemplateSourceEntitySourceAnalysisToTerraform(struct?: QuicksightTemplateSourceEntitySourceAnalysisOutputReference | QuicksightTemplateSourceEntitySourceAnalysis): any;
export declare function quicksightTemplateSourceEntitySourceAnalysisToHclTerraform(struct?: QuicksightTemplateSourceEntitySourceAnalysisOutputReference | QuicksightTemplateSourceEntitySourceAnalysis): any;
export declare class QuicksightTemplateSourceEntitySourceAnalysisOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightTemplateSourceEntitySourceAnalysis | undefined;
    set internalValue(value: QuicksightTemplateSourceEntitySourceAnalysis | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _dataSetReferences;
    get dataSetReferences(): QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList;
    putDataSetReferences(value: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences[] | cdktf.IResolvable): void;
    get dataSetReferencesInput(): cdktf.IResolvable | QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences[] | undefined;
}
export interface QuicksightTemplateSourceEntitySourceTemplate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}
    */
    readonly arn: string;
}
export declare function quicksightTemplateSourceEntitySourceTemplateToTerraform(struct?: QuicksightTemplateSourceEntitySourceTemplateOutputReference | QuicksightTemplateSourceEntitySourceTemplate): any;
export declare function quicksightTemplateSourceEntitySourceTemplateToHclTerraform(struct?: QuicksightTemplateSourceEntitySourceTemplateOutputReference | QuicksightTemplateSourceEntitySourceTemplate): any;
export declare class QuicksightTemplateSourceEntitySourceTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightTemplateSourceEntitySourceTemplate | undefined;
    set internalValue(value: QuicksightTemplateSourceEntitySourceTemplate | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
}
export interface QuicksightTemplateSourceEntity {
    /**
    * source_analysis block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#source_analysis QuicksightTemplate#source_analysis}
    */
    readonly sourceAnalysis?: QuicksightTemplateSourceEntitySourceAnalysis;
    /**
    * source_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#source_template QuicksightTemplate#source_template}
    */
    readonly sourceTemplate?: QuicksightTemplateSourceEntitySourceTemplate;
}
export declare function quicksightTemplateSourceEntityToTerraform(struct?: QuicksightTemplateSourceEntityOutputReference | QuicksightTemplateSourceEntity): any;
export declare function quicksightTemplateSourceEntityToHclTerraform(struct?: QuicksightTemplateSourceEntityOutputReference | QuicksightTemplateSourceEntity): any;
export declare class QuicksightTemplateSourceEntityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightTemplateSourceEntity | undefined;
    set internalValue(value: QuicksightTemplateSourceEntity | undefined);
    private _sourceAnalysis;
    get sourceAnalysis(): QuicksightTemplateSourceEntitySourceAnalysisOutputReference;
    putSourceAnalysis(value: QuicksightTemplateSourceEntitySourceAnalysis): void;
    resetSourceAnalysis(): void;
    get sourceAnalysisInput(): QuicksightTemplateSourceEntitySourceAnalysis | undefined;
    private _sourceTemplate;
    get sourceTemplate(): QuicksightTemplateSourceEntitySourceTemplateOutputReference;
    putSourceTemplate(value: QuicksightTemplateSourceEntitySourceTemplate): void;
    resetSourceTemplate(): void;
    get sourceTemplateInput(): QuicksightTemplateSourceEntitySourceTemplate | undefined;
}
export interface QuicksightTemplateTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#create QuicksightTemplate#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#delete QuicksightTemplate#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#update QuicksightTemplate#update}
    */
    readonly update?: string;
}
export declare function quicksightTemplateTimeoutsToTerraform(struct?: QuicksightTemplateTimeouts | cdktf.IResolvable): any;
export declare function quicksightTemplateTimeoutsToHclTerraform(struct?: QuicksightTemplateTimeouts | cdktf.IResolvable): any;
export declare class QuicksightTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightTemplateTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightTemplateTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template aws_quicksight_template}
*/
export declare class QuicksightTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_quicksight_template";
    /**
    * Generates CDKTF code for importing a QuicksightTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QuicksightTemplate to import
    * @param importFromId The id of the existing QuicksightTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QuicksightTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template aws_quicksight_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightTemplateConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightTemplateConfig);
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    get createdTime(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get sourceEntityArn(): string;
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
    private _templateId?;
    get templateId(): string;
    set templateId(value: string);
    get templateIdInput(): string | undefined;
    private _versionDescription?;
    get versionDescription(): string;
    set versionDescription(value: string);
    get versionDescriptionInput(): string | undefined;
    get versionNumber(): number;
    private _definition?;
    get definition(): any;
    set definition(value: any);
    resetDefinition(): void;
    get definitionInput(): any;
    private _permissions;
    get permissions(): QuicksightTemplatePermissionsList;
    putPermissions(value: QuicksightTemplatePermissions[] | cdktf.IResolvable): void;
    resetPermissions(): void;
    get permissionsInput(): cdktf.IResolvable | QuicksightTemplatePermissions[] | undefined;
    private _sourceEntity;
    get sourceEntity(): QuicksightTemplateSourceEntityOutputReference;
    putSourceEntity(value: QuicksightTemplateSourceEntity): void;
    resetSourceEntity(): void;
    get sourceEntityInput(): QuicksightTemplateSourceEntity | undefined;
    private _timeouts;
    get timeouts(): QuicksightTemplateTimeoutsOutputReference;
    putTimeouts(value: QuicksightTemplateTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | QuicksightTemplateTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
