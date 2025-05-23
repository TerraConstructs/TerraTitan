/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PrometheusRuleGroupNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_rule_group_namespace#data PrometheusRuleGroupNamespace#data}
    */
    readonly data: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_rule_group_namespace#id PrometheusRuleGroupNamespace#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_rule_group_namespace#name PrometheusRuleGroupNamespace#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_rule_group_namespace#workspace_id PrometheusRuleGroupNamespace#workspace_id}
    */
    readonly workspaceId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_rule_group_namespace aws_prometheus_rule_group_namespace}
*/
export declare class PrometheusRuleGroupNamespace extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_prometheus_rule_group_namespace";
    /**
    * Generates CDKTF code for importing a PrometheusRuleGroupNamespace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PrometheusRuleGroupNamespace to import
    * @param importFromId The id of the existing PrometheusRuleGroupNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_rule_group_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PrometheusRuleGroupNamespace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_rule_group_namespace aws_prometheus_rule_group_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PrometheusRuleGroupNamespaceConfig
    */
    constructor(scope: Construct, id: string, config: PrometheusRuleGroupNamespaceConfig);
    private _data?;
    get data(): string;
    set data(value: string);
    get dataInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _workspaceId?;
    get workspaceId(): string;
    set workspaceId(value: string);
    get workspaceIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
