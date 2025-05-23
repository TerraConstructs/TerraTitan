/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSsmincidentsReplicationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmincidents_replication_set#id DataAwsSsmincidentsReplicationSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmincidents_replication_set#tags DataAwsSsmincidentsReplicationSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsSsmincidentsReplicationSetRegion {
}
export declare function dataAwsSsmincidentsReplicationSetRegionToTerraform(struct?: DataAwsSsmincidentsReplicationSetRegion): any;
export declare function dataAwsSsmincidentsReplicationSetRegionToHclTerraform(struct?: DataAwsSsmincidentsReplicationSetRegion): any;
export declare class DataAwsSsmincidentsReplicationSetRegionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmincidentsReplicationSetRegion | undefined;
    set internalValue(value: DataAwsSsmincidentsReplicationSetRegion | undefined);
    get kmsKeyArn(): string;
    get name(): string;
    get status(): string;
    get statusMessage(): string;
}
export declare class DataAwsSsmincidentsReplicationSetRegionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmincidentsReplicationSetRegionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmincidents_replication_set aws_ssmincidents_replication_set}
*/
export declare class DataAwsSsmincidentsReplicationSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ssmincidents_replication_set";
    /**
    * Generates CDKTF code for importing a DataAwsSsmincidentsReplicationSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSsmincidentsReplicationSet to import
    * @param importFromId The id of the existing DataAwsSsmincidentsReplicationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmincidents_replication_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSsmincidentsReplicationSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmincidents_replication_set aws_ssmincidents_replication_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmincidentsReplicationSetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsSsmincidentsReplicationSetConfig);
    get arn(): string;
    get createdBy(): string;
    get deletionProtected(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastModifiedBy(): string;
    private _region;
    get region(): DataAwsSsmincidentsReplicationSetRegionList;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
