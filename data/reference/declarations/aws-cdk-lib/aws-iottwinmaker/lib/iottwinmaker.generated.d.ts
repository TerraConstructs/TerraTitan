import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Use the `AWS::IoTTwinMaker::ComponentType` resource to declare a component type.
 *
 * @cloudformationResource AWS::IoTTwinMaker::ComponentType
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html
 */
export declare class CfnComponentType extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnComponentType from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnComponentType;
    /**
     * The ARN of the component type.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time when the component type was created.
     *
     * @cloudformationAttribute CreationDateTime
     */
    readonly attrCreationDateTime: string;
    /**
     * A boolean value that specifies whether the component type is abstract.
     *
     * @cloudformationAttribute IsAbstract
     */
    readonly attrIsAbstract: cdk.IResolvable;
    /**
     * A boolean value that specifies whether the component type has a schema initializer and that the schema initializer has run.
     *
     * @cloudformationAttribute IsSchemaInitialized
     */
    readonly attrIsSchemaInitialized: cdk.IResolvable;
    /**
     * @cloudformationAttribute Status
     */
    readonly attrStatus: cdk.IResolvable;
    /**
     * @cloudformationAttribute Status.Error
     */
    readonly attrStatusError: cdk.IResolvable;
    /**
     * @cloudformationAttribute Status.Error.Code
     */
    readonly attrStatusErrorCode: string;
    /**
     * @cloudformationAttribute Status.Error.Message
     */
    readonly attrStatusErrorMessage: string;
    /**
     * @cloudformationAttribute Status.State
     */
    readonly attrStatusState: string;
    /**
     * The component type the update time.
     *
     * @cloudformationAttribute UpdateDateTime
     */
    readonly attrUpdateDateTime: string;
    /**
     * The ID of the component type.
     */
    componentTypeId: string;
    /**
     * Maps strings to `compositeComponentTypes` of the `componentType` .
     */
    compositeComponentTypes?: cdk.IResolvable | Record<string, CfnComponentType.CompositeComponentTypeProperty | cdk.IResolvable>;
    /**
     * The description of the component type.
     */
    description?: string;
    /**
     * The name of the parent component type that this component type extends.
     */
    extendsFrom?: Array<string>;
    /**
     * An object that maps strings to the functions in the component type.
     */
    functions?: cdk.IResolvable | Record<string, CfnComponentType.FunctionProperty | cdk.IResolvable>;
    /**
     * A boolean value that specifies whether an entity can have more than one component of this type.
     */
    isSingleton?: boolean | cdk.IResolvable;
    /**
     * An object that maps strings to the property definitions in the component type.
     */
    propertyDefinitions?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnComponentType.PropertyDefinitionProperty>;
    /**
     * An object that maps strings to the property groups in the component type.
     */
    propertyGroups?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnComponentType.PropertyGroupProperty>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The ComponentType tags.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The ID of the workspace that contains the component type.
     */
    workspaceId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnComponentTypeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnComponentType {
    /**
     * PropertyDefinition is an object that maps strings to the property definitions in the component type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertydefinition.html
     */
    interface PropertyDefinitionProperty {
        /**
         * A mapping that specifies configuration information about the property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertydefinition.html#cfn-iottwinmaker-componenttype-propertydefinition-configurations
         */
        readonly configurations?: cdk.IResolvable | Record<string, string>;
        /**
         * An object that specifies the data type of a property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertydefinition.html#cfn-iottwinmaker-componenttype-propertydefinition-datatype
         */
        readonly dataType?: CfnComponentType.DataTypeProperty | cdk.IResolvable;
        /**
         * A boolean value that specifies whether the property ID comes from an external data store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertydefinition.html#cfn-iottwinmaker-componenttype-propertydefinition-defaultvalue
         */
        readonly defaultValue?: CfnComponentType.DataValueProperty | cdk.IResolvable;
        /**
         * A Boolean value that specifies whether the property ID comes from an external data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertydefinition.html#cfn-iottwinmaker-componenttype-propertydefinition-isexternalid
         */
        readonly isExternalId?: boolean | cdk.IResolvable;
        /**
         * A boolean value that specifies whether the property is required in an entity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertydefinition.html#cfn-iottwinmaker-componenttype-propertydefinition-isrequiredinentity
         */
        readonly isRequiredInEntity?: boolean | cdk.IResolvable;
        /**
         * A boolean value that specifies whether the property is stored externally.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertydefinition.html#cfn-iottwinmaker-componenttype-propertydefinition-isstoredexternally
         */
        readonly isStoredExternally?: boolean | cdk.IResolvable;
        /**
         * A boolean value that specifies whether the property consists of time series data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertydefinition.html#cfn-iottwinmaker-componenttype-propertydefinition-istimeseries
         */
        readonly isTimeSeries?: boolean | cdk.IResolvable;
    }
    /**
     * An object that specifies a value for a property.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datavalue.html
     */
    interface DataValueProperty {
        /**
         * A boolean value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datavalue.html#cfn-iottwinmaker-componenttype-datavalue-booleanvalue
         */
        readonly booleanValue?: boolean | cdk.IResolvable;
        /**
         * A double value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datavalue.html#cfn-iottwinmaker-componenttype-datavalue-doublevalue
         */
        readonly doubleValue?: number;
        /**
         * An expression that produces the value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datavalue.html#cfn-iottwinmaker-componenttype-datavalue-expression
         */
        readonly expression?: string;
        /**
         * An integer value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datavalue.html#cfn-iottwinmaker-componenttype-datavalue-integervalue
         */
        readonly integerValue?: number;
        /**
         * A list of multiple values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datavalue.html#cfn-iottwinmaker-componenttype-datavalue-listvalue
         */
        readonly listValue?: Array<CfnComponentType.DataValueProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A long value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datavalue.html#cfn-iottwinmaker-componenttype-datavalue-longvalue
         */
        readonly longValue?: number;
        /**
         * An object that maps strings to multiple `DataValue` objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datavalue.html#cfn-iottwinmaker-componenttype-datavalue-mapvalue
         */
        readonly mapValue?: cdk.IResolvable | Record<string, CfnComponentType.DataValueProperty | cdk.IResolvable>;
        /**
         * A value that relates a component to another component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datavalue.html#cfn-iottwinmaker-componenttype-datavalue-relationshipvalue
         */
        readonly relationshipValue?: any | cdk.IResolvable;
        /**
         * A string value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datavalue.html#cfn-iottwinmaker-componenttype-datavalue-stringvalue
         */
        readonly stringValue?: string;
    }
    /**
     * An object that specifies the data type of a property.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datatype.html
     */
    interface DataTypeProperty {
        /**
         * The allowed values for this data type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datatype.html#cfn-iottwinmaker-componenttype-datatype-allowedvalues
         */
        readonly allowedValues?: Array<CfnComponentType.DataValueProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The nested type in the data type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datatype.html#cfn-iottwinmaker-componenttype-datatype-nestedtype
         */
        readonly nestedType?: CfnComponentType.DataTypeProperty | cdk.IResolvable;
        /**
         * A relationship that associates a component with another component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datatype.html#cfn-iottwinmaker-componenttype-datatype-relationship
         */
        readonly relationship?: cdk.IResolvable | CfnComponentType.RelationshipProperty;
        /**
         * The underlying type of the data type.
         *
         * Valid Values: `RELATIONSHIP | STRING | LONG | BOOLEAN | INTEGER | DOUBLE | LIST | MAP`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datatype.html#cfn-iottwinmaker-componenttype-datatype-type
         */
        readonly type: string;
        /**
         * The unit of measure used in this data type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datatype.html#cfn-iottwinmaker-componenttype-datatype-unitofmeasure
         */
        readonly unitOfMeasure?: string;
    }
    /**
     * An object that specifies a relationship with another component type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-relationship.html
     */
    interface RelationshipProperty {
        /**
         * The type of the relationship.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-relationship.html#cfn-iottwinmaker-componenttype-relationship-relationshiptype
         */
        readonly relationshipType?: string;
        /**
         * The ID of the target component type associated with this relationship.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-relationship.html#cfn-iottwinmaker-componenttype-relationship-targetcomponenttypeid
         */
        readonly targetComponentTypeId?: string;
    }
    /**
     * The property group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertygroup.html
     */
    interface PropertyGroupProperty {
        /**
         * The group type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertygroup.html#cfn-iottwinmaker-componenttype-propertygroup-grouptype
         */
        readonly groupType?: string;
        /**
         * The property names.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertygroup.html#cfn-iottwinmaker-componenttype-propertygroup-propertynames
         */
        readonly propertyNames?: Array<string>;
    }
    /**
     * The function body.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-function.html
     */
    interface FunctionProperty {
        /**
         * The data connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-function.html#cfn-iottwinmaker-componenttype-function-implementedby
         */
        readonly implementedBy?: CfnComponentType.DataConnectorProperty | cdk.IResolvable;
        /**
         * The required properties of the function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-function.html#cfn-iottwinmaker-componenttype-function-requiredproperties
         */
        readonly requiredProperties?: Array<string>;
        /**
         * The scope of the function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-function.html#cfn-iottwinmaker-componenttype-function-scope
         */
        readonly scope?: string;
    }
    /**
     * The data connector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-dataconnector.html
     */
    interface DataConnectorProperty {
        /**
         * A boolean value that specifies whether the data connector is native to IoT TwinMaker.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-dataconnector.html#cfn-iottwinmaker-componenttype-dataconnector-isnative
         */
        readonly isNative?: boolean | cdk.IResolvable;
        /**
         * The Lambda function associated with the data connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-dataconnector.html#cfn-iottwinmaker-componenttype-dataconnector-lambda
         */
        readonly lambda?: cdk.IResolvable | CfnComponentType.LambdaFunctionProperty;
    }
    /**
     * The Lambda function.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-lambdafunction.html
     */
    interface LambdaFunctionProperty {
        /**
         * The Lambda function ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-lambdafunction.html#cfn-iottwinmaker-componenttype-lambdafunction-arn
         */
        readonly arn: string;
    }
    /**
     * Specifies the ID of the composite component type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-compositecomponenttype.html
     */
    interface CompositeComponentTypeProperty {
        /**
         * The ID of the component type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-compositecomponenttype.html#cfn-iottwinmaker-componenttype-compositecomponenttype-componenttypeid
         */
        readonly componentTypeId?: string;
    }
    /**
     * The component type status.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-status.html
     */
    interface StatusProperty {
        /**
         * The component type error.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-status.html#cfn-iottwinmaker-componenttype-status-error
         */
        readonly error?: CfnComponentType.ErrorProperty | cdk.IResolvable;
        /**
         * The component type status state.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-status.html#cfn-iottwinmaker-componenttype-status-state
         */
        readonly state?: string;
    }
    /**
     * The component type error.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-error.html
     */
    interface ErrorProperty {
        /**
         * The component type error code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-error.html#cfn-iottwinmaker-componenttype-error-code
         */
        readonly code?: string;
        /**
         * The component type error message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-error.html#cfn-iottwinmaker-componenttype-error-message
         */
        readonly message?: string;
    }
    /**
     * The component type relationship value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-relationshipvalue.html
     */
    interface RelationshipValueProperty {
        /**
         * The target component name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-relationshipvalue.html#cfn-iottwinmaker-componenttype-relationshipvalue-targetcomponentname
         */
        readonly targetComponentName?: string;
        /**
         * The target entity Id.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-relationshipvalue.html#cfn-iottwinmaker-componenttype-relationshipvalue-targetentityid
         */
        readonly targetEntityId?: string;
    }
}
/**
 * Properties for defining a `CfnComponentType`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html
 */
