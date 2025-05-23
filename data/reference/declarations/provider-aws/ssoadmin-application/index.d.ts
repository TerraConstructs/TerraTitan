/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoadminApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application#application_provider_arn SsoadminApplication#application_provider_arn}
    */
    readonly applicationProviderArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application#client_token SsoadminApplication#client_token}
    */
    readonly clientToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application#description SsoadminApplication#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application#instance_arn SsoadminApplication#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application#name SsoadminApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application#status SsoadminApplication#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application#tags SsoadminApplication#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * portal_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application#portal_options SsoadminApplication#portal_options}
    */
    readonly portalOptions?: SsoadminApplicationPortalOptions[] | cdktf.IResolvable;
}
export interface SsoadminApplicationPortalOptionsSignInOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application#application_url SsoadminApplication#application_url}
    */
    readonly applicationUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application#origin SsoadminApplication#origin}
    */
    readonly origin: string;
}
export declare function ssoadminApplicationPortalOptionsSignInOptionsToTerraform(struct?: SsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable): any;
export declare function ssoadminApplicationPortalOptionsSignInOptionsToHclTerraform(struct?: SsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable): any;
export declare class SsoadminApplicationPortalOptionsSignInOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable | undefined);
    private _applicationUrl?;
    get applicationUrl(): string;
    set applicationUrl(value: string);
    resetApplicationUrl(): void;
    get applicationUrlInput(): string | undefined;
    private _origin?;
    get origin(): string;
    set origin(value: string);
    get originInput(): string | undefined;
}
export declare class SsoadminApplicationPortalOptionsSignInOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsoadminApplicationPortalOptionsSignInOptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsoadminApplicationPortalOptionsSignInOptionsOutputReference;
}
export interface SsoadminApplicationPortalOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application#visibility SsoadminApplication#visibility}
    */
    readonly visibility?: string;
    /**
    * sign_in_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application#sign_in_options SsoadminApplication#sign_in_options}
    */
    readonly signInOptions?: SsoadminApplicationPortalOptionsSignInOptions[] | cdktf.IResolvable;
}
export declare function ssoadminApplicationPortalOptionsToTerraform(struct?: SsoadminApplicationPortalOptions | cdktf.IResolvable): any;
export declare function ssoadminApplicationPortalOptionsToHclTerraform(struct?: SsoadminApplicationPortalOptions | cdktf.IResolvable): any;
export declare class SsoadminApplicationPortalOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsoadminApplicationPortalOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SsoadminApplicationPortalOptions | cdktf.IResolvable | undefined);
    private _visibility?;
    get visibility(): string;
    set visibility(value: string);
    resetVisibility(): void;
    get visibilityInput(): string | undefined;
    private _signInOptions;
    get signInOptions(): SsoadminApplicationPortalOptionsSignInOptionsList;
    putSignInOptions(value: SsoadminApplicationPortalOptionsSignInOptions[] | cdktf.IResolvable): void;
    resetSignInOptions(): void;
    get signInOptionsInput(): cdktf.IResolvable | SsoadminApplicationPortalOptionsSignInOptions[] | undefined;
}
export declare class SsoadminApplicationPortalOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsoadminApplicationPortalOptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsoadminApplicationPortalOptionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application aws_ssoadmin_application}
*/
export declare class SsoadminApplication extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssoadmin_application";
    /**
    * Generates CDKTF code for importing a SsoadminApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsoadminApplication to import
    * @param importFromId The id of the existing SsoadminApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsoadminApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application aws_ssoadmin_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminApplicationConfig
    */
    constructor(scope: Construct, id: string, config: SsoadminApplicationConfig);
    get applicationAccount(): string;
    get applicationArn(): string;
    private _applicationProviderArn?;
    get applicationProviderArn(): string;
    set applicationProviderArn(value: string);
    get applicationProviderArnInput(): string | undefined;
    private _clientToken?;
    get clientToken(): string;
    set clientToken(value: string);
    resetClientToken(): void;
    get clientTokenInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _instanceArn?;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
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
    private _portalOptions;
    get portalOptions(): SsoadminApplicationPortalOptionsList;
    putPortalOptions(value: SsoadminApplicationPortalOptions[] | cdktf.IResolvable): void;
    resetPortalOptions(): void;
    get portalOptionsInput(): cdktf.IResolvable | SsoadminApplicationPortalOptions[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
