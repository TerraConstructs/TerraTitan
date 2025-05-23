/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodeartifactDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_domain#domain CodeartifactDomain#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_domain#encryption_key CodeartifactDomain#encryption_key}
    */
    readonly encryptionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_domain#id CodeartifactDomain#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_domain#tags CodeartifactDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_domain#tags_all CodeartifactDomain#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_domain aws_codeartifact_domain}
*/
export declare class CodeartifactDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codeartifact_domain";
    /**
    * Generates CDKTF code for importing a CodeartifactDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodeartifactDomain to import
    * @param importFromId The id of the existing CodeartifactDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodeartifactDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_domain aws_codeartifact_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeartifactDomainConfig
    */
    constructor(scope: Construct, id: string, config: CodeartifactDomainConfig);
    get arn(): string;
    get assetSizeBytes(): string;
    get createdTime(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string | undefined;
    private _encryptionKey?;
    get encryptionKey(): string;
    set encryptionKey(value: string);
    resetEncryptionKey(): void;
    get encryptionKeyInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get owner(): string;
    get repositoryCount(): number;
    get s3BucketArn(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
