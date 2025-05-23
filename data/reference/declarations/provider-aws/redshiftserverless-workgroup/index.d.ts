/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftserverlessWorkgroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#base_capacity RedshiftserverlessWorkgroup#base_capacity}
    */
    readonly baseCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#enhanced_vpc_routing RedshiftserverlessWorkgroup#enhanced_vpc_routing}
    */
    readonly enhancedVpcRouting?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#id RedshiftserverlessWorkgroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#max_capacity RedshiftserverlessWorkgroup#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#namespace_name RedshiftserverlessWorkgroup#namespace_name}
    */
    readonly namespaceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#port RedshiftserverlessWorkgroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#publicly_accessible RedshiftserverlessWorkgroup#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#security_group_ids RedshiftserverlessWorkgroup#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#subnet_ids RedshiftserverlessWorkgroup#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#tags RedshiftserverlessWorkgroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#tags_all RedshiftserverlessWorkgroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#workgroup_name RedshiftserverlessWorkgroup#workgroup_name}
    */
    readonly workgroupName: string;
    /**
    * config_parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#config_parameter RedshiftserverlessWorkgroup#config_parameter}
    */
    readonly configParameter?: RedshiftserverlessWorkgroupConfigParameter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#timeouts RedshiftserverlessWorkgroup#timeouts}
    */
    readonly timeouts?: RedshiftserverlessWorkgroupTimeouts;
}
export interface RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface {
}
export declare function redshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceToTerraform(struct?: RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface): any;
export declare function redshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceToHclTerraform(struct?: RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface): any;
export declare class RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface | undefined;
    set internalValue(value: RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface | undefined);
    get availabilityZone(): string;
    get networkInterfaceId(): string;
    get privateIpAddress(): string;
    get subnetId(): string;
}
export declare class RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList extends cdktf.ComplexList {
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
    get(index: number): RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference;
}
export interface RedshiftserverlessWorkgroupEndpointVpcEndpoint {
}
export declare function redshiftserverlessWorkgroupEndpointVpcEndpointToTerraform(struct?: RedshiftserverlessWorkgroupEndpointVpcEndpoint): any;
export declare function redshiftserverlessWorkgroupEndpointVpcEndpointToHclTerraform(struct?: RedshiftserverlessWorkgroupEndpointVpcEndpoint): any;
export declare class RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RedshiftserverlessWorkgroupEndpointVpcEndpoint | undefined;
    set internalValue(value: RedshiftserverlessWorkgroupEndpointVpcEndpoint | undefined);
    private _networkInterface;
    get networkInterface(): RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList;
    get vpcEndpointId(): string;
    get vpcId(): string;
}
export declare class RedshiftserverlessWorkgroupEndpointVpcEndpointList extends cdktf.ComplexList {
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
    get(index: number): RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference;
}
export interface RedshiftserverlessWorkgroupEndpoint {
}
export declare function redshiftserverlessWorkgroupEndpointToTerraform(struct?: RedshiftserverlessWorkgroupEndpoint): any;
export declare function redshiftserverlessWorkgroupEndpointToHclTerraform(struct?: RedshiftserverlessWorkgroupEndpoint): any;
export declare class RedshiftserverlessWorkgroupEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RedshiftserverlessWorkgroupEndpoint | undefined;
    set internalValue(value: RedshiftserverlessWorkgroupEndpoint | undefined);
    get address(): string;
    get port(): number;
    private _vpcEndpoint;
    get vpcEndpoint(): RedshiftserverlessWorkgroupEndpointVpcEndpointList;
}
export declare class RedshiftserverlessWorkgroupEndpointList extends cdktf.ComplexList {
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
    get(index: number): RedshiftserverlessWorkgroupEndpointOutputReference;
}
export interface RedshiftserverlessWorkgroupConfigParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#parameter_key RedshiftserverlessWorkgroup#parameter_key}
    */
    readonly parameterKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#parameter_value RedshiftserverlessWorkgroup#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function redshiftserverlessWorkgroupConfigParameterToTerraform(struct?: RedshiftserverlessWorkgroupConfigParameter | cdktf.IResolvable): any;
