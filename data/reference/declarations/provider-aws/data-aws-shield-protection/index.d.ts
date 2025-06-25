/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsShieldProtectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/shield_protection#protection_id DataAwsShieldProtection#protection_id}
    */
    readonly protectionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/shield_protection#resource_arn DataAwsShieldProtection#resource_arn}
    */
    readonly resourceArn?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/shield_protection aws_shield_protection}
*/
export declare class DataAwsShieldProtection extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_shield_protection";
    /**
    * Generates CDKTF code for importing a DataAwsShieldProtection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsShieldProtection to import
    * @param importFromId The id of the existing DataAwsShieldProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/shield_protection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsShieldProtection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/shield_protection aws_shield_protection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsShieldProtectionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsShieldProtectionConfig);
    get id(): string;
    get name(): string;
    get protectionArn(): string;
    private _protectionId?;
    get protectionId(): string;
    set protectionId(value: string);
    resetProtectionId(): void;
    get protectionIdInput(): string | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    resetResourceArn(): void;
    get resourceArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
