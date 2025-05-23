/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DevicefarmDevicePoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_device_pool#description DevicefarmDevicePool#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_device_pool#id DevicefarmDevicePool#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_device_pool#max_devices DevicefarmDevicePool#max_devices}
    */
    readonly maxDevices?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_device_pool#name DevicefarmDevicePool#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_device_pool#project_arn DevicefarmDevicePool#project_arn}
    */
    readonly projectArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_device_pool#tags DevicefarmDevicePool#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_device_pool#tags_all DevicefarmDevicePool#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_device_pool#rule DevicefarmDevicePool#rule}
    */
    readonly rule: DevicefarmDevicePoolRule[] | cdktf.IResolvable;
}
export interface DevicefarmDevicePoolRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_device_pool#attribute DevicefarmDevicePool#attribute}
    */
    readonly attribute?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_device_pool#operator DevicefarmDevicePool#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_device_pool#value DevicefarmDevicePool#value}
    */
    readonly value?: string;
}
export declare function devicefarmDevicePoolRuleToTerraform(struct?: DevicefarmDevicePoolRule | cdktf.IResolvable): any;
export declare function devicefarmDevicePoolRuleToHclTerraform(struct?: DevicefarmDevicePoolRule | cdktf.IResolvable): any;
export declare class DevicefarmDevicePoolRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DevicefarmDevicePoolRule | cdktf.IResolvable | undefined;
    set internalValue(value: DevicefarmDevicePoolRule | cdktf.IResolvable | undefined);
    private _attribute?;
    get attribute(): string;
    set attribute(value: string);
    resetAttribute(): void;
    get attributeInput(): string | undefined;
    private _operator?;
    get operator(): string;
    set operator(value: string);
    resetOperator(): void;
    get operatorInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class DevicefarmDevicePoolRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DevicefarmDevicePoolRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DevicefarmDevicePoolRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_device_pool aws_devicefarm_device_pool}
*/
export declare class DevicefarmDevicePool extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_devicefarm_device_pool";
    /**
    * Generates CDKTF code for importing a DevicefarmDevicePool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DevicefarmDevicePool to import
    * @param importFromId The id of the existing DevicefarmDevicePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_device_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DevicefarmDevicePool to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_device_pool aws_devicefarm_device_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DevicefarmDevicePoolConfig
    */
    constructor(scope: Construct, id: string, config: DevicefarmDevicePoolConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _maxDevices?;
    get maxDevices(): number;
    set maxDevices(value: number);
    resetMaxDevices(): void;
    get maxDevicesInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _projectArn?;
    get projectArn(): string;
    set projectArn(value: string);
    get projectArnInput(): string | undefined;
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
    get type(): string;
    private _rule;
    get rule(): DevicefarmDevicePoolRuleList;
    putRule(value: DevicefarmDevicePoolRule[] | cdktf.IResolvable): void;
    get ruleInput(): cdktf.IResolvable | DevicefarmDevicePoolRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
