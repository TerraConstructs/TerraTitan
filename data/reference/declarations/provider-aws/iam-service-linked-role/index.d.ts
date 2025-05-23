/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamServiceLinkedRoleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_linked_role#aws_service_name IamServiceLinkedRole#aws_service_name}
    */
    readonly awsServiceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_linked_role#custom_suffix IamServiceLinkedRole#custom_suffix}
    */
    readonly customSuffix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_linked_role#description IamServiceLinkedRole#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_linked_role#id IamServiceLinkedRole#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_linked_role#tags IamServiceLinkedRole#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_linked_role#tags_all IamServiceLinkedRole#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_linked_role aws_iam_service_linked_role}
*/
export declare class IamServiceLinkedRole extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iam_service_linked_role";
    /**
    * Generates CDKTF code for importing a IamServiceLinkedRole resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamServiceLinkedRole to import
    * @param importFromId The id of the existing IamServiceLinkedRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_linked_role#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamServiceLinkedRole to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_linked_role aws_iam_service_linked_role} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamServiceLinkedRoleConfig
    */
    constructor(scope: Construct, id: string, config: IamServiceLinkedRoleConfig);
    get arn(): string;
    private _awsServiceName?;
    get awsServiceName(): string;
    set awsServiceName(value: string);
    get awsServiceNameInput(): string | undefined;
    get createDate(): string;
    private _customSuffix?;
    get customSuffix(): string;
    set customSuffix(value: string);
    resetCustomSuffix(): void;
    get customSuffixInput(): string | undefined;
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
    get name(): string;
    get path(): string;
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
    get uniqueId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
