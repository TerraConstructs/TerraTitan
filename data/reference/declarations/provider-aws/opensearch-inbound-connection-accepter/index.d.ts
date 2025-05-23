/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpensearchInboundConnectionAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_inbound_connection_accepter#connection_id OpensearchInboundConnectionAccepter#connection_id}
    */
    readonly connectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_inbound_connection_accepter#id OpensearchInboundConnectionAccepter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_inbound_connection_accepter#timeouts OpensearchInboundConnectionAccepter#timeouts}
    */
    readonly timeouts?: OpensearchInboundConnectionAccepterTimeouts;
}
export interface OpensearchInboundConnectionAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_inbound_connection_accepter#create OpensearchInboundConnectionAccepter#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_inbound_connection_accepter#delete OpensearchInboundConnectionAccepter#delete}
    */
    readonly delete?: string;
}
export declare function opensearchInboundConnectionAccepterTimeoutsToTerraform(struct?: OpensearchInboundConnectionAccepterTimeouts | cdktf.IResolvable): any;
export declare function opensearchInboundConnectionAccepterTimeoutsToHclTerraform(struct?: OpensearchInboundConnectionAccepterTimeouts | cdktf.IResolvable): any;
export declare class OpensearchInboundConnectionAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchInboundConnectionAccepterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: OpensearchInboundConnectionAccepterTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_inbound_connection_accepter aws_opensearch_inbound_connection_accepter}
*/
export declare class OpensearchInboundConnectionAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opensearch_inbound_connection_accepter";
    /**
    * Generates CDKTF code for importing a OpensearchInboundConnectionAccepter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpensearchInboundConnectionAccepter to import
    * @param importFromId The id of the existing OpensearchInboundConnectionAccepter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_inbound_connection_accepter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpensearchInboundConnectionAccepter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_inbound_connection_accepter aws_opensearch_inbound_connection_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpensearchInboundConnectionAccepterConfig
    */
    constructor(scope: Construct, id: string, config: OpensearchInboundConnectionAccepterConfig);
    private _connectionId?;
    get connectionId(): string;
    set connectionId(value: string);
    get connectionIdInput(): string | undefined;
    get connectionStatus(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _timeouts;
    get timeouts(): OpensearchInboundConnectionAccepterTimeoutsOutputReference;
    putTimeouts(value: OpensearchInboundConnectionAccepterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | OpensearchInboundConnectionAccepterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
