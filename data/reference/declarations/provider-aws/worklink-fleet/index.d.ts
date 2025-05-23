/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorklinkFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}
    */
    readonly auditStreamArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}
    */
    readonly deviceCaCertificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet#display_name WorklinkFleet#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet#id WorklinkFleet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet#name WorklinkFleet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}
    */
    readonly optimizeForEndUserLocation?: boolean | cdktf.IResolvable;
    /**
    * identity_provider block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet#identity_provider WorklinkFleet#identity_provider}
    */
    readonly identityProvider?: WorklinkFleetIdentityProvider;
    /**
    * network block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet#network WorklinkFleet#network}
    */
    readonly network?: WorklinkFleetNetwork;
}
export interface WorklinkFleetIdentityProvider {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet#saml_metadata WorklinkFleet#saml_metadata}
    */
    readonly samlMetadata: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet#type WorklinkFleet#type}
    */
    readonly type: string;
}
export declare function worklinkFleetIdentityProviderToTerraform(struct?: WorklinkFleetIdentityProviderOutputReference | WorklinkFleetIdentityProvider): any;
export declare function worklinkFleetIdentityProviderToHclTerraform(struct?: WorklinkFleetIdentityProviderOutputReference | WorklinkFleetIdentityProvider): any;
export declare class WorklinkFleetIdentityProviderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorklinkFleetIdentityProvider | undefined;
    set internalValue(value: WorklinkFleetIdentityProvider | undefined);
    private _samlMetadata?;
    get samlMetadata(): string;
    set samlMetadata(value: string);
    get samlMetadataInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface WorklinkFleetNetwork {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet#security_group_ids WorklinkFleet#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet#subnet_ids WorklinkFleet#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet#vpc_id WorklinkFleet#vpc_id}
    */
    readonly vpcId: string;
}
export declare function worklinkFleetNetworkToTerraform(struct?: WorklinkFleetNetworkOutputReference | WorklinkFleetNetwork): any;
export declare function worklinkFleetNetworkToHclTerraform(struct?: WorklinkFleetNetworkOutputReference | WorklinkFleetNetwork): any;
export declare class WorklinkFleetNetworkOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorklinkFleetNetwork | undefined;
    set internalValue(value: WorklinkFleetNetwork | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet aws_worklink_fleet}
*/
export declare class WorklinkFleet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_worklink_fleet";
    /**
    * Generates CDKTF code for importing a WorklinkFleet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorklinkFleet to import
    * @param importFromId The id of the existing WorklinkFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorklinkFleet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/worklink_fleet aws_worklink_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorklinkFleetConfig
    */
    constructor(scope: Construct, id: string, config: WorklinkFleetConfig);
    get arn(): string;
    private _auditStreamArn?;
    get auditStreamArn(): string;
    set auditStreamArn(value: string);
    resetAuditStreamArn(): void;
    get auditStreamArnInput(): string | undefined;
    get companyCode(): string;
    get createdTime(): string;
    private _deviceCaCertificate?;
    get deviceCaCertificate(): string;
    set deviceCaCertificate(value: string);
    resetDeviceCaCertificate(): void;
    get deviceCaCertificateInput(): string | undefined;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _optimizeForEndUserLocation?;
    get optimizeForEndUserLocation(): boolean | cdktf.IResolvable;
    set optimizeForEndUserLocation(value: boolean | cdktf.IResolvable);
    resetOptimizeForEndUserLocation(): void;
    get optimizeForEndUserLocationInput(): boolean | cdktf.IResolvable | undefined;
    private _identityProvider;
    get identityProvider(): WorklinkFleetIdentityProviderOutputReference;
    putIdentityProvider(value: WorklinkFleetIdentityProvider): void;
    resetIdentityProvider(): void;
    get identityProviderInput(): WorklinkFleetIdentityProvider | undefined;
    private _network;
    get network(): WorklinkFleetNetworkOutputReference;
    putNetwork(value: WorklinkFleetNetwork): void;
    resetNetwork(): void;
    get networkInput(): WorklinkFleetNetwork | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
