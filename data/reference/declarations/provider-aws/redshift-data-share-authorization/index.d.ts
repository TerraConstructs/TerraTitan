/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftDataShareAuthorizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_data_share_authorization#allow_writes RedshiftDataShareAuthorization#allow_writes}
    */
    readonly allowWrites?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_data_share_authorization#consumer_identifier RedshiftDataShareAuthorization#consumer_identifier}
    */
    readonly consumerIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_data_share_authorization#data_share_arn RedshiftDataShareAuthorization#data_share_arn}
    */
    readonly dataShareArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_data_share_authorization aws_redshift_data_share_authorization}
*/
export declare class RedshiftDataShareAuthorization extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshift_data_share_authorization";
    /**
    * Generates CDKTF code for importing a RedshiftDataShareAuthorization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftDataShareAuthorization to import
    * @param importFromId The id of the existing RedshiftDataShareAuthorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_data_share_authorization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftDataShareAuthorization to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_data_share_authorization aws_redshift_data_share_authorization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftDataShareAuthorizationConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftDataShareAuthorizationConfig);
    private _allowWrites?;
    get allowWrites(): boolean | cdktf.IResolvable;
    set allowWrites(value: boolean | cdktf.IResolvable);
    resetAllowWrites(): void;
    get allowWritesInput(): boolean | cdktf.IResolvable | undefined;
    private _consumerIdentifier?;
    get consumerIdentifier(): string;
    set consumerIdentifier(value: string);
    get consumerIdentifierInput(): string | undefined;
    private _dataShareArn?;
    get dataShareArn(): string;
    set dataShareArn(value: string);
    get dataShareArnInput(): string | undefined;
    get id(): string;
    get managedBy(): string;
    get producerArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
