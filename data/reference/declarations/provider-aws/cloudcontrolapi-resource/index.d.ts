/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudcontrolapiResourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudcontrolapi_resource#desired_state CloudcontrolapiResource#desired_state}
    */
    readonly desiredState: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudcontrolapi_resource#id CloudcontrolapiResource#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudcontrolapi_resource#role_arn CloudcontrolapiResource#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudcontrolapi_resource#schema CloudcontrolapiResource#schema}
    */
    readonly schema?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudcontrolapi_resource#type_name CloudcontrolapiResource#type_name}
    */
    readonly typeName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudcontrolapi_resource#type_version_id CloudcontrolapiResource#type_version_id}
    */
    readonly typeVersionId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudcontrolapi_resource#timeouts CloudcontrolapiResource#timeouts}
    */
    readonly timeouts?: CloudcontrolapiResourceTimeouts;
}
export interface CloudcontrolapiResourceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudcontrolapi_resource#create CloudcontrolapiResource#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudcontrolapi_resource#delete CloudcontrolapiResource#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudcontrolapi_resource#update CloudcontrolapiResource#update}
    */
    readonly update?: string;
}
export declare function cloudcontrolapiResourceTimeoutsToTerraform(struct?: CloudcontrolapiResourceTimeouts | cdktf.IResolvable): any;
export declare function cloudcontrolapiResourceTimeoutsToHclTerraform(struct?: CloudcontrolapiResourceTimeouts | cdktf.IResolvable): any;
export declare class CloudcontrolapiResourceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudcontrolapiResourceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CloudcontrolapiResourceTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudcontrolapi_resource aws_cloudcontrolapi_resource}
*/
export declare class CloudcontrolapiResource extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudcontrolapi_resource";
    /**
    * Generates CDKTF code for importing a CloudcontrolapiResource resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudcontrolapiResource to import
    * @param importFromId The id of the existing CloudcontrolapiResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudcontrolapi_resource#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudcontrolapiResource to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudcontrolapi_resource aws_cloudcontrolapi_resource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudcontrolapiResourceConfig
    */
    constructor(scope: Construct, id: string, config: CloudcontrolapiResourceConfig);
    private _desiredState?;
    get desiredState(): string;
    set desiredState(value: string);
    get desiredStateInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get properties(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _schema?;
    get schema(): string;
    set schema(value: string);
    resetSchema(): void;
    get schemaInput(): string | undefined;
    private _typeName?;
    get typeName(): string;
    set typeName(value: string);
    get typeNameInput(): string | undefined;
    private _typeVersionId?;
    get typeVersionId(): string;
    set typeVersionId(value: string);
    resetTypeVersionId(): void;
    get typeVersionIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): CloudcontrolapiResourceTimeoutsOutputReference;
    putTimeouts(value: CloudcontrolapiResourceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CloudcontrolapiResourceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
