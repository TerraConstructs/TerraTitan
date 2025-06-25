/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkfirewallTlsInspectionConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#description NetworkfirewallTlsInspectionConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#encryption_configuration NetworkfirewallTlsInspectionConfiguration#encryption_configuration}
    */
    readonly encryptionConfiguration?: NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#name NetworkfirewallTlsInspectionConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#tags NetworkfirewallTlsInspectionConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#timeouts NetworkfirewallTlsInspectionConfiguration#timeouts}
    */
    readonly timeouts?: NetworkfirewallTlsInspectionConfigurationTimeouts;
    /**
    * tls_inspection_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#tls_inspection_configuration NetworkfirewallTlsInspectionConfiguration#tls_inspection_configuration}
    */
    readonly tlsInspectionConfiguration?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration[] | cdktf.IResolvable;
}
export interface NetworkfirewallTlsInspectionConfigurationCertificateAuthority {
}
export declare function networkfirewallTlsInspectionConfigurationCertificateAuthorityToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationCertificateAuthority): any;
export declare function networkfirewallTlsInspectionConfigurationCertificateAuthorityToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationCertificateAuthority): any;
export declare class NetworkfirewallTlsInspectionConfigurationCertificateAuthorityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallTlsInspectionConfigurationCertificateAuthority | undefined;
    set internalValue(value: NetworkfirewallTlsInspectionConfigurationCertificateAuthority | undefined);
    get certificateArn(): string;
    get certificateSerial(): string;
    get status(): string;
    get statusMessage(): string;
}
export declare class NetworkfirewallTlsInspectionConfigurationCertificateAuthorityList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallTlsInspectionConfigurationCertificateAuthorityOutputReference;
}
export interface NetworkfirewallTlsInspectionConfigurationCertificates {
}
export declare function networkfirewallTlsInspectionConfigurationCertificatesToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationCertificates): any;
export declare function networkfirewallTlsInspectionConfigurationCertificatesToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationCertificates): any;
export declare class NetworkfirewallTlsInspectionConfigurationCertificatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallTlsInspectionConfigurationCertificates | undefined;
    set internalValue(value: NetworkfirewallTlsInspectionConfigurationCertificates | undefined);
    get certificateArn(): string;
    get certificateSerial(): string;
    get status(): string;
    get statusMessage(): string;
}
export declare class NetworkfirewallTlsInspectionConfigurationCertificatesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallTlsInspectionConfigurationCertificatesOutputReference;
}
export interface NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#key_id NetworkfirewallTlsInspectionConfiguration#key_id}
    */
    readonly keyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#type NetworkfirewallTlsInspectionConfiguration#type}
    */
    readonly type?: string;
}
export declare function networkfirewallTlsInspectionConfigurationEncryptionConfigurationToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration | cdktf.IResolvable): any;
export declare function networkfirewallTlsInspectionConfigurationEncryptionConfigurationToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration | cdktf.IResolvable): any;
export declare class NetworkfirewallTlsInspectionConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration | cdktf.IResolvable | undefined);
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    resetKeyId(): void;
    get keyIdInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class NetworkfirewallTlsInspectionConfigurationEncryptionConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallTlsInspectionConfigurationEncryptionConfigurationOutputReference;
}
export interface NetworkfirewallTlsInspectionConfigurationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#create NetworkfirewallTlsInspectionConfiguration#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#delete NetworkfirewallTlsInspectionConfiguration#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#update NetworkfirewallTlsInspectionConfiguration#update}
    */
    readonly update?: string;
}
export declare function networkfirewallTlsInspectionConfigurationTimeoutsToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTimeouts | cdktf.IResolvable): any;
export declare function networkfirewallTlsInspectionConfigurationTimeoutsToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTimeouts | cdktf.IResolvable): any;
export declare class NetworkfirewallTlsInspectionConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallTlsInspectionConfigurationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallTlsInspectionConfigurationTimeouts | cdktf.IResolvable | undefined);
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
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#revoked_status_action NetworkfirewallTlsInspectionConfiguration#revoked_status_action}
    */
    readonly revokedStatusAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#unknown_status_action NetworkfirewallTlsInspectionConfiguration#unknown_status_action}
    */
    readonly unknownStatusAction?: string;
}
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus | cdktf.IResolvable): any;
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus | cdktf.IResolvable): any;
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus | cdktf.IResolvable | undefined);
    private _revokedStatusAction?;
    get revokedStatusAction(): string;
    set revokedStatusAction(value: string);
    resetRevokedStatusAction(): void;
    get revokedStatusActionInput(): string | undefined;
    private _unknownStatusAction?;
    get unknownStatusAction(): string;
    set unknownStatusAction(value: string);
    resetUnknownStatusAction(): void;
    get unknownStatusActionInput(): string | undefined;
}
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusOutputReference;
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#address_definition NetworkfirewallTlsInspectionConfiguration#address_definition}
    */
    readonly addressDefinition: string;
}
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination | cdktf.IResolvable): any;
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination | cdktf.IResolvable): any;
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination | cdktf.IResolvable | undefined);
    private _addressDefinition?;
    get addressDefinition(): string;
    set addressDefinition(value: string);
    get addressDefinitionInput(): string | undefined;
}
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationOutputReference;
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#from_port NetworkfirewallTlsInspectionConfiguration#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#to_port NetworkfirewallTlsInspectionConfiguration#to_port}
    */
    readonly toPort: number;
}
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts | cdktf.IResolvable): any;
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts | cdktf.IResolvable): any;
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts | cdktf.IResolvable | undefined);
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
    get fromPortInput(): number | undefined;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    get toPortInput(): number | undefined;
}
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsOutputReference;
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#address_definition NetworkfirewallTlsInspectionConfiguration#address_definition}
    */
    readonly addressDefinition: string;
}
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource | cdktf.IResolvable): any;
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource | cdktf.IResolvable): any;
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource | cdktf.IResolvable | undefined);
    private _addressDefinition?;
    get addressDefinition(): string;
    set addressDefinition(value: string);
    get addressDefinitionInput(): string | undefined;
}
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceOutputReference;
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#from_port NetworkfirewallTlsInspectionConfiguration#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#to_port NetworkfirewallTlsInspectionConfiguration#to_port}
    */
    readonly toPort: number;
}
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts | cdktf.IResolvable): any;
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts | cdktf.IResolvable): any;
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts | cdktf.IResolvable | undefined);
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
    get fromPortInput(): number | undefined;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    get toPortInput(): number | undefined;
}
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsOutputReference;
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#protocols NetworkfirewallTlsInspectionConfiguration#protocols}
    */
    readonly protocols: number[];
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#destination NetworkfirewallTlsInspectionConfiguration#destination}
    */
    readonly destination?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination[] | cdktf.IResolvable;
    /**
    * destination_ports block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#destination_ports NetworkfirewallTlsInspectionConfiguration#destination_ports}
    */
    readonly destinationPorts?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts[] | cdktf.IResolvable;
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#source NetworkfirewallTlsInspectionConfiguration#source}
    */
    readonly source?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource[] | cdktf.IResolvable;
    /**
    * source_ports block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#source_ports NetworkfirewallTlsInspectionConfiguration#source_ports}
    */
    readonly sourcePorts?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts[] | cdktf.IResolvable;
}
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope | cdktf.IResolvable): any;
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope | cdktf.IResolvable): any;
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope | cdktf.IResolvable | undefined);
    private _protocols?;
    get protocols(): number[];
    set protocols(value: number[]);
    get protocolsInput(): number[] | undefined;
    private _destination;
    get destination(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationList;
    putDestination(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination[] | cdktf.IResolvable): void;
    resetDestination(): void;
    get destinationInput(): cdktf.IResolvable | NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination[] | undefined;
    private _destinationPorts;
    get destinationPorts(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsList;
    putDestinationPorts(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts[] | cdktf.IResolvable): void;
    resetDestinationPorts(): void;
    get destinationPortsInput(): cdktf.IResolvable | NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts[] | undefined;
    private _source;
    get source(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceList;
    putSource(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource[] | cdktf.IResolvable): void;
    resetSource(): void;
    get sourceInput(): cdktf.IResolvable | NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource[] | undefined;
    private _sourcePorts;
    get sourcePorts(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsList;
    putSourcePorts(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts[] | cdktf.IResolvable): void;
    resetSourcePorts(): void;
    get sourcePortsInput(): cdktf.IResolvable | NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts[] | undefined;
}
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeOutputReference;
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#resource_arn NetworkfirewallTlsInspectionConfiguration#resource_arn}
    */
    readonly resourceArn?: string;
}
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate | cdktf.IResolvable): any;
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate | cdktf.IResolvable): any;
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate | cdktf.IResolvable | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    resetResourceArn(): void;
    get resourceArnInput(): string | undefined;
}
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateOutputReference;
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#certificate_authority_arn NetworkfirewallTlsInspectionConfiguration#certificate_authority_arn}
    */
    readonly certificateAuthorityArn?: string;
    /**
    * check_certificate_revocation_status block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#check_certificate_revocation_status NetworkfirewallTlsInspectionConfiguration#check_certificate_revocation_status}
    */
    readonly checkCertificateRevocationStatus?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus[] | cdktf.IResolvable;
    /**
    * scope block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#scope NetworkfirewallTlsInspectionConfiguration#scope}
    */
    readonly scope?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope[] | cdktf.IResolvable;
    /**
    * server_certificate block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#server_certificate NetworkfirewallTlsInspectionConfiguration#server_certificate}
    */
    readonly serverCertificate?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate[] | cdktf.IResolvable;
}
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration | cdktf.IResolvable): any;
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration | cdktf.IResolvable): any;
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration | cdktf.IResolvable | undefined);
    private _certificateAuthorityArn?;
    get certificateAuthorityArn(): string;
    set certificateAuthorityArn(value: string);
    resetCertificateAuthorityArn(): void;
    get certificateAuthorityArnInput(): string | undefined;
    private _checkCertificateRevocationStatus;
    get checkCertificateRevocationStatus(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusList;
    putCheckCertificateRevocationStatus(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus[] | cdktf.IResolvable): void;
    resetCheckCertificateRevocationStatus(): void;
    get checkCertificateRevocationStatusInput(): cdktf.IResolvable | NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus[] | undefined;
    private _scope;
    get scope(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeList;
    putScope(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope[] | cdktf.IResolvable): void;
    resetScope(): void;
    get scopeInput(): cdktf.IResolvable | NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope[] | undefined;
    private _serverCertificate;
    get serverCertificate(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateList;
    putServerCertificate(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate[] | cdktf.IResolvable): void;
    resetServerCertificate(): void;
    get serverCertificateInput(): cdktf.IResolvable | NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate[] | undefined;
}
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationOutputReference;
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration {
    /**
    * server_certificate_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#server_certificate_configuration NetworkfirewallTlsInspectionConfiguration#server_certificate_configuration}
    */
    readonly serverCertificateConfiguration?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration[] | cdktf.IResolvable;
}
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration | cdktf.IResolvable): any;
export declare function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration | cdktf.IResolvable): any;
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration | cdktf.IResolvable | undefined);
    private _serverCertificateConfiguration;
    get serverCertificateConfiguration(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationList;
    putServerCertificateConfiguration(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration[] | cdktf.IResolvable): void;
    resetServerCertificateConfiguration(): void;
    get serverCertificateConfigurationInput(): cdktf.IResolvable | NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration[] | undefined;
}
export declare class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration aws_networkfirewall_tls_inspection_configuration}
*/
export declare class NetworkfirewallTlsInspectionConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkfirewall_tls_inspection_configuration";
    /**
    * Generates CDKTF code for importing a NetworkfirewallTlsInspectionConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkfirewallTlsInspectionConfiguration to import
    * @param importFromId The id of the existing NetworkfirewallTlsInspectionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkfirewallTlsInspectionConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkfirewall_tls_inspection_configuration aws_networkfirewall_tls_inspection_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallTlsInspectionConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: NetworkfirewallTlsInspectionConfigurationConfig);
    get arn(): string;
    private _certificateAuthority;
    get certificateAuthority(): NetworkfirewallTlsInspectionConfigurationCertificateAuthorityList;
    private _certificates;
    get certificates(): NetworkfirewallTlsInspectionConfigurationCertificatesList;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _encryptionConfiguration;
    get encryptionConfiguration(): NetworkfirewallTlsInspectionConfigurationEncryptionConfigurationList;
    putEncryptionConfiguration(value: NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration[] | cdktf.IResolvable): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): cdktf.IResolvable | NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration[] | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get numberOfAssociations(): number;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    get tlsInspectionConfigurationId(): string;
    get updateToken(): string;
    private _timeouts;
    get timeouts(): NetworkfirewallTlsInspectionConfigurationTimeoutsOutputReference;
    putTimeouts(value: NetworkfirewallTlsInspectionConfigurationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkfirewallTlsInspectionConfigurationTimeouts | undefined;
    private _tlsInspectionConfiguration;
    get tlsInspectionConfiguration(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationList;
    putTlsInspectionConfiguration(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration[] | cdktf.IResolvable): void;
    resetTlsInspectionConfiguration(): void;
    get tlsInspectionConfigurationInput(): cdktf.IResolvable | NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
