/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecoverycontrolconfigControlPanelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_control_panel#cluster_arn Route53RecoverycontrolconfigControlPanel#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_control_panel#id Route53RecoverycontrolconfigControlPanel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_control_panel#name Route53RecoverycontrolconfigControlPanel#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_control_panel aws_route53recoverycontrolconfig_control_panel}
*/
export declare class Route53RecoverycontrolconfigControlPanel extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53recoverycontrolconfig_control_panel";
    /**
    * Generates CDKTF code for importing a Route53RecoverycontrolconfigControlPanel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53RecoverycontrolconfigControlPanel to import
    * @param importFromId The id of the existing Route53RecoverycontrolconfigControlPanel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_control_panel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53RecoverycontrolconfigControlPanel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_control_panel aws_route53recoverycontrolconfig_control_panel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolconfigControlPanelConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoverycontrolconfigControlPanelConfig);
    get arn(): string;
    private _clusterArn?;
    get clusterArn(): string;
    set clusterArn(value: string);
    get clusterArnInput(): string | undefined;
    get defaultControlPanel(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get routingControlCount(): number;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
