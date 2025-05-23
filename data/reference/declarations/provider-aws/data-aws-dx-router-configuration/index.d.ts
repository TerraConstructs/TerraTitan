/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDxRouterConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dx_router_configuration#id DataAwsDxRouterConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dx_router_configuration#router_type_identifier DataAwsDxRouterConfiguration#router_type_identifier}
    */
    readonly routerTypeIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dx_router_configuration#virtual_interface_id DataAwsDxRouterConfiguration#virtual_interface_id}
    */
    readonly virtualInterfaceId: string;
}
export interface DataAwsDxRouterConfigurationRouter {
}
export declare function dataAwsDxRouterConfigurationRouterToTerraform(struct?: DataAwsDxRouterConfigurationRouter): any;
export declare function dataAwsDxRouterConfigurationRouterToHclTerraform(struct?: DataAwsDxRouterConfigurationRouter): any;
export declare class DataAwsDxRouterConfigurationRouterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDxRouterConfigurationRouter | undefined;
    set internalValue(value: DataAwsDxRouterConfigurationRouter | undefined);
    get platform(): string;
    get routerTypeIdentifier(): string;
    get softwareAttribute(): string;
    get vendor(): string;
    get xsltTemplateName(): string;
    get xsltTemplateNameForMacSec(): string;
}
export declare class DataAwsDxRouterConfigurationRouterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDxRouterConfigurationRouterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dx_router_configuration aws_dx_router_configuration}
*/
export declare class DataAwsDxRouterConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_dx_router_configuration";
    /**
    * Generates CDKTF code for importing a DataAwsDxRouterConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDxRouterConfiguration to import
    * @param importFromId The id of the existing DataAwsDxRouterConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dx_router_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDxRouterConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dx_router_configuration aws_dx_router_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDxRouterConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDxRouterConfigurationConfig);
    get customerRouterConfig(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _router;
    get router(): DataAwsDxRouterConfigurationRouterList;
    private _routerTypeIdentifier?;
    get routerTypeIdentifier(): string;
    set routerTypeIdentifier(value: string);
    get routerTypeIdentifierInput(): string | undefined;
    private _virtualInterfaceId?;
    get virtualInterfaceId(): string;
    set virtualInterfaceId(value: string);
    get virtualInterfaceIdInput(): string | undefined;
    get virtualInterfaceName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
