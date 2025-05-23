/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DirectoryServiceTrustConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_trust#conditional_forwarder_ip_addrs DirectoryServiceTrust#conditional_forwarder_ip_addrs}
    */
    readonly conditionalForwarderIpAddrs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_trust#delete_associated_conditional_forwarder DirectoryServiceTrust#delete_associated_conditional_forwarder}
    */
    readonly deleteAssociatedConditionalForwarder?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_trust#directory_id DirectoryServiceTrust#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_trust#remote_domain_name DirectoryServiceTrust#remote_domain_name}
    */
    readonly remoteDomainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_trust#selective_auth DirectoryServiceTrust#selective_auth}
    */
    readonly selectiveAuth?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_trust#trust_direction DirectoryServiceTrust#trust_direction}
    */
    readonly trustDirection: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_trust#trust_password DirectoryServiceTrust#trust_password}
    */
    readonly trustPassword: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_trust#trust_type DirectoryServiceTrust#trust_type}
    */
    readonly trustType?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_trust aws_directory_service_trust}
*/
export declare class DirectoryServiceTrust extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_directory_service_trust";
    /**
    * Generates CDKTF code for importing a DirectoryServiceTrust resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DirectoryServiceTrust to import
    * @param importFromId The id of the existing DirectoryServiceTrust that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_trust#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DirectoryServiceTrust to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_trust aws_directory_service_trust} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DirectoryServiceTrustConfig
    */
    constructor(scope: Construct, id: string, config: DirectoryServiceTrustConfig);
    private _conditionalForwarderIpAddrs?;
    get conditionalForwarderIpAddrs(): string[];
    set conditionalForwarderIpAddrs(value: string[]);
    resetConditionalForwarderIpAddrs(): void;
    get conditionalForwarderIpAddrsInput(): string[] | undefined;
    get createdDateTime(): string;
    private _deleteAssociatedConditionalForwarder?;
    get deleteAssociatedConditionalForwarder(): boolean | cdktf.IResolvable;
    set deleteAssociatedConditionalForwarder(value: boolean | cdktf.IResolvable);
    resetDeleteAssociatedConditionalForwarder(): void;
    get deleteAssociatedConditionalForwarderInput(): boolean | cdktf.IResolvable | undefined;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    get directoryIdInput(): string | undefined;
    get id(): string;
    get lastUpdatedDateTime(): string;
    private _remoteDomainName?;
    get remoteDomainName(): string;
    set remoteDomainName(value: string);
    get remoteDomainNameInput(): string | undefined;
    private _selectiveAuth?;
    get selectiveAuth(): string;
    set selectiveAuth(value: string);
    resetSelectiveAuth(): void;
    get selectiveAuthInput(): string | undefined;
    get stateLastUpdatedDateTime(): string;
    private _trustDirection?;
    get trustDirection(): string;
    set trustDirection(value: string);
    get trustDirectionInput(): string | undefined;
    private _trustPassword?;
    get trustPassword(): string;
    set trustPassword(value: string);
    get trustPasswordInput(): string | undefined;
    get trustState(): string;
    get trustStateReason(): string;
    private _trustType?;
    get trustType(): string;
    set trustType(value: string);
    resetTrustType(): void;
    get trustTypeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
