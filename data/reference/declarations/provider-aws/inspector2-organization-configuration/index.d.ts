/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Inspector2OrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_organization_configuration#id Inspector2OrganizationConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * auto_enable block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_organization_configuration#auto_enable Inspector2OrganizationConfiguration#auto_enable}
    */
    readonly autoEnable: Inspector2OrganizationConfigurationAutoEnable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_organization_configuration#timeouts Inspector2OrganizationConfiguration#timeouts}
    */
    readonly timeouts?: Inspector2OrganizationConfigurationTimeouts;
}
export interface Inspector2OrganizationConfigurationAutoEnable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_organization_configuration#ec2 Inspector2OrganizationConfiguration#ec2}
    */
    readonly ec2: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_organization_configuration#ecr Inspector2OrganizationConfiguration#ecr}
    */
    readonly ecr: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_organization_configuration#lambda Inspector2OrganizationConfiguration#lambda}
    */
    readonly lambda?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_organization_configuration#lambda_code Inspector2OrganizationConfiguration#lambda_code}
    */
    readonly lambdaCode?: boolean | cdktf.IResolvable;
}
export declare function inspector2OrganizationConfigurationAutoEnableToTerraform(struct?: Inspector2OrganizationConfigurationAutoEnableOutputReference | Inspector2OrganizationConfigurationAutoEnable): any;
export declare function inspector2OrganizationConfigurationAutoEnableToHclTerraform(struct?: Inspector2OrganizationConfigurationAutoEnableOutputReference | Inspector2OrganizationConfigurationAutoEnable): any;
export declare class Inspector2OrganizationConfigurationAutoEnableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Inspector2OrganizationConfigurationAutoEnable | undefined;
    set internalValue(value: Inspector2OrganizationConfigurationAutoEnable | undefined);
    private _ec2?;
    get ec2(): boolean | cdktf.IResolvable;
    set ec2(value: boolean | cdktf.IResolvable);
    get ec2Input(): boolean | cdktf.IResolvable | undefined;
    private _ecr?;
    get ecr(): boolean | cdktf.IResolvable;
    set ecr(value: boolean | cdktf.IResolvable);
    get ecrInput(): boolean | cdktf.IResolvable | undefined;
    private _lambda?;
    get lambda(): boolean | cdktf.IResolvable;
    set lambda(value: boolean | cdktf.IResolvable);
    resetLambda(): void;
    get lambdaInput(): boolean | cdktf.IResolvable | undefined;
    private _lambdaCode?;
    get lambdaCode(): boolean | cdktf.IResolvable;
    set lambdaCode(value: boolean | cdktf.IResolvable);
    resetLambdaCode(): void;
    get lambdaCodeInput(): boolean | cdktf.IResolvable | undefined;
}
export interface Inspector2OrganizationConfigurationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_organization_configuration#create Inspector2OrganizationConfiguration#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_organization_configuration#delete Inspector2OrganizationConfiguration#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_organization_configuration#update Inspector2OrganizationConfiguration#update}
    */
    readonly update?: string;
}
export declare function inspector2OrganizationConfigurationTimeoutsToTerraform(struct?: Inspector2OrganizationConfigurationTimeouts | cdktf.IResolvable): any;
export declare function inspector2OrganizationConfigurationTimeoutsToHclTerraform(struct?: Inspector2OrganizationConfigurationTimeouts | cdktf.IResolvable): any;
export declare class Inspector2OrganizationConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Inspector2OrganizationConfigurationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2OrganizationConfigurationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_organization_configuration aws_inspector2_organization_configuration}
*/
export declare class Inspector2OrganizationConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_inspector2_organization_configuration";
    /**
    * Generates CDKTF code for importing a Inspector2OrganizationConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Inspector2OrganizationConfiguration to import
    * @param importFromId The id of the existing Inspector2OrganizationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_organization_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Inspector2OrganizationConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_organization_configuration aws_inspector2_organization_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Inspector2OrganizationConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: Inspector2OrganizationConfigurationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get maxAccountLimitReached(): cdktf.IResolvable;
    private _autoEnable;
    get autoEnable(): Inspector2OrganizationConfigurationAutoEnableOutputReference;
    putAutoEnable(value: Inspector2OrganizationConfigurationAutoEnable): void;
    get autoEnableInput(): Inspector2OrganizationConfigurationAutoEnable | undefined;
    private _timeouts;
    get timeouts(): Inspector2OrganizationConfigurationTimeoutsOutputReference;
    putTimeouts(value: Inspector2OrganizationConfigurationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Inspector2OrganizationConfigurationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
