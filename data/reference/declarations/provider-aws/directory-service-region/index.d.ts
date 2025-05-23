/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DirectoryServiceRegionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region#desired_number_of_domain_controllers DirectoryServiceRegion#desired_number_of_domain_controllers}
    */
    readonly desiredNumberOfDomainControllers?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region#directory_id DirectoryServiceRegion#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region#id DirectoryServiceRegion#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region#region_name DirectoryServiceRegion#region_name}
    */
    readonly regionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region#tags DirectoryServiceRegion#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region#tags_all DirectoryServiceRegion#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region#timeouts DirectoryServiceRegion#timeouts}
    */
    readonly timeouts?: DirectoryServiceRegionTimeouts;
    /**
    * vpc_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region#vpc_settings DirectoryServiceRegion#vpc_settings}
    */
    readonly vpcSettings: DirectoryServiceRegionVpcSettings;
}
export interface DirectoryServiceRegionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region#create DirectoryServiceRegion#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region#delete DirectoryServiceRegion#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region#update DirectoryServiceRegion#update}
    */
    readonly update?: string;
}
export declare function directoryServiceRegionTimeoutsToTerraform(struct?: DirectoryServiceRegionTimeouts | cdktf.IResolvable): any;
export declare function directoryServiceRegionTimeoutsToHclTerraform(struct?: DirectoryServiceRegionTimeouts | cdktf.IResolvable): any;
export declare class DirectoryServiceRegionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DirectoryServiceRegionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DirectoryServiceRegionTimeouts | cdktf.IResolvable | undefined);
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
export interface DirectoryServiceRegionVpcSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region#subnet_ids DirectoryServiceRegion#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region#vpc_id DirectoryServiceRegion#vpc_id}
    */
    readonly vpcId: string;
}
export declare function directoryServiceRegionVpcSettingsToTerraform(struct?: DirectoryServiceRegionVpcSettingsOutputReference | DirectoryServiceRegionVpcSettings): any;
export declare function directoryServiceRegionVpcSettingsToHclTerraform(struct?: DirectoryServiceRegionVpcSettingsOutputReference | DirectoryServiceRegionVpcSettings): any;
export declare class DirectoryServiceRegionVpcSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DirectoryServiceRegionVpcSettings | undefined;
    set internalValue(value: DirectoryServiceRegionVpcSettings | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region aws_directory_service_region}
*/
export declare class DirectoryServiceRegion extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_directory_service_region";
    /**
    * Generates CDKTF code for importing a DirectoryServiceRegion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DirectoryServiceRegion to import
    * @param importFromId The id of the existing DirectoryServiceRegion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DirectoryServiceRegion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_region aws_directory_service_region} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DirectoryServiceRegionConfig
    */
    constructor(scope: Construct, id: string, config: DirectoryServiceRegionConfig);
    private _desiredNumberOfDomainControllers?;
    get desiredNumberOfDomainControllers(): number;
    set desiredNumberOfDomainControllers(value: number);
    resetDesiredNumberOfDomainControllers(): void;
    get desiredNumberOfDomainControllersInput(): number | undefined;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    get directoryIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _regionName?;
    get regionName(): string;
    set regionName(value: string);
    get regionNameInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): DirectoryServiceRegionTimeoutsOutputReference;
    putTimeouts(value: DirectoryServiceRegionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DirectoryServiceRegionTimeouts | undefined;
    private _vpcSettings;
    get vpcSettings(): DirectoryServiceRegionVpcSettingsOutputReference;
    putVpcSettings(value: DirectoryServiceRegionVpcSettings): void;
    get vpcSettingsInput(): DirectoryServiceRegionVpcSettings | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
