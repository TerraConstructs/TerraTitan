/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TimestreaminfluxdbDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * The amount of storage to allocate for your DB storage type in GiB (gibibytes).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#allocated_storage TimestreaminfluxdbDbInstance#allocated_storage}
    */
    readonly allocatedStorage: number;
    /**
    * The name of the initial InfluxDB bucket. All InfluxDB data is stored in a bucket.
    * 					A bucket combines the concept of a database and a retention period (the duration of time
    * 					that each data point persists). A bucket belongs to an organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#bucket TimestreaminfluxdbDbInstance#bucket}
    */
    readonly bucket: string;
    /**
    * The Timestream for InfluxDB DB instance type to run InfluxDB on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#db_instance_type TimestreaminfluxdbDbInstance#db_instance_type}
    */
    readonly dbInstanceType: string;
    /**
    * The id of the DB parameter group assigned to your DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#db_parameter_group_identifier TimestreaminfluxdbDbInstance#db_parameter_group_identifier}
    */
    readonly dbParameterGroupIdentifier?: string;
    /**
    * The Timestream for InfluxDB DB storage type to read and write InfluxDB data.
    * 					You can choose between 3 different types of provisioned Influx IOPS included storage according
    * 					to your workloads requirements: Influx IO Included 3000 IOPS, Influx IO Included 12000 IOPS,
    * 					Influx IO Included 16000 IOPS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#db_storage_type TimestreaminfluxdbDbInstance#db_storage_type}
    */
    readonly dbStorageType?: string;
    /**
    * Specifies whether the DB instance will be deployed as a standalone instance or
    * 					with a Multi-AZ standby for high availability.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#deployment_type TimestreaminfluxdbDbInstance#deployment_type}
    */
    readonly deploymentType?: string;
    /**
    * The name that uniquely identifies the DB instance when interacting with the
    * 					Amazon Timestream for InfluxDB API and CLI commands. This name will also be a
    * 					prefix included in the endpoint. DB instance names must be unique per customer
    * 					and per region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#name TimestreaminfluxdbDbInstance#name}
    */
    readonly name: string;
    /**
    * Specifies whether the networkType of the Timestream for InfluxDB instance is
    * 					IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate
    * 					over both IPv4 and IPv6 protocols.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#network_type TimestreaminfluxdbDbInstance#network_type}
    */
    readonly networkType?: string;
    /**
    * The name of the initial organization for the initial admin user in InfluxDB. An
    * 					InfluxDB organization is a workspace for a group of users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#organization TimestreaminfluxdbDbInstance#organization}
    */
    readonly organization: string;
    /**
    * The password of the initial admin user created in InfluxDB. This password will
    * 					allow you to access the InfluxDB UI to perform various administrative tasks and
    * 					also use the InfluxDB CLI to create an operator token. These attributes will be
    * 					stored in a Secret created in AWS SecretManager in your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#password TimestreaminfluxdbDbInstance#password}
    */
    readonly password: string;
    /**
    * The port number on which InfluxDB accepts connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#port TimestreaminfluxdbDbInstance#port}
    */
    readonly port?: number;
    /**
    * Configures the DB instance with a public IP to facilitate access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#publicly_accessible TimestreaminfluxdbDbInstance#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#tags TimestreaminfluxdbDbInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * The username of the initial admin user created in InfluxDB.
    * 					Must start with a letter and can't end with a hyphen or contain two
    * 					consecutive hyphens. For example, my-user1. This username will allow
    * 					you to access the InfluxDB UI to perform various administrative tasks
    * 					and also use the InfluxDB CLI to create an operator token. These
    * 					attributes will be stored in a Secret created in Amazon Secrets
    * 					Manager in your account
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#username TimestreaminfluxdbDbInstance#username}
    */
    readonly username: string;
    /**
    * A list of VPC security group IDs to associate with the DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#vpc_security_group_ids TimestreaminfluxdbDbInstance#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds: string[];
    /**
    * A list of VPC subnet IDs to associate with the DB instance. Provide at least
    * 					two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#vpc_subnet_ids TimestreaminfluxdbDbInstance#vpc_subnet_ids}
    */
    readonly vpcSubnetIds: string[];
    /**
    * log_delivery_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#log_delivery_configuration TimestreaminfluxdbDbInstance#log_delivery_configuration}
    */
    readonly logDeliveryConfiguration?: TimestreaminfluxdbDbInstanceLogDeliveryConfiguration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#timeouts TimestreaminfluxdbDbInstance#timeouts}
    */
    readonly timeouts?: TimestreaminfluxdbDbInstanceTimeouts;
}
export interface TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration {
    /**
    * The name of the S3 bucket to deliver logs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#bucket_name TimestreaminfluxdbDbInstance#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Indicates whether log delivery to the S3 bucket is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#enabled TimestreaminfluxdbDbInstance#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function timestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationToTerraform(struct?: TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration | cdktf.IResolvable): any;
export declare function timestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationToHclTerraform(struct?: TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration | cdktf.IResolvable): any;
export declare class TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration | cdktf.IResolvable | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference;
}
export interface TimestreaminfluxdbDbInstanceLogDeliveryConfiguration {
    /**
    * s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#s3_configuration TimestreaminfluxdbDbInstance#s3_configuration}
    */
    readonly s3Configuration?: TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration[] | cdktf.IResolvable;
}
export declare function timestreaminfluxdbDbInstanceLogDeliveryConfigurationToTerraform(struct?: TimestreaminfluxdbDbInstanceLogDeliveryConfiguration | cdktf.IResolvable): any;
export declare function timestreaminfluxdbDbInstanceLogDeliveryConfigurationToHclTerraform(struct?: TimestreaminfluxdbDbInstanceLogDeliveryConfiguration | cdktf.IResolvable): any;
export declare class TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreaminfluxdbDbInstanceLogDeliveryConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreaminfluxdbDbInstanceLogDeliveryConfiguration | cdktf.IResolvable | undefined);
    private _s3Configuration;
    get s3Configuration(): TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList;
    putS3Configuration(value: TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration[] | cdktf.IResolvable): void;
    resetS3Configuration(): void;
    get s3ConfigurationInput(): cdktf.IResolvable | TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration[] | undefined;
}
export declare class TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreaminfluxdbDbInstanceLogDeliveryConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference;
}
export interface TimestreaminfluxdbDbInstanceTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#create TimestreaminfluxdbDbInstance#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#delete TimestreaminfluxdbDbInstance#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#update TimestreaminfluxdbDbInstance#update}
    */
    readonly update?: string;
}
export declare function timestreaminfluxdbDbInstanceTimeoutsToTerraform(struct?: TimestreaminfluxdbDbInstanceTimeouts | cdktf.IResolvable): any;
export declare function timestreaminfluxdbDbInstanceTimeoutsToHclTerraform(struct?: TimestreaminfluxdbDbInstanceTimeouts | cdktf.IResolvable): any;
export declare class TimestreaminfluxdbDbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TimestreaminfluxdbDbInstanceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreaminfluxdbDbInstanceTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance aws_timestreaminfluxdb_db_instance}
*/
export declare class TimestreaminfluxdbDbInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_timestreaminfluxdb_db_instance";
    /**
    * Generates CDKTF code for importing a TimestreaminfluxdbDbInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TimestreaminfluxdbDbInstance to import
    * @param importFromId The id of the existing TimestreaminfluxdbDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TimestreaminfluxdbDbInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreaminfluxdb_db_instance aws_timestreaminfluxdb_db_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TimestreaminfluxdbDbInstanceConfig
    */
    constructor(scope: Construct, id: string, config: TimestreaminfluxdbDbInstanceConfig);
    private _allocatedStorage?;
    get allocatedStorage(): number;
    set allocatedStorage(value: number);
    get allocatedStorageInput(): number | undefined;
    get arn(): string;
    get availabilityZone(): string;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _dbInstanceType?;
    get dbInstanceType(): string;
    set dbInstanceType(value: string);
    get dbInstanceTypeInput(): string | undefined;
    private _dbParameterGroupIdentifier?;
    get dbParameterGroupIdentifier(): string;
    set dbParameterGroupIdentifier(value: string);
    resetDbParameterGroupIdentifier(): void;
    get dbParameterGroupIdentifierInput(): string | undefined;
    private _dbStorageType?;
    get dbStorageType(): string;
    set dbStorageType(value: string);
    resetDbStorageType(): void;
    get dbStorageTypeInput(): string | undefined;
    private _deploymentType?;
    get deploymentType(): string;
    set deploymentType(value: string);
    resetDeploymentType(): void;
    get deploymentTypeInput(): string | undefined;
    get endpoint(): string;
    get id(): string;
    get influxAuthParametersSecretArn(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _networkType?;
    get networkType(): string;
    set networkType(value: string);
    resetNetworkType(): void;
    get networkTypeInput(): string | undefined;
    private _organization?;
    get organization(): string;
    set organization(value: string);
    get organizationInput(): string | undefined;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean | cdktf.IResolvable;
    set publiclyAccessible(value: boolean | cdktf.IResolvable);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | cdktf.IResolvable | undefined;
    get secondaryAvailabilityZone(): string;
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
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _vpcSubnetIds?;
    get vpcSubnetIds(): string[];
    set vpcSubnetIds(value: string[]);
    get vpcSubnetIdsInput(): string[] | undefined;
    private _logDeliveryConfiguration;
    get logDeliveryConfiguration(): TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList;
    putLogDeliveryConfiguration(value: TimestreaminfluxdbDbInstanceLogDeliveryConfiguration[] | cdktf.IResolvable): void;
    resetLogDeliveryConfiguration(): void;
    get logDeliveryConfigurationInput(): cdktf.IResolvable | TimestreaminfluxdbDbInstanceLogDeliveryConfiguration[] | undefined;
    private _timeouts;
    get timeouts(): TimestreaminfluxdbDbInstanceTimeoutsOutputReference;
    putTimeouts(value: TimestreaminfluxdbDbInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | TimestreaminfluxdbDbInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