export declare function redshiftserverlessWorkgroupConfigParameterToHclTerraform(struct?: RedshiftserverlessWorkgroupConfigParameter | cdktf.IResolvable): any;
export declare class RedshiftserverlessWorkgroupConfigParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RedshiftserverlessWorkgroupConfigParameter | cdktf.IResolvable | undefined;
    set internalValue(value: RedshiftserverlessWorkgroupConfigParameter | cdktf.IResolvable | undefined);
    private _parameterKey?;
    get parameterKey(): string;
    set parameterKey(value: string);
    get parameterKeyInput(): string | undefined;
    private _parameterValue?;
    get parameterValue(): string;
    set parameterValue(value: string);
    get parameterValueInput(): string | undefined;
}
export declare class RedshiftserverlessWorkgroupConfigParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RedshiftserverlessWorkgroupConfigParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RedshiftserverlessWorkgroupConfigParameterOutputReference;
}
export interface RedshiftserverlessWorkgroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#create RedshiftserverlessWorkgroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#delete RedshiftserverlessWorkgroup#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#update RedshiftserverlessWorkgroup#update}
    */
    readonly update?: string;
}
export declare function redshiftserverlessWorkgroupTimeoutsToTerraform(struct?: RedshiftserverlessWorkgroupTimeouts | cdktf.IResolvable): any;
export declare function redshiftserverlessWorkgroupTimeoutsToHclTerraform(struct?: RedshiftserverlessWorkgroupTimeouts | cdktf.IResolvable): any;
export declare class RedshiftserverlessWorkgroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RedshiftserverlessWorkgroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RedshiftserverlessWorkgroupTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup aws_redshiftserverless_workgroup}
*/
export declare class RedshiftserverlessWorkgroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshiftserverless_workgroup";
    /**
    * Generates CDKTF code for importing a RedshiftserverlessWorkgroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftserverlessWorkgroup to import
    * @param importFromId The id of the existing RedshiftserverlessWorkgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftserverlessWorkgroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_workgroup aws_redshiftserverless_workgroup} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftserverlessWorkgroupConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftserverlessWorkgroupConfig);
    get arn(): string;
    private _baseCapacity?;
    get baseCapacity(): number;
    set baseCapacity(value: number);
    resetBaseCapacity(): void;
    get baseCapacityInput(): number | undefined;
    private _endpoint;
    get endpoint(): RedshiftserverlessWorkgroupEndpointList;
    private _enhancedVpcRouting?;
    get enhancedVpcRouting(): boolean | cdktf.IResolvable;
    set enhancedVpcRouting(value: boolean | cdktf.IResolvable);
    resetEnhancedVpcRouting(): void;
    get enhancedVpcRoutingInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _maxCapacity?;
    get maxCapacity(): number;
    set maxCapacity(value: number);
    resetMaxCapacity(): void;
    get maxCapacityInput(): number | undefined;
    private _namespaceName?;
    get namespaceName(): string;
    set namespaceName(value: string);
    get namespaceNameInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean | cdktf.IResolvable;
    set publiclyAccessible(value: boolean | cdktf.IResolvable);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | cdktf.IResolvable | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
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
    get workgroupId(): string;
    private _workgroupName?;
    get workgroupName(): string;
    set workgroupName(value: string);
    get workgroupNameInput(): string | undefined;
    private _configParameter;
    get configParameter(): RedshiftserverlessWorkgroupConfigParameterList;
    putConfigParameter(value: RedshiftserverlessWorkgroupConfigParameter[] | cdktf.IResolvable): void;
    resetConfigParameter(): void;
    get configParameterInput(): cdktf.IResolvable | RedshiftserverlessWorkgroupConfigParameter[] | undefined;
    private _timeouts;
    get timeouts(): RedshiftserverlessWorkgroupTimeoutsOutputReference;
    putTimeouts(value: RedshiftserverlessWorkgroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RedshiftserverlessWorkgroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
