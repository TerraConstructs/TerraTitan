/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EksFargateProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile#cluster_name EksFargateProfile#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile#fargate_profile_name EksFargateProfile#fargate_profile_name}
    */
    readonly fargateProfileName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile#id EksFargateProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile#pod_execution_role_arn EksFargateProfile#pod_execution_role_arn}
    */
    readonly podExecutionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile#subnet_ids EksFargateProfile#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile#tags EksFargateProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile#tags_all EksFargateProfile#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * selector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile#selector EksFargateProfile#selector}
    */
    readonly selector: EksFargateProfileSelector[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile#timeouts EksFargateProfile#timeouts}
    */
    readonly timeouts?: EksFargateProfileTimeouts;
}
export interface EksFargateProfileSelector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile#labels EksFargateProfile#labels}
    */
    readonly labels?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile#namespace EksFargateProfile#namespace}
    */
    readonly namespace: string;
}
export declare function eksFargateProfileSelectorToTerraform(struct?: EksFargateProfileSelector | cdktf.IResolvable): any;
export declare function eksFargateProfileSelectorToHclTerraform(struct?: EksFargateProfileSelector | cdktf.IResolvable): any;
export declare class EksFargateProfileSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EksFargateProfileSelector | cdktf.IResolvable | undefined;
    set internalValue(value: EksFargateProfileSelector | cdktf.IResolvable | undefined);
    private _labels?;
    get labels(): {
        [key: string]: string;
    };
    set labels(value: {
        [key: string]: string;
    });
    resetLabels(): void;
    get labelsInput(): {
        [key: string]: string;
    } | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
}
export declare class EksFargateProfileSelectorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EksFargateProfileSelector[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EksFargateProfileSelectorOutputReference;
}
export interface EksFargateProfileTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile#create EksFargateProfile#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile#delete EksFargateProfile#delete}
    */
    readonly delete?: string;
}
export declare function eksFargateProfileTimeoutsToTerraform(struct?: EksFargateProfileTimeouts | cdktf.IResolvable): any;
export declare function eksFargateProfileTimeoutsToHclTerraform(struct?: EksFargateProfileTimeouts | cdktf.IResolvable): any;
export declare class EksFargateProfileTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksFargateProfileTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EksFargateProfileTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile aws_eks_fargate_profile}
*/
export declare class EksFargateProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_eks_fargate_profile";
    /**
    * Generates CDKTF code for importing a EksFargateProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EksFargateProfile to import
    * @param importFromId The id of the existing EksFargateProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EksFargateProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_fargate_profile aws_eks_fargate_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksFargateProfileConfig
    */
    constructor(scope: Construct, id: string, config: EksFargateProfileConfig);
    get arn(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    private _fargateProfileName?;
    get fargateProfileName(): string;
    set fargateProfileName(value: string);
    get fargateProfileNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _podExecutionRoleArn?;
    get podExecutionRoleArn(): string;
    set podExecutionRoleArn(value: string);
    get podExecutionRoleArnInput(): string | undefined;
    get status(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
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
    private _selector;
    get selector(): EksFargateProfileSelectorList;
    putSelector(value: EksFargateProfileSelector[] | cdktf.IResolvable): void;
    get selectorInput(): cdktf.IResolvable | EksFargateProfileSelector[] | undefined;
    private _timeouts;
    get timeouts(): EksFargateProfileTimeoutsOutputReference;
    putTimeouts(value: EksFargateProfileTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EksFargateProfileTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
