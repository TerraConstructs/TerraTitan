/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BedrockagentAgentActionGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#action_group_name BedrockagentAgentActionGroup#action_group_name}
    */
    readonly actionGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#action_group_state BedrockagentAgentActionGroup#action_group_state}
    */
    readonly actionGroupState?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#agent_id BedrockagentAgentActionGroup#agent_id}
    */
    readonly agentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#agent_version BedrockagentAgentActionGroup#agent_version}
    */
    readonly agentVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#parent_action_group_signature BedrockagentAgentActionGroup#parent_action_group_signature}
    */
    readonly parentActionGroupSignature?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#prepare_agent BedrockagentAgentActionGroup#prepare_agent}
    */
    readonly prepareAgent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#skip_resource_in_use_check BedrockagentAgentActionGroup#skip_resource_in_use_check}
    */
    readonly skipResourceInUseCheck?: boolean | cdktf.IResolvable;
    /**
    * action_group_executor block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#action_group_executor BedrockagentAgentActionGroup#action_group_executor}
    */
    readonly actionGroupExecutor?: BedrockagentAgentActionGroupActionGroupExecutor[] | cdktf.IResolvable;
    /**
    * api_schema block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#api_schema BedrockagentAgentActionGroup#api_schema}
    */
    readonly apiSchema?: BedrockagentAgentActionGroupApiSchema[] | cdktf.IResolvable;
    /**
    * function_schema block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#function_schema BedrockagentAgentActionGroup#function_schema}
    */
    readonly functionSchema?: BedrockagentAgentActionGroupFunctionSchema[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#timeouts BedrockagentAgentActionGroup#timeouts}
    */
    readonly timeouts?: BedrockagentAgentActionGroupTimeouts;
}
export interface BedrockagentAgentActionGroupActionGroupExecutor {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#custom_control BedrockagentAgentActionGroup#custom_control}
    */
    readonly customControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#lambda BedrockagentAgentActionGroup#lambda}
    */
    readonly lambda?: string;
}
export declare function bedrockagentAgentActionGroupActionGroupExecutorToTerraform(struct?: BedrockagentAgentActionGroupActionGroupExecutor | cdktf.IResolvable): any;
export declare function bedrockagentAgentActionGroupActionGroupExecutorToHclTerraform(struct?: BedrockagentAgentActionGroupActionGroupExecutor | cdktf.IResolvable): any;
export declare class BedrockagentAgentActionGroupActionGroupExecutorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentAgentActionGroupActionGroupExecutor | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentActionGroupActionGroupExecutor | cdktf.IResolvable | undefined);
    private _customControl?;
    get customControl(): string;
    set customControl(value: string);
    resetCustomControl(): void;
    get customControlInput(): string | undefined;
    private _lambda?;
    get lambda(): string;
    set lambda(value: string);
    resetLambda(): void;
    get lambdaInput(): string | undefined;
}
export declare class BedrockagentAgentActionGroupActionGroupExecutorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentAgentActionGroupActionGroupExecutor[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentAgentActionGroupActionGroupExecutorOutputReference;
}
export interface BedrockagentAgentActionGroupApiSchemaS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#s3_bucket_name BedrockagentAgentActionGroup#s3_bucket_name}
    */
    readonly s3BucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#s3_object_key BedrockagentAgentActionGroup#s3_object_key}
    */
    readonly s3ObjectKey?: string;
}
export declare function bedrockagentAgentActionGroupApiSchemaS3ToTerraform(struct?: BedrockagentAgentActionGroupApiSchemaS3 | cdktf.IResolvable): any;
export declare function bedrockagentAgentActionGroupApiSchemaS3ToHclTerraform(struct?: BedrockagentAgentActionGroupApiSchemaS3 | cdktf.IResolvable): any;
export declare class BedrockagentAgentActionGroupApiSchemaS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentAgentActionGroupApiSchemaS3 | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentActionGroupApiSchemaS3 | cdktf.IResolvable | undefined);
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    resetS3BucketName(): void;
    get s3BucketNameInput(): string | undefined;
    private _s3ObjectKey?;
    get s3ObjectKey(): string;
    set s3ObjectKey(value: string);
    resetS3ObjectKey(): void;
    get s3ObjectKeyInput(): string | undefined;
}
export declare class BedrockagentAgentActionGroupApiSchemaS3List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentAgentActionGroupApiSchemaS3[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentAgentActionGroupApiSchemaS3OutputReference;
}
export interface BedrockagentAgentActionGroupApiSchema {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#payload BedrockagentAgentActionGroup#payload}
    */
    readonly payload?: string;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#s3 BedrockagentAgentActionGroup#s3}
    */
    readonly s3?: BedrockagentAgentActionGroupApiSchemaS3[] | cdktf.IResolvable;
}
export declare function bedrockagentAgentActionGroupApiSchemaToTerraform(struct?: BedrockagentAgentActionGroupApiSchema | cdktf.IResolvable): any;
export declare function bedrockagentAgentActionGroupApiSchemaToHclTerraform(struct?: BedrockagentAgentActionGroupApiSchema | cdktf.IResolvable): any;
export declare class BedrockagentAgentActionGroupApiSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentAgentActionGroupApiSchema | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentActionGroupApiSchema | cdktf.IResolvable | undefined);
    private _payload?;
    get payload(): string;
    set payload(value: string);
    resetPayload(): void;
    get payloadInput(): string | undefined;
    private _s3;
    get s3(): BedrockagentAgentActionGroupApiSchemaS3List;
    putS3(value: BedrockagentAgentActionGroupApiSchemaS3[] | cdktf.IResolvable): void;
    resetS3(): void;
    get s3Input(): cdktf.IResolvable | BedrockagentAgentActionGroupApiSchemaS3[] | undefined;
}
export declare class BedrockagentAgentActionGroupApiSchemaList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentAgentActionGroupApiSchema[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentAgentActionGroupApiSchemaOutputReference;
}
export interface BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#map_block_key BedrockagentAgentActionGroup#map_block_key}
    */
    readonly mapBlockKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#required BedrockagentAgentActionGroup#required}
    */
    readonly required?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#type BedrockagentAgentActionGroup#type}
    */
    readonly type: string;
}
export declare function bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersToTerraform(struct?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters | cdktf.IResolvable): any;
export declare function bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersToHclTerraform(struct?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters | cdktf.IResolvable): any;
export declare class BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _mapBlockKey?;
    get mapBlockKey(): string;
    set mapBlockKey(value: string);
    get mapBlockKeyInput(): string | undefined;
    private _required?;
    get required(): boolean | cdktf.IResolvable;
    set required(value: boolean | cdktf.IResolvable);
    resetRequired(): void;
    get requiredInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference;
}
export interface BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#name BedrockagentAgentActionGroup#name}
    */
    readonly name: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#parameters BedrockagentAgentActionGroup#parameters}
    */
    readonly parameters?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters[] | cdktf.IResolvable;
}
export declare function bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsToTerraform(struct?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions | cdktf.IResolvable): any;
export declare function bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsToHclTerraform(struct?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions | cdktf.IResolvable): any;
export declare class BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _parameters;
    get parameters(): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList;
    putParameters(value: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters[] | cdktf.IResolvable): void;
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters[] | undefined;
}
export declare class BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference;
}
export interface BedrockagentAgentActionGroupFunctionSchemaMemberFunctions {
    /**
    * functions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#functions BedrockagentAgentActionGroup#functions}
    */
    readonly functions?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions[] | cdktf.IResolvable;
}
export declare function bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsToTerraform(struct?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctions | cdktf.IResolvable): any;
export declare function bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsToHclTerraform(struct?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctions | cdktf.IResolvable): any;
export declare class BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentAgentActionGroupFunctionSchemaMemberFunctions | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentActionGroupFunctionSchemaMemberFunctions | cdktf.IResolvable | undefined);
    private _functions;
    get functions(): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList;
    putFunctions(value: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions[] | cdktf.IResolvable): void;
    resetFunctions(): void;
    get functionsInput(): cdktf.IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions[] | undefined;
}
export declare class BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference;
}
export interface BedrockagentAgentActionGroupFunctionSchema {
    /**
    * member_functions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#member_functions BedrockagentAgentActionGroup#member_functions}
    */
    readonly memberFunctions?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctions[] | cdktf.IResolvable;
}
export declare function bedrockagentAgentActionGroupFunctionSchemaToTerraform(struct?: BedrockagentAgentActionGroupFunctionSchema | cdktf.IResolvable): any;
export declare function bedrockagentAgentActionGroupFunctionSchemaToHclTerraform(struct?: BedrockagentAgentActionGroupFunctionSchema | cdktf.IResolvable): any;
export declare class BedrockagentAgentActionGroupFunctionSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentAgentActionGroupFunctionSchema | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentActionGroupFunctionSchema | cdktf.IResolvable | undefined);
    private _memberFunctions;
    get memberFunctions(): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList;
    putMemberFunctions(value: BedrockagentAgentActionGroupFunctionSchemaMemberFunctions[] | cdktf.IResolvable): void;
    resetMemberFunctions(): void;
    get memberFunctionsInput(): cdktf.IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctions[] | undefined;
}
export declare class BedrockagentAgentActionGroupFunctionSchemaList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentAgentActionGroupFunctionSchema[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentAgentActionGroupFunctionSchemaOutputReference;
}
export interface BedrockagentAgentActionGroupTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#create BedrockagentAgentActionGroup#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#update BedrockagentAgentActionGroup#update}
    */
    readonly update?: string;
}
export declare function bedrockagentAgentActionGroupTimeoutsToTerraform(struct?: BedrockagentAgentActionGroupTimeouts | cdktf.IResolvable): any;
export declare function bedrockagentAgentActionGroupTimeoutsToHclTerraform(struct?: BedrockagentAgentActionGroupTimeouts | cdktf.IResolvable): any;
export declare class BedrockagentAgentActionGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockagentAgentActionGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentActionGroupTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group aws_bedrockagent_agent_action_group}
*/
export declare class BedrockagentAgentActionGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_bedrockagent_agent_action_group";
    /**
    * Generates CDKTF code for importing a BedrockagentAgentActionGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BedrockagentAgentActionGroup to import
    * @param importFromId The id of the existing BedrockagentAgentActionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BedrockagentAgentActionGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_action_group aws_bedrockagent_agent_action_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BedrockagentAgentActionGroupConfig
    */
    constructor(scope: Construct, id: string, config: BedrockagentAgentActionGroupConfig);
    get actionGroupId(): string;
    private _actionGroupName?;
    get actionGroupName(): string;
    set actionGroupName(value: string);
    get actionGroupNameInput(): string | undefined;
    private _actionGroupState?;
    get actionGroupState(): string;
    set actionGroupState(value: string);
    resetActionGroupState(): void;
    get actionGroupStateInput(): string | undefined;
    private _agentId?;
    get agentId(): string;
    set agentId(value: string);
    get agentIdInput(): string | undefined;
    private _agentVersion?;
    get agentVersion(): string;
    set agentVersion(value: string);
    get agentVersionInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _parentActionGroupSignature?;
    get parentActionGroupSignature(): string;
    set parentActionGroupSignature(value: string);
    resetParentActionGroupSignature(): void;
    get parentActionGroupSignatureInput(): string | undefined;
    private _prepareAgent?;
    get prepareAgent(): boolean | cdktf.IResolvable;
    set prepareAgent(value: boolean | cdktf.IResolvable);
    resetPrepareAgent(): void;
    get prepareAgentInput(): boolean | cdktf.IResolvable | undefined;
    private _skipResourceInUseCheck?;
    get skipResourceInUseCheck(): boolean | cdktf.IResolvable;
    set skipResourceInUseCheck(value: boolean | cdktf.IResolvable);
    resetSkipResourceInUseCheck(): void;
    get skipResourceInUseCheckInput(): boolean | cdktf.IResolvable | undefined;
    private _actionGroupExecutor;
    get actionGroupExecutor(): BedrockagentAgentActionGroupActionGroupExecutorList;
    putActionGroupExecutor(value: BedrockagentAgentActionGroupActionGroupExecutor[] | cdktf.IResolvable): void;
    resetActionGroupExecutor(): void;
    get actionGroupExecutorInput(): cdktf.IResolvable | BedrockagentAgentActionGroupActionGroupExecutor[] | undefined;
    private _apiSchema;
    get apiSchema(): BedrockagentAgentActionGroupApiSchemaList;
    putApiSchema(value: BedrockagentAgentActionGroupApiSchema[] | cdktf.IResolvable): void;
    resetApiSchema(): void;
    get apiSchemaInput(): cdktf.IResolvable | BedrockagentAgentActionGroupApiSchema[] | undefined;
    private _functionSchema;
    get functionSchema(): BedrockagentAgentActionGroupFunctionSchemaList;
    putFunctionSchema(value: BedrockagentAgentActionGroupFunctionSchema[] | cdktf.IResolvable): void;
    resetFunctionSchema(): void;
    get functionSchemaInput(): cdktf.IResolvable | BedrockagentAgentActionGroupFunctionSchema[] | undefined;
    private _timeouts;
    get timeouts(): BedrockagentAgentActionGroupTimeoutsOutputReference;
    putTimeouts(value: BedrockagentAgentActionGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BedrockagentAgentActionGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
