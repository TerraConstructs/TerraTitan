/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BedrockInferenceProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_inference_profile#description BedrockInferenceProfile#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_inference_profile#name BedrockInferenceProfile#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_inference_profile#tags BedrockInferenceProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * model_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_inference_profile#model_source BedrockInferenceProfile#model_source}
    */
    readonly modelSource?: BedrockInferenceProfileModelSource[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_inference_profile#timeouts BedrockInferenceProfile#timeouts}
    */
    readonly timeouts?: BedrockInferenceProfileTimeouts;
}
export interface BedrockInferenceProfileModels {
}
export declare function bedrockInferenceProfileModelsToTerraform(struct?: BedrockInferenceProfileModels): any;
export declare function bedrockInferenceProfileModelsToHclTerraform(struct?: BedrockInferenceProfileModels): any;
export declare class BedrockInferenceProfileModelsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockInferenceProfileModels | undefined;
    set internalValue(value: BedrockInferenceProfileModels | undefined);
    get modelArn(): string;
}
export declare class BedrockInferenceProfileModelsList extends cdktf.ComplexList {
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
    get(index: number): BedrockInferenceProfileModelsOutputReference;
}
export interface BedrockInferenceProfileModelSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_inference_profile#copy_from BedrockInferenceProfile#copy_from}
    */
    readonly copyFrom: string;
}
export declare function bedrockInferenceProfileModelSourceToTerraform(struct?: BedrockInferenceProfileModelSource | cdktf.IResolvable): any;
export declare function bedrockInferenceProfileModelSourceToHclTerraform(struct?: BedrockInferenceProfileModelSource | cdktf.IResolvable): any;
export declare class BedrockInferenceProfileModelSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockInferenceProfileModelSource | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockInferenceProfileModelSource | cdktf.IResolvable | undefined);
    private _copyFrom?;
    get copyFrom(): string;
    set copyFrom(value: string);
    get copyFromInput(): string | undefined;
}
export declare class BedrockInferenceProfileModelSourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockInferenceProfileModelSource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockInferenceProfileModelSourceOutputReference;
}
export interface BedrockInferenceProfileTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_inference_profile#create BedrockInferenceProfile#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_inference_profile#delete BedrockInferenceProfile#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_inference_profile#update BedrockInferenceProfile#update}
    */
    readonly update?: string;
}
export declare function bedrockInferenceProfileTimeoutsToTerraform(struct?: BedrockInferenceProfileTimeouts | cdktf.IResolvable): any;
export declare function bedrockInferenceProfileTimeoutsToHclTerraform(struct?: BedrockInferenceProfileTimeouts | cdktf.IResolvable): any;
export declare class BedrockInferenceProfileTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockInferenceProfileTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockInferenceProfileTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_inference_profile aws_bedrock_inference_profile}
*/
export declare class BedrockInferenceProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_bedrock_inference_profile";
    /**
    * Generates CDKTF code for importing a BedrockInferenceProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BedrockInferenceProfile to import
    * @param importFromId The id of the existing BedrockInferenceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_inference_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BedrockInferenceProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_inference_profile aws_bedrock_inference_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BedrockInferenceProfileConfig
    */
    constructor(scope: Construct, id: string, config: BedrockInferenceProfileConfig);
    get arn(): string;
    get createdAt(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _models;
    get models(): BedrockInferenceProfileModelsList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get status(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    get type(): string;
    get updatedAt(): string;
    private _modelSource;
    get modelSource(): BedrockInferenceProfileModelSourceList;
    putModelSource(value: BedrockInferenceProfileModelSource[] | cdktf.IResolvable): void;
    resetModelSource(): void;
    get modelSourceInput(): cdktf.IResolvable | BedrockInferenceProfileModelSource[] | undefined;
    private _timeouts;
    get timeouts(): BedrockInferenceProfileTimeoutsOutputReference;
    putTimeouts(value: BedrockInferenceProfileTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BedrockInferenceProfileTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
