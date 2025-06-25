/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2NetworkInsightsPathConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}
    */
    readonly destination?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}
    */
    readonly destinationIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}
    */
    readonly destinationPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}
    */
    readonly sourceIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * filter_at_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#filter_at_destination Ec2NetworkInsightsPath#filter_at_destination}
    */
    readonly filterAtDestination?: Ec2NetworkInsightsPathFilterAtDestination;
    /**
    * filter_at_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#filter_at_source Ec2NetworkInsightsPath#filter_at_source}
    */
    readonly filterAtSource?: Ec2NetworkInsightsPathFilterAtSource;
}
export interface Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}
    */
    readonly toPort?: number;
}
export declare function ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeToTerraform(struct?: Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference | Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange): any;
export declare function ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeToHclTerraform(struct?: Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference | Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange): any;
export declare class Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange | undefined;
    set internalValue(value: Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange | undefined);
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
export interface Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}
    */
    readonly toPort?: number;
}
export declare function ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeToTerraform(struct?: Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference | Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange): any;
export declare function ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeToHclTerraform(struct?: Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference | Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange): any;
export declare class Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange | undefined;
    set internalValue(value: Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange | undefined);
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
export interface Ec2NetworkInsightsPathFilterAtDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#destination_address Ec2NetworkInsightsPath#destination_address}
    */
    readonly destinationAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#source_address Ec2NetworkInsightsPath#source_address}
    */
    readonly sourceAddress?: string;
    /**
    * destination_port_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#destination_port_range Ec2NetworkInsightsPath#destination_port_range}
    */
    readonly destinationPortRange?: Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange;
    /**
    * source_port_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#source_port_range Ec2NetworkInsightsPath#source_port_range}
    */
    readonly sourcePortRange?: Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange;
}
export declare function ec2NetworkInsightsPathFilterAtDestinationToTerraform(struct?: Ec2NetworkInsightsPathFilterAtDestinationOutputReference | Ec2NetworkInsightsPathFilterAtDestination): any;
export declare function ec2NetworkInsightsPathFilterAtDestinationToHclTerraform(struct?: Ec2NetworkInsightsPathFilterAtDestinationOutputReference | Ec2NetworkInsightsPathFilterAtDestination): any;
export declare class Ec2NetworkInsightsPathFilterAtDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2NetworkInsightsPathFilterAtDestination | undefined;
    set internalValue(value: Ec2NetworkInsightsPathFilterAtDestination | undefined);
    private _destinationAddress?;
    get destinationAddress(): string;
    set destinationAddress(value: string);
    resetDestinationAddress(): void;
    get destinationAddressInput(): string | undefined;
    private _sourceAddress?;
    get sourceAddress(): string;
    set sourceAddress(value: string);
    resetSourceAddress(): void;
    get sourceAddressInput(): string | undefined;
    private _destinationPortRange;
    get destinationPortRange(): Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference;
    putDestinationPortRange(value: Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange): void;
    resetDestinationPortRange(): void;
    get destinationPortRangeInput(): Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange | undefined;
    private _sourcePortRange;
    get sourcePortRange(): Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference;
    putSourcePortRange(value: Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange): void;
    resetSourcePortRange(): void;
    get sourcePortRangeInput(): Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange | undefined;
}
export interface Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}
    */
    readonly toPort?: number;
}
export declare function ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeToTerraform(struct?: Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference | Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange): any;
export declare function ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeToHclTerraform(struct?: Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference | Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange): any;
export declare class Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange | undefined;
    set internalValue(value: Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange | undefined);
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
export interface Ec2NetworkInsightsPathFilterAtSourceSourcePortRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}
    */
    readonly toPort?: number;
}
export declare function ec2NetworkInsightsPathFilterAtSourceSourcePortRangeToTerraform(struct?: Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference | Ec2NetworkInsightsPathFilterAtSourceSourcePortRange): any;
export declare function ec2NetworkInsightsPathFilterAtSourceSourcePortRangeToHclTerraform(struct?: Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference | Ec2NetworkInsightsPathFilterAtSourceSourcePortRange): any;
export declare class Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2NetworkInsightsPathFilterAtSourceSourcePortRange | undefined;
    set internalValue(value: Ec2NetworkInsightsPathFilterAtSourceSourcePortRange | undefined);
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
export interface Ec2NetworkInsightsPathFilterAtSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#destination_address Ec2NetworkInsightsPath#destination_address}
    */
    readonly destinationAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#source_address Ec2NetworkInsightsPath#source_address}
    */
    readonly sourceAddress?: string;
    /**
    * destination_port_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#destination_port_range Ec2NetworkInsightsPath#destination_port_range}
    */
    readonly destinationPortRange?: Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange;
    /**
    * source_port_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#source_port_range Ec2NetworkInsightsPath#source_port_range}
    */
    readonly sourcePortRange?: Ec2NetworkInsightsPathFilterAtSourceSourcePortRange;
}
export declare function ec2NetworkInsightsPathFilterAtSourceToTerraform(struct?: Ec2NetworkInsightsPathFilterAtSourceOutputReference | Ec2NetworkInsightsPathFilterAtSource): any;
export declare function ec2NetworkInsightsPathFilterAtSourceToHclTerraform(struct?: Ec2NetworkInsightsPathFilterAtSourceOutputReference | Ec2NetworkInsightsPathFilterAtSource): any;
export declare class Ec2NetworkInsightsPathFilterAtSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2NetworkInsightsPathFilterAtSource | undefined;
    set internalValue(value: Ec2NetworkInsightsPathFilterAtSource | undefined);
    private _destinationAddress?;
    get destinationAddress(): string;
    set destinationAddress(value: string);
    resetDestinationAddress(): void;
    get destinationAddressInput(): string | undefined;
    private _sourceAddress?;
    get sourceAddress(): string;
    set sourceAddress(value: string);
    resetSourceAddress(): void;
    get sourceAddressInput(): string | undefined;
    private _destinationPortRange;
    get destinationPortRange(): Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference;
    putDestinationPortRange(value: Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange): void;
    resetDestinationPortRange(): void;
    get destinationPortRangeInput(): Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange | undefined;
    private _sourcePortRange;
    get sourcePortRange(): Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference;
    putSourcePortRange(value: Ec2NetworkInsightsPathFilterAtSourceSourcePortRange): void;
    resetSourcePortRange(): void;
    get sourcePortRangeInput(): Ec2NetworkInsightsPathFilterAtSourceSourcePortRange | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path aws_ec2_network_insights_path}
