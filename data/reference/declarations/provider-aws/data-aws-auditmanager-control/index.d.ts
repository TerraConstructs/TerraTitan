/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAuditmanagerControlConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/auditmanager_control#name DataAwsAuditmanagerControl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/auditmanager_control#type DataAwsAuditmanagerControl#type}
    */
    readonly type: string;
    /**
    * control_mapping_sources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/auditmanager_control#control_mapping_sources DataAwsAuditmanagerControl#control_mapping_sources}
    */
    readonly controlMappingSources?: DataAwsAuditmanagerControlControlMappingSources[] | cdktf.IResolvable;
}
export interface DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword {
}
export declare function dataAwsAuditmanagerControlControlMappingSourcesSourceKeywordToTerraform(struct?: DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword | cdktf.IResolvable): any;
export declare function dataAwsAuditmanagerControlControlMappingSourcesSourceKeywordToHclTerraform(struct?: DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword | cdktf.IResolvable): any;
export declare class DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword | cdktf.IResolvable | undefined);
    get keywordInputType(): string;
    get keywordValue(): string;
}
export declare class DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference;
}
export interface DataAwsAuditmanagerControlControlMappingSources {
    /**
    * source_keyword block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/auditmanager_control#source_keyword DataAwsAuditmanagerControl#source_keyword}
    */
    readonly sourceKeyword?: DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword[] | cdktf.IResolvable;
}
export declare function dataAwsAuditmanagerControlControlMappingSourcesToTerraform(struct?: DataAwsAuditmanagerControlControlMappingSources | cdktf.IResolvable): any;
export declare function dataAwsAuditmanagerControlControlMappingSourcesToHclTerraform(struct?: DataAwsAuditmanagerControlControlMappingSources | cdktf.IResolvable): any;
export declare class DataAwsAuditmanagerControlControlMappingSourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAuditmanagerControlControlMappingSources | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsAuditmanagerControlControlMappingSources | cdktf.IResolvable | undefined);
    get sourceDescription(): string;
    get sourceFrequency(): string;
    get sourceId(): string;
    get sourceName(): string;
    get sourceSetUpOption(): string;
    get sourceType(): string;
    get troubleshootingText(): string;
    private _sourceKeyword;
    get sourceKeyword(): DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList;
    putSourceKeyword(value: DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword[] | cdktf.IResolvable): void;
    resetSourceKeyword(): void;
    get sourceKeywordInput(): cdktf.IResolvable | DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword[] | undefined;
}
export declare class DataAwsAuditmanagerControlControlMappingSourcesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsAuditmanagerControlControlMappingSources[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAuditmanagerControlControlMappingSourcesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/auditmanager_control aws_auditmanager_control}
*/
export declare class DataAwsAuditmanagerControl extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_auditmanager_control";
    /**
    * Generates CDKTF code for importing a DataAwsAuditmanagerControl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAuditmanagerControl to import
    * @param importFromId The id of the existing DataAwsAuditmanagerControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/auditmanager_control#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAuditmanagerControl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/auditmanager_control aws_auditmanager_control} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAuditmanagerControlConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAuditmanagerControlConfig);
    get actionPlanInstructions(): string;
    get actionPlanTitle(): string;
    get arn(): string;
    get description(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _tags;
    get tags(): cdktf.StringMap;
    get testingInformation(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _controlMappingSources;
    get controlMappingSources(): DataAwsAuditmanagerControlControlMappingSourcesList;
    putControlMappingSources(value: DataAwsAuditmanagerControlControlMappingSources[] | cdktf.IResolvable): void;
    resetControlMappingSources(): void;
    get controlMappingSourcesInput(): cdktf.IResolvable | DataAwsAuditmanagerControlControlMappingSources[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
