/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RamResourceShareAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share_accepter#id RamResourceShareAccepter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share_accepter#share_arn RamResourceShareAccepter#share_arn}
    */
    readonly shareArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share_accepter#timeouts RamResourceShareAccepter#timeouts}
    */
    readonly timeouts?: RamResourceShareAccepterTimeouts;
}
export interface RamResourceShareAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share_accepter#create RamResourceShareAccepter#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share_accepter#delete RamResourceShareAccepter#delete}
    */
    readonly delete?: string;
}
export declare function ramResourceShareAccepterTimeoutsToTerraform(struct?: RamResourceShareAccepterTimeouts | cdktf.IResolvable): any;
export declare function ramResourceShareAccepterTimeoutsToHclTerraform(struct?: RamResourceShareAccepterTimeouts | cdktf.IResolvable): any;
export declare class RamResourceShareAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RamResourceShareAccepterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RamResourceShareAccepterTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share_accepter aws_ram_resource_share_accepter}
*/
export declare class RamResourceShareAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ram_resource_share_accepter";
    /**
    * Generates CDKTF code for importing a RamResourceShareAccepter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RamResourceShareAccepter to import
    * @param importFromId The id of the existing RamResourceShareAccepter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share_accepter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RamResourceShareAccepter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share_accepter aws_ram_resource_share_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RamResourceShareAccepterConfig
    */
    constructor(scope: Construct, id: string, config: RamResourceShareAccepterConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get invitationArn(): string;
    get receiverAccountId(): string;
    get resources(): string[];
    get senderAccountId(): string;
    private _shareArn?;
    get shareArn(): string;
    set shareArn(value: string);
    get shareArnInput(): string | undefined;
    get shareId(): string;
    get shareName(): string;
    get status(): string;
    private _timeouts;
    get timeouts(): RamResourceShareAccepterTimeoutsOutputReference;
    putTimeouts(value: RamResourceShareAccepterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RamResourceShareAccepterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
