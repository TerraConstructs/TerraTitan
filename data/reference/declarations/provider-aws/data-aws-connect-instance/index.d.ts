/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsConnectInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_instance#id DataAwsConnectInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_instance#instance_alias DataAwsConnectInstance#instance_alias}
    */
    readonly instanceAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_instance#instance_id DataAwsConnectInstance#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_instance#tags DataAwsConnectInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_instance aws_connect_instance}
*/
export declare class DataAwsConnectInstance extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_connect_instance";
    /**
    * Generates CDKTF code for importing a DataAwsConnectInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsConnectInstance to import
    * @param importFromId The id of the existing DataAwsConnectInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsConnectInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_instance aws_connect_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectInstanceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsConnectInstanceConfig);
    get arn(): string;
    get autoResolveBestVoicesEnabled(): cdktf.IResolvable;
    get contactFlowLogsEnabled(): cdktf.IResolvable;
    get contactLensEnabled(): cdktf.IResolvable;
    get createdTime(): string;
    get earlyMediaEnabled(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get identityManagementType(): string;
    get inboundCallsEnabled(): cdktf.IResolvable;
    private _instanceAlias?;
    get instanceAlias(): string;
    set instanceAlias(value: string);
    resetInstanceAlias(): void;
    get instanceAliasInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    resetInstanceId(): void;
    get instanceIdInput(): string | undefined;
    get multiPartyConferenceEnabled(): cdktf.IResolvable;
    get outboundCallsEnabled(): cdktf.IResolvable;
    get serviceRole(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
