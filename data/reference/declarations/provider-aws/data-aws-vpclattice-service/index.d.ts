/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpclatticeServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_service#id DataAwsVpclatticeService#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_service#name DataAwsVpclatticeService#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_service#service_identifier DataAwsVpclatticeService#service_identifier}
    */
    readonly serviceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_service#tags DataAwsVpclatticeService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsVpclatticeServiceDnsEntry {
}
export declare function dataAwsVpclatticeServiceDnsEntryToTerraform(struct?: DataAwsVpclatticeServiceDnsEntry): any;
export declare function dataAwsVpclatticeServiceDnsEntryToHclTerraform(struct?: DataAwsVpclatticeServiceDnsEntry): any;
export declare class DataAwsVpclatticeServiceDnsEntryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpclatticeServiceDnsEntry | undefined;
    set internalValue(value: DataAwsVpclatticeServiceDnsEntry | undefined);
    get domainName(): string;
    get hostedZoneId(): string;
}
export declare class DataAwsVpclatticeServiceDnsEntryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsVpclatticeServiceDnsEntryOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_service aws_vpclattice_service}
*/
export declare class DataAwsVpclatticeService extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpclattice_service";
    /**
    * Generates CDKTF code for importing a DataAwsVpclatticeService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpclatticeService to import
    * @param importFromId The id of the existing DataAwsVpclatticeService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpclatticeService to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_service aws_vpclattice_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpclatticeServiceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpclatticeServiceConfig);
    get arn(): string;
    get authType(): string;
    get certificateArn(): string;
    get customDomainName(): string;
    private _dnsEntry;
    get dnsEntry(): DataAwsVpclatticeServiceDnsEntryList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _serviceIdentifier?;
    get serviceIdentifier(): string;
    set serviceIdentifier(value: string);
    resetServiceIdentifier(): void;
    get serviceIdentifierInput(): string | undefined;
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
