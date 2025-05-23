/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubStandardsControlConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_standards_control#control_status SecurityhubStandardsControl#control_status}
    */
    readonly controlStatus: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_standards_control#disabled_reason SecurityhubStandardsControl#disabled_reason}
    */
    readonly disabledReason?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_standards_control#id SecurityhubStandardsControl#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_standards_control#standards_control_arn SecurityhubStandardsControl#standards_control_arn}
    */
    readonly standardsControlArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_standards_control aws_securityhub_standards_control}
*/
export declare class SecurityhubStandardsControl extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securityhub_standards_control";
    /**
    * Generates CDKTF code for importing a SecurityhubStandardsControl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecurityhubStandardsControl to import
    * @param importFromId The id of the existing SecurityhubStandardsControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_standards_control#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecurityhubStandardsControl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_standards_control aws_securityhub_standards_control} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubStandardsControlConfig
    */
    constructor(scope: Construct, id: string, config: SecurityhubStandardsControlConfig);
    get controlId(): string;
    private _controlStatus?;
    get controlStatus(): string;
    set controlStatus(value: string);
    get controlStatusInput(): string | undefined;
    get controlStatusUpdatedAt(): string;
    get description(): string;
    private _disabledReason?;
    get disabledReason(): string;
    set disabledReason(value: string);
    resetDisabledReason(): void;
    get disabledReasonInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get relatedRequirements(): string[];
    get remediationUrl(): string;
    get severityRating(): string;
    private _standardsControlArn?;
    get standardsControlArn(): string;
    set standardsControlArn(value: string);
    get standardsControlArnInput(): string | undefined;
    get title(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
