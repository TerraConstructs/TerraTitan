/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsMskKafkaVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_kafka_version#id DataAwsMskKafkaVersion#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_kafka_version#preferred_versions DataAwsMskKafkaVersion#preferred_versions}
    */
    readonly preferredVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_kafka_version#version DataAwsMskKafkaVersion#version}
    */
    readonly version?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_kafka_version aws_msk_kafka_version}
*/
export declare class DataAwsMskKafkaVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_msk_kafka_version";
    /**
    * Generates CDKTF code for importing a DataAwsMskKafkaVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsMskKafkaVersion to import
    * @param importFromId The id of the existing DataAwsMskKafkaVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_kafka_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsMskKafkaVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_kafka_version aws_msk_kafka_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskKafkaVersionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsMskKafkaVersionConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _preferredVersions?;
    get preferredVersions(): string[];
    set preferredVersions(value: string[]);
    resetPreferredVersions(): void;
    get preferredVersionsInput(): string[] | undefined;
    get status(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
