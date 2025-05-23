/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotThingTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_type#deprecated IotThingType#deprecated}
    */
    readonly deprecated?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_type#id IotThingType#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_type#name IotThingType#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_type#tags IotThingType#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_type#tags_all IotThingType#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_type#properties IotThingType#properties}
    */
    readonly properties?: IotThingTypeProperties;
}
export interface IotThingTypeProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_type#description IotThingType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_type#searchable_attributes IotThingType#searchable_attributes}
    */
    readonly searchableAttributes?: string[];
}
export declare function iotThingTypePropertiesToTerraform(struct?: IotThingTypePropertiesOutputReference | IotThingTypeProperties): any;
export declare function iotThingTypePropertiesToHclTerraform(struct?: IotThingTypePropertiesOutputReference | IotThingTypeProperties): any;
export declare class IotThingTypePropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotThingTypeProperties | undefined;
    set internalValue(value: IotThingTypeProperties | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _searchableAttributes?;
    get searchableAttributes(): string[];
    set searchableAttributes(value: string[]);
    resetSearchableAttributes(): void;
    get searchableAttributesInput(): string[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_type aws_iot_thing_type}
*/
export declare class IotThingType extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iot_thing_type";
    /**
    * Generates CDKTF code for importing a IotThingType resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IotThingType to import
    * @param importFromId The id of the existing IotThingType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IotThingType to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_type aws_iot_thing_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotThingTypeConfig
    */
    constructor(scope: Construct, id: string, config: IotThingTypeConfig);
    get arn(): string;
    private _deprecated?;
    get deprecated(): boolean | cdktf.IResolvable;
    set deprecated(value: boolean | cdktf.IResolvable);
    resetDeprecated(): void;
    get deprecatedInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _properties;
    get properties(): IotThingTypePropertiesOutputReference;
    putProperties(value: IotThingTypeProperties): void;
    resetProperties(): void;
    get propertiesInput(): IotThingTypeProperties | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
