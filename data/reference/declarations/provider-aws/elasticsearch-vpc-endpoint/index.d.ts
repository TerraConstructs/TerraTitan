/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticsearchVpcEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_vpc_endpoint#domain_arn ElasticsearchVpcEndpoint#domain_arn}
    */
    readonly domainArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_vpc_endpoint#id ElasticsearchVpcEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_vpc_endpoint#timeouts ElasticsearchVpcEndpoint#timeouts}
    */
    readonly timeouts?: ElasticsearchVpcEndpointTimeouts;
    /**
    * vpc_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_vpc_endpoint#vpc_options ElasticsearchVpcEndpoint#vpc_options}
    */
    readonly vpcOptions: ElasticsearchVpcEndpointVpcOptions;
}
export interface ElasticsearchVpcEndpointTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_vpc_endpoint#create ElasticsearchVpcEndpoint#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_vpc_endpoint#delete ElasticsearchVpcEndpoint#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_vpc_endpoint#update ElasticsearchVpcEndpoint#update}
    */
    readonly update?: string;
}
export declare function elasticsearchVpcEndpointTimeoutsToTerraform(struct?: ElasticsearchVpcEndpointTimeouts | cdktf.IResolvable): any;
export declare function elasticsearchVpcEndpointTimeoutsToHclTerraform(struct?: ElasticsearchVpcEndpointTimeouts | cdktf.IResolvable): any;
export declare class ElasticsearchVpcEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchVpcEndpointTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticsearchVpcEndpointTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
export interface ElasticsearchVpcEndpointVpcOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_vpc_endpoint#security_group_ids ElasticsearchVpcEndpoint#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_vpc_endpoint#subnet_ids ElasticsearchVpcEndpoint#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function elasticsearchVpcEndpointVpcOptionsToTerraform(struct?: ElasticsearchVpcEndpointVpcOptionsOutputReference | ElasticsearchVpcEndpointVpcOptions): any;
export declare function elasticsearchVpcEndpointVpcOptionsToHclTerraform(struct?: ElasticsearchVpcEndpointVpcOptionsOutputReference | ElasticsearchVpcEndpointVpcOptions): any;
export declare class ElasticsearchVpcEndpointVpcOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchVpcEndpointVpcOptions | undefined;
    set internalValue(value: ElasticsearchVpcEndpointVpcOptions | undefined);
    get availabilityZones(): string[];
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    get vpcId(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_vpc_endpoint aws_elasticsearch_vpc_endpoint}
*/
export declare class ElasticsearchVpcEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elasticsearch_vpc_endpoint";
    /**
    * Generates CDKTF code for importing a ElasticsearchVpcEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElasticsearchVpcEndpoint to import
    * @param importFromId The id of the existing ElasticsearchVpcEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_vpc_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElasticsearchVpcEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_vpc_endpoint aws_elasticsearch_vpc_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticsearchVpcEndpointConfig
    */
    constructor(scope: Construct, id: string, config: ElasticsearchVpcEndpointConfig);
    private _domainArn?;
    get domainArn(): string;
    set domainArn(value: string);
    get domainArnInput(): string | undefined;
    get endpoint(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _timeouts;
    get timeouts(): ElasticsearchVpcEndpointTimeoutsOutputReference;
    putTimeouts(value: ElasticsearchVpcEndpointTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ElasticsearchVpcEndpointTimeouts | undefined;
    private _vpcOptions;
    get vpcOptions(): ElasticsearchVpcEndpointVpcOptionsOutputReference;
    putVpcOptions(value: ElasticsearchVpcEndpointVpcOptions): void;
    get vpcOptionsInput(): ElasticsearchVpcEndpointVpcOptions | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
