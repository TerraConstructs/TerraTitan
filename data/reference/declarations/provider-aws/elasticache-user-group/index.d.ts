/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticacheUserGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user_group#engine ElasticacheUserGroup#engine}
    */
    readonly engine: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user_group#id ElasticacheUserGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user_group#tags ElasticacheUserGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user_group#tags_all ElasticacheUserGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user_group#user_group_id ElasticacheUserGroup#user_group_id}
    */
    readonly userGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user_group#user_ids ElasticacheUserGroup#user_ids}
    */
    readonly userIds?: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user_group aws_elasticache_user_group}
*/
export declare class ElasticacheUserGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elasticache_user_group";
    /**
    * Generates CDKTF code for importing a ElasticacheUserGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElasticacheUserGroup to import
    * @param importFromId The id of the existing ElasticacheUserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElasticacheUserGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user_group aws_elasticache_user_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheUserGroupConfig
    */
    constructor(scope: Construct, id: string, config: ElasticacheUserGroupConfig);
    get arn(): string;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    get engineInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _userGroupId?;
    get userGroupId(): string;
    set userGroupId(value: string);
    get userGroupIdInput(): string | undefined;
    private _userIds?;
    get userIds(): string[];
    set userIds(value: string[]);
    resetUserIds(): void;
    get userIdsInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
