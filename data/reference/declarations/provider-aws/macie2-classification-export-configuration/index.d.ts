/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Macie2ClassificationExportConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_export_configuration#id Macie2ClassificationExportConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * s3_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_export_configuration#s3_destination Macie2ClassificationExportConfiguration#s3_destination}
    */
    readonly s3Destination?: Macie2ClassificationExportConfigurationS3Destination;
}
export interface Macie2ClassificationExportConfigurationS3Destination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_export_configuration#bucket_name Macie2ClassificationExportConfiguration#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_export_configuration#key_prefix Macie2ClassificationExportConfiguration#key_prefix}
    */
    readonly keyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_export_configuration#kms_key_arn Macie2ClassificationExportConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn: string;
}
export declare function macie2ClassificationExportConfigurationS3DestinationToTerraform(struct?: Macie2ClassificationExportConfigurationS3DestinationOutputReference | Macie2ClassificationExportConfigurationS3Destination): any;
export declare function macie2ClassificationExportConfigurationS3DestinationToHclTerraform(struct?: Macie2ClassificationExportConfigurationS3DestinationOutputReference | Macie2ClassificationExportConfigurationS3Destination): any;
export declare class Macie2ClassificationExportConfigurationS3DestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationExportConfigurationS3Destination | undefined;
    set internalValue(value: Macie2ClassificationExportConfigurationS3Destination | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _keyPrefix?;
    get keyPrefix(): string;
    set keyPrefix(value: string);
    resetKeyPrefix(): void;
    get keyPrefixInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    get kmsKeyArnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_export_configuration aws_macie2_classification_export_configuration}
*/
export declare class Macie2ClassificationExportConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_macie2_classification_export_configuration";
    /**
    * Generates CDKTF code for importing a Macie2ClassificationExportConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Macie2ClassificationExportConfiguration to import
    * @param importFromId The id of the existing Macie2ClassificationExportConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_export_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Macie2ClassificationExportConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_export_configuration aws_macie2_classification_export_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2ClassificationExportConfigurationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Macie2ClassificationExportConfigurationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _s3Destination;
    get s3Destination(): Macie2ClassificationExportConfigurationS3DestinationOutputReference;
    putS3Destination(value: Macie2ClassificationExportConfigurationS3Destination): void;
    resetS3Destination(): void;
    get s3DestinationInput(): Macie2ClassificationExportConfigurationS3Destination | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
