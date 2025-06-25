/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VerifiedpermissionsPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy#policy_store_id VerifiedpermissionsPolicy#policy_store_id}
    */
    readonly policyStoreId: string;
    /**
    * definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy#definition VerifiedpermissionsPolicy#definition}
    */
    readonly definition?: VerifiedpermissionsPolicyDefinition[] | cdktf.IResolvable;
}
export interface VerifiedpermissionsPolicyDefinitionStatic {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy#description VerifiedpermissionsPolicy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy#statement VerifiedpermissionsPolicy#statement}
    */
    readonly statement: string;
}
export declare function verifiedpermissionsPolicyDefinitionStaticToTerraform(struct?: VerifiedpermissionsPolicyDefinitionStatic | cdktf.IResolvable): any;
export declare function verifiedpermissionsPolicyDefinitionStaticToHclTerraform(struct?: VerifiedpermissionsPolicyDefinitionStatic | cdktf.IResolvable): any;
export declare class VerifiedpermissionsPolicyDefinitionStaticOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VerifiedpermissionsPolicyDefinitionStatic | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedpermissionsPolicyDefinitionStatic | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _statement?;
    get statement(): string;
    set statement(value: string);
    get statementInput(): string | undefined;
}
export declare class VerifiedpermissionsPolicyDefinitionStaticList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VerifiedpermissionsPolicyDefinitionStatic[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VerifiedpermissionsPolicyDefinitionStaticOutputReference;
}
export interface VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}
    */
    readonly entityId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}
    */
    readonly entityType: string;
}
export declare function verifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalToTerraform(struct?: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal | cdktf.IResolvable): any;
export declare function verifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalToHclTerraform(struct?: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal | cdktf.IResolvable): any;
export declare class VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal | cdktf.IResolvable | undefined);
    private _entityId?;
    get entityId(): string;
    set entityId(value: string);
    get entityIdInput(): string | undefined;
    private _entityType?;
    get entityType(): string;
    set entityType(value: string);
    get entityTypeInput(): string | undefined;
}
export declare class VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference;
}
export interface VerifiedpermissionsPolicyDefinitionTemplateLinkedResource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}
    */
    readonly entityId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}
    */
    readonly entityType: string;
}
export declare function verifiedpermissionsPolicyDefinitionTemplateLinkedResourceToTerraform(struct?: VerifiedpermissionsPolicyDefinitionTemplateLinkedResource | cdktf.IResolvable): any;
export declare function verifiedpermissionsPolicyDefinitionTemplateLinkedResourceToHclTerraform(struct?: VerifiedpermissionsPolicyDefinitionTemplateLinkedResource | cdktf.IResolvable): any;
export declare class VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VerifiedpermissionsPolicyDefinitionTemplateLinkedResource | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedpermissionsPolicyDefinitionTemplateLinkedResource | cdktf.IResolvable | undefined);
    private _entityId?;
    get entityId(): string;
    set entityId(value: string);
    get entityIdInput(): string | undefined;
    private _entityType?;
    get entityType(): string;
    set entityType(value: string);
    get entityTypeInput(): string | undefined;
}
export declare class VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VerifiedpermissionsPolicyDefinitionTemplateLinkedResource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference;
}
export interface VerifiedpermissionsPolicyDefinitionTemplateLinked {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy#policy_template_id VerifiedpermissionsPolicy#policy_template_id}
    */
    readonly policyTemplateId: string;
    /**
    * principal block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy#principal VerifiedpermissionsPolicy#principal}
    */
    readonly principal?: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal[] | cdktf.IResolvable;
    /**
    * resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy#resource VerifiedpermissionsPolicy#resource}
    */
    readonly resource?: VerifiedpermissionsPolicyDefinitionTemplateLinkedResource[] | cdktf.IResolvable;
}
export declare function verifiedpermissionsPolicyDefinitionTemplateLinkedToTerraform(struct?: VerifiedpermissionsPolicyDefinitionTemplateLinked | cdktf.IResolvable): any;
export declare function verifiedpermissionsPolicyDefinitionTemplateLinkedToHclTerraform(struct?: VerifiedpermissionsPolicyDefinitionTemplateLinked | cdktf.IResolvable): any;
export declare class VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VerifiedpermissionsPolicyDefinitionTemplateLinked | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedpermissionsPolicyDefinitionTemplateLinked | cdktf.IResolvable | undefined);
    private _policyTemplateId?;
    get policyTemplateId(): string;
    set policyTemplateId(value: string);
    get policyTemplateIdInput(): string | undefined;
    private _principal;
    get principal(): VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList;
    putPrincipal(value: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal[] | cdktf.IResolvable): void;
    resetPrincipal(): void;
    get principalInput(): cdktf.IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal[] | undefined;
    private _resource;
    get resource(): VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList;
    putResource(value: VerifiedpermissionsPolicyDefinitionTemplateLinkedResource[] | cdktf.IResolvable): void;
    resetResource(): void;
    get resourceInput(): cdktf.IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedResource[] | undefined;
}
export declare class VerifiedpermissionsPolicyDefinitionTemplateLinkedList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VerifiedpermissionsPolicyDefinitionTemplateLinked[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference;
}
export interface VerifiedpermissionsPolicyDefinition {
    /**
    * static block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy#static VerifiedpermissionsPolicy#static}
    */
    readonly static?: VerifiedpermissionsPolicyDefinitionStatic[] | cdktf.IResolvable;
    /**
    * template_linked block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy#template_linked VerifiedpermissionsPolicy#template_linked}
    */
    readonly templateLinked?: VerifiedpermissionsPolicyDefinitionTemplateLinked[] | cdktf.IResolvable;
}
export declare function verifiedpermissionsPolicyDefinitionToTerraform(struct?: VerifiedpermissionsPolicyDefinition | cdktf.IResolvable): any;
export declare function verifiedpermissionsPolicyDefinitionToHclTerraform(struct?: VerifiedpermissionsPolicyDefinition | cdktf.IResolvable): any;
export declare class VerifiedpermissionsPolicyDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VerifiedpermissionsPolicyDefinition | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedpermissionsPolicyDefinition | cdktf.IResolvable | undefined);
    private _static;
    get static(): VerifiedpermissionsPolicyDefinitionStaticList;
    putStatic(value: VerifiedpermissionsPolicyDefinitionStatic[] | cdktf.IResolvable): void;
    resetStatic(): void;
    get staticInput(): cdktf.IResolvable | VerifiedpermissionsPolicyDefinitionStatic[] | undefined;
    private _templateLinked;
    get templateLinked(): VerifiedpermissionsPolicyDefinitionTemplateLinkedList;
    putTemplateLinked(value: VerifiedpermissionsPolicyDefinitionTemplateLinked[] | cdktf.IResolvable): void;
    resetTemplateLinked(): void;
    get templateLinkedInput(): cdktf.IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinked[] | undefined;
}
export declare class VerifiedpermissionsPolicyDefinitionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VerifiedpermissionsPolicyDefinition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VerifiedpermissionsPolicyDefinitionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy aws_verifiedpermissions_policy}
*/
export declare class VerifiedpermissionsPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_verifiedpermissions_policy";
    /**
    * Generates CDKTF code for importing a VerifiedpermissionsPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VerifiedpermissionsPolicy to import
    * @param importFromId The id of the existing VerifiedpermissionsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VerifiedpermissionsPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_policy aws_verifiedpermissions_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VerifiedpermissionsPolicyConfig
    */
    constructor(scope: Construct, id: string, config: VerifiedpermissionsPolicyConfig);
    get createdDate(): string;
    get id(): string;
    get policyId(): string;
    private _policyStoreId?;
    get policyStoreId(): string;
    set policyStoreId(value: string);
    get policyStoreIdInput(): string | undefined;
    private _definition;
    get definition(): VerifiedpermissionsPolicyDefinitionList;
    putDefinition(value: VerifiedpermissionsPolicyDefinition[] | cdktf.IResolvable): void;
    resetDefinition(): void;
    get definitionInput(): cdktf.IResolvable | VerifiedpermissionsPolicyDefinition[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
