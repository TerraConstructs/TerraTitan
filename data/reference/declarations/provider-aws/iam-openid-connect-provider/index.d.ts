/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamOpenidConnectProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_openid_connect_provider#client_id_list IamOpenidConnectProvider#client_id_list}
    */
    readonly clientIdList: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_openid_connect_provider#id IamOpenidConnectProvider#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_openid_connect_provider#tags IamOpenidConnectProvider#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_openid_connect_provider#tags_all IamOpenidConnectProvider#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_openid_connect_provider#thumbprint_list IamOpenidConnectProvider#thumbprint_list}
    */
    readonly thumbprintList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_openid_connect_provider#url IamOpenidConnectProvider#url}
    */
    readonly url: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_openid_connect_provider aws_iam_openid_connect_provider}
*/
export declare class IamOpenidConnectProvider extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iam_openid_connect_provider";
    /**
    * Generates CDKTF code for importing a IamOpenidConnectProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamOpenidConnectProvider to import
    * @param importFromId The id of the existing IamOpenidConnectProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_openid_connect_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamOpenidConnectProvider to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_openid_connect_provider aws_iam_openid_connect_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamOpenidConnectProviderConfig
    */
    constructor(scope: Construct, id: string, config: IamOpenidConnectProviderConfig);
    get arn(): string;
    private _clientIdList?;
    get clientIdList(): string[];
    set clientIdList(value: string[]);
    get clientIdListInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _thumbprintList?;
    get thumbprintList(): string[];
    set thumbprintList(value: string[]);
    resetThumbprintList(): void;
    get thumbprintListInput(): string[] | undefined;
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
