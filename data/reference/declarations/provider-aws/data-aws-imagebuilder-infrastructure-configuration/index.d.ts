/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsImagebuilderInfrastructureConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_infrastructure_configuration#arn DataAwsImagebuilderInfrastructureConfiguration#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_infrastructure_configuration#id DataAwsImagebuilderInfrastructureConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_infrastructure_configuration#resource_tags DataAwsImagebuilderInfrastructureConfiguration#resource_tags}
    */
    readonly resourceTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_infrastructure_configuration#tags DataAwsImagebuilderInfrastructureConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions {
}
export declare function dataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsToTerraform(struct?: DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions): any;
export declare function dataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsToHclTerraform(struct?: DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions): any;
export declare class DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions | undefined;
    set internalValue(value: DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions | undefined);
    get httpPutResponseHopLimit(): number;
    get httpTokens(): string;
}
export declare class DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference;
}
export interface DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs {
}
export declare function dataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsToTerraform(struct?: DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs): any;
export declare function dataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsToHclTerraform(struct?: DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs): any;
export declare class DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs | undefined;
    set internalValue(value: DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs | undefined);
    get s3BucketName(): string;
    get s3KeyPrefix(): string;
}
export declare class DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference;
}
export interface DataAwsImagebuilderInfrastructureConfigurationLogging {
}
export declare function dataAwsImagebuilderInfrastructureConfigurationLoggingToTerraform(struct?: DataAwsImagebuilderInfrastructureConfigurationLogging): any;
export declare function dataAwsImagebuilderInfrastructureConfigurationLoggingToHclTerraform(struct?: DataAwsImagebuilderInfrastructureConfigurationLogging): any;
export declare class DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderInfrastructureConfigurationLogging | undefined;
    set internalValue(value: DataAwsImagebuilderInfrastructureConfigurationLogging | undefined);
    private _s3Logs;
    get s3Logs(): DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList;
}
export declare class DataAwsImagebuilderInfrastructureConfigurationLoggingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_infrastructure_configuration aws_imagebuilder_infrastructure_configuration}
*/
export declare class DataAwsImagebuilderInfrastructureConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_imagebuilder_infrastructure_configuration";
    /**
    * Generates CDKTF code for importing a DataAwsImagebuilderInfrastructureConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsImagebuilderInfrastructureConfiguration to import
    * @param importFromId The id of the existing DataAwsImagebuilderInfrastructureConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_infrastructure_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsImagebuilderInfrastructureConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_infrastructure_configuration aws_imagebuilder_infrastructure_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderInfrastructureConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsImagebuilderInfrastructureConfigurationConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    get dateCreated(): string;
    get dateUpdated(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceMetadataOptions;
    get instanceMetadataOptions(): DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList;
    get instanceProfileName(): string;
    get instanceTypes(): string[];
    get keyPair(): string;
    private _logging;
    get logging(): DataAwsImagebuilderInfrastructureConfigurationLoggingList;
    get name(): string;
    private _resourceTags?;
    get resourceTags(): {
        [key: string]: string;
    };
    set resourceTags(value: {
        [key: string]: string;
    });
    resetResourceTags(): void;
    get resourceTagsInput(): {
        [key: string]: string;
    } | undefined;
    get securityGroupIds(): string[];
    get snsTopicArn(): string;
    get subnetId(): string;
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
    get terminateInstanceOnFailure(): cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
