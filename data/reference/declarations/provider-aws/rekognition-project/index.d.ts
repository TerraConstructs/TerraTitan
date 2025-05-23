/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RekognitionProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_project#auto_update RekognitionProject#auto_update}
    */
    readonly autoUpdate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_project#feature RekognitionProject#feature}
    */
    readonly feature?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_project#name RekognitionProject#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_project#tags RekognitionProject#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_project#timeouts RekognitionProject#timeouts}
    */
    readonly timeouts?: RekognitionProjectTimeouts;
}
export interface RekognitionProjectTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_project#create RekognitionProject#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_project#delete RekognitionProject#delete}
    */
    readonly delete?: string;
}
export declare function rekognitionProjectTimeoutsToTerraform(struct?: RekognitionProjectTimeouts | cdktf.IResolvable): any;
export declare function rekognitionProjectTimeoutsToHclTerraform(struct?: RekognitionProjectTimeouts | cdktf.IResolvable): any;
export declare class RekognitionProjectTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RekognitionProjectTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionProjectTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_project aws_rekognition_project}
*/
export declare class RekognitionProject extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rekognition_project";
    /**
    * Generates CDKTF code for importing a RekognitionProject resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RekognitionProject to import
    * @param importFromId The id of the existing RekognitionProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RekognitionProject to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_project aws_rekognition_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RekognitionProjectConfig
    */
    constructor(scope: Construct, id: string, config: RekognitionProjectConfig);
    get arn(): string;
    private _autoUpdate?;
    get autoUpdate(): string;
    set autoUpdate(value: string);
    resetAutoUpdate(): void;
    get autoUpdateInput(): string | undefined;
    private _feature?;
    get feature(): string;
    set feature(value: string);
    resetFeature(): void;
    get featureInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): RekognitionProjectTimeoutsOutputReference;
    putTimeouts(value: RekognitionProjectTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RekognitionProjectTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
