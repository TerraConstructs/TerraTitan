/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmincidentsReplicationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_replication_set#id SsmincidentsReplicationSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_replication_set#tags SsmincidentsReplicationSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_replication_set#tags_all SsmincidentsReplicationSet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * region block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_replication_set#region SsmincidentsReplicationSet#region}
    */
    readonly region: SsmincidentsReplicationSetRegion[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_replication_set#timeouts SsmincidentsReplicationSet#timeouts}
    */
    readonly timeouts?: SsmincidentsReplicationSetTimeouts;
}
export interface SsmincidentsReplicationSetRegion {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_replication_set#kms_key_arn SsmincidentsReplicationSet#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_replication_set#name SsmincidentsReplicationSet#name}
    */
    readonly name: string;
}
export declare function ssmincidentsReplicationSetRegionToTerraform(struct?: SsmincidentsReplicationSetRegion | cdktf.IResolvable): any;
export declare function ssmincidentsReplicationSetRegionToHclTerraform(struct?: SsmincidentsReplicationSetRegion | cdktf.IResolvable): any;
export declare class SsmincidentsReplicationSetRegionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmincidentsReplicationSetRegion | cdktf.IResolvable | undefined;
    set internalValue(value: SsmincidentsReplicationSetRegion | cdktf.IResolvable | undefined);
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get status(): string;
    get statusMessage(): string;
}
export declare class SsmincidentsReplicationSetRegionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmincidentsReplicationSetRegion[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmincidentsReplicationSetRegionOutputReference;
}
export interface SsmincidentsReplicationSetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_replication_set#create SsmincidentsReplicationSet#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_replication_set#delete SsmincidentsReplicationSet#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_replication_set#update SsmincidentsReplicationSet#update}
    */
    readonly update?: string;
}
export declare function ssmincidentsReplicationSetTimeoutsToTerraform(struct?: SsmincidentsReplicationSetTimeouts | cdktf.IResolvable): any;
export declare function ssmincidentsReplicationSetTimeoutsToHclTerraform(struct?: SsmincidentsReplicationSetTimeouts | cdktf.IResolvable): any;
export declare class SsmincidentsReplicationSetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmincidentsReplicationSetTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SsmincidentsReplicationSetTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_replication_set aws_ssmincidents_replication_set}
*/
export declare class SsmincidentsReplicationSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssmincidents_replication_set";
    /**
    * Generates CDKTF code for importing a SsmincidentsReplicationSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsmincidentsReplicationSet to import
    * @param importFromId The id of the existing SsmincidentsReplicationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_replication_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsmincidentsReplicationSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_replication_set aws_ssmincidents_replication_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmincidentsReplicationSetConfig
    */
    constructor(scope: Construct, id: string, config: SsmincidentsReplicationSetConfig);
    get arn(): string;
    get createdBy(): string;
    get deletionProtected(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastModifiedBy(): string;
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
    private _region;
    get region(): SsmincidentsReplicationSetRegionList;
    putRegion(value: SsmincidentsReplicationSetRegion[] | cdktf.IResolvable): void;
    get regionInput(): cdktf.IResolvable | SsmincidentsReplicationSetRegion[] | undefined;
    private _timeouts;
    get timeouts(): SsmincidentsReplicationSetTimeoutsOutputReference;
    putTimeouts(value: SsmincidentsReplicationSetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SsmincidentsReplicationSetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
