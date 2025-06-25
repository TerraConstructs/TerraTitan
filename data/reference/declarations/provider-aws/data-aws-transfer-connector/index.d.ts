/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsTransferConnectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/transfer_connector#id DataAwsTransferConnector#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export interface DataAwsTransferConnectorAs2Config {
}
export declare function dataAwsTransferConnectorAs2ConfigToTerraform(struct?: DataAwsTransferConnectorAs2Config): any;
export declare function dataAwsTransferConnectorAs2ConfigToHclTerraform(struct?: DataAwsTransferConnectorAs2Config): any;
export declare class DataAwsTransferConnectorAs2ConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsTransferConnectorAs2Config | undefined;
    set internalValue(value: DataAwsTransferConnectorAs2Config | undefined);
    get basicAuthSecretId(): string;
    get compression(): string;
    get encryptionAlgorithm(): string;
    get localProfileId(): string;
    get mdnResponse(): string;
    get mdnSigningAlgorithm(): string;
    get messageSubject(): string;
    get partnerProfileId(): string;
    get singingAlgorithm(): string;
}
export declare class DataAwsTransferConnectorAs2ConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsTransferConnectorAs2ConfigOutputReference;
}
export interface DataAwsTransferConnectorSftpConfig {
}
export declare function dataAwsTransferConnectorSftpConfigToTerraform(struct?: DataAwsTransferConnectorSftpConfig): any;
export declare function dataAwsTransferConnectorSftpConfigToHclTerraform(struct?: DataAwsTransferConnectorSftpConfig): any;
export declare class DataAwsTransferConnectorSftpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsTransferConnectorSftpConfig | undefined;
    set internalValue(value: DataAwsTransferConnectorSftpConfig | undefined);
    get trustedHostKeys(): string[];
    get userSecretId(): string;
}
export declare class DataAwsTransferConnectorSftpConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsTransferConnectorSftpConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/transfer_connector aws_transfer_connector}
*/
export declare class DataAwsTransferConnector extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_transfer_connector";
    /**
    * Generates CDKTF code for importing a DataAwsTransferConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsTransferConnector to import
    * @param importFromId The id of the existing DataAwsTransferConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/transfer_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsTransferConnector to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/transfer_connector aws_transfer_connector} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsTransferConnectorConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsTransferConnectorConfig);
    get accessRole(): string;
    get arn(): string;
    private _as2Config;
    get as2Config(): DataAwsTransferConnectorAs2ConfigList;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    get loggingRole(): string;
    get securityPolicyName(): string;
    get serviceManagedEgressIpAddresses(): string[];
    private _sftpConfig;
    get sftpConfig(): DataAwsTransferConnectorSftpConfigList;
    private _tags;
    get tags(): cdktf.StringMap;
    get url(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
