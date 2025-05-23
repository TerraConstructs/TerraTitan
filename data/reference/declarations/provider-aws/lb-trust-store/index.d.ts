/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LbTrustStoreConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store#ca_certificates_bundle_s3_bucket LbTrustStore#ca_certificates_bundle_s3_bucket}
    */
    readonly caCertificatesBundleS3Bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store#ca_certificates_bundle_s3_key LbTrustStore#ca_certificates_bundle_s3_key}
    */
    readonly caCertificatesBundleS3Key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store#ca_certificates_bundle_s3_object_version LbTrustStore#ca_certificates_bundle_s3_object_version}
    */
    readonly caCertificatesBundleS3ObjectVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store#id LbTrustStore#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store#name LbTrustStore#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store#name_prefix LbTrustStore#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store#tags LbTrustStore#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store#tags_all LbTrustStore#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store#timeouts LbTrustStore#timeouts}
    */
    readonly timeouts?: LbTrustStoreTimeouts;
}
export interface LbTrustStoreTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store#create LbTrustStore#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store#delete LbTrustStore#delete}
    */
    readonly delete?: string;
}
export declare function lbTrustStoreTimeoutsToTerraform(struct?: LbTrustStoreTimeouts | cdktf.IResolvable): any;
export declare function lbTrustStoreTimeoutsToHclTerraform(struct?: LbTrustStoreTimeouts | cdktf.IResolvable): any;
export declare class LbTrustStoreTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbTrustStoreTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LbTrustStoreTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store aws_lb_trust_store}
*/
export declare class LbTrustStore extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lb_trust_store";
    /**
    * Generates CDKTF code for importing a LbTrustStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LbTrustStore to import
    * @param importFromId The id of the existing LbTrustStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LbTrustStore to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store aws_lb_trust_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbTrustStoreConfig
    */
    constructor(scope: Construct, id: string, config: LbTrustStoreConfig);
    get arn(): string;
    get arnSuffix(): string;
    private _caCertificatesBundleS3Bucket?;
    get caCertificatesBundleS3Bucket(): string;
    set caCertificatesBundleS3Bucket(value: string);
    get caCertificatesBundleS3BucketInput(): string | undefined;
    private _caCertificatesBundleS3Key?;
    get caCertificatesBundleS3Key(): string;
    set caCertificatesBundleS3Key(value: string);
    get caCertificatesBundleS3KeyInput(): string | undefined;
    private _caCertificatesBundleS3ObjectVersion?;
    get caCertificatesBundleS3ObjectVersion(): string;
    set caCertificatesBundleS3ObjectVersion(value: string);
    resetCaCertificatesBundleS3ObjectVersion(): void;
    get caCertificatesBundleS3ObjectVersionInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): LbTrustStoreTimeoutsOutputReference;
    putTimeouts(value: LbTrustStoreTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LbTrustStoreTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
