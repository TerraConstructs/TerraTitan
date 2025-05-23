/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Wafv2WebAclAssociationConfigA extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_association#id Wafv2WebAclAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_association#resource_arn Wafv2WebAclAssociation#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_association#web_acl_arn Wafv2WebAclAssociation#web_acl_arn}
    */
    readonly webAclArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_association#timeouts Wafv2WebAclAssociation#timeouts}
    */
    readonly timeouts?: Wafv2WebAclAssociationTimeouts;
}
export interface Wafv2WebAclAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_association#create Wafv2WebAclAssociation#create}
    */
    readonly create?: string;
}
export declare function wafv2WebAclAssociationTimeoutsToTerraform(struct?: Wafv2WebAclAssociationTimeouts | cdktf.IResolvable): any;
export declare function wafv2WebAclAssociationTimeoutsToHclTerraform(struct?: Wafv2WebAclAssociationTimeouts | cdktf.IResolvable): any;
export declare class Wafv2WebAclAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclAssociationTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_association aws_wafv2_web_acl_association}
*/
export declare class Wafv2WebAclAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafv2_web_acl_association";
    /**
    * Generates CDKTF code for importing a Wafv2WebAclAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Wafv2WebAclAssociation to import
    * @param importFromId The id of the existing Wafv2WebAclAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Wafv2WebAclAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_association aws_wafv2_web_acl_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2WebAclAssociationConfigA
    */
    constructor(scope: Construct, id: string, config: Wafv2WebAclAssociationConfigA);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    private _webAclArn?;
    get webAclArn(): string;
    set webAclArn(value: string);
    get webAclArnInput(): string | undefined;
    private _timeouts;
    get timeouts(): Wafv2WebAclAssociationTimeoutsOutputReference;
    putTimeouts(value: Wafv2WebAclAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Wafv2WebAclAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