export interface CfnComponentTypeProps {
    /**
     * The ID of the component type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html#cfn-iottwinmaker-componenttype-componenttypeid
     */
    readonly componentTypeId: string;
    /**
     * Maps strings to `compositeComponentTypes` of the `componentType` .
     *
     * `CompositeComponentType` is referenced by `componentTypeId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html#cfn-iottwinmaker-componenttype-compositecomponenttypes
     */
    readonly compositeComponentTypes?: cdk.IResolvable | Record<string, CfnComponentType.CompositeComponentTypeProperty | cdk.IResolvable>;
    /**
     * The description of the component type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html#cfn-iottwinmaker-componenttype-description
     */
    readonly description?: string;
    /**
     * The name of the parent component type that this component type extends.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html#cfn-iottwinmaker-componenttype-extendsfrom
     */
    readonly extendsFrom?: Array<string>;
    /**
     * An object that maps strings to the functions in the component type.
     *
     * Each string in the mapping must be unique to this object.
     *
     * For information on the FunctionResponse object see the [FunctionResponse](https://docs.aws.amazon.com//iot-twinmaker/latest/apireference/API_FunctionResponse.html) API reference.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html#cfn-iottwinmaker-componenttype-functions
     */
    readonly functions?: cdk.IResolvable | Record<string, CfnComponentType.FunctionProperty | cdk.IResolvable>;
    /**
     * A boolean value that specifies whether an entity can have more than one component of this type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html#cfn-iottwinmaker-componenttype-issingleton
     */
    readonly isSingleton?: boolean | cdk.IResolvable;
    /**
     * An object that maps strings to the property definitions in the component type.
     *
     * Each string in the mapping must be unique to this object.
     *
     * For information about the PropertyDefinitionResponse object, see the [PropertyDefinitionResponse](https://docs.aws.amazon.com//iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html) API reference.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html#cfn-iottwinmaker-componenttype-propertydefinitions
     */
    readonly propertyDefinitions?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnComponentType.PropertyDefinitionProperty>;
    /**
     * An object that maps strings to the property groups in the component type.
     *
     * Each string in the mapping must be unique to this object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html#cfn-iottwinmaker-componenttype-propertygroups
     */
    readonly propertyGroups?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnComponentType.PropertyGroupProperty>;
    /**
     * The ComponentType tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html#cfn-iottwinmaker-componenttype-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The ID of the workspace that contains the component type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html#cfn-iottwinmaker-componenttype-workspaceid
     */
    readonly workspaceId: string;
}
/**
 * Use the `AWS::IoTTwinMaker::Entity` resource to declare an entity.
 *
 * @cloudformationResource AWS::IoTTwinMaker::Entity
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html
 */
