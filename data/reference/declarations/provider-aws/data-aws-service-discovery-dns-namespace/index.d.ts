/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServiceDiscoveryDnsNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_dns_namespace#id DataAwsServiceDiscoveryDnsNamespace#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_dns_namespace#name DataAwsServiceDiscoveryDnsNamespace#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_dns_namespace#tags DataAwsServiceDiscoveryDnsNamespace#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_dns_namespace#type DataAwsServiceDiscoveryDnsNamespace#type}
    */
    readonly type: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_dns_namespace aws_service_discovery_dns_namespace}
*/
export declare class DataAwsServiceDiscoveryDnsNamespace extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_service_discovery_dns_namespace";
    /**
    * Generates CDKTF code for importing a DataAwsServiceDiscoveryDnsNamespace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsServiceDiscoveryDnsNamespace to import
    * @param importFromId The id of the existing DataAwsServiceDiscoveryDnsNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_dns_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsServiceDiscoveryDnsNamespace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_dns_namespace aws_service_discovery_dns_namespace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServiceDiscoveryDnsNamespaceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServiceDiscoveryDnsNamespaceConfig);
    get arn(): string;
    get description(): string;
    get hostedZone(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
