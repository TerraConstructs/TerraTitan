/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DirectoryServiceSharedDirectoryAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory_accepter#id DirectoryServiceSharedDirectoryAccepter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory_accepter#shared_directory_id DirectoryServiceSharedDirectoryAccepter#shared_directory_id}
    */
    readonly sharedDirectoryId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory_accepter#timeouts DirectoryServiceSharedDirectoryAccepter#timeouts}
    */
    readonly timeouts?: DirectoryServiceSharedDirectoryAccepterTimeouts;
}
export interface DirectoryServiceSharedDirectoryAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory_accepter#create DirectoryServiceSharedDirectoryAccepter#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory_accepter#delete DirectoryServiceSharedDirectoryAccepter#delete}
    */
    readonly delete?: string;
}
export declare function directoryServiceSharedDirectoryAccepterTimeoutsToTerraform(struct?: DirectoryServiceSharedDirectoryAccepterTimeouts | cdktf.IResolvable): any;
export declare function directoryServiceSharedDirectoryAccepterTimeoutsToHclTerraform(struct?: DirectoryServiceSharedDirectoryAccepterTimeouts | cdktf.IResolvable): any;
export declare class DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DirectoryServiceSharedDirectoryAccepterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DirectoryServiceSharedDirectoryAccepterTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory_accepter aws_directory_service_shared_directory_accepter}
*/
export declare class DirectoryServiceSharedDirectoryAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_directory_service_shared_directory_accepter";
    /**
    * Generates CDKTF code for importing a DirectoryServiceSharedDirectoryAccepter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DirectoryServiceSharedDirectoryAccepter to import
    * @param importFromId The id of the existing DirectoryServiceSharedDirectoryAccepter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory_accepter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DirectoryServiceSharedDirectoryAccepter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_shared_directory_accepter aws_directory_service_shared_directory_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DirectoryServiceSharedDirectoryAccepterConfig
    */
    constructor(scope: Construct, id: string, config: DirectoryServiceSharedDirectoryAccepterConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get method(): string;
    get notes(): string;
    get ownerAccountId(): string;
    get ownerDirectoryId(): string;
    private _sharedDirectoryId?;
    get sharedDirectoryId(): string;
    set sharedDirectoryId(value: string);
    get sharedDirectoryIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference;
    putTimeouts(value: DirectoryServiceSharedDirectoryAccepterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DirectoryServiceSharedDirectoryAccepterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
