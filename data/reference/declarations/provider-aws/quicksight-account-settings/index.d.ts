/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightAccountSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/quicksight_account_settings#aws_account_id QuicksightAccountSettings#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/quicksight_account_settings#default_namespace QuicksightAccountSettings#default_namespace}
    */
    readonly defaultNamespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/quicksight_account_settings#termination_protection_enabled QuicksightAccountSettings#termination_protection_enabled}
    */
    readonly terminationProtectionEnabled?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/quicksight_account_settings#timeouts QuicksightAccountSettings#timeouts}
    */
    readonly timeouts?: QuicksightAccountSettingsTimeouts;
}
export interface QuicksightAccountSettingsTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/quicksight_account_settings#create QuicksightAccountSettings#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/quicksight_account_settings#update QuicksightAccountSettings#update}
    */
    readonly update?: string;
}
export declare function quicksightAccountSettingsTimeoutsToTerraform(struct?: QuicksightAccountSettingsTimeouts | cdktf.IResolvable): any;
export declare function quicksightAccountSettingsTimeoutsToHclTerraform(struct?: QuicksightAccountSettingsTimeouts | cdktf.IResolvable): any;
export declare class QuicksightAccountSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightAccountSettingsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightAccountSettingsTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/quicksight_account_settings aws_quicksight_account_settings}
*/
export declare class QuicksightAccountSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_quicksight_account_settings";
    /**
    * Generates CDKTF code for importing a QuicksightAccountSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QuicksightAccountSettings to import
    * @param importFromId The id of the existing QuicksightAccountSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/quicksight_account_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QuicksightAccountSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/quicksight_account_settings aws_quicksight_account_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightAccountSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: QuicksightAccountSettingsConfig);
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    private _defaultNamespace?;
    get defaultNamespace(): string;
    set defaultNamespace(value: string);
    resetDefaultNamespace(): void;
    get defaultNamespaceInput(): string | undefined;
    private _terminationProtectionEnabled?;
    get terminationProtectionEnabled(): boolean | cdktf.IResolvable;
    set terminationProtectionEnabled(value: boolean | cdktf.IResolvable);
    resetTerminationProtectionEnabled(): void;
    get terminationProtectionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _timeouts;
    get timeouts(): QuicksightAccountSettingsTimeoutsOutputReference;
    putTimeouts(value: QuicksightAccountSettingsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | QuicksightAccountSettingsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
