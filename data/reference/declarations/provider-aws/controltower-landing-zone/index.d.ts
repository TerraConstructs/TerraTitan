/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ControltowerLandingZoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/controltower_landing_zone#id ControltowerLandingZone#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/controltower_landing_zone#manifest_json ControltowerLandingZone#manifest_json}
    */
    readonly manifestJson: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/controltower_landing_zone#tags ControltowerLandingZone#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/controltower_landing_zone#tags_all ControltowerLandingZone#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/controltower_landing_zone#version ControltowerLandingZone#version}
    */
    readonly version: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/controltower_landing_zone#timeouts ControltowerLandingZone#timeouts}
    */
    readonly timeouts?: ControltowerLandingZoneTimeouts;
}
export interface ControltowerLandingZoneDriftStatus {
}
export declare function controltowerLandingZoneDriftStatusToTerraform(struct?: ControltowerLandingZoneDriftStatus): any;
export declare function controltowerLandingZoneDriftStatusToHclTerraform(struct?: ControltowerLandingZoneDriftStatus): any;
export declare class ControltowerLandingZoneDriftStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ControltowerLandingZoneDriftStatus | undefined;
    set internalValue(value: ControltowerLandingZoneDriftStatus | undefined);
    get status(): string;
}
export declare class ControltowerLandingZoneDriftStatusList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ControltowerLandingZoneDriftStatusOutputReference;
}
export interface ControltowerLandingZoneTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/controltower_landing_zone#create ControltowerLandingZone#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/controltower_landing_zone#delete ControltowerLandingZone#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/controltower_landing_zone#update ControltowerLandingZone#update}
    */
    readonly update?: string;
}
export declare function controltowerLandingZoneTimeoutsToTerraform(struct?: ControltowerLandingZoneTimeouts | cdktf.IResolvable): any;
export declare function controltowerLandingZoneTimeoutsToHclTerraform(struct?: ControltowerLandingZoneTimeouts | cdktf.IResolvable): any;
export declare class ControltowerLandingZoneTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ControltowerLandingZoneTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ControltowerLandingZoneTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/controltower_landing_zone aws_controltower_landing_zone}
*/
export declare class ControltowerLandingZone extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_controltower_landing_zone";
    /**
    * Generates CDKTF code for importing a ControltowerLandingZone resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ControltowerLandingZone to import
    * @param importFromId The id of the existing ControltowerLandingZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/controltower_landing_zone#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ControltowerLandingZone to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/controltower_landing_zone aws_controltower_landing_zone} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ControltowerLandingZoneConfig
    */
    constructor(scope: Construct, id: string, config: ControltowerLandingZoneConfig);
    get arn(): string;
    private _driftStatus;
    get driftStatus(): ControltowerLandingZoneDriftStatusList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get latestAvailableVersion(): string;
    private _manifestJson?;
    get manifestJson(): string;
    set manifestJson(value: string);
    get manifestJsonInput(): string | undefined;
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
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string | undefined;
    private _timeouts;
    get timeouts(): ControltowerLandingZoneTimeoutsOutputReference;
    putTimeouts(value: ControltowerLandingZoneTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ControltowerLandingZoneTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
