/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontVpcOriginConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin#tags CloudfrontVpcOrigin#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin#timeouts CloudfrontVpcOrigin#timeouts}
    */
    readonly timeouts?: CloudfrontVpcOriginTimeouts;
    /**
    * vpc_origin_endpoint_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin#vpc_origin_endpoint_config CloudfrontVpcOrigin#vpc_origin_endpoint_config}
    */
    readonly vpcOriginEndpointConfig?: CloudfrontVpcOriginVpcOriginEndpointConfig[] | cdktf.IResolvable;
}
export interface CloudfrontVpcOriginTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin#create CloudfrontVpcOrigin#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin#delete CloudfrontVpcOrigin#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin#update CloudfrontVpcOrigin#update}
    */
    readonly update?: string;
}
export declare function cloudfrontVpcOriginTimeoutsToTerraform(struct?: CloudfrontVpcOriginTimeouts | cdktf.IResolvable): any;
export declare function cloudfrontVpcOriginTimeoutsToHclTerraform(struct?: CloudfrontVpcOriginTimeouts | cdktf.IResolvable): any;
export declare class CloudfrontVpcOriginTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontVpcOriginTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontVpcOriginTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
export interface CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin#items CloudfrontVpcOrigin#items}
    */
    readonly items: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin#quantity CloudfrontVpcOrigin#quantity}
    */
    readonly quantity: number;
}
export declare function cloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsToTerraform(struct?: CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols | cdktf.IResolvable): any;
export declare function cloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsToHclTerraform(struct?: CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols | cdktf.IResolvable): any;
export declare class CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols | cdktf.IResolvable | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    get itemsInput(): string[] | undefined;
    private _quantity?;
    get quantity(): number;
    set quantity(value: number);
    get quantityInput(): number | undefined;
}
export declare class CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference;
}
export interface CloudfrontVpcOriginVpcOriginEndpointConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin#arn CloudfrontVpcOrigin#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin#http_port CloudfrontVpcOrigin#http_port}
    */
    readonly httpPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin#https_port CloudfrontVpcOrigin#https_port}
    */
    readonly httpsPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin#name CloudfrontVpcOrigin#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin#origin_protocol_policy CloudfrontVpcOrigin#origin_protocol_policy}
    */
    readonly originProtocolPolicy: string;
    /**
    * origin_ssl_protocols block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin#origin_ssl_protocols CloudfrontVpcOrigin#origin_ssl_protocols}
    */
    readonly originSslProtocols?: CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols[] | cdktf.IResolvable;
}
export declare function cloudfrontVpcOriginVpcOriginEndpointConfigToTerraform(struct?: CloudfrontVpcOriginVpcOriginEndpointConfig | cdktf.IResolvable): any;
export declare function cloudfrontVpcOriginVpcOriginEndpointConfigToHclTerraform(struct?: CloudfrontVpcOriginVpcOriginEndpointConfig | cdktf.IResolvable): any;
export declare class CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontVpcOriginVpcOriginEndpointConfig | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontVpcOriginVpcOriginEndpointConfig | cdktf.IResolvable | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _httpPort?;
    get httpPort(): number;
    set httpPort(value: number);
    get httpPortInput(): number | undefined;
    private _httpsPort?;
    get httpsPort(): number;
    set httpsPort(value: number);
    get httpsPortInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _originProtocolPolicy?;
    get originProtocolPolicy(): string;
    set originProtocolPolicy(value: string);
    get originProtocolPolicyInput(): string | undefined;
    private _originSslProtocols;
    get originSslProtocols(): CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList;
    putOriginSslProtocols(value: CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols[] | cdktf.IResolvable): void;
    resetOriginSslProtocols(): void;
    get originSslProtocolsInput(): cdktf.IResolvable | CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols[] | undefined;
}
export declare class CloudfrontVpcOriginVpcOriginEndpointConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontVpcOriginVpcOriginEndpointConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin aws_cloudfront_vpc_origin}
*/
export declare class CloudfrontVpcOrigin extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudfront_vpc_origin";
    /**
    * Generates CDKTF code for importing a CloudfrontVpcOrigin resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontVpcOrigin to import
    * @param importFromId The id of the existing CloudfrontVpcOrigin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontVpcOrigin to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfront_vpc_origin aws_cloudfront_vpc_origin} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontVpcOriginConfig = {}
    */
    constructor(scope: Construct, id: string, config?: CloudfrontVpcOriginConfig);
    get arn(): string;
    get etag(): string;
    get id(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _timeouts;
    get timeouts(): CloudfrontVpcOriginTimeoutsOutputReference;
    putTimeouts(value: CloudfrontVpcOriginTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CloudfrontVpcOriginTimeouts | undefined;
    private _vpcOriginEndpointConfig;
    get vpcOriginEndpointConfig(): CloudfrontVpcOriginVpcOriginEndpointConfigList;
    putVpcOriginEndpointConfig(value: CloudfrontVpcOriginVpcOriginEndpointConfig[] | cdktf.IResolvable): void;
    resetVpcOriginEndpointConfig(): void;
    get vpcOriginEndpointConfigInput(): cdktf.IResolvable | CloudfrontVpcOriginVpcOriginEndpointConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
