/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Lexv2ModelsBotVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_version#bot_id Lexv2ModelsBotVersion#bot_id}
    */
    readonly botId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_version#bot_version Lexv2ModelsBotVersion#bot_version}
    */
    readonly botVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_version#description Lexv2ModelsBotVersion#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_version#locale_specification Lexv2ModelsBotVersion#locale_specification}
    */
    readonly localeSpecification: {
        [key: string]: Lexv2ModelsBotVersionLocaleSpecification;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_version#timeouts Lexv2ModelsBotVersion#timeouts}
    */
    readonly timeouts?: Lexv2ModelsBotVersionTimeouts;
}
export interface Lexv2ModelsBotVersionLocaleSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_version#source_bot_version Lexv2ModelsBotVersion#source_bot_version}
    */
    readonly sourceBotVersion: string;
}
export declare function lexv2ModelsBotVersionLocaleSpecificationToTerraform(struct?: Lexv2ModelsBotVersionLocaleSpecification | cdktf.IResolvable): any;
export declare function lexv2ModelsBotVersionLocaleSpecificationToHclTerraform(struct?: Lexv2ModelsBotVersionLocaleSpecification | cdktf.IResolvable): any;
export declare class Lexv2ModelsBotVersionLocaleSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): Lexv2ModelsBotVersionLocaleSpecification | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsBotVersionLocaleSpecification | cdktf.IResolvable | undefined);
    private _sourceBotVersion?;
    get sourceBotVersion(): string;
    set sourceBotVersion(value: string);
    get sourceBotVersionInput(): string | undefined;
}
export declare class Lexv2ModelsBotVersionLocaleSpecificationMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: Lexv2ModelsBotVersionLocaleSpecification;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): Lexv2ModelsBotVersionLocaleSpecificationOutputReference;
}
export interface Lexv2ModelsBotVersionTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_version#create Lexv2ModelsBotVersion#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_version#delete Lexv2ModelsBotVersion#delete}
    */
    readonly delete?: string;
}
export declare function lexv2ModelsBotVersionTimeoutsToTerraform(struct?: Lexv2ModelsBotVersionTimeouts | cdktf.IResolvable): any;
export declare function lexv2ModelsBotVersionTimeoutsToHclTerraform(struct?: Lexv2ModelsBotVersionTimeouts | cdktf.IResolvable): any;
export declare class Lexv2ModelsBotVersionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Lexv2ModelsBotVersionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsBotVersionTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_version aws_lexv2models_bot_version}
*/
export declare class Lexv2ModelsBotVersion extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lexv2models_bot_version";
    /**
    * Generates CDKTF code for importing a Lexv2ModelsBotVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Lexv2ModelsBotVersion to import
    * @param importFromId The id of the existing Lexv2ModelsBotVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Lexv2ModelsBotVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_version aws_lexv2models_bot_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Lexv2ModelsBotVersionConfig
    */
    constructor(scope: Construct, id: string, config: Lexv2ModelsBotVersionConfig);
    private _botId?;
    get botId(): string;
    set botId(value: string);
    get botIdInput(): string | undefined;
    private _botVersion?;
    get botVersion(): string;
    set botVersion(value: string);
    resetBotVersion(): void;
    get botVersionInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _localeSpecification;
    get localeSpecification(): Lexv2ModelsBotVersionLocaleSpecificationMap;
    putLocaleSpecification(value: {
        [key: string]: Lexv2ModelsBotVersionLocaleSpecification;
    } | cdktf.IResolvable): void;
    get localeSpecificationInput(): cdktf.IResolvable | {
        [key: string]: Lexv2ModelsBotVersionLocaleSpecification;
    } | undefined;
    private _timeouts;
    get timeouts(): Lexv2ModelsBotVersionTimeoutsOutputReference;
    putTimeouts(value: Lexv2ModelsBotVersionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Lexv2ModelsBotVersionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
