/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EksAddonConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#addon_name EksAddon#addon_name}
    */
    readonly addonName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#addon_version EksAddon#addon_version}
    */
    readonly addonVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#cluster_name EksAddon#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#configuration_values EksAddon#configuration_values}
    */
    readonly configurationValues?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#id EksAddon#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#preserve EksAddon#preserve}
    */
    readonly preserve?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#resolve_conflicts EksAddon#resolve_conflicts}
    */
    readonly resolveConflicts?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#resolve_conflicts_on_create EksAddon#resolve_conflicts_on_create}
    */
    readonly resolveConflictsOnCreate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#resolve_conflicts_on_update EksAddon#resolve_conflicts_on_update}
    */
    readonly resolveConflictsOnUpdate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#service_account_role_arn EksAddon#service_account_role_arn}
    */
    readonly serviceAccountRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#tags EksAddon#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#tags_all EksAddon#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * pod_identity_association block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#pod_identity_association EksAddon#pod_identity_association}
    */
    readonly podIdentityAssociation?: EksAddonPodIdentityAssociation[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#timeouts EksAddon#timeouts}
    */
    readonly timeouts?: EksAddonTimeouts;
}
export interface EksAddonPodIdentityAssociation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#role_arn EksAddon#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#service_account EksAddon#service_account}
    */
    readonly serviceAccount: string;
}
export declare function eksAddonPodIdentityAssociationToTerraform(struct?: EksAddonPodIdentityAssociation | cdktf.IResolvable): any;
export declare function eksAddonPodIdentityAssociationToHclTerraform(struct?: EksAddonPodIdentityAssociation | cdktf.IResolvable): any;
export declare class EksAddonPodIdentityAssociationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EksAddonPodIdentityAssociation | cdktf.IResolvable | undefined;
    set internalValue(value: EksAddonPodIdentityAssociation | cdktf.IResolvable | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _serviceAccount?;
    get serviceAccount(): string;
    set serviceAccount(value: string);
    get serviceAccountInput(): string | undefined;
}
export declare class EksAddonPodIdentityAssociationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EksAddonPodIdentityAssociation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EksAddonPodIdentityAssociationOutputReference;
}
export interface EksAddonTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#create EksAddon#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#delete EksAddon#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#update EksAddon#update}
    */
    readonly update?: string;
}
export declare function eksAddonTimeoutsToTerraform(struct?: EksAddonTimeouts | cdktf.IResolvable): any;
export declare function eksAddonTimeoutsToHclTerraform(struct?: EksAddonTimeouts | cdktf.IResolvable): any;
export declare class EksAddonTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksAddonTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EksAddonTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon aws_eks_addon}
*/
export declare class EksAddon extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_eks_addon";
    /**
    * Generates CDKTF code for importing a EksAddon resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EksAddon to import
    * @param importFromId The id of the existing EksAddon that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EksAddon to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_addon aws_eks_addon} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksAddonConfig
    */
    constructor(scope: Construct, id: string, config: EksAddonConfig);
    private _addonName?;
    get addonName(): string;
    set addonName(value: string);
    get addonNameInput(): string | undefined;
    private _addonVersion?;
    get addonVersion(): string;
    set addonVersion(value: string);
    resetAddonVersion(): void;
    get addonVersionInput(): string | undefined;
    get arn(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    private _configurationValues?;
    get configurationValues(): string;
    set configurationValues(value: string);
    resetConfigurationValues(): void;
    get configurationValuesInput(): string | undefined;
    get createdAt(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get modifiedAt(): string;
    private _preserve?;
    get preserve(): boolean | cdktf.IResolvable;
    set preserve(value: boolean | cdktf.IResolvable);
    resetPreserve(): void;
    get preserveInput(): boolean | cdktf.IResolvable | undefined;
    private _resolveConflicts?;
    get resolveConflicts(): string;
    set resolveConflicts(value: string);
    resetResolveConflicts(): void;
    get resolveConflictsInput(): string | undefined;
    private _resolveConflictsOnCreate?;
    get resolveConflictsOnCreate(): string;
    set resolveConflictsOnCreate(value: string);
    resetResolveConflictsOnCreate(): void;
    get resolveConflictsOnCreateInput(): string | undefined;
    private _resolveConflictsOnUpdate?;
    get resolveConflictsOnUpdate(): string;
    set resolveConflictsOnUpdate(value: string);
    resetResolveConflictsOnUpdate(): void;
    get resolveConflictsOnUpdateInput(): string | undefined;
    private _serviceAccountRoleArn?;
    get serviceAccountRoleArn(): string;
    set serviceAccountRoleArn(value: string);
    resetServiceAccountRoleArn(): void;
    get serviceAccountRoleArnInput(): string | undefined;
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
    private _podIdentityAssociation;
    get podIdentityAssociation(): EksAddonPodIdentityAssociationList;
    putPodIdentityAssociation(value: EksAddonPodIdentityAssociation[] | cdktf.IResolvable): void;
    resetPodIdentityAssociation(): void;
    get podIdentityAssociationInput(): cdktf.IResolvable | EksAddonPodIdentityAssociation[] | undefined;
    private _timeouts;
    get timeouts(): EksAddonTimeoutsOutputReference;
    putTimeouts(value: EksAddonTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EksAddonTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
