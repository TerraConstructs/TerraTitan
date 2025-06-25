/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubStandardsSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/securityhub_standards_subscription#id SecurityhubStandardsSubscription#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/securityhub_standards_subscription#standards_arn SecurityhubStandardsSubscription#standards_arn}
    */
    readonly standardsArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/securityhub_standards_subscription#timeouts SecurityhubStandardsSubscription#timeouts}
    */
    readonly timeouts?: SecurityhubStandardsSubscriptionTimeouts;
}
export interface SecurityhubStandardsSubscriptionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/securityhub_standards_subscription#create SecurityhubStandardsSubscription#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/securityhub_standards_subscription#delete SecurityhubStandardsSubscription#delete}
    */
    readonly delete?: string;
}
export declare function securityhubStandardsSubscriptionTimeoutsToTerraform(struct?: SecurityhubStandardsSubscriptionTimeouts | cdktf.IResolvable): any;
export declare function securityhubStandardsSubscriptionTimeoutsToHclTerraform(struct?: SecurityhubStandardsSubscriptionTimeouts | cdktf.IResolvable): any;
export declare class SecurityhubStandardsSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubStandardsSubscriptionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubStandardsSubscriptionTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/securityhub_standards_subscription aws_securityhub_standards_subscription}
*/
export declare class SecurityhubStandardsSubscription extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securityhub_standards_subscription";
    /**
    * Generates CDKTF code for importing a SecurityhubStandardsSubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecurityhubStandardsSubscription to import
    * @param importFromId The id of the existing SecurityhubStandardsSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/securityhub_standards_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecurityhubStandardsSubscription to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/securityhub_standards_subscription aws_securityhub_standards_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubStandardsSubscriptionConfig
    */
    constructor(scope: Construct, id: string, config: SecurityhubStandardsSubscriptionConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _standardsArn?;
    get standardsArn(): string;
    set standardsArn(value: string);
    get standardsArnInput(): string | undefined;
    private _timeouts;
    get timeouts(): SecurityhubStandardsSubscriptionTimeoutsOutputReference;
    putTimeouts(value: SecurityhubStandardsSubscriptionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SecurityhubStandardsSubscriptionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
