/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServicecatalogProvisioningArtifactsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_provisioning_artifacts#accept_language DataAwsServicecatalogProvisioningArtifacts#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_provisioning_artifacts#id DataAwsServicecatalogProvisioningArtifacts#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_provisioning_artifacts#product_id DataAwsServicecatalogProvisioningArtifacts#product_id}
    */
    readonly productId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_provisioning_artifacts#timeouts DataAwsServicecatalogProvisioningArtifacts#timeouts}
    */
    readonly timeouts?: DataAwsServicecatalogProvisioningArtifactsTimeouts;
}
export interface DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails {
}
export declare function dataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsToTerraform(struct?: DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails): any;
export declare function dataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsToHclTerraform(struct?: DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails): any;
export declare class DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails | undefined;
    set internalValue(value: DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails | undefined);
    get active(): cdktf.IResolvable;
    get createdTime(): string;
    get description(): string;
    get guidance(): string;
    get id(): string;
    get name(): string;
    get type(): string;
}
export declare class DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference;
}
export interface DataAwsServicecatalogProvisioningArtifactsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_provisioning_artifacts#read DataAwsServicecatalogProvisioningArtifacts#read}
    */
    readonly read?: string;
}
export declare function dataAwsServicecatalogProvisioningArtifactsTimeoutsToTerraform(struct?: DataAwsServicecatalogProvisioningArtifactsTimeouts | cdktf.IResolvable): any;
export declare function dataAwsServicecatalogProvisioningArtifactsTimeoutsToHclTerraform(struct?: DataAwsServicecatalogProvisioningArtifactsTimeouts | cdktf.IResolvable): any;
export declare class DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsServicecatalogProvisioningArtifactsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsServicecatalogProvisioningArtifactsTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_provisioning_artifacts aws_servicecatalog_provisioning_artifacts}
*/
export declare class DataAwsServicecatalogProvisioningArtifacts extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_servicecatalog_provisioning_artifacts";
    /**
    * Generates CDKTF code for importing a DataAwsServicecatalogProvisioningArtifacts resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsServicecatalogProvisioningArtifacts to import
    * @param importFromId The id of the existing DataAwsServicecatalogProvisioningArtifacts that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_provisioning_artifacts#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsServicecatalogProvisioningArtifacts to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_provisioning_artifacts aws_servicecatalog_provisioning_artifacts} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogProvisioningArtifactsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServicecatalogProvisioningArtifactsConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _productId?;
    get productId(): string;
    set productId(value: string);
    get productIdInput(): string | undefined;
    private _provisioningArtifactDetails;
    get provisioningArtifactDetails(): DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList;
    private _timeouts;
    get timeouts(): DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference;
    putTimeouts(value: DataAwsServicecatalogProvisioningArtifactsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsServicecatalogProvisioningArtifactsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
