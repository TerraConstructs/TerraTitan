/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSecurityhubStandardsControlAssociationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/securityhub_standards_control_associations#security_control_id DataAwsSecurityhubStandardsControlAssociations#security_control_id}
    */
    readonly securityControlId: string;
}
export interface DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations {
}
export declare function dataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsToTerraform(struct?: DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations): any;
export declare function dataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsToHclTerraform(struct?: DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations): any;
export declare class DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations | undefined;
    set internalValue(value: DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations | undefined);
    get associationStatus(): string;
    get relatedRequirements(): string[];
    get securityControlArn(): string;
    get securityControlId(): string;
    get standardsArn(): string;
    get standardsControlDescription(): string;
    get standardsControlTitle(): string;
    get updatedAt(): string;
    get updatedReason(): string;
}
export declare class DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/securityhub_standards_control_associations aws_securityhub_standards_control_associations}
*/
export declare class DataAwsSecurityhubStandardsControlAssociations extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_securityhub_standards_control_associations";
    /**
    * Generates CDKTF code for importing a DataAwsSecurityhubStandardsControlAssociations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSecurityhubStandardsControlAssociations to import
    * @param importFromId The id of the existing DataAwsSecurityhubStandardsControlAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/securityhub_standards_control_associations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSecurityhubStandardsControlAssociations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/securityhub_standards_control_associations aws_securityhub_standards_control_associations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecurityhubStandardsControlAssociationsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSecurityhubStandardsControlAssociationsConfig);
    get id(): string;
    private _securityControlId?;
    get securityControlId(): string;
    set securityControlId(value: string);
    get securityControlIdInput(): string | undefined;
    private _standardsControlAssociations;
    get standardsControlAssociations(): DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
