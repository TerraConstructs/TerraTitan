/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailContainerServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#id LightsailContainerService#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}
    */
    readonly isDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#name LightsailContainerService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#power LightsailContainerService#power}
    */
    readonly power: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#scale LightsailContainerService#scale}
    */
    readonly scale: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#tags LightsailContainerService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#tags_all LightsailContainerService#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * private_registry_access block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#private_registry_access LightsailContainerService#private_registry_access}
    */
    readonly privateRegistryAccess?: LightsailContainerServicePrivateRegistryAccess;
    /**
    * public_domain_names block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#public_domain_names LightsailContainerService#public_domain_names}
    */
    readonly publicDomainNames?: LightsailContainerServicePublicDomainNames;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#timeouts LightsailContainerService#timeouts}
    */
    readonly timeouts?: LightsailContainerServiceTimeouts;
}
export interface LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#is_active LightsailContainerService#is_active}
    */
    readonly isActive?: boolean | cdktf.IResolvable;
}
export declare function lightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleToTerraform(struct?: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference | LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole): any;
export declare function lightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleToHclTerraform(struct?: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference | LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole): any;
export declare class LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole | undefined;
    set internalValue(value: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole | undefined);
    private _isActive?;
    get isActive(): boolean | cdktf.IResolvable;
    set isActive(value: boolean | cdktf.IResolvable);
    resetIsActive(): void;
    get isActiveInput(): boolean | cdktf.IResolvable | undefined;
    get principalArn(): string;
}
export interface LightsailContainerServicePrivateRegistryAccess {
    /**
    * ecr_image_puller_role block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#ecr_image_puller_role LightsailContainerService#ecr_image_puller_role}
    */
    readonly ecrImagePullerRole?: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole;
}
export declare function lightsailContainerServicePrivateRegistryAccessToTerraform(struct?: LightsailContainerServicePrivateRegistryAccessOutputReference | LightsailContainerServicePrivateRegistryAccess): any;
export declare function lightsailContainerServicePrivateRegistryAccessToHclTerraform(struct?: LightsailContainerServicePrivateRegistryAccessOutputReference | LightsailContainerServicePrivateRegistryAccess): any;
export declare class LightsailContainerServicePrivateRegistryAccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LightsailContainerServicePrivateRegistryAccess | undefined;
    set internalValue(value: LightsailContainerServicePrivateRegistryAccess | undefined);
    private _ecrImagePullerRole;
    get ecrImagePullerRole(): LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference;
    putEcrImagePullerRole(value: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole): void;
    resetEcrImagePullerRole(): void;
    get ecrImagePullerRoleInput(): LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole | undefined;
}
export interface LightsailContainerServicePublicDomainNamesCertificate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#certificate_name LightsailContainerService#certificate_name}
    */
    readonly certificateName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#domain_names LightsailContainerService#domain_names}
    */
    readonly domainNames: string[];
}
export declare function lightsailContainerServicePublicDomainNamesCertificateToTerraform(struct?: LightsailContainerServicePublicDomainNamesCertificate | cdktf.IResolvable): any;
export declare function lightsailContainerServicePublicDomainNamesCertificateToHclTerraform(struct?: LightsailContainerServicePublicDomainNamesCertificate | cdktf.IResolvable): any;
export declare class LightsailContainerServicePublicDomainNamesCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LightsailContainerServicePublicDomainNamesCertificate | cdktf.IResolvable | undefined;
    set internalValue(value: LightsailContainerServicePublicDomainNamesCertificate | cdktf.IResolvable | undefined);
    private _certificateName?;
    get certificateName(): string;
    set certificateName(value: string);
    get certificateNameInput(): string | undefined;
    private _domainNames?;
    get domainNames(): string[];
    set domainNames(value: string[]);
    get domainNamesInput(): string[] | undefined;
}
export declare class LightsailContainerServicePublicDomainNamesCertificateList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LightsailContainerServicePublicDomainNamesCertificate[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LightsailContainerServicePublicDomainNamesCertificateOutputReference;
}
export interface LightsailContainerServicePublicDomainNames {
    /**
    * certificate block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#certificate LightsailContainerService#certificate}
    */
    readonly certificate: LightsailContainerServicePublicDomainNamesCertificate[] | cdktf.IResolvable;
}
export declare function lightsailContainerServicePublicDomainNamesToTerraform(struct?: LightsailContainerServicePublicDomainNamesOutputReference | LightsailContainerServicePublicDomainNames): any;
export declare function lightsailContainerServicePublicDomainNamesToHclTerraform(struct?: LightsailContainerServicePublicDomainNamesOutputReference | LightsailContainerServicePublicDomainNames): any;
export declare class LightsailContainerServicePublicDomainNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LightsailContainerServicePublicDomainNames | undefined;
    set internalValue(value: LightsailContainerServicePublicDomainNames | undefined);
    private _certificate;
    get certificate(): LightsailContainerServicePublicDomainNamesCertificateList;
    putCertificate(value: LightsailContainerServicePublicDomainNamesCertificate[] | cdktf.IResolvable): void;
    get certificateInput(): cdktf.IResolvable | LightsailContainerServicePublicDomainNamesCertificate[] | undefined;
}
export interface LightsailContainerServiceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#create LightsailContainerService#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#delete LightsailContainerService#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#update LightsailContainerService#update}
    */
    readonly update?: string;
}
export declare function lightsailContainerServiceTimeoutsToTerraform(struct?: LightsailContainerServiceTimeouts | cdktf.IResolvable): any;
export declare function lightsailContainerServiceTimeoutsToHclTerraform(struct?: LightsailContainerServiceTimeouts | cdktf.IResolvable): any;
export declare class LightsailContainerServiceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LightsailContainerServiceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LightsailContainerServiceTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service aws_lightsail_container_service}
*/
export declare class LightsailContainerService extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lightsail_container_service";
    /**
    * Generates CDKTF code for importing a LightsailContainerService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LightsailContainerService to import
    * @param importFromId The id of the existing LightsailContainerService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LightsailContainerService to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service aws_lightsail_container_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailContainerServiceConfig
    */
    constructor(scope: Construct, id: string, config: LightsailContainerServiceConfig);
    get arn(): string;
    get availabilityZone(): string;
    get createdAt(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _isDisabled?;
    get isDisabled(): boolean | cdktf.IResolvable;
    set isDisabled(value: boolean | cdktf.IResolvable);
    resetIsDisabled(): void;
    get isDisabledInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _power?;
    get power(): string;
    set power(value: string);
    get powerInput(): string | undefined;
    get powerId(): string;
    get principalArn(): string;
    get privateDomainName(): string;
    get resourceType(): string;
    private _scale?;
    get scale(): number;
    set scale(value: number);
    get scaleInput(): number | undefined;
    get state(): string;
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
    get url(): string;
    private _privateRegistryAccess;
    get privateRegistryAccess(): LightsailContainerServicePrivateRegistryAccessOutputReference;
    putPrivateRegistryAccess(value: LightsailContainerServicePrivateRegistryAccess): void;
    resetPrivateRegistryAccess(): void;
    get privateRegistryAccessInput(): LightsailContainerServicePrivateRegistryAccess | undefined;
    private _publicDomainNames;
    get publicDomainNames(): LightsailContainerServicePublicDomainNamesOutputReference;
    putPublicDomainNames(value: LightsailContainerServicePublicDomainNames): void;
    resetPublicDomainNames(): void;
    get publicDomainNamesInput(): LightsailContainerServicePublicDomainNames | undefined;
    private _timeouts;
    get timeouts(): LightsailContainerServiceTimeoutsOutputReference;
    putTimeouts(value: LightsailContainerServiceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LightsailContainerServiceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
