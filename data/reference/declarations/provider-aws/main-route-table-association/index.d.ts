/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MainRouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/main_route_table_association#id MainRouteTableAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/main_route_table_association#route_table_id MainRouteTableAssociation#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/main_route_table_association#vpc_id MainRouteTableAssociation#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/main_route_table_association#timeouts MainRouteTableAssociation#timeouts}
    */
    readonly timeouts?: MainRouteTableAssociationTimeouts;
}
export interface MainRouteTableAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/main_route_table_association#create MainRouteTableAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/main_route_table_association#delete MainRouteTableAssociation#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/main_route_table_association#update MainRouteTableAssociation#update}
    */
    readonly update?: string;
}
export declare function mainRouteTableAssociationTimeoutsToTerraform(struct?: MainRouteTableAssociationTimeouts | cdktf.IResolvable): any;
export declare function mainRouteTableAssociationTimeoutsToHclTerraform(struct?: MainRouteTableAssociationTimeouts | cdktf.IResolvable): any;
export declare class MainRouteTableAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MainRouteTableAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MainRouteTableAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/main_route_table_association aws_main_route_table_association}
*/
export declare class MainRouteTableAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_main_route_table_association";
    /**
    * Generates CDKTF code for importing a MainRouteTableAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MainRouteTableAssociation to import
    * @param importFromId The id of the existing MainRouteTableAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/main_route_table_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MainRouteTableAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/main_route_table_association aws_main_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MainRouteTableAssociationConfig
    */
    constructor(scope: Construct, id: string, config: MainRouteTableAssociationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get originalRouteTableId(): string;
    private _routeTableId?;
    get routeTableId(): string;
    set routeTableId(value: string);
    get routeTableIdInput(): string | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): MainRouteTableAssociationTimeoutsOutputReference;
    putTimeouts(value: MainRouteTableAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MainRouteTableAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
