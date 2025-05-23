/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MskVpcConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_vpc_connection#authentication MskVpcConnection#authentication}
    */
    readonly authentication: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_vpc_connection#client_subnets MskVpcConnection#client_subnets}
    */
    readonly clientSubnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_vpc_connection#id MskVpcConnection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_vpc_connection#security_groups MskVpcConnection#security_groups}
    */
    readonly securityGroups: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_vpc_connection#tags MskVpcConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_vpc_connection#tags_all MskVpcConnection#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_vpc_connection#target_cluster_arn MskVpcConnection#target_cluster_arn}
    */
    readonly targetClusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_vpc_connection#vpc_id MskVpcConnection#vpc_id}
    */
    readonly vpcId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_vpc_connection aws_msk_vpc_connection}
*/
export declare class MskVpcConnection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_msk_vpc_connection";
    /**
    * Generates CDKTF code for importing a MskVpcConnection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MskVpcConnection to import
    * @param importFromId The id of the existing MskVpcConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_vpc_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MskVpcConnection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_vpc_connection aws_msk_vpc_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskVpcConnectionConfig
    */
    constructor(scope: Construct, id: string, config: MskVpcConnectionConfig);
    get arn(): string;
    private _authentication?;
    get authentication(): string;
    set authentication(value: string);
    get authenticationInput(): string | undefined;
    private _clientSubnets?;
    get clientSubnets(): string[];
    set clientSubnets(value: string[]);
    get clientSubnetsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    get securityGroupsInput(): string[] | undefined;
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
    private _targetClusterArn?;
    get targetClusterArn(): string;
    set targetClusterArn(value: string);
    get targetClusterArnInput(): string | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
