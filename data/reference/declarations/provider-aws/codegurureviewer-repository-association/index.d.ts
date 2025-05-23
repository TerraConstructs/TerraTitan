/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodegurureviewerRepositoryAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#id CodegurureviewerRepositoryAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#tags CodegurureviewerRepositoryAssociation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#tags_all CodegurureviewerRepositoryAssociation#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * kms_key_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#kms_key_details CodegurureviewerRepositoryAssociation#kms_key_details}
    */
    readonly kmsKeyDetails?: CodegurureviewerRepositoryAssociationKmsKeyDetails;
    /**
    * repository block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#repository CodegurureviewerRepositoryAssociation#repository}
    */
    readonly repository: CodegurureviewerRepositoryAssociationRepository;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#timeouts CodegurureviewerRepositoryAssociation#timeouts}
    */
    readonly timeouts?: CodegurureviewerRepositoryAssociationTimeouts;
}
export interface CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts {
}
export declare function codegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsToTerraform(struct?: CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts): any;
export declare function codegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsToHclTerraform(struct?: CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts): any;
export declare class CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts | undefined;
    set internalValue(value: CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts | undefined);
    get buildArtifactsObjectKey(): string;
    get sourceCodeArtifactsObjectKey(): string;
}
export declare class CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList extends cdktf.ComplexList {
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
    get(index: number): CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference;
}
export interface CodegurureviewerRepositoryAssociationS3RepositoryDetails {
}
export declare function codegurureviewerRepositoryAssociationS3RepositoryDetailsToTerraform(struct?: CodegurureviewerRepositoryAssociationS3RepositoryDetails): any;
export declare function codegurureviewerRepositoryAssociationS3RepositoryDetailsToHclTerraform(struct?: CodegurureviewerRepositoryAssociationS3RepositoryDetails): any;
export declare class CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodegurureviewerRepositoryAssociationS3RepositoryDetails | undefined;
    set internalValue(value: CodegurureviewerRepositoryAssociationS3RepositoryDetails | undefined);
    get bucketName(): string;
    private _codeArtifacts;
    get codeArtifacts(): CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList;
}
export declare class CodegurureviewerRepositoryAssociationS3RepositoryDetailsList extends cdktf.ComplexList {
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
    get(index: number): CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference;
}
export interface CodegurureviewerRepositoryAssociationKmsKeyDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#encryption_option CodegurureviewerRepositoryAssociation#encryption_option}
    */
    readonly encryptionOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#kms_key_id CodegurureviewerRepositoryAssociation#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export declare function codegurureviewerRepositoryAssociationKmsKeyDetailsToTerraform(struct?: CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference | CodegurureviewerRepositoryAssociationKmsKeyDetails): any;
