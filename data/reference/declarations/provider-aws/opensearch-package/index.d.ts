/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpensearchPackageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package#id OpensearchPackage#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package#package_description OpensearchPackage#package_description}
    */
    readonly packageDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package#package_name OpensearchPackage#package_name}
    */
    readonly packageName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package#package_type OpensearchPackage#package_type}
    */
    readonly packageType: string;
    /**
    * package_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package#package_source OpensearchPackage#package_source}
    */
    readonly packageSource: OpensearchPackagePackageSource;
}
export interface OpensearchPackagePackageSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package#s3_bucket_name OpensearchPackage#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package#s3_key OpensearchPackage#s3_key}
    */
    readonly s3Key: string;
}
export declare function opensearchPackagePackageSourceToTerraform(struct?: OpensearchPackagePackageSourceOutputReference | OpensearchPackagePackageSource): any;
export declare function opensearchPackagePackageSourceToHclTerraform(struct?: OpensearchPackagePackageSourceOutputReference | OpensearchPackagePackageSource): any;
export declare class OpensearchPackagePackageSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchPackagePackageSource | undefined;
    set internalValue(value: OpensearchPackagePackageSource | undefined);
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string | undefined;
    private _s3Key?;
    get s3Key(): string;
    set s3Key(value: string);
    get s3KeyInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package aws_opensearch_package}
*/
export declare class OpensearchPackage extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opensearch_package";
    /**
    * Generates CDKTF code for importing a OpensearchPackage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpensearchPackage to import
    * @param importFromId The id of the existing OpensearchPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpensearchPackage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package aws_opensearch_package} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpensearchPackageConfig
    */
    constructor(scope: Construct, id: string, config: OpensearchPackageConfig);
    get availablePackageVersion(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _packageDescription?;
    get packageDescription(): string;
    set packageDescription(value: string);
    resetPackageDescription(): void;
    get packageDescriptionInput(): string | undefined;
    get packageId(): string;
    private _packageName?;
    get packageName(): string;
    set packageName(value: string);
    get packageNameInput(): string | undefined;
    private _packageType?;
    get packageType(): string;
    set packageType(value: string);
    get packageTypeInput(): string | undefined;
    private _packageSource;
    get packageSource(): OpensearchPackagePackageSourceOutputReference;
    putPackageSource(value: OpensearchPackagePackageSource): void;
    get packageSourceInput(): OpensearchPackagePackageSource | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
