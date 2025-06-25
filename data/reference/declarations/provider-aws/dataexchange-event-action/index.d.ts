/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataexchangeEventActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_event_action#action DataexchangeEventAction#action}
    */
    readonly action?: DataexchangeEventActionAction[] | cdktf.IResolvable;
    /**
    * event block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_event_action#event DataexchangeEventAction#event}
    */
    readonly event?: DataexchangeEventActionEvent[] | cdktf.IResolvable;
}
export interface DataexchangeEventActionActionExportRevisionToS3Encryption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_event_action#kms_key_arn DataexchangeEventAction#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_event_action#type DataexchangeEventAction#type}
    */
    readonly type?: string;
}
export declare function dataexchangeEventActionActionExportRevisionToS3EncryptionToTerraform(struct?: DataexchangeEventActionActionExportRevisionToS3Encryption | cdktf.IResolvable): any;
export declare function dataexchangeEventActionActionExportRevisionToS3EncryptionToHclTerraform(struct?: DataexchangeEventActionActionExportRevisionToS3Encryption | cdktf.IResolvable): any;
export declare class DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataexchangeEventActionActionExportRevisionToS3Encryption | cdktf.IResolvable | undefined;
    set internalValue(value: DataexchangeEventActionActionExportRevisionToS3Encryption | cdktf.IResolvable | undefined);
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class DataexchangeEventActionActionExportRevisionToS3EncryptionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataexchangeEventActionActionExportRevisionToS3Encryption[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference;
}
export interface DataexchangeEventActionActionExportRevisionToS3RevisionDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_event_action#bucket DataexchangeEventAction#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_event_action#key_pattern DataexchangeEventAction#key_pattern}
    */
    readonly keyPattern?: string;
}
export declare function dataexchangeEventActionActionExportRevisionToS3RevisionDestinationToTerraform(struct?: DataexchangeEventActionActionExportRevisionToS3RevisionDestination | cdktf.IResolvable): any;
export declare function dataexchangeEventActionActionExportRevisionToS3RevisionDestinationToHclTerraform(struct?: DataexchangeEventActionActionExportRevisionToS3RevisionDestination | cdktf.IResolvable): any;
export declare class DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataexchangeEventActionActionExportRevisionToS3RevisionDestination | cdktf.IResolvable | undefined;
    set internalValue(value: DataexchangeEventActionActionExportRevisionToS3RevisionDestination | cdktf.IResolvable | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _keyPattern?;
    get keyPattern(): string;
    set keyPattern(value: string);
    resetKeyPattern(): void;
    get keyPatternInput(): string | undefined;
}
export declare class DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataexchangeEventActionActionExportRevisionToS3RevisionDestination[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference;
}
export interface DataexchangeEventActionActionExportRevisionToS3 {
    /**
    * encryption block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_event_action#encryption DataexchangeEventAction#encryption}
    */
    readonly encryption?: DataexchangeEventActionActionExportRevisionToS3Encryption[] | cdktf.IResolvable;
    /**
    * revision_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_event_action#revision_destination DataexchangeEventAction#revision_destination}
    */
    readonly revisionDestination?: DataexchangeEventActionActionExportRevisionToS3RevisionDestination[] | cdktf.IResolvable;
}
export declare function dataexchangeEventActionActionExportRevisionToS3ToTerraform(struct?: DataexchangeEventActionActionExportRevisionToS3 | cdktf.IResolvable): any;
export declare function dataexchangeEventActionActionExportRevisionToS3ToHclTerraform(struct?: DataexchangeEventActionActionExportRevisionToS3 | cdktf.IResolvable): any;
export declare class DataexchangeEventActionActionExportRevisionToS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataexchangeEventActionActionExportRevisionToS3 | cdktf.IResolvable | undefined;
    set internalValue(value: DataexchangeEventActionActionExportRevisionToS3 | cdktf.IResolvable | undefined);
    private _encryption;
    get encryption(): DataexchangeEventActionActionExportRevisionToS3EncryptionList;
    putEncryption(value: DataexchangeEventActionActionExportRevisionToS3Encryption[] | cdktf.IResolvable): void;
    resetEncryption(): void;
    get encryptionInput(): cdktf.IResolvable | DataexchangeEventActionActionExportRevisionToS3Encryption[] | undefined;
    private _revisionDestination;
    get revisionDestination(): DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList;
    putRevisionDestination(value: DataexchangeEventActionActionExportRevisionToS3RevisionDestination[] | cdktf.IResolvable): void;
    resetRevisionDestination(): void;
    get revisionDestinationInput(): cdktf.IResolvable | DataexchangeEventActionActionExportRevisionToS3RevisionDestination[] | undefined;
}
export declare class DataexchangeEventActionActionExportRevisionToS3List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataexchangeEventActionActionExportRevisionToS3[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataexchangeEventActionActionExportRevisionToS3OutputReference;
}
export interface DataexchangeEventActionAction {
    /**
    * export_revision_to_s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_event_action#export_revision_to_s3 DataexchangeEventAction#export_revision_to_s3}
    */
    readonly exportRevisionToS3?: DataexchangeEventActionActionExportRevisionToS3[] | cdktf.IResolvable;
}
export declare function dataexchangeEventActionActionToTerraform(struct?: DataexchangeEventActionAction | cdktf.IResolvable): any;
export declare function dataexchangeEventActionActionToHclTerraform(struct?: DataexchangeEventActionAction | cdktf.IResolvable): any;
export declare class DataexchangeEventActionActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataexchangeEventActionAction | cdktf.IResolvable | undefined;
    set internalValue(value: DataexchangeEventActionAction | cdktf.IResolvable | undefined);
    private _exportRevisionToS3;
    get exportRevisionToS3(): DataexchangeEventActionActionExportRevisionToS3List;
    putExportRevisionToS3(value: DataexchangeEventActionActionExportRevisionToS3[] | cdktf.IResolvable): void;
    resetExportRevisionToS3(): void;
    get exportRevisionToS3Input(): cdktf.IResolvable | DataexchangeEventActionActionExportRevisionToS3[] | undefined;
}
export declare class DataexchangeEventActionActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataexchangeEventActionAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataexchangeEventActionActionOutputReference;
}
export interface DataexchangeEventActionEventRevisionPublished {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_event_action#data_set_id DataexchangeEventAction#data_set_id}
    */
    readonly dataSetId: string;
}
export declare function dataexchangeEventActionEventRevisionPublishedToTerraform(struct?: DataexchangeEventActionEventRevisionPublished | cdktf.IResolvable): any;
export declare function dataexchangeEventActionEventRevisionPublishedToHclTerraform(struct?: DataexchangeEventActionEventRevisionPublished | cdktf.IResolvable): any;
export declare class DataexchangeEventActionEventRevisionPublishedOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataexchangeEventActionEventRevisionPublished | cdktf.IResolvable | undefined;
    set internalValue(value: DataexchangeEventActionEventRevisionPublished | cdktf.IResolvable | undefined);
    private _dataSetId?;
    get dataSetId(): string;
    set dataSetId(value: string);
    get dataSetIdInput(): string | undefined;
}
export declare class DataexchangeEventActionEventRevisionPublishedList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataexchangeEventActionEventRevisionPublished[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataexchangeEventActionEventRevisionPublishedOutputReference;
}
export interface DataexchangeEventActionEvent {
    /**
    * revision_published block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_event_action#revision_published DataexchangeEventAction#revision_published}
    */
    readonly revisionPublished?: DataexchangeEventActionEventRevisionPublished[] | cdktf.IResolvable;
}
export declare function dataexchangeEventActionEventToTerraform(struct?: DataexchangeEventActionEvent | cdktf.IResolvable): any;
export declare function dataexchangeEventActionEventToHclTerraform(struct?: DataexchangeEventActionEvent | cdktf.IResolvable): any;
export declare class DataexchangeEventActionEventOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataexchangeEventActionEvent | cdktf.IResolvable | undefined;
    set internalValue(value: DataexchangeEventActionEvent | cdktf.IResolvable | undefined);
    private _revisionPublished;
    get revisionPublished(): DataexchangeEventActionEventRevisionPublishedList;
    putRevisionPublished(value: DataexchangeEventActionEventRevisionPublished[] | cdktf.IResolvable): void;
    resetRevisionPublished(): void;
    get revisionPublishedInput(): cdktf.IResolvable | DataexchangeEventActionEventRevisionPublished[] | undefined;
}
export declare class DataexchangeEventActionEventList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataexchangeEventActionEvent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataexchangeEventActionEventOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_event_action aws_dataexchange_event_action}
*/
export declare class DataexchangeEventAction extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dataexchange_event_action";
    /**
    * Generates CDKTF code for importing a DataexchangeEventAction resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataexchangeEventAction to import
    * @param importFromId The id of the existing DataexchangeEventAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_event_action#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataexchangeEventAction to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_event_action aws_dataexchange_event_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataexchangeEventActionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataexchangeEventActionConfig);
    get arn(): string;
    get createdAt(): string;
    get id(): string;
    get updatedAt(): string;
    private _action;
    get action(): DataexchangeEventActionActionList;
    putAction(value: DataexchangeEventActionAction[] | cdktf.IResolvable): void;
    resetAction(): void;
    get actionInput(): cdktf.IResolvable | DataexchangeEventActionAction[] | undefined;
    private _event;
    get event(): DataexchangeEventActionEventList;
    putEvent(value: DataexchangeEventActionEvent[] | cdktf.IResolvable): void;
    resetEvent(): void;
    get eventInput(): cdktf.IResolvable | DataexchangeEventActionEvent[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
