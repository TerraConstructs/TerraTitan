/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IvsChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_channel#authorized IvsChannel#authorized}
    */
    readonly authorized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_channel#id IvsChannel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_channel#latency_mode IvsChannel#latency_mode}
    */
    readonly latencyMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_channel#name IvsChannel#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_channel#recording_configuration_arn IvsChannel#recording_configuration_arn}
    */
    readonly recordingConfigurationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_channel#tags IvsChannel#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_channel#tags_all IvsChannel#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_channel#type IvsChannel#type}
    */
    readonly type?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_channel#timeouts IvsChannel#timeouts}
    */
    readonly timeouts?: IvsChannelTimeouts;
}
export interface IvsChannelTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_channel#create IvsChannel#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_channel#delete IvsChannel#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_channel#update IvsChannel#update}
    */
    readonly update?: string;
}
export declare function ivsChannelTimeoutsToTerraform(struct?: IvsChannelTimeouts | cdktf.IResolvable): any;
export declare function ivsChannelTimeoutsToHclTerraform(struct?: IvsChannelTimeouts | cdktf.IResolvable): any;
export declare class IvsChannelTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IvsChannelTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: IvsChannelTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_channel aws_ivs_channel}
*/
export declare class IvsChannel extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ivs_channel";
    /**
    * Generates CDKTF code for importing a IvsChannel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IvsChannel to import
    * @param importFromId The id of the existing IvsChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IvsChannel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_channel aws_ivs_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IvsChannelConfig = {}
    */
    constructor(scope: Construct, id: string, config?: IvsChannelConfig);
    get arn(): string;
    private _authorized?;
    get authorized(): boolean | cdktf.IResolvable;
    set authorized(value: boolean | cdktf.IResolvable);
    resetAuthorized(): void;
    get authorizedInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ingestEndpoint(): string;
    private _latencyMode?;
    get latencyMode(): string;
    set latencyMode(value: string);
    resetLatencyMode(): void;
    get latencyModeInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get playbackUrl(): string;
    private _recordingConfigurationArn?;
    get recordingConfigurationArn(): string;
    set recordingConfigurationArn(value: string);
    resetRecordingConfigurationArn(): void;
    get recordingConfigurationArnInput(): string | undefined;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _timeouts;
    get timeouts(): IvsChannelTimeoutsOutputReference;
    putTimeouts(value: IvsChannelTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | IvsChannelTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
