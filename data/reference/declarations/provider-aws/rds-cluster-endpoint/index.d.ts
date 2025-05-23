/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsClusterEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_endpoint#cluster_endpoint_identifier RdsClusterEndpoint#cluster_endpoint_identifier}
    */
    readonly clusterEndpointIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_endpoint#cluster_identifier RdsClusterEndpoint#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_endpoint#custom_endpoint_type RdsClusterEndpoint#custom_endpoint_type}
    */
    readonly customEndpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_endpoint#excluded_members RdsClusterEndpoint#excluded_members}
    */
    readonly excludedMembers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_endpoint#id RdsClusterEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_endpoint#static_members RdsClusterEndpoint#static_members}
    */
    readonly staticMembers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_endpoint#tags RdsClusterEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_endpoint#tags_all RdsClusterEndpoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_endpoint aws_rds_cluster_endpoint}
*/
export declare class RdsClusterEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rds_cluster_endpoint";
    /**
    * Generates CDKTF code for importing a RdsClusterEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RdsClusterEndpoint to import
    * @param importFromId The id of the existing RdsClusterEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RdsClusterEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_endpoint aws_rds_cluster_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterEndpointConfig
    */
    constructor(scope: Construct, id: string, config: RdsClusterEndpointConfig);
    get arn(): string;
    private _clusterEndpointIdentifier?;
    get clusterEndpointIdentifier(): string;
    set clusterEndpointIdentifier(value: string);
    get clusterEndpointIdentifierInput(): string | undefined;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
    private _customEndpointType?;
    get customEndpointType(): string;
    set customEndpointType(value: string);
    get customEndpointTypeInput(): string | undefined;
    get endpoint(): string;
    private _excludedMembers?;
    get excludedMembers(): string[];
    set excludedMembers(value: string[]);
    resetExcludedMembers(): void;
    get excludedMembersInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _staticMembers?;
    get staticMembers(): string[];
    set staticMembers(value: string[]);
    resetStaticMembers(): void;
    get staticMembersInput(): string[] | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
