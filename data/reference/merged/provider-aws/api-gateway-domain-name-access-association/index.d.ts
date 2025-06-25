/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayDomainNameAccessAssociationConfig extends cdktf.TerraformMetaArguments {
    /** (Required) The identifier of the domain name access association source. For a `VPCE`, the value is the VPC endpoint ID. */
    readonly accessAssociationSource: string;
    /** (Required) The type of the domain name access association source. Valid values are `VPCE`. */
    readonly accessAssociationSourceType: string;
    /** (Required) The ARN of the domain name. */
    readonly domainNameArn: string;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_domain_name_access_association aws_api_gateway_domain_name_access_association}
*/
export declare class ApiGatewayDomainNameAccessAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_domain_name_access_association";
    /**
    * Generates CDKTF code for importing a ApiGatewayDomainNameAccessAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayDomainNameAccessAssociation to import
    * @param importFromId The id of the existing ApiGatewayDomainNameAccessAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_domain_name_access_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayDomainNameAccessAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_domain_name_access_association aws_api_gateway_domain_name_access_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayDomainNameAccessAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayDomainNameAccessAssociationConfig);
    private _accessAssociationSource?;
    get accessAssociationSource(): string;
    set accessAssociationSource(value: string);
    get accessAssociationSourceInput(): string | undefined;
    private _accessAssociationSourceType?;
    get accessAssociationSourceType(): string;
    set accessAssociationSourceType(value: string);
    get accessAssociationSourceTypeInput(): string | undefined;
    get arn(): string;
    private _domainNameArn?;
    get domainNameArn(): string;
    set domainNameArn(value: string);
    get domainNameArnInput(): string | undefined;
    get id(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
