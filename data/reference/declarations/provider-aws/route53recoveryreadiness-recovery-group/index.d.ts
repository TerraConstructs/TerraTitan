/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecoveryreadinessRecoveryGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_recovery_group#cells Route53RecoveryreadinessRecoveryGroup#cells}
    */
    readonly cells?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_recovery_group#id Route53RecoveryreadinessRecoveryGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_recovery_group#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}
    */
    readonly recoveryGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_recovery_group#tags Route53RecoveryreadinessRecoveryGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_recovery_group#tags_all Route53RecoveryreadinessRecoveryGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_recovery_group#timeouts Route53RecoveryreadinessRecoveryGroup#timeouts}
    */
    readonly timeouts?: Route53RecoveryreadinessRecoveryGroupTimeouts;
}
export interface Route53RecoveryreadinessRecoveryGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_recovery_group#delete Route53RecoveryreadinessRecoveryGroup#delete}
    */
    readonly delete?: string;
}
export declare function route53RecoveryreadinessRecoveryGroupTimeoutsToTerraform(struct?: Route53RecoveryreadinessRecoveryGroupTimeouts | cdktf.IResolvable): any;
export declare function route53RecoveryreadinessRecoveryGroupTimeoutsToHclTerraform(struct?: Route53RecoveryreadinessRecoveryGroupTimeouts | cdktf.IResolvable): any;
export declare class Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecoveryreadinessRecoveryGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Route53RecoveryreadinessRecoveryGroupTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_recovery_group aws_route53recoveryreadiness_recovery_group}
*/
export declare class Route53RecoveryreadinessRecoveryGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53recoveryreadiness_recovery_group";
    /**
    * Generates CDKTF code for importing a Route53RecoveryreadinessRecoveryGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53RecoveryreadinessRecoveryGroup to import
    * @param importFromId The id of the existing Route53RecoveryreadinessRecoveryGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_recovery_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53RecoveryreadinessRecoveryGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_recovery_group aws_route53recoveryreadiness_recovery_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessRecoveryGroupConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoveryreadinessRecoveryGroupConfig);
    get arn(): string;
    private _cells?;
    get cells(): string[];
    set cells(value: string[]);
    resetCells(): void;
    get cellsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _recoveryGroupName?;
    get recoveryGroupName(): string;
    set recoveryGroupName(value: string);
    get recoveryGroupNameInput(): string | undefined;
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
    get timeouts(): Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference;
    putTimeouts(value: Route53RecoveryreadinessRecoveryGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Route53RecoveryreadinessRecoveryGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
