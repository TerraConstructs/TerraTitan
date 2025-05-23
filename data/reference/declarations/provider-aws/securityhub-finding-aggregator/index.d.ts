/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubFindingAggregatorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_finding_aggregator#id SecurityhubFindingAggregator#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_finding_aggregator#linking_mode SecurityhubFindingAggregator#linking_mode}
    */
    readonly linkingMode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_finding_aggregator#specified_regions SecurityhubFindingAggregator#specified_regions}
    */
    readonly specifiedRegions?: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_finding_aggregator aws_securityhub_finding_aggregator}
*/
export declare class SecurityhubFindingAggregator extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securityhub_finding_aggregator";
    /**
    * Generates CDKTF code for importing a SecurityhubFindingAggregator resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecurityhubFindingAggregator to import
    * @param importFromId The id of the existing SecurityhubFindingAggregator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_finding_aggregator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecurityhubFindingAggregator to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_finding_aggregator aws_securityhub_finding_aggregator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubFindingAggregatorConfig
    */
    constructor(scope: Construct, id: string, config: SecurityhubFindingAggregatorConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _linkingMode?;
    get linkingMode(): string;
    set linkingMode(value: string);
    get linkingModeInput(): string | undefined;
    private _specifiedRegions?;
    get specifiedRegions(): string[];
    set specifiedRegions(value: string[]);
    resetSpecifiedRegions(): void;
    get specifiedRegionsInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
