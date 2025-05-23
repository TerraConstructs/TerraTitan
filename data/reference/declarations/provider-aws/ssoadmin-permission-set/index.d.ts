/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoadminPermissionSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set#description SsoadminPermissionSet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set#id SsoadminPermissionSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set#instance_arn SsoadminPermissionSet#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set#name SsoadminPermissionSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set#relay_state SsoadminPermissionSet#relay_state}
    */
    readonly relayState?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set#session_duration SsoadminPermissionSet#session_duration}
    */
    readonly sessionDuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set#tags SsoadminPermissionSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set#tags_all SsoadminPermissionSet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set#timeouts SsoadminPermissionSet#timeouts}
    */
    readonly timeouts?: SsoadminPermissionSetTimeouts;
}
export interface SsoadminPermissionSetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set#update SsoadminPermissionSet#update}
    */
    readonly update?: string;
}
export declare function ssoadminPermissionSetTimeoutsToTerraform(struct?: SsoadminPermissionSetTimeouts | cdktf.IResolvable): any;
export declare function ssoadminPermissionSetTimeoutsToHclTerraform(struct?: SsoadminPermissionSetTimeouts | cdktf.IResolvable): any;
export declare class SsoadminPermissionSetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsoadminPermissionSetTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SsoadminPermissionSetTimeouts | cdktf.IResolvable | undefined);
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set aws_ssoadmin_permission_set}
*/
export declare class SsoadminPermissionSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssoadmin_permission_set";
    /**
    * Generates CDKTF code for importing a SsoadminPermissionSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsoadminPermissionSet to import
    * @param importFromId The id of the existing SsoadminPermissionSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsoadminPermissionSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set aws_ssoadmin_permission_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminPermissionSetConfig
    */
    constructor(scope: Construct, id: string, config: SsoadminPermissionSetConfig);
    get arn(): string;
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceArn?;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _relayState?;
    get relayState(): string;
    set relayState(value: string);
    resetRelayState(): void;
    get relayStateInput(): string | undefined;
    private _sessionDuration?;
    get sessionDuration(): string;
    set sessionDuration(value: string);
    resetSessionDuration(): void;
    get sessionDurationInput(): string | undefined;
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
    get timeouts(): SsoadminPermissionSetTimeoutsOutputReference;
    putTimeouts(value: SsoadminPermissionSetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SsoadminPermissionSetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
