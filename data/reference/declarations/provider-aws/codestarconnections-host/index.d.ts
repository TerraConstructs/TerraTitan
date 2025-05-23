/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodestarconnectionsHostConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host#id CodestarconnectionsHost#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host#name CodestarconnectionsHost#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host#provider_endpoint CodestarconnectionsHost#provider_endpoint}
    */
    readonly providerEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host#provider_type CodestarconnectionsHost#provider_type}
    */
    readonly providerType: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host#timeouts CodestarconnectionsHost#timeouts}
    */
    readonly timeouts?: CodestarconnectionsHostTimeouts;
    /**
    * vpc_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host#vpc_configuration CodestarconnectionsHost#vpc_configuration}
    */
    readonly vpcConfiguration?: CodestarconnectionsHostVpcConfiguration;
}
export interface CodestarconnectionsHostTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host#create CodestarconnectionsHost#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host#delete CodestarconnectionsHost#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host#update CodestarconnectionsHost#update}
    */
    readonly update?: string;
}
export declare function codestarconnectionsHostTimeoutsToTerraform(struct?: CodestarconnectionsHostTimeouts | cdktf.IResolvable): any;
export declare function codestarconnectionsHostTimeoutsToHclTerraform(struct?: CodestarconnectionsHostTimeouts | cdktf.IResolvable): any;
export declare class CodestarconnectionsHostTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodestarconnectionsHostTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CodestarconnectionsHostTimeouts | cdktf.IResolvable | undefined);
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
export interface CodestarconnectionsHostVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host#security_group_ids CodestarconnectionsHost#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host#subnet_ids CodestarconnectionsHost#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host#tls_certificate CodestarconnectionsHost#tls_certificate}
    */
    readonly tlsCertificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host#vpc_id CodestarconnectionsHost#vpc_id}
    */
    readonly vpcId: string;
}
export declare function codestarconnectionsHostVpcConfigurationToTerraform(struct?: CodestarconnectionsHostVpcConfigurationOutputReference | CodestarconnectionsHostVpcConfiguration): any;
export declare function codestarconnectionsHostVpcConfigurationToHclTerraform(struct?: CodestarconnectionsHostVpcConfigurationOutputReference | CodestarconnectionsHostVpcConfiguration): any;
export declare class CodestarconnectionsHostVpcConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodestarconnectionsHostVpcConfiguration | undefined;
    set internalValue(value: CodestarconnectionsHostVpcConfiguration | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    private _tlsCertificate?;
    get tlsCertificate(): string;
    set tlsCertificate(value: string);
    resetTlsCertificate(): void;
    get tlsCertificateInput(): string | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host aws_codestarconnections_host}
*/
export declare class CodestarconnectionsHost extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codestarconnections_host";
    /**
    * Generates CDKTF code for importing a CodestarconnectionsHost resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodestarconnectionsHost to import
    * @param importFromId The id of the existing CodestarconnectionsHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodestarconnectionsHost to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarconnections_host aws_codestarconnections_host} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodestarconnectionsHostConfig
    */
    constructor(scope: Construct, id: string, config: CodestarconnectionsHostConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _providerEndpoint?;
    get providerEndpoint(): string;
    set providerEndpoint(value: string);
    get providerEndpointInput(): string | undefined;
    private _providerType?;
    get providerType(): string;
    set providerType(value: string);
    get providerTypeInput(): string | undefined;
    get status(): string;
    private _timeouts;
    get timeouts(): CodestarconnectionsHostTimeoutsOutputReference;
    putTimeouts(value: CodestarconnectionsHostTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CodestarconnectionsHostTimeouts | undefined;
    private _vpcConfiguration;
    get vpcConfiguration(): CodestarconnectionsHostVpcConfigurationOutputReference;
    putVpcConfiguration(value: CodestarconnectionsHostVpcConfiguration): void;
    resetVpcConfiguration(): void;
    get vpcConfigurationInput(): CodestarconnectionsHostVpcConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
