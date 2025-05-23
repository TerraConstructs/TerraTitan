/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface M2ApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application#description M2Application#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application#engine_type M2Application#engine_type}
    */
    readonly engineType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application#kms_key_id M2Application#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application#name M2Application#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application#role_arn M2Application#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application#tags M2Application#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application#definition M2Application#definition}
    */
    readonly definition?: M2ApplicationDefinition[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application#timeouts M2Application#timeouts}
    */
    readonly timeouts?: M2ApplicationTimeouts;
}
export interface M2ApplicationDefinition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application#content M2Application#content}
    */
    readonly content?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application#s3_location M2Application#s3_location}
    */
    readonly s3Location?: string;
}
export declare function m2ApplicationDefinitionToTerraform(struct?: M2ApplicationDefinition | cdktf.IResolvable): any;
export declare function m2ApplicationDefinitionToHclTerraform(struct?: M2ApplicationDefinition | cdktf.IResolvable): any;
export declare class M2ApplicationDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): M2ApplicationDefinition | cdktf.IResolvable | undefined;
    set internalValue(value: M2ApplicationDefinition | cdktf.IResolvable | undefined);
    private _content?;
    get content(): string;
    set content(value: string);
    resetContent(): void;
    get contentInput(): string | undefined;
    private _s3Location?;
    get s3Location(): string;
    set s3Location(value: string);
    resetS3Location(): void;
    get s3LocationInput(): string | undefined;
}
export declare class M2ApplicationDefinitionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: M2ApplicationDefinition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): M2ApplicationDefinitionOutputReference;
}
export interface M2ApplicationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application#create M2Application#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application#delete M2Application#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application#update M2Application#update}
    */
    readonly update?: string;
}
export declare function m2ApplicationTimeoutsToTerraform(struct?: M2ApplicationTimeouts | cdktf.IResolvable): any;
export declare function m2ApplicationTimeoutsToHclTerraform(struct?: M2ApplicationTimeouts | cdktf.IResolvable): any;
export declare class M2ApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): M2ApplicationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: M2ApplicationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application aws_m2_application}
*/
export declare class M2Application extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_m2_application";
    /**
    * Generates CDKTF code for importing a M2Application resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the M2Application to import
    * @param importFromId The id of the existing M2Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the M2Application to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_application aws_m2_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options M2ApplicationConfig
    */
    constructor(scope: Construct, id: string, config: M2ApplicationConfig);
    get applicationId(): string;
    get arn(): string;
    get currentVersion(): number;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _engineType?;
    get engineType(): string;
    set engineType(value: string);
    get engineTypeInput(): string | undefined;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
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
    private _definition;
    get definition(): M2ApplicationDefinitionList;
    putDefinition(value: M2ApplicationDefinition[] | cdktf.IResolvable): void;
    resetDefinition(): void;
    get definitionInput(): cdktf.IResolvable | M2ApplicationDefinition[] | undefined;
    private _timeouts;
    get timeouts(): M2ApplicationTimeoutsOutputReference;
    putTimeouts(value: M2ApplicationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | M2ApplicationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
