/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FinspaceKxDataviewConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#auto_update FinspaceKxDataview#auto_update}
    */
    readonly autoUpdate: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#availability_zone_id FinspaceKxDataview#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#az_mode FinspaceKxDataview#az_mode}
    */
    readonly azMode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#changeset_id FinspaceKxDataview#changeset_id}
    */
    readonly changesetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#database_name FinspaceKxDataview#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#description FinspaceKxDataview#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#environment_id FinspaceKxDataview#environment_id}
    */
    readonly environmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#id FinspaceKxDataview#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#name FinspaceKxDataview#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#read_write FinspaceKxDataview#read_write}
    */
    readonly readWrite?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#tags FinspaceKxDataview#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#tags_all FinspaceKxDataview#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * segment_configurations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#segment_configurations FinspaceKxDataview#segment_configurations}
    */
    readonly segmentConfigurations?: FinspaceKxDataviewSegmentConfigurations[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#timeouts FinspaceKxDataview#timeouts}
    */
    readonly timeouts?: FinspaceKxDataviewTimeouts;
}
export interface FinspaceKxDataviewSegmentConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#db_paths FinspaceKxDataview#db_paths}
    */
    readonly dbPaths: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#on_demand FinspaceKxDataview#on_demand}
    */
    readonly onDemand?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#volume_name FinspaceKxDataview#volume_name}
    */
    readonly volumeName: string;
}
export declare function finspaceKxDataviewSegmentConfigurationsToTerraform(struct?: FinspaceKxDataviewSegmentConfigurations | cdktf.IResolvable): any;
export declare function finspaceKxDataviewSegmentConfigurationsToHclTerraform(struct?: FinspaceKxDataviewSegmentConfigurations | cdktf.IResolvable): any;
export declare class FinspaceKxDataviewSegmentConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FinspaceKxDataviewSegmentConfigurations | cdktf.IResolvable | undefined;
    set internalValue(value: FinspaceKxDataviewSegmentConfigurations | cdktf.IResolvable | undefined);
    private _dbPaths?;
    get dbPaths(): string[];
    set dbPaths(value: string[]);
    get dbPathsInput(): string[] | undefined;
    private _onDemand?;
    get onDemand(): boolean | cdktf.IResolvable;
    set onDemand(value: boolean | cdktf.IResolvable);
    resetOnDemand(): void;
    get onDemandInput(): boolean | cdktf.IResolvable | undefined;
    private _volumeName?;
    get volumeName(): string;
    set volumeName(value: string);
    get volumeNameInput(): string | undefined;
}
export declare class FinspaceKxDataviewSegmentConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FinspaceKxDataviewSegmentConfigurations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FinspaceKxDataviewSegmentConfigurationsOutputReference;
}
export interface FinspaceKxDataviewTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#create FinspaceKxDataview#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#delete FinspaceKxDataview#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#update FinspaceKxDataview#update}
    */
    readonly update?: string;
}
export declare function finspaceKxDataviewTimeoutsToTerraform(struct?: FinspaceKxDataviewTimeouts | cdktf.IResolvable): any;
export declare function finspaceKxDataviewTimeoutsToHclTerraform(struct?: FinspaceKxDataviewTimeouts | cdktf.IResolvable): any;
export declare class FinspaceKxDataviewTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FinspaceKxDataviewTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FinspaceKxDataviewTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview aws_finspace_kx_dataview}
*/
export declare class FinspaceKxDataview extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_finspace_kx_dataview";
    /**
    * Generates CDKTF code for importing a FinspaceKxDataview resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FinspaceKxDataview to import
    * @param importFromId The id of the existing FinspaceKxDataview that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FinspaceKxDataview to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_dataview aws_finspace_kx_dataview} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FinspaceKxDataviewConfig
    */
    constructor(scope: Construct, id: string, config: FinspaceKxDataviewConfig);
    get arn(): string;
    private _autoUpdate?;
    get autoUpdate(): boolean | cdktf.IResolvable;
    set autoUpdate(value: boolean | cdktf.IResolvable);
    get autoUpdateInput(): boolean | cdktf.IResolvable | undefined;
    private _availabilityZoneId?;
    get availabilityZoneId(): string;
    set availabilityZoneId(value: string);
    resetAvailabilityZoneId(): void;
    get availabilityZoneIdInput(): string | undefined;
    private _azMode?;
    get azMode(): string;
    set azMode(value: string);
    get azModeInput(): string | undefined;
    private _changesetId?;
    get changesetId(): string;
    set changesetId(value: string);
    resetChangesetId(): void;
    get changesetIdInput(): string | undefined;
    get createdTimestamp(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _environmentId?;
    get environmentId(): string;
    set environmentId(value: string);
    get environmentIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastModifiedTimestamp(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _readWrite?;
    get readWrite(): boolean | cdktf.IResolvable;
    set readWrite(value: boolean | cdktf.IResolvable);
    resetReadWrite(): void;
    get readWriteInput(): boolean | cdktf.IResolvable | undefined;
    get status(): string;
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
    private _segmentConfigurations;
    get segmentConfigurations(): FinspaceKxDataviewSegmentConfigurationsList;
    putSegmentConfigurations(value: FinspaceKxDataviewSegmentConfigurations[] | cdktf.IResolvable): void;
    resetSegmentConfigurations(): void;
    get segmentConfigurationsInput(): cdktf.IResolvable | FinspaceKxDataviewSegmentConfigurations[] | undefined;
    private _timeouts;
    get timeouts(): FinspaceKxDataviewTimeoutsOutputReference;
    putTimeouts(value: FinspaceKxDataviewTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FinspaceKxDataviewTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
