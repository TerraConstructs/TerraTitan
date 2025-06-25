/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ZoneAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_zone_association#id Route53ZoneAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_zone_association#vpc_id Route53ZoneAssociation#vpc_id}
    */
    readonly vpcId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_zone_association#vpc_region Route53ZoneAssociation#vpc_region}
    */
    readonly vpcRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_zone_association#zone_id Route53ZoneAssociation#zone_id}
    */
    readonly zoneId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_zone_association#timeouts Route53ZoneAssociation#timeouts}
    */
    readonly timeouts?: Route53ZoneAssociationTimeouts;
}
export interface Route53ZoneAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_zone_association#create Route53ZoneAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_zone_association#delete Route53ZoneAssociation#delete}
    */
    readonly delete?: string;
}
export declare function route53ZoneAssociationTimeoutsToTerraform(struct?: Route53ZoneAssociationTimeouts | cdktf.IResolvable): any;
export declare function route53ZoneAssociationTimeoutsToHclTerraform(struct?: Route53ZoneAssociationTimeouts | cdktf.IResolvable): any;
export declare class Route53ZoneAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53ZoneAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Route53ZoneAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_zone_association aws_route53_zone_association}
*/
export declare class Route53ZoneAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53_zone_association";
    /**
    * Generates CDKTF code for importing a Route53ZoneAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53ZoneAssociation to import
    * @param importFromId The id of the existing Route53ZoneAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_zone_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53ZoneAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_zone_association aws_route53_zone_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ZoneAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Route53ZoneAssociationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get owningAccount(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    private _vpcRegion?;
    get vpcRegion(): string;
    set vpcRegion(value: string);
    resetVpcRegion(): void;
    get vpcRegionInput(): string | undefined;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): Route53ZoneAssociationTimeoutsOutputReference;
    putTimeouts(value: Route53ZoneAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Route53ZoneAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
