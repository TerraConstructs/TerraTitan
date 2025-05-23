/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEbsDefaultKmsKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_default_kms_key#id DataAwsEbsDefaultKmsKey#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_default_kms_key#timeouts DataAwsEbsDefaultKmsKey#timeouts}
    */
    readonly timeouts?: DataAwsEbsDefaultKmsKeyTimeouts;
}
export interface DataAwsEbsDefaultKmsKeyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_default_kms_key#read DataAwsEbsDefaultKmsKey#read}
    */
    readonly read?: string;
}
export declare function dataAwsEbsDefaultKmsKeyTimeoutsToTerraform(struct?: DataAwsEbsDefaultKmsKeyTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEbsDefaultKmsKeyTimeoutsToHclTerraform(struct?: DataAwsEbsDefaultKmsKeyTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEbsDefaultKmsKeyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEbsDefaultKmsKeyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEbsDefaultKmsKeyTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_default_kms_key aws_ebs_default_kms_key}
*/
export declare class DataAwsEbsDefaultKmsKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ebs_default_kms_key";
    /**
    * Generates CDKTF code for importing a DataAwsEbsDefaultKmsKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEbsDefaultKmsKey to import
    * @param importFromId The id of the existing DataAwsEbsDefaultKmsKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_default_kms_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEbsDefaultKmsKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_default_kms_key aws_ebs_default_kms_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsDefaultKmsKeyConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEbsDefaultKmsKeyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get keyArn(): string;
    private _timeouts;
    get timeouts(): DataAwsEbsDefaultKmsKeyTimeoutsOutputReference;
    putTimeouts(value: DataAwsEbsDefaultKmsKeyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEbsDefaultKmsKeyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
