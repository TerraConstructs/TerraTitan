/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VerifiedaccessEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#application_domain VerifiedaccessEndpoint#application_domain}
    */
    readonly applicationDomain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#attachment_type VerifiedaccessEndpoint#attachment_type}
    */
    readonly attachmentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#description VerifiedaccessEndpoint#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#domain_certificate_arn VerifiedaccessEndpoint#domain_certificate_arn}
    */
    readonly domainCertificateArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#endpoint_domain_prefix VerifiedaccessEndpoint#endpoint_domain_prefix}
    */
    readonly endpointDomainPrefix: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#endpoint_type VerifiedaccessEndpoint#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#id VerifiedaccessEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#policy_document VerifiedaccessEndpoint#policy_document}
    */
    readonly policyDocument?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#security_group_ids VerifiedaccessEndpoint#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#tags VerifiedaccessEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#tags_all VerifiedaccessEndpoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#verified_access_group_id VerifiedaccessEndpoint#verified_access_group_id}
    */
    readonly verifiedAccessGroupId: string;
    /**
    * load_balancer_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#load_balancer_options VerifiedaccessEndpoint#load_balancer_options}
    */
    readonly loadBalancerOptions?: VerifiedaccessEndpointLoadBalancerOptions;
    /**
    * network_interface_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#network_interface_options VerifiedaccessEndpoint#network_interface_options}
    */
    readonly networkInterfaceOptions?: VerifiedaccessEndpointNetworkInterfaceOptions;
    /**
    * sse_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#sse_specification VerifiedaccessEndpoint#sse_specification}
    */
    readonly sseSpecification?: VerifiedaccessEndpointSseSpecification;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#timeouts VerifiedaccessEndpoint#timeouts}
    */
    readonly timeouts?: VerifiedaccessEndpointTimeouts;
}
export interface VerifiedaccessEndpointLoadBalancerOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#load_balancer_arn VerifiedaccessEndpoint#load_balancer_arn}
    */
    readonly loadBalancerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export declare function verifiedaccessEndpointLoadBalancerOptionsToTerraform(struct?: VerifiedaccessEndpointLoadBalancerOptionsOutputReference | VerifiedaccessEndpointLoadBalancerOptions): any;
export declare function verifiedaccessEndpointLoadBalancerOptionsToHclTerraform(struct?: VerifiedaccessEndpointLoadBalancerOptionsOutputReference | VerifiedaccessEndpointLoadBalancerOptions): any;
export declare class VerifiedaccessEndpointLoadBalancerOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VerifiedaccessEndpointLoadBalancerOptions | undefined;
    set internalValue(value: VerifiedaccessEndpointLoadBalancerOptions | undefined);
    private _loadBalancerArn?;
    get loadBalancerArn(): string;
    set loadBalancerArn(value: string);
    resetLoadBalancerArn(): void;
    get loadBalancerArnInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
}
export interface VerifiedaccessEndpointNetworkInterfaceOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#network_interface_id VerifiedaccessEndpoint#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}
    */
    readonly protocol?: string;
}
export declare function verifiedaccessEndpointNetworkInterfaceOptionsToTerraform(struct?: VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference | VerifiedaccessEndpointNetworkInterfaceOptions): any;
export declare function verifiedaccessEndpointNetworkInterfaceOptionsToHclTerraform(struct?: VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference | VerifiedaccessEndpointNetworkInterfaceOptions): any;
export declare class VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VerifiedaccessEndpointNetworkInterfaceOptions | undefined;
    set internalValue(value: VerifiedaccessEndpointNetworkInterfaceOptions | undefined);
    private _networkInterfaceId?;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    resetNetworkInterfaceId(): void;
    get networkInterfaceIdInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
}
export interface VerifiedaccessEndpointSseSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#customer_managed_key_enabled VerifiedaccessEndpoint#customer_managed_key_enabled}
    */
    readonly customerManagedKeyEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#kms_key_arn VerifiedaccessEndpoint#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export declare function verifiedaccessEndpointSseSpecificationToTerraform(struct?: VerifiedaccessEndpointSseSpecificationOutputReference | VerifiedaccessEndpointSseSpecification): any;
