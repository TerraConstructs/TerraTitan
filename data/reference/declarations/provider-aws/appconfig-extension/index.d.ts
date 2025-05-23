/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppconfigExtensionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#description AppconfigExtension#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#id AppconfigExtension#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#name AppconfigExtension#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#tags AppconfigExtension#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#tags_all AppconfigExtension#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * action_point block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#action_point AppconfigExtension#action_point}
    */
    readonly actionPoint: AppconfigExtensionActionPoint[] | cdktf.IResolvable;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#parameter AppconfigExtension#parameter}
    */
    readonly parameter?: AppconfigExtensionParameter[] | cdktf.IResolvable;
}
export interface AppconfigExtensionActionPointAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#description AppconfigExtension#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#name AppconfigExtension#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#role_arn AppconfigExtension#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#uri AppconfigExtension#uri}
    */
    readonly uri: string;
}
export declare function appconfigExtensionActionPointActionToTerraform(struct?: AppconfigExtensionActionPointAction | cdktf.IResolvable): any;
export declare function appconfigExtensionActionPointActionToHclTerraform(struct?: AppconfigExtensionActionPointAction | cdktf.IResolvable): any;
export declare class AppconfigExtensionActionPointActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppconfigExtensionActionPointAction | cdktf.IResolvable | undefined;
    set internalValue(value: AppconfigExtensionActionPointAction | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    get uriInput(): string | undefined;
}
export declare class AppconfigExtensionActionPointActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppconfigExtensionActionPointAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppconfigExtensionActionPointActionOutputReference;
}
export interface AppconfigExtensionActionPoint {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#point AppconfigExtension#point}
    */
    readonly point: string;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#action AppconfigExtension#action}
    */
    readonly action: AppconfigExtensionActionPointAction[] | cdktf.IResolvable;
}
export declare function appconfigExtensionActionPointToTerraform(struct?: AppconfigExtensionActionPoint | cdktf.IResolvable): any;
export declare function appconfigExtensionActionPointToHclTerraform(struct?: AppconfigExtensionActionPoint | cdktf.IResolvable): any;
export declare class AppconfigExtensionActionPointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppconfigExtensionActionPoint | cdktf.IResolvable | undefined;
    set internalValue(value: AppconfigExtensionActionPoint | cdktf.IResolvable | undefined);
    private _point?;
    get point(): string;
    set point(value: string);
    get pointInput(): string | undefined;
    private _action;
    get action(): AppconfigExtensionActionPointActionList;
    putAction(value: AppconfigExtensionActionPointAction[] | cdktf.IResolvable): void;
    get actionInput(): cdktf.IResolvable | AppconfigExtensionActionPointAction[] | undefined;
}
export declare class AppconfigExtensionActionPointList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppconfigExtensionActionPoint[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppconfigExtensionActionPointOutputReference;
}
export interface AppconfigExtensionParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#description AppconfigExtension#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#name AppconfigExtension#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#required AppconfigExtension#required}
    */
    readonly required?: boolean | cdktf.IResolvable;
}
export declare function appconfigExtensionParameterToTerraform(struct?: AppconfigExtensionParameter | cdktf.IResolvable): any;
export declare function appconfigExtensionParameterToHclTerraform(struct?: AppconfigExtensionParameter | cdktf.IResolvable): any;
export declare class AppconfigExtensionParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppconfigExtensionParameter | cdktf.IResolvable | undefined;
    set internalValue(value: AppconfigExtensionParameter | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _required?;
    get required(): boolean | cdktf.IResolvable;
    set required(value: boolean | cdktf.IResolvable);
    resetRequired(): void;
    get requiredInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class AppconfigExtensionParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppconfigExtensionParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppconfigExtensionParameterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension aws_appconfig_extension}
*/
export declare class AppconfigExtension extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appconfig_extension";
    /**
    * Generates CDKTF code for importing a AppconfigExtension resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppconfigExtension to import
    * @param importFromId The id of the existing AppconfigExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppconfigExtension to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_extension aws_appconfig_extension} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigExtensionConfig
    */
    constructor(scope: Construct, id: string, config: AppconfigExtensionConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    get version(): number;
    private _actionPoint;
    get actionPoint(): AppconfigExtensionActionPointList;
    putActionPoint(value: AppconfigExtensionActionPoint[] | cdktf.IResolvable): void;
    get actionPointInput(): cdktf.IResolvable | AppconfigExtensionActionPoint[] | undefined;
    private _parameter;
    get parameter(): AppconfigExtensionParameterList;
    putParameter(value: AppconfigExtensionParameter[] | cdktf.IResolvable): void;
    resetParameter(): void;
    get parameterInput(): cdktf.IResolvable | AppconfigExtensionParameter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
