/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2InstanceStateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_state#force Ec2InstanceState#force}
    */
    readonly force?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_state#id Ec2InstanceState#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_state#instance_id Ec2InstanceState#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_state#state Ec2InstanceState#state}
    */
    readonly state: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_state#timeouts Ec2InstanceState#timeouts}
    */
    readonly timeouts?: Ec2InstanceStateTimeouts;
}
export interface Ec2InstanceStateTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_state#create Ec2InstanceState#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_state#delete Ec2InstanceState#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_state#update Ec2InstanceState#update}
    */
    readonly update?: string;
}
export declare function ec2InstanceStateTimeoutsToTerraform(struct?: Ec2InstanceStateTimeouts | cdktf.IResolvable): any;
export declare function ec2InstanceStateTimeoutsToHclTerraform(struct?: Ec2InstanceStateTimeouts | cdktf.IResolvable): any;
export declare class Ec2InstanceStateTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2InstanceStateTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2InstanceStateTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_state aws_ec2_instance_state}
*/
export declare class Ec2InstanceState extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_instance_state";
    /**
    * Generates CDKTF code for importing a Ec2InstanceState resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2InstanceState to import
    * @param importFromId The id of the existing Ec2InstanceState that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_state#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2InstanceState to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_state aws_ec2_instance_state} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2InstanceStateConfig
    */
    constructor(scope: Construct, id: string, config: Ec2InstanceStateConfig);
    private _force?;
    get force(): boolean | cdktf.IResolvable;
    set force(value: boolean | cdktf.IResolvable);
    resetForce(): void;
    get forceInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    get stateInput(): string | undefined;
    private _timeouts;
    get timeouts(): Ec2InstanceStateTimeoutsOutputReference;
    putTimeouts(value: Ec2InstanceStateTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Ec2InstanceStateTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
