/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LbTrustStoreRevocationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store_revocation#id LbTrustStoreRevocation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store_revocation#revocations_s3_bucket LbTrustStoreRevocation#revocations_s3_bucket}
    */
    readonly revocationsS3Bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store_revocation#revocations_s3_key LbTrustStoreRevocation#revocations_s3_key}
    */
    readonly revocationsS3Key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store_revocation#revocations_s3_object_version LbTrustStoreRevocation#revocations_s3_object_version}
    */
    readonly revocationsS3ObjectVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store_revocation#trust_store_arn LbTrustStoreRevocation#trust_store_arn}
    */
    readonly trustStoreArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store_revocation#timeouts LbTrustStoreRevocation#timeouts}
    */
    readonly timeouts?: LbTrustStoreRevocationTimeouts;
}
export interface LbTrustStoreRevocationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store_revocation#create LbTrustStoreRevocation#create}
    */
    readonly create?: string;
}
export declare function lbTrustStoreRevocationTimeoutsToTerraform(struct?: LbTrustStoreRevocationTimeouts | cdktf.IResolvable): any;
export declare function lbTrustStoreRevocationTimeoutsToHclTerraform(struct?: LbTrustStoreRevocationTimeouts | cdktf.IResolvable): any;
export declare class LbTrustStoreRevocationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbTrustStoreRevocationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LbTrustStoreRevocationTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store_revocation aws_lb_trust_store_revocation}
*/
export declare class LbTrustStoreRevocation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lb_trust_store_revocation";
    /**
    * Generates CDKTF code for importing a LbTrustStoreRevocation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LbTrustStoreRevocation to import
    * @param importFromId The id of the existing LbTrustStoreRevocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store_revocation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LbTrustStoreRevocation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_trust_store_revocation aws_lb_trust_store_revocation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbTrustStoreRevocationConfig
    */
    constructor(scope: Construct, id: string, config: LbTrustStoreRevocationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get revocationId(): number;
    private _revocationsS3Bucket?;
    get revocationsS3Bucket(): string;
    set revocationsS3Bucket(value: string);
    get revocationsS3BucketInput(): string | undefined;
    private _revocationsS3Key?;
    get revocationsS3Key(): string;
    set revocationsS3Key(value: string);
    get revocationsS3KeyInput(): string | undefined;
    private _revocationsS3ObjectVersion?;
    get revocationsS3ObjectVersion(): string;
    set revocationsS3ObjectVersion(value: string);
    resetRevocationsS3ObjectVersion(): void;
    get revocationsS3ObjectVersionInput(): string | undefined;
    private _trustStoreArn?;
    get trustStoreArn(): string;
    set trustStoreArn(value: string);
    get trustStoreArnInput(): string | undefined;
    private _timeouts;
    get timeouts(): LbTrustStoreRevocationTimeoutsOutputReference;
    putTimeouts(value: LbTrustStoreRevocationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LbTrustStoreRevocationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
