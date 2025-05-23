/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodeartifactRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository#description CodeartifactRepository#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository#domain CodeartifactRepository#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository#domain_owner CodeartifactRepository#domain_owner}
    */
    readonly domainOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository#id CodeartifactRepository#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository#repository CodeartifactRepository#repository}
    */
    readonly repository: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository#tags CodeartifactRepository#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository#tags_all CodeartifactRepository#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * external_connections block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository#external_connections CodeartifactRepository#external_connections}
    */
    readonly externalConnections?: CodeartifactRepositoryExternalConnections;
    /**
    * upstream block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository#upstream CodeartifactRepository#upstream}
    */
    readonly upstream?: CodeartifactRepositoryUpstream[] | cdktf.IResolvable;
}
export interface CodeartifactRepositoryExternalConnections {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository#external_connection_name CodeartifactRepository#external_connection_name}
    */
    readonly externalConnectionName: string;
}
export declare function codeartifactRepositoryExternalConnectionsToTerraform(struct?: CodeartifactRepositoryExternalConnectionsOutputReference | CodeartifactRepositoryExternalConnections): any;
export declare function codeartifactRepositoryExternalConnectionsToHclTerraform(struct?: CodeartifactRepositoryExternalConnectionsOutputReference | CodeartifactRepositoryExternalConnections): any;
export declare class CodeartifactRepositoryExternalConnectionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodeartifactRepositoryExternalConnections | undefined;
    set internalValue(value: CodeartifactRepositoryExternalConnections | undefined);
    private _externalConnectionName?;
    get externalConnectionName(): string;
    set externalConnectionName(value: string);
    get externalConnectionNameInput(): string | undefined;
    get packageFormat(): string;
    get status(): string;
}
export interface CodeartifactRepositoryUpstream {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository#repository_name CodeartifactRepository#repository_name}
    */
    readonly repositoryName: string;
}
export declare function codeartifactRepositoryUpstreamToTerraform(struct?: CodeartifactRepositoryUpstream | cdktf.IResolvable): any;
export declare function codeartifactRepositoryUpstreamToHclTerraform(struct?: CodeartifactRepositoryUpstream | cdktf.IResolvable): any;
export declare class CodeartifactRepositoryUpstreamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodeartifactRepositoryUpstream | cdktf.IResolvable | undefined;
    set internalValue(value: CodeartifactRepositoryUpstream | cdktf.IResolvable | undefined);
    private _repositoryName?;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string | undefined;
}
export declare class CodeartifactRepositoryUpstreamList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodeartifactRepositoryUpstream[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodeartifactRepositoryUpstreamOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository aws_codeartifact_repository}
*/
export declare class CodeartifactRepository extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codeartifact_repository";
    /**
    * Generates CDKTF code for importing a CodeartifactRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodeartifactRepository to import
    * @param importFromId The id of the existing CodeartifactRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodeartifactRepository to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository aws_codeartifact_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeartifactRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: CodeartifactRepositoryConfig);
    get administratorAccount(): string;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string | undefined;
    private _domainOwner?;
    get domainOwner(): string;
    set domainOwner(value: string);
    resetDomainOwner(): void;
    get domainOwnerInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string | undefined;
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
    private _externalConnections;
    get externalConnections(): CodeartifactRepositoryExternalConnectionsOutputReference;
    putExternalConnections(value: CodeartifactRepositoryExternalConnections): void;
    resetExternalConnections(): void;
    get externalConnectionsInput(): CodeartifactRepositoryExternalConnections | undefined;
    private _upstream;
    get upstream(): CodeartifactRepositoryUpstreamList;
    putUpstream(value: CodeartifactRepositoryUpstream[] | cdktf.IResolvable): void;
    resetUpstream(): void;
    get upstreamInput(): cdktf.IResolvable | CodeartifactRepositoryUpstream[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
