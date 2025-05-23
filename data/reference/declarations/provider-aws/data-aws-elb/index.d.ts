/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elb#id DataAwsElb#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elb#name DataAwsElb#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elb#tags DataAwsElb#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsElbAccessLogs {
}
export declare function dataAwsElbAccessLogsToTerraform(struct?: DataAwsElbAccessLogs): any;
export declare function dataAwsElbAccessLogsToHclTerraform(struct?: DataAwsElbAccessLogs): any;
export declare class DataAwsElbAccessLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElbAccessLogs | undefined;
    set internalValue(value: DataAwsElbAccessLogs | undefined);
    get bucket(): string;
    get bucketPrefix(): string;
    get enabled(): cdktf.IResolvable;
    get interval(): number;
}
export declare class DataAwsElbAccessLogsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsElbAccessLogsOutputReference;
}
export interface DataAwsElbHealthCheck {
}
export declare function dataAwsElbHealthCheckToTerraform(struct?: DataAwsElbHealthCheck): any;
export declare function dataAwsElbHealthCheckToHclTerraform(struct?: DataAwsElbHealthCheck): any;
export declare class DataAwsElbHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElbHealthCheck | undefined;
    set internalValue(value: DataAwsElbHealthCheck | undefined);
    get healthyThreshold(): number;
    get interval(): number;
    get target(): string;
    get timeout(): number;
    get unhealthyThreshold(): number;
}
export declare class DataAwsElbHealthCheckList extends cdktf.ComplexList {
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
    get(index: number): DataAwsElbHealthCheckOutputReference;
}
export interface DataAwsElbListener {
}
export declare function dataAwsElbListenerToTerraform(struct?: DataAwsElbListener): any;
export declare function dataAwsElbListenerToHclTerraform(struct?: DataAwsElbListener): any;
export declare class DataAwsElbListenerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElbListener | undefined;
    set internalValue(value: DataAwsElbListener | undefined);
    get instancePort(): number;
    get instanceProtocol(): string;
    get lbPort(): number;
    get lbProtocol(): string;
    get sslCertificateId(): string;
}
export declare class DataAwsElbListenerList extends cdktf.ComplexList {
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
    get(index: number): DataAwsElbListenerOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elb aws_elb}
*/
export declare class DataAwsElb extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_elb";
    /**
    * Generates CDKTF code for importing a DataAwsElb resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsElb to import
    * @param importFromId The id of the existing DataAwsElb that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elb#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsElb to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elb aws_elb} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElbConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsElbConfig);
    private _accessLogs;
    get accessLogs(): DataAwsElbAccessLogsList;
    get arn(): string;
    get availabilityZones(): string[];
    get connectionDraining(): cdktf.IResolvable;
    get connectionDrainingTimeout(): number;
    get crossZoneLoadBalancing(): cdktf.IResolvable;
    get desyncMitigationMode(): string;
    get dnsName(): string;
    private _healthCheck;
    get healthCheck(): DataAwsElbHealthCheckList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get idleTimeout(): number;
    get instances(): string[];
    get internal(): cdktf.IResolvable;
    private _listener;
    get listener(): DataAwsElbListenerList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get securityGroups(): string[];
    get sourceSecurityGroup(): string;
    get sourceSecurityGroupId(): string;
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
    get zoneId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
