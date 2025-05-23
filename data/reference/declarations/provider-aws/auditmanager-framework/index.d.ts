/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AuditmanagerFrameworkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework#compliance_type AuditmanagerFramework#compliance_type}
    */
    readonly complianceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework#description AuditmanagerFramework#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework#name AuditmanagerFramework#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework#tags AuditmanagerFramework#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * control_sets block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework#control_sets AuditmanagerFramework#control_sets}
    */
    readonly controlSets?: AuditmanagerFrameworkControlSets[] | cdktf.IResolvable;
}
export interface AuditmanagerFrameworkControlSetsControls {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework#id AuditmanagerFramework#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function auditmanagerFrameworkControlSetsControlsToTerraform(struct?: AuditmanagerFrameworkControlSetsControls | cdktf.IResolvable): any;
export declare function auditmanagerFrameworkControlSetsControlsToHclTerraform(struct?: AuditmanagerFrameworkControlSetsControls | cdktf.IResolvable): any;
export declare class AuditmanagerFrameworkControlSetsControlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AuditmanagerFrameworkControlSetsControls | cdktf.IResolvable | undefined;
    set internalValue(value: AuditmanagerFrameworkControlSetsControls | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
}
export declare class AuditmanagerFrameworkControlSetsControlsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AuditmanagerFrameworkControlSetsControls[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AuditmanagerFrameworkControlSetsControlsOutputReference;
}
export interface AuditmanagerFrameworkControlSets {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework#name AuditmanagerFramework#name}
    */
    readonly name: string;
    /**
    * controls block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework#controls AuditmanagerFramework#controls}
    */
    readonly controls?: AuditmanagerFrameworkControlSetsControls[] | cdktf.IResolvable;
}
export declare function auditmanagerFrameworkControlSetsToTerraform(struct?: AuditmanagerFrameworkControlSets | cdktf.IResolvable): any;
export declare function auditmanagerFrameworkControlSetsToHclTerraform(struct?: AuditmanagerFrameworkControlSets | cdktf.IResolvable): any;
export declare class AuditmanagerFrameworkControlSetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AuditmanagerFrameworkControlSets | cdktf.IResolvable | undefined;
    set internalValue(value: AuditmanagerFrameworkControlSets | cdktf.IResolvable | undefined);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _controls;
    get controls(): AuditmanagerFrameworkControlSetsControlsList;
    putControls(value: AuditmanagerFrameworkControlSetsControls[] | cdktf.IResolvable): void;
    resetControls(): void;
    get controlsInput(): cdktf.IResolvable | AuditmanagerFrameworkControlSetsControls[] | undefined;
}
export declare class AuditmanagerFrameworkControlSetsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AuditmanagerFrameworkControlSets[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AuditmanagerFrameworkControlSetsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework aws_auditmanager_framework}
*/
export declare class AuditmanagerFramework extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_auditmanager_framework";
    /**
    * Generates CDKTF code for importing a AuditmanagerFramework resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AuditmanagerFramework to import
    * @param importFromId The id of the existing AuditmanagerFramework that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AuditmanagerFramework to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework aws_auditmanager_framework} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AuditmanagerFrameworkConfig
    */
    constructor(scope: Construct, id: string, config: AuditmanagerFrameworkConfig);
    get arn(): string;
    private _complianceType?;
    get complianceType(): string;
    set complianceType(value: string);
    resetComplianceType(): void;
    get complianceTypeInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get frameworkType(): string;
    get id(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _controlSets;
    get controlSets(): AuditmanagerFrameworkControlSetsList;
    putControlSets(value: AuditmanagerFrameworkControlSets[] | cdktf.IResolvable): void;
    resetControlSets(): void;
    get controlSetsInput(): cdktf.IResolvable | AuditmanagerFrameworkControlSets[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
