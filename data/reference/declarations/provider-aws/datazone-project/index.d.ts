/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatazoneProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_project#description DatazoneProject#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_project#domain_identifier DatazoneProject#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_project#glossary_terms DatazoneProject#glossary_terms}
    */
    readonly glossaryTerms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_project#name DatazoneProject#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_project#skip_deletion_check DatazoneProject#skip_deletion_check}
    */
    readonly skipDeletionCheck?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_project#timeouts DatazoneProject#timeouts}
    */
    readonly timeouts?: DatazoneProjectTimeouts;
}
export interface DatazoneProjectFailureReasons {
}
export declare function datazoneProjectFailureReasonsToTerraform(struct?: DatazoneProjectFailureReasons): any;
export declare function datazoneProjectFailureReasonsToHclTerraform(struct?: DatazoneProjectFailureReasons): any;
export declare class DatazoneProjectFailureReasonsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatazoneProjectFailureReasons | undefined;
    set internalValue(value: DatazoneProjectFailureReasons | undefined);
    get code(): string;
    get message(): string;
}
export declare class DatazoneProjectFailureReasonsList extends cdktf.ComplexList {
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
    get(index: number): DatazoneProjectFailureReasonsOutputReference;
}
export interface DatazoneProjectTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_project#create DatazoneProject#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_project#delete DatazoneProject#delete}
    */
    readonly delete?: string;
}
export declare function datazoneProjectTimeoutsToTerraform(struct?: DatazoneProjectTimeouts | cdktf.IResolvable): any;
export declare function datazoneProjectTimeoutsToHclTerraform(struct?: DatazoneProjectTimeouts | cdktf.IResolvable): any;
export declare class DatazoneProjectTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatazoneProjectTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DatazoneProjectTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_project aws_datazone_project}
*/
export declare class DatazoneProject extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datazone_project";
    /**
    * Generates CDKTF code for importing a DatazoneProject resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatazoneProject to import
    * @param importFromId The id of the existing DatazoneProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatazoneProject to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_project aws_datazone_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatazoneProjectConfig
    */
    constructor(scope: Construct, id: string, config: DatazoneProjectConfig);
    get createdAt(): string;
    get createdBy(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _domainIdentifier?;
    get domainIdentifier(): string;
    set domainIdentifier(value: string);
    get domainIdentifierInput(): string | undefined;
    private _failureReasons;
    get failureReasons(): DatazoneProjectFailureReasonsList;
    private _glossaryTerms?;
    get glossaryTerms(): string[];
    set glossaryTerms(value: string[]);
    resetGlossaryTerms(): void;
    get glossaryTermsInput(): string[] | undefined;
    get id(): string;
    get lastUpdatedAt(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get projectStatus(): string;
    private _skipDeletionCheck?;
    get skipDeletionCheck(): boolean | cdktf.IResolvable;
    set skipDeletionCheck(value: boolean | cdktf.IResolvable);
    resetSkipDeletionCheck(): void;
    get skipDeletionCheckInput(): boolean | cdktf.IResolvable | undefined;
    private _timeouts;
    get timeouts(): DatazoneProjectTimeoutsOutputReference;
    putTimeouts(value: DatazoneProjectTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DatazoneProjectTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
