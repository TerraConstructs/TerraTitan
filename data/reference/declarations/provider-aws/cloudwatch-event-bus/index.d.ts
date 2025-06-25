/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchEventBusConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_event_bus#description CloudwatchEventBus#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_event_bus#event_source_name CloudwatchEventBus#event_source_name}
    */
    readonly eventSourceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_event_bus#id CloudwatchEventBus#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_event_bus#kms_key_identifier CloudwatchEventBus#kms_key_identifier}
    */
    readonly kmsKeyIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_event_bus#name CloudwatchEventBus#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_event_bus#tags CloudwatchEventBus#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_event_bus#tags_all CloudwatchEventBus#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * dead_letter_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_event_bus#dead_letter_config CloudwatchEventBus#dead_letter_config}
    */
    readonly deadLetterConfig?: CloudwatchEventBusDeadLetterConfig;
}
export interface CloudwatchEventBusDeadLetterConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_event_bus#arn CloudwatchEventBus#arn}
    */
    readonly arn?: string;
}
export declare function cloudwatchEventBusDeadLetterConfigToTerraform(struct?: CloudwatchEventBusDeadLetterConfigOutputReference | CloudwatchEventBusDeadLetterConfig): any;
export declare function cloudwatchEventBusDeadLetterConfigToHclTerraform(struct?: CloudwatchEventBusDeadLetterConfigOutputReference | CloudwatchEventBusDeadLetterConfig): any;
export declare class CloudwatchEventBusDeadLetterConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventBusDeadLetterConfig | undefined;
    set internalValue(value: CloudwatchEventBusDeadLetterConfig | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_event_bus aws_cloudwatch_event_bus}
*/
export declare class CloudwatchEventBus extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_event_bus";
    /**
    * Generates CDKTF code for importing a CloudwatchEventBus resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchEventBus to import
    * @param importFromId The id of the existing CloudwatchEventBus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_event_bus#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchEventBus to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_event_bus aws_cloudwatch_event_bus} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventBusConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchEventBusConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _eventSourceName?;
    get eventSourceName(): string;
    set eventSourceName(value: string);
    resetEventSourceName(): void;
    get eventSourceNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyIdentifier?;
    get kmsKeyIdentifier(): string;
    set kmsKeyIdentifier(value: string);
    resetKmsKeyIdentifier(): void;
    get kmsKeyIdentifierInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _deadLetterConfig;
    get deadLetterConfig(): CloudwatchEventBusDeadLetterConfigOutputReference;
    putDeadLetterConfig(value: CloudwatchEventBusDeadLetterConfig): void;
    resetDeadLetterConfig(): void;
    get deadLetterConfigInput(): CloudwatchEventBusDeadLetterConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
