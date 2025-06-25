/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DsqlClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster#deletion_protection_enabled DsqlCluster#deletion_protection_enabled}
    */
    readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster#kms_encryption_key DsqlCluster#kms_encryption_key}
    */
    readonly kmsEncryptionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster#tags DsqlCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * multi_region_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster#multi_region_properties DsqlCluster#multi_region_properties}
    */
    readonly multiRegionProperties?: DsqlClusterMultiRegionProperties[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster#timeouts DsqlCluster#timeouts}
    */
    readonly timeouts?: DsqlClusterTimeouts;
}
export interface DsqlClusterEncryptionDetails {
}
export declare function dsqlClusterEncryptionDetailsToTerraform(struct?: DsqlClusterEncryptionDetails): any;
export declare function dsqlClusterEncryptionDetailsToHclTerraform(struct?: DsqlClusterEncryptionDetails): any;
export declare class DsqlClusterEncryptionDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DsqlClusterEncryptionDetails | undefined;
    set internalValue(value: DsqlClusterEncryptionDetails | undefined);
    get encryptionStatus(): string;
    get encryptionType(): string;
}
export declare class DsqlClusterEncryptionDetailsList extends cdktf.ComplexList {
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
    get(index: number): DsqlClusterEncryptionDetailsOutputReference;
}
export interface DsqlClusterMultiRegionProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster#clusters DsqlCluster#clusters}
    */
    readonly clusters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster#witness_region DsqlCluster#witness_region}
    */
    readonly witnessRegion?: string;
}
export declare function dsqlClusterMultiRegionPropertiesToTerraform(struct?: DsqlClusterMultiRegionProperties | cdktf.IResolvable): any;
export declare function dsqlClusterMultiRegionPropertiesToHclTerraform(struct?: DsqlClusterMultiRegionProperties | cdktf.IResolvable): any;
export declare class DsqlClusterMultiRegionPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DsqlClusterMultiRegionProperties | cdktf.IResolvable | undefined;
    set internalValue(value: DsqlClusterMultiRegionProperties | cdktf.IResolvable | undefined);
    private _clusters?;
    get clusters(): string[];
    set clusters(value: string[]);
    resetClusters(): void;
    get clustersInput(): string[] | undefined;
    private _witnessRegion?;
    get witnessRegion(): string;
    set witnessRegion(value: string);
    resetWitnessRegion(): void;
    get witnessRegionInput(): string | undefined;
}
export declare class DsqlClusterMultiRegionPropertiesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DsqlClusterMultiRegionProperties[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DsqlClusterMultiRegionPropertiesOutputReference;
}
export interface DsqlClusterTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster#create DsqlCluster#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster#delete DsqlCluster#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster#update DsqlCluster#update}
    */
    readonly update?: string;
}
export declare function dsqlClusterTimeoutsToTerraform(struct?: DsqlClusterTimeouts | cdktf.IResolvable): any;
export declare function dsqlClusterTimeoutsToHclTerraform(struct?: DsqlClusterTimeouts | cdktf.IResolvable): any;
export declare class DsqlClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DsqlClusterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DsqlClusterTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster aws_dsql_cluster}
*/
export declare class DsqlCluster extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dsql_cluster";
    /**
    * Generates CDKTF code for importing a DsqlCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DsqlCluster to import
    * @param importFromId The id of the existing DsqlCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DsqlCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster aws_dsql_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DsqlClusterConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DsqlClusterConfig);
    get arn(): string;
    private _deletionProtectionEnabled?;
    get deletionProtectionEnabled(): boolean | cdktf.IResolvable;
    set deletionProtectionEnabled(value: boolean | cdktf.IResolvable);
    resetDeletionProtectionEnabled(): void;
    get deletionProtectionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _encryptionDetails;
    get encryptionDetails(): DsqlClusterEncryptionDetailsList;
    get identifier(): string;
    private _kmsEncryptionKey?;
    get kmsEncryptionKey(): string;
    set kmsEncryptionKey(value: string);
    resetKmsEncryptionKey(): void;
    get kmsEncryptionKeyInput(): string | undefined;
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
    get vpcEndpointServiceName(): string;
    private _multiRegionProperties;
    get multiRegionProperties(): DsqlClusterMultiRegionPropertiesList;
    putMultiRegionProperties(value: DsqlClusterMultiRegionProperties[] | cdktf.IResolvable): void;
    resetMultiRegionProperties(): void;
    get multiRegionPropertiesInput(): cdktf.IResolvable | DsqlClusterMultiRegionProperties[] | undefined;
    private _timeouts;
    get timeouts(): DsqlClusterTimeoutsOutputReference;
    putTimeouts(value: DsqlClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DsqlClusterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
