/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretsmanagerSecretRotationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_rotation#id SecretsmanagerSecretRotation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_rotation#rotate_immediately SecretsmanagerSecretRotation#rotate_immediately}
    */
    readonly rotateImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_rotation#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}
    */
    readonly rotationLambdaArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_rotation#secret_id SecretsmanagerSecretRotation#secret_id}
    */
    readonly secretId: string;
    /**
    * rotation_rules block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_rotation#rotation_rules SecretsmanagerSecretRotation#rotation_rules}
    */
    readonly rotationRules: SecretsmanagerSecretRotationRotationRules;
}
export interface SecretsmanagerSecretRotationRotationRules {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_rotation#automatically_after_days SecretsmanagerSecretRotation#automatically_after_days}
    */
    readonly automaticallyAfterDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_rotation#duration SecretsmanagerSecretRotation#duration}
    */
    readonly duration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_rotation#schedule_expression SecretsmanagerSecretRotation#schedule_expression}
    */
    readonly scheduleExpression?: string;
}
export declare function secretsmanagerSecretRotationRotationRulesToTerraform(struct?: SecretsmanagerSecretRotationRotationRulesOutputReference | SecretsmanagerSecretRotationRotationRules): any;
export declare function secretsmanagerSecretRotationRotationRulesToHclTerraform(struct?: SecretsmanagerSecretRotationRotationRulesOutputReference | SecretsmanagerSecretRotationRotationRules): any;
export declare class SecretsmanagerSecretRotationRotationRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretsmanagerSecretRotationRotationRules | undefined;
    set internalValue(value: SecretsmanagerSecretRotationRotationRules | undefined);
    private _automaticallyAfterDays?;
    get automaticallyAfterDays(): number;
    set automaticallyAfterDays(value: number);
    resetAutomaticallyAfterDays(): void;
    get automaticallyAfterDaysInput(): number | undefined;
    private _duration?;
    get duration(): string;
    set duration(value: string);
    resetDuration(): void;
    get durationInput(): string | undefined;
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    resetScheduleExpression(): void;
    get scheduleExpressionInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_rotation aws_secretsmanager_secret_rotation}
*/
export declare class SecretsmanagerSecretRotation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_secretsmanager_secret_rotation";
    /**
    * Generates CDKTF code for importing a SecretsmanagerSecretRotation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretsmanagerSecretRotation to import
    * @param importFromId The id of the existing SecretsmanagerSecretRotation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_rotation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretsmanagerSecretRotation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_rotation aws_secretsmanager_secret_rotation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretsmanagerSecretRotationConfig
    */
    constructor(scope: Construct, id: string, config: SecretsmanagerSecretRotationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _rotateImmediately?;
    get rotateImmediately(): boolean | cdktf.IResolvable;
    set rotateImmediately(value: boolean | cdktf.IResolvable);
    resetRotateImmediately(): void;
    get rotateImmediatelyInput(): boolean | cdktf.IResolvable | undefined;
    get rotationEnabled(): cdktf.IResolvable;
    private _rotationLambdaArn?;
    get rotationLambdaArn(): string;
    set rotationLambdaArn(value: string);
    resetRotationLambdaArn(): void;
    get rotationLambdaArnInput(): string | undefined;
    private _secretId?;
    get secretId(): string;
    set secretId(value: string);
    get secretIdInput(): string | undefined;
    private _rotationRules;
    get rotationRules(): SecretsmanagerSecretRotationRotationRulesOutputReference;
    putRotationRules(value: SecretsmanagerSecretRotationRotationRules): void;
    get rotationRulesInput(): SecretsmanagerSecretRotationRotationRules | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
