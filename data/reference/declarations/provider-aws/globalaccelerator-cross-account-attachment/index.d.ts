/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlobalacceleratorCrossAccountAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/globalaccelerator_cross_account_attachment#name GlobalacceleratorCrossAccountAttachment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/globalaccelerator_cross_account_attachment#principals GlobalacceleratorCrossAccountAttachment#principals}
    */
    readonly principals?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/globalaccelerator_cross_account_attachment#tags GlobalacceleratorCrossAccountAttachment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/globalaccelerator_cross_account_attachment#resource GlobalacceleratorCrossAccountAttachment#resource}
    */
    readonly resource?: GlobalacceleratorCrossAccountAttachmentResource[] | cdktf.IResolvable;
}
export interface GlobalacceleratorCrossAccountAttachmentResource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/globalaccelerator_cross_account_attachment#cidr_block GlobalacceleratorCrossAccountAttachment#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/globalaccelerator_cross_account_attachment#endpoint_id GlobalacceleratorCrossAccountAttachment#endpoint_id}
    */
    readonly endpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/globalaccelerator_cross_account_attachment#region GlobalacceleratorCrossAccountAttachment#region}
    */
    readonly region?: string;
}
export declare function globalacceleratorCrossAccountAttachmentResourceToTerraform(struct?: GlobalacceleratorCrossAccountAttachmentResource | cdktf.IResolvable): any;
export declare function globalacceleratorCrossAccountAttachmentResourceToHclTerraform(struct?: GlobalacceleratorCrossAccountAttachmentResource | cdktf.IResolvable): any;
export declare class GlobalacceleratorCrossAccountAttachmentResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlobalacceleratorCrossAccountAttachmentResource | cdktf.IResolvable | undefined;
    set internalValue(value: GlobalacceleratorCrossAccountAttachmentResource | cdktf.IResolvable | undefined);
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string | undefined;
    private _endpointId?;
    get endpointId(): string;
    set endpointId(value: string);
    resetEndpointId(): void;
    get endpointIdInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
}
export declare class GlobalacceleratorCrossAccountAttachmentResourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlobalacceleratorCrossAccountAttachmentResource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlobalacceleratorCrossAccountAttachmentResourceOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/globalaccelerator_cross_account_attachment aws_globalaccelerator_cross_account_attachment}
*/
export declare class GlobalacceleratorCrossAccountAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_globalaccelerator_cross_account_attachment";
    /**
    * Generates CDKTF code for importing a GlobalacceleratorCrossAccountAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlobalacceleratorCrossAccountAttachment to import
    * @param importFromId The id of the existing GlobalacceleratorCrossAccountAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/globalaccelerator_cross_account_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlobalacceleratorCrossAccountAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/globalaccelerator_cross_account_attachment aws_globalaccelerator_cross_account_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorCrossAccountAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: GlobalacceleratorCrossAccountAttachmentConfig);
    get arn(): string;
    get createdTime(): string;
    get id(): string;
    get lastModifiedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _principals?;
    get principals(): string[];
    set principals(value: string[]);
    resetPrincipals(): void;
    get principalsInput(): string[] | undefined;
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
    private _resource;
    get resource(): GlobalacceleratorCrossAccountAttachmentResourceList;
    putResource(value: GlobalacceleratorCrossAccountAttachmentResource[] | cdktf.IResolvable): void;
    resetResource(): void;
    get resourceInput(): cdktf.IResolvable | GlobalacceleratorCrossAccountAttachmentResource[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
