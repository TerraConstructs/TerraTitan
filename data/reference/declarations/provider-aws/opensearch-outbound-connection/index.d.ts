/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpensearchOutboundConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#accept_connection OpensearchOutboundConnection#accept_connection}
    */
    readonly acceptConnection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#connection_alias OpensearchOutboundConnection#connection_alias}
    */
    readonly connectionAlias: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#connection_mode OpensearchOutboundConnection#connection_mode}
    */
    readonly connectionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#id OpensearchOutboundConnection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * connection_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#connection_properties OpensearchOutboundConnection#connection_properties}
    */
    readonly connectionProperties?: OpensearchOutboundConnectionConnectionProperties;
    /**
    * local_domain_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#local_domain_info OpensearchOutboundConnection#local_domain_info}
    */
    readonly localDomainInfo: OpensearchOutboundConnectionLocalDomainInfo;
    /**
    * remote_domain_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#remote_domain_info OpensearchOutboundConnection#remote_domain_info}
    */
    readonly remoteDomainInfo: OpensearchOutboundConnectionRemoteDomainInfo;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#timeouts OpensearchOutboundConnection#timeouts}
    */
    readonly timeouts?: OpensearchOutboundConnectionTimeouts;
}
export interface OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#skip_unavailable OpensearchOutboundConnection#skip_unavailable}
    */
    readonly skipUnavailable?: string;
}
export declare function opensearchOutboundConnectionConnectionPropertiesCrossClusterSearchToTerraform(struct?: OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference | OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch): any;
export declare function opensearchOutboundConnectionConnectionPropertiesCrossClusterSearchToHclTerraform(struct?: OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference | OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch): any;
export declare class OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch | undefined;
    set internalValue(value: OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch | undefined);
    private _skipUnavailable?;
    get skipUnavailable(): string;
    set skipUnavailable(value: string);
    resetSkipUnavailable(): void;
    get skipUnavailableInput(): string | undefined;
}
export interface OpensearchOutboundConnectionConnectionProperties {
    /**
    * cross_cluster_search block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#cross_cluster_search OpensearchOutboundConnection#cross_cluster_search}
    */
    readonly crossClusterSearch?: OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch;
}
export declare function opensearchOutboundConnectionConnectionPropertiesToTerraform(struct?: OpensearchOutboundConnectionConnectionPropertiesOutputReference | OpensearchOutboundConnectionConnectionProperties): any;
export declare function opensearchOutboundConnectionConnectionPropertiesToHclTerraform(struct?: OpensearchOutboundConnectionConnectionPropertiesOutputReference | OpensearchOutboundConnectionConnectionProperties): any;
export declare class OpensearchOutboundConnectionConnectionPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchOutboundConnectionConnectionProperties | undefined;
    set internalValue(value: OpensearchOutboundConnectionConnectionProperties | undefined);
    get endpoint(): string;
    private _crossClusterSearch;
    get crossClusterSearch(): OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference;
    putCrossClusterSearch(value: OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch): void;
    resetCrossClusterSearch(): void;
    get crossClusterSearchInput(): OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch | undefined;
}
export interface OpensearchOutboundConnectionLocalDomainInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}
    */
    readonly ownerId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}
    */
    readonly region: string;
}
export declare function opensearchOutboundConnectionLocalDomainInfoToTerraform(struct?: OpensearchOutboundConnectionLocalDomainInfoOutputReference | OpensearchOutboundConnectionLocalDomainInfo): any;
export declare function opensearchOutboundConnectionLocalDomainInfoToHclTerraform(struct?: OpensearchOutboundConnectionLocalDomainInfoOutputReference | OpensearchOutboundConnectionLocalDomainInfo): any;
export declare class OpensearchOutboundConnectionLocalDomainInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchOutboundConnectionLocalDomainInfo | undefined;
    set internalValue(value: OpensearchOutboundConnectionLocalDomainInfo | undefined);
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _ownerId?;
    get ownerId(): string;
    set ownerId(value: string);
    get ownerIdInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string | undefined;
}
export interface OpensearchOutboundConnectionRemoteDomainInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}
    */
    readonly ownerId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}
    */
    readonly region: string;
}
export declare function opensearchOutboundConnectionRemoteDomainInfoToTerraform(struct?: OpensearchOutboundConnectionRemoteDomainInfoOutputReference | OpensearchOutboundConnectionRemoteDomainInfo): any;
export declare function opensearchOutboundConnectionRemoteDomainInfoToHclTerraform(struct?: OpensearchOutboundConnectionRemoteDomainInfoOutputReference | OpensearchOutboundConnectionRemoteDomainInfo): any;
export declare class OpensearchOutboundConnectionRemoteDomainInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchOutboundConnectionRemoteDomainInfo | undefined;
    set internalValue(value: OpensearchOutboundConnectionRemoteDomainInfo | undefined);
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _ownerId?;
    get ownerId(): string;
    set ownerId(value: string);
    get ownerIdInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string | undefined;
}
export interface OpensearchOutboundConnectionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#create OpensearchOutboundConnection#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#delete OpensearchOutboundConnection#delete}
    */
    readonly delete?: string;
}
export declare function opensearchOutboundConnectionTimeoutsToTerraform(struct?: OpensearchOutboundConnectionTimeouts | cdktf.IResolvable): any;
export declare function opensearchOutboundConnectionTimeoutsToHclTerraform(struct?: OpensearchOutboundConnectionTimeouts | cdktf.IResolvable): any;
export declare class OpensearchOutboundConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchOutboundConnectionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: OpensearchOutboundConnectionTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection aws_opensearch_outbound_connection}
*/
export declare class OpensearchOutboundConnection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opensearch_outbound_connection";
    /**
    * Generates CDKTF code for importing a OpensearchOutboundConnection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpensearchOutboundConnection to import
    * @param importFromId The id of the existing OpensearchOutboundConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpensearchOutboundConnection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_outbound_connection aws_opensearch_outbound_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpensearchOutboundConnectionConfig
    */
    constructor(scope: Construct, id: string, config: OpensearchOutboundConnectionConfig);
    private _acceptConnection?;
    get acceptConnection(): boolean | cdktf.IResolvable;
    set acceptConnection(value: boolean | cdktf.IResolvable);
    resetAcceptConnection(): void;
    get acceptConnectionInput(): boolean | cdktf.IResolvable | undefined;
    private _connectionAlias?;
    get connectionAlias(): string;
    set connectionAlias(value: string);
    get connectionAliasInput(): string | undefined;
    private _connectionMode?;
    get connectionMode(): string;
    set connectionMode(value: string);
    resetConnectionMode(): void;
    get connectionModeInput(): string | undefined;
    get connectionStatus(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _connectionProperties;
    get connectionProperties(): OpensearchOutboundConnectionConnectionPropertiesOutputReference;
    putConnectionProperties(value: OpensearchOutboundConnectionConnectionProperties): void;
    resetConnectionProperties(): void;
    get connectionPropertiesInput(): OpensearchOutboundConnectionConnectionProperties | undefined;
    private _localDomainInfo;
    get localDomainInfo(): OpensearchOutboundConnectionLocalDomainInfoOutputReference;
    putLocalDomainInfo(value: OpensearchOutboundConnectionLocalDomainInfo): void;
    get localDomainInfoInput(): OpensearchOutboundConnectionLocalDomainInfo | undefined;
    private _remoteDomainInfo;
    get remoteDomainInfo(): OpensearchOutboundConnectionRemoteDomainInfoOutputReference;
    putRemoteDomainInfo(value: OpensearchOutboundConnectionRemoteDomainInfo): void;
    get remoteDomainInfoInput(): OpensearchOutboundConnectionRemoteDomainInfo | undefined;
    private _timeouts;
    get timeouts(): OpensearchOutboundConnectionTimeoutsOutputReference;
    putTimeouts(value: OpensearchOutboundConnectionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | OpensearchOutboundConnectionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
