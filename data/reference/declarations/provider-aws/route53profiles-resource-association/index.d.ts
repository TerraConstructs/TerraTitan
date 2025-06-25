/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ProfilesResourceAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#name Route53ProfilesResourceAssociation#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#profile_id Route53ProfilesResourceAssociation#profile_id}
    */
    readonly profileId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#resource_arn Route53ProfilesResourceAssociation#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#resource_properties Route53ProfilesResourceAssociation#resource_properties}
    */
    readonly resourceProperties?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#timeouts Route53ProfilesResourceAssociation#timeouts}
    */
    readonly timeouts?: Route53ProfilesResourceAssociationTimeouts;
}
export interface Route53ProfilesResourceAssociationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#create Route53ProfilesResourceAssociation#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#delete Route53ProfilesResourceAssociation#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#read Route53ProfilesResourceAssociation#read}
    */
    readonly read?: string;
}
export declare function route53ProfilesResourceAssociationTimeoutsToTerraform(struct?: Route53ProfilesResourceAssociationTimeouts | cdktf.IResolvable): any;
export declare function route53ProfilesResourceAssociationTimeoutsToHclTerraform(struct?: Route53ProfilesResourceAssociationTimeouts | cdktf.IResolvable): any;
export declare class Route53ProfilesResourceAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53ProfilesResourceAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Route53ProfilesResourceAssociationTimeouts | cdktf.IResolvable | undefined);
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
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association aws_route53profiles_resource_association}
*/
export declare class Route53ProfilesResourceAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53profiles_resource_association";
    /**
    * Generates CDKTF code for importing a Route53ProfilesResourceAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53ProfilesResourceAssociation to import
    * @param importFromId The id of the existing Route53ProfilesResourceAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53ProfilesResourceAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association aws_route53profiles_resource_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ProfilesResourceAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Route53ProfilesResourceAssociationConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get ownerId(): string;
    private _profileId?;
    get profileId(): string;
    set profileId(value: string);
    get profileIdInput(): string | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    private _resourceProperties?;
    get resourceProperties(): string;
    set resourceProperties(value: string);
    resetResourceProperties(): void;
    get resourcePropertiesInput(): string | undefined;
    get resourceType(): string;
    get status(): string;
    get statusMessage(): string;
    private _timeouts;
    get timeouts(): Route53ProfilesResourceAssociationTimeoutsOutputReference;
    putTimeouts(value: Route53ProfilesResourceAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Route53ProfilesResourceAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
