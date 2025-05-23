/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailInstancePublicPortsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}
    */
    readonly instanceName: string;
    /**
    * port_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance_public_ports#port_info LightsailInstancePublicPorts#port_info}
    */
    readonly portInfo: LightsailInstancePublicPortsPortInfo[] | cdktf.IResolvable;
}
export interface LightsailInstancePublicPortsPortInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance_public_ports#cidr_list_aliases LightsailInstancePublicPorts#cidr_list_aliases}
    */
    readonly cidrListAliases?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance_public_ports#cidrs LightsailInstancePublicPorts#cidrs}
    */
    readonly cidrs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance_public_ports#from_port LightsailInstancePublicPorts#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance_public_ports#ipv6_cidrs LightsailInstancePublicPorts#ipv6_cidrs}
    */
    readonly ipv6Cidrs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance_public_ports#protocol LightsailInstancePublicPorts#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance_public_ports#to_port LightsailInstancePublicPorts#to_port}
    */
    readonly toPort: number;
}
export declare function lightsailInstancePublicPortsPortInfoToTerraform(struct?: LightsailInstancePublicPortsPortInfo | cdktf.IResolvable): any;
export declare function lightsailInstancePublicPortsPortInfoToHclTerraform(struct?: LightsailInstancePublicPortsPortInfo | cdktf.IResolvable): any;
export declare class LightsailInstancePublicPortsPortInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LightsailInstancePublicPortsPortInfo | cdktf.IResolvable | undefined;
    set internalValue(value: LightsailInstancePublicPortsPortInfo | cdktf.IResolvable | undefined);
    private _cidrListAliases?;
    get cidrListAliases(): string[];
    set cidrListAliases(value: string[]);
    resetCidrListAliases(): void;
    get cidrListAliasesInput(): string[] | undefined;
    private _cidrs?;
    get cidrs(): string[];
    set cidrs(value: string[]);
    resetCidrs(): void;
    get cidrsInput(): string[] | undefined;
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
    get fromPortInput(): number | undefined;
    private _ipv6Cidrs?;
    get ipv6Cidrs(): string[];
    set ipv6Cidrs(value: string[]);
    resetIpv6Cidrs(): void;
    get ipv6CidrsInput(): string[] | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    get toPortInput(): number | undefined;
}
export declare class LightsailInstancePublicPortsPortInfoList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LightsailInstancePublicPortsPortInfo[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LightsailInstancePublicPortsPortInfoOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance_public_ports aws_lightsail_instance_public_ports}
*/
export declare class LightsailInstancePublicPorts extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lightsail_instance_public_ports";
    /**
    * Generates CDKTF code for importing a LightsailInstancePublicPorts resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LightsailInstancePublicPorts to import
    * @param importFromId The id of the existing LightsailInstancePublicPorts that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance_public_ports#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LightsailInstancePublicPorts to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance_public_ports aws_lightsail_instance_public_ports} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailInstancePublicPortsConfig
    */
    constructor(scope: Construct, id: string, config: LightsailInstancePublicPortsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceName?;
    get instanceName(): string;
    set instanceName(value: string);
    get instanceNameInput(): string | undefined;
    private _portInfo;
    get portInfo(): LightsailInstancePublicPortsPortInfoList;
    putPortInfo(value: LightsailInstancePublicPortsPortInfo[] | cdktf.IResolvable): void;
    get portInfoInput(): cdktf.IResolvable | LightsailInstancePublicPortsPortInfo[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
