/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcBlockPublicAccessOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_block_public_access_options#internet_gateway_block_mode VpcBlockPublicAccessOptions#internet_gateway_block_mode}
    */
    readonly internetGatewayBlockMode: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_block_public_access_options#timeouts VpcBlockPublicAccessOptions#timeouts}
    */
    readonly timeouts?: VpcBlockPublicAccessOptionsTimeouts;
}
export interface VpcBlockPublicAccessOptionsTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_block_public_access_options#create VpcBlockPublicAccessOptions#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_block_public_access_options#delete VpcBlockPublicAccessOptions#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_block_public_access_options#update VpcBlockPublicAccessOptions#update}
    */
    readonly update?: string;
}
export declare function vpcBlockPublicAccessOptionsTimeoutsToTerraform(struct?: VpcBlockPublicAccessOptionsTimeouts | cdktf.IResolvable): any;
export declare function vpcBlockPublicAccessOptionsTimeoutsToHclTerraform(struct?: VpcBlockPublicAccessOptionsTimeouts | cdktf.IResolvable): any;
export declare class VpcBlockPublicAccessOptionsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcBlockPublicAccessOptionsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcBlockPublicAccessOptionsTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_block_public_access_options aws_vpc_block_public_access_options}
*/
export declare class VpcBlockPublicAccessOptions extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_block_public_access_options";
    /**
    * Generates CDKTF code for importing a VpcBlockPublicAccessOptions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcBlockPublicAccessOptions to import
    * @param importFromId The id of the existing VpcBlockPublicAccessOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_block_public_access_options#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcBlockPublicAccessOptions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_block_public_access_options aws_vpc_block_public_access_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcBlockPublicAccessOptionsConfig
    */
    constructor(scope: Construct, id: string, config: VpcBlockPublicAccessOptionsConfig);
    get awsAccountId(): string;
    get awsRegion(): string;
    get id(): string;
    private _internetGatewayBlockMode?;
    get internetGatewayBlockMode(): string;
    set internetGatewayBlockMode(value: string);
    get internetGatewayBlockModeInput(): string | undefined;
    private _timeouts;
    get timeouts(): VpcBlockPublicAccessOptionsTimeoutsOutputReference;
    putTimeouts(value: VpcBlockPublicAccessOptionsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcBlockPublicAccessOptionsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
