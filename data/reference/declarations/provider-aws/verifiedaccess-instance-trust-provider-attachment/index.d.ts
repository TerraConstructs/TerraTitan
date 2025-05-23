/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VerifiedaccessInstanceTrustProviderAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_trust_provider_attachment#id VerifiedaccessInstanceTrustProviderAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_trust_provider_attachment#verifiedaccess_instance_id VerifiedaccessInstanceTrustProviderAttachment#verifiedaccess_instance_id}
    */
    readonly verifiedaccessInstanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_trust_provider_attachment#verifiedaccess_trust_provider_id VerifiedaccessInstanceTrustProviderAttachment#verifiedaccess_trust_provider_id}
    */
    readonly verifiedaccessTrustProviderId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_trust_provider_attachment aws_verifiedaccess_instance_trust_provider_attachment}
*/
export declare class VerifiedaccessInstanceTrustProviderAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_verifiedaccess_instance_trust_provider_attachment";
    /**
    * Generates CDKTF code for importing a VerifiedaccessInstanceTrustProviderAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VerifiedaccessInstanceTrustProviderAttachment to import
    * @param importFromId The id of the existing VerifiedaccessInstanceTrustProviderAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_trust_provider_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VerifiedaccessInstanceTrustProviderAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_trust_provider_attachment aws_verifiedaccess_instance_trust_provider_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VerifiedaccessInstanceTrustProviderAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: VerifiedaccessInstanceTrustProviderAttachmentConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _verifiedaccessInstanceId?;
    get verifiedaccessInstanceId(): string;
    set verifiedaccessInstanceId(value: string);
    get verifiedaccessInstanceIdInput(): string | undefined;
    private _verifiedaccessTrustProviderId?;
    get verifiedaccessTrustProviderId(): string;
    set verifiedaccessTrustProviderId(value: string);
    get verifiedaccessTrustProviderIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
