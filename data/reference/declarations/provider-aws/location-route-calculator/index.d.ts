/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LocationRouteCalculatorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_route_calculator#calculator_name LocationRouteCalculator#calculator_name}
    */
    readonly calculatorName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_route_calculator#data_source LocationRouteCalculator#data_source}
    */
    readonly dataSource: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_route_calculator#description LocationRouteCalculator#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_route_calculator#id LocationRouteCalculator#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_route_calculator#tags LocationRouteCalculator#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_route_calculator#tags_all LocationRouteCalculator#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_route_calculator#timeouts LocationRouteCalculator#timeouts}
    */
    readonly timeouts?: LocationRouteCalculatorTimeouts;
}
export interface LocationRouteCalculatorTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_route_calculator#create LocationRouteCalculator#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_route_calculator#delete LocationRouteCalculator#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_route_calculator#update LocationRouteCalculator#update}
    */
    readonly update?: string;
}
export declare function locationRouteCalculatorTimeoutsToTerraform(struct?: LocationRouteCalculatorTimeouts | cdktf.IResolvable): any;
export declare function locationRouteCalculatorTimeoutsToHclTerraform(struct?: LocationRouteCalculatorTimeouts | cdktf.IResolvable): any;
export declare class LocationRouteCalculatorTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LocationRouteCalculatorTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LocationRouteCalculatorTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_route_calculator aws_location_route_calculator}
*/
export declare class LocationRouteCalculator extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_location_route_calculator";
    /**
    * Generates CDKTF code for importing a LocationRouteCalculator resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LocationRouteCalculator to import
    * @param importFromId The id of the existing LocationRouteCalculator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_route_calculator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LocationRouteCalculator to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_route_calculator aws_location_route_calculator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LocationRouteCalculatorConfig
    */
    constructor(scope: Construct, id: string, config: LocationRouteCalculatorConfig);
    get calculatorArn(): string;
    private _calculatorName?;
    get calculatorName(): string;
    set calculatorName(value: string);
    get calculatorNameInput(): string | undefined;
    get createTime(): string;
    private _dataSource?;
    get dataSource(): string;
    set dataSource(value: string);
    get dataSourceInput(): string | undefined;
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
    get updateTime(): string;
    private _timeouts;
    get timeouts(): LocationRouteCalculatorTimeoutsOutputReference;
    putTimeouts(value: LocationRouteCalculatorTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LocationRouteCalculatorTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
