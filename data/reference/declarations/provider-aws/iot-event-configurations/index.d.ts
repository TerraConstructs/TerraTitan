/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotEventConfigurationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_event_configurations#event_configurations IotEventConfigurations#event_configurations}
    */
    readonly eventConfigurations: {
        [key: string]: (boolean | cdktf.IResolvable);
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_event_configurations#id IotEventConfigurations#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_event_configurations aws_iot_event_configurations}
*/
export declare class IotEventConfigurations extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iot_event_configurations";
    /**
    * Generates CDKTF code for importing a IotEventConfigurations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IotEventConfigurations to import
    * @param importFromId The id of the existing IotEventConfigurations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_event_configurations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IotEventConfigurations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_event_configurations aws_iot_event_configurations} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotEventConfigurationsConfig
    */
    constructor(scope: Construct, id: string, config: IotEventConfigurationsConfig);
    private _eventConfigurations?;
    get eventConfigurations(): {
        [key: string]: (boolean | cdktf.IResolvable);
    };
    set eventConfigurations(value: {
        [key: string]: (boolean | cdktf.IResolvable);
    });
    get eventConfigurationsInput(): {
        [key: string]: boolean | cdktf.IResolvable;
    } | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
