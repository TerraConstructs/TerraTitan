/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingTrafficSourceAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_traffic_source_attachment#autoscaling_group_name AutoscalingTrafficSourceAttachment#autoscaling_group_name}
    */
    readonly autoscalingGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_traffic_source_attachment#id AutoscalingTrafficSourceAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_traffic_source_attachment#timeouts AutoscalingTrafficSourceAttachment#timeouts}
    */
    readonly timeouts?: AutoscalingTrafficSourceAttachmentTimeouts;
    /**
    * traffic_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_traffic_source_attachment#traffic_source AutoscalingTrafficSourceAttachment#traffic_source}
    */
    readonly trafficSource?: AutoscalingTrafficSourceAttachmentTrafficSource;
}
export interface AutoscalingTrafficSourceAttachmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_traffic_source_attachment#create AutoscalingTrafficSourceAttachment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_traffic_source_attachment#delete AutoscalingTrafficSourceAttachment#delete}
    */
    readonly delete?: string;
}
export declare function autoscalingTrafficSourceAttachmentTimeoutsToTerraform(struct?: AutoscalingTrafficSourceAttachmentTimeouts | cdktf.IResolvable): any;
export declare function autoscalingTrafficSourceAttachmentTimeoutsToHclTerraform(struct?: AutoscalingTrafficSourceAttachmentTimeouts | cdktf.IResolvable): any;
export declare class AutoscalingTrafficSourceAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingTrafficSourceAttachmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingTrafficSourceAttachmentTimeouts | cdktf.IResolvable | undefined);
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
}
export interface AutoscalingTrafficSourceAttachmentTrafficSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_traffic_source_attachment#identifier AutoscalingTrafficSourceAttachment#identifier}
    */
    readonly identifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_traffic_source_attachment#type AutoscalingTrafficSourceAttachment#type}
    */
    readonly type: string;
}
export declare function autoscalingTrafficSourceAttachmentTrafficSourceToTerraform(struct?: AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference | AutoscalingTrafficSourceAttachmentTrafficSource): any;
export declare function autoscalingTrafficSourceAttachmentTrafficSourceToHclTerraform(struct?: AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference | AutoscalingTrafficSourceAttachmentTrafficSource): any;
export declare class AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingTrafficSourceAttachmentTrafficSource | undefined;
    set internalValue(value: AutoscalingTrafficSourceAttachmentTrafficSource | undefined);
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_traffic_source_attachment aws_autoscaling_traffic_source_attachment}
*/
export declare class AutoscalingTrafficSourceAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_autoscaling_traffic_source_attachment";
    /**
    * Generates CDKTF code for importing a AutoscalingTrafficSourceAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AutoscalingTrafficSourceAttachment to import
    * @param importFromId The id of the existing AutoscalingTrafficSourceAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_traffic_source_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AutoscalingTrafficSourceAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_traffic_source_attachment aws_autoscaling_traffic_source_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingTrafficSourceAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: AutoscalingTrafficSourceAttachmentConfig);
    private _autoscalingGroupName?;
    get autoscalingGroupName(): string;
    set autoscalingGroupName(value: string);
    get autoscalingGroupNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _timeouts;
    get timeouts(): AutoscalingTrafficSourceAttachmentTimeoutsOutputReference;
    putTimeouts(value: AutoscalingTrafficSourceAttachmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AutoscalingTrafficSourceAttachmentTimeouts | undefined;
    private _trafficSource;
    get trafficSource(): AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference;
    putTrafficSource(value: AutoscalingTrafficSourceAttachmentTrafficSource): void;
    resetTrafficSource(): void;
    get trafficSourceInput(): AutoscalingTrafficSourceAttachmentTrafficSource | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
