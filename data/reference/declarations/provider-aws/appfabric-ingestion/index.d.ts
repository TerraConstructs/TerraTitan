/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppfabricIngestionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion#app AppfabricIngestion#app}
    */
    readonly app: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion#app_bundle_arn AppfabricIngestion#app_bundle_arn}
    */
    readonly appBundleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion#ingestion_type AppfabricIngestion#ingestion_type}
    */
    readonly ingestionType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion#tags AppfabricIngestion#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion#tenant_id AppfabricIngestion#tenant_id}
    */
    readonly tenantId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion aws_appfabric_ingestion}
*/
export declare class AppfabricIngestion extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appfabric_ingestion";
    /**
    * Generates CDKTF code for importing a AppfabricIngestion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppfabricIngestion to import
    * @param importFromId The id of the existing AppfabricIngestion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppfabricIngestion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion aws_appfabric_ingestion} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppfabricIngestionConfig
    */
    constructor(scope: Construct, id: string, config: AppfabricIngestionConfig);
    private _app?;
    get app(): string;
    set app(value: string);
    get appInput(): string | undefined;
    private _appBundleArn?;
    get appBundleArn(): string;
    set appBundleArn(value: string);
    get appBundleArnInput(): string | undefined;
    get arn(): string;
    get id(): string;
    private _ingestionType?;
    get ingestionType(): string;
    set ingestionType(value: string);
    get ingestionTypeInput(): string | undefined;
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
    private _tenantId?;
    get tenantId(): string;
    set tenantId(value: string);
    get tenantIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