export declare class CfnEntity extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEntity from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEntity;
    /**
     * The entity ARN.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time the entity was created.
     *
     * @cloudformationAttribute CreationDateTime
     */
    readonly attrCreationDateTime: string;
    /**
     * A boolean value that specifies whether the entity has child entities or not.
     *
     * @cloudformationAttribute HasChildEntities
     */
    readonly attrHasChildEntities: cdk.IResolvable;
    /**
     * @cloudformationAttribute Status
     */
    readonly attrStatus: cdk.IResolvable;
    /**
     * @cloudformationAttribute Status.Error
     */
    readonly attrStatusError: cdk.IResolvable;
    /**
     * @cloudformationAttribute Status.Error.Code
     */
    readonly attrStatusErrorCode: string;
    /**
     * @cloudformationAttribute Status.Error.Message
     */
    readonly attrStatusErrorMessage: string;
    /**
     * @cloudformationAttribute Status.State
     */
    readonly attrStatusState: string;
    /**
     * The date and time when the component type was last updated.
     *
     * @cloudformationAttribute UpdateDateTime
     */
    readonly attrUpdateDateTime: string;
    /**
     * An object that maps strings to the components in the entity.
     */
    components?: cdk.IResolvable | Record<string, CfnEntity.ComponentProperty | cdk.IResolvable>;
    /**
     * Maps string to `compositeComponent` updates in the request.
     */
    compositeComponents?: cdk.IResolvable | Record<string, CfnEntity.CompositeComponentProperty | cdk.IResolvable>;
    /**
     * The description of the entity.
     */
    description?: string;
    /**
     * The ID of the entity.
     */
    entityId?: string;
    /**
     * The entity name.
     */
    entityName: string;
    /**
     * The ID of the parent entity.
     */
    parentEntityId?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata that you can use to manage the entity.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The ID of the workspace that contains the entity.
     */
    workspaceId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEntityProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEntity {
    /**
     * The entity component.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-component.html
     */
    interface ComponentProperty {
        /**
         * The name of the component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-component.html#cfn-iottwinmaker-entity-component-componentname
         */
        readonly componentName?: string;
        /**
         * The ID of the component type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-component.html#cfn-iottwinmaker-entity-component-componenttypeid
         */
        readonly componentTypeId?: string;
        /**
         * The name of the property definition set in the request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-component.html#cfn-iottwinmaker-entity-component-definedin
         */
        readonly definedIn?: string;
        /**
         * The description of the component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-component.html#cfn-iottwinmaker-entity-component-description
         */
        readonly description?: string;
        /**
         * An object that maps strings to the properties to set in the component type.
         *
         * Each string in the mapping must be unique to this object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-component.html#cfn-iottwinmaker-entity-component-properties
         */
        readonly properties?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnEntity.PropertyProperty>;
        /**
         * An object that maps strings to the property groups in the component type.
         *
         * Each string in the mapping must be unique to this object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-component.html#cfn-iottwinmaker-entity-component-propertygroups
         */
        readonly propertyGroups?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnEntity.PropertyGroupProperty>;
        /**
         * The status of the component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-component.html#cfn-iottwinmaker-entity-component-status
         */
        readonly status?: cdk.IResolvable | CfnEntity.StatusProperty;
    }
    /**
     * The current status of the entity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-status.html
     */
    interface StatusProperty {
        /**
         * The error message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-status.html#cfn-iottwinmaker-entity-status-error
         */
        readonly error?: any | cdk.IResolvable;
        /**
         * The current state of the entity, component, component type, or workspace.
         *
         * Valid Values: `CREATING | UPDATING | DELETING | ACTIVE | ERROR`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-status.html#cfn-iottwinmaker-entity-status-state
         */
        readonly state?: string;
    }
    /**
     * The property group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-propertygroup.html
     */
    interface PropertyGroupProperty {
        /**
         * The group type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-propertygroup.html#cfn-iottwinmaker-entity-propertygroup-grouptype
         */
        readonly groupType?: string;
        /**
         * The property names.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-propertygroup.html#cfn-iottwinmaker-entity-propertygroup-propertynames
         */
        readonly propertyNames?: Array<string>;
    }
    /**
     * An object that sets information about a property.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-property.html
     */
    interface PropertyProperty {
        /**
         * An object that specifies information about a property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-property.html#cfn-iottwinmaker-entity-property-definition
         */
        readonly definition?: any | cdk.IResolvable;
        /**
         * An object that contains information about a value for a time series property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-property.html#cfn-iottwinmaker-entity-property-value
         */
        readonly value?: CfnEntity.DataValueProperty | cdk.IResolvable;
    }
    /**
     * An object that specifies a value for a property.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datavalue.html
     */
    interface DataValueProperty {
        /**
         * A boolean value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datavalue.html#cfn-iottwinmaker-entity-datavalue-booleanvalue
         */
        readonly booleanValue?: boolean | cdk.IResolvable;
        /**
         * A double value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datavalue.html#cfn-iottwinmaker-entity-datavalue-doublevalue
         */
        readonly doubleValue?: number;
        /**
         * An expression that produces the value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datavalue.html#cfn-iottwinmaker-entity-datavalue-expression
         */
        readonly expression?: string;
        /**
         * An integer value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datavalue.html#cfn-iottwinmaker-entity-datavalue-integervalue
         */
        readonly integerValue?: number;
        /**
         * A list of multiple values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datavalue.html#cfn-iottwinmaker-entity-datavalue-listvalue
         */
        readonly listValue?: Array<CfnEntity.DataValueProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A long value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datavalue.html#cfn-iottwinmaker-entity-datavalue-longvalue
         */
        readonly longValue?: number;
        /**
         * An object that maps strings to multiple DataValue objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datavalue.html#cfn-iottwinmaker-entity-datavalue-mapvalue
         */
        readonly mapValue?: cdk.IResolvable | Record<string, CfnEntity.DataValueProperty | cdk.IResolvable>;
        /**
         * A value that relates a component to another component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datavalue.html#cfn-iottwinmaker-entity-datavalue-relationshipvalue
         */
        readonly relationshipValue?: any | cdk.IResolvable;
        /**
         * A string value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datavalue.html#cfn-iottwinmaker-entity-datavalue-stringvalue
         */
        readonly stringValue?: string;
    }
    /**
     * Information about a composite component.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-compositecomponent.html
     */
    interface CompositeComponentProperty {
        /**
         * The name of the component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-compositecomponent.html#cfn-iottwinmaker-entity-compositecomponent-componentname
         */
        readonly componentName?: string;
        /**
         * The path to the composite component, starting from the top-level component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-compositecomponent.html#cfn-iottwinmaker-entity-compositecomponent-componentpath
         */
        readonly componentPath?: string;
        /**
         * The ID of the composite component type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-compositecomponent.html#cfn-iottwinmaker-entity-compositecomponent-componenttypeid
         */
        readonly componentTypeId?: string;
        /**
         * The description of the component type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-compositecomponent.html#cfn-iottwinmaker-entity-compositecomponent-description
         */
        readonly description?: string;
        /**
         * Map of strings to the properties in the component type.
         *
         * Each string in the mapping must be unique to this component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-compositecomponent.html#cfn-iottwinmaker-entity-compositecomponent-properties
         */
        readonly properties?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnEntity.PropertyProperty>;
        /**
         * The property groups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-compositecomponent.html#cfn-iottwinmaker-entity-compositecomponent-propertygroups
         */
        readonly propertyGroups?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnEntity.PropertyGroupProperty>;
        /**
         * The current status of the composite component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-compositecomponent.html#cfn-iottwinmaker-entity-compositecomponent-status
         */
        readonly status?: cdk.IResolvable | CfnEntity.StatusProperty;
    }
    /**
     * The entity error.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-error.html
     */
    interface ErrorProperty {
        /**
         * The entity error code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-error.html#cfn-iottwinmaker-entity-error-code
         */
        readonly code?: string;
        /**
         * The entity error message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-error.html#cfn-iottwinmaker-entity-error-message
         */
        readonly message?: string;
    }
    /**
     * The entity data type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datatype.html
     */
    interface DataTypeProperty {
        /**
         * The allowed values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datatype.html#cfn-iottwinmaker-entity-datatype-allowedvalues
         */
        readonly allowedValues?: Array<CfnEntity.DataValueProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The nested type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datatype.html#cfn-iottwinmaker-entity-datatype-nestedtype
         */
        readonly nestedType?: CfnEntity.DataTypeProperty | cdk.IResolvable;
        /**
         * The relationship.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datatype.html#cfn-iottwinmaker-entity-datatype-relationship
         */
        readonly relationship?: cdk.IResolvable | CfnEntity.RelationshipProperty;
        /**
         * The entity type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datatype.html#cfn-iottwinmaker-entity-datatype-type
         */
        readonly type?: string;
        /**
         * The unit of measure.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datatype.html#cfn-iottwinmaker-entity-datatype-unitofmeasure
         */
        readonly unitOfMeasure?: string;
    }
    /**
     * The entity relationship.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-relationship.html
     */
    interface RelationshipProperty {
        /**
         * The relationship type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-relationship.html#cfn-iottwinmaker-entity-relationship-relationshiptype
         */
        readonly relationshipType?: string;
        /**
         * the component type Id target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-relationship.html#cfn-iottwinmaker-entity-relationship-targetcomponenttypeid
         */
        readonly targetComponentTypeId?: string;
    }
    /**
     * The entity definition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-definition.html
     */
    interface DefinitionProperty {
        /**
         * The configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-definition.html#cfn-iottwinmaker-entity-definition-configuration
         */
        readonly configuration?: cdk.IResolvable | Record<string, string>;
        /**
         * The data type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-definition.html#cfn-iottwinmaker-entity-definition-datatype
         */
        readonly dataType?: CfnEntity.DataTypeProperty | cdk.IResolvable;
        /**
         * The default value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-definition.html#cfn-iottwinmaker-entity-definition-defaultvalue
         */
        readonly defaultValue?: CfnEntity.DataValueProperty | cdk.IResolvable;
        /**
         * Displays if the entity has a external Id.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-definition.html#cfn-iottwinmaker-entity-definition-isexternalid
         */
        readonly isExternalId?: boolean | cdk.IResolvable;
        /**
         * Displays if the entity is final.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-definition.html#cfn-iottwinmaker-entity-definition-isfinal
         */
        readonly isFinal?: boolean | cdk.IResolvable;
        /**
         * Displays if the entity is imported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-definition.html#cfn-iottwinmaker-entity-definition-isimported
         */
        readonly isImported?: boolean | cdk.IResolvable;
        /**
         * Displays if the entity is inherited.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-definition.html#cfn-iottwinmaker-entity-definition-isinherited
         */
        readonly isInherited?: boolean | cdk.IResolvable;
        /**
         * Displays if the entity is a required entity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-definition.html#cfn-iottwinmaker-entity-definition-isrequiredinentity
         */
        readonly isRequiredInEntity?: boolean | cdk.IResolvable;
        /**
         * Displays if the entity is tored externally.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-definition.html#cfn-iottwinmaker-entity-definition-isstoredexternally
         */
        readonly isStoredExternally?: boolean | cdk.IResolvable;
        /**
         * Displays if the entity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-definition.html#cfn-iottwinmaker-entity-definition-istimeseries
         */
        readonly isTimeSeries?: boolean | cdk.IResolvable;
    }
    /**
     * The entity relationship.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-relationshipvalue.html
     */
    interface RelationshipValueProperty {
        /**
         * The target component name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-relationshipvalue.html#cfn-iottwinmaker-entity-relationshipvalue-targetcomponentname
         */
        readonly targetComponentName?: string;
        /**
         * The target entity Id.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-relationshipvalue.html#cfn-iottwinmaker-entity-relationshipvalue-targetentityid
         */
        readonly targetEntityId?: string;
    }
}
/**
 * Properties for defining a `CfnEntity`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html
 */