export declare function verifiedaccessEndpointSseSpecificationToHclTerraform(struct?: VerifiedaccessEndpointSseSpecificationOutputReference | VerifiedaccessEndpointSseSpecification): any;
export declare class VerifiedaccessEndpointSseSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VerifiedaccessEndpointSseSpecification | undefined;
    set internalValue(value: VerifiedaccessEndpointSseSpecification | undefined);
    private _customerManagedKeyEnabled?;
    get customerManagedKeyEnabled(): boolean | cdktf.IResolvable;
    set customerManagedKeyEnabled(value: boolean | cdktf.IResolvable);
    resetCustomerManagedKeyEnabled(): void;
    get customerManagedKeyEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
}
export interface VerifiedaccessEndpointTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#create VerifiedaccessEndpoint#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#delete VerifiedaccessEndpoint#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#update VerifiedaccessEndpoint#update}
    */
    readonly update?: string;
}
export declare function verifiedaccessEndpointTimeoutsToTerraform(struct?: VerifiedaccessEndpointTimeouts | cdktf.IResolvable): any;
export declare function verifiedaccessEndpointTimeoutsToHclTerraform(struct?: VerifiedaccessEndpointTimeouts | cdktf.IResolvable): any;
export declare class VerifiedaccessEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VerifiedaccessEndpointTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedaccessEndpointTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint aws_verifiedaccess_endpoint}
*/
export declare class VerifiedaccessEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_verifiedaccess_endpoint";
    /**
    * Generates CDKTF code for importing a VerifiedaccessEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VerifiedaccessEndpoint to import
    * @param importFromId The id of the existing VerifiedaccessEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VerifiedaccessEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_endpoint aws_verifiedaccess_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VerifiedaccessEndpointConfig
    */
    constructor(scope: Construct, id: string, config: VerifiedaccessEndpointConfig);
    private _applicationDomain?;
    get applicationDomain(): string;
    set applicationDomain(value: string);
    get applicationDomainInput(): string | undefined;
    private _attachmentType?;
    get attachmentType(): string;
    set attachmentType(value: string);
    get attachmentTypeInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get deviceValidationDomain(): string;
    private _domainCertificateArn?;
    get domainCertificateArn(): string;
    set domainCertificateArn(value: string);
    get domainCertificateArnInput(): string | undefined;
    get endpointDomain(): string;
    private _endpointDomainPrefix?;
    get endpointDomainPrefix(): string;
    set endpointDomainPrefix(value: string);
    get endpointDomainPrefixInput(): string | undefined;
    private _endpointType?;
    get endpointType(): string;
    set endpointType(value: string);
    get endpointTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _policyDocument?;
    get policyDocument(): string;
    set policyDocument(value: string);
    resetPolicyDocument(): void;
    get policyDocumentInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
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
    private _verifiedAccessGroupId?;
    get verifiedAccessGroupId(): string;
    set verifiedAccessGroupId(value: string);
    get verifiedAccessGroupIdInput(): string | undefined;
    get verifiedAccessInstanceId(): string;
    private _loadBalancerOptions;
    get loadBalancerOptions(): VerifiedaccessEndpointLoadBalancerOptionsOutputReference;
    putLoadBalancerOptions(value: VerifiedaccessEndpointLoadBalancerOptions): void;
    resetLoadBalancerOptions(): void;
    get loadBalancerOptionsInput(): VerifiedaccessEndpointLoadBalancerOptions | undefined;
    private _networkInterfaceOptions;
    get networkInterfaceOptions(): VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference;
    putNetworkInterfaceOptions(value: VerifiedaccessEndpointNetworkInterfaceOptions): void;
    resetNetworkInterfaceOptions(): void;
    get networkInterfaceOptionsInput(): VerifiedaccessEndpointNetworkInterfaceOptions | undefined;
    private _sseSpecification;
    get sseSpecification(): VerifiedaccessEndpointSseSpecificationOutputReference;
    putSseSpecification(value: VerifiedaccessEndpointSseSpecification): void;
    resetSseSpecification(): void;
    get sseSpecificationInput(): VerifiedaccessEndpointSseSpecification | undefined;
    private _timeouts;
    get timeouts(): VerifiedaccessEndpointTimeoutsOutputReference;
    putTimeouts(value: VerifiedaccessEndpointTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VerifiedaccessEndpointTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
