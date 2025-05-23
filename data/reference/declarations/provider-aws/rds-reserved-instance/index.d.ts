/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsReservedInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_reserved_instance#id RdsReservedInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_reserved_instance#instance_count RdsReservedInstance#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_reserved_instance#offering_id RdsReservedInstance#offering_id}
    */
    readonly offeringId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_reserved_instance#reservation_id RdsReservedInstance#reservation_id}
    */
    readonly reservationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_reserved_instance#tags RdsReservedInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_reserved_instance#tags_all RdsReservedInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_reserved_instance#timeouts RdsReservedInstance#timeouts}
    */
    readonly timeouts?: RdsReservedInstanceTimeouts;
}
export interface RdsReservedInstanceRecurringCharges {
}
export declare function rdsReservedInstanceRecurringChargesToTerraform(struct?: RdsReservedInstanceRecurringCharges): any;
export declare function rdsReservedInstanceRecurringChargesToHclTerraform(struct?: RdsReservedInstanceRecurringCharges): any;
export declare class RdsReservedInstanceRecurringChargesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RdsReservedInstanceRecurringCharges | undefined;
    set internalValue(value: RdsReservedInstanceRecurringCharges | undefined);
    get recurringChargeAmount(): number;
    get recurringChargeFrequency(): string;
}
export declare class RdsReservedInstanceRecurringChargesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RdsReservedInstanceRecurringChargesOutputReference;
}
export interface RdsReservedInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_reserved_instance#create RdsReservedInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_reserved_instance#delete RdsReservedInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_reserved_instance#update RdsReservedInstance#update}
    */
    readonly update?: string;
}
export declare function rdsReservedInstanceTimeoutsToTerraform(struct?: RdsReservedInstanceTimeouts | cdktf.IResolvable): any;
export declare function rdsReservedInstanceTimeoutsToHclTerraform(struct?: RdsReservedInstanceTimeouts | cdktf.IResolvable): any;
export declare class RdsReservedInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RdsReservedInstanceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RdsReservedInstanceTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_reserved_instance aws_rds_reserved_instance}
*/
export declare class RdsReservedInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rds_reserved_instance";
    /**
    * Generates CDKTF code for importing a RdsReservedInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RdsReservedInstance to import
    * @param importFromId The id of the existing RdsReservedInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_reserved_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RdsReservedInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_reserved_instance aws_rds_reserved_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsReservedInstanceConfig
    */
    constructor(scope: Construct, id: string, config: RdsReservedInstanceConfig);
    get arn(): string;
    get currencyCode(): string;
    get dbInstanceClass(): string;
    get duration(): number;
    get fixedPrice(): number;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceCount?;
    get instanceCount(): number;
    set instanceCount(value: number);
    resetInstanceCount(): void;
    get instanceCountInput(): number | undefined;
    get leaseId(): string;
    get multiAz(): cdktf.IResolvable;
    private _offeringId?;
    get offeringId(): string;
    set offeringId(value: string);
    get offeringIdInput(): string | undefined;
    get offeringType(): string;
    get productDescription(): string;
    private _recurringCharges;
    get recurringCharges(): RdsReservedInstanceRecurringChargesList;
    private _reservationId?;
    get reservationId(): string;
    set reservationId(value: string);
    resetReservationId(): void;
    get reservationIdInput(): string | undefined;
    get startTime(): string;
    get state(): string;
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
    get usagePrice(): number;
    private _timeouts;
    get timeouts(): RdsReservedInstanceTimeoutsOutputReference;
    putTimeouts(value: RdsReservedInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RdsReservedInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
