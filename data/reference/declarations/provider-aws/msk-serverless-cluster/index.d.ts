/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MskServerlessClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster#cluster_name MskServerlessCluster#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster#id MskServerlessCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster#tags MskServerlessCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster#tags_all MskServerlessCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * client_authentication block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster#client_authentication MskServerlessCluster#client_authentication}
    */
    readonly clientAuthentication: MskServerlessClusterClientAuthentication;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster#timeouts MskServerlessCluster#timeouts}
    */
    readonly timeouts?: MskServerlessClusterTimeouts;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster#vpc_config MskServerlessCluster#vpc_config}
    */
    readonly vpcConfig: MskServerlessClusterVpcConfig[] | cdktf.IResolvable;
}
export interface MskServerlessClusterClientAuthenticationSaslIam {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster#enabled MskServerlessCluster#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function mskServerlessClusterClientAuthenticationSaslIamToTerraform(struct?: MskServerlessClusterClientAuthenticationSaslIamOutputReference | MskServerlessClusterClientAuthenticationSaslIam): any;
export declare function mskServerlessClusterClientAuthenticationSaslIamToHclTerraform(struct?: MskServerlessClusterClientAuthenticationSaslIamOutputReference | MskServerlessClusterClientAuthenticationSaslIam): any;
export declare class MskServerlessClusterClientAuthenticationSaslIamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskServerlessClusterClientAuthenticationSaslIam | undefined;
    set internalValue(value: MskServerlessClusterClientAuthenticationSaslIam | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface MskServerlessClusterClientAuthenticationSasl {
    /**
    * iam block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster#iam MskServerlessCluster#iam}
    */
    readonly iam: MskServerlessClusterClientAuthenticationSaslIam;
}
export declare function mskServerlessClusterClientAuthenticationSaslToTerraform(struct?: MskServerlessClusterClientAuthenticationSaslOutputReference | MskServerlessClusterClientAuthenticationSasl): any;
export declare function mskServerlessClusterClientAuthenticationSaslToHclTerraform(struct?: MskServerlessClusterClientAuthenticationSaslOutputReference | MskServerlessClusterClientAuthenticationSasl): any;
export declare class MskServerlessClusterClientAuthenticationSaslOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskServerlessClusterClientAuthenticationSasl | undefined;
    set internalValue(value: MskServerlessClusterClientAuthenticationSasl | undefined);
    private _iam;
    get iam(): MskServerlessClusterClientAuthenticationSaslIamOutputReference;
    putIam(value: MskServerlessClusterClientAuthenticationSaslIam): void;
    get iamInput(): MskServerlessClusterClientAuthenticationSaslIam | undefined;
}
export interface MskServerlessClusterClientAuthentication {
    /**
    * sasl block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster#sasl MskServerlessCluster#sasl}
    */
    readonly sasl: MskServerlessClusterClientAuthenticationSasl;
}
export declare function mskServerlessClusterClientAuthenticationToTerraform(struct?: MskServerlessClusterClientAuthenticationOutputReference | MskServerlessClusterClientAuthentication): any;
export declare function mskServerlessClusterClientAuthenticationToHclTerraform(struct?: MskServerlessClusterClientAuthenticationOutputReference | MskServerlessClusterClientAuthentication): any;
export declare class MskServerlessClusterClientAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskServerlessClusterClientAuthentication | undefined;
    set internalValue(value: MskServerlessClusterClientAuthentication | undefined);
    private _sasl;
    get sasl(): MskServerlessClusterClientAuthenticationSaslOutputReference;
    putSasl(value: MskServerlessClusterClientAuthenticationSasl): void;
    get saslInput(): MskServerlessClusterClientAuthenticationSasl | undefined;
}
export interface MskServerlessClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster#create MskServerlessCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster#delete MskServerlessCluster#delete}
    */
    readonly delete?: string;
}
export declare function mskServerlessClusterTimeoutsToTerraform(struct?: MskServerlessClusterTimeouts | cdktf.IResolvable): any;
export declare function mskServerlessClusterTimeoutsToHclTerraform(struct?: MskServerlessClusterTimeouts | cdktf.IResolvable): any;
export declare class MskServerlessClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskServerlessClusterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MskServerlessClusterTimeouts | cdktf.IResolvable | undefined);
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
export interface MskServerlessClusterVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster#security_group_ids MskServerlessCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster#subnet_ids MskServerlessCluster#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function mskServerlessClusterVpcConfigToTerraform(struct?: MskServerlessClusterVpcConfig | cdktf.IResolvable): any;
export declare function mskServerlessClusterVpcConfigToHclTerraform(struct?: MskServerlessClusterVpcConfig | cdktf.IResolvable): any;
export declare class MskServerlessClusterVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MskServerlessClusterVpcConfig | cdktf.IResolvable | undefined;
    set internalValue(value: MskServerlessClusterVpcConfig | cdktf.IResolvable | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
}
export declare class MskServerlessClusterVpcConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MskServerlessClusterVpcConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MskServerlessClusterVpcConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster aws_msk_serverless_cluster}
*/
export declare class MskServerlessCluster extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_msk_serverless_cluster";
    /**
    * Generates CDKTF code for importing a MskServerlessCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MskServerlessCluster to import
    * @param importFromId The id of the existing MskServerlessCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MskServerlessCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_serverless_cluster aws_msk_serverless_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskServerlessClusterConfig
    */
    constructor(scope: Construct, id: string, config: MskServerlessClusterConfig);
    get arn(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    get clusterUuid(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _clientAuthentication;
    get clientAuthentication(): MskServerlessClusterClientAuthenticationOutputReference;
    putClientAuthentication(value: MskServerlessClusterClientAuthentication): void;
    get clientAuthenticationInput(): MskServerlessClusterClientAuthentication | undefined;
    private _timeouts;
    get timeouts(): MskServerlessClusterTimeoutsOutputReference;
    putTimeouts(value: MskServerlessClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MskServerlessClusterTimeouts | undefined;
    private _vpcConfig;
    get vpcConfig(): MskServerlessClusterVpcConfigList;
    putVpcConfig(value: MskServerlessClusterVpcConfig[] | cdktf.IResolvable): void;
    get vpcConfigInput(): cdktf.IResolvable | MskServerlessClusterVpcConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
