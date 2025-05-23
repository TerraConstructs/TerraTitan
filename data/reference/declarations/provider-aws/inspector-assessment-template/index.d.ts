/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface InspectorAssessmentTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_template#duration InspectorAssessmentTemplate#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_template#id InspectorAssessmentTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_template#name InspectorAssessmentTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}
    */
    readonly rulesPackageArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_template#tags InspectorAssessmentTemplate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_template#tags_all InspectorAssessmentTemplate#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_template#target_arn InspectorAssessmentTemplate#target_arn}
    */
    readonly targetArn: string;
    /**
    * event_subscription block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_template#event_subscription InspectorAssessmentTemplate#event_subscription}
    */
    readonly eventSubscription?: InspectorAssessmentTemplateEventSubscription[] | cdktf.IResolvable;
}
export interface InspectorAssessmentTemplateEventSubscription {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_template#event InspectorAssessmentTemplate#event}
    */
    readonly event: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_template#topic_arn InspectorAssessmentTemplate#topic_arn}
    */
    readonly topicArn: string;
}
export declare function inspectorAssessmentTemplateEventSubscriptionToTerraform(struct?: InspectorAssessmentTemplateEventSubscription | cdktf.IResolvable): any;
export declare function inspectorAssessmentTemplateEventSubscriptionToHclTerraform(struct?: InspectorAssessmentTemplateEventSubscription | cdktf.IResolvable): any;
export declare class InspectorAssessmentTemplateEventSubscriptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): InspectorAssessmentTemplateEventSubscription | cdktf.IResolvable | undefined;
    set internalValue(value: InspectorAssessmentTemplateEventSubscription | cdktf.IResolvable | undefined);
    private _event?;
    get event(): string;
    set event(value: string);
    get eventInput(): string | undefined;
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    get topicArnInput(): string | undefined;
}
export declare class InspectorAssessmentTemplateEventSubscriptionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: InspectorAssessmentTemplateEventSubscription[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): InspectorAssessmentTemplateEventSubscriptionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_template aws_inspector_assessment_template}
*/
export declare class InspectorAssessmentTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_inspector_assessment_template";
    /**
    * Generates CDKTF code for importing a InspectorAssessmentTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the InspectorAssessmentTemplate to import
    * @param importFromId The id of the existing InspectorAssessmentTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the InspectorAssessmentTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_template aws_inspector_assessment_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InspectorAssessmentTemplateConfig
    */
    constructor(scope: Construct, id: string, config: InspectorAssessmentTemplateConfig);
    get arn(): string;
    private _duration?;
    get duration(): number;
    set duration(value: number);
    get durationInput(): number | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _rulesPackageArns?;
    get rulesPackageArns(): string[];
    set rulesPackageArns(value: string[]);
    get rulesPackageArnsInput(): string[] | undefined;
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
    private _targetArn?;
    get targetArn(): string;
    set targetArn(value: string);
    get targetArnInput(): string | undefined;
    private _eventSubscription;
    get eventSubscription(): InspectorAssessmentTemplateEventSubscriptionList;
    putEventSubscription(value: InspectorAssessmentTemplateEventSubscription[] | cdktf.IResolvable): void;
    resetEventSubscription(): void;
    get eventSubscriptionInput(): cdktf.IResolvable | InspectorAssessmentTemplateEventSubscription[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
