/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#capabilities CloudformationStack#capabilities}
    */
    readonly capabilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#disable_rollback CloudformationStack#disable_rollback}
    */
    readonly disableRollback?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#iam_role_arn CloudformationStack#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#id CloudformationStack#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#name CloudformationStack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#notification_arns CloudformationStack#notification_arns}
    */
    readonly notificationArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#on_failure CloudformationStack#on_failure}
    */
    readonly onFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#parameters CloudformationStack#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#policy_body CloudformationStack#policy_body}
    */
    readonly policyBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#policy_url CloudformationStack#policy_url}
    */
    readonly policyUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#tags CloudformationStack#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#tags_all CloudformationStack#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#template_body CloudformationStack#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#template_url CloudformationStack#template_url}
    */
    readonly templateUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#timeout_in_minutes CloudformationStack#timeout_in_minutes}
    */
    readonly timeoutInMinutes?: number;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#timeouts CloudformationStack#timeouts}
    */
    readonly timeouts?: CloudformationStackTimeouts;
}
export interface CloudformationStackTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#create CloudformationStack#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#delete CloudformationStack#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#update CloudformationStack#update}
    */
    readonly update?: string;
}
export declare function cloudformationStackTimeoutsToTerraform(struct?: CloudformationStackTimeouts | cdktf.IResolvable): any;
export declare function cloudformationStackTimeoutsToHclTerraform(struct?: CloudformationStackTimeouts | cdktf.IResolvable): any;
export declare class CloudformationStackTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudformationStackTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CloudformationStackTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack aws_cloudformation_stack}
*/
export declare class CloudformationStack extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudformation_stack";
    /**
    * Generates CDKTF code for importing a CloudformationStack resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudformationStack to import
    * @param importFromId The id of the existing CloudformationStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudformationStack to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack aws_cloudformation_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackConfig
    */
    constructor(scope: Construct, id: string, config: CloudformationStackConfig);
    private _capabilities?;
    get capabilities(): string[];
    set capabilities(value: string[]);
    resetCapabilities(): void;
    get capabilitiesInput(): string[] | undefined;
    private _disableRollback?;
    get disableRollback(): boolean | cdktf.IResolvable;
    set disableRollback(value: boolean | cdktf.IResolvable);
    resetDisableRollback(): void;
    get disableRollbackInput(): boolean | cdktf.IResolvable | undefined;
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    resetIamRoleArn(): void;
    get iamRoleArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _notificationArns?;
    get notificationArns(): string[];
    set notificationArns(value: string[]);
    resetNotificationArns(): void;
    get notificationArnsInput(): string[] | undefined;
    private _onFailure?;
    get onFailure(): string;
    set onFailure(value: string);
    resetOnFailure(): void;
    get onFailureInput(): string | undefined;
    private _outputs;
    get outputs(): cdktf.StringMap;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _policyBody?;
    get policyBody(): string;
    set policyBody(value: string);
    resetPolicyBody(): void;
    get policyBodyInput(): string | undefined;
    private _policyUrl?;
    get policyUrl(): string;
    set policyUrl(value: string);
    resetPolicyUrl(): void;
    get policyUrlInput(): string | undefined;
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
    private _templateBody?;
    get templateBody(): string;
    set templateBody(value: string);
    resetTemplateBody(): void;
    get templateBodyInput(): string | undefined;
    private _templateUrl?;
    get templateUrl(): string;
    set templateUrl(value: string);
    resetTemplateUrl(): void;
    get templateUrlInput(): string | undefined;
    private _timeoutInMinutes?;
    get timeoutInMinutes(): number;
    set timeoutInMinutes(value: number);
    resetTimeoutInMinutes(): void;
    get timeoutInMinutesInput(): number | undefined;
    private _timeouts;
    get timeouts(): CloudformationStackTimeoutsOutputReference;
    putTimeouts(value: CloudformationStackTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CloudformationStackTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
