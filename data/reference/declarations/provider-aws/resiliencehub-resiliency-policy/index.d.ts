/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ResiliencehubResiliencyPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies a high-level geographical location constraint for where resilience policy data can be stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#data_location_constraint ResiliencehubResiliencyPolicy#data_location_constraint}
    */
    readonly dataLocationConstraint?: string;
    /**
    * The description for the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#description ResiliencehubResiliencyPolicy#description}
    */
    readonly description?: string;
    /**
    * The name of the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#name ResiliencehubResiliencyPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * The tier for the resiliency policy, ranging from the highest severity (MissionCritical) to lowest (NonCritical).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#tier ResiliencehubResiliencyPolicy#tier}
    */
    readonly tier: string;
    /**
    * policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}
    */
    readonly policy?: ResiliencehubResiliencyPolicyPolicy;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#timeouts ResiliencehubResiliencyPolicy#timeouts}
    */
    readonly timeouts?: ResiliencehubResiliencyPolicyTimeouts;
}
export interface ResiliencehubResiliencyPolicyPolicyAz {
    /**
    * Recovery Point Objective (RPO) as a Go duration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}
    */
    readonly rpo: string;
    /**
    * Recovery Time Objective (RTO) as a Go duration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}
    */
    readonly rto: string;
}
export declare function resiliencehubResiliencyPolicyPolicyAzToTerraform(struct?: ResiliencehubResiliencyPolicyPolicyAz | cdktf.IResolvable): any;
export declare function resiliencehubResiliencyPolicyPolicyAzToHclTerraform(struct?: ResiliencehubResiliencyPolicyPolicyAz | cdktf.IResolvable): any;
export declare class ResiliencehubResiliencyPolicyPolicyAzOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ResiliencehubResiliencyPolicyPolicyAz | cdktf.IResolvable | undefined;
    set internalValue(value: ResiliencehubResiliencyPolicyPolicyAz | cdktf.IResolvable | undefined);
    private _rpo?;
    get rpo(): string;
    set rpo(value: string);
    get rpoInput(): string | undefined;
    private _rto?;
    get rto(): string;
    set rto(value: string);
    get rtoInput(): string | undefined;
}
export interface ResiliencehubResiliencyPolicyPolicyHardware {
    /**
    * Recovery Point Objective (RPO) as a Go duration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}
    */
    readonly rpo: string;
    /**
    * Recovery Time Objective (RTO) as a Go duration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}
    */
    readonly rto: string;
}
export declare function resiliencehubResiliencyPolicyPolicyHardwareToTerraform(struct?: ResiliencehubResiliencyPolicyPolicyHardware | cdktf.IResolvable): any;
export declare function resiliencehubResiliencyPolicyPolicyHardwareToHclTerraform(struct?: ResiliencehubResiliencyPolicyPolicyHardware | cdktf.IResolvable): any;
export declare class ResiliencehubResiliencyPolicyPolicyHardwareOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ResiliencehubResiliencyPolicyPolicyHardware | cdktf.IResolvable | undefined;
    set internalValue(value: ResiliencehubResiliencyPolicyPolicyHardware | cdktf.IResolvable | undefined);
    private _rpo?;
    get rpo(): string;
    set rpo(value: string);
    get rpoInput(): string | undefined;
    private _rto?;
    get rto(): string;
    set rto(value: string);
    get rtoInput(): string | undefined;
}
export interface ResiliencehubResiliencyPolicyPolicyRegion {
    /**
    * Recovery Point Objective (RPO) as a Go duration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}
    */
    readonly rpo?: string;
    /**
    * Recovery Time Objective (RTO) as a Go duration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}
    */
    readonly rto?: string;
}
export declare function resiliencehubResiliencyPolicyPolicyRegionToTerraform(struct?: ResiliencehubResiliencyPolicyPolicyRegion | cdktf.IResolvable): any;
export declare function resiliencehubResiliencyPolicyPolicyRegionToHclTerraform(struct?: ResiliencehubResiliencyPolicyPolicyRegion | cdktf.IResolvable): any;
export declare class ResiliencehubResiliencyPolicyPolicyRegionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ResiliencehubResiliencyPolicyPolicyRegion | cdktf.IResolvable | undefined;
    set internalValue(value: ResiliencehubResiliencyPolicyPolicyRegion | cdktf.IResolvable | undefined);
    private _rpo?;
    get rpo(): string;
    set rpo(value: string);
    resetRpo(): void;
    get rpoInput(): string | undefined;
    private _rto?;
    get rto(): string;
    set rto(value: string);
    resetRto(): void;
    get rtoInput(): string | undefined;
}
export interface ResiliencehubResiliencyPolicyPolicySoftware {
    /**
    * Recovery Point Objective (RPO) as a Go duration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}
    */
    readonly rpo: string;
    /**
    * Recovery Time Objective (RTO) as a Go duration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}
    */
    readonly rto: string;
}
export declare function resiliencehubResiliencyPolicyPolicySoftwareToTerraform(struct?: ResiliencehubResiliencyPolicyPolicySoftware | cdktf.IResolvable): any;
export declare function resiliencehubResiliencyPolicyPolicySoftwareToHclTerraform(struct?: ResiliencehubResiliencyPolicyPolicySoftware | cdktf.IResolvable): any;
export declare class ResiliencehubResiliencyPolicyPolicySoftwareOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ResiliencehubResiliencyPolicyPolicySoftware | cdktf.IResolvable | undefined;
    set internalValue(value: ResiliencehubResiliencyPolicyPolicySoftware | cdktf.IResolvable | undefined);
    private _rpo?;
    get rpo(): string;
    set rpo(value: string);
    get rpoInput(): string | undefined;
    private _rto?;
    get rto(): string;
    set rto(value: string);
    get rtoInput(): string | undefined;
}
export interface ResiliencehubResiliencyPolicyPolicy {
    /**
    * az block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#az ResiliencehubResiliencyPolicy#az}
    */
    readonly az: ResiliencehubResiliencyPolicyPolicyAz;
    /**
    * hardware block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#hardware ResiliencehubResiliencyPolicy#hardware}
    */
    readonly hardware: ResiliencehubResiliencyPolicyPolicyHardware;
    /**
    * region block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#region ResiliencehubResiliencyPolicy#region}
    */
    readonly region?: ResiliencehubResiliencyPolicyPolicyRegion;
    /**
    * software block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#software ResiliencehubResiliencyPolicy#software}
    */
    readonly softwareAttribute: ResiliencehubResiliencyPolicyPolicySoftware;
}
export declare function resiliencehubResiliencyPolicyPolicyToTerraform(struct?: ResiliencehubResiliencyPolicyPolicy | cdktf.IResolvable): any;
export declare function resiliencehubResiliencyPolicyPolicyToHclTerraform(struct?: ResiliencehubResiliencyPolicyPolicy | cdktf.IResolvable): any;
export declare class ResiliencehubResiliencyPolicyPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ResiliencehubResiliencyPolicyPolicy | cdktf.IResolvable | undefined;
    set internalValue(value: ResiliencehubResiliencyPolicyPolicy | cdktf.IResolvable | undefined);
    private _az;
    get az(): ResiliencehubResiliencyPolicyPolicyAzOutputReference;
    putAz(value: ResiliencehubResiliencyPolicyPolicyAz): void;
    get azInput(): cdktf.IResolvable | ResiliencehubResiliencyPolicyPolicyAz | undefined;
    private _hardware;
    get hardware(): ResiliencehubResiliencyPolicyPolicyHardwareOutputReference;
    putHardware(value: ResiliencehubResiliencyPolicyPolicyHardware): void;
    get hardwareInput(): cdktf.IResolvable | ResiliencehubResiliencyPolicyPolicyHardware | undefined;
    private _region;
    get region(): ResiliencehubResiliencyPolicyPolicyRegionOutputReference;
    putRegion(value: ResiliencehubResiliencyPolicyPolicyRegion): void;
    resetRegion(): void;
    get regionInput(): cdktf.IResolvable | ResiliencehubResiliencyPolicyPolicyRegion | undefined;
    private _software;
    get softwareAttribute(): ResiliencehubResiliencyPolicyPolicySoftwareOutputReference;
    putSoftwareAttribute(value: ResiliencehubResiliencyPolicyPolicySoftware): void;
    get softwareAttributeInput(): cdktf.IResolvable | ResiliencehubResiliencyPolicyPolicySoftware | undefined;
}
export interface ResiliencehubResiliencyPolicyTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#create ResiliencehubResiliencyPolicy#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#delete ResiliencehubResiliencyPolicy#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#update ResiliencehubResiliencyPolicy#update}
    */
    readonly update?: string;
}
export declare function resiliencehubResiliencyPolicyTimeoutsToTerraform(struct?: ResiliencehubResiliencyPolicyTimeouts | cdktf.IResolvable): any;
export declare function resiliencehubResiliencyPolicyTimeoutsToHclTerraform(struct?: ResiliencehubResiliencyPolicyTimeouts | cdktf.IResolvable): any;
export declare class ResiliencehubResiliencyPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ResiliencehubResiliencyPolicyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ResiliencehubResiliencyPolicyTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy aws_resiliencehub_resiliency_policy}
*/
export declare class ResiliencehubResiliencyPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_resiliencehub_resiliency_policy";
    /**
    * Generates CDKTF code for importing a ResiliencehubResiliencyPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ResiliencehubResiliencyPolicy to import
    * @param importFromId The id of the existing ResiliencehubResiliencyPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ResiliencehubResiliencyPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/resiliencehub_resiliency_policy aws_resiliencehub_resiliency_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ResiliencehubResiliencyPolicyConfig
    */
    constructor(scope: Construct, id: string, config: ResiliencehubResiliencyPolicyConfig);
    get arn(): string;
    private _dataLocationConstraint?;
    get dataLocationConstraint(): string;
    set dataLocationConstraint(value: string);
    resetDataLocationConstraint(): void;
    get dataLocationConstraintInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get estimatedCostTier(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _tier?;
    get tier(): string;
    set tier(value: string);
    get tierInput(): string | undefined;
    private _policy;
    get policy(): ResiliencehubResiliencyPolicyPolicyOutputReference;
    putPolicy(value: ResiliencehubResiliencyPolicyPolicy): void;
    resetPolicy(): void;
    get policyInput(): cdktf.IResolvable | ResiliencehubResiliencyPolicyPolicy | undefined;
    private _timeouts;
    get timeouts(): ResiliencehubResiliencyPolicyTimeoutsOutputReference;
    putTimeouts(value: ResiliencehubResiliencyPolicyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ResiliencehubResiliencyPolicyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
