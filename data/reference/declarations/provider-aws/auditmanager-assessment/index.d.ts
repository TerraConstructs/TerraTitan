/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AuditmanagerAssessmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#description AuditmanagerAssessment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}
    */
    readonly frameworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#name AuditmanagerAssessment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#roles AuditmanagerAssessment#roles}
    */
    readonly roles: AuditmanagerAssessmentRoles[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#tags AuditmanagerAssessment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * assessment_reports_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#assessment_reports_destination AuditmanagerAssessment#assessment_reports_destination}
    */
    readonly assessmentReportsDestination?: AuditmanagerAssessmentAssessmentReportsDestination[] | cdktf.IResolvable;
    /**
    * scope block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#scope AuditmanagerAssessment#scope}
    */
    readonly scope?: AuditmanagerAssessmentScope[] | cdktf.IResolvable;
}
export interface AuditmanagerAssessmentRoles {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#role_arn AuditmanagerAssessment#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#role_type AuditmanagerAssessment#role_type}
    */
    readonly roleType: string;
}
export declare function auditmanagerAssessmentRolesToTerraform(struct?: AuditmanagerAssessmentRoles | cdktf.IResolvable): any;
export declare function auditmanagerAssessmentRolesToHclTerraform(struct?: AuditmanagerAssessmentRoles | cdktf.IResolvable): any;
export declare class AuditmanagerAssessmentRolesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AuditmanagerAssessmentRoles | cdktf.IResolvable | undefined;
    set internalValue(value: AuditmanagerAssessmentRoles | cdktf.IResolvable | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _roleType?;
    get roleType(): string;
    set roleType(value: string);
    get roleTypeInput(): string | undefined;
}
export declare class AuditmanagerAssessmentRolesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AuditmanagerAssessmentRoles[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AuditmanagerAssessmentRolesOutputReference;
}
export interface AuditmanagerAssessmentRolesAll {
}
export declare function auditmanagerAssessmentRolesAllToTerraform(struct?: AuditmanagerAssessmentRolesAll): any;
export declare function auditmanagerAssessmentRolesAllToHclTerraform(struct?: AuditmanagerAssessmentRolesAll): any;
export declare class AuditmanagerAssessmentRolesAllOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AuditmanagerAssessmentRolesAll | undefined;
    set internalValue(value: AuditmanagerAssessmentRolesAll | undefined);
    get roleArn(): string;
    get roleType(): string;
}
export declare class AuditmanagerAssessmentRolesAllList extends cdktf.ComplexList {
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
    get(index: number): AuditmanagerAssessmentRolesAllOutputReference;
}
export interface AuditmanagerAssessmentAssessmentReportsDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#destination AuditmanagerAssessment#destination}
    */
    readonly destination: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#destination_type AuditmanagerAssessment#destination_type}
    */
    readonly destinationType: string;
}
export declare function auditmanagerAssessmentAssessmentReportsDestinationToTerraform(struct?: AuditmanagerAssessmentAssessmentReportsDestination | cdktf.IResolvable): any;
export declare function auditmanagerAssessmentAssessmentReportsDestinationToHclTerraform(struct?: AuditmanagerAssessmentAssessmentReportsDestination | cdktf.IResolvable): any;
export declare class AuditmanagerAssessmentAssessmentReportsDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AuditmanagerAssessmentAssessmentReportsDestination | cdktf.IResolvable | undefined;
    set internalValue(value: AuditmanagerAssessmentAssessmentReportsDestination | cdktf.IResolvable | undefined);
    private _destination?;
    get destination(): string;
    set destination(value: string);
    get destinationInput(): string | undefined;
    private _destinationType?;
    get destinationType(): string;
    set destinationType(value: string);
    get destinationTypeInput(): string | undefined;
}
export declare class AuditmanagerAssessmentAssessmentReportsDestinationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AuditmanagerAssessmentAssessmentReportsDestination[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AuditmanagerAssessmentAssessmentReportsDestinationOutputReference;
}
export interface AuditmanagerAssessmentScopeAwsAccounts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#id AuditmanagerAssessment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function auditmanagerAssessmentScopeAwsAccountsToTerraform(struct?: AuditmanagerAssessmentScopeAwsAccounts | cdktf.IResolvable): any;
export declare function auditmanagerAssessmentScopeAwsAccountsToHclTerraform(struct?: AuditmanagerAssessmentScopeAwsAccounts | cdktf.IResolvable): any;
export declare class AuditmanagerAssessmentScopeAwsAccountsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AuditmanagerAssessmentScopeAwsAccounts | cdktf.IResolvable | undefined;
    set internalValue(value: AuditmanagerAssessmentScopeAwsAccounts | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
}
export declare class AuditmanagerAssessmentScopeAwsAccountsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AuditmanagerAssessmentScopeAwsAccounts[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AuditmanagerAssessmentScopeAwsAccountsOutputReference;
}
export interface AuditmanagerAssessmentScopeAwsServices {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#service_name AuditmanagerAssessment#service_name}
    */
    readonly serviceName: string;
}
export declare function auditmanagerAssessmentScopeAwsServicesToTerraform(struct?: AuditmanagerAssessmentScopeAwsServices | cdktf.IResolvable): any;
export declare function auditmanagerAssessmentScopeAwsServicesToHclTerraform(struct?: AuditmanagerAssessmentScopeAwsServices | cdktf.IResolvable): any;
export declare class AuditmanagerAssessmentScopeAwsServicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AuditmanagerAssessmentScopeAwsServices | cdktf.IResolvable | undefined;
    set internalValue(value: AuditmanagerAssessmentScopeAwsServices | cdktf.IResolvable | undefined);
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string | undefined;
}
export declare class AuditmanagerAssessmentScopeAwsServicesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AuditmanagerAssessmentScopeAwsServices[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AuditmanagerAssessmentScopeAwsServicesOutputReference;
}
export interface AuditmanagerAssessmentScope {
    /**
    * aws_accounts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#aws_accounts AuditmanagerAssessment#aws_accounts}
    */
    readonly awsAccounts?: AuditmanagerAssessmentScopeAwsAccounts[] | cdktf.IResolvable;
    /**
    * aws_services block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#aws_services AuditmanagerAssessment#aws_services}
    */
    readonly awsServices?: AuditmanagerAssessmentScopeAwsServices[] | cdktf.IResolvable;
}
export declare function auditmanagerAssessmentScopeToTerraform(struct?: AuditmanagerAssessmentScope | cdktf.IResolvable): any;
export declare function auditmanagerAssessmentScopeToHclTerraform(struct?: AuditmanagerAssessmentScope | cdktf.IResolvable): any;
export declare class AuditmanagerAssessmentScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AuditmanagerAssessmentScope | cdktf.IResolvable | undefined;
    set internalValue(value: AuditmanagerAssessmentScope | cdktf.IResolvable | undefined);
    private _awsAccounts;
    get awsAccounts(): AuditmanagerAssessmentScopeAwsAccountsList;
    putAwsAccounts(value: AuditmanagerAssessmentScopeAwsAccounts[] | cdktf.IResolvable): void;
    resetAwsAccounts(): void;
    get awsAccountsInput(): cdktf.IResolvable | AuditmanagerAssessmentScopeAwsAccounts[] | undefined;
    private _awsServices;
    get awsServices(): AuditmanagerAssessmentScopeAwsServicesList;
    putAwsServices(value: AuditmanagerAssessmentScopeAwsServices[] | cdktf.IResolvable): void;
    resetAwsServices(): void;
    get awsServicesInput(): cdktf.IResolvable | AuditmanagerAssessmentScopeAwsServices[] | undefined;
}
export declare class AuditmanagerAssessmentScopeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AuditmanagerAssessmentScope[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AuditmanagerAssessmentScopeOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment aws_auditmanager_assessment}
*/
export declare class AuditmanagerAssessment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_auditmanager_assessment";
    /**
    * Generates CDKTF code for importing a AuditmanagerAssessment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AuditmanagerAssessment to import
    * @param importFromId The id of the existing AuditmanagerAssessment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AuditmanagerAssessment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment aws_auditmanager_assessment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AuditmanagerAssessmentConfig
    */
    constructor(scope: Construct, id: string, config: AuditmanagerAssessmentConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _frameworkId?;
    get frameworkId(): string;
    set frameworkId(value: string);
    get frameworkIdInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _roles;
    get roles(): AuditmanagerAssessmentRolesList;
    putRoles(value: AuditmanagerAssessmentRoles[] | cdktf.IResolvable): void;
    get rolesInput(): cdktf.IResolvable | AuditmanagerAssessmentRoles[] | undefined;
    private _rolesAll;
    get rolesAll(): AuditmanagerAssessmentRolesAllList;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _assessmentReportsDestination;
    get assessmentReportsDestination(): AuditmanagerAssessmentAssessmentReportsDestinationList;
    putAssessmentReportsDestination(value: AuditmanagerAssessmentAssessmentReportsDestination[] | cdktf.IResolvable): void;
    resetAssessmentReportsDestination(): void;
    get assessmentReportsDestinationInput(): cdktf.IResolvable | AuditmanagerAssessmentAssessmentReportsDestination[] | undefined;
    private _scope;
    get scope(): AuditmanagerAssessmentScopeList;
    putScope(value: AuditmanagerAssessmentScope[] | cdktf.IResolvable): void;
    resetScope(): void;
    get scopeInput(): cdktf.IResolvable | AuditmanagerAssessmentScope[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
