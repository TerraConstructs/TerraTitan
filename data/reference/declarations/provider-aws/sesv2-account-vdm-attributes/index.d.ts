/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Sesv2AccountVdmAttributesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_account_vdm_attributes#id Sesv2AccountVdmAttributes#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_account_vdm_attributes#vdm_enabled Sesv2AccountVdmAttributes#vdm_enabled}
    */
    readonly vdmEnabled: string;
    /**
    * dashboard_attributes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_account_vdm_attributes#dashboard_attributes Sesv2AccountVdmAttributes#dashboard_attributes}
    */
    readonly dashboardAttributes?: Sesv2AccountVdmAttributesDashboardAttributes;
    /**
    * guardian_attributes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_account_vdm_attributes#guardian_attributes Sesv2AccountVdmAttributes#guardian_attributes}
    */
    readonly guardianAttributes?: Sesv2AccountVdmAttributesGuardianAttributes;
}
export interface Sesv2AccountVdmAttributesDashboardAttributes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_account_vdm_attributes#engagement_metrics Sesv2AccountVdmAttributes#engagement_metrics}
    */
    readonly engagementMetrics?: string;
}
export declare function sesv2AccountVdmAttributesDashboardAttributesToTerraform(struct?: Sesv2AccountVdmAttributesDashboardAttributesOutputReference | Sesv2AccountVdmAttributesDashboardAttributes): any;
export declare function sesv2AccountVdmAttributesDashboardAttributesToHclTerraform(struct?: Sesv2AccountVdmAttributesDashboardAttributesOutputReference | Sesv2AccountVdmAttributesDashboardAttributes): any;
export declare class Sesv2AccountVdmAttributesDashboardAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2AccountVdmAttributesDashboardAttributes | undefined;
    set internalValue(value: Sesv2AccountVdmAttributesDashboardAttributes | undefined);
    private _engagementMetrics?;
    get engagementMetrics(): string;
    set engagementMetrics(value: string);
    resetEngagementMetrics(): void;
    get engagementMetricsInput(): string | undefined;
}
export interface Sesv2AccountVdmAttributesGuardianAttributes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_account_vdm_attributes#optimized_shared_delivery Sesv2AccountVdmAttributes#optimized_shared_delivery}
    */
    readonly optimizedSharedDelivery?: string;
}
export declare function sesv2AccountVdmAttributesGuardianAttributesToTerraform(struct?: Sesv2AccountVdmAttributesGuardianAttributesOutputReference | Sesv2AccountVdmAttributesGuardianAttributes): any;
export declare function sesv2AccountVdmAttributesGuardianAttributesToHclTerraform(struct?: Sesv2AccountVdmAttributesGuardianAttributesOutputReference | Sesv2AccountVdmAttributesGuardianAttributes): any;
export declare class Sesv2AccountVdmAttributesGuardianAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2AccountVdmAttributesGuardianAttributes | undefined;
    set internalValue(value: Sesv2AccountVdmAttributesGuardianAttributes | undefined);
    private _optimizedSharedDelivery?;
    get optimizedSharedDelivery(): string;
    set optimizedSharedDelivery(value: string);
    resetOptimizedSharedDelivery(): void;
    get optimizedSharedDeliveryInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_account_vdm_attributes aws_sesv2_account_vdm_attributes}
*/
export declare class Sesv2AccountVdmAttributes extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sesv2_account_vdm_attributes";
    /**
    * Generates CDKTF code for importing a Sesv2AccountVdmAttributes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Sesv2AccountVdmAttributes to import
    * @param importFromId The id of the existing Sesv2AccountVdmAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_account_vdm_attributes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Sesv2AccountVdmAttributes to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_account_vdm_attributes aws_sesv2_account_vdm_attributes} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Sesv2AccountVdmAttributesConfig
    */
    constructor(scope: Construct, id: string, config: Sesv2AccountVdmAttributesConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _vdmEnabled?;
    get vdmEnabled(): string;
    set vdmEnabled(value: string);
    get vdmEnabledInput(): string | undefined;
    private _dashboardAttributes;
    get dashboardAttributes(): Sesv2AccountVdmAttributesDashboardAttributesOutputReference;
    putDashboardAttributes(value: Sesv2AccountVdmAttributesDashboardAttributes): void;
    resetDashboardAttributes(): void;
    get dashboardAttributesInput(): Sesv2AccountVdmAttributesDashboardAttributes | undefined;
    private _guardianAttributes;
    get guardianAttributes(): Sesv2AccountVdmAttributesGuardianAttributesOutputReference;
    putGuardianAttributes(value: Sesv2AccountVdmAttributesGuardianAttributes): void;
    resetGuardianAttributes(): void;
    get guardianAttributesInput(): Sesv2AccountVdmAttributesGuardianAttributes | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
