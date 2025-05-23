/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamServerCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_server_certificate#certificate_body IamServerCertificate#certificate_body}
    */
    readonly certificateBody: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_server_certificate#certificate_chain IamServerCertificate#certificate_chain}
    */
    readonly certificateChain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_server_certificate#id IamServerCertificate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_server_certificate#name IamServerCertificate#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_server_certificate#name_prefix IamServerCertificate#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_server_certificate#path IamServerCertificate#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_server_certificate#private_key IamServerCertificate#private_key}
    */
    readonly privateKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_server_certificate#tags IamServerCertificate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_server_certificate#tags_all IamServerCertificate#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_server_certificate#timeouts IamServerCertificate#timeouts}
    */
    readonly timeouts?: IamServerCertificateTimeouts;
}
export interface IamServerCertificateTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_server_certificate#delete IamServerCertificate#delete}
    */
    readonly delete?: string;
}
export declare function iamServerCertificateTimeoutsToTerraform(struct?: IamServerCertificateTimeouts | cdktf.IResolvable): any;
export declare function iamServerCertificateTimeoutsToHclTerraform(struct?: IamServerCertificateTimeouts | cdktf.IResolvable): any;
export declare class IamServerCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IamServerCertificateTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: IamServerCertificateTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_server_certificate aws_iam_server_certificate}
*/
export declare class IamServerCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iam_server_certificate";
    /**
    * Generates CDKTF code for importing a IamServerCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamServerCertificate to import
    * @param importFromId The id of the existing IamServerCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_server_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamServerCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_server_certificate aws_iam_server_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamServerCertificateConfig
    */
    constructor(scope: Construct, id: string, config: IamServerCertificateConfig);
    get arn(): string;
    private _certificateBody?;
    get certificateBody(): string;
    set certificateBody(value: string);
    get certificateBodyInput(): string | undefined;
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    resetCertificateChain(): void;
    get certificateChainInput(): string | undefined;
    get expiration(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    get privateKeyInput(): string | undefined;
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
    get uploadDate(): string;
    private _timeouts;
    get timeouts(): IamServerCertificateTimeoutsOutputReference;
    putTimeouts(value: IamServerCertificateTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | IamServerCertificateTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
