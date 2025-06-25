/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RolesanywhereTrustAnchorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#id RolesanywhereTrustAnchor#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#name RolesanywhereTrustAnchor#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#tags RolesanywhereTrustAnchor#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#tags_all RolesanywhereTrustAnchor#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * notification_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#notification_settings RolesanywhereTrustAnchor#notification_settings}
    */
    readonly notificationSettings?: RolesanywhereTrustAnchorNotificationSettings[] | cdktf.IResolvable;
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#source RolesanywhereTrustAnchor#source}
    */
    readonly source: RolesanywhereTrustAnchorSource;
}
export interface RolesanywhereTrustAnchorNotificationSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#channel RolesanywhereTrustAnchor#channel}
    */
    readonly channel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#event RolesanywhereTrustAnchor#event}
    */
    readonly event?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#threshold RolesanywhereTrustAnchor#threshold}
    */
    readonly threshold?: number;
}
export declare function rolesanywhereTrustAnchorNotificationSettingsToTerraform(struct?: RolesanywhereTrustAnchorNotificationSettings | cdktf.IResolvable): any;
export declare function rolesanywhereTrustAnchorNotificationSettingsToHclTerraform(struct?: RolesanywhereTrustAnchorNotificationSettings | cdktf.IResolvable): any;
export declare class RolesanywhereTrustAnchorNotificationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RolesanywhereTrustAnchorNotificationSettings | cdktf.IResolvable | undefined;
    set internalValue(value: RolesanywhereTrustAnchorNotificationSettings | cdktf.IResolvable | undefined);
    private _channel?;
    get channel(): string;
    set channel(value: string);
    resetChannel(): void;
    get channelInput(): string | undefined;
    get configuredBy(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _event?;
    get event(): string;
    set event(value: string);
    resetEvent(): void;
    get eventInput(): string | undefined;
    private _threshold?;
    get threshold(): number;
    set threshold(value: number);
    resetThreshold(): void;
    get thresholdInput(): number | undefined;
}
export declare class RolesanywhereTrustAnchorNotificationSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RolesanywhereTrustAnchorNotificationSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RolesanywhereTrustAnchorNotificationSettingsOutputReference;
}
export interface RolesanywhereTrustAnchorSourceSourceData {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#acm_pca_arn RolesanywhereTrustAnchor#acm_pca_arn}
    */
    readonly acmPcaArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#x509_certificate_data RolesanywhereTrustAnchor#x509_certificate_data}
    */
    readonly x509CertificateData?: string;
}
export declare function rolesanywhereTrustAnchorSourceSourceDataToTerraform(struct?: RolesanywhereTrustAnchorSourceSourceDataOutputReference | RolesanywhereTrustAnchorSourceSourceData): any;
export declare function rolesanywhereTrustAnchorSourceSourceDataToHclTerraform(struct?: RolesanywhereTrustAnchorSourceSourceDataOutputReference | RolesanywhereTrustAnchorSourceSourceData): any;
export declare class RolesanywhereTrustAnchorSourceSourceDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RolesanywhereTrustAnchorSourceSourceData | undefined;
    set internalValue(value: RolesanywhereTrustAnchorSourceSourceData | undefined);
    private _acmPcaArn?;
    get acmPcaArn(): string;
    set acmPcaArn(value: string);
    resetAcmPcaArn(): void;
    get acmPcaArnInput(): string | undefined;
    private _x509CertificateData?;
    get x509CertificateData(): string;
    set x509CertificateData(value: string);
    resetX509CertificateData(): void;
    get x509CertificateDataInput(): string | undefined;
}
export interface RolesanywhereTrustAnchorSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#source_type RolesanywhereTrustAnchor#source_type}
    */
    readonly sourceType: string;
    /**
    * source_data block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#source_data RolesanywhereTrustAnchor#source_data}
    */
    readonly sourceData: RolesanywhereTrustAnchorSourceSourceData;
}
export declare function rolesanywhereTrustAnchorSourceToTerraform(struct?: RolesanywhereTrustAnchorSourceOutputReference | RolesanywhereTrustAnchorSource): any;
export declare function rolesanywhereTrustAnchorSourceToHclTerraform(struct?: RolesanywhereTrustAnchorSourceOutputReference | RolesanywhereTrustAnchorSource): any;
export declare class RolesanywhereTrustAnchorSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RolesanywhereTrustAnchorSource | undefined;
    set internalValue(value: RolesanywhereTrustAnchorSource | undefined);
    private _sourceType?;
    get sourceType(): string;
    set sourceType(value: string);
    get sourceTypeInput(): string | undefined;
    private _sourceData;
    get sourceData(): RolesanywhereTrustAnchorSourceSourceDataOutputReference;
    putSourceData(value: RolesanywhereTrustAnchorSourceSourceData): void;
    get sourceDataInput(): RolesanywhereTrustAnchorSourceSourceData | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor aws_rolesanywhere_trust_anchor}
*/
export declare class RolesanywhereTrustAnchor extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rolesanywhere_trust_anchor";
    /**
    * Generates CDKTF code for importing a RolesanywhereTrustAnchor resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RolesanywhereTrustAnchor to import
    * @param importFromId The id of the existing RolesanywhereTrustAnchor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RolesanywhereTrustAnchor to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rolesanywhere_trust_anchor aws_rolesanywhere_trust_anchor} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RolesanywhereTrustAnchorConfig
    */
    constructor(scope: Construct, id: string, config: RolesanywhereTrustAnchorConfig);
    get arn(): string;
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
    private _notificationSettings;
    get notificationSettings(): RolesanywhereTrustAnchorNotificationSettingsList;
    putNotificationSettings(value: RolesanywhereTrustAnchorNotificationSettings[] | cdktf.IResolvable): void;
    resetNotificationSettings(): void;
    get notificationSettingsInput(): cdktf.IResolvable | RolesanywhereTrustAnchorNotificationSettings[] | undefined;
    private _source;
    get source(): RolesanywhereTrustAnchorSourceOutputReference;
    putSource(value: RolesanywhereTrustAnchorSource): void;
    get sourceInput(): RolesanywhereTrustAnchorSource | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
