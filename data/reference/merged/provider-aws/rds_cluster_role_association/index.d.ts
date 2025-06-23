/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsClusterRoleAssociationConfig extends cdktf.TerraformMetaArguments {
    /** (Required) DB Cluster Identifier to associate with the IAM Role. */
    readonly dbClusterIdentifier: string;
    /** (Required) Name of the feature for association. This can be found in the AWS documentation relevant to the integration or a full list is available in the `SupportedFeatureNames` list returned by [AWS CLI rds describe-db-engine-versions](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-engine-versions.html). */
    readonly featureName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/rds_cluster_role_association#id RdsClusterRoleAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /** (Required) Amazon Resource Name (ARN) of the IAM Role to associate with the DB Cluster. */
    readonly roleArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/rds_cluster_role_association#timeouts RdsClusterRoleAssociation#timeouts}
    */
    readonly timeouts?: RdsClusterRoleAssociationTimeouts;
}
export interface RdsClusterRoleAssociationTimeouts {
    /** (Default `10m`) - `delete` - (Default `10m`) */
    readonly create?: string;
    /** (Default `10m`) */
    readonly delete?: string;
}
export declare function rdsClusterRoleAssociationTimeoutsToTerraform(struct?: RdsClusterRoleAssociationTimeouts | cdktf.IResolvable): any;
export declare function rdsClusterRoleAssociationTimeoutsToHclTerraform(struct?: RdsClusterRoleAssociationTimeouts | cdktf.IResolvable): any;
export declare class RdsClusterRoleAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RdsClusterRoleAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RdsClusterRoleAssociationTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/rds_cluster_role_association aws_rds_cluster_role_association}
*/
export declare class RdsClusterRoleAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rds_cluster_role_association";
    /**
    * Generates CDKTF code for importing a RdsClusterRoleAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RdsClusterRoleAssociation to import
    * @param importFromId The id of the existing RdsClusterRoleAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/rds_cluster_role_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RdsClusterRoleAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/rds_cluster_role_association aws_rds_cluster_role_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterRoleAssociationConfig
    */
    constructor(scope: Construct, id: string, config: RdsClusterRoleAssociationConfig);
    private _dbClusterIdentifier?;
    get dbClusterIdentifier(): string;
    set dbClusterIdentifier(value: string);
    get dbClusterIdentifierInput(): string | undefined;
    private _featureName?;
    get featureName(): string;
    set featureName(value: string);
    get featureNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _timeouts;
    get timeouts(): RdsClusterRoleAssociationTimeoutsOutputReference;
    putTimeouts(value: RdsClusterRoleAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RdsClusterRoleAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
