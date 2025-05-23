/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MqBrokerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#apply_immediately MqBroker#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#authentication_strategy MqBroker#authentication_strategy}
    */
    readonly authenticationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#broker_name MqBroker#broker_name}
    */
    readonly brokerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#data_replication_mode MqBroker#data_replication_mode}
    */
    readonly dataReplicationMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#data_replication_primary_broker_arn MqBroker#data_replication_primary_broker_arn}
    */
    readonly dataReplicationPrimaryBrokerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#deployment_mode MqBroker#deployment_mode}
    */
    readonly deploymentMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#engine_type MqBroker#engine_type}
    */
    readonly engineType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#engine_version MqBroker#engine_version}
    */
    readonly engineVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#host_instance_type MqBroker#host_instance_type}
    */
    readonly hostInstanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#id MqBroker#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#publicly_accessible MqBroker#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#security_groups MqBroker#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#storage_type MqBroker#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#subnet_ids MqBroker#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#tags MqBroker#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#tags_all MqBroker#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#configuration MqBroker#configuration}
    */
    readonly configuration?: MqBrokerConfiguration;
    /**
    * encryption_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#encryption_options MqBroker#encryption_options}
    */
    readonly encryptionOptions?: MqBrokerEncryptionOptions;
    /**
    * ldap_server_metadata block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#ldap_server_metadata MqBroker#ldap_server_metadata}
    */
    readonly ldapServerMetadata?: MqBrokerLdapServerMetadata;
    /**
    * logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#logs MqBroker#logs}
    */
    readonly logs?: MqBrokerLogs;
    /**
    * maintenance_window_start_time block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#maintenance_window_start_time MqBroker#maintenance_window_start_time}
    */
    readonly maintenanceWindowStartTime?: MqBrokerMaintenanceWindowStartTime;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#timeouts MqBroker#timeouts}
    */
    readonly timeouts?: MqBrokerTimeouts;
    /**
    * user block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#user MqBroker#user}
    */
    readonly user: MqBrokerUser[] | cdktf.IResolvable;
}
export interface MqBrokerInstances {
}
export declare function mqBrokerInstancesToTerraform(struct?: MqBrokerInstances): any;
export declare function mqBrokerInstancesToHclTerraform(struct?: MqBrokerInstances): any;
export declare class MqBrokerInstancesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MqBrokerInstances | undefined;
    set internalValue(value: MqBrokerInstances | undefined);
    get consoleUrl(): string;
    get endpoints(): string[];
    get ipAddress(): string;
}
export declare class MqBrokerInstancesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MqBrokerInstancesOutputReference;
}
export interface MqBrokerConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#id MqBroker#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#revision MqBroker#revision}
    */
    readonly revision?: number;
}
export declare function mqBrokerConfigurationToTerraform(struct?: MqBrokerConfigurationOutputReference | MqBrokerConfiguration): any;
export declare function mqBrokerConfigurationToHclTerraform(struct?: MqBrokerConfigurationOutputReference | MqBrokerConfiguration): any;
export declare class MqBrokerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MqBrokerConfiguration | undefined;
    set internalValue(value: MqBrokerConfiguration | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _revision?;
    get revision(): number;
    set revision(value: number);
    resetRevision(): void;
    get revisionInput(): number | undefined;
}
export interface MqBrokerEncryptionOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#kms_key_id MqBroker#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#use_aws_owned_key MqBroker#use_aws_owned_key}
    */
    readonly useAwsOwnedKey?: boolean | cdktf.IResolvable;
}
export declare function mqBrokerEncryptionOptionsToTerraform(struct?: MqBrokerEncryptionOptionsOutputReference | MqBrokerEncryptionOptions): any;
export declare function mqBrokerEncryptionOptionsToHclTerraform(struct?: MqBrokerEncryptionOptionsOutputReference | MqBrokerEncryptionOptions): any;
export declare class MqBrokerEncryptionOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MqBrokerEncryptionOptions | undefined;
    set internalValue(value: MqBrokerEncryptionOptions | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _useAwsOwnedKey?;
    get useAwsOwnedKey(): boolean | cdktf.IResolvable;
    set useAwsOwnedKey(value: boolean | cdktf.IResolvable);
    resetUseAwsOwnedKey(): void;
    get useAwsOwnedKeyInput(): boolean | cdktf.IResolvable | undefined;
}
export interface MqBrokerLdapServerMetadata {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#hosts MqBroker#hosts}
    */
    readonly hosts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#role_base MqBroker#role_base}
    */
    readonly roleBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#role_name MqBroker#role_name}
    */
    readonly roleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#role_search_matching MqBroker#role_search_matching}
    */
    readonly roleSearchMatching?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#role_search_subtree MqBroker#role_search_subtree}
    */
    readonly roleSearchSubtree?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#service_account_password MqBroker#service_account_password}
    */
    readonly serviceAccountPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#service_account_username MqBroker#service_account_username}
    */
    readonly serviceAccountUsername?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#user_base MqBroker#user_base}
    */
    readonly userBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#user_role_name MqBroker#user_role_name}
    */
    readonly userRoleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#user_search_matching MqBroker#user_search_matching}
    */
    readonly userSearchMatching?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#user_search_subtree MqBroker#user_search_subtree}
    */
    readonly userSearchSubtree?: boolean | cdktf.IResolvable;
}
export declare function mqBrokerLdapServerMetadataToTerraform(struct?: MqBrokerLdapServerMetadataOutputReference | MqBrokerLdapServerMetadata): any;
export declare function mqBrokerLdapServerMetadataToHclTerraform(struct?: MqBrokerLdapServerMetadataOutputReference | MqBrokerLdapServerMetadata): any;
export declare class MqBrokerLdapServerMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MqBrokerLdapServerMetadata | undefined;
    set internalValue(value: MqBrokerLdapServerMetadata | undefined);
    private _hosts?;
    get hosts(): string[];
    set hosts(value: string[]);
    resetHosts(): void;
    get hostsInput(): string[] | undefined;
    private _roleBase?;
    get roleBase(): string;
    set roleBase(value: string);
    resetRoleBase(): void;
    get roleBaseInput(): string | undefined;
    private _roleName?;
    get roleName(): string;
    set roleName(value: string);
    resetRoleName(): void;
    get roleNameInput(): string | undefined;
    private _roleSearchMatching?;
    get roleSearchMatching(): string;
    set roleSearchMatching(value: string);
    resetRoleSearchMatching(): void;
    get roleSearchMatchingInput(): string | undefined;
    private _roleSearchSubtree?;
    get roleSearchSubtree(): boolean | cdktf.IResolvable;
    set roleSearchSubtree(value: boolean | cdktf.IResolvable);
    resetRoleSearchSubtree(): void;
    get roleSearchSubtreeInput(): boolean | cdktf.IResolvable | undefined;
    private _serviceAccountPassword?;
    get serviceAccountPassword(): string;
    set serviceAccountPassword(value: string);
    resetServiceAccountPassword(): void;
    get serviceAccountPasswordInput(): string | undefined;
    private _serviceAccountUsername?;
    get serviceAccountUsername(): string;
    set serviceAccountUsername(value: string);
    resetServiceAccountUsername(): void;
    get serviceAccountUsernameInput(): string | undefined;
    private _userBase?;
    get userBase(): string;
    set userBase(value: string);
    resetUserBase(): void;
    get userBaseInput(): string | undefined;
    private _userRoleName?;
    get userRoleName(): string;
    set userRoleName(value: string);
    resetUserRoleName(): void;
    get userRoleNameInput(): string | undefined;
    private _userSearchMatching?;
    get userSearchMatching(): string;
    set userSearchMatching(value: string);
    resetUserSearchMatching(): void;
    get userSearchMatchingInput(): string | undefined;
    private _userSearchSubtree?;
    get userSearchSubtree(): boolean | cdktf.IResolvable;
    set userSearchSubtree(value: boolean | cdktf.IResolvable);
    resetUserSearchSubtree(): void;
    get userSearchSubtreeInput(): boolean | cdktf.IResolvable | undefined;
}
export interface MqBrokerLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#audit MqBroker#audit}
    */
    readonly audit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#general MqBroker#general}
    */
    readonly general?: boolean | cdktf.IResolvable;
}
export declare function mqBrokerLogsToTerraform(struct?: MqBrokerLogsOutputReference | MqBrokerLogs): any;
export declare function mqBrokerLogsToHclTerraform(struct?: MqBrokerLogsOutputReference | MqBrokerLogs): any;
export declare class MqBrokerLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MqBrokerLogs | undefined;
    set internalValue(value: MqBrokerLogs | undefined);
    private _audit?;
    get audit(): string;
    set audit(value: string);
    resetAudit(): void;
    get auditInput(): string | undefined;
    private _general?;
    get general(): boolean | cdktf.IResolvable;
    set general(value: boolean | cdktf.IResolvable);
    resetGeneral(): void;
    get generalInput(): boolean | cdktf.IResolvable | undefined;
}
export interface MqBrokerMaintenanceWindowStartTime {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#day_of_week MqBroker#day_of_week}
    */
    readonly dayOfWeek: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#time_of_day MqBroker#time_of_day}
    */
    readonly timeOfDay: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#time_zone MqBroker#time_zone}
    */
    readonly timeZone: string;
}
export declare function mqBrokerMaintenanceWindowStartTimeToTerraform(struct?: MqBrokerMaintenanceWindowStartTimeOutputReference | MqBrokerMaintenanceWindowStartTime): any;
export declare function mqBrokerMaintenanceWindowStartTimeToHclTerraform(struct?: MqBrokerMaintenanceWindowStartTimeOutputReference | MqBrokerMaintenanceWindowStartTime): any;
export declare class MqBrokerMaintenanceWindowStartTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MqBrokerMaintenanceWindowStartTime | undefined;
    set internalValue(value: MqBrokerMaintenanceWindowStartTime | undefined);
    private _dayOfWeek?;
    get dayOfWeek(): string;
    set dayOfWeek(value: string);
    get dayOfWeekInput(): string | undefined;
    private _timeOfDay?;
    get timeOfDay(): string;
    set timeOfDay(value: string);
    get timeOfDayInput(): string | undefined;
    private _timeZone?;
    get timeZone(): string;
    set timeZone(value: string);
    get timeZoneInput(): string | undefined;
}
export interface MqBrokerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#create MqBroker#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#delete MqBroker#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#update MqBroker#update}
    */
    readonly update?: string;
}
export declare function mqBrokerTimeoutsToTerraform(struct?: MqBrokerTimeouts | cdktf.IResolvable): any;
export declare function mqBrokerTimeoutsToHclTerraform(struct?: MqBrokerTimeouts | cdktf.IResolvable): any;
export declare class MqBrokerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MqBrokerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MqBrokerTimeouts | cdktf.IResolvable | undefined);
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
export interface MqBrokerUser {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#console_access MqBroker#console_access}
    */
    readonly consoleAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#groups MqBroker#groups}
    */
    readonly groups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#password MqBroker#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#replication_user MqBroker#replication_user}
    */
    readonly replicationUser?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#username MqBroker#username}
    */
    readonly username: string;
}
export declare function mqBrokerUserToTerraform(struct?: MqBrokerUser | cdktf.IResolvable): any;
export declare function mqBrokerUserToHclTerraform(struct?: MqBrokerUser | cdktf.IResolvable): any;
export declare class MqBrokerUserOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MqBrokerUser | cdktf.IResolvable | undefined;
    set internalValue(value: MqBrokerUser | cdktf.IResolvable | undefined);
    private _consoleAccess?;
    get consoleAccess(): boolean | cdktf.IResolvable;
    set consoleAccess(value: boolean | cdktf.IResolvable);
    resetConsoleAccess(): void;
    get consoleAccessInput(): boolean | cdktf.IResolvable | undefined;
    private _groups?;
    get groups(): string[];
    set groups(value: string[]);
    resetGroups(): void;
    get groupsInput(): string[] | undefined;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _replicationUser?;
    get replicationUser(): boolean | cdktf.IResolvable;
    set replicationUser(value: boolean | cdktf.IResolvable);
    resetReplicationUser(): void;
    get replicationUserInput(): boolean | cdktf.IResolvable | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
}
export declare class MqBrokerUserList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MqBrokerUser[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MqBrokerUserOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker aws_mq_broker}
*/
export declare class MqBroker extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_mq_broker";
    /**
    * Generates CDKTF code for importing a MqBroker resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MqBroker to import
    * @param importFromId The id of the existing MqBroker that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MqBroker to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mq_broker aws_mq_broker} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MqBrokerConfig
    */
    constructor(scope: Construct, id: string, config: MqBrokerConfig);
    private _applyImmediately?;
    get applyImmediately(): boolean | cdktf.IResolvable;
    set applyImmediately(value: boolean | cdktf.IResolvable);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | cdktf.IResolvable | undefined;
    get arn(): string;
    private _authenticationStrategy?;
    get authenticationStrategy(): string;
    set authenticationStrategy(value: string);
    resetAuthenticationStrategy(): void;
    get authenticationStrategyInput(): string | undefined;
    private _autoMinorVersionUpgrade?;
    get autoMinorVersionUpgrade(): boolean | cdktf.IResolvable;
    set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable);
    resetAutoMinorVersionUpgrade(): void;
    get autoMinorVersionUpgradeInput(): boolean | cdktf.IResolvable | undefined;
    private _brokerName?;
    get brokerName(): string;
    set brokerName(value: string);
    get brokerNameInput(): string | undefined;
    private _dataReplicationMode?;
    get dataReplicationMode(): string;
    set dataReplicationMode(value: string);
    resetDataReplicationMode(): void;
    get dataReplicationModeInput(): string | undefined;
    private _dataReplicationPrimaryBrokerArn?;
    get dataReplicationPrimaryBrokerArn(): string;
    set dataReplicationPrimaryBrokerArn(value: string);
    resetDataReplicationPrimaryBrokerArn(): void;
    get dataReplicationPrimaryBrokerArnInput(): string | undefined;
    private _deploymentMode?;
    get deploymentMode(): string;
    set deploymentMode(value: string);
    resetDeploymentMode(): void;
    get deploymentModeInput(): string | undefined;
    private _engineType?;
    get engineType(): string;
    set engineType(value: string);
    get engineTypeInput(): string | undefined;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    get engineVersionInput(): string | undefined;
    private _hostInstanceType?;
    get hostInstanceType(): string;
    set hostInstanceType(value: string);
    get hostInstanceTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instances;
    get instances(): MqBrokerInstancesList;
    get pendingDataReplicationMode(): string;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean | cdktf.IResolvable;
    set publiclyAccessible(value: boolean | cdktf.IResolvable);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | cdktf.IResolvable | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
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
    private _configuration;
    get configuration(): MqBrokerConfigurationOutputReference;
    putConfiguration(value: MqBrokerConfiguration): void;
    resetConfiguration(): void;
    get configurationInput(): MqBrokerConfiguration | undefined;
    private _encryptionOptions;
    get encryptionOptions(): MqBrokerEncryptionOptionsOutputReference;
    putEncryptionOptions(value: MqBrokerEncryptionOptions): void;
    resetEncryptionOptions(): void;
    get encryptionOptionsInput(): MqBrokerEncryptionOptions | undefined;
    private _ldapServerMetadata;
    get ldapServerMetadata(): MqBrokerLdapServerMetadataOutputReference;
    putLdapServerMetadata(value: MqBrokerLdapServerMetadata): void;
    resetLdapServerMetadata(): void;
    get ldapServerMetadataInput(): MqBrokerLdapServerMetadata | undefined;
    private _logs;
    get logs(): MqBrokerLogsOutputReference;
    putLogs(value: MqBrokerLogs): void;
    resetLogs(): void;
    get logsInput(): MqBrokerLogs | undefined;
    private _maintenanceWindowStartTime;
    get maintenanceWindowStartTime(): MqBrokerMaintenanceWindowStartTimeOutputReference;
    putMaintenanceWindowStartTime(value: MqBrokerMaintenanceWindowStartTime): void;
    resetMaintenanceWindowStartTime(): void;
    get maintenanceWindowStartTimeInput(): MqBrokerMaintenanceWindowStartTime | undefined;
    private _timeouts;
    get timeouts(): MqBrokerTimeoutsOutputReference;
    putTimeouts(value: MqBrokerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MqBrokerTimeouts | undefined;
    private _user;
    get user(): MqBrokerUserList;
    putUser(value: MqBrokerUser[] | cdktf.IResolvable): void;
    get userInput(): cdktf.IResolvable | MqBrokerUser[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
