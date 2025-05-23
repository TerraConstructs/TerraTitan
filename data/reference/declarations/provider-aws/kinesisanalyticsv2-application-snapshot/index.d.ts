/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Kinesisanalyticsv2ApplicationSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesisanalyticsv2_application_snapshot#application_name Kinesisanalyticsv2ApplicationSnapshot#application_name}
    */
    readonly applicationName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesisanalyticsv2_application_snapshot#id Kinesisanalyticsv2ApplicationSnapshot#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesisanalyticsv2_application_snapshot#snapshot_name Kinesisanalyticsv2ApplicationSnapshot#snapshot_name}
    */
    readonly snapshotName: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesisanalyticsv2_application_snapshot#timeouts Kinesisanalyticsv2ApplicationSnapshot#timeouts}
    */
    readonly timeouts?: Kinesisanalyticsv2ApplicationSnapshotTimeouts;
}
export interface Kinesisanalyticsv2ApplicationSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesisanalyticsv2_application_snapshot#create Kinesisanalyticsv2ApplicationSnapshot#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesisanalyticsv2_application_snapshot#delete Kinesisanalyticsv2ApplicationSnapshot#delete}
    */
    readonly delete?: string;
}
export declare function kinesisanalyticsv2ApplicationSnapshotTimeoutsToTerraform(struct?: Kinesisanalyticsv2ApplicationSnapshotTimeouts | cdktf.IResolvable): any;
export declare function kinesisanalyticsv2ApplicationSnapshotTimeoutsToHclTerraform(struct?: Kinesisanalyticsv2ApplicationSnapshotTimeouts | cdktf.IResolvable): any;
export declare class Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Kinesisanalyticsv2ApplicationSnapshotTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationSnapshotTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesisanalyticsv2_application_snapshot aws_kinesisanalyticsv2_application_snapshot}
*/
export declare class Kinesisanalyticsv2ApplicationSnapshot extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_kinesisanalyticsv2_application_snapshot";
    /**
    * Generates CDKTF code for importing a Kinesisanalyticsv2ApplicationSnapshot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Kinesisanalyticsv2ApplicationSnapshot to import
    * @param importFromId The id of the existing Kinesisanalyticsv2ApplicationSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesisanalyticsv2_application_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Kinesisanalyticsv2ApplicationSnapshot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesisanalyticsv2_application_snapshot aws_kinesisanalyticsv2_application_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Kinesisanalyticsv2ApplicationSnapshotConfig
    */
    constructor(scope: Construct, id: string, config: Kinesisanalyticsv2ApplicationSnapshotConfig);
    private _applicationName?;
    get applicationName(): string;
    set applicationName(value: string);
    get applicationNameInput(): string | undefined;
    get applicationVersionId(): number;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get snapshotCreationTimestamp(): string;
    private _snapshotName?;
    get snapshotName(): string;
    set snapshotName(value: string);
    get snapshotNameInput(): string | undefined;
    private _timeouts;
    get timeouts(): Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference;
    putTimeouts(value: Kinesisanalyticsv2ApplicationSnapshotTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Kinesisanalyticsv2ApplicationSnapshotTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
