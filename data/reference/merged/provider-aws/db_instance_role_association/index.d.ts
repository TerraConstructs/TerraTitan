/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbInstanceRoleAssociationConfig extends cdktf.TerraformMetaArguments {
    /** (Required) DB Instance Identifier to associate with the IAM Role. */
    readonly dbInstanceIdentifier: string;
    /** (Required) Name of the feature for association. This can be found in the AWS documentation relevant to the integration or a full list is available in the `SupportedFeatureNames` list returned by [AWS CLI rds describe-db-engine-versions](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-engine-versions.html). */
    readonly featureName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_instance_role_association#id DbInstanceRoleAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /** (Required) Amazon Resource Name (ARN) of the IAM Role to associate with the DB Instance. */
    readonly roleArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_instance_role_association#timeouts DbInstanceRoleAssociation#timeouts}
    */
    readonly timeouts?: DbInstanceRoleAssociationTimeouts;
}
export interface DbInstanceRoleAssociationTimeouts {
    /** (Default `10m`) - `delete` - (Default `10m`) */
    readonly create?: string;
    /** (Default `10m`) */
    readonly delete?: string;
}
export declare function dbInstanceRoleAssociationTimeoutsToTerraform(struct?: DbInstanceRoleAssociationTimeouts | cdktf.IResolvable): any;
export declare function dbInstanceRoleAssociationTimeoutsToHclTerraform(struct?: DbInstanceRoleAssociationTimeouts | cdktf.IResolvable): any;
export declare class DbInstanceRoleAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DbInstanceRoleAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DbInstanceRoleAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_instance_role_association aws_db_instance_role_association}
*/
export declare class DbInstanceRoleAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_db_instance_role_association";
    /**
    * Generates CDKTF code for importing a DbInstanceRoleAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DbInstanceRoleAssociation to import
    * @param importFromId The id of the existing DbInstanceRoleAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_instance_role_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DbInstanceRoleAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_instance_role_association aws_db_instance_role_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbInstanceRoleAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DbInstanceRoleAssociationConfig);
    private _dbInstanceIdentifier?;
    get dbInstanceIdentifier(): string;
    set dbInstanceIdentifier(value: string);
    get dbInstanceIdentifierInput(): string | undefined;
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
    get timeouts(): DbInstanceRoleAssociationTimeoutsOutputReference;
    putTimeouts(value: DbInstanceRoleAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DbInstanceRoleAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
