/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAlbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb#arn DataAwsAlb#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb#id DataAwsAlb#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb#name DataAwsAlb#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb#tags DataAwsAlb#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb#timeouts DataAwsAlb#timeouts}
    */
    readonly timeouts?: DataAwsAlbTimeouts;
}
export interface DataAwsAlbAccessLogs {
}
export declare function dataAwsAlbAccessLogsToTerraform(struct?: DataAwsAlbAccessLogs): any;
export declare function dataAwsAlbAccessLogsToHclTerraform(struct?: DataAwsAlbAccessLogs): any;
export declare class DataAwsAlbAccessLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAlbAccessLogs | undefined;
    set internalValue(value: DataAwsAlbAccessLogs | undefined);
    get bucket(): string;
    get enabled(): cdktf.IResolvable;
    get prefix(): string;
}
export declare class DataAwsAlbAccessLogsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAlbAccessLogsOutputReference;
}
export interface DataAwsAlbConnectionLogs {
}
export declare function dataAwsAlbConnectionLogsToTerraform(struct?: DataAwsAlbConnectionLogs): any;
export declare function dataAwsAlbConnectionLogsToHclTerraform(struct?: DataAwsAlbConnectionLogs): any;
export declare class DataAwsAlbConnectionLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAlbConnectionLogs | undefined;
    set internalValue(value: DataAwsAlbConnectionLogs | undefined);
    get bucket(): string;
    get enabled(): cdktf.IResolvable;
    get prefix(): string;
}
export declare class DataAwsAlbConnectionLogsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAlbConnectionLogsOutputReference;
}
export interface DataAwsAlbSubnetMapping {
}
export declare function dataAwsAlbSubnetMappingToTerraform(struct?: DataAwsAlbSubnetMapping): any;
export declare function dataAwsAlbSubnetMappingToHclTerraform(struct?: DataAwsAlbSubnetMapping): any;
export declare class DataAwsAlbSubnetMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAlbSubnetMapping | undefined;
    set internalValue(value: DataAwsAlbSubnetMapping | undefined);
    get allocationId(): string;
    get ipv6Address(): string;
    get outpostId(): string;
    get privateIpv4Address(): string;
    get subnetId(): string;
}
export declare class DataAwsAlbSubnetMappingList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAlbSubnetMappingOutputReference;
}
export interface DataAwsAlbTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb#read DataAwsAlb#read}
    */
    readonly read?: string;
}
export declare function dataAwsAlbTimeoutsToTerraform(struct?: DataAwsAlbTimeouts | cdktf.IResolvable): any;
export declare function dataAwsAlbTimeoutsToHclTerraform(struct?: DataAwsAlbTimeouts | cdktf.IResolvable): any;
export declare class DataAwsAlbTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsAlbTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsAlbTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb aws_alb}
*/
export declare class DataAwsAlb extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_alb";
    /**
    * Generates CDKTF code for importing a DataAwsAlb resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAlb to import
    * @param importFromId The id of the existing DataAwsAlb that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAlb to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb aws_alb} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAlbConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsAlbConfig);
    private _accessLogs;
    get accessLogs(): DataAwsAlbAccessLogsList;
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    get arnSuffix(): string;
    get clientKeepAlive(): number;
    private _connectionLogs;
    get connectionLogs(): DataAwsAlbConnectionLogsList;
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
    get subnetMapping(): DataAwsAlbSubnetMappingList;
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
    get timeouts(): DataAwsAlbTimeoutsOutputReference;
    putTimeouts(value: DataAwsAlbTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsAlbTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
