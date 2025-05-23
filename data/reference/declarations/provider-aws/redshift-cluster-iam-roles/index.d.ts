/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftClusterIamRolesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster_iam_roles#cluster_identifier RedshiftClusterIamRoles#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster_iam_roles#default_iam_role_arn RedshiftClusterIamRoles#default_iam_role_arn}
    */
    readonly defaultIamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster_iam_roles#iam_role_arns RedshiftClusterIamRoles#iam_role_arns}
    */
    readonly iamRoleArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster_iam_roles#id RedshiftClusterIamRoles#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster_iam_roles#timeouts RedshiftClusterIamRoles#timeouts}
    */
    readonly timeouts?: RedshiftClusterIamRolesTimeouts;
}
export interface RedshiftClusterIamRolesTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster_iam_roles#create RedshiftClusterIamRoles#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster_iam_roles#delete RedshiftClusterIamRoles#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster_iam_roles#update RedshiftClusterIamRoles#update}
    */
    readonly update?: string;
}
export declare function redshiftClusterIamRolesTimeoutsToTerraform(struct?: RedshiftClusterIamRolesTimeouts | cdktf.IResolvable): any;
export declare function redshiftClusterIamRolesTimeoutsToHclTerraform(struct?: RedshiftClusterIamRolesTimeouts | cdktf.IResolvable): any;
export declare class RedshiftClusterIamRolesTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RedshiftClusterIamRolesTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RedshiftClusterIamRolesTimeouts | cdktf.IResolvable | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster_iam_roles aws_redshift_cluster_iam_roles}
*/
export declare class RedshiftClusterIamRoles extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshift_cluster_iam_roles";
    /**
    * Generates CDKTF code for importing a RedshiftClusterIamRoles resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftClusterIamRoles to import
    * @param importFromId The id of the existing RedshiftClusterIamRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster_iam_roles#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftClusterIamRoles to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster_iam_roles aws_redshift_cluster_iam_roles} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftClusterIamRolesConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftClusterIamRolesConfig);
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
    private _defaultIamRoleArn?;
    get defaultIamRoleArn(): string;
    set defaultIamRoleArn(value: string);
    resetDefaultIamRoleArn(): void;
    get defaultIamRoleArnInput(): string | undefined;
    private _iamRoleArns?;
    get iamRoleArns(): string[];
    set iamRoleArns(value: string[]);
    resetIamRoleArns(): void;
    get iamRoleArnsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _timeouts;
    get timeouts(): RedshiftClusterIamRolesTimeoutsOutputReference;
    putTimeouts(value: RedshiftClusterIamRolesTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RedshiftClusterIamRolesTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
