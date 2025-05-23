/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecoveryreadinessReadinessCheckConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_readiness_check#id Route53RecoveryreadinessReadinessCheck#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_readiness_check#readiness_check_name Route53RecoveryreadinessReadinessCheck#readiness_check_name}
    */
    readonly readinessCheckName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_readiness_check#resource_set_name Route53RecoveryreadinessReadinessCheck#resource_set_name}
    */
    readonly resourceSetName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_readiness_check#tags Route53RecoveryreadinessReadinessCheck#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_readiness_check#tags_all Route53RecoveryreadinessReadinessCheck#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_readiness_check#timeouts Route53RecoveryreadinessReadinessCheck#timeouts}
    */
    readonly timeouts?: Route53RecoveryreadinessReadinessCheckTimeouts;
}
export interface Route53RecoveryreadinessReadinessCheckTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_readiness_check#delete Route53RecoveryreadinessReadinessCheck#delete}
    */
    readonly delete?: string;
}
export declare function route53RecoveryreadinessReadinessCheckTimeoutsToTerraform(struct?: Route53RecoveryreadinessReadinessCheckTimeouts | cdktf.IResolvable): any;
export declare function route53RecoveryreadinessReadinessCheckTimeoutsToHclTerraform(struct?: Route53RecoveryreadinessReadinessCheckTimeouts | cdktf.IResolvable): any;
export declare class Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecoveryreadinessReadinessCheckTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Route53RecoveryreadinessReadinessCheckTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_readiness_check aws_route53recoveryreadiness_readiness_check}
*/
export declare class Route53RecoveryreadinessReadinessCheck extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53recoveryreadiness_readiness_check";
    /**
    * Generates CDKTF code for importing a Route53RecoveryreadinessReadinessCheck resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53RecoveryreadinessReadinessCheck to import
    * @param importFromId The id of the existing Route53RecoveryreadinessReadinessCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_readiness_check#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53RecoveryreadinessReadinessCheck to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_readiness_check aws_route53recoveryreadiness_readiness_check} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessReadinessCheckConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoveryreadinessReadinessCheckConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _readinessCheckName?;
    get readinessCheckName(): string;
    set readinessCheckName(value: string);
    get readinessCheckNameInput(): string | undefined;
    private _resourceSetName?;
    get resourceSetName(): string;
    set resourceSetName(value: string);
    get resourceSetNameInput(): string | undefined;
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
    get timeouts(): Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference;
    putTimeouts(value: Route53RecoveryreadinessReadinessCheckTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Route53RecoveryreadinessReadinessCheckTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
