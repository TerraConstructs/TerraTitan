/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEbsEncryptionByDefaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_encryption_by_default#id DataAwsEbsEncryptionByDefault#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_encryption_by_default#timeouts DataAwsEbsEncryptionByDefault#timeouts}
    */
    readonly timeouts?: DataAwsEbsEncryptionByDefaultTimeouts;
}
export interface DataAwsEbsEncryptionByDefaultTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_encryption_by_default#read DataAwsEbsEncryptionByDefault#read}
    */
    readonly read?: string;
}
export declare function dataAwsEbsEncryptionByDefaultTimeoutsToTerraform(struct?: DataAwsEbsEncryptionByDefaultTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEbsEncryptionByDefaultTimeoutsToHclTerraform(struct?: DataAwsEbsEncryptionByDefaultTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEbsEncryptionByDefaultTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEbsEncryptionByDefaultTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEbsEncryptionByDefaultTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_encryption_by_default aws_ebs_encryption_by_default}
*/
export declare class DataAwsEbsEncryptionByDefault extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ebs_encryption_by_default";
    /**
    * Generates CDKTF code for importing a DataAwsEbsEncryptionByDefault resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEbsEncryptionByDefault to import
    * @param importFromId The id of the existing DataAwsEbsEncryptionByDefault that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_encryption_by_default#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEbsEncryptionByDefault to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_encryption_by_default aws_ebs_encryption_by_default} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsEncryptionByDefaultConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEbsEncryptionByDefaultConfig);
    get enabled(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _timeouts;
    get timeouts(): DataAwsEbsEncryptionByDefaultTimeoutsOutputReference;
    putTimeouts(value: DataAwsEbsEncryptionByDefaultTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEbsEncryptionByDefaultTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
