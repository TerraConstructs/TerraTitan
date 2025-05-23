/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb#arn DataAwsLb#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb#id DataAwsLb#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb#name DataAwsLb#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb#tags DataAwsLb#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb#timeouts DataAwsLb#timeouts}
    */
    readonly timeouts?: DataAwsLbTimeouts;
}
export interface DataAwsLbAccessLogs {
}
export declare function dataAwsLbAccessLogsToTerraform(struct?: DataAwsLbAccessLogs): any;
export declare function dataAwsLbAccessLogsToHclTerraform(struct?: DataAwsLbAccessLogs): any;
export declare class DataAwsLbAccessLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbAccessLogs | undefined;
    set internalValue(value: DataAwsLbAccessLogs | undefined);
    get bucket(): string;
    get enabled(): cdktf.IResolvable;
    get prefix(): string;
}
export declare class DataAwsLbAccessLogsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLbAccessLogsOutputReference;
}
export interface DataAwsLbConnectionLogs {
}
export declare function dataAwsLbConnectionLogsToTerraform(struct?: DataAwsLbConnectionLogs): any;
export declare function dataAwsLbConnectionLogsToHclTerraform(struct?: DataAwsLbConnectionLogs): any;
export declare class DataAwsLbConnectionLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbConnectionLogs | undefined;
    set internalValue(value: DataAwsLbConnectionLogs | undefined);
    get bucket(): string;
    get enabled(): cdktf.IResolvable;
    get prefix(): string;
}
export declare class DataAwsLbConnectionLogsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLbConnectionLogsOutputReference;
}
export interface DataAwsLbSubnetMapping {
}
export declare function dataAwsLbSubnetMappingToTerraform(struct?: DataAwsLbSubnetMapping): any;
export declare function dataAwsLbSubnetMappingToHclTerraform(struct?: DataAwsLbSubnetMapping): any;
export declare class DataAwsLbSubnetMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbSubnetMapping | undefined;
    set internalValue(value: DataAwsLbSubnetMapping | undefined);
    get allocationId(): string;
    get ipv6Address(): string;
    get outpostId(): string;
    get privateIpv4Address(): string;
    get subnetId(): string;
}
export declare class DataAwsLbSubnetMappingList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLbSubnetMappingOutputReference;
}
export interface DataAwsLbTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb#read DataAwsLb#read}
    */
    readonly read?: string;
}
export declare function dataAwsLbTimeoutsToTerraform(struct?: DataAwsLbTimeouts | cdktf.IResolvable): any;
export declare function dataAwsLbTimeoutsToHclTerraform(struct?: DataAwsLbTimeouts | cdktf.IResolvable): any;
export declare class DataAwsLbTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLbTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb aws_lb}
*/
export declare class DataAwsLb extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lb";
    /**
    * Generates CDKTF code for importing a DataAwsLb resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLb to import
    * @param importFromId The id of the existing DataAwsLb that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLb to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb aws_lb} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLbConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsLbConfig);
    private _accessLogs;
    get accessLogs(): DataAwsLbAccessLogsList;
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    get arnSuffix(): string;
    get clientKeepAlive(): number;
    private _connectionLogs;
    get connectionLogs(): DataAwsLbConnectionLogsList;
    get customerOwnedIpv4Pool(): string;
    get desyncMitigationMode(): string;
    get dnsName(): string;
    get dnsRecordClientRoutingPolicy(): string;
    get dropInvalidHeaderFields(): cdktf.IResolvable;
    get enableCrossZoneLoadBalancing(): cdktf.IResolvable;
    get enableDeletionProtection(): cdktf.IResolvable;
    get enableHttp2(): cdktf.IResolvable;
    get enableTlsVersionAndCipherSuiteHeaders(): cdktf.IResolvable;
    get enableWafFailOpen(): cdktf.IResolvable;
    get enableXffClientPort(): cdktf.IResolvable;
    get enableZonalShift(): cdktf.IResolvable;
    get enforceSecurityGroupInboundRulesOnPrivateLinkTraffic(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get idleTimeout(): number;
    get internal(): cdktf.IResolvable;
    get ipAddressType(): string;
    get loadBalancerType(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get preserveHostHeader(): cdktf.IResolvable;
    get securityGroups(): string[];
    private _subnetMapping;
    get subnetMapping(): DataAwsLbSubnetMappingList;
    get subnets(): string[];
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
    get vpcId(): string;
    get xffHeaderProcessingMode(): string;
    get zoneId(): string;
    private _timeouts;
    get timeouts(): DataAwsLbTimeoutsOutputReference;
    putTimeouts(value: DataAwsLbTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsLbTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