export interface CfnEntityProps {
    /**
     * An object that maps strings to the components in the entity.
     *
     * Each string in the mapping must be unique to this object.
     *
     * For information on the component object see the [component](https://docs.aws.amazon.com//iot-twinmaker/latest/apireference/API_ComponentResponse.html) API reference.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-components
     */
    readonly components?: cdk.IResolvable | Record<string, CfnEntity.ComponentProperty | cdk.IResolvable>;
    /**
     * Maps string to `compositeComponent` updates in the request.
     *
     * Each key of the map represents the `componentPath` of the `compositeComponent` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-compositecomponents
     */
    readonly compositeComponents?: cdk.IResolvable | Record<string, CfnEntity.CompositeComponentProperty | cdk.IResolvable>;
    /**
     * The description of the entity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-description
     */
    readonly description?: string;
    /**
     * The ID of the entity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-entityid
     */
    readonly entityId?: string;
    /**
     * The entity name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-entityname
     */
    readonly entityName: string;
    /**
     * The ID of the parent entity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-parententityid
     */
    readonly parentEntityId?: string;
    /**
     * Metadata that you can use to manage the entity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The ID of the workspace that contains the entity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-workspaceid
     */
    readonly workspaceId: string;
}
/**
 * Use the `AWS::IoTTwinMaker::Scene` resource to declare a scene.
 *
 * @cloudformationResource AWS::IoTTwinMaker::Scene
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html
 */
