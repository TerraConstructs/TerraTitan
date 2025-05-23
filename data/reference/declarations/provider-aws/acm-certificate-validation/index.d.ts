/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AcmCertificateValidationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate_validation#certificate_arn AcmCertificateValidation#certificate_arn}
    */
    readonly certificateArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate_validation#id AcmCertificateValidation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate_validation#validation_record_fqdns AcmCertificateValidation#validation_record_fqdns}
    */
    readonly validationRecordFqdns?: string[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate_validation#timeouts AcmCertificateValidation#timeouts}
    */
    readonly timeouts?: AcmCertificateValidationTimeouts;
}
export interface AcmCertificateValidationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate_validation#create AcmCertificateValidation#create}
    */
    readonly create?: string;
}
export declare function acmCertificateValidationTimeoutsToTerraform(struct?: AcmCertificateValidationTimeouts | cdktf.IResolvable): any;
export declare function acmCertificateValidationTimeoutsToHclTerraform(struct?: AcmCertificateValidationTimeouts | cdktf.IResolvable): any;
export declare class AcmCertificateValidationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AcmCertificateValidationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AcmCertificateValidationTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate_validation aws_acm_certificate_validation}
*/
export declare class AcmCertificateValidation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_acm_certificate_validation";
    /**
    * Generates CDKTF code for importing a AcmCertificateValidation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AcmCertificateValidation to import
    * @param importFromId The id of the existing AcmCertificateValidation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate_validation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AcmCertificateValidation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate_validation aws_acm_certificate_validation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmCertificateValidationConfig
    */
    constructor(scope: Construct, id: string, config: AcmCertificateValidationConfig);
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    get certificateArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _validationRecordFqdns?;
    get validationRecordFqdns(): string[];
    set validationRecordFqdns(value: string[]);
    resetValidationRecordFqdns(): void;
    get validationRecordFqdnsInput(): string[] | undefined;
    private _timeouts;
    get timeouts(): AcmCertificateValidationTimeoutsOutputReference;
    putTimeouts(value: AcmCertificateValidationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AcmCertificateValidationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
