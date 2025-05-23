/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlacierVaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault#access_policy GlacierVault#access_policy}
    */
    readonly accessPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault#id GlacierVault#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault#name GlacierVault#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault#tags GlacierVault#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault#tags_all GlacierVault#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * notification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault#notification GlacierVault#notification}
    */
    readonly notification?: GlacierVaultNotification;
}
export interface GlacierVaultNotification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault#events GlacierVault#events}
    */
    readonly events: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault#sns_topic GlacierVault#sns_topic}
    */
    readonly snsTopic: string;
}
export declare function glacierVaultNotificationToTerraform(struct?: GlacierVaultNotificationOutputReference | GlacierVaultNotification): any;
export declare function glacierVaultNotificationToHclTerraform(struct?: GlacierVaultNotificationOutputReference | GlacierVaultNotification): any;
export declare class GlacierVaultNotificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlacierVaultNotification | undefined;
    set internalValue(value: GlacierVaultNotification | undefined);
    private _events?;
    get events(): string[];
    set events(value: string[]);
    get eventsInput(): string[] | undefined;
    private _snsTopic?;
    get snsTopic(): string;
    set snsTopic(value: string);
    get snsTopicInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault aws_glacier_vault}
*/
export declare class GlacierVault extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glacier_vault";
    /**
    * Generates CDKTF code for importing a GlacierVault resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlacierVault to import
    * @param importFromId The id of the existing GlacierVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlacierVault to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault aws_glacier_vault} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlacierVaultConfig
    */
    constructor(scope: Construct, id: string, config: GlacierVaultConfig);
    private _accessPolicy?;
    get accessPolicy(): string;
    set accessPolicy(value: string);
    resetAccessPolicy(): void;
    get accessPolicyInput(): string | undefined;
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get location(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _notification;
    get notification(): GlacierVaultNotificationOutputReference;
    putNotification(value: GlacierVaultNotification): void;
    resetNotification(): void;
    get notificationInput(): GlacierVaultNotification | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
