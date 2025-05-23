/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ResourcegroupsResourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_resource#group_arn ResourcegroupsResource#group_arn}
    */
    readonly groupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_resource#id ResourcegroupsResource#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_resource#resource_arn ResourcegroupsResource#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_resource#timeouts ResourcegroupsResource#timeouts}
    */
    readonly timeouts?: ResourcegroupsResourceTimeouts;
}
export interface ResourcegroupsResourceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_resource#create ResourcegroupsResource#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_resource#delete ResourcegroupsResource#delete}
    */
    readonly delete?: string;
}
export declare function resourcegroupsResourceTimeoutsToTerraform(struct?: ResourcegroupsResourceTimeouts | cdktf.IResolvable): any;
export declare function resourcegroupsResourceTimeoutsToHclTerraform(struct?: ResourcegroupsResourceTimeouts | cdktf.IResolvable): any;
export declare class ResourcegroupsResourceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ResourcegroupsResourceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ResourcegroupsResourceTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_resource aws_resourcegroups_resource}
*/
export declare class ResourcegroupsResource extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_resourcegroups_resource";
    /**
    * Generates CDKTF code for importing a ResourcegroupsResource resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ResourcegroupsResource to import
    * @param importFromId The id of the existing ResourcegroupsResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_resource#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ResourcegroupsResource to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_resource aws_resourcegroups_resource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ResourcegroupsResourceConfig
    */
    constructor(scope: Construct, id: string, config: ResourcegroupsResourceConfig);
    private _groupArn?;
    get groupArn(): string;
    set groupArn(value: string);
    get groupArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    get resourceType(): string;
    private _timeouts;
    get timeouts(): ResourcegroupsResourceTimeoutsOutputReference;
    putTimeouts(value: ResourcegroupsResourceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ResourcegroupsResourceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
