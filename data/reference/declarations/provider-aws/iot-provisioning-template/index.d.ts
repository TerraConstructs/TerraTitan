/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotProvisioningTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_provisioning_template#description IotProvisioningTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_provisioning_template#id IotProvisioningTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_provisioning_template#name IotProvisioningTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}
    */
    readonly provisioningRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_provisioning_template#tags IotProvisioningTemplate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_provisioning_template#tags_all IotProvisioningTemplate#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}
    */
    readonly templateBody: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_provisioning_template#type IotProvisioningTemplate#type}
    */
    readonly type?: string;
    /**
    * pre_provisioning_hook block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_provisioning_template#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}
    */
    readonly preProvisioningHook?: IotProvisioningTemplatePreProvisioningHook;
}
export interface IotProvisioningTemplatePreProvisioningHook {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_provisioning_template#payload_version IotProvisioningTemplate#payload_version}
    */
    readonly payloadVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_provisioning_template#target_arn IotProvisioningTemplate#target_arn}
    */
    readonly targetArn: string;
}
export declare function iotProvisioningTemplatePreProvisioningHookToTerraform(struct?: IotProvisioningTemplatePreProvisioningHookOutputReference | IotProvisioningTemplatePreProvisioningHook): any;
export declare function iotProvisioningTemplatePreProvisioningHookToHclTerraform(struct?: IotProvisioningTemplatePreProvisioningHookOutputReference | IotProvisioningTemplatePreProvisioningHook): any;
export declare class IotProvisioningTemplatePreProvisioningHookOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotProvisioningTemplatePreProvisioningHook | undefined;
    set internalValue(value: IotProvisioningTemplatePreProvisioningHook | undefined);
    private _payloadVersion?;
    get payloadVersion(): string;
    set payloadVersion(value: string);
    resetPayloadVersion(): void;
    get payloadVersionInput(): string | undefined;
    private _targetArn?;
    get targetArn(): string;
    set targetArn(value: string);
    get targetArnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_provisioning_template aws_iot_provisioning_template}
*/
export declare class IotProvisioningTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iot_provisioning_template";
    /**
    * Generates CDKTF code for importing a IotProvisioningTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IotProvisioningTemplate to import
    * @param importFromId The id of the existing IotProvisioningTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_provisioning_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IotProvisioningTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_provisioning_template aws_iot_provisioning_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotProvisioningTemplateConfig
    */
    constructor(scope: Construct, id: string, config: IotProvisioningTemplateConfig);
    get arn(): string;
    get defaultVersionId(): number;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _provisioningRoleArn?;
    get provisioningRoleArn(): string;
    set provisioningRoleArn(value: string);
    get provisioningRoleArnInput(): string | undefined;
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
    get templateBodyInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _preProvisioningHook;
    get preProvisioningHook(): IotProvisioningTemplatePreProvisioningHookOutputReference;
    putPreProvisioningHook(value: IotProvisioningTemplatePreProvisioningHook): void;
    resetPreProvisioningHook(): void;
    get preProvisioningHookInput(): IotProvisioningTemplatePreProvisioningHook | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
