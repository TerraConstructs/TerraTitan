/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontKeyValueStoreConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_key_value_store#comment CloudfrontKeyValueStore#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_key_value_store#name CloudfrontKeyValueStore#name}
    */
    readonly name: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_key_value_store#timeouts CloudfrontKeyValueStore#timeouts}
    */
    readonly timeouts?: CloudfrontKeyValueStoreTimeouts;
}
export interface CloudfrontKeyValueStoreTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_key_value_store#create CloudfrontKeyValueStore#create}
    */
    readonly create?: string;
}
export declare function cloudfrontKeyValueStoreTimeoutsToTerraform(struct?: CloudfrontKeyValueStoreTimeouts | cdktf.IResolvable): any;
export declare function cloudfrontKeyValueStoreTimeoutsToHclTerraform(struct?: CloudfrontKeyValueStoreTimeouts | cdktf.IResolvable): any;
export declare class CloudfrontKeyValueStoreTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontKeyValueStoreTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontKeyValueStoreTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_key_value_store aws_cloudfront_key_value_store}
*/
export declare class CloudfrontKeyValueStore extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudfront_key_value_store";
    /**
    * Generates CDKTF code for importing a CloudfrontKeyValueStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontKeyValueStore to import
    * @param importFromId The id of the existing CloudfrontKeyValueStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_key_value_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontKeyValueStore to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_key_value_store aws_cloudfront_key_value_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontKeyValueStoreConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontKeyValueStoreConfig);
    get arn(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    get etag(): string;
    get id(): string;
    get lastModifiedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _timeouts;
    get timeouts(): CloudfrontKeyValueStoreTimeoutsOutputReference;
    putTimeouts(value: CloudfrontKeyValueStoreTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CloudfrontKeyValueStoreTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
