/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaCodeSigningConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_code_signing_config#description LambdaCodeSigningConfig#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_code_signing_config#id LambdaCodeSigningConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_code_signing_config#tags LambdaCodeSigningConfig#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_code_signing_config#tags_all LambdaCodeSigningConfig#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * allowed_publishers block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_code_signing_config#allowed_publishers LambdaCodeSigningConfig#allowed_publishers}
    */
    readonly allowedPublishers: LambdaCodeSigningConfigAllowedPublishers;
    /**
    * policies block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_code_signing_config#policies LambdaCodeSigningConfig#policies}
    */
    readonly policies?: LambdaCodeSigningConfigPolicies;
}
export interface LambdaCodeSigningConfigAllowedPublishers {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_code_signing_config#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}
    */
    readonly signingProfileVersionArns: string[];
}
export declare function lambdaCodeSigningConfigAllowedPublishersToTerraform(struct?: LambdaCodeSigningConfigAllowedPublishersOutputReference | LambdaCodeSigningConfigAllowedPublishers): any;
export declare function lambdaCodeSigningConfigAllowedPublishersToHclTerraform(struct?: LambdaCodeSigningConfigAllowedPublishersOutputReference | LambdaCodeSigningConfigAllowedPublishers): any;
export declare class LambdaCodeSigningConfigAllowedPublishersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaCodeSigningConfigAllowedPublishers | undefined;
    set internalValue(value: LambdaCodeSigningConfigAllowedPublishers | undefined);
    private _signingProfileVersionArns?;
    get signingProfileVersionArns(): string[];
    set signingProfileVersionArns(value: string[]);
    get signingProfileVersionArnsInput(): string[] | undefined;
}
export interface LambdaCodeSigningConfigPolicies {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_code_signing_config#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}
    */
    readonly untrustedArtifactOnDeployment: string;
}
export declare function lambdaCodeSigningConfigPoliciesToTerraform(struct?: LambdaCodeSigningConfigPoliciesOutputReference | LambdaCodeSigningConfigPolicies): any;
export declare function lambdaCodeSigningConfigPoliciesToHclTerraform(struct?: LambdaCodeSigningConfigPoliciesOutputReference | LambdaCodeSigningConfigPolicies): any;
export declare class LambdaCodeSigningConfigPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaCodeSigningConfigPolicies | undefined;
    set internalValue(value: LambdaCodeSigningConfigPolicies | undefined);
    private _untrustedArtifactOnDeployment?;
    get untrustedArtifactOnDeployment(): string;
    set untrustedArtifactOnDeployment(value: string);
    get untrustedArtifactOnDeploymentInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_code_signing_config aws_lambda_code_signing_config}
*/
export declare class LambdaCodeSigningConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lambda_code_signing_config";
    /**
    * Generates CDKTF code for importing a LambdaCodeSigningConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LambdaCodeSigningConfig to import
    * @param importFromId The id of the existing LambdaCodeSigningConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_code_signing_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LambdaCodeSigningConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_code_signing_config aws_lambda_code_signing_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaCodeSigningConfigConfig
    */
    constructor(scope: Construct, id: string, config: LambdaCodeSigningConfigConfig);
    get arn(): string;
    get configId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastModified(): string;
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
    private _allowedPublishers;
    get allowedPublishers(): LambdaCodeSigningConfigAllowedPublishersOutputReference;
    putAllowedPublishers(value: LambdaCodeSigningConfigAllowedPublishers): void;
    get allowedPublishersInput(): LambdaCodeSigningConfigAllowedPublishers | undefined;
    private _policies;
    get policies(): LambdaCodeSigningConfigPoliciesOutputReference;
    putPolicies(value: LambdaCodeSigningConfigPolicies): void;
    resetPolicies(): void;
    get policiesInput(): LambdaCodeSigningConfigPolicies | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
