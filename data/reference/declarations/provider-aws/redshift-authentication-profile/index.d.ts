/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftAuthenticationProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_authentication_profile#authentication_profile_content RedshiftAuthenticationProfile#authentication_profile_content}
    */
    readonly authenticationProfileContent: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_authentication_profile#authentication_profile_name RedshiftAuthenticationProfile#authentication_profile_name}
    */
    readonly authenticationProfileName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_authentication_profile#id RedshiftAuthenticationProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_authentication_profile aws_redshift_authentication_profile}
*/
export declare class RedshiftAuthenticationProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshift_authentication_profile";
    /**
    * Generates CDKTF code for importing a RedshiftAuthenticationProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftAuthenticationProfile to import
    * @param importFromId The id of the existing RedshiftAuthenticationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_authentication_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftAuthenticationProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_authentication_profile aws_redshift_authentication_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftAuthenticationProfileConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftAuthenticationProfileConfig);
    private _authenticationProfileContent?;
    get authenticationProfileContent(): string;
    set authenticationProfileContent(value: string);
    get authenticationProfileContentInput(): string | undefined;
    private _authenticationProfileName?;
    get authenticationProfileName(): string;
    set authenticationProfileName(value: string);
    get authenticationProfileNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
