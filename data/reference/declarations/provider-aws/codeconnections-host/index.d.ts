/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodeconnectionsHostConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host#name CodeconnectionsHost#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host#provider_endpoint CodeconnectionsHost#provider_endpoint}
    */
    readonly providerEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host#provider_type CodeconnectionsHost#provider_type}
    */
    readonly providerType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host#tags CodeconnectionsHost#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host#timeouts CodeconnectionsHost#timeouts}
    */
    readonly timeouts?: CodeconnectionsHostTimeouts;
    /**
    * vpc_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host#vpc_configuration CodeconnectionsHost#vpc_configuration}
    */
    readonly vpcConfiguration?: CodeconnectionsHostVpcConfiguration[] | cdktf.IResolvable;
}
export interface CodeconnectionsHostTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host#create CodeconnectionsHost#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host#delete CodeconnectionsHost#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host#update CodeconnectionsHost#update}
    */
    readonly update?: string;
}
export declare function codeconnectionsHostTimeoutsToTerraform(struct?: CodeconnectionsHostTimeouts | cdktf.IResolvable): any;
export declare function codeconnectionsHostTimeoutsToHclTerraform(struct?: CodeconnectionsHostTimeouts | cdktf.IResolvable): any;
export declare class CodeconnectionsHostTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodeconnectionsHostTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CodeconnectionsHostTimeouts | cdktf.IResolvable | undefined);
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
export interface CodeconnectionsHostVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host#security_group_ids CodeconnectionsHost#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host#subnet_ids CodeconnectionsHost#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host#tls_certificate CodeconnectionsHost#tls_certificate}
    */
    readonly tlsCertificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host#vpc_id CodeconnectionsHost#vpc_id}
    */
    readonly vpcId: string;
}
export declare function codeconnectionsHostVpcConfigurationToTerraform(struct?: CodeconnectionsHostVpcConfiguration | cdktf.IResolvable): any;
export declare function codeconnectionsHostVpcConfigurationToHclTerraform(struct?: CodeconnectionsHostVpcConfiguration | cdktf.IResolvable): any;
export declare class CodeconnectionsHostVpcConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodeconnectionsHostVpcConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: CodeconnectionsHostVpcConfiguration | cdktf.IResolvable | undefined);
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
export declare class CodeconnectionsHostVpcConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodeconnectionsHostVpcConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodeconnectionsHostVpcConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host aws_codeconnections_host}
*/
export declare class CodeconnectionsHost extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codeconnections_host";
    /**
    * Generates CDKTF code for importing a CodeconnectionsHost resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodeconnectionsHost to import
    * @param importFromId The id of the existing CodeconnectionsHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodeconnectionsHost to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codeconnections_host aws_codeconnections_host} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeconnectionsHostConfig
    */
    constructor(scope: Construct, id: string, config: CodeconnectionsHostConfig);
    get arn(): string;
    get id(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _timeouts;
    get timeouts(): CodeconnectionsHostTimeoutsOutputReference;
    putTimeouts(value: CodeconnectionsHostTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CodeconnectionsHostTimeouts | undefined;
    private _vpcConfiguration;
    get vpcConfiguration(): CodeconnectionsHostVpcConfigurationList;
    putVpcConfiguration(value: CodeconnectionsHostVpcConfiguration[] | cdktf.IResolvable): void;
    resetVpcConfiguration(): void;
    get vpcConfigurationInput(): cdktf.IResolvable | CodeconnectionsHostVpcConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
