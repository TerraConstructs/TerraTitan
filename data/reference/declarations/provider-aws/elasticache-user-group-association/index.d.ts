/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticacheUserGroupAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_user_group_association#id ElasticacheUserGroupAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_user_group_association#user_group_id ElasticacheUserGroupAssociation#user_group_id}
    */
    readonly userGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_user_group_association#user_id ElasticacheUserGroupAssociation#user_id}
    */
    readonly userId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_user_group_association#timeouts ElasticacheUserGroupAssociation#timeouts}
    */
    readonly timeouts?: ElasticacheUserGroupAssociationTimeouts;
}
export interface ElasticacheUserGroupAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_user_group_association#create ElasticacheUserGroupAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_user_group_association#delete ElasticacheUserGroupAssociation#delete}
    */
    readonly delete?: string;
}
export declare function elasticacheUserGroupAssociationTimeoutsToTerraform(struct?: ElasticacheUserGroupAssociationTimeouts | cdktf.IResolvable): any;
export declare function elasticacheUserGroupAssociationTimeoutsToHclTerraform(struct?: ElasticacheUserGroupAssociationTimeouts | cdktf.IResolvable): any;
export declare class ElasticacheUserGroupAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticacheUserGroupAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticacheUserGroupAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_user_group_association aws_elasticache_user_group_association}
*/
export declare class ElasticacheUserGroupAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elasticache_user_group_association";
    /**
    * Generates CDKTF code for importing a ElasticacheUserGroupAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElasticacheUserGroupAssociation to import
    * @param importFromId The id of the existing ElasticacheUserGroupAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_user_group_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElasticacheUserGroupAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_user_group_association aws_elasticache_user_group_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheUserGroupAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ElasticacheUserGroupAssociationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _userGroupId?;
    get userGroupId(): string;
    set userGroupId(value: string);
    get userGroupIdInput(): string | undefined;
    private _userId?;
    get userId(): string;
    set userId(value: string);
    get userIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): ElasticacheUserGroupAssociationTimeoutsOutputReference;
    putTimeouts(value: ElasticacheUserGroupAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ElasticacheUserGroupAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