export declare class CfnScene extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnScene from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnScene;
    /**
     * The scene ARN.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time when the scene was created.
     *
     * @cloudformationAttribute CreationDateTime
     */
    readonly attrCreationDateTime: string;
    /**
     * A key-value pair of generated scene metadata for the scene.
     *
     * @cloudformationAttribute GeneratedSceneMetadata
     */
    readonly attrGeneratedSceneMetadata: cdk.IResolvable;
    /**
     * The scene the update time.
     *
     * @cloudformationAttribute UpdateDateTime
     */
    readonly attrUpdateDateTime: string;
    /**
     * A list of capabilities that the scene uses to render.
     */
    capabilities?: Array<string>;
    /**
     * The relative path that specifies the location of the content definition file.
     */
    contentLocation: string;
    /**
     * The description of this scene.
     */
    description?: string;
    /**
     * The ID of the scene.
     */
    sceneId: string;
    /**
     * The scene metadata.
     */
    sceneMetadata?: cdk.IResolvable | Record<string, string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The ComponentType tags.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The ID of the workspace.
     */
    workspaceId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSceneProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnScene`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html
 */
export interface CfnSceneProps {
    /**
     * A list of capabilities that the scene uses to render.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html#cfn-iottwinmaker-scene-capabilities
     */
    readonly capabilities?: Array<string>;
    /**
     * The relative path that specifies the location of the content definition file.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html#cfn-iottwinmaker-scene-contentlocation
     */
    readonly contentLocation: string;
    /**
     * The description of this scene.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html#cfn-iottwinmaker-scene-description
     */
    readonly description?: string;
    /**
     * The ID of the scene.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html#cfn-iottwinmaker-scene-sceneid
     */
    readonly sceneId: string;
    /**
     * The scene metadata.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html#cfn-iottwinmaker-scene-scenemetadata
     */
    readonly sceneMetadata?: cdk.IResolvable | Record<string, string>;
    /**
     * The ComponentType tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html#cfn-iottwinmaker-scene-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The ID of the workspace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html#cfn-iottwinmaker-scene-workspaceid
     */
    readonly workspaceId: string;
}
/**
 * The SyncJob.
 *
 * @cloudformationResource AWS::IoTTwinMaker::SyncJob
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html
 */
export declare class CfnSyncJob extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSyncJob from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSyncJob;
    /**
     * The SyncJob ARN.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The creation date and time of the SyncJob.
     *
     * @cloudformationAttribute CreationDateTime
     */
    readonly attrCreationDateTime: string;
    /**
     * The SyncJob's state.
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * The update date and time.
     *
     * @cloudformationAttribute UpdateDateTime
     */
    readonly attrUpdateDateTime: string;
    /**
     * The SyncJob IAM role.
     */
    syncRole: string;
    /**
     * The sync source.
     */
    syncSource: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata you can use to manage the SyncJob.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The ID of the workspace that contains the sync job.
     */
    workspaceId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSyncJobProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnSyncJob`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html
 */
