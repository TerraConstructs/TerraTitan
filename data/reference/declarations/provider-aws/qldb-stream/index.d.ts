/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QldbStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream#exclusive_end_time QldbStream#exclusive_end_time}
    */
    readonly exclusiveEndTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream#id QldbStream#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream#inclusive_start_time QldbStream#inclusive_start_time}
    */
    readonly inclusiveStartTime: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream#ledger_name QldbStream#ledger_name}
    */
    readonly ledgerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream#role_arn QldbStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream#stream_name QldbStream#stream_name}
    */
    readonly streamName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream#tags QldbStream#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream#tags_all QldbStream#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * kinesis_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream#kinesis_configuration QldbStream#kinesis_configuration}
    */
    readonly kinesisConfiguration: QldbStreamKinesisConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream#timeouts QldbStream#timeouts}
    */
    readonly timeouts?: QldbStreamTimeouts;
}
export interface QldbStreamKinesisConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream#aggregation_enabled QldbStream#aggregation_enabled}
    */
    readonly aggregationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream#stream_arn QldbStream#stream_arn}
    */
    readonly streamArn: string;
}
export declare function qldbStreamKinesisConfigurationToTerraform(struct?: QldbStreamKinesisConfigurationOutputReference | QldbStreamKinesisConfiguration): any;
export declare function qldbStreamKinesisConfigurationToHclTerraform(struct?: QldbStreamKinesisConfigurationOutputReference | QldbStreamKinesisConfiguration): any;
export declare class QldbStreamKinesisConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QldbStreamKinesisConfiguration | undefined;
    set internalValue(value: QldbStreamKinesisConfiguration | undefined);
    private _aggregationEnabled?;
    get aggregationEnabled(): boolean | cdktf.IResolvable;
    set aggregationEnabled(value: boolean | cdktf.IResolvable);
    resetAggregationEnabled(): void;
    get aggregationEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _streamArn?;
    get streamArn(): string;
    set streamArn(value: string);
    get streamArnInput(): string | undefined;
}
export interface QldbStreamTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream#create QldbStream#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream#delete QldbStream#delete}
    */
    readonly delete?: string;
}
export declare function qldbStreamTimeoutsToTerraform(struct?: QldbStreamTimeouts | cdktf.IResolvable): any;
export declare function qldbStreamTimeoutsToHclTerraform(struct?: QldbStreamTimeouts | cdktf.IResolvable): any;
export declare class QldbStreamTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QldbStreamTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: QldbStreamTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream aws_qldb_stream}
*/
export declare class QldbStream extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_qldb_stream";
    /**
    * Generates CDKTF code for importing a QldbStream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QldbStream to import
    * @param importFromId The id of the existing QldbStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QldbStream to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/qldb_stream aws_qldb_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QldbStreamConfig
    */
    constructor(scope: Construct, id: string, config: QldbStreamConfig);
    get arn(): string;
    private _exclusiveEndTime?;
    get exclusiveEndTime(): string;
    set exclusiveEndTime(value: string);
    resetExclusiveEndTime(): void;
    get exclusiveEndTimeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _inclusiveStartTime?;
    get inclusiveStartTime(): string;
    set inclusiveStartTime(value: string);
    get inclusiveStartTimeInput(): string | undefined;
    private _ledgerName?;
    get ledgerName(): string;
    set ledgerName(value: string);
    get ledgerNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _streamName?;
    get streamName(): string;
    set streamName(value: string);
    get streamNameInput(): string | undefined;
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
    private _kinesisConfiguration;
    get kinesisConfiguration(): QldbStreamKinesisConfigurationOutputReference;
    putKinesisConfiguration(value: QldbStreamKinesisConfiguration): void;
    get kinesisConfigurationInput(): QldbStreamKinesisConfiguration | undefined;
    private _timeouts;
    get timeouts(): QldbStreamTimeoutsOutputReference;
    putTimeouts(value: QldbStreamTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | QldbStreamTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
