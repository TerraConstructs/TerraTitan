/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationHdfsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#agent_arns DatasyncLocationHdfs#agent_arns}
    */
    readonly agentArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#authentication_type DatasyncLocationHdfs#authentication_type}
    */
    readonly authenticationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#block_size DatasyncLocationHdfs#block_size}
    */
    readonly blockSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#id DatasyncLocationHdfs#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#kerberos_keytab DatasyncLocationHdfs#kerberos_keytab}
    */
    readonly kerberosKeytab?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#kerberos_keytab_base64 DatasyncLocationHdfs#kerberos_keytab_base64}
    */
    readonly kerberosKeytabBase64?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#kerberos_krb5_conf DatasyncLocationHdfs#kerberos_krb5_conf}
    */
    readonly kerberosKrb5Conf?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#kerberos_krb5_conf_base64 DatasyncLocationHdfs#kerberos_krb5_conf_base64}
    */
    readonly kerberosKrb5ConfBase64?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#kerberos_principal DatasyncLocationHdfs#kerberos_principal}
    */
    readonly kerberosPrincipal?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#kms_key_provider_uri DatasyncLocationHdfs#kms_key_provider_uri}
    */
    readonly kmsKeyProviderUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#replication_factor DatasyncLocationHdfs#replication_factor}
    */
    readonly replicationFactor?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#simple_user DatasyncLocationHdfs#simple_user}
    */
    readonly simpleUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#subdirectory DatasyncLocationHdfs#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#tags DatasyncLocationHdfs#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#tags_all DatasyncLocationHdfs#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * name_node block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#name_node DatasyncLocationHdfs#name_node}
    */
    readonly nameNode: DatasyncLocationHdfsNameNode[] | cdktf.IResolvable;
    /**
    * qop_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#qop_configuration DatasyncLocationHdfs#qop_configuration}
    */
    readonly qopConfiguration?: DatasyncLocationHdfsQopConfiguration;
}
export interface DatasyncLocationHdfsNameNode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#hostname DatasyncLocationHdfs#hostname}
    */
    readonly hostname: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#port DatasyncLocationHdfs#port}
    */
    readonly port: number;
}
export declare function datasyncLocationHdfsNameNodeToTerraform(struct?: DatasyncLocationHdfsNameNode | cdktf.IResolvable): any;
export declare function datasyncLocationHdfsNameNodeToHclTerraform(struct?: DatasyncLocationHdfsNameNode | cdktf.IResolvable): any;
export declare class DatasyncLocationHdfsNameNodeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatasyncLocationHdfsNameNode | cdktf.IResolvable | undefined;
    set internalValue(value: DatasyncLocationHdfsNameNode | cdktf.IResolvable | undefined);
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    get hostnameInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
}
export declare class DatasyncLocationHdfsNameNodeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DatasyncLocationHdfsNameNode[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatasyncLocationHdfsNameNodeOutputReference;
}
export interface DatasyncLocationHdfsQopConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#data_transfer_protection DatasyncLocationHdfs#data_transfer_protection}
    */
    readonly dataTransferProtection?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#rpc_protection DatasyncLocationHdfs#rpc_protection}
    */
    readonly rpcProtection?: string;
}
export declare function datasyncLocationHdfsQopConfigurationToTerraform(struct?: DatasyncLocationHdfsQopConfigurationOutputReference | DatasyncLocationHdfsQopConfiguration): any;
export declare function datasyncLocationHdfsQopConfigurationToHclTerraform(struct?: DatasyncLocationHdfsQopConfigurationOutputReference | DatasyncLocationHdfsQopConfiguration): any;
export declare class DatasyncLocationHdfsQopConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncLocationHdfsQopConfiguration | undefined;
    set internalValue(value: DatasyncLocationHdfsQopConfiguration | undefined);
    private _dataTransferProtection?;
    get dataTransferProtection(): string;
    set dataTransferProtection(value: string);
    resetDataTransferProtection(): void;
    get dataTransferProtectionInput(): string | undefined;
    private _rpcProtection?;
    get rpcProtection(): string;
    set rpcProtection(value: string);
    resetRpcProtection(): void;
    get rpcProtectionInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs aws_datasync_location_hdfs}
*/
export declare class DatasyncLocationHdfs extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datasync_location_hdfs";
    /**
    * Generates CDKTF code for importing a DatasyncLocationHdfs resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatasyncLocationHdfs to import
    * @param importFromId The id of the existing DatasyncLocationHdfs that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatasyncLocationHdfs to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_hdfs aws_datasync_location_hdfs} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationHdfsConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationHdfsConfig);
    private _agentArns?;
    get agentArns(): string[];
    set agentArns(value: string[]);
    get agentArnsInput(): string[] | undefined;
    get arn(): string;
    private _authenticationType?;
    get authenticationType(): string;
    set authenticationType(value: string);
    resetAuthenticationType(): void;
    get authenticationTypeInput(): string | undefined;
    private _blockSize?;
    get blockSize(): number;
    set blockSize(value: number);
    resetBlockSize(): void;
    get blockSizeInput(): number | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kerberosKeytab?;
    get kerberosKeytab(): string;
    set kerberosKeytab(value: string);
    resetKerberosKeytab(): void;
    get kerberosKeytabInput(): string | undefined;
    private _kerberosKeytabBase64?;
    get kerberosKeytabBase64(): string;
    set kerberosKeytabBase64(value: string);
    resetKerberosKeytabBase64(): void;
    get kerberosKeytabBase64Input(): string | undefined;
    private _kerberosKrb5Conf?;
    get kerberosKrb5Conf(): string;
    set kerberosKrb5Conf(value: string);
    resetKerberosKrb5Conf(): void;
    get kerberosKrb5ConfInput(): string | undefined;
    private _kerberosKrb5ConfBase64?;
    get kerberosKrb5ConfBase64(): string;
    set kerberosKrb5ConfBase64(value: string);
    resetKerberosKrb5ConfBase64(): void;
    get kerberosKrb5ConfBase64Input(): string | undefined;
    private _kerberosPrincipal?;
    get kerberosPrincipal(): string;
    set kerberosPrincipal(value: string);
    resetKerberosPrincipal(): void;
    get kerberosPrincipalInput(): string | undefined;
    private _kmsKeyProviderUri?;
    get kmsKeyProviderUri(): string;
    set kmsKeyProviderUri(value: string);
    resetKmsKeyProviderUri(): void;
    get kmsKeyProviderUriInput(): string | undefined;
    private _replicationFactor?;
    get replicationFactor(): number;
    set replicationFactor(value: number);
    resetReplicationFactor(): void;
    get replicationFactorInput(): number | undefined;
    private _simpleUser?;
    get simpleUser(): string;
    set simpleUser(value: string);
    resetSimpleUser(): void;
    get simpleUserInput(): string | undefined;
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
    resetSubdirectory(): void;
    get subdirectoryInput(): string | undefined;
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
    get uri(): string;
    private _nameNode;
    get nameNode(): DatasyncLocationHdfsNameNodeList;
    putNameNode(value: DatasyncLocationHdfsNameNode[] | cdktf.IResolvable): void;
    get nameNodeInput(): cdktf.IResolvable | DatasyncLocationHdfsNameNode[] | undefined;
    private _qopConfiguration;
    get qopConfiguration(): DatasyncLocationHdfsQopConfigurationOutputReference;
    putQopConfiguration(value: DatasyncLocationHdfsQopConfiguration): void;
    resetQopConfiguration(): void;
    get qopConfigurationInput(): DatasyncLocationHdfsQopConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
