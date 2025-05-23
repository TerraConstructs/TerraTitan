/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_function#code CloudfrontFunction#code}
    */
    readonly code: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_function#comment CloudfrontFunction#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_function#id CloudfrontFunction#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_function#key_value_store_associations CloudfrontFunction#key_value_store_associations}
    */
    readonly keyValueStoreAssociations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_function#name CloudfrontFunction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_function#publish CloudfrontFunction#publish}
    */
    readonly publish?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_function#runtime CloudfrontFunction#runtime}
    */
    readonly runtime: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_function aws_cloudfront_function}
*/
export declare class CloudfrontFunction extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudfront_function";
    /**
    * Generates CDKTF code for importing a CloudfrontFunction resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontFunction to import
    * @param importFromId The id of the existing CloudfrontFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_function#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontFunction to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_function aws_cloudfront_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontFunctionConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontFunctionConfig);
    get arn(): string;
    private _code?;
    get code(): string;
    set code(value: string);
    get codeInput(): string | undefined;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    get etag(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _keyValueStoreAssociations?;
    get keyValueStoreAssociations(): string[];
    set keyValueStoreAssociations(value: string[]);
    resetKeyValueStoreAssociations(): void;
    get keyValueStoreAssociationsInput(): string[] | undefined;
    get liveStageEtag(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _publish?;
    get publish(): boolean | cdktf.IResolvable;
    set publish(value: boolean | cdktf.IResolvable);
    resetPublish(): void;
    get publishInput(): boolean | cdktf.IResolvable | undefined;
    private _runtime?;
    get runtime(): string;
    set runtime(value: string);
    get runtimeInput(): string | undefined;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
