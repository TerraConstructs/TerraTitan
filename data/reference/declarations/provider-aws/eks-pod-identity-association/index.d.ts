/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EksPodIdentityAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_pod_identity_association#cluster_name EksPodIdentityAssociation#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_pod_identity_association#namespace EksPodIdentityAssociation#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_pod_identity_association#role_arn EksPodIdentityAssociation#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_pod_identity_association#service_account EksPodIdentityAssociation#service_account}
    */
    readonly serviceAccount: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_pod_identity_association#tags EksPodIdentityAssociation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_pod_identity_association aws_eks_pod_identity_association}
*/
export declare class EksPodIdentityAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_eks_pod_identity_association";
    /**
    * Generates CDKTF code for importing a EksPodIdentityAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EksPodIdentityAssociation to import
    * @param importFromId The id of the existing EksPodIdentityAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_pod_identity_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EksPodIdentityAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_pod_identity_association aws_eks_pod_identity_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksPodIdentityAssociationConfig
    */
    constructor(scope: Construct, id: string, config: EksPodIdentityAssociationConfig);
    get associationArn(): string;
    get associationId(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    get id(): string;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _serviceAccount?;
    get serviceAccount(): string;
    set serviceAccount(value: string);
    get serviceAccountInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
