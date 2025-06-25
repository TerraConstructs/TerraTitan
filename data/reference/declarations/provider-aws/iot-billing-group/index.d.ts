/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotBillingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iot_billing_group#name IotBillingGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iot_billing_group#tags IotBillingGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iot_billing_group#properties IotBillingGroup#properties}
    */
    readonly properties?: IotBillingGroupProperties[] | cdktf.IResolvable;
}
export interface IotBillingGroupMetadata {
}
export declare function iotBillingGroupMetadataToTerraform(struct?: IotBillingGroupMetadata): any;
export declare function iotBillingGroupMetadataToHclTerraform(struct?: IotBillingGroupMetadata): any;
export declare class IotBillingGroupMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotBillingGroupMetadata | undefined;
    set internalValue(value: IotBillingGroupMetadata | undefined);
    get creationDate(): string;
}
export declare class IotBillingGroupMetadataList extends cdktf.ComplexList {
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
    get(index: number): IotBillingGroupMetadataOutputReference;
}
export interface IotBillingGroupProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iot_billing_group#description IotBillingGroup#description}
    */
    readonly description?: string;
}
export declare function iotBillingGroupPropertiesToTerraform(struct?: IotBillingGroupProperties | cdktf.IResolvable): any;
export declare function iotBillingGroupPropertiesToHclTerraform(struct?: IotBillingGroupProperties | cdktf.IResolvable): any;
export declare class IotBillingGroupPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotBillingGroupProperties | cdktf.IResolvable | undefined;
    set internalValue(value: IotBillingGroupProperties | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
}
export declare class IotBillingGroupPropertiesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotBillingGroupProperties[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotBillingGroupPropertiesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iot_billing_group aws_iot_billing_group}
*/
export declare class IotBillingGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iot_billing_group";
    /**
    * Generates CDKTF code for importing a IotBillingGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IotBillingGroup to import
    * @param importFromId The id of the existing IotBillingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iot_billing_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IotBillingGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iot_billing_group aws_iot_billing_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotBillingGroupConfig
    */
    constructor(scope: Construct, id: string, config: IotBillingGroupConfig);
    get arn(): string;
    get id(): string;
    private _metadata;
    get metadata(): IotBillingGroupMetadataList;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    get version(): number;
    private _properties;
    get properties(): IotBillingGroupPropertiesList;
    putProperties(value: IotBillingGroupProperties[] | cdktf.IResolvable): void;
    resetProperties(): void;
    get propertiesInput(): cdktf.IResolvable | IotBillingGroupProperties[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
