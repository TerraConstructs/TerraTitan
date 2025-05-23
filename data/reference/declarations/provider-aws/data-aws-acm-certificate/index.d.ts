/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAcmCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acm_certificate#domain DataAwsAcmCertificate#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acm_certificate#id DataAwsAcmCertificate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acm_certificate#key_types DataAwsAcmCertificate#key_types}
    */
    readonly keyTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acm_certificate#most_recent DataAwsAcmCertificate#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acm_certificate#statuses DataAwsAcmCertificate#statuses}
    */
    readonly statuses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acm_certificate#tags DataAwsAcmCertificate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acm_certificate#types DataAwsAcmCertificate#types}
    */
    readonly types?: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acm_certificate aws_acm_certificate}
*/
export declare class DataAwsAcmCertificate extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_acm_certificate";
    /**
    * Generates CDKTF code for importing a DataAwsAcmCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAcmCertificate to import
    * @param importFromId The id of the existing DataAwsAcmCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acm_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAcmCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acm_certificate aws_acm_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAcmCertificateConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsAcmCertificateConfig);
    get arn(): string;
    get certificate(): string;
    get certificateChain(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _keyTypes?;
    get keyTypes(): string[];
    set keyTypes(value: string[]);
    resetKeyTypes(): void;
    get keyTypesInput(): string[] | undefined;
    private _mostRecent?;
    get mostRecent(): boolean | cdktf.IResolvable;
    set mostRecent(value: boolean | cdktf.IResolvable);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | cdktf.IResolvable | undefined;
    get status(): string;
    private _statuses?;
    get statuses(): string[];
    set statuses(value: string[]);
    resetStatuses(): void;
    get statusesInput(): string[] | undefined;
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
    private _types?;
    get types(): string[];
    set types(value: string[]);
    resetTypes(): void;
    get typesInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
