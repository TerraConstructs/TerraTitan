import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The AWS::AmplifyUIBuilder::Component resource specifies a component within an Amplify app.
 *
 * A component is a user interface (UI) element that you can customize. Use `ComponentChild` to configure an instance of a `Component` . A `ComponentChild` instance inherits the configuration of the main `Component` .
 *
 * @cloudformationResource AWS::AmplifyUIBuilder::Component
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html
 */
export declare class CfnComponent extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnComponent from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnComponent;
    /**
     * The time that the component was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The unique ID of the component.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The time that the component was modified.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * The unique ID of the Amplify app associated with the component.
     */
    appId?: string;
    /**
     * The information to connect a component's properties to data at runtime.
     */
    bindingProperties?: cdk.IResolvable | Record<string, CfnComponent.ComponentBindingPropertiesValueProperty | cdk.IResolvable>;
    /**
     * A list of the component's `ComponentChild` instances.
     */
    children?: Array<CfnComponent.ComponentChildProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The data binding configuration for the component's properties.
     */
    collectionProperties?: cdk.IResolvable | Record<string, CfnComponent.ComponentDataConfigurationProperty | cdk.IResolvable>;
    /**
     * The type of the component.
     */
    componentType?: string;
    /**
     * The name of the backend environment that is a part of the Amplify app.
     */
    environmentName?: string;
    /**
     * Describes the events that can be raised on the component.
     */
    events?: cdk.IResolvable | Record<string, CfnComponent.ComponentEventProperty | cdk.IResolvable>;
    /**
     * The name of the component.
     */
    name?: string;
    /**
     * Describes the component's properties that can be overriden in a customized instance of the component.
     */
    overrides?: any | cdk.IResolvable;
    /**
     * Describes the component's properties.
     */
    properties?: cdk.IResolvable | Record<string, CfnComponent.ComponentPropertyProperty | cdk.IResolvable>;
    /**
     * The schema version of the component when it was imported.
     */
    schemaVersion?: string;
    /**
     * The unique ID of the component in its original source system, such as Figma.
     */
    sourceId?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * One or more key-value pairs to use when tagging the component.
     */
    tagsRaw?: Record<string, string>;
    /**
     * A list of the component's variants.
     */
    variants?: Array<CfnComponent.ComponentVariantProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnComponentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnComponent {
    /**
     * The `ComponentBindingPropertiesValue` property specifies the data binding configuration for a component at runtime.
     *
     * You can use `ComponentBindingPropertiesValue` to add exposed properties to a component to allow different values to be entered when a component is reused in different places in an app.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalue.html
     */
    interface ComponentBindingPropertiesValueProperty {
        /**
         * Describes the properties to customize with data at runtime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalue.html#cfn-amplifyuibuilder-component-componentbindingpropertiesvalue-bindingproperties
         */
        readonly bindingProperties?: CfnComponent.ComponentBindingPropertiesValuePropertiesProperty | cdk.IResolvable;
        /**
         * The default value of the property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalue.html#cfn-amplifyuibuilder-component-componentbindingpropertiesvalue-defaultvalue
         */
        readonly defaultValue?: string;
        /**
         * The property type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalue.html#cfn-amplifyuibuilder-component-componentbindingpropertiesvalue-type
         */
        readonly type?: string;
    }
    /**
     * The `ComponentBindingPropertiesValueProperties` property specifies the data binding configuration for a specific property using data stored in AWS .
     *
     * For AWS connected properties, you can bind a property to data stored in an Amazon S3 bucket, an Amplify DataStore model or an authenticated user attribute.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalueproperties.html
     */
    interface ComponentBindingPropertiesValuePropertiesProperty {
        /**
         * An Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalueproperties.html#cfn-amplifyuibuilder-component-componentbindingpropertiesvalueproperties-bucket
         */
        readonly bucket?: string;
        /**
         * The default value to assign to the property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalueproperties.html#cfn-amplifyuibuilder-component-componentbindingpropertiesvalueproperties-defaultvalue
         */
        readonly defaultValue?: string;
        /**
         * The field to bind the data to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalueproperties.html#cfn-amplifyuibuilder-component-componentbindingpropertiesvalueproperties-field
         */
        readonly field?: string;
        /**
         * The storage key for an Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalueproperties.html#cfn-amplifyuibuilder-component-componentbindingpropertiesvalueproperties-key
         */
        readonly key?: string;
        /**
         * An Amplify DataStore model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalueproperties.html#cfn-amplifyuibuilder-component-componentbindingpropertiesvalueproperties-model
         */
        readonly model?: string;
        /**
         * A list of predicates for binding a component's properties to data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalueproperties.html#cfn-amplifyuibuilder-component-componentbindingpropertiesvalueproperties-predicates
         */
        readonly predicates?: Array<cdk.IResolvable | CfnComponent.PredicateProperty> | cdk.IResolvable;
        /**
         * The name of a component slot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalueproperties.html#cfn-amplifyuibuilder-component-componentbindingpropertiesvalueproperties-slotname
         */
        readonly slotName?: string;
        /**
         * An authenticated user attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalueproperties.html#cfn-amplifyuibuilder-component-componentbindingpropertiesvalueproperties-userattribute
         */
        readonly userAttribute?: string;
    }
    /**
     * The `Predicate` property specifies information for generating Amplify DataStore queries.
     *
     * Use `Predicate` to retrieve a subset of the data in a collection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-predicate.html
     */
    interface PredicateProperty {
        /**
         * A list of predicates to combine logically.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-predicate.html#cfn-amplifyuibuilder-component-predicate-and
         */
        readonly and?: Array<cdk.IResolvable | CfnComponent.PredicateProperty> | cdk.IResolvable;
        /**
         * The field to query.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-predicate.html#cfn-amplifyuibuilder-component-predicate-field
         */
        readonly field?: string;
        /**
         * The value to use when performing the evaluation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-predicate.html#cfn-amplifyuibuilder-component-predicate-operand
         */
        readonly operand?: string;
        /**
         * The type of value to use when performing the evaluation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-predicate.html#cfn-amplifyuibuilder-component-predicate-operandtype
         */
        readonly operandType?: string;
        /**
         * The operator to use to perform the evaluation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-predicate.html#cfn-amplifyuibuilder-component-predicate-operator
         */
        readonly operator?: string;
        /**
         * A list of predicates to combine logically.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-predicate.html#cfn-amplifyuibuilder-component-predicate-or
         */
        readonly or?: Array<cdk.IResolvable | CfnComponent.PredicateProperty> | cdk.IResolvable;
    }
    /**
     * The `ComponentProperty` property specifies the configuration for all of a component's properties.
     *
     * Use `ComponentProperty` to specify the values to render or bind by default.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html
     */
    interface ComponentPropertyProperty {
        /**
         * The information to bind the component property to data at runtime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html#cfn-amplifyuibuilder-component-componentproperty-bindingproperties
         */
        readonly bindingProperties?: CfnComponent.ComponentPropertyBindingPropertiesProperty | cdk.IResolvable;
        /**
         * The information to bind the component property to form data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html#cfn-amplifyuibuilder-component-componentproperty-bindings
         */
        readonly bindings?: cdk.IResolvable | Record<string, CfnComponent.FormBindingElementProperty | cdk.IResolvable>;
        /**
         * The information to bind the component property to data at runtime.
         *
         * Use this for collection components.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html#cfn-amplifyuibuilder-component-componentproperty-collectionbindingproperties
         */
        readonly collectionBindingProperties?: CfnComponent.ComponentPropertyBindingPropertiesProperty | cdk.IResolvable;
        /**
         * The name of the component that is affected by an event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html#cfn-amplifyuibuilder-component-componentproperty-componentname
         */
        readonly componentName?: string;
        /**
         * A list of component properties to concatenate to create the value to assign to this component property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html#cfn-amplifyuibuilder-component-componentproperty-concat
         */
        readonly concat?: Array<CfnComponent.ComponentPropertyProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The conditional expression to use to assign a value to the component property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html#cfn-amplifyuibuilder-component-componentproperty-condition
         */
        readonly condition?: CfnComponent.ComponentConditionPropertyProperty | cdk.IResolvable;
        /**
         * Specifies whether the user configured the property in Amplify Studio after importing it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html#cfn-amplifyuibuilder-component-componentproperty-configured
         */
        readonly configured?: boolean | cdk.IResolvable;
        /**
         * The default value to assign to the component property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html#cfn-amplifyuibuilder-component-componentproperty-defaultvalue
         */
        readonly defaultValue?: string;
        /**
         * An event that occurs in your app.
         *
         * Use this for workflow data binding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html#cfn-amplifyuibuilder-component-componentproperty-event
         */
        readonly event?: string;
        /**
         * The default value assigned to the property when the component is imported into an app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html#cfn-amplifyuibuilder-component-componentproperty-importedvalue
         */
        readonly importedValue?: string;
        /**
         * The data model to use to assign a value to the component property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html#cfn-amplifyuibuilder-component-componentproperty-model
         */
        readonly model?: string;
        /**
         * The name of the component's property that is affected by an event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html#cfn-amplifyuibuilder-component-componentproperty-property
         */
        readonly property?: string;
        /**
         * The component type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html#cfn-amplifyuibuilder-component-componentproperty-type
         */
        readonly type?: string;
        /**
         * An authenticated user attribute to use to assign a value to the component property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html#cfn-amplifyuibuilder-component-componentproperty-userattribute
         */
        readonly userAttribute?: string;
        /**
         * The value to assign to the component property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html#cfn-amplifyuibuilder-component-componentproperty-value
         */
        readonly value?: string;
    }
    /**
     * The `ComponentConditionProperty` property specifies a conditional expression for setting a component property.
     *
     * Use `ComponentConditionProperty` to set a property to different values conditionally, based on the value of another property.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentconditionproperty.html
     */
    interface ComponentConditionPropertyProperty {
        /**
         * The value to assign to the property if the condition is not met.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentconditionproperty.html#cfn-amplifyuibuilder-component-componentconditionproperty-else
         */
        readonly else?: CfnComponent.ComponentPropertyProperty | cdk.IResolvable;
        /**
         * The name of a field.
         *
         * Specify this when the property is a data model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentconditionproperty.html#cfn-amplifyuibuilder-component-componentconditionproperty-field
         */
        readonly field?: string;
        /**
         * The value of the property to evaluate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentconditionproperty.html#cfn-amplifyuibuilder-component-componentconditionproperty-operand
         */
        readonly operand?: string;
        /**
         * The type of the property to evaluate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentconditionproperty.html#cfn-amplifyuibuilder-component-componentconditionproperty-operandtype
         */
        readonly operandType?: string;
        /**
         * The operator to use to perform the evaluation, such as `eq` to represent equals.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentconditionproperty.html#cfn-amplifyuibuilder-component-componentconditionproperty-operator
         */
        readonly operator?: string;
        /**
         * The name of the conditional property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentconditionproperty.html#cfn-amplifyuibuilder-component-componentconditionproperty-property
         */
        readonly property?: string;
        /**
         * The value to assign to the property if the condition is met.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentconditionproperty.html#cfn-amplifyuibuilder-component-componentconditionproperty-then
         */
        readonly then?: CfnComponent.ComponentPropertyProperty | cdk.IResolvable;
    }
    /**
     * The `ComponentPropertyBindingProperties` property specifies a component property to associate with a binding property.
     *
     * This enables exposed properties on the top level component to propagate data to the component's property values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentpropertybindingproperties.html
     */
    interface ComponentPropertyBindingPropertiesProperty {
        /**
         * The data field to bind the property to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentpropertybindingproperties.html#cfn-amplifyuibuilder-component-componentpropertybindingproperties-field
         */
        readonly field?: string;
        /**
         * The component property to bind to the data field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentpropertybindingproperties.html#cfn-amplifyuibuilder-component-componentpropertybindingproperties-property
         */
        readonly property: string;
    }
    /**
     * Describes how to bind a component property to form data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-formbindingelement.html
     */
    interface FormBindingElementProperty {
        /**
         * The name of the component to retrieve a value from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-formbindingelement.html#cfn-amplifyuibuilder-component-formbindingelement-element
         */
        readonly element: string;
        /**
         * The property to retrieve a value from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-formbindingelement.html#cfn-amplifyuibuilder-component-formbindingelement-property
         */
        readonly property: string;
    }
    /**
     * The `ComponentDataConfiguration` property specifies the configuration for binding a component's properties to data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentdataconfiguration.html
     */
    interface ComponentDataConfigurationProperty {
        /**
         * A list of IDs to use to bind data to a component.
         *
         * Use this property to bind specifically chosen data, rather than data retrieved from a query.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentdataconfiguration.html#cfn-amplifyuibuilder-component-componentdataconfiguration-identifiers
         */
        readonly identifiers?: Array<string>;
        /**
         * The name of the data model to use to bind data to a component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentdataconfiguration.html#cfn-amplifyuibuilder-component-componentdataconfiguration-model
         */
        readonly model: string;
        /**
         * Represents the conditional logic to use when binding data to a component.
         *
         * Use this property to retrieve only a subset of the data in a collection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentdataconfiguration.html#cfn-amplifyuibuilder-component-componentdataconfiguration-predicate
         */
        readonly predicate?: cdk.IResolvable | CfnComponent.PredicateProperty;
        /**
         * Describes how to sort the component's properties.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentdataconfiguration.html#cfn-amplifyuibuilder-component-componentdataconfiguration-sort
         */
        readonly sort?: Array<cdk.IResolvable | CfnComponent.SortPropertyProperty> | cdk.IResolvable;
    }
    /**
     * The `SortProperty` property specifies how to sort the data that you bind to a component.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-sortproperty.html
     */
    interface SortPropertyProperty {
        /**
         * The direction of the sort, either ascending or descending.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-sortproperty.html#cfn-amplifyuibuilder-component-sortproperty-direction
         */
        readonly direction: string;
        /**
         * The field to perform the sort on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-sortproperty.html#cfn-amplifyuibuilder-component-sortproperty-field
         */
        readonly field: string;
    }
    /**
     * The `ComponentVariant` property specifies the style configuration of a unique variation of a main component.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentvariant.html
     */
    interface ComponentVariantProperty {
        /**
         * The properties of the component variant that can be overriden when customizing an instance of the component.
         *
         * You can't specify `tags` as a valid property for `overrides` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentvariant.html#cfn-amplifyuibuilder-component-componentvariant-overrides
         */
        readonly overrides?: any | cdk.IResolvable;
        /**
         * The combination of variants that comprise this variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentvariant.html#cfn-amplifyuibuilder-component-componentvariant-variantvalues
         */
        readonly variantValues?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * The `ComponentEvent` property specifies the configuration of an event.
     *
     * You can bind an event and a corresponding action to a `Component` or a `ComponentChild` . A button click is an example of an event.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentevent.html
     */
    interface ComponentEventProperty {
        /**
         * The action to perform when a specific event is raised.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentevent.html#cfn-amplifyuibuilder-component-componentevent-action
         */
        readonly action?: string;
        /**
         * Binds an event to an action on a component.
         *
         * When you specify a `bindingEvent` , the event is called when the action is performed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentevent.html#cfn-amplifyuibuilder-component-componentevent-bindingevent
         */
        readonly bindingEvent?: string;
        /**
         * Describes information about the action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentevent.html#cfn-amplifyuibuilder-component-componentevent-parameters
         */
        readonly parameters?: CfnComponent.ActionParametersProperty | cdk.IResolvable;
    }
    /**
     * Represents the event action configuration for an element of a `Component` or `ComponentChild` .
     *
     * Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components. `ActionParameters` defines the action that is performed when an event occurs on the component.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-actionparameters.html
     */
    interface ActionParametersProperty {
        /**
         * The HTML anchor link to the location to open.
         *
         * Specify this value for a navigation action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-actionparameters.html#cfn-amplifyuibuilder-component-actionparameters-anchor
         */
        readonly anchor?: CfnComponent.ComponentPropertyProperty | cdk.IResolvable;
        /**
         * A dictionary of key-value pairs mapping Amplify Studio properties to fields in a data model.
         *
         * Use when the action performs an operation on an Amplify DataStore model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-actionparameters.html#cfn-amplifyuibuilder-component-actionparameters-fields
         */
        readonly fields?: cdk.IResolvable | Record<string, CfnComponent.ComponentPropertyProperty | cdk.IResolvable>;
        /**
         * Specifies whether the user should be signed out globally.
         *
         * Specify this value for an auth sign out action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-actionparameters.html#cfn-amplifyuibuilder-component-actionparameters-global
         */
        readonly global?: CfnComponent.ComponentPropertyProperty | cdk.IResolvable;
        /**
         * The unique ID of the component that the `ActionParameters` apply to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-actionparameters.html#cfn-amplifyuibuilder-component-actionparameters-id
         */
        readonly id?: CfnComponent.ComponentPropertyProperty | cdk.IResolvable;
        /**
         * The name of the data model.
         *
         * Use when the action performs an operation on an Amplify DataStore model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-actionparameters.html#cfn-amplifyuibuilder-component-actionparameters-model
         */
        readonly model?: string;
        /**
         * A key-value pair that specifies the state property name and its initial value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-actionparameters.html#cfn-amplifyuibuilder-component-actionparameters-state
         */
        readonly state?: cdk.IResolvable | CfnComponent.MutationActionSetStateParameterProperty;
        /**
         * The element within the same component to modify when the action occurs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-actionparameters.html#cfn-amplifyuibuilder-component-actionparameters-target
         */
        readonly target?: CfnComponent.ComponentPropertyProperty | cdk.IResolvable;
        /**
         * The type of navigation action.
         *
         * Valid values are `url` and `anchor` . This value is required for a navigation action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-actionparameters.html#cfn-amplifyuibuilder-component-actionparameters-type
         */
        readonly type?: CfnComponent.ComponentPropertyProperty | cdk.IResolvable;
        /**
         * The URL to the location to open.
         *
         * Specify this value for a navigation action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-actionparameters.html#cfn-amplifyuibuilder-component-actionparameters-url
         */
        readonly url?: CfnComponent.ComponentPropertyProperty | cdk.IResolvable;
    }
    /**
     * Represents the state configuration when an action modifies a property of another element within the same component.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-mutationactionsetstateparameter.html
     */
    interface MutationActionSetStateParameterProperty {
        /**
         * The name of the component that is being modified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-mutationactionsetstateparameter.html#cfn-amplifyuibuilder-component-mutationactionsetstateparameter-componentname
         */
        readonly componentName: string;
        /**
         * The name of the component property to apply the state configuration to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-mutationactionsetstateparameter.html#cfn-amplifyuibuilder-component-mutationactionsetstateparameter-property
         */
        readonly property: string;
        /**
         * The state configuration to assign to the property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-mutationactionsetstateparameter.html#cfn-amplifyuibuilder-component-mutationactionsetstateparameter-set
         */
        readonly set: CfnComponent.ComponentPropertyProperty | cdk.IResolvable;
    }
    /**
     * The `ComponentChild` property specifies a nested UI configuration within a parent `Component` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentchild.html
     */
    interface ComponentChildProperty {
        /**
         * The list of `ComponentChild` instances for this component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentchild.html#cfn-amplifyuibuilder-component-componentchild-children
         */
        readonly children?: Array<CfnComponent.ComponentChildProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The type of the child component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentchild.html#cfn-amplifyuibuilder-component-componentchild-componenttype
         */
        readonly componentType: string;
        /**
         * Describes the events that can be raised on the child component.
         *
         * Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentchild.html#cfn-amplifyuibuilder-component-componentchild-events
         */
        readonly events?: cdk.IResolvable | Record<string, CfnComponent.ComponentEventProperty | cdk.IResolvable>;
        /**
         * The name of the child component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentchild.html#cfn-amplifyuibuilder-component-componentchild-name
         */
        readonly name: string;
        /**
         * Describes the properties of the child component.
         *
         * You can't specify `tags` as a valid property for `properties` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentchild.html#cfn-amplifyuibuilder-component-componentchild-properties
         */
        readonly properties: cdk.IResolvable | Record<string, CfnComponent.ComponentPropertyProperty | cdk.IResolvable>;
        /**
         * The unique ID of the child component in its original source system, such as Figma.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentchild.html#cfn-amplifyuibuilder-component-componentchild-sourceid
         */
        readonly sourceId?: string;
    }
}
/**
 * Properties for defining a `CfnComponent`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html
 */
export interface CfnComponentProps {
    /**
     * The unique ID of the Amplify app associated with the component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html#cfn-amplifyuibuilder-component-appid
     */
    readonly appId?: string;
    /**
     * The information to connect a component's properties to data at runtime.
     *
     * You can't specify `tags` as a valid property for `bindingProperties` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html#cfn-amplifyuibuilder-component-bindingproperties
     */
    readonly bindingProperties?: cdk.IResolvable | Record<string, CfnComponent.ComponentBindingPropertiesValueProperty | cdk.IResolvable>;
    /**
     * A list of the component's `ComponentChild` instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html#cfn-amplifyuibuilder-component-children
     */
    readonly children?: Array<CfnComponent.ComponentChildProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The data binding configuration for the component's properties.
     *
     * Use this for a collection component. You can't specify `tags` as a valid property for `collectionProperties` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html#cfn-amplifyuibuilder-component-collectionproperties
     */
    readonly collectionProperties?: cdk.IResolvable | Record<string, CfnComponent.ComponentDataConfigurationProperty | cdk.IResolvable>;
    /**
     * The type of the component.
     *
     * This can be an Amplify custom UI component or another custom component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html#cfn-amplifyuibuilder-component-componenttype
     */
    readonly componentType?: string;
    /**
     * The name of the backend environment that is a part of the Amplify app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html#cfn-amplifyuibuilder-component-environmentname
     */
    readonly environmentName?: string;
    /**
     * Describes the events that can be raised on the component.
     *
     * Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html#cfn-amplifyuibuilder-component-events
     */
    readonly events?: cdk.IResolvable | Record<string, CfnComponent.ComponentEventProperty | cdk.IResolvable>;
    /**
     * The name of the component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html#cfn-amplifyuibuilder-component-name
     */
    readonly name?: string;
    /**
     * Describes the component's properties that can be overriden in a customized instance of the component.
     *
     * You can't specify `tags` as a valid property for `overrides` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html#cfn-amplifyuibuilder-component-overrides
     */
    readonly overrides?: any | cdk.IResolvable;
    /**
     * Describes the component's properties.
     *
     * You can't specify `tags` as a valid property for `properties` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html#cfn-amplifyuibuilder-component-properties
     */
    readonly properties?: cdk.IResolvable | Record<string, CfnComponent.ComponentPropertyProperty | cdk.IResolvable>;
    /**
     * The schema version of the component when it was imported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html#cfn-amplifyuibuilder-component-schemaversion
     */
    readonly schemaVersion?: string;
    /**
     * The unique ID of the component in its original source system, such as Figma.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html#cfn-amplifyuibuilder-component-sourceid
     */
    readonly sourceId?: string;
    /**
     * One or more key-value pairs to use when tagging the component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html#cfn-amplifyuibuilder-component-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * A list of the component's variants.
     *
     * A variant is a unique style configuration of a main component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html#cfn-amplifyuibuilder-component-variants
     */
    readonly variants?: Array<CfnComponent.ComponentVariantProperty | cdk.IResolvable> | cdk.IResolvable;
}
/**
 * The AWS::AmplifyUIBuilder::Form resource specifies all of the information that is required to create a form.
 *
 * @cloudformationResource AWS::AmplifyUIBuilder::Form
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html
 */
export declare class CfnForm extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnForm from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnForm;
    /**
     * The ID for the form.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The unique ID of the Amplify app associated with the form.
     */
    appId?: string;
    /**
     * The `FormCTA` object that stores the call to action configuration for the form.
     */
    cta?: CfnForm.FormCTAProperty | cdk.IResolvable;
    /**
     * The type of data source to use to create the form.
     */
    dataType?: CfnForm.FormDataTypeConfigProperty | cdk.IResolvable;
    /**
     * The name of the backend environment that is a part of the Amplify app.
     */
    environmentName?: string;
    /**
     * The configuration information for the form's fields.
     */
    fields?: cdk.IResolvable | Record<string, CfnForm.FieldConfigProperty | cdk.IResolvable>;
    /**
     * Specifies whether to perform a create or update action on the form.
     */
    formActionType?: string;
    /**
     * Specifies an icon or decoration to display on the form.
     */
    labelDecorator?: string;
    /**
     * The name of the form.
     */
    name?: string;
    /**
     * The schema version of the form.
     */
    schemaVersion?: string;
    /**
     * The configuration information for the visual helper elements for the form.
     */
    sectionalElements?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnForm.SectionalElementProperty>;
    /**
     * The configuration for the form's style.
     */
    style?: CfnForm.FormStyleProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * One or more key-value pairs to use when tagging the form data.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnFormProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnForm {
    /**
     * The `FormCTA` property specifies the call to action button configuration for the form.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formcta.html
     */
    interface FormCTAProperty {
        /**
         * Displays a cancel button.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formcta.html#cfn-amplifyuibuilder-form-formcta-cancel
         */
        readonly cancel?: CfnForm.FormButtonProperty | cdk.IResolvable;
        /**
         * Displays a clear button.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formcta.html#cfn-amplifyuibuilder-form-formcta-clear
         */
        readonly clear?: CfnForm.FormButtonProperty | cdk.IResolvable;
        /**
         * The position of the button.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formcta.html#cfn-amplifyuibuilder-form-formcta-position
         */
        readonly position?: string;
        /**
         * Displays a submit button.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formcta.html#cfn-amplifyuibuilder-form-formcta-submit
         */
        readonly submit?: CfnForm.FormButtonProperty | cdk.IResolvable;
    }
    /**
     * The `FormButton` property specifies the configuration for a button UI element that is a part of a form.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formbutton.html
     */
    interface FormButtonProperty {
        /**
         * Describes the button's properties.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formbutton.html#cfn-amplifyuibuilder-form-formbutton-children
         */
        readonly children?: string;
        /**
         * Specifies whether the button is visible on the form.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formbutton.html#cfn-amplifyuibuilder-form-formbutton-excluded
         */
        readonly excluded?: boolean | cdk.IResolvable;
        /**
         * The position of the button.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formbutton.html#cfn-amplifyuibuilder-form-formbutton-position
         */
        readonly position?: CfnForm.FieldPositionProperty | cdk.IResolvable;
    }
    /**
     * The `FieldPosition` property specifies the field position.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldposition.html
     */
    interface FieldPositionProperty {
        /**
         * The field position is below the field specified by the string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldposition.html#cfn-amplifyuibuilder-form-fieldposition-below
         */
        readonly below?: string;
        /**
         * The field position is fixed and doesn't change in relation to other fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldposition.html#cfn-amplifyuibuilder-form-fieldposition-fixed
         */
        readonly fixed?: string;
        /**
         * The field position is to the right of the field specified by the string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldposition.html#cfn-amplifyuibuilder-form-fieldposition-rightof
         */
        readonly rightOf?: string;
    }
    /**
     * The `FieldConfig` property specifies the configuration information for a field in a table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldconfig.html
     */
    interface FieldConfigProperty {
        /**
         * Specifies whether to hide a field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldconfig.html#cfn-amplifyuibuilder-form-fieldconfig-excluded
         */
        readonly excluded?: boolean | cdk.IResolvable;
        /**
         * Describes the configuration for the default input value to display for a field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldconfig.html#cfn-amplifyuibuilder-form-fieldconfig-inputtype
         */
        readonly inputType?: CfnForm.FieldInputConfigProperty | cdk.IResolvable;
        /**
         * The label for the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldconfig.html#cfn-amplifyuibuilder-form-fieldconfig-label
         */
        readonly label?: string;
        /**
         * Specifies the field position.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldconfig.html#cfn-amplifyuibuilder-form-fieldconfig-position
         */
        readonly position?: CfnForm.FieldPositionProperty | cdk.IResolvable;
        /**
         * The validations to perform on the value in the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldconfig.html#cfn-amplifyuibuilder-form-fieldconfig-validations
         */
        readonly validations?: Array<CfnForm.FieldValidationConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The `FieldValidationConfiguration` property specifies the validation configuration for a field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldvalidationconfiguration.html
     */
    interface FieldValidationConfigurationProperty {
        /**
         * The validation to perform on a number value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldvalidationconfiguration.html#cfn-amplifyuibuilder-form-fieldvalidationconfiguration-numvalues
         */
        readonly numValues?: Array<number> | cdk.IResolvable;
        /**
         * The validation to perform on a string value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldvalidationconfiguration.html#cfn-amplifyuibuilder-form-fieldvalidationconfiguration-strvalues
         */
        readonly strValues?: Array<string>;
        /**
         * The validation to perform on an object type.
         *
         * ``
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldvalidationconfiguration.html#cfn-amplifyuibuilder-form-fieldvalidationconfiguration-type
         */
        readonly type: string;
        /**
         * The validation message to display.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldvalidationconfiguration.html#cfn-amplifyuibuilder-form-fieldvalidationconfiguration-validationmessage
         */
        readonly validationMessage?: string;
    }
    /**
     * The `FieldInputConfig` property specifies the configuration for the default input values to display for a field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html
     */
    interface FieldInputConfigProperty {
        /**
         * Specifies whether a field has a default value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-defaultchecked
         */
        readonly defaultChecked?: boolean | cdk.IResolvable;
        /**
         * The default country code for a phone number.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-defaultcountrycode
         */
        readonly defaultCountryCode?: string;
        /**
         * The default value for the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-defaultvalue
         */
        readonly defaultValue?: string;
        /**
         * The text to display to describe the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-descriptivetext
         */
        readonly descriptiveText?: string;
        /**
         * The configuration for the file uploader field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-fileuploaderconfig
         */
        readonly fileUploaderConfig?: CfnForm.FileUploaderFieldConfigProperty | cdk.IResolvable;
        /**
         * Specifies whether to render the field as an array.
         *
         * This property is ignored if the `dataSourceType` for the form is a Data Store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-isarray
         */
        readonly isArray?: boolean | cdk.IResolvable;
        /**
         * The maximum value to display for the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-maxvalue
         */
        readonly maxValue?: number;
        /**
         * The minimum value to display for the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-minvalue
         */
        readonly minValue?: number;
        /**
         * The name of the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-name
         */
        readonly name?: string;
        /**
         * The text to display as a placeholder for the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-placeholder
         */
        readonly placeholder?: string;
        /**
         * Specifies a read only field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-readonly
         */
        readonly readOnly?: boolean | cdk.IResolvable;
        /**
         * Specifies a field that requires input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-required
         */
        readonly required?: boolean | cdk.IResolvable;
        /**
         * The stepping increment for a numeric value in a field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-step
         */
        readonly step?: number;
        /**
         * The input type for the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-type
         */
        readonly type: string;
        /**
         * The value for the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-value
         */
        readonly value?: string;
        /**
         * The information to use to customize the input fields with data at runtime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html#cfn-amplifyuibuilder-form-fieldinputconfig-valuemappings
         */
        readonly valueMappings?: cdk.IResolvable | CfnForm.ValueMappingsProperty;
    }
    /**
     * Describes the configuration for the file uploader field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fileuploaderfieldconfig.html
     */
    interface FileUploaderFieldConfigProperty {
        /**
         * The file types that are allowed to be uploaded by the file uploader.
         *
         * Provide this information in an array of strings specifying the valid file extensions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fileuploaderfieldconfig.html#cfn-amplifyuibuilder-form-fileuploaderfieldconfig-acceptedfiletypes
         */
        readonly acceptedFileTypes: Array<string>;
        /**
         * The access level to assign to the uploaded files in the Amazon S3 bucket where they are stored.
         *
         * The valid values for this property are `private` , `protected` , or `public` . For detailed information about the permissions associated with each access level, see [File access levels](https://docs.aws.amazon.com/https://docs.amplify.aws/lib/storage/configureaccess/q/platform/js/) in the *Amplify documentation* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fileuploaderfieldconfig.html#cfn-amplifyuibuilder-form-fileuploaderfieldconfig-accesslevel
         */
        readonly accessLevel: string;
        /**
         * Allows the file upload operation to be paused and resumed. The default value is `false` .
         *
         * When `isResumable` is set to `true` , the file uploader uses a multipart upload to break the files into chunks before upload. The progress of the upload isn't continuous, because the file uploader uploads a chunk at a time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fileuploaderfieldconfig.html#cfn-amplifyuibuilder-form-fileuploaderfieldconfig-isresumable
         */
        readonly isResumable?: boolean | cdk.IResolvable;
        /**
         * Specifies the maximum number of files that can be selected to upload.
         *
         * The default value is an unlimited number of files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fileuploaderfieldconfig.html#cfn-amplifyuibuilder-form-fileuploaderfieldconfig-maxfilecount
         */
        readonly maxFileCount?: number;
        /**
         * The maximum file size in bytes that the file uploader will accept.
         *
         * The default value is an unlimited file size.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fileuploaderfieldconfig.html#cfn-amplifyuibuilder-form-fileuploaderfieldconfig-maxsize
         */
        readonly maxSize?: number;
        /**
         * Specifies whether to display or hide the image preview after selecting a file for upload.
         *
         * The default value is `true` to display the image preview.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fileuploaderfieldconfig.html#cfn-amplifyuibuilder-form-fileuploaderfieldconfig-showthumbnails
         */
        readonly showThumbnails?: boolean | cdk.IResolvable;
    }
    /**
     * The `ValueMappings` property specifies the data binding configuration for a value map.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-valuemappings.html
     */
    interface ValueMappingsProperty {
        /**
         * The information to bind fields to data at runtime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-valuemappings.html#cfn-amplifyuibuilder-form-valuemappings-bindingproperties
         */
        readonly bindingProperties?: cdk.IResolvable | Record<string, CfnForm.FormInputBindingPropertiesValueProperty | cdk.IResolvable>;
        /**
         * The value and display value pairs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-valuemappings.html#cfn-amplifyuibuilder-form-valuemappings-values
         */
        readonly values: Array<cdk.IResolvable | CfnForm.ValueMappingProperty> | cdk.IResolvable;
    }
    /**
     * The `ValueMapping` property specifies the association between a complex object and a display value.
     *
     * Use `ValueMapping` to store how to represent complex objects when they are displayed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-valuemapping.html
     */
    interface ValueMappingProperty {
        /**
         * The value to display for the complex object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-valuemapping.html#cfn-amplifyuibuilder-form-valuemapping-displayvalue
         */
        readonly displayValue?: CfnForm.FormInputValuePropertyProperty | cdk.IResolvable;
        /**
         * The complex object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-valuemapping.html#cfn-amplifyuibuilder-form-valuemapping-value
         */
        readonly value: CfnForm.FormInputValuePropertyProperty | cdk.IResolvable;
    }
    /**
     * The `FormInputValueProperty` property specifies the configuration for an input field on a form.
     *
     * Use `FormInputValueProperty` to specify the values to render or bind by default.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-forminputvalueproperty.html
     */
    interface FormInputValuePropertyProperty {
        /**
         * The information to bind fields to data at runtime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-forminputvalueproperty.html#cfn-amplifyuibuilder-form-forminputvalueproperty-bindingproperties
         */
        readonly bindingProperties?: CfnForm.FormInputValuePropertyBindingPropertiesProperty | cdk.IResolvable;
        /**
         * A list of form properties to concatenate to create the value to assign to this field property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-forminputvalueproperty.html#cfn-amplifyuibuilder-form-forminputvalueproperty-concat
         */
        readonly concat?: Array<CfnForm.FormInputValuePropertyProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The value to assign to the input field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-forminputvalueproperty.html#cfn-amplifyuibuilder-form-forminputvalueproperty-value
         */
        readonly value?: string;
    }
    /**
     * Associates a form property to a binding property.
     *
     * This enables exposed properties on the top level form to propagate data to the form's property values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-forminputvaluepropertybindingproperties.html
     */
    interface FormInputValuePropertyBindingPropertiesProperty {
        /**
         * The data field to bind the property to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-forminputvaluepropertybindingproperties.html#cfn-amplifyuibuilder-form-forminputvaluepropertybindingproperties-field
         */
        readonly field?: string;
        /**
         * The form property to bind to the data field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-forminputvaluepropertybindingproperties.html#cfn-amplifyuibuilder-form-forminputvaluepropertybindingproperties-property
         */
        readonly property: string;
    }
    /**
     * Represents the data binding configuration for a form's input fields at runtime.You can use `FormInputBindingPropertiesValue` to add exposed properties to a form to allow different values to be entered when a form is reused in different places in an app.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-forminputbindingpropertiesvalue.html
     */
    interface FormInputBindingPropertiesValueProperty {
        /**
         * Describes the properties to customize with data at runtime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-forminputbindingpropertiesvalue.html#cfn-amplifyuibuilder-form-forminputbindingpropertiesvalue-bindingproperties
         */
        readonly bindingProperties?: CfnForm.FormInputBindingPropertiesValuePropertiesProperty | cdk.IResolvable;
        /**
         * The property type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-forminputbindingpropertiesvalue.html#cfn-amplifyuibuilder-form-forminputbindingpropertiesvalue-type
         */
        readonly type?: string;
    }
    /**
     * Represents the data binding configuration for a specific property using data stored in AWS .
     *
     * For AWS connected properties, you can bind a property to data stored in an Amplify DataStore model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-forminputbindingpropertiesvalueproperties.html
     */
    interface FormInputBindingPropertiesValuePropertiesProperty {
        /**
         * An Amplify DataStore model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-forminputbindingpropertiesvalueproperties.html#cfn-amplifyuibuilder-form-forminputbindingpropertiesvalueproperties-model
         */
        readonly model?: string;
    }
    /**
     * The `SectionalElement` property specifies the configuration information for a visual helper element for a form.
     *
     * A sectional element can be a header, a text block, or a divider. These elements are static and not associated with any data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-sectionalelement.html
     */
    interface SectionalElementProperty {
        /**
         * Excludes a sectional element that was generated by default for a specified data model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-sectionalelement.html#cfn-amplifyuibuilder-form-sectionalelement-excluded
         */
        readonly excluded?: boolean | cdk.IResolvable;
        /**
         * Specifies the size of the font for a `Heading` sectional element.
         *
         * Valid values are `1 | 2 | 3 | 4 | 5 | 6` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-sectionalelement.html#cfn-amplifyuibuilder-form-sectionalelement-level
         */
        readonly level?: number;
        /**
         * Specifies the orientation for a `Divider` sectional element.
         *
         * Valid values are `horizontal` or `vertical` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-sectionalelement.html#cfn-amplifyuibuilder-form-sectionalelement-orientation
         */
        readonly orientation?: string;
        /**
         * Specifies the position of the text in a field for a `Text` sectional element.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-sectionalelement.html#cfn-amplifyuibuilder-form-sectionalelement-position
         */
        readonly position?: CfnForm.FieldPositionProperty | cdk.IResolvable;
        /**
         * The text for a `Text` sectional element.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-sectionalelement.html#cfn-amplifyuibuilder-form-sectionalelement-text
         */
        readonly text?: string;
        /**
         * The type of sectional element.
         *
         * Valid values are `Heading` , `Text` , and `Divider` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-sectionalelement.html#cfn-amplifyuibuilder-form-sectionalelement-type
         */
        readonly type: string;
    }
    /**
     * The `FormDataTypeConfig` property specifies the data type configuration for the data source associated with a form.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formdatatypeconfig.html
     */
    interface FormDataTypeConfigProperty {
        /**
         * The data source type, either an Amplify DataStore model or a custom data type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formdatatypeconfig.html#cfn-amplifyuibuilder-form-formdatatypeconfig-datasourcetype
         */
        readonly dataSourceType: string;
        /**
         * The unique name of the data type you are using as the data source for the form.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formdatatypeconfig.html#cfn-amplifyuibuilder-form-formdatatypeconfig-datatypename
         */
        readonly dataTypeName: string;
    }
    /**
     * The `FormStyle` property specifies the configuration for the form's style.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formstyle.html
     */
    interface FormStyleProperty {
        /**
         * The spacing for the horizontal gap.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formstyle.html#cfn-amplifyuibuilder-form-formstyle-horizontalgap
         */
        readonly horizontalGap?: CfnForm.FormStyleConfigProperty | cdk.IResolvable;
        /**
         * The size of the outer padding for the form.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formstyle.html#cfn-amplifyuibuilder-form-formstyle-outerpadding
         */
        readonly outerPadding?: CfnForm.FormStyleConfigProperty | cdk.IResolvable;
        /**
         * The spacing for the vertical gap.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formstyle.html#cfn-amplifyuibuilder-form-formstyle-verticalgap
         */
        readonly verticalGap?: CfnForm.FormStyleConfigProperty | cdk.IResolvable;
    }
    /**
     * The `FormStyleConfig` property specifies the configuration settings for the form's style properties.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formstyleconfig.html
     */
    interface FormStyleConfigProperty {
        /**
         * A reference to a design token to use to bind the form's style properties to an existing theme.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formstyleconfig.html#cfn-amplifyuibuilder-form-formstyleconfig-tokenreference
         */
        readonly tokenReference?: string;
        /**
         * The value of the style setting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formstyleconfig.html#cfn-amplifyuibuilder-form-formstyleconfig-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnForm`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html
 */
export interface CfnFormProps {
    /**
     * The unique ID of the Amplify app associated with the form.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html#cfn-amplifyuibuilder-form-appid
     */
    readonly appId?: string;
    /**
     * The `FormCTA` object that stores the call to action configuration for the form.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html#cfn-amplifyuibuilder-form-cta
     */
    readonly cta?: CfnForm.FormCTAProperty | cdk.IResolvable;
    /**
     * The type of data source to use to create the form.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html#cfn-amplifyuibuilder-form-datatype
     */
    readonly dataType?: CfnForm.FormDataTypeConfigProperty | cdk.IResolvable;
    /**
     * The name of the backend environment that is a part of the Amplify app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html#cfn-amplifyuibuilder-form-environmentname
     */
    readonly environmentName?: string;
    /**
     * The configuration information for the form's fields.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html#cfn-amplifyuibuilder-form-fields
     */
    readonly fields?: cdk.IResolvable | Record<string, CfnForm.FieldConfigProperty | cdk.IResolvable>;
    /**
     * Specifies whether to perform a create or update action on the form.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html#cfn-amplifyuibuilder-form-formactiontype
     */
    readonly formActionType?: string;
    /**
     * Specifies an icon or decoration to display on the form.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html#cfn-amplifyuibuilder-form-labeldecorator
     */
    readonly labelDecorator?: string;
    /**
     * The name of the form.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html#cfn-amplifyuibuilder-form-name
     */
    readonly name?: string;
    /**
     * The schema version of the form.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html#cfn-amplifyuibuilder-form-schemaversion
     */
    readonly schemaVersion?: string;
    /**
     * The configuration information for the visual helper elements for the form.
     *
     * These elements are not associated with any data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html#cfn-amplifyuibuilder-form-sectionalelements
     */
    readonly sectionalElements?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnForm.SectionalElementProperty>;
    /**
     * The configuration for the form's style.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html#cfn-amplifyuibuilder-form-style
     */
    readonly style?: CfnForm.FormStyleProperty | cdk.IResolvable;
    /**
     * One or more key-value pairs to use when tagging the form data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html#cfn-amplifyuibuilder-form-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * The AWS::AmplifyUIBuilder::Theme resource specifies a theme within an Amplify app.
 *
 * A theme is a collection of style settings that apply globally to the components associated with the app.
 *
 * @cloudformationResource AWS::AmplifyUIBuilder::Theme
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html
 */
export declare class CfnTheme extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTheme from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTheme;
    /**
     * The time that the theme was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The ID for the theme.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The time that the theme was modified.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * The unique ID for the Amplify app associated with the theme.
     */
    appId?: string;
    /**
     * The name of the backend environment that is a part of the Amplify app.
     */
    environmentName?: string;
    /**
     * The name of the theme.
     */
    name?: string;
    /**
     * Describes the properties that can be overriden to customize a theme.
     */
    overrides?: Array<cdk.IResolvable | CfnTheme.ThemeValuesProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * One or more key-value pairs to use when tagging the theme.
     */
    tagsRaw?: Record<string, string>;
    /**
     * A list of key-value pairs that defines the properties of the theme.
     */
    values?: Array<cdk.IResolvable | CfnTheme.ThemeValuesProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnThemeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTheme {
    /**
     * The `ThemeValues` property specifies key-value pair that defines a property of a theme.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-theme-themevalues.html
     */
    interface ThemeValuesProperty {
        /**
         * The name of the property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-theme-themevalues.html#cfn-amplifyuibuilder-theme-themevalues-key
         */
        readonly key?: string;
        /**
         * The value of the property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-theme-themevalues.html#cfn-amplifyuibuilder-theme-themevalues-value
         */
        readonly value?: cdk.IResolvable | CfnTheme.ThemeValueProperty;
    }
    /**
     * The `ThemeValue` property specifies the configuration of a theme's properties.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-theme-themevalue.html
     */
    interface ThemeValueProperty {
        /**
         * A list of key-value pairs that define the theme's properties.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-theme-themevalue.html#cfn-amplifyuibuilder-theme-themevalue-children
         */
        readonly children?: Array<cdk.IResolvable | CfnTheme.ThemeValuesProperty> | cdk.IResolvable;
        /**
         * The value of a theme property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-theme-themevalue.html#cfn-amplifyuibuilder-theme-themevalue-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnTheme`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html
 */
export interface CfnThemeProps {
    /**
     * The unique ID for the Amplify app associated with the theme.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-appid
     */
    readonly appId?: string;
    /**
     * The name of the backend environment that is a part of the Amplify app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-environmentname
     */
    readonly environmentName?: string;
    /**
     * The name of the theme.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-name
     */
    readonly name?: string;
    /**
     * Describes the properties that can be overriden to customize a theme.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-overrides
     */
    readonly overrides?: Array<cdk.IResolvable | CfnTheme.ThemeValuesProperty> | cdk.IResolvable;
    /**
     * One or more key-value pairs to use when tagging the theme.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * A list of key-value pairs that defines the properties of the theme.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-values
     */
    readonly values?: Array<cdk.IResolvable | CfnTheme.ThemeValuesProperty> | cdk.IResolvable;
}
