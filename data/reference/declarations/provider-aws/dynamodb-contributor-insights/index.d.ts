/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamodbContributorInsightsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_contributor_insights#id DynamodbContributorInsights#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_contributor_insights#index_name DynamodbContributorInsights#index_name}
    */
    readonly indexName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_contributor_insights#table_name DynamodbContributorInsights#table_name}
    */
    readonly tableName: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_contributor_insights#timeouts DynamodbContributorInsights#timeouts}
    */
    readonly timeouts?: DynamodbContributorInsightsTimeouts;
}
export interface DynamodbContributorInsightsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_contributor_insights#create DynamodbContributorInsights#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_contributor_insights#delete DynamodbContributorInsights#delete}
    */
    readonly delete?: string;
}
export declare function dynamodbContributorInsightsTimeoutsToTerraform(struct?: DynamodbContributorInsightsTimeouts | cdktf.IResolvable): any;
export declare function dynamodbContributorInsightsTimeoutsToHclTerraform(struct?: DynamodbContributorInsightsTimeouts | cdktf.IResolvable): any;
export declare class DynamodbContributorInsightsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamodbContributorInsightsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DynamodbContributorInsightsTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_contributor_insights aws_dynamodb_contributor_insights}
*/
export declare class DynamodbContributorInsights extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dynamodb_contributor_insights";
    /**
    * Generates CDKTF code for importing a DynamodbContributorInsights resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamodbContributorInsights to import
    * @param importFromId The id of the existing DynamodbContributorInsights that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_contributor_insights#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamodbContributorInsights to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_contributor_insights aws_dynamodb_contributor_insights} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbContributorInsightsConfig
    */
    constructor(scope: Construct, id: string, config: DynamodbContributorInsightsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _indexName?;
    get indexName(): string;
    set indexName(value: string);
    resetIndexName(): void;
    get indexNameInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
    private _timeouts;
    get timeouts(): DynamodbContributorInsightsTimeoutsOutputReference;
    putTimeouts(value: DynamodbContributorInsightsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DynamodbContributorInsightsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
