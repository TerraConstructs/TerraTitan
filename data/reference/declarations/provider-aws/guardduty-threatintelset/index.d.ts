/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyThreatintelsetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_threatintelset#activate GuarddutyThreatintelset#activate}
    */
    readonly activate: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_threatintelset#detector_id GuarddutyThreatintelset#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_threatintelset#format GuarddutyThreatintelset#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_threatintelset#id GuarddutyThreatintelset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_threatintelset#location GuarddutyThreatintelset#location}
    */
    readonly location: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_threatintelset#name GuarddutyThreatintelset#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_threatintelset#tags GuarddutyThreatintelset#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_threatintelset#tags_all GuarddutyThreatintelset#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_threatintelset aws_guardduty_threatintelset}
*/
export declare class GuarddutyThreatintelset extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_guardduty_threatintelset";
    /**
    * Generates CDKTF code for importing a GuarddutyThreatintelset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GuarddutyThreatintelset to import
    * @param importFromId The id of the existing GuarddutyThreatintelset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_threatintelset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GuarddutyThreatintelset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_threatintelset aws_guardduty_threatintelset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyThreatintelsetConfig
    */
    constructor(scope: Construct, id: string, config: GuarddutyThreatintelsetConfig);
    private _activate?;
    get activate(): boolean | cdktf.IResolvable;
    set activate(value: boolean | cdktf.IResolvable);
    get activateInput(): boolean | cdktf.IResolvable | undefined;
    get arn(): string;
    private _detectorId?;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string | undefined;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _location?;
    get location(): string;
    set location(value: string);
    get locationInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
