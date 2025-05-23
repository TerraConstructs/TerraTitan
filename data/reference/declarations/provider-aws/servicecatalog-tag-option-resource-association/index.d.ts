/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogTagOptionResourceAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_tag_option_resource_association#id ServicecatalogTagOptionResourceAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_tag_option_resource_association#resource_id ServicecatalogTagOptionResourceAssociation#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_tag_option_resource_association#tag_option_id ServicecatalogTagOptionResourceAssociation#tag_option_id}
    */
    readonly tagOptionId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_tag_option_resource_association#timeouts ServicecatalogTagOptionResourceAssociation#timeouts}
    */
    readonly timeouts?: ServicecatalogTagOptionResourceAssociationTimeouts;
}
export interface ServicecatalogTagOptionResourceAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_tag_option_resource_association#create ServicecatalogTagOptionResourceAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_tag_option_resource_association#delete ServicecatalogTagOptionResourceAssociation#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_tag_option_resource_association#read ServicecatalogTagOptionResourceAssociation#read}
    */
    readonly read?: string;
}
export declare function servicecatalogTagOptionResourceAssociationTimeoutsToTerraform(struct?: ServicecatalogTagOptionResourceAssociationTimeouts | cdktf.IResolvable): any;
export declare function servicecatalogTagOptionResourceAssociationTimeoutsToHclTerraform(struct?: ServicecatalogTagOptionResourceAssociationTimeouts | cdktf.IResolvable): any;
export declare class ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServicecatalogTagOptionResourceAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ServicecatalogTagOptionResourceAssociationTimeouts | cdktf.IResolvable | undefined);
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
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_tag_option_resource_association aws_servicecatalog_tag_option_resource_association}
*/
export declare class ServicecatalogTagOptionResourceAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_servicecatalog_tag_option_resource_association";
    /**
    * Generates CDKTF code for importing a ServicecatalogTagOptionResourceAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ServicecatalogTagOptionResourceAssociation to import
    * @param importFromId The id of the existing ServicecatalogTagOptionResourceAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_tag_option_resource_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ServicecatalogTagOptionResourceAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_tag_option_resource_association aws_servicecatalog_tag_option_resource_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogTagOptionResourceAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogTagOptionResourceAssociationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get resourceArn(): string;
    get resourceCreatedTime(): string;
    get resourceDescription(): string;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string | undefined;
    get resourceName(): string;
    private _tagOptionId?;
    get tagOptionId(): string;
    set tagOptionId(value: string);
    get tagOptionIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference;
    putTimeouts(value: ServicecatalogTagOptionResourceAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ServicecatalogTagOptionResourceAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
