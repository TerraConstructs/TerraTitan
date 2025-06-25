/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatazoneDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_domain#description DatazoneDomain#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_domain#domain_execution_role DatazoneDomain#domain_execution_role}
    */
    readonly domainExecutionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_domain#kms_key_identifier DatazoneDomain#kms_key_identifier}
    */
    readonly kmsKeyIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_domain#name DatazoneDomain#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_domain#skip_deletion_check DatazoneDomain#skip_deletion_check}
    */
    readonly skipDeletionCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_domain#tags DatazoneDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * single_sign_on block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_domain#single_sign_on DatazoneDomain#single_sign_on}
    */
    readonly singleSignOn?: DatazoneDomainSingleSignOn[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_domain#timeouts DatazoneDomain#timeouts}
    */
    readonly timeouts?: DatazoneDomainTimeouts;
}
export interface DatazoneDomainSingleSignOn {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_domain#type DatazoneDomain#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_domain#user_assignment DatazoneDomain#user_assignment}
    */
    readonly userAssignment?: string;
}
export declare function datazoneDomainSingleSignOnToTerraform(struct?: DatazoneDomainSingleSignOn | cdktf.IResolvable): any;
export declare function datazoneDomainSingleSignOnToHclTerraform(struct?: DatazoneDomainSingleSignOn | cdktf.IResolvable): any;
export declare class DatazoneDomainSingleSignOnOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatazoneDomainSingleSignOn | cdktf.IResolvable | undefined;
    set internalValue(value: DatazoneDomainSingleSignOn | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _userAssignment?;
    get userAssignment(): string;
    set userAssignment(value: string);
    resetUserAssignment(): void;
    get userAssignmentInput(): string | undefined;
}
export declare class DatazoneDomainSingleSignOnList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DatazoneDomainSingleSignOn[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatazoneDomainSingleSignOnOutputReference;
}
export interface DatazoneDomainTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_domain#create DatazoneDomain#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_domain#delete DatazoneDomain#delete}
    */
    readonly delete?: string;
}
export declare function datazoneDomainTimeoutsToTerraform(struct?: DatazoneDomainTimeouts | cdktf.IResolvable): any;
export declare function datazoneDomainTimeoutsToHclTerraform(struct?: DatazoneDomainTimeouts | cdktf.IResolvable): any;
export declare class DatazoneDomainTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatazoneDomainTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DatazoneDomainTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_domain aws_datazone_domain}
*/
export declare class DatazoneDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datazone_domain";
    /**
    * Generates CDKTF code for importing a DatazoneDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatazoneDomain to import
    * @param importFromId The id of the existing DatazoneDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatazoneDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_domain aws_datazone_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatazoneDomainConfig
    */
    constructor(scope: Construct, id: string, config: DatazoneDomainConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _domainExecutionRole?;
    get domainExecutionRole(): string;
    set domainExecutionRole(value: string);
    get domainExecutionRoleInput(): string | undefined;
    get id(): string;
    private _kmsKeyIdentifier?;
    get kmsKeyIdentifier(): string;
    set kmsKeyIdentifier(value: string);
    resetKmsKeyIdentifier(): void;
    get kmsKeyIdentifierInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get portalUrl(): string;
    private _skipDeletionCheck?;
    get skipDeletionCheck(): boolean | cdktf.IResolvable;
    set skipDeletionCheck(value: boolean | cdktf.IResolvable);
    resetSkipDeletionCheck(): void;
    get skipDeletionCheckInput(): boolean | cdktf.IResolvable | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _singleSignOn;
    get singleSignOn(): DatazoneDomainSingleSignOnList;
    putSingleSignOn(value: DatazoneDomainSingleSignOn[] | cdktf.IResolvable): void;
    resetSingleSignOn(): void;
    get singleSignOnInput(): cdktf.IResolvable | DatazoneDomainSingleSignOn[] | undefined;
    private _timeouts;
    get timeouts(): DatazoneDomainTimeoutsOutputReference;
    putTimeouts(value: DatazoneDomainTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DatazoneDomainTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
