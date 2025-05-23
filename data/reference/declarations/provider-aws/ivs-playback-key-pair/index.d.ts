/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IvsPlaybackKeyPairConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_playback_key_pair#id IvsPlaybackKeyPair#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_playback_key_pair#name IvsPlaybackKeyPair#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_playback_key_pair#public_key IvsPlaybackKeyPair#public_key}
    */
    readonly publicKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_playback_key_pair#tags IvsPlaybackKeyPair#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_playback_key_pair#tags_all IvsPlaybackKeyPair#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_playback_key_pair#timeouts IvsPlaybackKeyPair#timeouts}
    */
    readonly timeouts?: IvsPlaybackKeyPairTimeouts;
}
export interface IvsPlaybackKeyPairTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_playback_key_pair#create IvsPlaybackKeyPair#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_playback_key_pair#delete IvsPlaybackKeyPair#delete}
    */
    readonly delete?: string;
}
export declare function ivsPlaybackKeyPairTimeoutsToTerraform(struct?: IvsPlaybackKeyPairTimeouts | cdktf.IResolvable): any;
export declare function ivsPlaybackKeyPairTimeoutsToHclTerraform(struct?: IvsPlaybackKeyPairTimeouts | cdktf.IResolvable): any;
export declare class IvsPlaybackKeyPairTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IvsPlaybackKeyPairTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: IvsPlaybackKeyPairTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_playback_key_pair aws_ivs_playback_key_pair}
*/
export declare class IvsPlaybackKeyPair extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ivs_playback_key_pair";
    /**
    * Generates CDKTF code for importing a IvsPlaybackKeyPair resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IvsPlaybackKeyPair to import
    * @param importFromId The id of the existing IvsPlaybackKeyPair that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_playback_key_pair#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IvsPlaybackKeyPair to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivs_playback_key_pair aws_ivs_playback_key_pair} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IvsPlaybackKeyPairConfig
    */
    constructor(scope: Construct, id: string, config: IvsPlaybackKeyPairConfig);
    get arn(): string;
    get fingerprint(): string;
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
    private _publicKey?;
    get publicKey(): string;
    set publicKey(value: string);
    get publicKeyInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): IvsPlaybackKeyPairTimeoutsOutputReference;
    putTimeouts(value: IvsPlaybackKeyPairTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | IvsPlaybackKeyPairTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
