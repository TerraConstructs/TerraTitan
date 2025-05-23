/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VerifiedpermissionsSchemaConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_schema#policy_store_id VerifiedpermissionsSchema#policy_store_id}
    */
    readonly policyStoreId: string;
    /**
    * definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_schema#definition VerifiedpermissionsSchema#definition}
    */
    readonly definition: VerifiedpermissionsSchemaDefinition;
}
export interface VerifiedpermissionsSchemaDefinition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_schema#value VerifiedpermissionsSchema#value}
    */
    readonly value: string;
}
export declare function verifiedpermissionsSchemaDefinitionToTerraform(struct?: VerifiedpermissionsSchemaDefinition | cdktf.IResolvable): any;
export declare function verifiedpermissionsSchemaDefinitionToHclTerraform(struct?: VerifiedpermissionsSchemaDefinition | cdktf.IResolvable): any;
export declare class VerifiedpermissionsSchemaDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VerifiedpermissionsSchemaDefinition | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedpermissionsSchemaDefinition | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_schema aws_verifiedpermissions_schema}
*/
export declare class VerifiedpermissionsSchema extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_verifiedpermissions_schema";
    /**
    * Generates CDKTF code for importing a VerifiedpermissionsSchema resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VerifiedpermissionsSchema to import
    * @param importFromId The id of the existing VerifiedpermissionsSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_schema#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VerifiedpermissionsSchema to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_schema aws_verifiedpermissions_schema} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VerifiedpermissionsSchemaConfig
    */
    constructor(scope: Construct, id: string, config: VerifiedpermissionsSchemaConfig);
    get id(): string;
    get namespaces(): string[];
    private _policyStoreId?;
    get policyStoreId(): string;
    set policyStoreId(value: string);
    get policyStoreIdInput(): string | undefined;
    private _definition;
    get definition(): VerifiedpermissionsSchemaDefinitionOutputReference;
    putDefinition(value: VerifiedpermissionsSchemaDefinition): void;
    get definitionInput(): cdktf.IResolvable | VerifiedpermissionsSchemaDefinition | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
