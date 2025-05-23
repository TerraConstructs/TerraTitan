/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApprunnerVpcIngressConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_ingress_connection#id ApprunnerVpcIngressConnection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_ingress_connection#name ApprunnerVpcIngressConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_ingress_connection#service_arn ApprunnerVpcIngressConnection#service_arn}
    */
    readonly serviceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_ingress_connection#tags ApprunnerVpcIngressConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_ingress_connection#tags_all ApprunnerVpcIngressConnection#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * ingress_vpc_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_ingress_connection#ingress_vpc_configuration ApprunnerVpcIngressConnection#ingress_vpc_configuration}
    */
    readonly ingressVpcConfiguration: ApprunnerVpcIngressConnectionIngressVpcConfiguration;
}
export interface ApprunnerVpcIngressConnectionIngressVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_ingress_connection#vpc_endpoint_id ApprunnerVpcIngressConnection#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_ingress_connection#vpc_id ApprunnerVpcIngressConnection#vpc_id}
    */
    readonly vpcId?: string;
}
export declare function apprunnerVpcIngressConnectionIngressVpcConfigurationToTerraform(struct?: ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference | ApprunnerVpcIngressConnectionIngressVpcConfiguration): any;
export declare function apprunnerVpcIngressConnectionIngressVpcConfigurationToHclTerraform(struct?: ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference | ApprunnerVpcIngressConnectionIngressVpcConfiguration): any;
export declare class ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerVpcIngressConnectionIngressVpcConfiguration | undefined;
    set internalValue(value: ApprunnerVpcIngressConnectionIngressVpcConfiguration | undefined);
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    resetVpcEndpointId(): void;
    get vpcEndpointIdInput(): string | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_ingress_connection aws_apprunner_vpc_ingress_connection}
*/
export declare class ApprunnerVpcIngressConnection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apprunner_vpc_ingress_connection";
    /**
    * Generates CDKTF code for importing a ApprunnerVpcIngressConnection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApprunnerVpcIngressConnection to import
    * @param importFromId The id of the existing ApprunnerVpcIngressConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_ingress_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApprunnerVpcIngressConnection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_vpc_ingress_connection aws_apprunner_vpc_ingress_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerVpcIngressConnectionConfig
    */
    constructor(scope: Construct, id: string, config: ApprunnerVpcIngressConnectionConfig);
    get arn(): string;
    get domainName(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _serviceArn?;
    get serviceArn(): string;
    set serviceArn(value: string);
    get serviceArnInput(): string | undefined;
    get status(): string;
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
    private _ingressVpcConfiguration;
    get ingressVpcConfiguration(): ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference;
    putIngressVpcConfiguration(value: ApprunnerVpcIngressConnectionIngressVpcConfiguration): void;
    get ingressVpcConfigurationInput(): ApprunnerVpcIngressConnectionIngressVpcConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
