/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftDataShareConsumerAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}
    */
    readonly allowWrites?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}
    */
    readonly associateEntireAccount?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}
    */
    readonly consumerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}
    */
    readonly consumerRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}
    */
    readonly dataShareArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_data_share_consumer_association aws_redshift_data_share_consumer_association}
*/
export declare class RedshiftDataShareConsumerAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshift_data_share_consumer_association";
    /**
    * Generates CDKTF code for importing a RedshiftDataShareConsumerAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftDataShareConsumerAssociation to import
    * @param importFromId The id of the existing RedshiftDataShareConsumerAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_data_share_consumer_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftDataShareConsumerAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_data_share_consumer_association aws_redshift_data_share_consumer_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftDataShareConsumerAssociationConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftDataShareConsumerAssociationConfig);
    private _allowWrites?;
    get allowWrites(): boolean | cdktf.IResolvable;
    set allowWrites(value: boolean | cdktf.IResolvable);
    resetAllowWrites(): void;
    get allowWritesInput(): boolean | cdktf.IResolvable | undefined;
    private _associateEntireAccount?;
    get associateEntireAccount(): boolean | cdktf.IResolvable;
    set associateEntireAccount(value: boolean | cdktf.IResolvable);
    resetAssociateEntireAccount(): void;
    get associateEntireAccountInput(): boolean | cdktf.IResolvable | undefined;
    private _consumerArn?;
    get consumerArn(): string;
    set consumerArn(value: string);
    resetConsumerArn(): void;
    get consumerArnInput(): string | undefined;
    private _consumerRegion?;
    get consumerRegion(): string;
    set consumerRegion(value: string);
    resetConsumerRegion(): void;
    get consumerRegionInput(): string | undefined;
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
