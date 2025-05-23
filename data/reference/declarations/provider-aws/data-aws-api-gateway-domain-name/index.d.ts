/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsApiGatewayDomainNameConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_domain_name#domain_name DataAwsApiGatewayDomainName#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_domain_name#domain_name_id DataAwsApiGatewayDomainName#domain_name_id}
    */
    readonly domainNameId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_domain_name#id DataAwsApiGatewayDomainName#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_domain_name#tags DataAwsApiGatewayDomainName#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsApiGatewayDomainNameEndpointConfiguration {
}
export declare function dataAwsApiGatewayDomainNameEndpointConfigurationToTerraform(struct?: DataAwsApiGatewayDomainNameEndpointConfiguration): any;
export declare function dataAwsApiGatewayDomainNameEndpointConfigurationToHclTerraform(struct?: DataAwsApiGatewayDomainNameEndpointConfiguration): any;
export declare class DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsApiGatewayDomainNameEndpointConfiguration | undefined;
    set internalValue(value: DataAwsApiGatewayDomainNameEndpointConfiguration | undefined);
    get types(): string[];
}
export declare class DataAwsApiGatewayDomainNameEndpointConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_domain_name aws_api_gateway_domain_name}
*/
export declare class DataAwsApiGatewayDomainName extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_api_gateway_domain_name";
    /**
    * Generates CDKTF code for importing a DataAwsApiGatewayDomainName resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsApiGatewayDomainName to import
    * @param importFromId The id of the existing DataAwsApiGatewayDomainName that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_domain_name#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsApiGatewayDomainName to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_domain_name aws_api_gateway_domain_name} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApiGatewayDomainNameConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsApiGatewayDomainNameConfig);
    get arn(): string;
    get certificateArn(): string;
    get certificateName(): string;
    get certificateUploadDate(): string;
    get cloudfrontDomainName(): string;
    get cloudfrontZoneId(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _domainNameId?;
    get domainNameId(): string;
    set domainNameId(value: string);
    resetDomainNameId(): void;
    get domainNameIdInput(): string | undefined;
    private _endpointConfiguration;
    get endpointConfiguration(): DataAwsApiGatewayDomainNameEndpointConfigurationList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get policy(): string;
    get regionalCertificateArn(): string;
    get regionalCertificateName(): string;
    get regionalDomainName(): string;
    get regionalZoneId(): string;
    get securityPolicy(): string;
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
