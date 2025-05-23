/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecoverycontrolconfigClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_cluster#id Route53RecoverycontrolconfigCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_cluster#name Route53RecoverycontrolconfigCluster#name}
    */
    readonly name: string;
}
export interface Route53RecoverycontrolconfigClusterClusterEndpoints {
}
export declare function route53RecoverycontrolconfigClusterClusterEndpointsToTerraform(struct?: Route53RecoverycontrolconfigClusterClusterEndpoints): any;
export declare function route53RecoverycontrolconfigClusterClusterEndpointsToHclTerraform(struct?: Route53RecoverycontrolconfigClusterClusterEndpoints): any;
export declare class Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53RecoverycontrolconfigClusterClusterEndpoints | undefined;
    set internalValue(value: Route53RecoverycontrolconfigClusterClusterEndpoints | undefined);
    get endpoint(): string;
    get region(): string;
}
export declare class Route53RecoverycontrolconfigClusterClusterEndpointsList extends cdktf.ComplexList {
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
    get(index: number): Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_cluster aws_route53recoverycontrolconfig_cluster}
*/
export declare class Route53RecoverycontrolconfigCluster extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53recoverycontrolconfig_cluster";
    /**
    * Generates CDKTF code for importing a Route53RecoverycontrolconfigCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53RecoverycontrolconfigCluster to import
    * @param importFromId The id of the existing Route53RecoverycontrolconfigCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53RecoverycontrolconfigCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_cluster aws_route53recoverycontrolconfig_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolconfigClusterConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoverycontrolconfigClusterConfig);
    get arn(): string;
    private _clusterEndpoints;
    get clusterEndpoints(): Route53RecoverycontrolconfigClusterClusterEndpointsList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
