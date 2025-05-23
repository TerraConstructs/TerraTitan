/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DirectoryServiceDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#alias DirectoryServiceDirectory#alias}
    */
    readonly alias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#description DirectoryServiceDirectory#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}
    */
    readonly desiredNumberOfDomainControllers?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#edition DirectoryServiceDirectory#edition}
    */
    readonly edition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}
    */
    readonly enableSso?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#id DirectoryServiceDirectory#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#name DirectoryServiceDirectory#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#password DirectoryServiceDirectory#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#short_name DirectoryServiceDirectory#short_name}
    */
    readonly shortName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#size DirectoryServiceDirectory#size}
    */
    readonly size?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#tags DirectoryServiceDirectory#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#type DirectoryServiceDirectory#type}
    */
    readonly type?: string;
    /**
    * connect_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#connect_settings DirectoryServiceDirectory#connect_settings}
    */
    readonly connectSettings?: DirectoryServiceDirectoryConnectSettings;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#timeouts DirectoryServiceDirectory#timeouts}
    */
    readonly timeouts?: DirectoryServiceDirectoryTimeouts;
    /**
    * vpc_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#vpc_settings DirectoryServiceDirectory#vpc_settings}
    */
    readonly vpcSettings?: DirectoryServiceDirectoryVpcSettings;
}
export interface DirectoryServiceDirectoryConnectSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}
    */
    readonly customerDnsIps: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#customer_username DirectoryServiceDirectory#customer_username}
    */
    readonly customerUsername: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}
    */
    readonly vpcId: string;
}
export declare function directoryServiceDirectoryConnectSettingsToTerraform(struct?: DirectoryServiceDirectoryConnectSettingsOutputReference | DirectoryServiceDirectoryConnectSettings): any;
export declare function directoryServiceDirectoryConnectSettingsToHclTerraform(struct?: DirectoryServiceDirectoryConnectSettingsOutputReference | DirectoryServiceDirectoryConnectSettings): any;
export declare class DirectoryServiceDirectoryConnectSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DirectoryServiceDirectoryConnectSettings | undefined;
    set internalValue(value: DirectoryServiceDirectoryConnectSettings | undefined);
    get availabilityZones(): string[];
    get connectIps(): string[];
    private _customerDnsIps?;
    get customerDnsIps(): string[];
    set customerDnsIps(value: string[]);
    get customerDnsIpsInput(): string[] | undefined;
    private _customerUsername?;
    get customerUsername(): string;
    set customerUsername(value: string);
    get customerUsernameInput(): string | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
}
export interface DirectoryServiceDirectoryTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#create DirectoryServiceDirectory#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#delete DirectoryServiceDirectory#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#update DirectoryServiceDirectory#update}
    */
    readonly update?: string;
}
export declare function directoryServiceDirectoryTimeoutsToTerraform(struct?: DirectoryServiceDirectoryTimeouts | cdktf.IResolvable): any;
export declare function directoryServiceDirectoryTimeoutsToHclTerraform(struct?: DirectoryServiceDirectoryTimeouts | cdktf.IResolvable): any;
export declare class DirectoryServiceDirectoryTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DirectoryServiceDirectoryTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DirectoryServiceDirectoryTimeouts | cdktf.IResolvable | undefined);
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
export interface DirectoryServiceDirectoryVpcSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}
    */
    readonly vpcId: string;
}
export declare function directoryServiceDirectoryVpcSettingsToTerraform(struct?: DirectoryServiceDirectoryVpcSettingsOutputReference | DirectoryServiceDirectoryVpcSettings): any;
export declare function directoryServiceDirectoryVpcSettingsToHclTerraform(struct?: DirectoryServiceDirectoryVpcSettingsOutputReference | DirectoryServiceDirectoryVpcSettings): any;
export declare class DirectoryServiceDirectoryVpcSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DirectoryServiceDirectoryVpcSettings | undefined;
    set internalValue(value: DirectoryServiceDirectoryVpcSettings | undefined);
    get availabilityZones(): string[];
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory aws_directory_service_directory}
*/
export declare class DirectoryServiceDirectory extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_directory_service_directory";
    /**
    * Generates CDKTF code for importing a DirectoryServiceDirectory resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DirectoryServiceDirectory to import
    * @param importFromId The id of the existing DirectoryServiceDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DirectoryServiceDirectory to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_directory aws_directory_service_directory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DirectoryServiceDirectoryConfig
    */
    constructor(scope: Construct, id: string, config: DirectoryServiceDirectoryConfig);
    get accessUrl(): string;
    private _alias?;
    get alias(): string;
    set alias(value: string);
    resetAlias(): void;
    get aliasInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _desiredNumberOfDomainControllers?;
    get desiredNumberOfDomainControllers(): number;
    set desiredNumberOfDomainControllers(value: number);
    resetDesiredNumberOfDomainControllers(): void;
    get desiredNumberOfDomainControllersInput(): number | undefined;
    get dnsIpAddresses(): string[];
    private _edition?;
    get edition(): string;
    set edition(value: string);
    resetEdition(): void;
    get editionInput(): string | undefined;
    private _enableSso?;
    get enableSso(): boolean | cdktf.IResolvable;
    set enableSso(value: boolean | cdktf.IResolvable);
    resetEnableSso(): void;
    get enableSsoInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    get securityGroupId(): string;
    private _shortName?;
    get shortName(): string;
    set shortName(value: string);
    resetShortName(): void;
    get shortNameInput(): string | undefined;
    private _size?;
    get size(): string;
    set size(value: string);
    resetSize(): void;
    get sizeInput(): string | undefined;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _connectSettings;
    get connectSettings(): DirectoryServiceDirectoryConnectSettingsOutputReference;
    putConnectSettings(value: DirectoryServiceDirectoryConnectSettings): void;
    resetConnectSettings(): void;
    get connectSettingsInput(): DirectoryServiceDirectoryConnectSettings | undefined;
    private _timeouts;
    get timeouts(): DirectoryServiceDirectoryTimeoutsOutputReference;
    putTimeouts(value: DirectoryServiceDirectoryTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DirectoryServiceDirectoryTimeouts | undefined;
    private _vpcSettings;
    get vpcSettings(): DirectoryServiceDirectoryVpcSettingsOutputReference;
    putVpcSettings(value: DirectoryServiceDirectoryVpcSettings): void;
    resetVpcSettings(): void;
    get vpcSettingsInput(): DirectoryServiceDirectoryVpcSettings | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
