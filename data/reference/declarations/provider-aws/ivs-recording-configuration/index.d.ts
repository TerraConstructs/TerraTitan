/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IvsRecordingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration#id IvsRecordingConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration#name IvsRecordingConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration#recording_reconnect_window_seconds IvsRecordingConfiguration#recording_reconnect_window_seconds}
    */
    readonly recordingReconnectWindowSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration#tags IvsRecordingConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration#tags_all IvsRecordingConfiguration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * destination_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration#destination_configuration IvsRecordingConfiguration#destination_configuration}
    */
    readonly destinationConfiguration: IvsRecordingConfigurationDestinationConfiguration;
    /**
    * thumbnail_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration#thumbnail_configuration IvsRecordingConfiguration#thumbnail_configuration}
    */
    readonly thumbnailConfiguration?: IvsRecordingConfigurationThumbnailConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration#timeouts IvsRecordingConfiguration#timeouts}
    */
    readonly timeouts?: IvsRecordingConfigurationTimeouts;
}
export interface IvsRecordingConfigurationDestinationConfigurationS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration#bucket_name IvsRecordingConfiguration#bucket_name}
    */
    readonly bucketName: string;
}
export declare function ivsRecordingConfigurationDestinationConfigurationS3ToTerraform(struct?: IvsRecordingConfigurationDestinationConfigurationS3OutputReference | IvsRecordingConfigurationDestinationConfigurationS3): any;
export declare function ivsRecordingConfigurationDestinationConfigurationS3ToHclTerraform(struct?: IvsRecordingConfigurationDestinationConfigurationS3OutputReference | IvsRecordingConfigurationDestinationConfigurationS3): any;
export declare class IvsRecordingConfigurationDestinationConfigurationS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IvsRecordingConfigurationDestinationConfigurationS3 | undefined;
    set internalValue(value: IvsRecordingConfigurationDestinationConfigurationS3 | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
}
export interface IvsRecordingConfigurationDestinationConfiguration {
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration#s3 IvsRecordingConfiguration#s3}
    */
    readonly s3: IvsRecordingConfigurationDestinationConfigurationS3;
}
export declare function ivsRecordingConfigurationDestinationConfigurationToTerraform(struct?: IvsRecordingConfigurationDestinationConfigurationOutputReference | IvsRecordingConfigurationDestinationConfiguration): any;
export declare function ivsRecordingConfigurationDestinationConfigurationToHclTerraform(struct?: IvsRecordingConfigurationDestinationConfigurationOutputReference | IvsRecordingConfigurationDestinationConfiguration): any;
export declare class IvsRecordingConfigurationDestinationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IvsRecordingConfigurationDestinationConfiguration | undefined;
    set internalValue(value: IvsRecordingConfigurationDestinationConfiguration | undefined);
    private _s3;
    get s3(): IvsRecordingConfigurationDestinationConfigurationS3OutputReference;
    putS3(value: IvsRecordingConfigurationDestinationConfigurationS3): void;
    get s3Input(): IvsRecordingConfigurationDestinationConfigurationS3 | undefined;
}
export interface IvsRecordingConfigurationThumbnailConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration#recording_mode IvsRecordingConfiguration#recording_mode}
    */
    readonly recordingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration#target_interval_seconds IvsRecordingConfiguration#target_interval_seconds}
    */
    readonly targetIntervalSeconds?: number;
}
export declare function ivsRecordingConfigurationThumbnailConfigurationToTerraform(struct?: IvsRecordingConfigurationThumbnailConfigurationOutputReference | IvsRecordingConfigurationThumbnailConfiguration): any;
export declare function ivsRecordingConfigurationThumbnailConfigurationToHclTerraform(struct?: IvsRecordingConfigurationThumbnailConfigurationOutputReference | IvsRecordingConfigurationThumbnailConfiguration): any;
export declare class IvsRecordingConfigurationThumbnailConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IvsRecordingConfigurationThumbnailConfiguration | undefined;
    set internalValue(value: IvsRecordingConfigurationThumbnailConfiguration | undefined);
    private _recordingMode?;
    get recordingMode(): string;
    set recordingMode(value: string);
    resetRecordingMode(): void;
    get recordingModeInput(): string | undefined;
    private _targetIntervalSeconds?;
    get targetIntervalSeconds(): number;
    set targetIntervalSeconds(value: number);
    resetTargetIntervalSeconds(): void;
    get targetIntervalSecondsInput(): number | undefined;
}
export interface IvsRecordingConfigurationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration#create IvsRecordingConfiguration#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration#delete IvsRecordingConfiguration#delete}
    */
    readonly delete?: string;
}
export declare function ivsRecordingConfigurationTimeoutsToTerraform(struct?: IvsRecordingConfigurationTimeouts | cdktf.IResolvable): any;
export declare function ivsRecordingConfigurationTimeoutsToHclTerraform(struct?: IvsRecordingConfigurationTimeouts | cdktf.IResolvable): any;
export declare class IvsRecordingConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IvsRecordingConfigurationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: IvsRecordingConfigurationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration aws_ivs_recording_configuration}
*/
export declare class IvsRecordingConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ivs_recording_configuration";
    /**
    * Generates CDKTF code for importing a IvsRecordingConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IvsRecordingConfiguration to import
    * @param importFromId The id of the existing IvsRecordingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IvsRecordingConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_recording_configuration aws_ivs_recording_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IvsRecordingConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: IvsRecordingConfigurationConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _recordingReconnectWindowSeconds?;
    get recordingReconnectWindowSeconds(): number;
    set recordingReconnectWindowSeconds(value: number);
    resetRecordingReconnectWindowSeconds(): void;
    get recordingReconnectWindowSecondsInput(): number | undefined;
    get state(): string;
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
    private _destinationConfiguration;
    get destinationConfiguration(): IvsRecordingConfigurationDestinationConfigurationOutputReference;
    putDestinationConfiguration(value: IvsRecordingConfigurationDestinationConfiguration): void;
    get destinationConfigurationInput(): IvsRecordingConfigurationDestinationConfiguration | undefined;
    private _thumbnailConfiguration;
    get thumbnailConfiguration(): IvsRecordingConfigurationThumbnailConfigurationOutputReference;
    putThumbnailConfiguration(value: IvsRecordingConfigurationThumbnailConfiguration): void;
    resetThumbnailConfiguration(): void;
    get thumbnailConfigurationInput(): IvsRecordingConfigurationThumbnailConfiguration | undefined;
    private _timeouts;
    get timeouts(): IvsRecordingConfigurationTimeoutsOutputReference;
    putTimeouts(value: IvsRecordingConfigurationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | IvsRecordingConfigurationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
