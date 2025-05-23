import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Represents a AWS Service Catalog AppRegistry application that is the top-level node in a hierarchy of related cloud resource abstractions.
 *
 * @cloudformationResource AWS::ServiceCatalogAppRegistry::Application
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html
 */
export declare class CfnApplication extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplication from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplication;
    /**
     * The name of the application. The name must be unique in the region in which you are creating the application.
     *
     * @cloudformationAttribute ApplicationName
     */
    readonly attrApplicationName: string;
    /**
     * The key of the AWS application tag, which is `awsApplication` . Applications created before 11/13/2023 or applications without the `AppTag` linked resource group return no value.
     *
     * @cloudformationAttribute ApplicationTagKey
     */
    readonly attrApplicationTagKey: string;
    /**
     * The value of the AWS application tag, which is the identifier of an associated resource. Applications created before 11/13/2023 or applications without the `AppTag` linked resource group return no value.
     *
     * @cloudformationAttribute ApplicationTagValue
     */
    readonly attrApplicationTagValue: string;
    /**
     * The Amazon resource name (ARN) that specifies the application across services.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The identifier of the application.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The description of the application.
     */
    description?: string;
    /**
     * The name of the application.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key-value pairs you can use to associate with the application.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationProps);
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
 * Properties for defining a `CfnApplication`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html
 */
export interface CfnApplicationProps {
    /**
     * The description of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html#cfn-servicecatalogappregistry-application-description
     */
    readonly description?: string;
    /**
     * The name of the application.
     *
     * The name must be unique in the region in which you are creating the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html#cfn-servicecatalogappregistry-application-name
     */
    readonly name: string;
    /**
     * Key-value pairs you can use to associate with the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html#cfn-servicecatalogappregistry-application-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Creates a new attribute group as a container for user-defined attributes.
 *
 * This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.
 *
 * @cloudformationResource AWS::ServiceCatalogAppRegistry::AttributeGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html
 */
export declare class CfnAttributeGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAttributeGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAttributeGroup;
    /**
     * The Amazon resource name (ARN) that specifies the attribute group across services.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The globally unique attribute group identifier of the attribute group.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A nested object in a JSON or YAML template that supports arbitrary definitions.
     */
    attributes: any | cdk.IResolvable;
    /**
     * The description of the attribute group that the user provides.
     */
    description?: string;
    /**
     * The name of the attribute group.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key-value pairs you can use to associate with the attribute group.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAttributeGroupProps);
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
 * Properties for defining a `CfnAttributeGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html
 */
export interface CfnAttributeGroupProps {
    /**
     * A nested object in a JSON or YAML template that supports arbitrary definitions.
     *
     * Represents the attributes in an attribute group that describes an application and its components.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html#cfn-servicecatalogappregistry-attributegroup-attributes
     */
    readonly attributes: any | cdk.IResolvable;
    /**
     * The description of the attribute group that the user provides.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html#cfn-servicecatalogappregistry-attributegroup-description
     */
    readonly description?: string;
    /**
     * The name of the attribute group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html#cfn-servicecatalogappregistry-attributegroup-name
     */
    readonly name: string;
    /**
     * Key-value pairs you can use to associate with the attribute group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html#cfn-servicecatalogappregistry-attributegroup-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Associates an attribute group with an application to augment the application's metadata with the group's attributes.
 *
 * This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.
 *
 * @cloudformationResource AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html
 */
export declare class CfnAttributeGroupAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAttributeGroupAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAttributeGroupAssociation;
    /**
     * The Amazon resource name (ARN) of the application that was augmented with attributes.
     *
     * @cloudformationAttribute ApplicationArn
     */
    readonly attrApplicationArn: string;
    /**
     * The Amazon resource name (ARN) of the attribute group which contains the application's new attributes.
     *
     * @cloudformationAttribute AttributeGroupArn
     */
    readonly attrAttributeGroupArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name or ID of the application.
     */
    application: string;
    /**
     * The name or ID of the attribute group which holds the attributes that describe the application.
     */
    attributeGroup: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAttributeGroupAssociationProps);
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
 * Properties for defining a `CfnAttributeGroupAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html
 */
export interface CfnAttributeGroupAssociationProps {
    /**
     * The name or ID of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html#cfn-servicecatalogappregistry-attributegroupassociation-application
     */
    readonly application: string;
    /**
     * The name or ID of the attribute group which holds the attributes that describe the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html#cfn-servicecatalogappregistry-attributegroupassociation-attributegroup
     */
    readonly attributeGroup: string;
}
/**
 * Associates a resource with an application.
 *
 * Both the resource and the application can be specified either by ID or name.
 *
 * @cloudformationResource AWS::ServiceCatalogAppRegistry::ResourceAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html
 */
export declare class CfnResourceAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourceAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourceAssociation;
    /**
     * The Amazon resource name (ARN) that specifies the application.
     *
     * @cloudformationAttribute ApplicationArn
     */
    readonly attrApplicationArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The Amazon resource name (ARN) that specifies the resource.
     *
     * @cloudformationAttribute ResourceArn
     */
    readonly attrResourceArn: string;
    /**
     * The name or ID of the application.
     */
    application: string;
    /**
     * The name or ID of the resource of which the application will be associated.
     */
    resource: string;
    /**
     * The type of resource of which the application will be associated.
     */
    resourceType: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourceAssociationProps);
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
 * Properties for defining a `CfnResourceAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html
 */
export interface CfnResourceAssociationProps {
    /**
     * The name or ID of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html#cfn-servicecatalogappregistry-resourceassociation-application
     */
    readonly application: string;
    /**
     * The name or ID of the resource of which the application will be associated.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html#cfn-servicecatalogappregistry-resourceassociation-resource
     */
    readonly resource: string;
    /**
     * The type of resource of which the application will be associated.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html#cfn-servicecatalogappregistry-resourceassociation-resourcetype
     */
    readonly resourceType: string;
}
