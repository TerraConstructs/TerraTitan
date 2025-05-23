/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EksAccessPolicyAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_policy_association#cluster_name EksAccessPolicyAssociation#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_policy_association#id EksAccessPolicyAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_policy_association#policy_arn EksAccessPolicyAssociation#policy_arn}
    */
    readonly policyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_policy_association#principal_arn EksAccessPolicyAssociation#principal_arn}
    */
    readonly principalArn: string;
    /**
    * access_scope block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_policy_association#access_scope EksAccessPolicyAssociation#access_scope}
    */
    readonly accessScope: EksAccessPolicyAssociationAccessScope;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_policy_association#timeouts EksAccessPolicyAssociation#timeouts}
    */
    readonly timeouts?: EksAccessPolicyAssociationTimeouts;
}
export interface EksAccessPolicyAssociationAccessScope {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_policy_association#namespaces EksAccessPolicyAssociation#namespaces}
    */
    readonly namespaces?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_policy_association#type EksAccessPolicyAssociation#type}
    */
    readonly type: string;
}
export declare function eksAccessPolicyAssociationAccessScopeToTerraform(struct?: EksAccessPolicyAssociationAccessScopeOutputReference | EksAccessPolicyAssociationAccessScope): any;
export declare function eksAccessPolicyAssociationAccessScopeToHclTerraform(struct?: EksAccessPolicyAssociationAccessScopeOutputReference | EksAccessPolicyAssociationAccessScope): any;
export declare class EksAccessPolicyAssociationAccessScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksAccessPolicyAssociationAccessScope | undefined;
    set internalValue(value: EksAccessPolicyAssociationAccessScope | undefined);
    private _namespaces?;
    get namespaces(): string[];
    set namespaces(value: string[]);
    resetNamespaces(): void;
    get namespacesInput(): string[] | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface EksAccessPolicyAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_policy_association#create EksAccessPolicyAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_policy_association#delete EksAccessPolicyAssociation#delete}
    */
    readonly delete?: string;
}
export declare function eksAccessPolicyAssociationTimeoutsToTerraform(struct?: EksAccessPolicyAssociationTimeouts | cdktf.IResolvable): any;
export declare function eksAccessPolicyAssociationTimeoutsToHclTerraform(struct?: EksAccessPolicyAssociationTimeouts | cdktf.IResolvable): any;
export declare class EksAccessPolicyAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksAccessPolicyAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EksAccessPolicyAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_policy_association aws_eks_access_policy_association}
*/
export declare class EksAccessPolicyAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_eks_access_policy_association";
    /**
    * Generates CDKTF code for importing a EksAccessPolicyAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EksAccessPolicyAssociation to import
    * @param importFromId The id of the existing EksAccessPolicyAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_policy_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EksAccessPolicyAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_policy_association aws_eks_access_policy_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksAccessPolicyAssociationConfig
    */
    constructor(scope: Construct, id: string, config: EksAccessPolicyAssociationConfig);
    get associatedAt(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get modifiedAt(): string;
    private _policyArn?;
    get policyArn(): string;
    set policyArn(value: string);
    get policyArnInput(): string | undefined;
    private _principalArn?;
    get principalArn(): string;
    set principalArn(value: string);
    get principalArnInput(): string | undefined;
    private _accessScope;
    get accessScope(): EksAccessPolicyAssociationAccessScopeOutputReference;
    putAccessScope(value: EksAccessPolicyAssociationAccessScope): void;
    get accessScopeInput(): EksAccessPolicyAssociationAccessScope | undefined;
    private _timeouts;
    get timeouts(): EksAccessPolicyAssociationTimeoutsOutputReference;
    putTimeouts(value: EksAccessPolicyAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EksAccessPolicyAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
