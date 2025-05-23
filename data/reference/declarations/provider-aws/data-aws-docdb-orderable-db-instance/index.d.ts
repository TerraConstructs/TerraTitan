/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDocdbOrderableDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_orderable_db_instance#engine DataAwsDocdbOrderableDbInstance#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_orderable_db_instance#engine_version DataAwsDocdbOrderableDbInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_orderable_db_instance#id DataAwsDocdbOrderableDbInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_orderable_db_instance#instance_class DataAwsDocdbOrderableDbInstance#instance_class}
    */
    readonly instanceClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_orderable_db_instance#license_model DataAwsDocdbOrderableDbInstance#license_model}
    */
    readonly licenseModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_orderable_db_instance#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}
    */
    readonly preferredInstanceClasses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_orderable_db_instance#vpc DataAwsDocdbOrderableDbInstance#vpc}
    */
    readonly vpc?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_orderable_db_instance aws_docdb_orderable_db_instance}
*/
export declare class DataAwsDocdbOrderableDbInstance extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_docdb_orderable_db_instance";
    /**
    * Generates CDKTF code for importing a DataAwsDocdbOrderableDbInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDocdbOrderableDbInstance to import
    * @param importFromId The id of the existing DataAwsDocdbOrderableDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_orderable_db_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDocdbOrderableDbInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_orderable_db_instance aws_docdb_orderable_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDocdbOrderableDbInstanceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsDocdbOrderableDbInstanceConfig);
    get availabilityZones(): string[];
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceClass?;
    get instanceClass(): string;
    set instanceClass(value: string);
    resetInstanceClass(): void;
    get instanceClassInput(): string | undefined;
    private _licenseModel?;
    get licenseModel(): string;
    set licenseModel(value: string);
    resetLicenseModel(): void;
    get licenseModelInput(): string | undefined;
    private _preferredInstanceClasses?;
    get preferredInstanceClasses(): string[];
    set preferredInstanceClasses(value: string[]);
    resetPreferredInstanceClasses(): void;
    get preferredInstanceClassesInput(): string[] | undefined;
    private _vpc?;
    get vpc(): boolean | cdktf.IResolvable;
    set vpc(value: boolean | cdktf.IResolvable);
    resetVpc(): void;
    get vpcInput(): boolean | cdktf.IResolvable | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
