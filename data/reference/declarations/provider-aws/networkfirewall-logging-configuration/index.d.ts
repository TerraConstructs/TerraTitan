/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkfirewallLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_logging_configuration#firewall_arn NetworkfirewallLoggingConfiguration#firewall_arn}
    */
    readonly firewallArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_logging_configuration#id NetworkfirewallLoggingConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * logging_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_logging_configuration#logging_configuration NetworkfirewallLoggingConfiguration#logging_configuration}
    */
    readonly loggingConfiguration: NetworkfirewallLoggingConfigurationLoggingConfiguration;
}
export interface NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_logging_configuration#log_destination NetworkfirewallLoggingConfiguration#log_destination}
    */
    readonly logDestination: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_logging_configuration#log_destination_type NetworkfirewallLoggingConfiguration#log_destination_type}
    */
    readonly logDestinationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_logging_configuration#log_type NetworkfirewallLoggingConfiguration#log_type}
    */
    readonly logType: string;
}
export declare function networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig | cdktf.IResolvable): any;
export declare function networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigToHclTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig | cdktf.IResolvable): any;
export declare class NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig | cdktf.IResolvable | undefined);
    private _logDestination?;
    get logDestination(): {
        [key: string]: string;
    };
    set logDestination(value: {
        [key: string]: string;
    });
    get logDestinationInput(): {
        [key: string]: string;
    } | undefined;
    private _logDestinationType?;
    get logDestinationType(): string;
    set logDestinationType(value: string);
    get logDestinationTypeInput(): string | undefined;
    private _logType?;
    get logType(): string;
    set logType(value: string);
    get logTypeInput(): string | undefined;
}
export declare class NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference;
}
export interface NetworkfirewallLoggingConfigurationLoggingConfiguration {
    /**
    * log_destination_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_logging_configuration#log_destination_config NetworkfirewallLoggingConfiguration#log_destination_config}
    */
    readonly logDestinationConfig: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[] | cdktf.IResolvable;
}
export declare function networkfirewallLoggingConfigurationLoggingConfigurationToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference | NetworkfirewallLoggingConfigurationLoggingConfiguration): any;
export declare function networkfirewallLoggingConfigurationLoggingConfigurationToHclTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference | NetworkfirewallLoggingConfigurationLoggingConfiguration): any;
export declare class NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallLoggingConfigurationLoggingConfiguration | undefined;
    set internalValue(value: NetworkfirewallLoggingConfigurationLoggingConfiguration | undefined);
    private _logDestinationConfig;
    get logDestinationConfig(): NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList;
    putLogDestinationConfig(value: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[] | cdktf.IResolvable): void;
    get logDestinationConfigInput(): cdktf.IResolvable | NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_logging_configuration aws_networkfirewall_logging_configuration}
*/
export declare class NetworkfirewallLoggingConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkfirewall_logging_configuration";
    /**
    * Generates CDKTF code for importing a NetworkfirewallLoggingConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkfirewallLoggingConfiguration to import
    * @param importFromId The id of the existing NetworkfirewallLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_logging_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkfirewallLoggingConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_logging_configuration aws_networkfirewall_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallLoggingConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: NetworkfirewallLoggingConfigurationConfig);
    private _firewallArn?;
    get firewallArn(): string;
    set firewallArn(value: string);
    get firewallArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _loggingConfiguration;
    get loggingConfiguration(): NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference;
    putLoggingConfiguration(value: NetworkfirewallLoggingConfigurationLoggingConfiguration): void;
    get loggingConfigurationInput(): NetworkfirewallLoggingConfigurationLoggingConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
