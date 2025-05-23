/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSsoadminApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application#application_arn DataAwsSsoadminApplication#application_arn}
    */
    readonly applicationArn: string;
    /**
    * portal_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application#portal_options DataAwsSsoadminApplication#portal_options}
    */
    readonly portalOptions?: DataAwsSsoadminApplicationPortalOptions[] | cdktf.IResolvable;
}
export interface DataAwsSsoadminApplicationPortalOptionsSignInOptions {
}
export declare function dataAwsSsoadminApplicationPortalOptionsSignInOptionsToTerraform(struct?: DataAwsSsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable): any;
export declare function dataAwsSsoadminApplicationPortalOptionsSignInOptionsToHclTerraform(struct?: DataAwsSsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable): any;
export declare class DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsSsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable | undefined);
    get applicationUrl(): string;
    get origin(): string;
}
export declare class DataAwsSsoadminApplicationPortalOptionsSignInOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsSsoadminApplicationPortalOptionsSignInOptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference;
}
export interface DataAwsSsoadminApplicationPortalOptions {
    /**
    * sign_in_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application#sign_in_options DataAwsSsoadminApplication#sign_in_options}
    */
    readonly signInOptions?: DataAwsSsoadminApplicationPortalOptionsSignInOptions[] | cdktf.IResolvable;
}
export declare function dataAwsSsoadminApplicationPortalOptionsToTerraform(struct?: DataAwsSsoadminApplicationPortalOptions | cdktf.IResolvable): any;
export declare function dataAwsSsoadminApplicationPortalOptionsToHclTerraform(struct?: DataAwsSsoadminApplicationPortalOptions | cdktf.IResolvable): any;
export declare class DataAwsSsoadminApplicationPortalOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsoadminApplicationPortalOptions | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsSsoadminApplicationPortalOptions | cdktf.IResolvable | undefined);
    get visibility(): string;
    private _signInOptions;
    get signInOptions(): DataAwsSsoadminApplicationPortalOptionsSignInOptionsList;
    putSignInOptions(value: DataAwsSsoadminApplicationPortalOptionsSignInOptions[] | cdktf.IResolvable): void;
    resetSignInOptions(): void;
    get signInOptionsInput(): cdktf.IResolvable | DataAwsSsoadminApplicationPortalOptionsSignInOptions[] | undefined;
}
export declare class DataAwsSsoadminApplicationPortalOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsSsoadminApplicationPortalOptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSsoadminApplicationPortalOptionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application aws_ssoadmin_application}
*/
export declare class DataAwsSsoadminApplication extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ssoadmin_application";
    /**
    * Generates CDKTF code for importing a DataAwsSsoadminApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSsoadminApplication to import
    * @param importFromId The id of the existing DataAwsSsoadminApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSsoadminApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application aws_ssoadmin_application} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsoadminApplicationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSsoadminApplicationConfig);
    get applicationAccount(): string;
    private _applicationArn?;
    get applicationArn(): string;
    set applicationArn(value: string);
    get applicationArnInput(): string | undefined;
    get applicationProviderArn(): string;
    get description(): string;
    get id(): string;
    get instanceArn(): string;
    get name(): string;
    get status(): string;
    private _portalOptions;
    get portalOptions(): DataAwsSsoadminApplicationPortalOptionsList;
    putPortalOptions(value: DataAwsSsoadminApplicationPortalOptions[] | cdktf.IResolvable): void;
    resetPortalOptions(): void;
    get portalOptionsInput(): cdktf.IResolvable | DataAwsSsoadminApplicationPortalOptions[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
