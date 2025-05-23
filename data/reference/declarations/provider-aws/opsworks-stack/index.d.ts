/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#agent_version OpsworksStack#agent_version}
    */
    readonly agentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}
    */
    readonly berkshelfVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#color OpsworksStack#color}
    */
    readonly color?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}
    */
    readonly configurationManagerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}
    */
    readonly configurationManagerVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#custom_json OpsworksStack#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}
    */
    readonly defaultAvailabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}
    */
    readonly defaultInstanceProfileArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#default_os OpsworksStack#default_os}
    */
    readonly defaultOs?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}
    */
    readonly defaultRootDeviceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}
    */
    readonly defaultSshKeyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}
    */
    readonly defaultSubnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}
    */
    readonly hostnameTheme?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#id OpsworksStack#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}
    */
    readonly manageBerkshelf?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#name OpsworksStack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#region OpsworksStack#region}
    */
    readonly region: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}
    */
    readonly serviceRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#tags OpsworksStack#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#tags_all OpsworksStack#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}
    */
    readonly useCustomCookbooks?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}
    */
    readonly useOpsworksSecurityGroups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#vpc_id OpsworksStack#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * custom_cookbooks_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#custom_cookbooks_source OpsworksStack#custom_cookbooks_source}
    */
    readonly customCookbooksSource?: OpsworksStackCustomCookbooksSource;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#timeouts OpsworksStack#timeouts}
    */
    readonly timeouts?: OpsworksStackTimeouts;
}
export interface OpsworksStackCustomCookbooksSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#password OpsworksStack#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#revision OpsworksStack#revision}
    */
    readonly revision?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#ssh_key OpsworksStack#ssh_key}
    */
    readonly sshKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#type OpsworksStack#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#url OpsworksStack#url}
    */
    readonly url: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#username OpsworksStack#username}
    */
    readonly username?: string;
}
export declare function opsworksStackCustomCookbooksSourceToTerraform(struct?: OpsworksStackCustomCookbooksSourceOutputReference | OpsworksStackCustomCookbooksSource): any;
export declare function opsworksStackCustomCookbooksSourceToHclTerraform(struct?: OpsworksStackCustomCookbooksSourceOutputReference | OpsworksStackCustomCookbooksSource): any;
export declare class OpsworksStackCustomCookbooksSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksStackCustomCookbooksSource | undefined;
    set internalValue(value: OpsworksStackCustomCookbooksSource | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string | undefined;
    private _revision?;
    get revision(): string;
    set revision(value: string);
    resetRevision(): void;
    get revisionInput(): string | undefined;
    private _sshKey?;
    get sshKey(): string;
    set sshKey(value: string);
    resetSshKey(): void;
    get sshKeyInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
}
export interface OpsworksStackTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#create OpsworksStack#create}
    */
    readonly create?: string;
}
export declare function opsworksStackTimeoutsToTerraform(struct?: OpsworksStackTimeouts | cdktf.IResolvable): any;
export declare function opsworksStackTimeoutsToHclTerraform(struct?: OpsworksStackTimeouts | cdktf.IResolvable): any;
export declare class OpsworksStackTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksStackTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksStackTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack aws_opsworks_stack}
*/
export declare class OpsworksStack extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opsworks_stack";
    /**
    * Generates CDKTF code for importing a OpsworksStack resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpsworksStack to import
    * @param importFromId The id of the existing OpsworksStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpsworksStack to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_stack aws_opsworks_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksStackConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksStackConfig);
    private _agentVersion?;
    get agentVersion(): string;
    set agentVersion(value: string);
    resetAgentVersion(): void;
    get agentVersionInput(): string | undefined;
    get arn(): string;
    private _berkshelfVersion?;
    get berkshelfVersion(): string;
    set berkshelfVersion(value: string);
    resetBerkshelfVersion(): void;
    get berkshelfVersionInput(): string | undefined;
    private _color?;
    get color(): string;
    set color(value: string);
    resetColor(): void;
    get colorInput(): string | undefined;
    private _configurationManagerName?;
    get configurationManagerName(): string;
    set configurationManagerName(value: string);
    resetConfigurationManagerName(): void;
    get configurationManagerNameInput(): string | undefined;
    private _configurationManagerVersion?;
    get configurationManagerVersion(): string;
    set configurationManagerVersion(value: string);
    resetConfigurationManagerVersion(): void;
    get configurationManagerVersionInput(): string | undefined;
    private _customJson?;
    get customJson(): string;
    set customJson(value: string);
    resetCustomJson(): void;
    get customJsonInput(): string | undefined;
    private _defaultAvailabilityZone?;
    get defaultAvailabilityZone(): string;
    set defaultAvailabilityZone(value: string);
    resetDefaultAvailabilityZone(): void;
    get defaultAvailabilityZoneInput(): string | undefined;
    private _defaultInstanceProfileArn?;
    get defaultInstanceProfileArn(): string;
    set defaultInstanceProfileArn(value: string);
    get defaultInstanceProfileArnInput(): string | undefined;
    private _defaultOs?;
    get defaultOs(): string;
    set defaultOs(value: string);
    resetDefaultOs(): void;
    get defaultOsInput(): string | undefined;
    private _defaultRootDeviceType?;
    get defaultRootDeviceType(): string;
    set defaultRootDeviceType(value: string);
    resetDefaultRootDeviceType(): void;
    get defaultRootDeviceTypeInput(): string | undefined;
    private _defaultSshKeyName?;
    get defaultSshKeyName(): string;
    set defaultSshKeyName(value: string);
    resetDefaultSshKeyName(): void;
    get defaultSshKeyNameInput(): string | undefined;
    private _defaultSubnetId?;
    get defaultSubnetId(): string;
    set defaultSubnetId(value: string);
    resetDefaultSubnetId(): void;
    get defaultSubnetIdInput(): string | undefined;
    private _hostnameTheme?;
    get hostnameTheme(): string;
    set hostnameTheme(value: string);
    resetHostnameTheme(): void;
    get hostnameThemeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _manageBerkshelf?;
    get manageBerkshelf(): boolean | cdktf.IResolvable;
    set manageBerkshelf(value: boolean | cdktf.IResolvable);
    resetManageBerkshelf(): void;
    get manageBerkshelfInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string | undefined;
    private _serviceRoleArn?;
    get serviceRoleArn(): string;
    set serviceRoleArn(value: string);
    get serviceRoleArnInput(): string | undefined;
    get stackEndpoint(): string;
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
    private _useCustomCookbooks?;
    get useCustomCookbooks(): boolean | cdktf.IResolvable;
    set useCustomCookbooks(value: boolean | cdktf.IResolvable);
    resetUseCustomCookbooks(): void;
    get useCustomCookbooksInput(): boolean | cdktf.IResolvable | undefined;
    private _useOpsworksSecurityGroups?;
    get useOpsworksSecurityGroups(): boolean | cdktf.IResolvable;
    set useOpsworksSecurityGroups(value: boolean | cdktf.IResolvable);
    resetUseOpsworksSecurityGroups(): void;
    get useOpsworksSecurityGroupsInput(): boolean | cdktf.IResolvable | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _customCookbooksSource;
    get customCookbooksSource(): OpsworksStackCustomCookbooksSourceOutputReference;
    putCustomCookbooksSource(value: OpsworksStackCustomCookbooksSource): void;
    resetCustomCookbooksSource(): void;
    get customCookbooksSourceInput(): OpsworksStackCustomCookbooksSource | undefined;
    private _timeouts;
    get timeouts(): OpsworksStackTimeoutsOutputReference;
    putTimeouts(value: OpsworksStackTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | OpsworksStackTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
