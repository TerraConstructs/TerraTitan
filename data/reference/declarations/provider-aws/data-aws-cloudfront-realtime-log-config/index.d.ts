/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudfrontRealtimeLogConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_realtime_log_config#id DataAwsCloudfrontRealtimeLogConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_realtime_log_config#name DataAwsCloudfrontRealtimeLogConfig#name}
    */
    readonly name: string;
}
export interface DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig {
}
export declare function dataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToTerraform(struct?: DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig): any;
export declare function dataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToHclTerraform(struct?: DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig): any;
export declare class DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig | undefined;
    set internalValue(value: DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig | undefined);
    get roleArn(): string;
    get streamArn(): string;
}
export declare class DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference;
}
export interface DataAwsCloudfrontRealtimeLogConfigEndpoint {
}
export declare function dataAwsCloudfrontRealtimeLogConfigEndpointToTerraform(struct?: DataAwsCloudfrontRealtimeLogConfigEndpoint): any;
export declare function dataAwsCloudfrontRealtimeLogConfigEndpointToHclTerraform(struct?: DataAwsCloudfrontRealtimeLogConfigEndpoint): any;
export declare class DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontRealtimeLogConfigEndpoint | undefined;
    set internalValue(value: DataAwsCloudfrontRealtimeLogConfigEndpoint | undefined);
    private _kinesisStreamConfig;
    get kinesisStreamConfig(): DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList;
    get streamType(): string;
}
export declare class DataAwsCloudfrontRealtimeLogConfigEndpointList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config}
*/
export declare class DataAwsCloudfrontRealtimeLogConfig extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cloudfront_realtime_log_config";
    /**
    * Generates CDKTF code for importing a DataAwsCloudfrontRealtimeLogConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCloudfrontRealtimeLogConfig to import
    * @param importFromId The id of the existing DataAwsCloudfrontRealtimeLogConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_realtime_log_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCloudfrontRealtimeLogConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontRealtimeLogConfigConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCloudfrontRealtimeLogConfigConfig);
    get arn(): string;
    private _endpoint;
    get endpoint(): DataAwsCloudfrontRealtimeLogConfigEndpointList;
    get fields(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get samplingRate(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
