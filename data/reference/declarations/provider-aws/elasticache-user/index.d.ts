/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticacheUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#access_string ElasticacheUser#access_string}
    */
    readonly accessString: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#engine ElasticacheUser#engine}
    */
    readonly engine: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#id ElasticacheUser#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#no_password_required ElasticacheUser#no_password_required}
    */
    readonly noPasswordRequired?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#passwords ElasticacheUser#passwords}
    */
    readonly passwords?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#tags ElasticacheUser#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#tags_all ElasticacheUser#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#user_id ElasticacheUser#user_id}
    */
    readonly userId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#user_name ElasticacheUser#user_name}
    */
    readonly userName: string;
    /**
    * authentication_mode block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#authentication_mode ElasticacheUser#authentication_mode}
    */
    readonly authenticationMode?: ElasticacheUserAuthenticationMode;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#timeouts ElasticacheUser#timeouts}
    */
    readonly timeouts?: ElasticacheUserTimeouts;
}
export interface ElasticacheUserAuthenticationMode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#passwords ElasticacheUser#passwords}
    */
    readonly passwords?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#type ElasticacheUser#type}
    */
    readonly type: string;
}
export declare function elasticacheUserAuthenticationModeToTerraform(struct?: ElasticacheUserAuthenticationModeOutputReference | ElasticacheUserAuthenticationMode): any;
export declare function elasticacheUserAuthenticationModeToHclTerraform(struct?: ElasticacheUserAuthenticationModeOutputReference | ElasticacheUserAuthenticationMode): any;
export declare class ElasticacheUserAuthenticationModeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticacheUserAuthenticationMode | undefined;
    set internalValue(value: ElasticacheUserAuthenticationMode | undefined);
    get passwordCount(): number;
    private _passwords?;
    get passwords(): string[];
    set passwords(value: string[]);
    resetPasswords(): void;
    get passwordsInput(): string[] | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface ElasticacheUserTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#create ElasticacheUser#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#delete ElasticacheUser#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#read ElasticacheUser#read}
    */
    readonly read?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#update ElasticacheUser#update}
    */
    readonly update?: string;
}
export declare function elasticacheUserTimeoutsToTerraform(struct?: ElasticacheUserTimeouts | cdktf.IResolvable): any;
export declare function elasticacheUserTimeoutsToHclTerraform(struct?: ElasticacheUserTimeouts | cdktf.IResolvable): any;
export declare class ElasticacheUserTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticacheUserTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticacheUserTimeouts | cdktf.IResolvable | undefined);
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
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user aws_elasticache_user}
*/
export declare class ElasticacheUser extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elasticache_user";
    /**
    * Generates CDKTF code for importing a ElasticacheUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElasticacheUser to import
    * @param importFromId The id of the existing ElasticacheUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElasticacheUser to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_user aws_elasticache_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheUserConfig
    */
    constructor(scope: Construct, id: string, config: ElasticacheUserConfig);
    private _accessString?;
    get accessString(): string;
    set accessString(value: string);
    get accessStringInput(): string | undefined;
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
    private _noPasswordRequired?;
    get noPasswordRequired(): boolean | cdktf.IResolvable;
    set noPasswordRequired(value: boolean | cdktf.IResolvable);
    resetNoPasswordRequired(): void;
    get noPasswordRequiredInput(): boolean | cdktf.IResolvable | undefined;
    private _passwords?;
    get passwords(): string[];
    set passwords(value: string[]);
    resetPasswords(): void;
    get passwordsInput(): string[] | undefined;
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
    private _userId?;
    get userId(): string;
    set userId(value: string);
    get userIdInput(): string | undefined;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string | undefined;
    private _authenticationMode;
    get authenticationMode(): ElasticacheUserAuthenticationModeOutputReference;
    putAuthenticationMode(value: ElasticacheUserAuthenticationMode): void;
    resetAuthenticationMode(): void;
    get authenticationModeInput(): ElasticacheUserAuthenticationMode | undefined;
    private _timeouts;
    get timeouts(): ElasticacheUserTimeoutsOutputReference;
    putTimeouts(value: ElasticacheUserTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ElasticacheUserTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
