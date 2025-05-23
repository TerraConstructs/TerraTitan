/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSesv2EmailIdentityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_email_identity#email_identity DataAwsSesv2EmailIdentity#email_identity}
    */
    readonly emailIdentity: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_email_identity#id DataAwsSesv2EmailIdentity#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_email_identity#tags DataAwsSesv2EmailIdentity#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsSesv2EmailIdentityDkimSigningAttributes {
}
export declare function dataAwsSesv2EmailIdentityDkimSigningAttributesToTerraform(struct?: DataAwsSesv2EmailIdentityDkimSigningAttributes): any;
export declare function dataAwsSesv2EmailIdentityDkimSigningAttributesToHclTerraform(struct?: DataAwsSesv2EmailIdentityDkimSigningAttributes): any;
export declare class DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSesv2EmailIdentityDkimSigningAttributes | undefined;
    set internalValue(value: DataAwsSesv2EmailIdentityDkimSigningAttributes | undefined);
    get currentSigningKeyLength(): string;
    get domainSigningPrivateKey(): string;
    get domainSigningSelector(): string;
    get lastKeyGenerationTimestamp(): string;
    get nextSigningKeyLength(): string;
    get signingAttributesOrigin(): string;
    get status(): string;
    get tokens(): string[];
}
export declare class DataAwsSesv2EmailIdentityDkimSigningAttributesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_email_identity aws_sesv2_email_identity}
*/
export declare class DataAwsSesv2EmailIdentity extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_sesv2_email_identity";
    /**
    * Generates CDKTF code for importing a DataAwsSesv2EmailIdentity resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSesv2EmailIdentity to import
    * @param importFromId The id of the existing DataAwsSesv2EmailIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_email_identity#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSesv2EmailIdentity to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_email_identity aws_sesv2_email_identity} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSesv2EmailIdentityConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSesv2EmailIdentityConfig);
    get arn(): string;
    get configurationSetName(): string;
    private _dkimSigningAttributes;
    get dkimSigningAttributes(): DataAwsSesv2EmailIdentityDkimSigningAttributesList;
    private _emailIdentity?;
    get emailIdentity(): string;
    set emailIdentity(value: string);
    get emailIdentityInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get identityType(): string;
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
    get verifiedForSendingStatus(): cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