export declare function codegurureviewerRepositoryAssociationKmsKeyDetailsToHclTerraform(struct?: CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference | CodegurureviewerRepositoryAssociationKmsKeyDetails): any;
export declare class CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodegurureviewerRepositoryAssociationKmsKeyDetails | undefined;
    set internalValue(value: CodegurureviewerRepositoryAssociationKmsKeyDetails | undefined);
    private _encryptionOption?;
    get encryptionOption(): string;
    set encryptionOption(value: string);
    resetEncryptionOption(): void;
    get encryptionOptionInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
}
export interface CodegurureviewerRepositoryAssociationRepositoryBitbucket {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}
    */
    readonly connectionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}
    */
    readonly owner: string;
}
export declare function codegurureviewerRepositoryAssociationRepositoryBitbucketToTerraform(struct?: CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference | CodegurureviewerRepositoryAssociationRepositoryBitbucket): any;
export declare function codegurureviewerRepositoryAssociationRepositoryBitbucketToHclTerraform(struct?: CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference | CodegurureviewerRepositoryAssociationRepositoryBitbucket): any;
export declare class CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodegurureviewerRepositoryAssociationRepositoryBitbucket | undefined;
    set internalValue(value: CodegurureviewerRepositoryAssociationRepositoryBitbucket | undefined);
    private _connectionArn?;
    get connectionArn(): string;
    set connectionArn(value: string);
    get connectionArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string | undefined;
}
export interface CodegurureviewerRepositoryAssociationRepositoryCodecommit {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}
    */
    readonly name: string;
}
export declare function codegurureviewerRepositoryAssociationRepositoryCodecommitToTerraform(struct?: CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference | CodegurureviewerRepositoryAssociationRepositoryCodecommit): any;
export declare function codegurureviewerRepositoryAssociationRepositoryCodecommitToHclTerraform(struct?: CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference | CodegurureviewerRepositoryAssociationRepositoryCodecommit): any;
export declare class CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodegurureviewerRepositoryAssociationRepositoryCodecommit | undefined;
    set internalValue(value: CodegurureviewerRepositoryAssociationRepositoryCodecommit | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}
    */
    readonly connectionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}
    */
    readonly owner: string;
}
export declare function codegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerToTerraform(struct?: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference | CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer): any;
export declare function codegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerToHclTerraform(struct?: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference | CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer): any;
export declare class CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer | undefined;
    set internalValue(value: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer | undefined);
    private _connectionArn?;
    get connectionArn(): string;
    set connectionArn(value: string);
    get connectionArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string | undefined;
}
export interface CodegurureviewerRepositoryAssociationRepositoryS3Bucket {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#bucket_name CodegurureviewerRepositoryAssociation#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}
    */
    readonly name: string;
}
export declare function codegurureviewerRepositoryAssociationRepositoryS3BucketToTerraform(struct?: CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference | CodegurureviewerRepositoryAssociationRepositoryS3Bucket): any;
export declare function codegurureviewerRepositoryAssociationRepositoryS3BucketToHclTerraform(struct?: CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference | CodegurureviewerRepositoryAssociationRepositoryS3Bucket): any;
export declare class CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodegurureviewerRepositoryAssociationRepositoryS3Bucket | undefined;
    set internalValue(value: CodegurureviewerRepositoryAssociationRepositoryS3Bucket | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface CodegurureviewerRepositoryAssociationRepository {
    /**
    * bitbucket block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#bitbucket CodegurureviewerRepositoryAssociation#bitbucket}
    */
    readonly bitbucket?: CodegurureviewerRepositoryAssociationRepositoryBitbucket;
    /**
    * codecommit block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#codecommit CodegurureviewerRepositoryAssociation#codecommit}
    */
    readonly codecommit?: CodegurureviewerRepositoryAssociationRepositoryCodecommit;
    /**
    * github_enterprise_server block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#github_enterprise_server CodegurureviewerRepositoryAssociation#github_enterprise_server}
    */
    readonly githubEnterpriseServer?: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer;
    /**
    * s3_bucket block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#s3_bucket CodegurureviewerRepositoryAssociation#s3_bucket}
    */
    readonly s3Bucket?: CodegurureviewerRepositoryAssociationRepositoryS3Bucket;
}
export declare function codegurureviewerRepositoryAssociationRepositoryToTerraform(struct?: CodegurureviewerRepositoryAssociationRepositoryOutputReference | CodegurureviewerRepositoryAssociationRepository): any;
export declare function codegurureviewerRepositoryAssociationRepositoryToHclTerraform(struct?: CodegurureviewerRepositoryAssociationRepositoryOutputReference | CodegurureviewerRepositoryAssociationRepository): any;
export declare class CodegurureviewerRepositoryAssociationRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodegurureviewerRepositoryAssociationRepository | undefined;
    set internalValue(value: CodegurureviewerRepositoryAssociationRepository | undefined);
    private _bitbucket;
    get bitbucket(): CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference;
    putBitbucket(value: CodegurureviewerRepositoryAssociationRepositoryBitbucket): void;
    resetBitbucket(): void;
    get bitbucketInput(): CodegurureviewerRepositoryAssociationRepositoryBitbucket | undefined;
    private _codecommit;
    get codecommit(): CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference;
    putCodecommit(value: CodegurureviewerRepositoryAssociationRepositoryCodecommit): void;
    resetCodecommit(): void;
    get codecommitInput(): CodegurureviewerRepositoryAssociationRepositoryCodecommit | undefined;
    private _githubEnterpriseServer;
    get githubEnterpriseServer(): CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference;
    putGithubEnterpriseServer(value: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer): void;
    resetGithubEnterpriseServer(): void;
    get githubEnterpriseServerInput(): CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer | undefined;
    private _s3Bucket;
    get s3Bucket(): CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference;
    putS3Bucket(value: CodegurureviewerRepositoryAssociationRepositoryS3Bucket): void;
    resetS3Bucket(): void;
    get s3BucketInput(): CodegurureviewerRepositoryAssociationRepositoryS3Bucket | undefined;
}
export interface CodegurureviewerRepositoryAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#create CodegurureviewerRepositoryAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#delete CodegurureviewerRepositoryAssociation#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#update CodegurureviewerRepositoryAssociation#update}
    */
    readonly update?: string;
}
export declare function codegurureviewerRepositoryAssociationTimeoutsToTerraform(struct?: CodegurureviewerRepositoryAssociationTimeouts | cdktf.IResolvable): any;
export declare function codegurureviewerRepositoryAssociationTimeoutsToHclTerraform(struct?: CodegurureviewerRepositoryAssociationTimeouts | cdktf.IResolvable): any;
export declare class CodegurureviewerRepositoryAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodegurureviewerRepositoryAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CodegurureviewerRepositoryAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association aws_codegurureviewer_repository_association}
*/
export declare class CodegurureviewerRepositoryAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codegurureviewer_repository_association";
    /**
    * Generates CDKTF code for importing a CodegurureviewerRepositoryAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodegurureviewerRepositoryAssociation to import
    * @param importFromId The id of the existing CodegurureviewerRepositoryAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodegurureviewerRepositoryAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association aws_codegurureviewer_repository_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodegurureviewerRepositoryAssociationConfig
    */
    constructor(scope: Construct, id: string, config: CodegurureviewerRepositoryAssociationConfig);
    get arn(): string;
    get associationId(): string;
    get connectionArn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    get owner(): string;
    get providerType(): string;
    private _s3RepositoryDetails;
    get s3RepositoryDetails(): CodegurureviewerRepositoryAssociationS3RepositoryDetailsList;
    get state(): string;
    get stateReason(): string;
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
    private _kmsKeyDetails;
    get kmsKeyDetails(): CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference;
    putKmsKeyDetails(value: CodegurureviewerRepositoryAssociationKmsKeyDetails): void;
    resetKmsKeyDetails(): void;
    get kmsKeyDetailsInput(): CodegurureviewerRepositoryAssociationKmsKeyDetails | undefined;
    private _repository;
    get repository(): CodegurureviewerRepositoryAssociationRepositoryOutputReference;
    putRepository(value: CodegurureviewerRepositoryAssociationRepository): void;
    get repositoryInput(): CodegurureviewerRepositoryAssociationRepository | undefined;
    private _timeouts;
    get timeouts(): CodegurureviewerRepositoryAssociationTimeoutsOutputReference;
    putTimeouts(value: CodegurureviewerRepositoryAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CodegurureviewerRepositoryAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
