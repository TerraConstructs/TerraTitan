/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IdentitystoreGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_group#description IdentitystoreGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_group#display_name IdentitystoreGroup#display_name}
    */
    readonly displayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_group#id IdentitystoreGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_group#identity_store_id IdentitystoreGroup#identity_store_id}
    */
    readonly identityStoreId: string;
}
export interface IdentitystoreGroupExternalIds {
}
export declare function identitystoreGroupExternalIdsToTerraform(struct?: IdentitystoreGroupExternalIds): any;
export declare function identitystoreGroupExternalIdsToHclTerraform(struct?: IdentitystoreGroupExternalIds): any;
export declare class IdentitystoreGroupExternalIdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IdentitystoreGroupExternalIds | undefined;
    set internalValue(value: IdentitystoreGroupExternalIds | undefined);
    get id(): string;
    get issuer(): string;
}
export declare class IdentitystoreGroupExternalIdsList extends cdktf.ComplexList {
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
    get(index: number): IdentitystoreGroupExternalIdsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_group aws_identitystore_group}
*/
export declare class IdentitystoreGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_identitystore_group";
    /**
    * Generates CDKTF code for importing a IdentitystoreGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentitystoreGroup to import
    * @param importFromId The id of the existing IdentitystoreGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentitystoreGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_group aws_identitystore_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentitystoreGroupConfig
    */
    constructor(scope: Construct, id: string, config: IdentitystoreGroupConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    get displayNameInput(): string | undefined;
    private _externalIds;
    get externalIds(): IdentitystoreGroupExternalIdsList;
    get groupId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identityStoreId?;
    get identityStoreId(): string;
    set identityStoreId(value: string);
    get identityStoreIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
