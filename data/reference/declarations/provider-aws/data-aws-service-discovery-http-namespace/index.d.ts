/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServiceDiscoveryHttpNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_http_namespace#id DataAwsServiceDiscoveryHttpNamespace#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_http_namespace#name DataAwsServiceDiscoveryHttpNamespace#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_http_namespace#tags DataAwsServiceDiscoveryHttpNamespace#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_http_namespace aws_service_discovery_http_namespace}
*/
export declare class DataAwsServiceDiscoveryHttpNamespace extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_service_discovery_http_namespace";
    /**
    * Generates CDKTF code for importing a DataAwsServiceDiscoveryHttpNamespace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsServiceDiscoveryHttpNamespace to import
    * @param importFromId The id of the existing DataAwsServiceDiscoveryHttpNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_http_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsServiceDiscoveryHttpNamespace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_http_namespace aws_service_discovery_http_namespace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServiceDiscoveryHttpNamespaceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServiceDiscoveryHttpNamespaceConfig);
    get arn(): string;
    get description(): string;
    get httpName(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
