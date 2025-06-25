/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DsqlClusterPeeringConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster_peering#clusters DsqlClusterPeering#clusters}
    */
    readonly clusters: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster_peering#identifier DsqlClusterPeering#identifier}
    */
    readonly identifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster_peering#witness_region DsqlClusterPeering#witness_region}
    */
    readonly witnessRegion: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster_peering#timeouts DsqlClusterPeering#timeouts}
    */
    readonly timeouts?: DsqlClusterPeeringTimeouts;
}
export interface DsqlClusterPeeringTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster_peering#create DsqlClusterPeering#create}
    */
    readonly create?: string;
}
export declare function dsqlClusterPeeringTimeoutsToTerraform(struct?: DsqlClusterPeeringTimeouts | cdktf.IResolvable): any;
export declare function dsqlClusterPeeringTimeoutsToHclTerraform(struct?: DsqlClusterPeeringTimeouts | cdktf.IResolvable): any;
export declare class DsqlClusterPeeringTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DsqlClusterPeeringTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DsqlClusterPeeringTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster_peering aws_dsql_cluster_peering}
*/
export declare class DsqlClusterPeering extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dsql_cluster_peering";
    /**
    * Generates CDKTF code for importing a DsqlClusterPeering resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DsqlClusterPeering to import
    * @param importFromId The id of the existing DsqlClusterPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster_peering#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DsqlClusterPeering to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dsql_cluster_peering aws_dsql_cluster_peering} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DsqlClusterPeeringConfig
    */
    constructor(scope: Construct, id: string, config: DsqlClusterPeeringConfig);
    private _clusters?;
    get clusters(): string[];
    set clusters(value: string[]);
    get clustersInput(): string[] | undefined;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string | undefined;
    private _witnessRegion?;
    get witnessRegion(): string;
    set witnessRegion(value: string);
    get witnessRegionInput(): string | undefined;
    private _timeouts;
    get timeouts(): DsqlClusterPeeringTimeoutsOutputReference;
    putTimeouts(value: DsqlClusterPeeringTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DsqlClusterPeeringTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
