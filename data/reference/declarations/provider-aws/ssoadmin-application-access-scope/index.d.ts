/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoadminApplicationAccessScopeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_access_scope#application_arn SsoadminApplicationAccessScope#application_arn}
    */
    readonly applicationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_access_scope#authorized_targets SsoadminApplicationAccessScope#authorized_targets}
    */
    readonly authorizedTargets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_access_scope#scope SsoadminApplicationAccessScope#scope}
    */
    readonly scope: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_access_scope aws_ssoadmin_application_access_scope}
*/
export declare class SsoadminApplicationAccessScope extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssoadmin_application_access_scope";
    /**
    * Generates CDKTF code for importing a SsoadminApplicationAccessScope resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsoadminApplicationAccessScope to import
    * @param importFromId The id of the existing SsoadminApplicationAccessScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_access_scope#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsoadminApplicationAccessScope to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_access_scope aws_ssoadmin_application_access_scope} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminApplicationAccessScopeConfig
    */
    constructor(scope: Construct, id: string, config: SsoadminApplicationAccessScopeConfig);
    private _applicationArn?;
    get applicationArn(): string;
    set applicationArn(value: string);
    get applicationArnInput(): string | undefined;
    private _authorizedTargets?;
    get authorizedTargets(): string[];
    set authorizedTargets(value: string[]);
    resetAuthorizedTargets(): void;
    get authorizedTargetsInput(): string[] | undefined;
    get id(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
