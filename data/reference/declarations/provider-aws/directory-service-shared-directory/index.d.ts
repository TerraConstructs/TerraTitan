/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DirectoryServiceSharedDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory#directory_id DirectoryServiceSharedDirectory#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory#method DirectoryServiceSharedDirectory#method}
    */
    readonly method?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory#notes DirectoryServiceSharedDirectory#notes}
    */
    readonly notes?: string;
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory#target DirectoryServiceSharedDirectory#target}
    */
    readonly target: DirectoryServiceSharedDirectoryTarget;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory#timeouts DirectoryServiceSharedDirectory#timeouts}
    */
    readonly timeouts?: DirectoryServiceSharedDirectoryTimeouts;
}
export interface DirectoryServiceSharedDirectoryTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory#type DirectoryServiceSharedDirectory#type}
    */
    readonly type?: string;
}
export declare function directoryServiceSharedDirectoryTargetToTerraform(struct?: DirectoryServiceSharedDirectoryTargetOutputReference | DirectoryServiceSharedDirectoryTarget): any;
export declare function directoryServiceSharedDirectoryTargetToHclTerraform(struct?: DirectoryServiceSharedDirectoryTargetOutputReference | DirectoryServiceSharedDirectoryTarget): any;
export declare class DirectoryServiceSharedDirectoryTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DirectoryServiceSharedDirectoryTarget | undefined;
    set internalValue(value: DirectoryServiceSharedDirectoryTarget | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export interface DirectoryServiceSharedDirectoryTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory#delete DirectoryServiceSharedDirectory#delete}
    */
    readonly delete?: string;
}
export declare function directoryServiceSharedDirectoryTimeoutsToTerraform(struct?: DirectoryServiceSharedDirectoryTimeouts | cdktf.IResolvable): any;
export declare function directoryServiceSharedDirectoryTimeoutsToHclTerraform(struct?: DirectoryServiceSharedDirectoryTimeouts | cdktf.IResolvable): any;
export declare class DirectoryServiceSharedDirectoryTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DirectoryServiceSharedDirectoryTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DirectoryServiceSharedDirectoryTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory aws_directory_service_shared_directory}
*/
export declare class DirectoryServiceSharedDirectory extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_directory_service_shared_directory";
    /**
    * Generates CDKTF code for importing a DirectoryServiceSharedDirectory resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DirectoryServiceSharedDirectory to import
    * @param importFromId The id of the existing DirectoryServiceSharedDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DirectoryServiceSharedDirectory to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory aws_directory_service_shared_directory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DirectoryServiceSharedDirectoryConfig
    */
    constructor(scope: Construct, id: string, config: DirectoryServiceSharedDirectoryConfig);
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    get directoryIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _method?;
    get method(): string;
    set method(value: string);
    resetMethod(): void;
    get methodInput(): string | undefined;
    private _notes?;
    get notes(): string;
    set notes(value: string);
    resetNotes(): void;
    get notesInput(): string | undefined;
    get sharedDirectoryId(): string;
    private _target;
    get target(): DirectoryServiceSharedDirectoryTargetOutputReference;
    putTarget(value: DirectoryServiceSharedDirectoryTarget): void;
    get targetInput(): DirectoryServiceSharedDirectoryTarget | undefined;
    private _timeouts;
    get timeouts(): DirectoryServiceSharedDirectoryTimeoutsOutputReference;
    putTimeouts(value: DirectoryServiceSharedDirectoryTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DirectoryServiceSharedDirectoryTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
