/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface XraySamplingRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}
    */
    readonly attributes?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}
    */
    readonly fixedRate: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}
    */
    readonly httpMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#id XraySamplingRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}
    */
    readonly reservoirSize: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}
    */
    readonly ruleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}
    */
    readonly serviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}
    */
    readonly serviceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#tags XraySamplingRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#tags_all XraySamplingRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}
    */
    readonly urlPath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#version XraySamplingRule#version}
    */
    readonly version: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule aws_xray_sampling_rule}
*/
export declare class XraySamplingRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_xray_sampling_rule";
    /**
    * Generates CDKTF code for importing a XraySamplingRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the XraySamplingRule to import
    * @param importFromId The id of the existing XraySamplingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the XraySamplingRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_sampling_rule aws_xray_sampling_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options XraySamplingRuleConfig
    */
    constructor(scope: Construct, id: string, config: XraySamplingRuleConfig);
    get arn(): string;
    private _attributes?;
    get attributes(): {
        [key: string]: string;
    };
    set attributes(value: {
        [key: string]: string;
    });
    resetAttributes(): void;
    get attributesInput(): {
        [key: string]: string;
    } | undefined;
    private _fixedRate?;
    get fixedRate(): number;
    set fixedRate(value: number);
    get fixedRateInput(): number | undefined;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _httpMethod?;
    get httpMethod(): string;
    set httpMethod(value: string);
    get httpMethodInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _reservoirSize?;
    get reservoirSize(): number;
    set reservoirSize(value: number);
    get reservoirSizeInput(): number | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    private _ruleName?;
    get ruleName(): string;
    set ruleName(value: string);
    resetRuleName(): void;
    get ruleNameInput(): string | undefined;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string | undefined;
    private _serviceType?;
    get serviceType(): string;
    set serviceType(value: string);
    get serviceTypeInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _urlPath?;
    get urlPath(): string;
    set urlPath(value: string);
    get urlPathInput(): string | undefined;
    private _version?;
    get version(): number;
    set version(value: number);
    get versionInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
