/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppfabricAppBundleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_bundle#customer_managed_key_arn AppfabricAppBundle#customer_managed_key_arn}
    */
    readonly customerManagedKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_bundle#tags AppfabricAppBundle#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_bundle aws_appfabric_app_bundle}
*/
export declare class AppfabricAppBundle extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appfabric_app_bundle";
    /**
    * Generates CDKTF code for importing a AppfabricAppBundle resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppfabricAppBundle to import
    * @param importFromId The id of the existing AppfabricAppBundle that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_bundle#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppfabricAppBundle to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_bundle aws_appfabric_app_bundle} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppfabricAppBundleConfig = {}
    */
    constructor(scope: Construct, id: string, config?: AppfabricAppBundleConfig);
    get arn(): string;
    private _customerManagedKeyArn?;
    get customerManagedKeyArn(): string;
    set customerManagedKeyArn(value: string);
    resetCustomerManagedKeyArn(): void;
    get customerManagedKeyArnInput(): string | undefined;
    get id(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
