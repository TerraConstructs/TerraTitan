/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDbProxyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_proxy#id DataAwsDbProxy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_proxy#name DataAwsDbProxy#name}
    */
    readonly name: string;
}
export interface DataAwsDbProxyAuth {
}
export declare function dataAwsDbProxyAuthToTerraform(struct?: DataAwsDbProxyAuth): any;
export declare function dataAwsDbProxyAuthToHclTerraform(struct?: DataAwsDbProxyAuth): any;
export declare class DataAwsDbProxyAuthOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDbProxyAuth | undefined;
    set internalValue(value: DataAwsDbProxyAuth | undefined);
    get authScheme(): string;
    get clientPasswordAuthType(): string;
    get description(): string;
    get iamAuth(): string;
    get secretArn(): string;
    get username(): string;
}
export declare class DataAwsDbProxyAuthList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsDbProxyAuthOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_proxy aws_db_proxy}
*/
export declare class DataAwsDbProxy extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_db_proxy";
    /**
    * Generates CDKTF code for importing a DataAwsDbProxy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDbProxy to import
    * @param importFromId The id of the existing DataAwsDbProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_proxy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDbProxy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_proxy aws_db_proxy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbProxyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDbProxyConfig);
    get arn(): string;
    private _auth;
    get auth(): DataAwsDbProxyAuthList;
    get debugLogging(): cdktf.IResolvable;
    get endpoint(): string;
    get engineFamily(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get idleClientTimeout(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get requireTls(): cdktf.IResolvable;
    get roleArn(): string;
    get vpcId(): string;
    get vpcSecurityGroupIds(): string[];
    get vpcSubnetIds(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
