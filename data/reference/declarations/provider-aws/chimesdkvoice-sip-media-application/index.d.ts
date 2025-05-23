/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ChimesdkvoiceSipMediaApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_media_application#aws_region ChimesdkvoiceSipMediaApplication#aws_region}
    */
    readonly awsRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_media_application#id ChimesdkvoiceSipMediaApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_media_application#name ChimesdkvoiceSipMediaApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_media_application#tags ChimesdkvoiceSipMediaApplication#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_media_application#tags_all ChimesdkvoiceSipMediaApplication#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * endpoints block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_media_application#endpoints ChimesdkvoiceSipMediaApplication#endpoints}
    */
    readonly endpoints: ChimesdkvoiceSipMediaApplicationEndpoints;
}
export interface ChimesdkvoiceSipMediaApplicationEndpoints {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_media_application#lambda_arn ChimesdkvoiceSipMediaApplication#lambda_arn}
    */
    readonly lambdaArn: string;
}
export declare function chimesdkvoiceSipMediaApplicationEndpointsToTerraform(struct?: ChimesdkvoiceSipMediaApplicationEndpointsOutputReference | ChimesdkvoiceSipMediaApplicationEndpoints): any;
export declare function chimesdkvoiceSipMediaApplicationEndpointsToHclTerraform(struct?: ChimesdkvoiceSipMediaApplicationEndpointsOutputReference | ChimesdkvoiceSipMediaApplicationEndpoints): any;
export declare class ChimesdkvoiceSipMediaApplicationEndpointsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkvoiceSipMediaApplicationEndpoints | undefined;
    set internalValue(value: ChimesdkvoiceSipMediaApplicationEndpoints | undefined);
    private _lambdaArn?;
    get lambdaArn(): string;
    set lambdaArn(value: string);
    get lambdaArnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_media_application aws_chimesdkvoice_sip_media_application}
*/
export declare class ChimesdkvoiceSipMediaApplication extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_chimesdkvoice_sip_media_application";
    /**
    * Generates CDKTF code for importing a ChimesdkvoiceSipMediaApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ChimesdkvoiceSipMediaApplication to import
    * @param importFromId The id of the existing ChimesdkvoiceSipMediaApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_media_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ChimesdkvoiceSipMediaApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_media_application aws_chimesdkvoice_sip_media_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimesdkvoiceSipMediaApplicationConfig
    */
    constructor(scope: Construct, id: string, config: ChimesdkvoiceSipMediaApplicationConfig);
    get arn(): string;
    private _awsRegion?;
    get awsRegion(): string;
    set awsRegion(value: string);
    get awsRegionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _endpoints;
    get endpoints(): ChimesdkvoiceSipMediaApplicationEndpointsOutputReference;
    putEndpoints(value: ChimesdkvoiceSipMediaApplicationEndpoints): void;
    get endpointsInput(): ChimesdkvoiceSipMediaApplicationEndpoints | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
