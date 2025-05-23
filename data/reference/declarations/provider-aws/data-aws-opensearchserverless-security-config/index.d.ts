/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOpensearchserverlessSecurityConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_security_config#id DataAwsOpensearchserverlessSecurityConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export interface DataAwsOpensearchserverlessSecurityConfigSamlOptions {
}
export declare function dataAwsOpensearchserverlessSecurityConfigSamlOptionsToTerraform(struct?: DataAwsOpensearchserverlessSecurityConfigSamlOptions | cdktf.IResolvable): any;
export declare function dataAwsOpensearchserverlessSecurityConfigSamlOptionsToHclTerraform(struct?: DataAwsOpensearchserverlessSecurityConfigSamlOptions | cdktf.IResolvable): any;
export declare class DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsOpensearchserverlessSecurityConfigSamlOptions | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsOpensearchserverlessSecurityConfigSamlOptions | cdktf.IResolvable | undefined);
    get groupAttribute(): string;
    get metadata(): string;
    get sessionTimeout(): number;
    get userAttribute(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_security_config aws_opensearchserverless_security_config}
*/
export declare class DataAwsOpensearchserverlessSecurityConfig extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_opensearchserverless_security_config";
    /**
    * Generates CDKTF code for importing a DataAwsOpensearchserverlessSecurityConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsOpensearchserverlessSecurityConfig to import
    * @param importFromId The id of the existing DataAwsOpensearchserverlessSecurityConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_security_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsOpensearchserverlessSecurityConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_security_config aws_opensearchserverless_security_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOpensearchserverlessSecurityConfigConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsOpensearchserverlessSecurityConfigConfig);
    get configVersion(): string;
    get createdDate(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    get lastModifiedDate(): string;
    get type(): string;
    private _samlOptions;
    get samlOptions(): DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
