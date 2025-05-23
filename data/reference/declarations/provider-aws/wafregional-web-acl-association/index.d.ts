/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalWebAclAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl_association#id WafregionalWebAclAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl_association#resource_arn WafregionalWebAclAssociation#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl_association#web_acl_id WafregionalWebAclAssociation#web_acl_id}
    */
    readonly webAclId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl_association#timeouts WafregionalWebAclAssociation#timeouts}
    */
    readonly timeouts?: WafregionalWebAclAssociationTimeouts;
}
export interface WafregionalWebAclAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl_association#create WafregionalWebAclAssociation#create}
    */
    readonly create?: string;
}
export declare function wafregionalWebAclAssociationTimeoutsToTerraform(struct?: WafregionalWebAclAssociationTimeouts | cdktf.IResolvable): any;
export declare function wafregionalWebAclAssociationTimeoutsToHclTerraform(struct?: WafregionalWebAclAssociationTimeouts | cdktf.IResolvable): any;
export declare class WafregionalWebAclAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafregionalWebAclAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: WafregionalWebAclAssociationTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl_association aws_wafregional_web_acl_association}
*/
export declare class WafregionalWebAclAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafregional_web_acl_association";
    /**
    * Generates CDKTF code for importing a WafregionalWebAclAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafregionalWebAclAssociation to import
    * @param importFromId The id of the existing WafregionalWebAclAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafregionalWebAclAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl_association aws_wafregional_web_acl_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalWebAclAssociationConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalWebAclAssociationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    private _webAclId?;
    get webAclId(): string;
    set webAclId(value: string);
    get webAclIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): WafregionalWebAclAssociationTimeoutsOutputReference;
    putTimeouts(value: WafregionalWebAclAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | WafregionalWebAclAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
