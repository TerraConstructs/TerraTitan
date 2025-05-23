/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmDocumentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document#content SsmDocument#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document#document_format SsmDocument#document_format}
    */
    readonly documentFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document#document_type SsmDocument#document_type}
    */
    readonly documentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document#id SsmDocument#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document#name SsmDocument#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document#permissions SsmDocument#permissions}
    */
    readonly permissions?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document#tags SsmDocument#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document#tags_all SsmDocument#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document#target_type SsmDocument#target_type}
    */
    readonly targetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document#version_name SsmDocument#version_name}
    */
    readonly versionName?: string;
    /**
    * attachments_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document#attachments_source SsmDocument#attachments_source}
    */
    readonly attachmentsSource?: SsmDocumentAttachmentsSource[] | cdktf.IResolvable;
}
export interface SsmDocumentParameter {
}
export declare function ssmDocumentParameterToTerraform(struct?: SsmDocumentParameter): any;
export declare function ssmDocumentParameterToHclTerraform(struct?: SsmDocumentParameter): any;
export declare class SsmDocumentParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmDocumentParameter | undefined;
    set internalValue(value: SsmDocumentParameter | undefined);
    get defaultValue(): string;
    get description(): string;
    get name(): string;
    get type(): string;
}
export declare class SsmDocumentParameterList extends cdktf.ComplexList {
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
    get(index: number): SsmDocumentParameterOutputReference;
}
export interface SsmDocumentAttachmentsSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document#key SsmDocument#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document#name SsmDocument#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document#values SsmDocument#values}
    */
    readonly values: string[];
}
export declare function ssmDocumentAttachmentsSourceToTerraform(struct?: SsmDocumentAttachmentsSource | cdktf.IResolvable): any;
export declare function ssmDocumentAttachmentsSourceToHclTerraform(struct?: SsmDocumentAttachmentsSource | cdktf.IResolvable): any;
export declare class SsmDocumentAttachmentsSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmDocumentAttachmentsSource | cdktf.IResolvable | undefined;
    set internalValue(value: SsmDocumentAttachmentsSource | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class SsmDocumentAttachmentsSourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmDocumentAttachmentsSource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmDocumentAttachmentsSourceOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document aws_ssm_document}
*/
export declare class SsmDocument extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssm_document";
    /**
    * Generates CDKTF code for importing a SsmDocument resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsmDocument to import
    * @param importFromId The id of the existing SsmDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsmDocument to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_document aws_ssm_document} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmDocumentConfig
    */
    constructor(scope: Construct, id: string, config: SsmDocumentConfig);
    get arn(): string;
    private _content?;
    get content(): string;
    set content(value: string);
    get contentInput(): string | undefined;
    get createdDate(): string;
    get defaultVersion(): string;
    get description(): string;
    private _documentFormat?;
    get documentFormat(): string;
    set documentFormat(value: string);
    resetDocumentFormat(): void;
    get documentFormatInput(): string | undefined;
    private _documentType?;
    get documentType(): string;
    set documentType(value: string);
    get documentTypeInput(): string | undefined;
    get documentVersion(): string;
    get hash(): string;
    get hashType(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get latestVersion(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get owner(): string;
    private _parameter;
    get parameter(): SsmDocumentParameterList;
    private _permissions?;
    get permissions(): {
        [key: string]: string;
    };
    set permissions(value: {
        [key: string]: string;
    });
    resetPermissions(): void;
    get permissionsInput(): {
        [key: string]: string;
    } | undefined;
    get platformTypes(): string[];
    get schemaVersion(): string;
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
    private _targetType?;
    get targetType(): string;
    set targetType(value: string);
    resetTargetType(): void;
    get targetTypeInput(): string | undefined;
    private _versionName?;
    get versionName(): string;
    set versionName(value: string);
    resetVersionName(): void;
    get versionNameInput(): string | undefined;
    private _attachmentsSource;
    get attachmentsSource(): SsmDocumentAttachmentsSourceList;
    putAttachmentsSource(value: SsmDocumentAttachmentsSource[] | cdktf.IResolvable): void;
    resetAttachmentsSource(): void;
    get attachmentsSourceInput(): cdktf.IResolvable | SsmDocumentAttachmentsSource[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
