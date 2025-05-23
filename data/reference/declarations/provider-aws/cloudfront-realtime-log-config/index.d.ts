/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontRealtimeLogConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_realtime_log_config#fields CloudfrontRealtimeLogConfig#fields}
    */
    readonly fields: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_realtime_log_config#id CloudfrontRealtimeLogConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_realtime_log_config#name CloudfrontRealtimeLogConfig#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_realtime_log_config#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}
    */
    readonly samplingRate: number;
    /**
    * endpoint block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_realtime_log_config#endpoint CloudfrontRealtimeLogConfig#endpoint}
    */
    readonly endpoint: CloudfrontRealtimeLogConfigEndpoint;
}
export interface CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_realtime_log_config#role_arn CloudfrontRealtimeLogConfig#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_realtime_log_config#stream_arn CloudfrontRealtimeLogConfig#stream_arn}
    */
    readonly streamArn: string;
}
export declare function cloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToTerraform(struct?: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference | CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig): any;
export declare function cloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToHclTerraform(struct?: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference | CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig): any;
export declare class CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig | undefined;
    set internalValue(value: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _streamArn?;
    get streamArn(): string;
    set streamArn(value: string);
    get streamArnInput(): string | undefined;
}
export interface CloudfrontRealtimeLogConfigEndpoint {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_realtime_log_config#stream_type CloudfrontRealtimeLogConfig#stream_type}
    */
    readonly streamType: string;
    /**
    * kinesis_stream_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_realtime_log_config#kinesis_stream_config CloudfrontRealtimeLogConfig#kinesis_stream_config}
    */
    readonly kinesisStreamConfig: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig;
}
export declare function cloudfrontRealtimeLogConfigEndpointToTerraform(struct?: CloudfrontRealtimeLogConfigEndpointOutputReference | CloudfrontRealtimeLogConfigEndpoint): any;
export declare function cloudfrontRealtimeLogConfigEndpointToHclTerraform(struct?: CloudfrontRealtimeLogConfigEndpointOutputReference | CloudfrontRealtimeLogConfigEndpoint): any;
export declare class CloudfrontRealtimeLogConfigEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontRealtimeLogConfigEndpoint | undefined;
    set internalValue(value: CloudfrontRealtimeLogConfigEndpoint | undefined);
    private _streamType?;
    get streamType(): string;
    set streamType(value: string);
    get streamTypeInput(): string | undefined;
    private _kinesisStreamConfig;
    get kinesisStreamConfig(): CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference;
    putKinesisStreamConfig(value: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig): void;
    get kinesisStreamConfigInput(): CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config}
*/
export declare class CloudfrontRealtimeLogConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudfront_realtime_log_config";
    /**
    * Generates CDKTF code for importing a CloudfrontRealtimeLogConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontRealtimeLogConfig to import
    * @param importFromId The id of the existing CloudfrontRealtimeLogConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_realtime_log_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontRealtimeLogConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontRealtimeLogConfigConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontRealtimeLogConfigConfig);
    get arn(): string;
    private _fields?;
    get fields(): string[];
    set fields(value: string[]);
    get fieldsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _samplingRate?;
    get samplingRate(): number;
    set samplingRate(value: number);
    get samplingRateInput(): number | undefined;
    private _endpoint;
    get endpoint(): CloudfrontRealtimeLogConfigEndpointOutputReference;
    putEndpoint(value: CloudfrontRealtimeLogConfigEndpoint): void;
    get endpointInput(): CloudfrontRealtimeLogConfigEndpoint | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
