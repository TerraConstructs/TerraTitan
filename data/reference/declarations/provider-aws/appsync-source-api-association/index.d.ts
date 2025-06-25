/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppsyncSourceApiAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appsync_source_api_association#description AppsyncSourceApiAssociation#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appsync_source_api_association#merged_api_arn AppsyncSourceApiAssociation#merged_api_arn}
    */
    readonly mergedApiArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appsync_source_api_association#merged_api_id AppsyncSourceApiAssociation#merged_api_id}
    */
    readonly mergedApiId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appsync_source_api_association#source_api_arn AppsyncSourceApiAssociation#source_api_arn}
    */
    readonly sourceApiArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appsync_source_api_association#source_api_association_config AppsyncSourceApiAssociation#source_api_association_config}
    */
    readonly sourceApiAssociationConfig?: AppsyncSourceApiAssociationSourceApiAssociationConfig[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appsync_source_api_association#source_api_id AppsyncSourceApiAssociation#source_api_id}
    */
    readonly sourceApiId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appsync_source_api_association#timeouts AppsyncSourceApiAssociation#timeouts}
    */
    readonly timeouts?: AppsyncSourceApiAssociationTimeouts;
}
export interface AppsyncSourceApiAssociationSourceApiAssociationConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appsync_source_api_association#merge_type AppsyncSourceApiAssociation#merge_type}
    */
    readonly mergeType?: string;
}
export declare function appsyncSourceApiAssociationSourceApiAssociationConfigToTerraform(struct?: AppsyncSourceApiAssociationSourceApiAssociationConfig | cdktf.IResolvable): any;
export declare function appsyncSourceApiAssociationSourceApiAssociationConfigToHclTerraform(struct?: AppsyncSourceApiAssociationSourceApiAssociationConfig | cdktf.IResolvable): any;
export declare class AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppsyncSourceApiAssociationSourceApiAssociationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: AppsyncSourceApiAssociationSourceApiAssociationConfig | cdktf.IResolvable | undefined);
    private _mergeType?;
    get mergeType(): string;
    set mergeType(value: string);
    resetMergeType(): void;
    get mergeTypeInput(): string | undefined;
}
export declare class AppsyncSourceApiAssociationSourceApiAssociationConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppsyncSourceApiAssociationSourceApiAssociationConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference;
}
export interface AppsyncSourceApiAssociationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appsync_source_api_association#create AppsyncSourceApiAssociation#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appsync_source_api_association#delete AppsyncSourceApiAssociation#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appsync_source_api_association#update AppsyncSourceApiAssociation#update}
    */
    readonly update?: string;
}
export declare function appsyncSourceApiAssociationTimeoutsToTerraform(struct?: AppsyncSourceApiAssociationTimeouts | cdktf.IResolvable): any;
export declare function appsyncSourceApiAssociationTimeoutsToHclTerraform(struct?: AppsyncSourceApiAssociationTimeouts | cdktf.IResolvable): any;
export declare class AppsyncSourceApiAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncSourceApiAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AppsyncSourceApiAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appsync_source_api_association aws_appsync_source_api_association}
*/
export declare class AppsyncSourceApiAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appsync_source_api_association";
    /**
    * Generates CDKTF code for importing a AppsyncSourceApiAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppsyncSourceApiAssociation to import
    * @param importFromId The id of the existing AppsyncSourceApiAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appsync_source_api_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppsyncSourceApiAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appsync_source_api_association aws_appsync_source_api_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncSourceApiAssociationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: AppsyncSourceApiAssociationConfig);
    get arn(): string;
    get associationId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _mergedApiArn?;
    get mergedApiArn(): string;
    set mergedApiArn(value: string);
    resetMergedApiArn(): void;
    get mergedApiArnInput(): string | undefined;
    private _mergedApiId?;
    get mergedApiId(): string;
    set mergedApiId(value: string);
    resetMergedApiId(): void;
    get mergedApiIdInput(): string | undefined;
    private _sourceApiArn?;
    get sourceApiArn(): string;
    set sourceApiArn(value: string);
    resetSourceApiArn(): void;
    get sourceApiArnInput(): string | undefined;
    private _sourceApiAssociationConfig;
    get sourceApiAssociationConfig(): AppsyncSourceApiAssociationSourceApiAssociationConfigList;
    putSourceApiAssociationConfig(value: AppsyncSourceApiAssociationSourceApiAssociationConfig[] | cdktf.IResolvable): void;
    resetSourceApiAssociationConfig(): void;
    get sourceApiAssociationConfigInput(): cdktf.IResolvable | AppsyncSourceApiAssociationSourceApiAssociationConfig[] | undefined;
    private _sourceApiId?;
    get sourceApiId(): string;
    set sourceApiId(value: string);
    resetSourceApiId(): void;
    get sourceApiIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): AppsyncSourceApiAssociationTimeoutsOutputReference;
    putTimeouts(value: AppsyncSourceApiAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AppsyncSourceApiAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
