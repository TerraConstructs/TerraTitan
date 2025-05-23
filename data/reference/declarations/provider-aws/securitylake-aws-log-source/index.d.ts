/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecuritylakeAwsLogSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_aws_log_source#source SecuritylakeAwsLogSource#source}
    */
    readonly source?: SecuritylakeAwsLogSourceSource[] | cdktf.IResolvable;
}
export interface SecuritylakeAwsLogSourceSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_aws_log_source#accounts SecuritylakeAwsLogSource#accounts}
    */
    readonly accounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_aws_log_source#regions SecuritylakeAwsLogSource#regions}
    */
    readonly regions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_aws_log_source#source_name SecuritylakeAwsLogSource#source_name}
    */
    readonly sourceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_aws_log_source#source_version SecuritylakeAwsLogSource#source_version}
    */
    readonly sourceVersion?: string;
}
export declare function securitylakeAwsLogSourceSourceToTerraform(struct?: SecuritylakeAwsLogSourceSource | cdktf.IResolvable): any;
export declare function securitylakeAwsLogSourceSourceToHclTerraform(struct?: SecuritylakeAwsLogSourceSource | cdktf.IResolvable): any;
export declare class SecuritylakeAwsLogSourceSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeAwsLogSourceSource | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeAwsLogSourceSource | cdktf.IResolvable | undefined);
    private _accounts?;
    get accounts(): string[];
    set accounts(value: string[]);
    resetAccounts(): void;
    get accountsInput(): string[] | undefined;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    get regionsInput(): string[] | undefined;
    private _sourceName?;
    get sourceName(): string;
    set sourceName(value: string);
    get sourceNameInput(): string | undefined;
    private _sourceVersion?;
    get sourceVersion(): string;
    set sourceVersion(value: string);
    resetSourceVersion(): void;
    get sourceVersionInput(): string | undefined;
}
export declare class SecuritylakeAwsLogSourceSourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeAwsLogSourceSource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeAwsLogSourceSourceOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_aws_log_source aws_securitylake_aws_log_source}
*/
export declare class SecuritylakeAwsLogSource extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securitylake_aws_log_source";
    /**
    * Generates CDKTF code for importing a SecuritylakeAwsLogSource resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecuritylakeAwsLogSource to import
    * @param importFromId The id of the existing SecuritylakeAwsLogSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_aws_log_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecuritylakeAwsLogSource to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_aws_log_source aws_securitylake_aws_log_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecuritylakeAwsLogSourceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SecuritylakeAwsLogSourceConfig);
    get id(): string;
    private _source;
    get source(): SecuritylakeAwsLogSourceSourceList;
    putSource(value: SecuritylakeAwsLogSourceSource[] | cdktf.IResolvable): void;
    resetSource(): void;
    get sourceInput(): cdktf.IResolvable | SecuritylakeAwsLogSourceSource[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
