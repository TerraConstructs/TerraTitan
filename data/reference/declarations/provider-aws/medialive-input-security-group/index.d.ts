/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MedialiveInputSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input_security_group#id MedialiveInputSecurityGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input_security_group#tags MedialiveInputSecurityGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input_security_group#tags_all MedialiveInputSecurityGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input_security_group#timeouts MedialiveInputSecurityGroup#timeouts}
    */
    readonly timeouts?: MedialiveInputSecurityGroupTimeouts;
    /**
    * whitelist_rules block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input_security_group#whitelist_rules MedialiveInputSecurityGroup#whitelist_rules}
    */
    readonly whitelistRules: MedialiveInputSecurityGroupWhitelistRules[] | cdktf.IResolvable;
}
export interface MedialiveInputSecurityGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input_security_group#create MedialiveInputSecurityGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input_security_group#delete MedialiveInputSecurityGroup#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input_security_group#update MedialiveInputSecurityGroup#update}
    */
    readonly update?: string;
}
export declare function medialiveInputSecurityGroupTimeoutsToTerraform(struct?: MedialiveInputSecurityGroupTimeouts | cdktf.IResolvable): any;
export declare function medialiveInputSecurityGroupTimeoutsToHclTerraform(struct?: MedialiveInputSecurityGroupTimeouts | cdktf.IResolvable): any;
export declare class MedialiveInputSecurityGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveInputSecurityGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveInputSecurityGroupTimeouts | cdktf.IResolvable | undefined);
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
export interface MedialiveInputSecurityGroupWhitelistRules {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input_security_group#cidr MedialiveInputSecurityGroup#cidr}
    */
    readonly cidr: string;
}
export declare function medialiveInputSecurityGroupWhitelistRulesToTerraform(struct?: MedialiveInputSecurityGroupWhitelistRules | cdktf.IResolvable): any;
export declare function medialiveInputSecurityGroupWhitelistRulesToHclTerraform(struct?: MedialiveInputSecurityGroupWhitelistRules | cdktf.IResolvable): any;
export declare class MedialiveInputSecurityGroupWhitelistRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveInputSecurityGroupWhitelistRules | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveInputSecurityGroupWhitelistRules | cdktf.IResolvable | undefined);
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    get cidrInput(): string | undefined;
}
export declare class MedialiveInputSecurityGroupWhitelistRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveInputSecurityGroupWhitelistRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveInputSecurityGroupWhitelistRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input_security_group aws_medialive_input_security_group}
*/
export declare class MedialiveInputSecurityGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_medialive_input_security_group";
    /**
    * Generates CDKTF code for importing a MedialiveInputSecurityGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MedialiveInputSecurityGroup to import
    * @param importFromId The id of the existing MedialiveInputSecurityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input_security_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MedialiveInputSecurityGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input_security_group aws_medialive_input_security_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MedialiveInputSecurityGroupConfig
    */
    constructor(scope: Construct, id: string, config: MedialiveInputSecurityGroupConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get inputs(): string[];
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
    private _timeouts;
    get timeouts(): MedialiveInputSecurityGroupTimeoutsOutputReference;
    putTimeouts(value: MedialiveInputSecurityGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MedialiveInputSecurityGroupTimeouts | undefined;
    private _whitelistRules;
    get whitelistRules(): MedialiveInputSecurityGroupWhitelistRulesList;
    putWhitelistRules(value: MedialiveInputSecurityGroupWhitelistRules[] | cdktf.IResolvable): void;
    get whitelistRulesInput(): cdktf.IResolvable | MedialiveInputSecurityGroupWhitelistRules[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
