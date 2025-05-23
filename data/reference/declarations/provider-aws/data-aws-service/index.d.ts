/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service#dns_name DataAwsService#dns_name}
    */
    readonly dnsName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service#id DataAwsService#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service#region DataAwsService#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service#reverse_dns_name DataAwsService#reverse_dns_name}
    */
    readonly reverseDnsName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service#reverse_dns_prefix DataAwsService#reverse_dns_prefix}
    */
    readonly reverseDnsPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service#service_id DataAwsService#service_id}
    */
    readonly serviceId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service aws_service}
*/
export declare class DataAwsService extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_service";
    /**
    * Generates CDKTF code for importing a DataAwsService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsService to import
    * @param importFromId The id of the existing DataAwsService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsService to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service aws_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServiceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsServiceConfig);
    private _dnsName?;
    get dnsName(): string;
    set dnsName(value: string);
    resetDnsName(): void;
    get dnsNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get partition(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _reverseDnsName?;
    get reverseDnsName(): string;
    set reverseDnsName(value: string);
    resetReverseDnsName(): void;
    get reverseDnsNameInput(): string | undefined;
    private _reverseDnsPrefix?;
    get reverseDnsPrefix(): string;
    set reverseDnsPrefix(value: string);
    resetReverseDnsPrefix(): void;
    get reverseDnsPrefixInput(): string | undefined;
    private _serviceId?;
    get serviceId(): string;
    set serviceId(value: string);
    resetServiceId(): void;
    get serviceIdInput(): string | undefined;
    get supported(): cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