export interface CfnSyncJobProps {
    /**
     * The SyncJob IAM role.
     *
     * This IAM role is used by the sync job to read from the syncSource, and create, update or delete the corresponding resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html#cfn-iottwinmaker-syncjob-syncrole
     */
    readonly syncRole: string;
    /**
     * The sync source.
     *
     * > Currently the only supported syncSoucre is `SITEWISE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html#cfn-iottwinmaker-syncjob-syncsource
     */
    readonly syncSource: string;
    /**
     * Metadata you can use to manage the SyncJob.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html#cfn-iottwinmaker-syncjob-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The ID of the workspace that contains the sync job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html#cfn-iottwinmaker-syncjob-workspaceid
     */
    readonly workspaceId: string;
}
/**
 * Use the `AWS::IoTTwinMaker::Workspace` resource to declare a workspace.
 *
 * @cloudformationResource AWS::IoTTwinMaker::Workspace
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-workspace.html
 */
export declare class CfnWorkspace extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWorkspace from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWorkspace;
    /**
     * The workspace ARN.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time the workspace was created.
     *
     * @cloudformationAttribute CreationDateTime
     */
    readonly attrCreationDateTime: string;
    /**
     * The date and time the workspace was updated.
     *
     * @cloudformationAttribute UpdateDateTime
     */
    readonly attrUpdateDateTime: string;
    /**
     * The description of the workspace.
     */
    description?: string;
    /**
     * The ARN of the execution role associated with the workspace.
     */
    role: string;
    /**
     * The ARN of the S3 bucket where resources associated with the workspace are stored.
     */
    s3Location: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata that you can use to manage the workspace.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The ID of the workspace.
     */
    workspaceId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWorkspaceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnWorkspace`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-workspace.html
 */
export interface CfnWorkspaceProps {
    /**
     * The description of the workspace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-workspace.html#cfn-iottwinmaker-workspace-description
     */
    readonly description?: string;
    /**
     * The ARN of the execution role associated with the workspace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-workspace.html#cfn-iottwinmaker-workspace-role
     */
    readonly role: string;
    /**
     * The ARN of the S3 bucket where resources associated with the workspace are stored.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-workspace.html#cfn-iottwinmaker-workspace-s3location
     */
    readonly s3Location: string;
    /**
     * Metadata that you can use to manage the workspace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-workspace.html#cfn-iottwinmaker-workspace-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The ID of the workspace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-workspace.html#cfn-iottwinmaker-workspace-workspaceid
     */
    readonly workspaceId: string;
}
