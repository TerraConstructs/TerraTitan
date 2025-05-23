/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VerifiedaccessInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance#description VerifiedaccessInstance#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance#fips_enabled VerifiedaccessInstance#fips_enabled}
    */
    readonly fipsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance#id VerifiedaccessInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance#tags VerifiedaccessInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance#tags_all VerifiedaccessInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
export interface VerifiedaccessInstanceVerifiedAccessTrustProviders {
}
export declare function verifiedaccessInstanceVerifiedAccessTrustProvidersToTerraform(struct?: VerifiedaccessInstanceVerifiedAccessTrustProviders): any;
export declare function verifiedaccessInstanceVerifiedAccessTrustProvidersToHclTerraform(struct?: VerifiedaccessInstanceVerifiedAccessTrustProviders): any;
export declare class VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VerifiedaccessInstanceVerifiedAccessTrustProviders | undefined;
    set internalValue(value: VerifiedaccessInstanceVerifiedAccessTrustProviders | undefined);
    get description(): string;
    get deviceTrustProviderType(): string;
    get trustProviderType(): string;
    get userTrustProviderType(): string;
    get verifiedAccessTrustProviderId(): string;
}
export declare class VerifiedaccessInstanceVerifiedAccessTrustProvidersList extends cdktf.ComplexList {
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
    get(index: number): VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance aws_verifiedaccess_instance}
*/
export declare class VerifiedaccessInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_verifiedaccess_instance";
    /**
    * Generates CDKTF code for importing a VerifiedaccessInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VerifiedaccessInstance to import
    * @param importFromId The id of the existing VerifiedaccessInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VerifiedaccessInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance aws_verifiedaccess_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VerifiedaccessInstanceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: VerifiedaccessInstanceConfig);
    get creationTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _fipsEnabled?;
    get fipsEnabled(): boolean | cdktf.IResolvable;
    set fipsEnabled(value: boolean | cdktf.IResolvable);
    resetFipsEnabled(): void;
    get fipsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedTime(): string;
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
    private _verifiedAccessTrustProviders;
    get verifiedAccessTrustProviders(): VerifiedaccessInstanceVerifiedAccessTrustProvidersList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
