/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamOrganizationsFeaturesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_organizations_features#enabled_features IamOrganizationsFeatures#enabled_features}
    */
    readonly enabledFeatures: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_organizations_features aws_iam_organizations_features}
*/
export declare class IamOrganizationsFeatures extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iam_organizations_features";
    /**
    * Generates CDKTF code for importing a IamOrganizationsFeatures resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamOrganizationsFeatures to import
    * @param importFromId The id of the existing IamOrganizationsFeatures that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_organizations_features#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamOrganizationsFeatures to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_organizations_features aws_iam_organizations_features} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamOrganizationsFeaturesConfig
    */
    constructor(scope: Construct, id: string, config: IamOrganizationsFeaturesConfig);
    private _enabledFeatures?;
    get enabledFeatures(): string[];
    set enabledFeatures(value: string[]);
    get enabledFeaturesInput(): string[] | undefined;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
