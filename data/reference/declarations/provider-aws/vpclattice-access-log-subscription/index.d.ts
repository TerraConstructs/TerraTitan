/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpclatticeAccessLogSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_access_log_subscription#destination_arn VpclatticeAccessLogSubscription#destination_arn}
    */
    readonly destinationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_access_log_subscription#id VpclatticeAccessLogSubscription#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_access_log_subscription#resource_identifier VpclatticeAccessLogSubscription#resource_identifier}
    */
    readonly resourceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_access_log_subscription#service_network_log_type VpclatticeAccessLogSubscription#service_network_log_type}
    */
    readonly serviceNetworkLogType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_access_log_subscription#tags VpclatticeAccessLogSubscription#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_access_log_subscription#tags_all VpclatticeAccessLogSubscription#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_access_log_subscription aws_vpclattice_access_log_subscription}
*/
export declare class VpclatticeAccessLogSubscription extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpclattice_access_log_subscription";
    /**
    * Generates CDKTF code for importing a VpclatticeAccessLogSubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpclatticeAccessLogSubscription to import
    * @param importFromId The id of the existing VpclatticeAccessLogSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_access_log_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpclatticeAccessLogSubscription to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_access_log_subscription aws_vpclattice_access_log_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpclatticeAccessLogSubscriptionConfig
    */
    constructor(scope: Construct, id: string, config: VpclatticeAccessLogSubscriptionConfig);
    get arn(): string;
    private _destinationArn?;
    get destinationArn(): string;
    set destinationArn(value: string);
    get destinationArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get resourceArn(): string;
    private _resourceIdentifier?;
    get resourceIdentifier(): string;
    set resourceIdentifier(value: string);
    get resourceIdentifierInput(): string | undefined;
    private _serviceNetworkLogType?;
    get serviceNetworkLogType(): string;
    set serviceNetworkLogType(value: string);
    resetServiceNetworkLogType(): void;
    get serviceNetworkLogTypeInput(): string | undefined;
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
