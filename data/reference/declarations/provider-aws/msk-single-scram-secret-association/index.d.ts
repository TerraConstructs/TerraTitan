/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MskSingleScramSecretAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/msk_single_scram_secret_association#cluster_arn MskSingleScramSecretAssociation#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/msk_single_scram_secret_association#secret_arn MskSingleScramSecretAssociation#secret_arn}
    */
    readonly secretArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/msk_single_scram_secret_association aws_msk_single_scram_secret_association}
*/
export declare class MskSingleScramSecretAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_msk_single_scram_secret_association";
    /**
    * Generates CDKTF code for importing a MskSingleScramSecretAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MskSingleScramSecretAssociation to import
    * @param importFromId The id of the existing MskSingleScramSecretAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/msk_single_scram_secret_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MskSingleScramSecretAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/msk_single_scram_secret_association aws_msk_single_scram_secret_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskSingleScramSecretAssociationConfig
    */
    constructor(scope: Construct, id: string, config: MskSingleScramSecretAssociationConfig);
    private _clusterArn?;
    get clusterArn(): string;
    set clusterArn(value: string);
    get clusterArnInput(): string | undefined;
    get id(): string;
    private _secretArn?;
    get secretArn(): string;
    set secretArn(value: string);
    get secretArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
