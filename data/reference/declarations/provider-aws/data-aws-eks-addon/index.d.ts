/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEksAddonConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/eks_addon#addon_name DataAwsEksAddon#addon_name}
    */
    readonly addonName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/eks_addon#cluster_name DataAwsEksAddon#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/eks_addon#id DataAwsEksAddon#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/eks_addon#tags DataAwsEksAddon#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsEksAddonPodIdentityAssociation {
}
export declare function dataAwsEksAddonPodIdentityAssociationToTerraform(struct?: DataAwsEksAddonPodIdentityAssociation): any;
export declare function dataAwsEksAddonPodIdentityAssociationToHclTerraform(struct?: DataAwsEksAddonPodIdentityAssociation): any;
export declare class DataAwsEksAddonPodIdentityAssociationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksAddonPodIdentityAssociation | undefined;
    set internalValue(value: DataAwsEksAddonPodIdentityAssociation | undefined);
    get roleArn(): string;
    get serviceAccount(): string;
}
export declare class DataAwsEksAddonPodIdentityAssociationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksAddonPodIdentityAssociationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/eks_addon aws_eks_addon}
*/
export declare class DataAwsEksAddon extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_eks_addon";
    /**
    * Generates CDKTF code for importing a DataAwsEksAddon resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEksAddon to import
    * @param importFromId The id of the existing DataAwsEksAddon that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/eks_addon#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEksAddon to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/eks_addon aws_eks_addon} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksAddonConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEksAddonConfig);
    private _addonName?;
    get addonName(): string;
    set addonName(value: string);
    get addonNameInput(): string | undefined;
    get addonVersion(): string;
    get arn(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    get configurationValues(): string;
    get createdAt(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get modifiedAt(): string;
    private _podIdentityAssociation;
    get podIdentityAssociation(): DataAwsEksAddonPodIdentityAssociationList;
    get serviceAccountRoleArn(): string;
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
