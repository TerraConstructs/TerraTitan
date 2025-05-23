/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsMqBrokerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/mq_broker#broker_id DataAwsMqBroker#broker_id}
    */
    readonly brokerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/mq_broker#broker_name DataAwsMqBroker#broker_name}
    */
    readonly brokerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/mq_broker#id DataAwsMqBroker#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/mq_broker#tags DataAwsMqBroker#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsMqBrokerConfiguration {
}
export declare function dataAwsMqBrokerConfigurationToTerraform(struct?: DataAwsMqBrokerConfiguration): any;
export declare function dataAwsMqBrokerConfigurationToHclTerraform(struct?: DataAwsMqBrokerConfiguration): any;
export declare class DataAwsMqBrokerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMqBrokerConfiguration | undefined;
    set internalValue(value: DataAwsMqBrokerConfiguration | undefined);
    get id(): string;
    get revision(): number;
}
export declare class DataAwsMqBrokerConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMqBrokerConfigurationOutputReference;
}
export interface DataAwsMqBrokerEncryptionOptions {
}
export declare function dataAwsMqBrokerEncryptionOptionsToTerraform(struct?: DataAwsMqBrokerEncryptionOptions): any;
export declare function dataAwsMqBrokerEncryptionOptionsToHclTerraform(struct?: DataAwsMqBrokerEncryptionOptions): any;
export declare class DataAwsMqBrokerEncryptionOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMqBrokerEncryptionOptions | undefined;
    set internalValue(value: DataAwsMqBrokerEncryptionOptions | undefined);
    get kmsKeyId(): string;
    get useAwsOwnedKey(): cdktf.IResolvable;
}
export declare class DataAwsMqBrokerEncryptionOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMqBrokerEncryptionOptionsOutputReference;
}
export interface DataAwsMqBrokerInstances {
}
export declare function dataAwsMqBrokerInstancesToTerraform(struct?: DataAwsMqBrokerInstances): any;
export declare function dataAwsMqBrokerInstancesToHclTerraform(struct?: DataAwsMqBrokerInstances): any;
export declare class DataAwsMqBrokerInstancesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMqBrokerInstances | undefined;
    set internalValue(value: DataAwsMqBrokerInstances | undefined);
    get consoleUrl(): string;
    get endpoints(): string[];
    get ipAddress(): string;
}
export declare class DataAwsMqBrokerInstancesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMqBrokerInstancesOutputReference;
}
export interface DataAwsMqBrokerLdapServerMetadata {
}
export declare function dataAwsMqBrokerLdapServerMetadataToTerraform(struct?: DataAwsMqBrokerLdapServerMetadata): any;
export declare function dataAwsMqBrokerLdapServerMetadataToHclTerraform(struct?: DataAwsMqBrokerLdapServerMetadata): any;
export declare class DataAwsMqBrokerLdapServerMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMqBrokerLdapServerMetadata | undefined;
    set internalValue(value: DataAwsMqBrokerLdapServerMetadata | undefined);
    get hosts(): string[];
    get roleBase(): string;
    get roleName(): string;
    get roleSearchMatching(): string;
    get roleSearchSubtree(): cdktf.IResolvable;
    get serviceAccountPassword(): string;
    get serviceAccountUsername(): string;
    get userBase(): string;
    get userRoleName(): string;
    get userSearchMatching(): string;
    get userSearchSubtree(): cdktf.IResolvable;
}
export declare class DataAwsMqBrokerLdapServerMetadataList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMqBrokerLdapServerMetadataOutputReference;
}
export interface DataAwsMqBrokerLogs {
}
export declare function dataAwsMqBrokerLogsToTerraform(struct?: DataAwsMqBrokerLogs): any;
export declare function dataAwsMqBrokerLogsToHclTerraform(struct?: DataAwsMqBrokerLogs): any;
export declare class DataAwsMqBrokerLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMqBrokerLogs | undefined;
    set internalValue(value: DataAwsMqBrokerLogs | undefined);
    get audit(): string;
    get general(): cdktf.IResolvable;
}
export declare class DataAwsMqBrokerLogsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMqBrokerLogsOutputReference;
}
export interface DataAwsMqBrokerMaintenanceWindowStartTime {
}
export declare function dataAwsMqBrokerMaintenanceWindowStartTimeToTerraform(struct?: DataAwsMqBrokerMaintenanceWindowStartTime): any;
export declare function dataAwsMqBrokerMaintenanceWindowStartTimeToHclTerraform(struct?: DataAwsMqBrokerMaintenanceWindowStartTime): any;
export declare class DataAwsMqBrokerMaintenanceWindowStartTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMqBrokerMaintenanceWindowStartTime | undefined;
    set internalValue(value: DataAwsMqBrokerMaintenanceWindowStartTime | undefined);
    get dayOfWeek(): string;
    get timeOfDay(): string;
    get timeZone(): string;
}
export declare class DataAwsMqBrokerMaintenanceWindowStartTimeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMqBrokerMaintenanceWindowStartTimeOutputReference;
}
export interface DataAwsMqBrokerUser {
}
export declare function dataAwsMqBrokerUserToTerraform(struct?: DataAwsMqBrokerUser): any;
export declare function dataAwsMqBrokerUserToHclTerraform(struct?: DataAwsMqBrokerUser): any;
export declare class DataAwsMqBrokerUserOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMqBrokerUser | undefined;
    set internalValue(value: DataAwsMqBrokerUser | undefined);
    get consoleAccess(): cdktf.IResolvable;
    get groups(): string[];
    get replicationUser(): cdktf.IResolvable;
    get username(): string;
}
export declare class DataAwsMqBrokerUserList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMqBrokerUserOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/mq_broker aws_mq_broker}
*/
export declare class DataAwsMqBroker extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_mq_broker";
    /**
    * Generates CDKTF code for importing a DataAwsMqBroker resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsMqBroker to import
    * @param importFromId The id of the existing DataAwsMqBroker that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/mq_broker#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsMqBroker to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/mq_broker aws_mq_broker} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMqBrokerConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsMqBrokerConfig);
    get arn(): string;
    get authenticationStrategy(): string;
    get autoMinorVersionUpgrade(): cdktf.IResolvable;
    private _brokerId?;
    get brokerId(): string;
    set brokerId(value: string);
    resetBrokerId(): void;
    get brokerIdInput(): string | undefined;
    private _brokerName?;
    get brokerName(): string;
    set brokerName(value: string);
    resetBrokerName(): void;
    get brokerNameInput(): string | undefined;
    private _configuration;
    get configuration(): DataAwsMqBrokerConfigurationList;
    get deploymentMode(): string;
    private _encryptionOptions;
    get encryptionOptions(): DataAwsMqBrokerEncryptionOptionsList;
    get engineType(): string;
    get engineVersion(): string;
    get hostInstanceType(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instances;
    get instances(): DataAwsMqBrokerInstancesList;
    private _ldapServerMetadata;
    get ldapServerMetadata(): DataAwsMqBrokerLdapServerMetadataList;
    private _logs;
    get logs(): DataAwsMqBrokerLogsList;
    private _maintenanceWindowStartTime;
    get maintenanceWindowStartTime(): DataAwsMqBrokerMaintenanceWindowStartTimeList;
    get publiclyAccessible(): cdktf.IResolvable;
    get securityGroups(): string[];
    get storageType(): string;
    get subnetIds(): string[];
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
    private _user;
    get user(): DataAwsMqBrokerUserList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
