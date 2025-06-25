/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_integration#additional_encryption_context RdsIntegration#additional_encryption_context}
    */
    readonly additionalEncryptionContext?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_integration#data_filter RdsIntegration#data_filter}
    */
    readonly dataFilter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_integration#integration_name RdsIntegration#integration_name}
    */
    readonly integrationName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_integration#kms_key_id RdsIntegration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_integration#source_arn RdsIntegration#source_arn}
    */
    readonly sourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_integration#tags RdsIntegration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_integration#target_arn RdsIntegration#target_arn}
    */
    readonly targetArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_integration#timeouts RdsIntegration#timeouts}
    */
    readonly timeouts?: RdsIntegrationTimeouts;
}
export interface RdsIntegrationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_integration#create RdsIntegration#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_integration#delete RdsIntegration#delete}
    */
    readonly delete?: string;
}
export declare function rdsIntegrationTimeoutsToTerraform(struct?: RdsIntegrationTimeouts | cdktf.IResolvable): any;
export declare function rdsIntegrationTimeoutsToHclTerraform(struct?: RdsIntegrationTimeouts | cdktf.IResolvable): any;
export declare class RdsIntegrationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RdsIntegrationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RdsIntegrationTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_integration aws_rds_integration}
*/
export declare class RdsIntegration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rds_integration";
    /**
    * Generates CDKTF code for importing a RdsIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RdsIntegration to import
    * @param importFromId The id of the existing RdsIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RdsIntegration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_integration aws_rds_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsIntegrationConfig
    */
    constructor(scope: Construct, id: string, config: RdsIntegrationConfig);
    private _additionalEncryptionContext?;
    get additionalEncryptionContext(): {
        [key: string]: string;
    };
    set additionalEncryptionContext(value: {
        [key: string]: string;
    });
    resetAdditionalEncryptionContext(): void;
    get additionalEncryptionContextInput(): {
        [key: string]: string;
    } | undefined;
    get arn(): string;
    private _dataFilter?;
    get dataFilter(): string;
    set dataFilter(value: string);
    resetDataFilter(): void;
    get dataFilterInput(): string | undefined;
    get id(): string;
    private _integrationName?;
    get integrationName(): string;
    set integrationName(value: string);
    get integrationNameInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _sourceArn?;
    get sourceArn(): string;
    set sourceArn(value: string);
    get sourceArnInput(): string | undefined;
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
    private _targetArn?;
    get targetArn(): string;
    set targetArn(value: string);
    get targetArnInput(): string | undefined;
    private _timeouts;
    get timeouts(): RdsIntegrationTimeoutsOutputReference;
    putTimeouts(value: RdsIntegrationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RdsIntegrationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
