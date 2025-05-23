/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TrafficMirrorFilterRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#description Ec2TrafficMirrorFilterRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#destination_cidr_block Ec2TrafficMirrorFilterRule#destination_cidr_block}
    */
    readonly destinationCidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#id Ec2TrafficMirrorFilterRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#protocol Ec2TrafficMirrorFilterRule#protocol}
    */
    readonly protocol?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#rule_action Ec2TrafficMirrorFilterRule#rule_action}
    */
    readonly ruleAction: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#rule_number Ec2TrafficMirrorFilterRule#rule_number}
    */
    readonly ruleNumber: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#source_cidr_block Ec2TrafficMirrorFilterRule#source_cidr_block}
    */
    readonly sourceCidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#traffic_direction Ec2TrafficMirrorFilterRule#traffic_direction}
    */
    readonly trafficDirection: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#traffic_mirror_filter_id Ec2TrafficMirrorFilterRule#traffic_mirror_filter_id}
    */
    readonly trafficMirrorFilterId: string;
    /**
    * destination_port_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#destination_port_range Ec2TrafficMirrorFilterRule#destination_port_range}
    */
    readonly destinationPortRange?: Ec2TrafficMirrorFilterRuleDestinationPortRange;
    /**
    * source_port_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#source_port_range Ec2TrafficMirrorFilterRule#source_port_range}
    */
    readonly sourcePortRange?: Ec2TrafficMirrorFilterRuleSourcePortRange;
}
export interface Ec2TrafficMirrorFilterRuleDestinationPortRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}
    */
    readonly toPort?: number;
}
export declare function ec2TrafficMirrorFilterRuleDestinationPortRangeToTerraform(struct?: Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference | Ec2TrafficMirrorFilterRuleDestinationPortRange): any;
export declare function ec2TrafficMirrorFilterRuleDestinationPortRangeToHclTerraform(struct?: Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference | Ec2TrafficMirrorFilterRuleDestinationPortRange): any;
export declare class Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2TrafficMirrorFilterRuleDestinationPortRange | undefined;
    set internalValue(value: Ec2TrafficMirrorFilterRuleDestinationPortRange | undefined);
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
    resetFromPort(): void;
    get fromPortInput(): number | undefined;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    resetToPort(): void;
    get toPortInput(): number | undefined;
}
export interface Ec2TrafficMirrorFilterRuleSourcePortRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}
    */
    readonly toPort?: number;
}
export declare function ec2TrafficMirrorFilterRuleSourcePortRangeToTerraform(struct?: Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference | Ec2TrafficMirrorFilterRuleSourcePortRange): any;
export declare function ec2TrafficMirrorFilterRuleSourcePortRangeToHclTerraform(struct?: Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference | Ec2TrafficMirrorFilterRuleSourcePortRange): any;
export declare class Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2TrafficMirrorFilterRuleSourcePortRange | undefined;
    set internalValue(value: Ec2TrafficMirrorFilterRuleSourcePortRange | undefined);
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
    resetFromPort(): void;
    get fromPortInput(): number | undefined;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    resetToPort(): void;
    get toPortInput(): number | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule aws_ec2_traffic_mirror_filter_rule}
*/
export declare class Ec2TrafficMirrorFilterRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_traffic_mirror_filter_rule";
    /**
    * Generates CDKTF code for importing a Ec2TrafficMirrorFilterRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2TrafficMirrorFilterRule to import
    * @param importFromId The id of the existing Ec2TrafficMirrorFilterRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2TrafficMirrorFilterRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_filter_rule aws_ec2_traffic_mirror_filter_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TrafficMirrorFilterRuleConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TrafficMirrorFilterRuleConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _destinationCidrBlock?;
    get destinationCidrBlock(): string;
    set destinationCidrBlock(value: string);
    get destinationCidrBlockInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _protocol?;
    get protocol(): number;
    set protocol(value: number);
    resetProtocol(): void;
    get protocolInput(): number | undefined;
    private _ruleAction?;
    get ruleAction(): string;
    set ruleAction(value: string);
    get ruleActionInput(): string | undefined;
    private _ruleNumber?;
    get ruleNumber(): number;
    set ruleNumber(value: number);
    get ruleNumberInput(): number | undefined;
    private _sourceCidrBlock?;
    get sourceCidrBlock(): string;
    set sourceCidrBlock(value: string);
    get sourceCidrBlockInput(): string | undefined;
    private _trafficDirection?;
    get trafficDirection(): string;
    set trafficDirection(value: string);
    get trafficDirectionInput(): string | undefined;
    private _trafficMirrorFilterId?;
    get trafficMirrorFilterId(): string;
    set trafficMirrorFilterId(value: string);
    get trafficMirrorFilterIdInput(): string | undefined;
    private _destinationPortRange;
    get destinationPortRange(): Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference;
    putDestinationPortRange(value: Ec2TrafficMirrorFilterRuleDestinationPortRange): void;
    resetDestinationPortRange(): void;
    get destinationPortRangeInput(): Ec2TrafficMirrorFilterRuleDestinationPortRange | undefined;
    private _sourcePortRange;
    get sourcePortRange(): Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference;
    putSourcePortRange(value: Ec2TrafficMirrorFilterRuleSourcePortRange): void;
    resetSourcePortRange(): void;
    get sourcePortRangeInput(): Ec2TrafficMirrorFilterRuleSourcePortRange | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
