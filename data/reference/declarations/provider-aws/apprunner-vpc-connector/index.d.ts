/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApprunnerVpcConnectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_connector#id ApprunnerVpcConnector#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_connector#security_groups ApprunnerVpcConnector#security_groups}
    */
    readonly securityGroups: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_connector#subnets ApprunnerVpcConnector#subnets}
    */
    readonly subnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_connector#tags ApprunnerVpcConnector#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_connector#tags_all ApprunnerVpcConnector#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_connector#vpc_connector_name ApprunnerVpcConnector#vpc_connector_name}
    */
    readonly vpcConnectorName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_connector aws_apprunner_vpc_connector}
*/
export declare class ApprunnerVpcConnector extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apprunner_vpc_connector";
    /**
    * Generates CDKTF code for importing a ApprunnerVpcConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApprunnerVpcConnector to import
    * @param importFromId The id of the existing ApprunnerVpcConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApprunnerVpcConnector to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_connector aws_apprunner_vpc_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerVpcConnectorConfig
    */
    constructor(scope: Construct, id: string, config: ApprunnerVpcConnectorConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    get securityGroupsInput(): string[] | undefined;
    get status(): string;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    get subnetsInput(): string[] | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _vpcConnectorName?;
    get vpcConnectorName(): string;
    set vpcConnectorName(value: string);
    get vpcConnectorNameInput(): string | undefined;
    get vpcConnectorRevision(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
