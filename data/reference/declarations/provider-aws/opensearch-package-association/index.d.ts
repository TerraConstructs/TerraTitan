/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpensearchPackageAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package_association#domain_name OpensearchPackageAssociation#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package_association#id OpensearchPackageAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package_association#package_id OpensearchPackageAssociation#package_id}
    */
    readonly packageId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package_association#timeouts OpensearchPackageAssociation#timeouts}
    */
    readonly timeouts?: OpensearchPackageAssociationTimeouts;
}
export interface OpensearchPackageAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package_association#create OpensearchPackageAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package_association#delete OpensearchPackageAssociation#delete}
    */
    readonly delete?: string;
}
export declare function opensearchPackageAssociationTimeoutsToTerraform(struct?: OpensearchPackageAssociationTimeouts | cdktf.IResolvable): any;
export declare function opensearchPackageAssociationTimeoutsToHclTerraform(struct?: OpensearchPackageAssociationTimeouts | cdktf.IResolvable): any;
export declare class OpensearchPackageAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchPackageAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: OpensearchPackageAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package_association aws_opensearch_package_association}
*/
export declare class OpensearchPackageAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opensearch_package_association";
    /**
    * Generates CDKTF code for importing a OpensearchPackageAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpensearchPackageAssociation to import
    * @param importFromId The id of the existing OpensearchPackageAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpensearchPackageAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_package_association aws_opensearch_package_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpensearchPackageAssociationConfig
    */
    constructor(scope: Construct, id: string, config: OpensearchPackageAssociationConfig);
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _packageId?;
    get packageId(): string;
    set packageId(value: string);
    get packageIdInput(): string | undefined;
    get referencePath(): string;
    private _timeouts;
    get timeouts(): OpensearchPackageAssociationTimeoutsOutputReference;
    putTimeouts(value: OpensearchPackageAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | OpensearchPackageAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
