/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubOrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_configuration#auto_enable SecurityhubOrganizationConfiguration#auto_enable}
    */
    readonly autoEnable: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_configuration#auto_enable_standards SecurityhubOrganizationConfiguration#auto_enable_standards}
    */
    readonly autoEnableStandards?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_configuration#id SecurityhubOrganizationConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * organization_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_configuration#organization_configuration SecurityhubOrganizationConfiguration#organization_configuration}
    */
    readonly organizationConfiguration?: SecurityhubOrganizationConfigurationOrganizationConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_configuration#timeouts SecurityhubOrganizationConfiguration#timeouts}
    */
    readonly timeouts?: SecurityhubOrganizationConfigurationTimeouts;
}
export interface SecurityhubOrganizationConfigurationOrganizationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_configuration#configuration_type SecurityhubOrganizationConfiguration#configuration_type}
    */
    readonly configurationType: string;
}
export declare function securityhubOrganizationConfigurationOrganizationConfigurationToTerraform(struct?: SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference | SecurityhubOrganizationConfigurationOrganizationConfiguration): any;
export declare function securityhubOrganizationConfigurationOrganizationConfigurationToHclTerraform(struct?: SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference | SecurityhubOrganizationConfigurationOrganizationConfiguration): any;
export declare class SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubOrganizationConfigurationOrganizationConfiguration | undefined;
    set internalValue(value: SecurityhubOrganizationConfigurationOrganizationConfiguration | undefined);
    private _configurationType?;
    get configurationType(): string;
    set configurationType(value: string);
    get configurationTypeInput(): string | undefined;
}
export interface SecurityhubOrganizationConfigurationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_configuration#create SecurityhubOrganizationConfiguration#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_configuration#delete SecurityhubOrganizationConfiguration#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_configuration#update SecurityhubOrganizationConfiguration#update}
    */
    readonly update?: string;
}
export declare function securityhubOrganizationConfigurationTimeoutsToTerraform(struct?: SecurityhubOrganizationConfigurationTimeouts | cdktf.IResolvable): any;
export declare function securityhubOrganizationConfigurationTimeoutsToHclTerraform(struct?: SecurityhubOrganizationConfigurationTimeouts | cdktf.IResolvable): any;
export declare class SecurityhubOrganizationConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubOrganizationConfigurationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubOrganizationConfigurationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_configuration aws_securityhub_organization_configuration}
*/
export declare class SecurityhubOrganizationConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securityhub_organization_configuration";
    /**
    * Generates CDKTF code for importing a SecurityhubOrganizationConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecurityhubOrganizationConfiguration to import
    * @param importFromId The id of the existing SecurityhubOrganizationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecurityhubOrganizationConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_configuration aws_securityhub_organization_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubOrganizationConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: SecurityhubOrganizationConfigurationConfig);
    private _autoEnable?;
    get autoEnable(): boolean | cdktf.IResolvable;
    set autoEnable(value: boolean | cdktf.IResolvable);
    get autoEnableInput(): boolean | cdktf.IResolvable | undefined;
    private _autoEnableStandards?;
    get autoEnableStandards(): string;
    set autoEnableStandards(value: string);
    resetAutoEnableStandards(): void;
    get autoEnableStandardsInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _organizationConfiguration;
    get organizationConfiguration(): SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference;
    putOrganizationConfiguration(value: SecurityhubOrganizationConfigurationOrganizationConfiguration): void;
    resetOrganizationConfiguration(): void;
    get organizationConfigurationInput(): SecurityhubOrganizationConfigurationOrganizationConfiguration | undefined;
    private _timeouts;
    get timeouts(): SecurityhubOrganizationConfigurationTimeoutsOutputReference;
    putTimeouts(value: SecurityhubOrganizationConfigurationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SecurityhubOrganizationConfigurationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
