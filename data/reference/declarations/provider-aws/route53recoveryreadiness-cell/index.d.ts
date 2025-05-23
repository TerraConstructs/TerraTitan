/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecoveryreadinessCellConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_cell#cell_name Route53RecoveryreadinessCell#cell_name}
    */
    readonly cellName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_cell#cells Route53RecoveryreadinessCell#cells}
    */
    readonly cells?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_cell#id Route53RecoveryreadinessCell#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_cell#tags Route53RecoveryreadinessCell#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_cell#tags_all Route53RecoveryreadinessCell#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_cell#timeouts Route53RecoveryreadinessCell#timeouts}
    */
    readonly timeouts?: Route53RecoveryreadinessCellTimeouts;
}
export interface Route53RecoveryreadinessCellTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_cell#delete Route53RecoveryreadinessCell#delete}
    */
    readonly delete?: string;
}
export declare function route53RecoveryreadinessCellTimeoutsToTerraform(struct?: Route53RecoveryreadinessCellTimeouts | cdktf.IResolvable): any;
export declare function route53RecoveryreadinessCellTimeoutsToHclTerraform(struct?: Route53RecoveryreadinessCellTimeouts | cdktf.IResolvable): any;
export declare class Route53RecoveryreadinessCellTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecoveryreadinessCellTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Route53RecoveryreadinessCellTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_cell aws_route53recoveryreadiness_cell}
*/
export declare class Route53RecoveryreadinessCell extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53recoveryreadiness_cell";
    /**
    * Generates CDKTF code for importing a Route53RecoveryreadinessCell resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53RecoveryreadinessCell to import
    * @param importFromId The id of the existing Route53RecoveryreadinessCell that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_cell#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53RecoveryreadinessCell to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_cell aws_route53recoveryreadiness_cell} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessCellConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoveryreadinessCellConfig);
    get arn(): string;
    private _cellName?;
    get cellName(): string;
    set cellName(value: string);
    get cellNameInput(): string | undefined;
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
    get parentReadinessScopes(): string[];
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
    get timeouts(): Route53RecoveryreadinessCellTimeoutsOutputReference;
    putTimeouts(value: Route53RecoveryreadinessCellTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Route53RecoveryreadinessCellTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
