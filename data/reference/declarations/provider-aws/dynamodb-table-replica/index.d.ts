/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamodbTableReplicaAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_replica#deletion_protection_enabled DynamodbTableReplicaA#deletion_protection_enabled}
    */
    readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_replica#global_table_arn DynamodbTableReplicaA#global_table_arn}
    */
    readonly globalTableArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_replica#id DynamodbTableReplicaA#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_replica#kms_key_arn DynamodbTableReplicaA#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_replica#point_in_time_recovery DynamodbTableReplicaA#point_in_time_recovery}
    */
    readonly pointInTimeRecovery?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_replica#table_class_override DynamodbTableReplicaA#table_class_override}
    */
    readonly tableClassOverride?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_replica#tags DynamodbTableReplicaA#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_replica#tags_all DynamodbTableReplicaA#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_replica#timeouts DynamodbTableReplicaA#timeouts}
    */
    readonly timeouts?: DynamodbTableReplicaTimeouts;
}
export interface DynamodbTableReplicaTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_replica#create DynamodbTableReplicaA#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_replica#delete DynamodbTableReplicaA#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_replica#update DynamodbTableReplicaA#update}
    */
    readonly update?: string;
}
export declare function dynamodbTableReplicaTimeoutsToTerraform(struct?: DynamodbTableReplicaTimeouts | cdktf.IResolvable): any;
export declare function dynamodbTableReplicaTimeoutsToHclTerraform(struct?: DynamodbTableReplicaTimeouts | cdktf.IResolvable): any;
export declare class DynamodbTableReplicaTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamodbTableReplicaTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DynamodbTableReplicaTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_replica aws_dynamodb_table_replica}
*/
export declare class DynamodbTableReplicaA extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dynamodb_table_replica";
    /**
    * Generates CDKTF code for importing a DynamodbTableReplicaA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamodbTableReplicaA to import
    * @param importFromId The id of the existing DynamodbTableReplicaA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_replica#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamodbTableReplicaA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_replica aws_dynamodb_table_replica} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbTableReplicaAConfig
    */
    constructor(scope: Construct, id: string, config: DynamodbTableReplicaAConfig);
    get arn(): string;
    private _deletionProtectionEnabled?;
    get deletionProtectionEnabled(): boolean | cdktf.IResolvable;
    set deletionProtectionEnabled(value: boolean | cdktf.IResolvable);
    resetDeletionProtectionEnabled(): void;
    get deletionProtectionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _globalTableArn?;
    get globalTableArn(): string;
    set globalTableArn(value: string);
    get globalTableArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _pointInTimeRecovery?;
    get pointInTimeRecovery(): boolean | cdktf.IResolvable;
    set pointInTimeRecovery(value: boolean | cdktf.IResolvable);
    resetPointInTimeRecovery(): void;
    get pointInTimeRecoveryInput(): boolean | cdktf.IResolvable | undefined;
    private _tableClassOverride?;
    get tableClassOverride(): string;
    set tableClassOverride(value: string);
    resetTableClassOverride(): void;
    get tableClassOverrideInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): DynamodbTableReplicaTimeoutsOutputReference;
    putTimeouts(value: DynamodbTableReplicaTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DynamodbTableReplicaTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
