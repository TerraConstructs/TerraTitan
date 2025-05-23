/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#auto_bundle_on_deploy OpsworksApplication#auto_bundle_on_deploy}
    */
    readonly autoBundleOnDeploy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#aws_flow_ruby_settings OpsworksApplication#aws_flow_ruby_settings}
    */
    readonly awsFlowRubySettings?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#data_source_arn OpsworksApplication#data_source_arn}
    */
    readonly dataSourceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#data_source_database_name OpsworksApplication#data_source_database_name}
    */
    readonly dataSourceDatabaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#data_source_type OpsworksApplication#data_source_type}
    */
    readonly dataSourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#description OpsworksApplication#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#document_root OpsworksApplication#document_root}
    */
    readonly documentRoot?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#domains OpsworksApplication#domains}
    */
    readonly domains?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#enable_ssl OpsworksApplication#enable_ssl}
    */
    readonly enableSsl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#id OpsworksApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#name OpsworksApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#rails_env OpsworksApplication#rails_env}
    */
    readonly railsEnv?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#short_name OpsworksApplication#short_name}
    */
    readonly shortName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#stack_id OpsworksApplication#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#type OpsworksApplication#type}
    */
    readonly type: string;
    /**
    * app_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#app_source OpsworksApplication#app_source}
    */
    readonly appSource?: OpsworksApplicationAppSource[] | cdktf.IResolvable;
    /**
    * environment block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#environment OpsworksApplication#environment}
    */
    readonly environment?: OpsworksApplicationEnvironment[] | cdktf.IResolvable;
    /**
    * ssl_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#ssl_configuration OpsworksApplication#ssl_configuration}
    */
    readonly sslConfiguration?: OpsworksApplicationSslConfiguration[] | cdktf.IResolvable;
}
export interface OpsworksApplicationAppSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#password OpsworksApplication#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#revision OpsworksApplication#revision}
    */
    readonly revision?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#ssh_key OpsworksApplication#ssh_key}
    */
    readonly sshKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#type OpsworksApplication#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#url OpsworksApplication#url}
    */
    readonly url?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#username OpsworksApplication#username}
    */
    readonly username?: string;
}
export declare function opsworksApplicationAppSourceToTerraform(struct?: OpsworksApplicationAppSource | cdktf.IResolvable): any;
export declare function opsworksApplicationAppSourceToHclTerraform(struct?: OpsworksApplicationAppSource | cdktf.IResolvable): any;
export declare class OpsworksApplicationAppSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpsworksApplicationAppSource | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksApplicationAppSource | cdktf.IResolvable | undefined);
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
    resetUrl(): void;
    get urlInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
}
export declare class OpsworksApplicationAppSourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpsworksApplicationAppSource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpsworksApplicationAppSourceOutputReference;
}
export interface OpsworksApplicationEnvironment {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#key OpsworksApplication#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#secure OpsworksApplication#secure}
    */
    readonly secure?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#value OpsworksApplication#value}
    */
    readonly value: string;
}
export declare function opsworksApplicationEnvironmentToTerraform(struct?: OpsworksApplicationEnvironment | cdktf.IResolvable): any;
export declare function opsworksApplicationEnvironmentToHclTerraform(struct?: OpsworksApplicationEnvironment | cdktf.IResolvable): any;
export declare class OpsworksApplicationEnvironmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpsworksApplicationEnvironment | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksApplicationEnvironment | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _secure?;
    get secure(): boolean | cdktf.IResolvable;
    set secure(value: boolean | cdktf.IResolvable);
    resetSecure(): void;
    get secureInput(): boolean | cdktf.IResolvable | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class OpsworksApplicationEnvironmentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpsworksApplicationEnvironment[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpsworksApplicationEnvironmentOutputReference;
}
export interface OpsworksApplicationSslConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#certificate OpsworksApplication#certificate}
    */
    readonly certificate: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#chain OpsworksApplication#chain}
    */
    readonly chain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#private_key OpsworksApplication#private_key}
    */
    readonly privateKey: string;
}
export declare function opsworksApplicationSslConfigurationToTerraform(struct?: OpsworksApplicationSslConfiguration | cdktf.IResolvable): any;
export declare function opsworksApplicationSslConfigurationToHclTerraform(struct?: OpsworksApplicationSslConfiguration | cdktf.IResolvable): any;
export declare class OpsworksApplicationSslConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpsworksApplicationSslConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksApplicationSslConfiguration | cdktf.IResolvable | undefined);
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    get certificateInput(): string | undefined;
    private _chain?;
    get chain(): string;
    set chain(value: string);
    resetChain(): void;
    get chainInput(): string | undefined;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    get privateKeyInput(): string | undefined;
}
export declare class OpsworksApplicationSslConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpsworksApplicationSslConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpsworksApplicationSslConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application aws_opsworks_application}
*/
export declare class OpsworksApplication extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opsworks_application";
    /**
    * Generates CDKTF code for importing a OpsworksApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpsworksApplication to import
    * @param importFromId The id of the existing OpsworksApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpsworksApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_application aws_opsworks_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksApplicationConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksApplicationConfig);
    private _autoBundleOnDeploy?;
    get autoBundleOnDeploy(): string;
    set autoBundleOnDeploy(value: string);
    resetAutoBundleOnDeploy(): void;
    get autoBundleOnDeployInput(): string | undefined;
    private _awsFlowRubySettings?;
    get awsFlowRubySettings(): string;
    set awsFlowRubySettings(value: string);
    resetAwsFlowRubySettings(): void;
    get awsFlowRubySettingsInput(): string | undefined;
    private _dataSourceArn?;
    get dataSourceArn(): string;
    set dataSourceArn(value: string);
    resetDataSourceArn(): void;
    get dataSourceArnInput(): string | undefined;
    private _dataSourceDatabaseName?;
    get dataSourceDatabaseName(): string;
    set dataSourceDatabaseName(value: string);
    resetDataSourceDatabaseName(): void;
    get dataSourceDatabaseNameInput(): string | undefined;
    private _dataSourceType?;
    get dataSourceType(): string;
    set dataSourceType(value: string);
    resetDataSourceType(): void;
    get dataSourceTypeInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _documentRoot?;
    get documentRoot(): string;
    set documentRoot(value: string);
    resetDocumentRoot(): void;
    get documentRootInput(): string | undefined;
    private _domains?;
    get domains(): string[];
    set domains(value: string[]);
    resetDomains(): void;
    get domainsInput(): string[] | undefined;
    private _enableSsl?;
    get enableSsl(): boolean | cdktf.IResolvable;
    set enableSsl(value: boolean | cdktf.IResolvable);
    resetEnableSsl(): void;
    get enableSslInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _railsEnv?;
    get railsEnv(): string;
    set railsEnv(value: string);
    resetRailsEnv(): void;
    get railsEnvInput(): string | undefined;
    private _shortName?;
    get shortName(): string;
    set shortName(value: string);
    resetShortName(): void;
    get shortNameInput(): string | undefined;
    private _stackId?;
    get stackId(): string;
    set stackId(value: string);
    get stackIdInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _appSource;
    get appSource(): OpsworksApplicationAppSourceList;
    putAppSource(value: OpsworksApplicationAppSource[] | cdktf.IResolvable): void;
    resetAppSource(): void;
    get appSourceInput(): cdktf.IResolvable | OpsworksApplicationAppSource[] | undefined;
    private _environment;
    get environment(): OpsworksApplicationEnvironmentList;
    putEnvironment(value: OpsworksApplicationEnvironment[] | cdktf.IResolvable): void;
    resetEnvironment(): void;
    get environmentInput(): cdktf.IResolvable | OpsworksApplicationEnvironment[] | undefined;
    private _sslConfiguration;
    get sslConfiguration(): OpsworksApplicationSslConfigurationList;
    putSslConfiguration(value: OpsworksApplicationSslConfiguration[] | cdktf.IResolvable): void;
    resetSslConfiguration(): void;
    get sslConfigurationInput(): cdktf.IResolvable | OpsworksApplicationSslConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
