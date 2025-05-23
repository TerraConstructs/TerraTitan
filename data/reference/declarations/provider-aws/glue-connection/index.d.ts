/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}
    */
    readonly connectionProperties?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}
    */
    readonly connectionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection#description GlueConnection#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection#id GlueConnection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}
    */
    readonly matchCriteria?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection#name GlueConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection#tags GlueConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection#tags_all GlueConnection#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * physical_connection_requirements block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection#physical_connection_requirements GlueConnection#physical_connection_requirements}
    */
    readonly physicalConnectionRequirements?: GlueConnectionPhysicalConnectionRequirements;
}
export interface GlueConnectionPhysicalConnectionRequirements {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}
    */
    readonly securityGroupIdList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}
    */
    readonly subnetId?: string;
}
export declare function glueConnectionPhysicalConnectionRequirementsToTerraform(struct?: GlueConnectionPhysicalConnectionRequirementsOutputReference | GlueConnectionPhysicalConnectionRequirements): any;
export declare function glueConnectionPhysicalConnectionRequirementsToHclTerraform(struct?: GlueConnectionPhysicalConnectionRequirementsOutputReference | GlueConnectionPhysicalConnectionRequirements): any;
export declare class GlueConnectionPhysicalConnectionRequirementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueConnectionPhysicalConnectionRequirements | undefined;
    set internalValue(value: GlueConnectionPhysicalConnectionRequirements | undefined);
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _securityGroupIdList?;
    get securityGroupIdList(): string[];
    set securityGroupIdList(value: string[]);
    resetSecurityGroupIdList(): void;
    get securityGroupIdListInput(): string[] | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection aws_glue_connection}
*/
export declare class GlueConnection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_connection";
    /**
    * Generates CDKTF code for importing a GlueConnection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueConnection to import
    * @param importFromId The id of the existing GlueConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueConnection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_connection aws_glue_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueConnectionConfig
    */
    constructor(scope: Construct, id: string, config: GlueConnectionConfig);
    get arn(): string;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _connectionProperties?;
    get connectionProperties(): {
        [key: string]: string;
    };
    set connectionProperties(value: {
        [key: string]: string;
    });
    resetConnectionProperties(): void;
    get connectionPropertiesInput(): {
        [key: string]: string;
    } | undefined;
    private _connectionType?;
    get connectionType(): string;
    set connectionType(value: string);
    resetConnectionType(): void;
    get connectionTypeInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _matchCriteria?;
    get matchCriteria(): string[];
    set matchCriteria(value: string[]);
    resetMatchCriteria(): void;
    get matchCriteriaInput(): string[] | undefined;
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
    private _physicalConnectionRequirements;
    get physicalConnectionRequirements(): GlueConnectionPhysicalConnectionRequirementsOutputReference;
    putPhysicalConnectionRequirements(value: GlueConnectionPhysicalConnectionRequirements): void;
    resetPhysicalConnectionRequirements(): void;
    get physicalConnectionRequirementsInput(): GlueConnectionPhysicalConnectionRequirements | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
