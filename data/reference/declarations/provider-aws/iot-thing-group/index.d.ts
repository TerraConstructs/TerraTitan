/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotThingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group#id IotThingGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group#name IotThingGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group#parent_group_name IotThingGroup#parent_group_name}
    */
    readonly parentGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group#tags IotThingGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group#tags_all IotThingGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group#properties IotThingGroup#properties}
    */
    readonly properties?: IotThingGroupProperties;
}
export interface IotThingGroupMetadataRootToParentGroups {
}
export declare function iotThingGroupMetadataRootToParentGroupsToTerraform(struct?: IotThingGroupMetadataRootToParentGroups): any;
export declare function iotThingGroupMetadataRootToParentGroupsToHclTerraform(struct?: IotThingGroupMetadataRootToParentGroups): any;
export declare class IotThingGroupMetadataRootToParentGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotThingGroupMetadataRootToParentGroups | undefined;
    set internalValue(value: IotThingGroupMetadataRootToParentGroups | undefined);
    get groupArn(): string;
    get groupName(): string;
}
export declare class IotThingGroupMetadataRootToParentGroupsList extends cdktf.ComplexList {
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
    get(index: number): IotThingGroupMetadataRootToParentGroupsOutputReference;
}
export interface IotThingGroupMetadata {
}
export declare function iotThingGroupMetadataToTerraform(struct?: IotThingGroupMetadata): any;
export declare function iotThingGroupMetadataToHclTerraform(struct?: IotThingGroupMetadata): any;
export declare class IotThingGroupMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotThingGroupMetadata | undefined;
    set internalValue(value: IotThingGroupMetadata | undefined);
    get creationDate(): string;
    get parentGroupName(): string;
    private _rootToParentGroups;
    get rootToParentGroups(): IotThingGroupMetadataRootToParentGroupsList;
}
export declare class IotThingGroupMetadataList extends cdktf.ComplexList {
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
    get(index: number): IotThingGroupMetadataOutputReference;
}
export interface IotThingGroupPropertiesAttributePayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group#attributes IotThingGroup#attributes}
    */
    readonly attributes?: {
        [key: string]: string;
    };
}
export declare function iotThingGroupPropertiesAttributePayloadToTerraform(struct?: IotThingGroupPropertiesAttributePayloadOutputReference | IotThingGroupPropertiesAttributePayload): any;
export declare function iotThingGroupPropertiesAttributePayloadToHclTerraform(struct?: IotThingGroupPropertiesAttributePayloadOutputReference | IotThingGroupPropertiesAttributePayload): any;
export declare class IotThingGroupPropertiesAttributePayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotThingGroupPropertiesAttributePayload | undefined;
    set internalValue(value: IotThingGroupPropertiesAttributePayload | undefined);
    private _attributes?;
    get attributes(): {
        [key: string]: string;
    };
    set attributes(value: {
        [key: string]: string;
    });
    resetAttributes(): void;
    get attributesInput(): {
        [key: string]: string;
    } | undefined;
}
export interface IotThingGroupProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group#description IotThingGroup#description}
    */
    readonly description?: string;
    /**
    * attribute_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group#attribute_payload IotThingGroup#attribute_payload}
    */
    readonly attributePayload?: IotThingGroupPropertiesAttributePayload;
}
export declare function iotThingGroupPropertiesToTerraform(struct?: IotThingGroupPropertiesOutputReference | IotThingGroupProperties): any;
export declare function iotThingGroupPropertiesToHclTerraform(struct?: IotThingGroupPropertiesOutputReference | IotThingGroupProperties): any;
export declare class IotThingGroupPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotThingGroupProperties | undefined;
    set internalValue(value: IotThingGroupProperties | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _attributePayload;
    get attributePayload(): IotThingGroupPropertiesAttributePayloadOutputReference;
    putAttributePayload(value: IotThingGroupPropertiesAttributePayload): void;
    resetAttributePayload(): void;
    get attributePayloadInput(): IotThingGroupPropertiesAttributePayload | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group aws_iot_thing_group}
*/
export declare class IotThingGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iot_thing_group";
    /**
    * Generates CDKTF code for importing a IotThingGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IotThingGroup to import
    * @param importFromId The id of the existing IotThingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IotThingGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_group aws_iot_thing_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotThingGroupConfig
    */
    constructor(scope: Construct, id: string, config: IotThingGroupConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _metadata;
    get metadata(): IotThingGroupMetadataList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _parentGroupName?;
    get parentGroupName(): string;
    set parentGroupName(value: string);
    resetParentGroupName(): void;
    get parentGroupNameInput(): string | undefined;
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
    get version(): number;
    private _properties;
    get properties(): IotThingGroupPropertiesOutputReference;
    putProperties(value: IotThingGroupProperties): void;
    resetProperties(): void;
    get propertiesInput(): IotThingGroupProperties | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
