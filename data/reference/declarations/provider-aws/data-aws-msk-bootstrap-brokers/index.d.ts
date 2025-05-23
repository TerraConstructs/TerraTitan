/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsMskBootstrapBrokersConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_bootstrap_brokers#cluster_arn DataAwsMskBootstrapBrokers#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_bootstrap_brokers#id DataAwsMskBootstrapBrokers#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_bootstrap_brokers aws_msk_bootstrap_brokers}
*/
export declare class DataAwsMskBootstrapBrokers extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_msk_bootstrap_brokers";
    /**
    * Generates CDKTF code for importing a DataAwsMskBootstrapBrokers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsMskBootstrapBrokers to import
    * @param importFromId The id of the existing DataAwsMskBootstrapBrokers that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_bootstrap_brokers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsMskBootstrapBrokers to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_bootstrap_brokers aws_msk_bootstrap_brokers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskBootstrapBrokersConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsMskBootstrapBrokersConfig);
    get bootstrapBrokers(): string;
    get bootstrapBrokersPublicSaslIam(): string;
    get bootstrapBrokersPublicSaslScram(): string;
    get bootstrapBrokersPublicTls(): string;
    get bootstrapBrokersSaslIam(): string;
    get bootstrapBrokersSaslScram(): string;
    get bootstrapBrokersTls(): string;
    get bootstrapBrokersVpcConnectivitySaslIam(): string;
    get bootstrapBrokersVpcConnectivitySaslScram(): string;
    get bootstrapBrokersVpcConnectivityTls(): string;
    private _clusterArn?;
    get clusterArn(): string;
    set clusterArn(value: string);
    get clusterArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
