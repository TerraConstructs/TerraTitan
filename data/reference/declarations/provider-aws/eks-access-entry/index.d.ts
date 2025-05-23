/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EksAccessEntryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_entry#cluster_name EksAccessEntry#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_entry#id EksAccessEntry#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_entry#kubernetes_groups EksAccessEntry#kubernetes_groups}
    */
    readonly kubernetesGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_entry#principal_arn EksAccessEntry#principal_arn}
    */
    readonly principalArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_entry#tags EksAccessEntry#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_entry#tags_all EksAccessEntry#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_entry#type EksAccessEntry#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_entry#user_name EksAccessEntry#user_name}
    */
    readonly userName?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_entry#timeouts EksAccessEntry#timeouts}
    */
    readonly timeouts?: EksAccessEntryTimeouts;
}
export interface EksAccessEntryTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_entry#create EksAccessEntry#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_entry#delete EksAccessEntry#delete}
    */
    readonly delete?: string;
}
export declare function eksAccessEntryTimeoutsToTerraform(struct?: EksAccessEntryTimeouts | cdktf.IResolvable): any;
export declare function eksAccessEntryTimeoutsToHclTerraform(struct?: EksAccessEntryTimeouts | cdktf.IResolvable): any;
export declare class EksAccessEntryTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksAccessEntryTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EksAccessEntryTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_entry aws_eks_access_entry}
*/
export declare class EksAccessEntry extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_eks_access_entry";
    /**
    * Generates CDKTF code for importing a EksAccessEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EksAccessEntry to import
    * @param importFromId The id of the existing EksAccessEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EksAccessEntry to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_access_entry aws_eks_access_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksAccessEntryConfig
    */
    constructor(scope: Construct, id: string, config: EksAccessEntryConfig);
    get accessEntryArn(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    get createdAt(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kubernetesGroups?;
    get kubernetesGroups(): string[];
    set kubernetesGroups(value: string[]);
    resetKubernetesGroups(): void;
    get kubernetesGroupsInput(): string[] | undefined;
    get modifiedAt(): string;
    private _principalArn?;
    get principalArn(): string;
    set principalArn(value: string);
    get principalArnInput(): string | undefined;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    resetUserName(): void;
    get userNameInput(): string | undefined;
    private _timeouts;
    get timeouts(): EksAccessEntryTimeoutsOutputReference;
    putTimeouts(value: EksAccessEntryTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EksAccessEntryTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
