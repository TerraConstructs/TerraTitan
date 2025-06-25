/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MskconnectWorkerConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/mskconnect_worker_configuration#description MskconnectWorkerConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/mskconnect_worker_configuration#id MskconnectWorkerConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/mskconnect_worker_configuration#name MskconnectWorkerConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/mskconnect_worker_configuration#properties_file_content MskconnectWorkerConfiguration#properties_file_content}
    */
    readonly propertiesFileContent: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/mskconnect_worker_configuration#tags MskconnectWorkerConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/mskconnect_worker_configuration#tags_all MskconnectWorkerConfiguration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/mskconnect_worker_configuration#timeouts MskconnectWorkerConfiguration#timeouts}
    */
    readonly timeouts?: MskconnectWorkerConfigurationTimeouts;
}
export interface MskconnectWorkerConfigurationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/mskconnect_worker_configuration#delete MskconnectWorkerConfiguration#delete}
    */
    readonly delete?: string;
}
export declare function mskconnectWorkerConfigurationTimeoutsToTerraform(struct?: MskconnectWorkerConfigurationTimeouts | cdktf.IResolvable): any;
export declare function mskconnectWorkerConfigurationTimeoutsToHclTerraform(struct?: MskconnectWorkerConfigurationTimeouts | cdktf.IResolvable): any;
export declare class MskconnectWorkerConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectWorkerConfigurationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MskconnectWorkerConfigurationTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/mskconnect_worker_configuration aws_mskconnect_worker_configuration}
*/
export declare class MskconnectWorkerConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_mskconnect_worker_configuration";
    /**
    * Generates CDKTF code for importing a MskconnectWorkerConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MskconnectWorkerConfiguration to import
    * @param importFromId The id of the existing MskconnectWorkerConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/mskconnect_worker_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MskconnectWorkerConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/mskconnect_worker_configuration aws_mskconnect_worker_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskconnectWorkerConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: MskconnectWorkerConfigurationConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get latestRevision(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _propertiesFileContent?;
    get propertiesFileContent(): string;
    set propertiesFileContent(value: string);
    get propertiesFileContentInput(): string | undefined;
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
    get timeouts(): MskconnectWorkerConfigurationTimeoutsOutputReference;
    putTimeouts(value: MskconnectWorkerConfigurationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MskconnectWorkerConfigurationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
