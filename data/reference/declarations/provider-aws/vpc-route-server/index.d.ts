/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcRouteServerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server#amazon_side_asn VpcRouteServer#amazon_side_asn}
    */
    readonly amazonSideAsn: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server#persist_routes VpcRouteServer#persist_routes}
    */
    readonly persistRoutes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server#persist_routes_duration VpcRouteServer#persist_routes_duration}
    */
    readonly persistRoutesDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server#sns_notifications_enabled VpcRouteServer#sns_notifications_enabled}
    */
    readonly snsNotificationsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server#tags VpcRouteServer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server#timeouts VpcRouteServer#timeouts}
    */
    readonly timeouts?: VpcRouteServerTimeouts;
}
export interface VpcRouteServerTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server#create VpcRouteServer#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server#delete VpcRouteServer#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server#update VpcRouteServer#update}
    */
    readonly update?: string;
}
export declare function vpcRouteServerTimeoutsToTerraform(struct?: VpcRouteServerTimeouts | cdktf.IResolvable): any;
export declare function vpcRouteServerTimeoutsToHclTerraform(struct?: VpcRouteServerTimeouts | cdktf.IResolvable): any;
export declare class VpcRouteServerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcRouteServerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcRouteServerTimeouts | cdktf.IResolvable | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server aws_vpc_route_server}
*/
export declare class VpcRouteServer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_route_server";
    /**
    * Generates CDKTF code for importing a VpcRouteServer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcRouteServer to import
    * @param importFromId The id of the existing VpcRouteServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcRouteServer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server aws_vpc_route_server} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcRouteServerConfig
    */
    constructor(scope: Construct, id: string, config: VpcRouteServerConfig);
    private _amazonSideAsn?;
    get amazonSideAsn(): number;
    set amazonSideAsn(value: number);
    get amazonSideAsnInput(): number | undefined;
    get arn(): string;
    private _persistRoutes?;
    get persistRoutes(): string;
    set persistRoutes(value: string);
    resetPersistRoutes(): void;
    get persistRoutesInput(): string | undefined;
    private _persistRoutesDuration?;
    get persistRoutesDuration(): number;
    set persistRoutesDuration(value: number);
    resetPersistRoutesDuration(): void;
    get persistRoutesDurationInput(): number | undefined;
    get routeServerId(): string;
    private _snsNotificationsEnabled?;
    get snsNotificationsEnabled(): boolean | cdktf.IResolvable;
    set snsNotificationsEnabled(value: boolean | cdktf.IResolvable);
    resetSnsNotificationsEnabled(): void;
    get snsNotificationsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    get snsTopicArn(): string;
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
    get timeouts(): VpcRouteServerTimeoutsOutputReference;
    putTimeouts(value: VpcRouteServerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcRouteServerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
