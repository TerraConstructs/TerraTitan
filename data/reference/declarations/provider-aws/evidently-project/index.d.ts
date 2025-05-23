/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EvidentlyProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#description EvidentlyProject#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#id EvidentlyProject#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#name EvidentlyProject#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#tags EvidentlyProject#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#tags_all EvidentlyProject#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * data_delivery block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#data_delivery EvidentlyProject#data_delivery}
    */
    readonly dataDelivery?: EvidentlyProjectDataDelivery;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#timeouts EvidentlyProject#timeouts}
    */
    readonly timeouts?: EvidentlyProjectTimeouts;
}
export interface EvidentlyProjectDataDeliveryCloudwatchLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#log_group EvidentlyProject#log_group}
    */
    readonly logGroup?: string;
}
export declare function evidentlyProjectDataDeliveryCloudwatchLogsToTerraform(struct?: EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference | EvidentlyProjectDataDeliveryCloudwatchLogs): any;
export declare function evidentlyProjectDataDeliveryCloudwatchLogsToHclTerraform(struct?: EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference | EvidentlyProjectDataDeliveryCloudwatchLogs): any;
export declare class EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EvidentlyProjectDataDeliveryCloudwatchLogs | undefined;
    set internalValue(value: EvidentlyProjectDataDeliveryCloudwatchLogs | undefined);
    private _logGroup?;
    get logGroup(): string;
    set logGroup(value: string);
    resetLogGroup(): void;
    get logGroupInput(): string | undefined;
}
export interface EvidentlyProjectDataDeliveryS3Destination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#bucket EvidentlyProject#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#prefix EvidentlyProject#prefix}
    */
    readonly prefix?: string;
}
export declare function evidentlyProjectDataDeliveryS3DestinationToTerraform(struct?: EvidentlyProjectDataDeliveryS3DestinationOutputReference | EvidentlyProjectDataDeliveryS3Destination): any;
export declare function evidentlyProjectDataDeliveryS3DestinationToHclTerraform(struct?: EvidentlyProjectDataDeliveryS3DestinationOutputReference | EvidentlyProjectDataDeliveryS3Destination): any;
export declare class EvidentlyProjectDataDeliveryS3DestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EvidentlyProjectDataDeliveryS3Destination | undefined;
    set internalValue(value: EvidentlyProjectDataDeliveryS3Destination | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
}
export interface EvidentlyProjectDataDelivery {
    /**
    * cloudwatch_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#cloudwatch_logs EvidentlyProject#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: EvidentlyProjectDataDeliveryCloudwatchLogs;
    /**
    * s3_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#s3_destination EvidentlyProject#s3_destination}
    */
    readonly s3Destination?: EvidentlyProjectDataDeliveryS3Destination;
}
export declare function evidentlyProjectDataDeliveryToTerraform(struct?: EvidentlyProjectDataDeliveryOutputReference | EvidentlyProjectDataDelivery): any;
export declare function evidentlyProjectDataDeliveryToHclTerraform(struct?: EvidentlyProjectDataDeliveryOutputReference | EvidentlyProjectDataDelivery): any;
export declare class EvidentlyProjectDataDeliveryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EvidentlyProjectDataDelivery | undefined;
    set internalValue(value: EvidentlyProjectDataDelivery | undefined);
    private _cloudwatchLogs;
    get cloudwatchLogs(): EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference;
    putCloudwatchLogs(value: EvidentlyProjectDataDeliveryCloudwatchLogs): void;
    resetCloudwatchLogs(): void;
    get cloudwatchLogsInput(): EvidentlyProjectDataDeliveryCloudwatchLogs | undefined;
    private _s3Destination;
    get s3Destination(): EvidentlyProjectDataDeliveryS3DestinationOutputReference;
    putS3Destination(value: EvidentlyProjectDataDeliveryS3Destination): void;
    resetS3Destination(): void;
    get s3DestinationInput(): EvidentlyProjectDataDeliveryS3Destination | undefined;
}
export interface EvidentlyProjectTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#create EvidentlyProject#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#delete EvidentlyProject#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#update EvidentlyProject#update}
    */
    readonly update?: string;
}
export declare function evidentlyProjectTimeoutsToTerraform(struct?: EvidentlyProjectTimeouts | cdktf.IResolvable): any;
export declare function evidentlyProjectTimeoutsToHclTerraform(struct?: EvidentlyProjectTimeouts | cdktf.IResolvable): any;
export declare class EvidentlyProjectTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EvidentlyProjectTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EvidentlyProjectTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project aws_evidently_project}
*/
export declare class EvidentlyProject extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_evidently_project";
    /**
    * Generates CDKTF code for importing a EvidentlyProject resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EvidentlyProject to import
    * @param importFromId The id of the existing EvidentlyProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EvidentlyProject to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_project aws_evidently_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EvidentlyProjectConfig
    */
    constructor(scope: Construct, id: string, config: EvidentlyProjectConfig);
    get activeExperimentCount(): number;
    get activeLaunchCount(): number;
    get arn(): string;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get experimentCount(): number;
    get featureCount(): number;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedTime(): string;
    get launchCount(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get status(): string;
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
    private _dataDelivery;
    get dataDelivery(): EvidentlyProjectDataDeliveryOutputReference;
    putDataDelivery(value: EvidentlyProjectDataDelivery): void;
    resetDataDelivery(): void;
    get dataDeliveryInput(): EvidentlyProjectDataDelivery | undefined;
    private _timeouts;
    get timeouts(): EvidentlyProjectTimeoutsOutputReference;
    putTimeouts(value: EvidentlyProjectTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EvidentlyProjectTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
