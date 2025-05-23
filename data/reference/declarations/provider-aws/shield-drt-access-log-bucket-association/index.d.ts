/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ShieldDrtAccessLogBucketAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_log_bucket_association#log_bucket ShieldDrtAccessLogBucketAssociation#log_bucket}
    */
    readonly logBucket: string;
    /**
    * Unused
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_log_bucket_association#role_arn_association_id ShieldDrtAccessLogBucketAssociation#role_arn_association_id}
    */
    readonly roleArnAssociationId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_log_bucket_association#timeouts ShieldDrtAccessLogBucketAssociation#timeouts}
    */
    readonly timeouts?: ShieldDrtAccessLogBucketAssociationTimeouts;
}
export interface ShieldDrtAccessLogBucketAssociationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_log_bucket_association#create ShieldDrtAccessLogBucketAssociation#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_log_bucket_association#delete ShieldDrtAccessLogBucketAssociation#delete}
    */
    readonly delete?: string;
}
export declare function shieldDrtAccessLogBucketAssociationTimeoutsToTerraform(struct?: ShieldDrtAccessLogBucketAssociationTimeouts | cdktf.IResolvable): any;
export declare function shieldDrtAccessLogBucketAssociationTimeoutsToHclTerraform(struct?: ShieldDrtAccessLogBucketAssociationTimeouts | cdktf.IResolvable): any;
export declare class ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ShieldDrtAccessLogBucketAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ShieldDrtAccessLogBucketAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_log_bucket_association aws_shield_drt_access_log_bucket_association}
*/
export declare class ShieldDrtAccessLogBucketAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_shield_drt_access_log_bucket_association";
    /**
    * Generates CDKTF code for importing a ShieldDrtAccessLogBucketAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ShieldDrtAccessLogBucketAssociation to import
    * @param importFromId The id of the existing ShieldDrtAccessLogBucketAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_log_bucket_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ShieldDrtAccessLogBucketAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_log_bucket_association aws_shield_drt_access_log_bucket_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ShieldDrtAccessLogBucketAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ShieldDrtAccessLogBucketAssociationConfig);
    get id(): string;
    private _logBucket?;
    get logBucket(): string;
    set logBucket(value: string);
    get logBucketInput(): string | undefined;
    private _roleArnAssociationId?;
    get roleArnAssociationId(): string;
    set roleArnAssociationId(value: string);
    get roleArnAssociationIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference;
    putTimeouts(value: ShieldDrtAccessLogBucketAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ShieldDrtAccessLogBucketAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