*/
export declare class Ec2NetworkInsightsPath extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_network_insights_path";
    /**
    * Generates CDKTF code for importing a Ec2NetworkInsightsPath resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2NetworkInsightsPath to import
    * @param importFromId The id of the existing Ec2NetworkInsightsPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2NetworkInsightsPath to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_network_insights_path aws_ec2_network_insights_path} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2NetworkInsightsPathConfig
    */
    constructor(scope: Construct, id: string, config: Ec2NetworkInsightsPathConfig);
    get arn(): string;
    private _destination?;
    get destination(): string;
    set destination(value: string);
    resetDestination(): void;
    get destinationInput(): string | undefined;
    get destinationArn(): string;
    private _destinationIp?;
    get destinationIp(): string;
    set destinationIp(value: string);
    resetDestinationIp(): void;
    get destinationIpInput(): string | undefined;
    private _destinationPort?;
    get destinationPort(): number;
    set destinationPort(value: number);
    resetDestinationPort(): void;
    get destinationPortInput(): number | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string | undefined;
    get sourceArn(): string;
    private _sourceIp?;
    get sourceIp(): string;
    set sourceIp(value: string);
    resetSourceIp(): void;
    get sourceIpInput(): string | undefined;
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
    private _filterAtDestination;
    get filterAtDestination(): Ec2NetworkInsightsPathFilterAtDestinationOutputReference;
    putFilterAtDestination(value: Ec2NetworkInsightsPathFilterAtDestination): void;
    resetFilterAtDestination(): void;
    get filterAtDestinationInput(): Ec2NetworkInsightsPathFilterAtDestination | undefined;
    private _filterAtSource;
    get filterAtSource(): Ec2NetworkInsightsPathFilterAtSourceOutputReference;
    putFilterAtSource(value: Ec2NetworkInsightsPathFilterAtSource): void;
    resetFilterAtSource(): void;
    get filterAtSourceInput(): Ec2NetworkInsightsPathFilterAtSource | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
