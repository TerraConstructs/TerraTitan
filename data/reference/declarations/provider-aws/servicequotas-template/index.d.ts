/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicequotasTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicequotas_template#quota_code ServicequotasTemplate#quota_code}
    */
    readonly quotaCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicequotas_template#region ServicequotasTemplate#region}
    */
    readonly region: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicequotas_template#service_code ServicequotasTemplate#service_code}
    */
    readonly serviceCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicequotas_template#value ServicequotasTemplate#value}
    */
    readonly value: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicequotas_template aws_servicequotas_template}
*/
export declare class ServicequotasTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_servicequotas_template";
    /**
    * Generates CDKTF code for importing a ServicequotasTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ServicequotasTemplate to import
    * @param importFromId The id of the existing ServicequotasTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicequotas_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ServicequotasTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicequotas_template aws_servicequotas_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicequotasTemplateConfig
    */
    constructor(scope: Construct, id: string, config: ServicequotasTemplateConfig);
    get globalQuota(): cdktf.IResolvable;
    get id(): string;
    private _quotaCode?;
    get quotaCode(): string;
    set quotaCode(value: string);
    get quotaCodeInput(): string | undefined;
    get quotaName(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string | undefined;
    private _serviceCode?;
    get serviceCode(): string;
    set serviceCode(value: string);
    get serviceCodeInput(): string | undefined;
    get serviceName(): string;
    get unit(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
