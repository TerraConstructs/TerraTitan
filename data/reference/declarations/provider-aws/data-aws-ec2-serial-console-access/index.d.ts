/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2SerialConsoleAccessConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_serial_console_access#id DataAwsEc2SerialConsoleAccess#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_serial_console_access#timeouts DataAwsEc2SerialConsoleAccess#timeouts}
    */
    readonly timeouts?: DataAwsEc2SerialConsoleAccessTimeouts;
}
export interface DataAwsEc2SerialConsoleAccessTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_serial_console_access#read DataAwsEc2SerialConsoleAccess#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2SerialConsoleAccessTimeoutsToTerraform(struct?: DataAwsEc2SerialConsoleAccessTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2SerialConsoleAccessTimeoutsToHclTerraform(struct?: DataAwsEc2SerialConsoleAccessTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2SerialConsoleAccessTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2SerialConsoleAccessTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2SerialConsoleAccessTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_serial_console_access aws_ec2_serial_console_access}
*/
export declare class DataAwsEc2SerialConsoleAccess extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_serial_console_access";
    /**
    * Generates CDKTF code for importing a DataAwsEc2SerialConsoleAccess resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2SerialConsoleAccess to import
    * @param importFromId The id of the existing DataAwsEc2SerialConsoleAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_serial_console_access#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2SerialConsoleAccess to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_serial_console_access aws_ec2_serial_console_access} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2SerialConsoleAccessConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2SerialConsoleAccessConfig);
    get enabled(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2SerialConsoleAccessTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2SerialConsoleAccessTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2SerialConsoleAccessTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
