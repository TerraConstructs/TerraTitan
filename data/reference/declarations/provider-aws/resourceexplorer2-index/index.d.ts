/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Resourceexplorer2IndexConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_index#tags Resourceexplorer2Index#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_index#type Resourceexplorer2Index#type}
    */
    readonly type: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_index#timeouts Resourceexplorer2Index#timeouts}
    */
    readonly timeouts?: Resourceexplorer2IndexTimeouts;
}
export interface Resourceexplorer2IndexTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_index#create Resourceexplorer2Index#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_index#delete Resourceexplorer2Index#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_index#update Resourceexplorer2Index#update}
    */
    readonly update?: string;
}
export declare function resourceexplorer2IndexTimeoutsToTerraform(struct?: Resourceexplorer2IndexTimeouts | cdktf.IResolvable): any;
export declare function resourceexplorer2IndexTimeoutsToHclTerraform(struct?: Resourceexplorer2IndexTimeouts | cdktf.IResolvable): any;
export declare class Resourceexplorer2IndexTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Resourceexplorer2IndexTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Resourceexplorer2IndexTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_index aws_resourceexplorer2_index}
*/
export declare class Resourceexplorer2Index extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_resourceexplorer2_index";
    /**
    * Generates CDKTF code for importing a Resourceexplorer2Index resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Resourceexplorer2Index to import
    * @param importFromId The id of the existing Resourceexplorer2Index that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_index#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Resourceexplorer2Index to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_index aws_resourceexplorer2_index} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Resourceexplorer2IndexConfig
    */
    constructor(scope: Construct, id: string, config: Resourceexplorer2IndexConfig);
    get arn(): string;
    get id(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _timeouts;
    get timeouts(): Resourceexplorer2IndexTimeoutsOutputReference;
    putTimeouts(value: Resourceexplorer2IndexTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Resourceexplorer2IndexTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
