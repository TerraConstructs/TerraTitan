/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontFieldLevelEncryptionProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_profile#comment CloudfrontFieldLevelEncryptionProfile#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_profile#id CloudfrontFieldLevelEncryptionProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_profile#name CloudfrontFieldLevelEncryptionProfile#name}
    */
    readonly name: string;
    /**
    * encryption_entities block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_profile#encryption_entities CloudfrontFieldLevelEncryptionProfile#encryption_entities}
    */
    readonly encryptionEntities: CloudfrontFieldLevelEncryptionProfileEncryptionEntities;
}
export interface CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_profile#items CloudfrontFieldLevelEncryptionProfile#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsToTerraform(struct?: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference | CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns): any;
export declare function cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsToHclTerraform(struct?: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference | CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns): any;
export declare class CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns | undefined;
    set internalValue(value: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[] | undefined;
}
export interface CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_profile#provider_id CloudfrontFieldLevelEncryptionProfile#provider_id}
    */
    readonly providerId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_profile#public_key_id CloudfrontFieldLevelEncryptionProfile#public_key_id}
    */
    readonly publicKeyId: string;
    /**
    * field_patterns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_profile#field_patterns CloudfrontFieldLevelEncryptionProfile#field_patterns}
    */
    readonly fieldPatterns: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns;
}
export declare function cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsToTerraform(struct?: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems | cdktf.IResolvable): any;
export declare function cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsToHclTerraform(struct?: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems | cdktf.IResolvable): any;
export declare class CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems | cdktf.IResolvable | undefined);
    private _providerId?;
    get providerId(): string;
    set providerId(value: string);
    get providerIdInput(): string | undefined;
    private _publicKeyId?;
    get publicKeyId(): string;
    set publicKeyId(value: string);
    get publicKeyIdInput(): string | undefined;
    private _fieldPatterns;
    get fieldPatterns(): CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference;
    putFieldPatterns(value: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns): void;
    get fieldPatternsInput(): CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns | undefined;
}
export declare class CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference;
}
export interface CloudfrontFieldLevelEncryptionProfileEncryptionEntities {
    /**
    * items block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_profile#items CloudfrontFieldLevelEncryptionProfile#items}
    */
    readonly items?: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems[] | cdktf.IResolvable;
}
export declare function cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesToTerraform(struct?: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference | CloudfrontFieldLevelEncryptionProfileEncryptionEntities): any;
export declare function cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesToHclTerraform(struct?: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference | CloudfrontFieldLevelEncryptionProfileEncryptionEntities): any;
export declare class CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontFieldLevelEncryptionProfileEncryptionEntities | undefined;
    set internalValue(value: CloudfrontFieldLevelEncryptionProfileEncryptionEntities | undefined);
    private _items;
    get items(): CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList;
    putItems(value: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems[] | cdktf.IResolvable): void;
    resetItems(): void;
    get itemsInput(): cdktf.IResolvable | CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_profile aws_cloudfront_field_level_encryption_profile}
*/
export declare class CloudfrontFieldLevelEncryptionProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudfront_field_level_encryption_profile";
    /**
    * Generates CDKTF code for importing a CloudfrontFieldLevelEncryptionProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontFieldLevelEncryptionProfile to import
    * @param importFromId The id of the existing CloudfrontFieldLevelEncryptionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontFieldLevelEncryptionProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_profile aws_cloudfront_field_level_encryption_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontFieldLevelEncryptionProfileConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontFieldLevelEncryptionProfileConfig);
    get callerReference(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    get etag(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _encryptionEntities;
    get encryptionEntities(): CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference;
    putEncryptionEntities(value: CloudfrontFieldLevelEncryptionProfileEncryptionEntities): void;
    get encryptionEntitiesInput(): CloudfrontFieldLevelEncryptionProfileEncryptionEntities | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
