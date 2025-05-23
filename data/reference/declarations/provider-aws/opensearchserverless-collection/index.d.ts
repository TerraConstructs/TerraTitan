/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpensearchserverlessCollectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_collection#description OpensearchserverlessCollection#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_collection#name OpensearchserverlessCollection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_collection#standby_replicas OpensearchserverlessCollection#standby_replicas}
    */
    readonly standbyReplicas?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_collection#tags OpensearchserverlessCollection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_collection#type OpensearchserverlessCollection#type}
    */
    readonly type?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_collection#timeouts OpensearchserverlessCollection#timeouts}
    */
    readonly timeouts?: OpensearchserverlessCollectionTimeouts;
}
export interface OpensearchserverlessCollectionTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_collection#create OpensearchserverlessCollection#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_collection#delete OpensearchserverlessCollection#delete}
    */
    readonly delete?: string;
}
export declare function opensearchserverlessCollectionTimeoutsToTerraform(struct?: OpensearchserverlessCollectionTimeouts | cdktf.IResolvable): any;
export declare function opensearchserverlessCollectionTimeoutsToHclTerraform(struct?: OpensearchserverlessCollectionTimeouts | cdktf.IResolvable): any;
export declare class OpensearchserverlessCollectionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchserverlessCollectionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: OpensearchserverlessCollectionTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_collection aws_opensearchserverless_collection}
*/
export declare class OpensearchserverlessCollection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opensearchserverless_collection";
    /**
    * Generates CDKTF code for importing a OpensearchserverlessCollection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpensearchserverlessCollection to import
    * @param importFromId The id of the existing OpensearchserverlessCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_collection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpensearchserverlessCollection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_collection aws_opensearchserverless_collection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpensearchserverlessCollectionConfig
    */
    constructor(scope: Construct, id: string, config: OpensearchserverlessCollectionConfig);
    get arn(): string;
    get collectionEndpoint(): string;
    get dashboardEndpoint(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get kmsKeyArn(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _standbyReplicas?;
    get standbyReplicas(): string;
    set standbyReplicas(value: string);
    resetStandbyReplicas(): void;
    get standbyReplicasInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _timeouts;
    get timeouts(): OpensearchserverlessCollectionTimeoutsOutputReference;
    putTimeouts(value: OpensearchserverlessCollectionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | OpensearchserverlessCollectionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
