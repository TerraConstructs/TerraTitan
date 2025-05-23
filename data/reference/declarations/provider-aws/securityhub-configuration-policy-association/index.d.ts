/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubConfigurationPolicyAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy_association#id SecurityhubConfigurationPolicyAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The universally unique identifier (UUID) of the configuration policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy_association#policy_id SecurityhubConfigurationPolicyAssociation#policy_id}
    */
    readonly policyId: string;
    /**
    * The identifier of the target account, organizational unit, or the root to associate with the specified configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy_association#target_id SecurityhubConfigurationPolicyAssociation#target_id}
    */
    readonly targetId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy_association#timeouts SecurityhubConfigurationPolicyAssociation#timeouts}
    */
    readonly timeouts?: SecurityhubConfigurationPolicyAssociationTimeouts;
}
export interface SecurityhubConfigurationPolicyAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy_association#create SecurityhubConfigurationPolicyAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy_association#update SecurityhubConfigurationPolicyAssociation#update}
    */
    readonly update?: string;
}
export declare function securityhubConfigurationPolicyAssociationTimeoutsToTerraform(struct?: SecurityhubConfigurationPolicyAssociationTimeouts | cdktf.IResolvable): any;
export declare function securityhubConfigurationPolicyAssociationTimeoutsToHclTerraform(struct?: SecurityhubConfigurationPolicyAssociationTimeouts | cdktf.IResolvable): any;
export declare class SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubConfigurationPolicyAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubConfigurationPolicyAssociationTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy_association aws_securityhub_configuration_policy_association}
*/
export declare class SecurityhubConfigurationPolicyAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securityhub_configuration_policy_association";
    /**
    * Generates CDKTF code for importing a SecurityhubConfigurationPolicyAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecurityhubConfigurationPolicyAssociation to import
    * @param importFromId The id of the existing SecurityhubConfigurationPolicyAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecurityhubConfigurationPolicyAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy_association aws_securityhub_configuration_policy_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubConfigurationPolicyAssociationConfig
    */
    constructor(scope: Construct, id: string, config: SecurityhubConfigurationPolicyAssociationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _policyId?;
    get policyId(): string;
    set policyId(value: string);
    get policyIdInput(): string | undefined;
    private _targetId?;
    get targetId(): string;
    set targetId(value: string);
    get targetIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference;
    putTimeouts(value: SecurityhubConfigurationPolicyAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SecurityhubConfigurationPolicyAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
