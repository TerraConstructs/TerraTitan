/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodeconnectionsConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_connection#host_arn CodeconnectionsConnection#host_arn}
    */
    readonly hostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_connection#name CodeconnectionsConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_connection#provider_type CodeconnectionsConnection#provider_type}
    */
    readonly providerType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_connection#tags CodeconnectionsConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_connection#timeouts CodeconnectionsConnection#timeouts}
    */
    readonly timeouts?: CodeconnectionsConnectionTimeouts;
}
export interface CodeconnectionsConnectionTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_connection#create CodeconnectionsConnection#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_connection#delete CodeconnectionsConnection#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_connection#update CodeconnectionsConnection#update}
    */
    readonly update?: string;
}
export declare function codeconnectionsConnectionTimeoutsToTerraform(struct?: CodeconnectionsConnectionTimeouts | cdktf.IResolvable): any;
export declare function codeconnectionsConnectionTimeoutsToHclTerraform(struct?: CodeconnectionsConnectionTimeouts | cdktf.IResolvable): any;
export declare class CodeconnectionsConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodeconnectionsConnectionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CodeconnectionsConnectionTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_connection aws_codeconnections_connection}
*/
export declare class CodeconnectionsConnection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codeconnections_connection";
    /**
    * Generates CDKTF code for importing a CodeconnectionsConnection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodeconnectionsConnection to import
    * @param importFromId The id of the existing CodeconnectionsConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodeconnectionsConnection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_connection aws_codeconnections_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeconnectionsConnectionConfig
    */
    constructor(scope: Construct, id: string, config: CodeconnectionsConnectionConfig);
    get arn(): string;
    get connectionStatus(): string;
    private _hostArn?;
    get hostArn(): string;
    set hostArn(value: string);
    resetHostArn(): void;
    get hostArnInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get ownerAccountId(): string;
    private _providerType?;
    get providerType(): string;
    set providerType(value: string);
    resetProviderType(): void;
    get providerTypeInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _timeouts;
    get timeouts(): CodeconnectionsConnectionTimeoutsOutputReference;
    putTimeouts(value: CodeconnectionsConnectionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CodeconnectionsConnectionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
