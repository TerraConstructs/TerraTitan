/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LocationTrackerAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_tracker_association#consumer_arn LocationTrackerAssociation#consumer_arn}
    */
    readonly consumerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_tracker_association#id LocationTrackerAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_tracker_association#tracker_name LocationTrackerAssociation#tracker_name}
    */
    readonly trackerName: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_tracker_association#timeouts LocationTrackerAssociation#timeouts}
    */
    readonly timeouts?: LocationTrackerAssociationTimeouts;
}
export interface LocationTrackerAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_tracker_association#create LocationTrackerAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_tracker_association#delete LocationTrackerAssociation#delete}
    */
    readonly delete?: string;
}
export declare function locationTrackerAssociationTimeoutsToTerraform(struct?: LocationTrackerAssociationTimeouts | cdktf.IResolvable): any;
export declare function locationTrackerAssociationTimeoutsToHclTerraform(struct?: LocationTrackerAssociationTimeouts | cdktf.IResolvable): any;
export declare class LocationTrackerAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LocationTrackerAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LocationTrackerAssociationTimeouts | cdktf.IResolvable | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_tracker_association aws_location_tracker_association}
*/
export declare class LocationTrackerAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_location_tracker_association";
    /**
    * Generates CDKTF code for importing a LocationTrackerAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LocationTrackerAssociation to import
    * @param importFromId The id of the existing LocationTrackerAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_tracker_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LocationTrackerAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_tracker_association aws_location_tracker_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LocationTrackerAssociationConfig
    */
    constructor(scope: Construct, id: string, config: LocationTrackerAssociationConfig);
    private _consumerArn?;
    get consumerArn(): string;
    set consumerArn(value: string);
    get consumerArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _trackerName?;
    get trackerName(): string;
    set trackerName(value: string);
    get trackerNameInput(): string | undefined;
    private _timeouts;
    get timeouts(): LocationTrackerAssociationTimeoutsOutputReference;
    putTimeouts(value: LocationTrackerAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LocationTrackerAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
