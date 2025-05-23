import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates an Amazon Q Business application.
 *
 * > There are new tiers for Amazon Q Business. Not all features in Amazon Q Business Pro are also available in Amazon Q Business Lite. For information on what's included in Amazon Q Business Lite and what's included in Amazon Q Business Pro, see [Amazon Q Business tiers](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/tiers.html#user-sub-tiers) . You must use the Amazon Q Business console to assign subscription tiers to users.
 * >
 * > An Amazon Q Apps service linked role will be created if it's absent in the AWS account when `QAppsConfiguration` is enabled in the request. For more information, see [Using service-linked roles for Q Apps](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/using-service-linked-roles-qapps.html) .
 * >
 * > When you create an application, Amazon Q Business may securely transmit data for processing from your selected AWS region, but within your geography. For more information, see [Cross region inference in Amazon Q Business](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/cross-region-inference.html) .
 *
 * @cloudformationResource AWS::QBusiness::Application
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html
 */
export declare class CfnApplication extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
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
     * The Amazon Resource Name (ARN) of the Amazon Q Business application.
     *
     * @cloudformationAttribute ApplicationArn
     */
    readonly attrApplicationArn: string;
    /**
     * The identifier for the Amazon Q Business application.
     *
     * @cloudformationAttribute ApplicationId
     */
    readonly attrApplicationId: string;
    /**
     * The Unix timestamp when the Amazon Q Business application was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS IAM Identity Center instance attached to your Amazon Q Business application.
     *
     * @cloudformationAttribute IdentityCenterApplicationArn
     */
    readonly attrIdentityCenterApplicationArn: string;
    /**
     * The status of the Amazon Q Business application. The application is ready to use when the status is `ACTIVE` .
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The Unix timestamp when the Amazon Q Business application was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * Configuration information for the file upload during chat feature.
     */
    attachmentsConfiguration?: CfnApplication.AttachmentsConfigurationProperty | cdk.IResolvable;
    /**
     * Subscription configuration information for an Amazon Q Business application using IAM identity federation for user management.
     */
    autoSubscriptionConfiguration?: CfnApplication.AutoSubscriptionConfigurationProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The OIDC client ID for a Amazon Q Business application.
     */
    clientIdsForOidc?: Array<string>;
    /**
     * A description for the Amazon Q Business application.
     */
    description?: string;
    /**
     * The name of the Amazon Q Business application.
     */
    displayName: string;
    /**
     * Provides the identifier of the AWS KMS key used to encrypt data indexed by Amazon Q Business.
     */
    encryptionConfiguration?: CfnApplication.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of an identity provider being used by an Amazon Q Business application.
     */
    iamIdentityProviderArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM Identity Center instance you are either creating for—or connecting to—your Amazon Q Business application.
     */
    identityCenterInstanceArn?: string;
    /**
     * The authentication type being used by a Amazon Q Business application.
     */
    identityType?: string;
    /**
     * Configuration information about chat response personalization.
     */
    personalizationConfiguration?: cdk.IResolvable | CfnApplication.PersonalizationConfigurationProperty;
    /**
     * Configuration information about Amazon Q Apps.
     */
    qAppsConfiguration?: cdk.IResolvable | CfnApplication.QAppsConfigurationProperty;
    /**
     * The Amazon QuickSight configuration for an Amazon Q Business application that uses QuickSight as the identity provider.
     */
    quickSightConfiguration?: cdk.IResolvable | CfnApplication.QuickSightConfigurationProperty;
    /**
     * The Amazon Resource Name (ARN) of an IAM role with permissions to access your Amazon CloudWatch logs and metrics.
     */
    roleArn?: string;
    /**
     * A list of key-value pairs that identify or categorize your Amazon Q Business application.
     */
    tags?: Array<cdk.CfnTag>;
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
export declare namespace CfnApplication {
    /**
     * Configuration information for the file upload during chat feature.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-attachmentsconfiguration.html
     */
    interface AttachmentsConfigurationProperty {
        /**
         * Status information about whether file upload functionality is activated or deactivated for your end user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-attachmentsconfiguration.html#cfn-qbusiness-application-attachmentsconfiguration-attachmentscontrolmode
         */
        readonly attachmentsControlMode: string;
    }
    /**
     * Subscription configuration information for an Amazon Q Business application using IAM identity federation for user management.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-autosubscriptionconfiguration.html
     */
    interface AutoSubscriptionConfigurationProperty {
        /**
         * Describes whether automatic subscriptions are enabled for an Amazon Q Business application using IAM identity federation for user management.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-autosubscriptionconfiguration.html#cfn-qbusiness-application-autosubscriptionconfiguration-autosubscribe
         */
        readonly autoSubscribe: string;
        /**
         * Describes the default subscription type assigned to an Amazon Q Business application using IAM identity federation for user management.
         *
         * If the value for `autoSubscribe` is set to `ENABLED` you must select a value for this field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-autosubscriptionconfiguration.html#cfn-qbusiness-application-autosubscriptionconfiguration-defaultsubscriptiontype
         */
        readonly defaultSubscriptionType?: string;
    }
    /**
     * Provides the identifier of the AWS KMS key used to encrypt data indexed by Amazon Q Business.
     *
     * Amazon Q Business doesn't support asymmetric keys.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-encryptionconfiguration.html
     */
    interface EncryptionConfigurationProperty {
        /**
         * The identifier of the AWS KMS key.
         *
         * Amazon Q Business doesn't support asymmetric keys.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-encryptionconfiguration.html#cfn-qbusiness-application-encryptionconfiguration-kmskeyid
         */
        readonly kmsKeyId?: string;
    }
    /**
     * Configuration information about chat response personalization.
     *
     * For more information, see [Personalizing chat responses](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/personalizing-chat-responses.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-personalizationconfiguration.html
     */
    interface PersonalizationConfigurationProperty {
        /**
         * An option to allow Amazon Q Business to customize chat responses using user specific metadata—specifically, location and job information—in your IAM Identity Center instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-personalizationconfiguration.html#cfn-qbusiness-application-personalizationconfiguration-personalizationcontrolmode
         */
        readonly personalizationControlMode: string;
    }
    /**
     * Configuration information about Amazon Q Apps.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-qappsconfiguration.html
     */
    interface QAppsConfigurationProperty {
        /**
         * Status information about whether end users can create and use Amazon Q Apps in the web experience.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-qappsconfiguration.html#cfn-qbusiness-application-qappsconfiguration-qappscontrolmode
         */
        readonly qAppsControlMode: string;
    }
    /**
     * The Amazon QuickSight configuration for an Amazon Q Business application that uses QuickSight as the identity provider.
     *
     * For more information, see [Creating an Amazon QuickSight integrated application](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/create-quicksight-integrated-application.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-quicksightconfiguration.html
     */
    interface QuickSightConfigurationProperty {
        /**
         * The Amazon QuickSight namespace that is used as the identity provider.
         *
         * For more information about QuickSight namespaces, see [Namespace operations](https://docs.aws.amazon.com/quicksight/latest/developerguide/namespace-operations.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-quicksightconfiguration.html#cfn-qbusiness-application-quicksightconfiguration-clientnamespace
         */
        readonly clientNamespace: string;
    }
}
/**
 * Properties for defining a `CfnApplication`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html
 */
export interface CfnApplicationProps {
    /**
     * Configuration information for the file upload during chat feature.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-attachmentsconfiguration
     */
    readonly attachmentsConfiguration?: CfnApplication.AttachmentsConfigurationProperty | cdk.IResolvable;
    /**
     * Subscription configuration information for an Amazon Q Business application using IAM identity federation for user management.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-autosubscriptionconfiguration
     */
    readonly autoSubscriptionConfiguration?: CfnApplication.AutoSubscriptionConfigurationProperty | cdk.IResolvable;
    /**
     * The OIDC client ID for a Amazon Q Business application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-clientidsforoidc
     */
    readonly clientIdsForOidc?: Array<string>;
    /**
     * A description for the Amazon Q Business application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-description
     */
    readonly description?: string;
    /**
     * The name of the Amazon Q Business application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-displayname
     */
    readonly displayName: string;
    /**
     * Provides the identifier of the AWS KMS key used to encrypt data indexed by Amazon Q Business.
     *
     * Amazon Q Business doesn't support asymmetric keys.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-encryptionconfiguration
     */
    readonly encryptionConfiguration?: CfnApplication.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of an identity provider being used by an Amazon Q Business application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-iamidentityproviderarn
     */
    readonly iamIdentityProviderArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM Identity Center instance you are either creating for—or connecting to—your Amazon Q Business application.
     *
     * *Required* : `Yes`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-identitycenterinstancearn
     */
    readonly identityCenterInstanceArn?: string;
    /**
     * The authentication type being used by a Amazon Q Business application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-identitytype
     */
    readonly identityType?: string;
    /**
     * Configuration information about chat response personalization.
     *
     * For more information, see [Personalizing chat responses](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/personalizing-chat-responses.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-personalizationconfiguration
     */
    readonly personalizationConfiguration?: cdk.IResolvable | CfnApplication.PersonalizationConfigurationProperty;
    /**
     * Configuration information about Amazon Q Apps.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-qappsconfiguration
     */
    readonly qAppsConfiguration?: cdk.IResolvable | CfnApplication.QAppsConfigurationProperty;
    /**
     * The Amazon QuickSight configuration for an Amazon Q Business application that uses QuickSight as the identity provider.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-quicksightconfiguration
     */
    readonly quickSightConfiguration?: cdk.IResolvable | CfnApplication.QuickSightConfigurationProperty;
    /**
     * The Amazon Resource Name (ARN) of an IAM role with permissions to access your Amazon CloudWatch logs and metrics.
     *
     * If this property is not specified, Amazon Q Business will create a [service linked role (SLR)](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/using-service-linked-roles.html#slr-permissions) and use it as the application's role.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-rolearn
     */
    readonly roleArn?: string;
    /**
     * A list of key-value pairs that identify or categorize your Amazon Q Business application.
     *
     * You can also use tags to help control access to the application. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a new data accessor for an ISV to access data from a Amazon Q Business application.
 *
 * The data accessor is an entity that represents the ISV's access to the Amazon Q Business application's data. It includes the IAM role ARN for the ISV, a friendly name, and a set of action configurations that define the specific actions the ISV is allowed to perform and any associated data filters. When the data accessor is created, an IAM Identity Center application is also created to manage the ISV's identity and authentication for accessing the Amazon Q Business application.
 *
 * @cloudformationResource AWS::QBusiness::DataAccessor
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html
 */
export declare class CfnDataAccessor extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataAccessor from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataAccessor;
    /**
     * The timestamp when the data accessor was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Amazon Resource Name (ARN) of the data accessor.
     *
     * @cloudformationAttribute DataAccessorArn
     */
    readonly attrDataAccessorArn: string;
    /**
     * The unique identifier of the data accessor.
     *
     * @cloudformationAttribute DataAccessorId
     */
    readonly attrDataAccessorId: string;
    /**
     * The Amazon Resource Name (ARN) of the associated IAM Identity Center application.
     *
     * @cloudformationAttribute IdcApplicationArn
     */
    readonly attrIdcApplicationArn: string;
    /**
     * The timestamp when the data accessor was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * A list of action configurations specifying the allowed actions and any associated filters.
     */
    actionConfigurations: Array<CfnDataAccessor.ActionConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The unique identifier of the Amazon Q Business application.
     */
    applicationId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The friendly name of the data accessor.
     */
    displayName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role for the ISV associated with this data accessor.
     */
    principal: string;
    /**
     * The tags to associate with the data accessor.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDataAccessorProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataAccessor {
    /**
     * Specifies an allowed action and its associated filter configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-actionconfiguration.html
     */
    interface ActionConfigurationProperty {
        /**
         * The Amazon Q Business action that is allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-actionconfiguration.html#cfn-qbusiness-dataaccessor-actionconfiguration-action
         */
        readonly action: string;
        /**
         * The filter configuration for the action, if any.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-actionconfiguration.html#cfn-qbusiness-dataaccessor-actionconfiguration-filterconfiguration
         */
        readonly filterConfiguration?: CfnDataAccessor.ActionFilterConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Specifies filters to apply to an allowed action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-actionfilterconfiguration.html
     */
    interface ActionFilterConfigurationProperty {
        /**
         * Enables filtering of responses based on document attributes or metadata fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-actionfilterconfiguration.html#cfn-qbusiness-dataaccessor-actionfilterconfiguration-documentattributefilter
         */
        readonly documentAttributeFilter: CfnDataAccessor.AttributeFilterProperty | cdk.IResolvable;
    }
    /**
     * Enables filtering of responses based on document attributes or metadata fields.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-attributefilter.html
     */
    interface AttributeFilterProperty {
        /**
         * Performs a logical `AND` operation on all supplied filters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-attributefilter.html#cfn-qbusiness-dataaccessor-attributefilter-andallfilters
         */
        readonly andAllFilters?: Array<CfnDataAccessor.AttributeFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Returns `true` when a document contains all the specified document attributes or metadata fields.
         *
         * Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html) : `stringListValue` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-attributefilter.html#cfn-qbusiness-dataaccessor-attributefilter-containsall
         */
        readonly containsAll?: CfnDataAccessor.DocumentAttributeProperty | cdk.IResolvable;
        /**
         * Returns `true` when a document contains any of the specified document attributes or metadata fields.
         *
         * Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html) : `stringListValue` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-attributefilter.html#cfn-qbusiness-dataaccessor-attributefilter-containsany
         */
        readonly containsAny?: CfnDataAccessor.DocumentAttributeProperty | cdk.IResolvable;
        /**
         * Performs an equals operation on two document attributes or metadata fields.
         *
         * Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html) : `dateValue` , `longValue` , `stringListValue` and `stringValue` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-attributefilter.html#cfn-qbusiness-dataaccessor-attributefilter-equalsto
         */
        readonly equalsTo?: CfnDataAccessor.DocumentAttributeProperty | cdk.IResolvable;
        /**
         * Performs a greater than operation on two document attributes or metadata fields.
         *
         * Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html) : `dateValue` and `longValue` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-attributefilter.html#cfn-qbusiness-dataaccessor-attributefilter-greaterthan
         */
        readonly greaterThan?: CfnDataAccessor.DocumentAttributeProperty | cdk.IResolvable;
        /**
         * Performs a greater or equals than operation on two document attributes or metadata fields.
         *
         * Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html) : `dateValue` and `longValue` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-attributefilter.html#cfn-qbusiness-dataaccessor-attributefilter-greaterthanorequals
         */
        readonly greaterThanOrEquals?: CfnDataAccessor.DocumentAttributeProperty | cdk.IResolvable;
        /**
         * Performs a less than operation on two document attributes or metadata fields.
         *
         * Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html) : `dateValue` and `longValue` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-attributefilter.html#cfn-qbusiness-dataaccessor-attributefilter-lessthan
         */
        readonly lessThan?: CfnDataAccessor.DocumentAttributeProperty | cdk.IResolvable;
        /**
         * Performs a less than or equals operation on two document attributes or metadata fields.Supported for the following [document attribute value type](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html) : `dateValue` and `longValue` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-attributefilter.html#cfn-qbusiness-dataaccessor-attributefilter-lessthanorequals
         */
        readonly lessThanOrEquals?: CfnDataAccessor.DocumentAttributeProperty | cdk.IResolvable;
        /**
         * Performs a logical `NOT` operation on all supplied filters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-attributefilter.html#cfn-qbusiness-dataaccessor-attributefilter-notfilter
         */
        readonly notFilter?: CfnDataAccessor.AttributeFilterProperty | cdk.IResolvable;
        /**
         * Performs a logical `OR` operation on all supplied filters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-attributefilter.html#cfn-qbusiness-dataaccessor-attributefilter-orallfilters
         */
        readonly orAllFilters?: Array<CfnDataAccessor.AttributeFilterProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * A document attribute or metadata field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-documentattribute.html
     */
    interface DocumentAttributeProperty {
        /**
         * The identifier for the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-documentattribute.html#cfn-qbusiness-dataaccessor-documentattribute-name
         */
        readonly name: string;
        /**
         * The value of the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-documentattribute.html#cfn-qbusiness-dataaccessor-documentattribute-value
         */
        readonly value: CfnDataAccessor.DocumentAttributeValueProperty | cdk.IResolvable;
    }
    /**
     * The value of a document attribute.
     *
     * You can only provide one value for a document attribute.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-documentattributevalue.html
     */
    interface DocumentAttributeValueProperty {
        /**
         * A date expressed as an ISO 8601 string.
         *
         * It's important for the time zone to be included in the ISO 8601 date-time format. For example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012 at 12:30PM (plus 10 seconds) in Central European Time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-documentattributevalue.html#cfn-qbusiness-dataaccessor-documentattributevalue-datevalue
         */
        readonly dateValue?: string;
        /**
         * A long integer value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-documentattributevalue.html#cfn-qbusiness-dataaccessor-documentattributevalue-longvalue
         */
        readonly longValue?: number;
        /**
         * A list of strings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-documentattributevalue.html#cfn-qbusiness-dataaccessor-documentattributevalue-stringlistvalue
         */
        readonly stringListValue?: Array<string>;
        /**
         * A string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-documentattributevalue.html#cfn-qbusiness-dataaccessor-documentattributevalue-stringvalue
         */
        readonly stringValue?: string;
    }
}
/**
 * Properties for defining a `CfnDataAccessor`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html
 */
export interface CfnDataAccessorProps {
    /**
     * A list of action configurations specifying the allowed actions and any associated filters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-actionconfigurations
     */
    readonly actionConfigurations: Array<CfnDataAccessor.ActionConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The unique identifier of the Amazon Q Business application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-applicationid
     */
    readonly applicationId: string;
    /**
     * The friendly name of the data accessor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-displayname
     */
    readonly displayName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role for the ISV associated with this data accessor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-principal
     */
    readonly principal: string;
    /**
     * The tags to associate with the data accessor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a data source connector for an Amazon Q Business application.
 *
 * `CreateDataSource` is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.
 *
 * @cloudformationResource AWS::QBusiness::DataSource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html
 */
export declare class CfnDataSource extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataSource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataSource;
    /**
     * The Unix timestamp when the Amazon Q Business data source was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Amazon Resource Name (ARN) of a data source in an Amazon Q Business application.
     *
     * @cloudformationAttribute DataSourceArn
     */
    readonly attrDataSourceArn: string;
    /**
     * The identifier of the Amazon Q Business data source.
     *
     * @cloudformationAttribute DataSourceId
     */
    readonly attrDataSourceId: string;
    /**
     * The status of the Amazon Q Business data source.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The type of the Amazon Q Business data source.
     *
     * @cloudformationAttribute Type
     */
    readonly attrType: string;
    /**
     * The Unix timestamp when the Amazon Q Business data source was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The identifier of the Amazon Q Business application the data source will be attached to.
     */
    applicationId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Use this property to specify a JSON or YAML schema with configuration properties specific to your data source connector to connect your data source repository to Amazon Q Business .
     */
    configuration: any | cdk.IResolvable;
    /**
     * A description for the data source connector.
     */
    description?: string;
    /**
     * The name of the Amazon Q Business data source.
     */
    displayName: string;
    /**
     * Provides the configuration information for altering document metadata and content during the document ingestion process.
     */
    documentEnrichmentConfiguration?: CfnDataSource.DocumentEnrichmentConfigurationProperty | cdk.IResolvable;
    /**
     * The identifier of the index the data source is attached to.
     */
    indexId: string;
    /**
     * The configuration for extracting information from media in documents.
     */
    mediaExtractionConfiguration?: cdk.IResolvable | CfnDataSource.MediaExtractionConfigurationProperty;
    /**
     * The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources.
     */
    roleArn?: string;
    /**
     * Sets the frequency for Amazon Q Business to check the documents in your data source repository and update your index.
     */
    syncSchedule?: string;
    /**
     * A list of key-value pairs that identify or categorize the data source connector.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * Configuration information for an Amazon VPC (Virtual Private Cloud) to connect to your data source.
     */
    vpcConfiguration?: CfnDataSource.DataSourceVpcConfigurationProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDataSourceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataSource {
    /**
     * Provides the configuration information for altering document metadata and content during the document ingestion process.
     *
     * For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentenrichmentconfiguration.html
     */
    interface DocumentEnrichmentConfigurationProperty {
        /**
         * Configuration information to alter document attributes or metadata fields and content when ingesting documents into Amazon Q Business.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentenrichmentconfiguration.html#cfn-qbusiness-datasource-documentenrichmentconfiguration-inlineconfigurations
         */
        readonly inlineConfigurations?: Array<CfnDataSource.InlineDocumentEnrichmentConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Configuration information for invoking a Lambda function in AWS Lambda on the structured documents with their metadata and text extracted.
         *
         * You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see [Using Lambda functions](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/cde-lambda-operations.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentenrichmentconfiguration.html#cfn-qbusiness-datasource-documentenrichmentconfiguration-postextractionhookconfiguration
         */
        readonly postExtractionHookConfiguration?: CfnDataSource.HookConfigurationProperty | cdk.IResolvable;
        /**
         * Configuration information for invoking a Lambda function in AWS Lambda on the original or raw documents before extracting their metadata and text.
         *
         * You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see [Using Lambda functions](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/cde-lambda-operations.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentenrichmentconfiguration.html#cfn-qbusiness-datasource-documentenrichmentconfiguration-preextractionhookconfiguration
         */
        readonly preExtractionHookConfiguration?: CfnDataSource.HookConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Provides the configuration information for applying basic logic to alter document metadata and content when ingesting documents into Amazon Q Business.
     *
     * To apply advanced logic, to go beyond what you can do with basic logic, see [`HookConfiguration`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_HookConfiguration.html) .
     *
     * For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-inlinedocumentenrichmentconfiguration.html
     */
    interface InlineDocumentEnrichmentConfigurationProperty {
        /**
         * Configuration of the condition used for the target document attribute or metadata field when ingesting documents into Amazon Q Business .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-inlinedocumentenrichmentconfiguration.html#cfn-qbusiness-datasource-inlinedocumentenrichmentconfiguration-condition
         */
        readonly condition?: CfnDataSource.DocumentAttributeConditionProperty | cdk.IResolvable;
        /**
         * `TRUE` to delete content if the condition used for the target attribute is met.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-inlinedocumentenrichmentconfiguration.html#cfn-qbusiness-datasource-inlinedocumentenrichmentconfiguration-documentcontentoperator
         */
        readonly documentContentOperator?: string;
        /**
         * Configuration of the target document attribute or metadata field when ingesting documents into Amazon Q Business .
         *
         * You can also include a value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-inlinedocumentenrichmentconfiguration.html#cfn-qbusiness-datasource-inlinedocumentenrichmentconfiguration-target
         */
        readonly target?: CfnDataSource.DocumentAttributeTargetProperty | cdk.IResolvable;
    }
    /**
     * The condition used for the target document attribute or metadata field when ingesting documents into Amazon Q Business.
     *
     * You use this with [`DocumentAttributeTarget`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html) to apply the condition.
     *
     * For example, you can create the 'Department' target field and have it prefill department names associated with the documents based on information in the 'Source_URI' field. Set the condition that if the 'Source_URI' field contains 'financial' in its URI value, then prefill the target field 'Department' with the target value 'Finance' for the document.
     *
     * Amazon Q Business can't create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using `DocumentAttributeTarget` . Amazon Q Business then will map your newly created metadata field to your index field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributecondition.html
     */
    interface DocumentAttributeConditionProperty {
        /**
         * The identifier of the document attribute used for the condition.
         *
         * For example, 'Source_URI' could be an identifier for the attribute or metadata field that contains source URIs associated with the documents.
         *
         * Amazon Q Business currently doesn't support `_document_body` as an attribute key used for the condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributecondition.html#cfn-qbusiness-datasource-documentattributecondition-key
         */
        readonly key: string;
        /**
         * The identifier of the document attribute used for the condition.
         *
         * For example, 'Source_URI' could be an identifier for the attribute or metadata field that contains source URIs associated with the documents.
         *
         * Amazon Q Business currently does not support `_document_body` as an attribute key used for the condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributecondition.html#cfn-qbusiness-datasource-documentattributecondition-operator
         */
        readonly operator: string;
        /**
         * The value of a document attribute.
         *
         * You can only provide one value for a document attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributecondition.html#cfn-qbusiness-datasource-documentattributecondition-value
         */
        readonly value?: CfnDataSource.DocumentAttributeValueProperty | cdk.IResolvable;
    }
    /**
     * The value of a document attribute.
     *
     * You can only provide one value for a document attribute.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributevalue.html
     */
    interface DocumentAttributeValueProperty {
        /**
         * A date expressed as an ISO 8601 string.
         *
         * It's important for the time zone to be included in the ISO 8601 date-time format. For example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012 at 12:30PM (plus 10 seconds) in Central European Time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributevalue.html#cfn-qbusiness-datasource-documentattributevalue-datevalue
         */
        readonly dateValue?: string;
        /**
         * A long integer value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributevalue.html#cfn-qbusiness-datasource-documentattributevalue-longvalue
         */
        readonly longValue?: number;
        /**
         * A list of strings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributevalue.html#cfn-qbusiness-datasource-documentattributevalue-stringlistvalue
         */
        readonly stringListValue?: Array<string>;
        /**
         * A string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributevalue.html#cfn-qbusiness-datasource-documentattributevalue-stringvalue
         */
        readonly stringValue?: string;
    }
    /**
     * The target document attribute or metadata field you want to alter when ingesting documents into Amazon Q Business.
     *
     * For example, you can delete all customer identification numbers associated with the documents, stored in the document metadata field called 'Customer_ID' by setting the target key as 'Customer_ID' and the deletion flag to `TRUE` . This removes all customer ID values in the field 'Customer_ID'. This would scrub personally identifiable information from each document's metadata.
     *
     * Amazon Q Business can't create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using [`DocumentAttributeTarget`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html) . Amazon Q Business will then map your newly created document attribute to your index field.
     *
     * You can also use this with [`DocumentAttributeCondition`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeCondition.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributetarget.html
     */
    interface DocumentAttributeTargetProperty {
        /**
         * `TRUE` to delete the existing target value for your specified target attribute key.
         *
         * You cannot create a target value and set this to `TRUE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributetarget.html#cfn-qbusiness-datasource-documentattributetarget-attributevalueoperator
         */
        readonly attributeValueOperator?: string;
        /**
         * The identifier of the target document attribute or metadata field.
         *
         * For example, 'Department' could be an identifier for the target attribute or metadata field that includes the department names associated with the documents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributetarget.html#cfn-qbusiness-datasource-documentattributetarget-key
         */
        readonly key: string;
        /**
         * The value of a document attribute.
         *
         * You can only provide one value for a document attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributetarget.html#cfn-qbusiness-datasource-documentattributetarget-value
         */
        readonly value?: CfnDataSource.DocumentAttributeValueProperty | cdk.IResolvable;
    }
    /**
     * Provides the configuration information for invoking a Lambda function in AWS Lambda to alter document metadata and content when ingesting documents into Amazon Q Business.
     *
     * You can configure your Lambda function using the `PreExtractionHookConfiguration` parameter if you want to apply advanced alterations on the original or raw documents.
     *
     * If you want to apply advanced alterations on the Amazon Q Business structured documents, you must configure your Lambda function using `PostExtractionHookConfiguration` .
     *
     * You can only invoke one Lambda function. However, this function can invoke other functions it requires.
     *
     * For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-hookconfiguration.html
     */
    interface HookConfigurationProperty {
        /**
         * The condition used for when a Lambda function should be invoked.
         *
         * For example, you can specify a condition that if there are empty date-time values, then Amazon Q Business should invoke a function that inserts the current date-time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-hookconfiguration.html#cfn-qbusiness-datasource-hookconfiguration-invocationcondition
         */
        readonly invocationCondition?: CfnDataSource.DocumentAttributeConditionProperty | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of a role with permission to run a Lambda function during ingestion.
         *
         * For more information, see [IAM roles for Custom Document Enrichment (CDE)](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/iam-roles.html#cde-iam-role) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-hookconfiguration.html#cfn-qbusiness-datasource-hookconfiguration-lambdaarn
         */
        readonly lambdaArn?: string;
        /**
         * The Amazon Resource Name (ARN) of a role with permission to run `PreExtractionHookConfiguration` and `PostExtractionHookConfiguration` for altering document metadata and content during the document ingestion process.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-hookconfiguration.html#cfn-qbusiness-datasource-hookconfiguration-rolearn
         */
        readonly roleArn?: string;
        /**
         * Stores the original, raw documents or the structured, parsed documents before and after altering them.
         *
         * For more information, see [Data contracts for Lambda functions](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/cde-lambda-operations.html#cde-lambda-operations-data-contracts) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-hookconfiguration.html#cfn-qbusiness-datasource-hookconfiguration-s3bucketname
         */
        readonly s3BucketName?: string;
    }
    /**
     * The configuration for extracting information from media in documents.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-mediaextractionconfiguration.html
     */
    interface MediaExtractionConfigurationProperty {
        /**
         * The configuration for extracting semantic meaning from images in documents.
         *
         * For more information, see [Extracting semantic meaning from images and visuals](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/extracting-meaning-from-images.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-mediaextractionconfiguration.html#cfn-qbusiness-datasource-mediaextractionconfiguration-imageextractionconfiguration
         */
        readonly imageExtractionConfiguration?: CfnDataSource.ImageExtractionConfigurationProperty | cdk.IResolvable;
    }
    /**
     * The configuration for extracting semantic meaning from images in documents.
     *
     * For more information, see [Extracting semantic meaning from images and visuals](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/extracting-meaning-from-images.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-imageextractionconfiguration.html
     */
    interface ImageExtractionConfigurationProperty {
        /**
         * Specify whether to extract semantic meaning from images and visuals from documents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-imageextractionconfiguration.html#cfn-qbusiness-datasource-imageextractionconfiguration-imageextractionstatus
         */
        readonly imageExtractionStatus: string;
    }
    /**
     * Provides configuration information needed to connect to an Amazon VPC (Virtual Private Cloud).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-datasourcevpcconfiguration.html
     */
    interface DataSourceVpcConfigurationProperty {
        /**
         * A list of identifiers of security groups within your Amazon VPC.
         *
         * The security groups should enable Amazon Q Business to connect to the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-datasourcevpcconfiguration.html#cfn-qbusiness-datasource-datasourcevpcconfiguration-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * A list of identifiers for subnets within your Amazon VPC.
         *
         * The subnets should be able to connect to each other in the VPC, and they should have outgoing access to the Internet through a NAT device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-datasourcevpcconfiguration.html#cfn-qbusiness-datasource-datasourcevpcconfiguration-subnetids
         */
        readonly subnetIds: Array<string>;
    }
}
/**
 * Properties for defining a `CfnDataSource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html
 */
export interface CfnDataSourceProps {
    /**
     * The identifier of the Amazon Q Business application the data source will be attached to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-applicationid
     */
    readonly applicationId: string;
    /**
     * Use this property to specify a JSON or YAML schema with configuration properties specific to your data source connector to connect your data source repository to Amazon Q Business .
     *
     * You must use the JSON or YAML schema provided by Amazon Q .
     *
     * The following links have the configuration properties and schemas for AWS CloudFormation for the following connectors:
     *
     * - [Amazon Simple Storage Service](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/s3-cfn.html)
     * - [Amazon Q Web Crawler](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/web-crawler-cfn.html)
     *
     * Similarly, you can find configuration templates and properties for your specific data source using the following steps:
     *
     * - Navigate to the [Supported connectors](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/connectors-list.html) page in the Amazon Q Business User Guide, and select the data source connector of your choice.
     * - Then, from that specific data source connector's page, choose the topic containing *Using AWS CloudFormation* to find the schemas for your data source connector, including configuration parameter descriptions and examples.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-configuration
     */
    readonly configuration: any | cdk.IResolvable;
    /**
     * A description for the data source connector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-description
     */
    readonly description?: string;
    /**
     * The name of the Amazon Q Business data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-displayname
     */
    readonly displayName: string;
    /**
     * Provides the configuration information for altering document metadata and content during the document ingestion process.
     *
     * For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-documentenrichmentconfiguration
     */
    readonly documentEnrichmentConfiguration?: CfnDataSource.DocumentEnrichmentConfigurationProperty | cdk.IResolvable;
    /**
     * The identifier of the index the data source is attached to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-indexid
     */
    readonly indexId: string;
    /**
     * The configuration for extracting information from media in documents.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-mediaextractionconfiguration
     */
    readonly mediaExtractionConfiguration?: cdk.IResolvable | CfnDataSource.MediaExtractionConfigurationProperty;
    /**
     * The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-rolearn
     */
    readonly roleArn?: string;
    /**
     * Sets the frequency for Amazon Q Business to check the documents in your data source repository and update your index.
     *
     * If you don't set a schedule, Amazon Q Business won't periodically update the index.
     *
     * Specify a `cron-` format schedule string or an empty string to indicate that the index is updated on demand. You can't specify the `Schedule` parameter when the `Type` parameter is set to `CUSTOM` . If you do, you receive a `ValidationException` exception.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-syncschedule
     */
    readonly syncSchedule?: string;
    /**
     * A list of key-value pairs that identify or categorize the data source connector.
     *
     * You can also use tags to help control access to the data source connector. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Configuration information for an Amazon VPC (Virtual Private Cloud) to connect to your data source.
     *
     * For more information, see [Using Amazon VPC with Amazon Q Business connectors](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/connector-vpc.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-vpcconfiguration
     */
    readonly vpcConfiguration?: CfnDataSource.DataSourceVpcConfigurationProperty | cdk.IResolvable;
}
/**
 * Creates an Amazon Q Business index.
 *
 * To determine if index creation has completed, check the `Status` field returned from a call to `DescribeIndex` . The `Status` field is set to `ACTIVE` when the index is ready to use.
 *
 * Once the index is active, you can index your documents using the [`BatchPutDocument`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_BatchPutDocument.html) API or the [`CreateDataSource`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_CreateDataSource.html) API.
 *
 * @cloudformationResource AWS::QBusiness::Index
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-index.html
 */
export declare class CfnIndex extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIndex from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIndex;
    /**
     * The Unix timestamp when the index was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Amazon Resource Name (ARN) of an Amazon Q Business index.
     *
     * @cloudformationAttribute IndexArn
     */
    readonly attrIndexArn: string;
    /**
     * The identifier for the index.
     *
     * @cloudformationAttribute IndexId
     */
    readonly attrIndexId: string;
    /**
     * @cloudformationAttribute IndexStatistics
     */
    readonly attrIndexStatistics: cdk.IResolvable;
    /**
     * The current status of the index. When the status is `ACTIVE` , the index is ready.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The Unix timestamp when the index was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The identifier of the Amazon Q Business application using the index.
     */
    applicationId: string;
    /**
     * The capacity units you want to provision for your index.
     */
    capacityConfiguration?: CfnIndex.IndexCapacityConfigurationProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A description for the Amazon Q Business index.
     */
    description?: string;
    /**
     * The name of the index.
     */
    displayName: string;
    /**
     * Configuration information for document attributes.
     */
    documentAttributeConfigurations?: Array<CfnIndex.DocumentAttributeConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A list of key-value pairs that identify or categorize the index.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The index type that's suitable for your needs.
     */
    type?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIndexProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnIndex {
    /**
     * Provides information about index capacity configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-indexcapacityconfiguration.html
     */
    interface IndexCapacityConfigurationProperty {
        /**
         * The number of storage units configured for an Amazon Q Business index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-indexcapacityconfiguration.html#cfn-qbusiness-index-indexcapacityconfiguration-units
         */
        readonly units?: number;
    }
    /**
     * Configuration information for document attributes.
     *
     * Document attributes are metadata or fields associated with your documents. For example, the company department name associated with each document.
     *
     * For more information, see [Understanding document attributes](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/doc-attributes.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-documentattributeconfiguration.html
     */
    interface DocumentAttributeConfigurationProperty {
        /**
         * The name of the document attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-documentattributeconfiguration.html#cfn-qbusiness-index-documentattributeconfiguration-name
         */
        readonly name?: string;
        /**
         * Information about whether the document attribute can be used by an end user to search for information on their web experience.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-documentattributeconfiguration.html#cfn-qbusiness-index-documentattributeconfiguration-search
         */
        readonly search?: string;
        /**
         * The type of document attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-documentattributeconfiguration.html#cfn-qbusiness-index-documentattributeconfiguration-type
         */
        readonly type?: string;
    }
    /**
     * Provides information about the number of documents in an index.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-indexstatistics.html
     */
    interface IndexStatisticsProperty {
        /**
         * The number of documents indexed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-indexstatistics.html#cfn-qbusiness-index-indexstatistics-textdocumentstatistics
         */
        readonly textDocumentStatistics?: cdk.IResolvable | CfnIndex.TextDocumentStatisticsProperty;
    }
    /**
     * Provides information about text documents in an index.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-textdocumentstatistics.html
     */
    interface TextDocumentStatisticsProperty {
        /**
         * The total size, in bytes, of the indexed documents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-textdocumentstatistics.html#cfn-qbusiness-index-textdocumentstatistics-indexedtextbytes
         */
        readonly indexedTextBytes?: number;
        /**
         * The number of text documents indexed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-textdocumentstatistics.html#cfn-qbusiness-index-textdocumentstatistics-indexedtextdocumentcount
         */
        readonly indexedTextDocumentCount?: number;
    }
}
/**
 * Properties for defining a `CfnIndex`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-index.html
 */
export interface CfnIndexProps {
    /**
     * The identifier of the Amazon Q Business application using the index.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-index.html#cfn-qbusiness-index-applicationid
     */
    readonly applicationId: string;
    /**
     * The capacity units you want to provision for your index.
     *
     * You can add and remove capacity to fit your usage needs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-index.html#cfn-qbusiness-index-capacityconfiguration
     */
    readonly capacityConfiguration?: CfnIndex.IndexCapacityConfigurationProperty | cdk.IResolvable;
    /**
     * A description for the Amazon Q Business index.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-index.html#cfn-qbusiness-index-description
     */
    readonly description?: string;
    /**
     * The name of the index.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-index.html#cfn-qbusiness-index-displayname
     */
    readonly displayName: string;
    /**
     * Configuration information for document attributes.
     *
     * Document attributes are metadata or fields associated with your documents. For example, the company department name associated with each document.
     *
     * For more information, see [Understanding document attributes](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/doc-attributes.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-index.html#cfn-qbusiness-index-documentattributeconfigurations
     */
    readonly documentAttributeConfigurations?: Array<CfnIndex.DocumentAttributeConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A list of key-value pairs that identify or categorize the index.
     *
     * You can also use tags to help control access to the index. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-index.html#cfn-qbusiness-index-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The index type that's suitable for your needs.
     *
     * For more information on what's included in each type of index, see [Amazon Q Business tiers](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/tiers.html#index-tiers) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-index.html#cfn-qbusiness-index-type
     */
    readonly type?: string;
}
/**
 * Adds or updates a permission policy for a Amazon Q Business application, allowing cross-account access for an ISV.
 *
 * This operation creates a new policy statement for the specified Amazon Q Business application. The policy statement defines the IAM actions that the ISV is allowed to perform on the Amazon Q Business application's resources.
 *
 * @cloudformationResource AWS::QBusiness::Permission
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-permission.html
 */
export declare class CfnPermission extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPermission from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPermission;
    /**
     * The list of Amazon Q Business actions that the ISV is allowed to perform.
     */
    actions: Array<string>;
    /**
     * The unique identifier of the Amazon Q Business application.
     */
    applicationId: string;
    /**
     * Provides user and group information used for filtering documents to use for generating Amazon Q Business conversation responses.
     */
    principal: string;
    /**
     * A unique identifier for the policy statement.
     */
    statementId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPermissionProps);
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
 * Properties for defining a `CfnPermission`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-permission.html
 */
export interface CfnPermissionProps {
    /**
     * The list of Amazon Q Business actions that the ISV is allowed to perform.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-permission.html#cfn-qbusiness-permission-actions
     */
    readonly actions: Array<string>;
    /**
     * The unique identifier of the Amazon Q Business application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-permission.html#cfn-qbusiness-permission-applicationid
     */
    readonly applicationId: string;
    /**
     * Provides user and group information used for filtering documents to use for generating Amazon Q Business conversation responses.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-permission.html#cfn-qbusiness-permission-principal
     */
    readonly principal: string;
    /**
     * A unique identifier for the policy statement.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-permission.html#cfn-qbusiness-permission-statementid
     */
    readonly statementId: string;
}
/**
 * Information about an Amazon Q Business plugin and its configuration.
 *
 * @cloudformationResource AWS::QBusiness::Plugin
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-plugin.html
 */
export declare class CfnPlugin extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPlugin from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPlugin;
    /**
     * The current status of a plugin. A plugin is modified asynchronously.
     *
     * @cloudformationAttribute BuildStatus
     */
    readonly attrBuildStatus: string;
    /**
     * The timestamp for when the plugin was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Amazon Resource Name (ARN) of a plugin.
     *
     * @cloudformationAttribute PluginArn
     */
    readonly attrPluginArn: string;
    /**
     * The identifier of the plugin.
     *
     * @cloudformationAttribute PluginId
     */
    readonly attrPluginId: string;
    /**
     * The timestamp for when the plugin was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The identifier of the application that will contain the plugin.
     */
    applicationId?: string;
    /**
     * Authentication configuration information for an Amazon Q Business plugin.
     */
    authConfiguration: cdk.IResolvable | CfnPlugin.PluginAuthConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Configuration information required to create a custom plugin.
     */
    customPluginConfiguration?: CfnPlugin.CustomPluginConfigurationProperty | cdk.IResolvable;
    /**
     * The name of the plugin.
     */
    displayName: string;
    /**
     * The plugin server URL used for configuration.
     */
    serverUrl?: string;
    /**
     * The current status of the plugin.
     */
    state?: string;
    /**
     * A list of key-value pairs that identify or categorize the data source connector.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The type of the plugin.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPluginProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPlugin {
    /**
     * Authentication configuration information for an Amazon Q Business plugin.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-pluginauthconfiguration.html
     */
    interface PluginAuthConfigurationProperty {
        /**
         * Information about the basic authentication credentials used to configure a plugin.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-pluginauthconfiguration.html#cfn-qbusiness-plugin-pluginauthconfiguration-basicauthconfiguration
         */
        readonly basicAuthConfiguration?: CfnPlugin.BasicAuthConfigurationProperty | cdk.IResolvable;
        /**
         * Information about invoking a custom plugin without any authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-pluginauthconfiguration.html#cfn-qbusiness-plugin-pluginauthconfiguration-noauthconfiguration
         */
        readonly noAuthConfiguration?: any | cdk.IResolvable;
        /**
         * Information about the OAuth 2.0 authentication credential/token used to configure a plugin.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-pluginauthconfiguration.html#cfn-qbusiness-plugin-pluginauthconfiguration-oauth2clientcredentialconfiguration
         */
        readonly oAuth2ClientCredentialConfiguration?: cdk.IResolvable | CfnPlugin.OAuth2ClientCredentialConfigurationProperty;
    }
    /**
     * Information about the basic authentication credentials used to configure a plugin.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-basicauthconfiguration.html
     */
    interface BasicAuthConfigurationProperty {
        /**
         * The ARN of an IAM role used by Amazon Q Business to access the basic authentication credentials stored in a Secrets Manager secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-basicauthconfiguration.html#cfn-qbusiness-plugin-basicauthconfiguration-rolearn
         */
        readonly roleArn: string;
        /**
         * The ARN of the Secrets Manager secret that stores the basic authentication credentials used for plugin configuration..
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-basicauthconfiguration.html#cfn-qbusiness-plugin-basicauthconfiguration-secretarn
         */
        readonly secretArn: string;
    }
    /**
     * Information about the OAuth 2.0 authentication credential/token used to configure a plugin.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-oauth2clientcredentialconfiguration.html
     */
    interface OAuth2ClientCredentialConfigurationProperty {
        /**
         * The redirect URL required by the OAuth 2.0 protocol for Amazon Q Business to authenticate a plugin user through a third party authentication server.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-oauth2clientcredentialconfiguration.html#cfn-qbusiness-plugin-oauth2clientcredentialconfiguration-authorizationurl
         */
        readonly authorizationUrl?: string;
        /**
         * The ARN of an IAM role used by Amazon Q Business to access the OAuth 2.0 authentication credentials stored in a Secrets Manager secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-oauth2clientcredentialconfiguration.html#cfn-qbusiness-plugin-oauth2clientcredentialconfiguration-rolearn
         */
        readonly roleArn: string;
        /**
         * The ARN of the Secrets Manager secret that stores the OAuth 2.0 credentials/token used for plugin configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-oauth2clientcredentialconfiguration.html#cfn-qbusiness-plugin-oauth2clientcredentialconfiguration-secretarn
         */
        readonly secretArn: string;
        /**
         * The URL required by the OAuth 2.0 protocol to exchange an end user authorization code for an access token.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-oauth2clientcredentialconfiguration.html#cfn-qbusiness-plugin-oauth2clientcredentialconfiguration-tokenurl
         */
        readonly tokenUrl?: string;
    }
    /**
     * Configuration information required to create a custom plugin.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-custompluginconfiguration.html
     */
    interface CustomPluginConfigurationProperty {
        /**
         * Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-custompluginconfiguration.html#cfn-qbusiness-plugin-custompluginconfiguration-apischema
         */
        readonly apiSchema: CfnPlugin.APISchemaProperty | cdk.IResolvable;
        /**
         * The type of OpenAPI schema to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-custompluginconfiguration.html#cfn-qbusiness-plugin-custompluginconfiguration-apischematype
         */
        readonly apiSchemaType: string;
        /**
         * A description for your custom plugin configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-custompluginconfiguration.html#cfn-qbusiness-plugin-custompluginconfiguration-description
         */
        readonly description: string;
    }
    /**
     * Contains details about the OpenAPI schema for a custom plugin.
     *
     * For more information, see [custom plugin OpenAPI schemas](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/custom-plugin.html#plugins-api-schema) . You can either include the schema directly in the payload field or you can upload it to an S3 bucket and specify the S3 bucket location in the `s3` field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-apischema.html
     */
    interface APISchemaProperty {
        /**
         * The JSON or YAML-formatted payload defining the OpenAPI schema for a custom plugin.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-apischema.html#cfn-qbusiness-plugin-apischema-payload
         */
        readonly payload?: string;
        /**
         * Contains details about the S3 object containing the OpenAPI schema for a custom plugin.
         *
         * The schema could be in either JSON or YAML format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-apischema.html#cfn-qbusiness-plugin-apischema-s3
         */
        readonly s3?: cdk.IResolvable | CfnPlugin.S3Property;
    }
    /**
     * Information required for Amazon Q Business to find a specific file in an Amazon S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-s3.html
     */
    interface S3Property {
        /**
         * The name of the S3 bucket that contains the file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-s3.html#cfn-qbusiness-plugin-s3-bucket
         */
        readonly bucket: string;
        /**
         * The name of the file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-s3.html#cfn-qbusiness-plugin-s3-key
         */
        readonly key: string;
    }
}
/**
 * Properties for defining a `CfnPlugin`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-plugin.html
 */
export interface CfnPluginProps {
    /**
     * The identifier of the application that will contain the plugin.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-plugin.html#cfn-qbusiness-plugin-applicationid
     */
    readonly applicationId?: string;
    /**
     * Authentication configuration information for an Amazon Q Business plugin.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-plugin.html#cfn-qbusiness-plugin-authconfiguration
     */
    readonly authConfiguration: cdk.IResolvable | CfnPlugin.PluginAuthConfigurationProperty;
    /**
     * Configuration information required to create a custom plugin.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-plugin.html#cfn-qbusiness-plugin-custompluginconfiguration
     */
    readonly customPluginConfiguration?: CfnPlugin.CustomPluginConfigurationProperty | cdk.IResolvable;
    /**
     * The name of the plugin.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-plugin.html#cfn-qbusiness-plugin-displayname
     */
    readonly displayName: string;
    /**
     * The plugin server URL used for configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-plugin.html#cfn-qbusiness-plugin-serverurl
     */
    readonly serverUrl?: string;
    /**
     * The current status of the plugin.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-plugin.html#cfn-qbusiness-plugin-state
     */
    readonly state?: string;
    /**
     * A list of key-value pairs that identify or categorize the data source connector.
     *
     * You can also use tags to help control access to the data source connector. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-plugin.html#cfn-qbusiness-plugin-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of the plugin.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-plugin.html#cfn-qbusiness-plugin-type
     */
    readonly type: string;
}
/**
 * Adds a retriever to your Amazon Q Business application.
 *
 * @cloudformationResource AWS::QBusiness::Retriever
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-retriever.html
 */
export declare class CfnRetriever extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRetriever from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRetriever;
    /**
     * The Unix timestamp when the retriever was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role associated with the retriever.
     *
     * @cloudformationAttribute RetrieverArn
     */
    readonly attrRetrieverArn: string;
    /**
     * The identifier of the retriever used by your Amazon Q Business application.
     *
     * @cloudformationAttribute RetrieverId
     */
    readonly attrRetrieverId: string;
    /**
     * The status of your retriever.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The Unix timestamp when the retriever was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The identifier of the Amazon Q Business application using the retriever.
     */
    applicationId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Provides information on how the retriever used for your Amazon Q Business application is configured.
     */
    configuration: cdk.IResolvable | CfnRetriever.RetrieverConfigurationProperty;
    /**
     * The name of your retriever.
     */
    displayName: string;
    /**
     * The ARN of an IAM role used by Amazon Q Business to access the basic authentication credentials stored in a Secrets Manager secret.
     */
    roleArn?: string;
    /**
     * A list of key-value pairs that identify or categorize the retriever.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The type of your retriever.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRetrieverProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRetriever {
    /**
     * Provides information on how the retriever used for your Amazon Q Business application is configured.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-retriever-retrieverconfiguration.html
     */
    interface RetrieverConfigurationProperty {
        /**
         * Provides information on how the Amazon Kendra index used as a retriever for your Amazon Q Business application is configured.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-retriever-retrieverconfiguration.html#cfn-qbusiness-retriever-retrieverconfiguration-kendraindexconfiguration
         */
        readonly kendraIndexConfiguration?: cdk.IResolvable | CfnRetriever.KendraIndexConfigurationProperty;
        /**
         * Provides information on how a Amazon Q Business index used as a retriever for your Amazon Q Business application is configured.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-retriever-retrieverconfiguration.html#cfn-qbusiness-retriever-retrieverconfiguration-nativeindexconfiguration
         */
        readonly nativeIndexConfiguration?: cdk.IResolvable | CfnRetriever.NativeIndexConfigurationProperty;
    }
    /**
     * Configuration information for an Amazon Q Business index.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-retriever-nativeindexconfiguration.html
     */
    interface NativeIndexConfigurationProperty {
        /**
         * The identifier for the Amazon Q Business index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-retriever-nativeindexconfiguration.html#cfn-qbusiness-retriever-nativeindexconfiguration-indexid
         */
        readonly indexId: string;
    }
    /**
     * Stores an Amazon Kendra index as a retriever.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-retriever-kendraindexconfiguration.html
     */
    interface KendraIndexConfigurationProperty {
        /**
         * The identifier of the Amazon Kendra index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-retriever-kendraindexconfiguration.html#cfn-qbusiness-retriever-kendraindexconfiguration-indexid
         */
        readonly indexId: string;
    }
}
/**
 * Properties for defining a `CfnRetriever`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-retriever.html
 */
export interface CfnRetrieverProps {
    /**
     * The identifier of the Amazon Q Business application using the retriever.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-retriever.html#cfn-qbusiness-retriever-applicationid
     */
    readonly applicationId: string;
    /**
     * Provides information on how the retriever used for your Amazon Q Business application is configured.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-retriever.html#cfn-qbusiness-retriever-configuration
     */
    readonly configuration: cdk.IResolvable | CfnRetriever.RetrieverConfigurationProperty;
    /**
     * The name of your retriever.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-retriever.html#cfn-qbusiness-retriever-displayname
     */
    readonly displayName: string;
    /**
     * The ARN of an IAM role used by Amazon Q Business to access the basic authentication credentials stored in a Secrets Manager secret.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-retriever.html#cfn-qbusiness-retriever-rolearn
     */
    readonly roleArn?: string;
    /**
     * A list of key-value pairs that identify or categorize the retriever.
     *
     * You can also use tags to help control access to the retriever. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-retriever.html#cfn-qbusiness-retriever-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of your retriever.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-retriever.html#cfn-qbusiness-retriever-type
     */
    readonly type: string;
}
/**
 * Creates an Amazon Q Business web experience.
 *
 * @cloudformationResource AWS::QBusiness::WebExperience
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html
 */
export declare class CfnWebExperience extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWebExperience from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWebExperience;
    /**
     * The Unix timestamp when the Amazon Q Business application was last updated.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The endpoint URLs for your Amazon Q Business web experience. The URLs are unique and fully hosted by AWS .
     *
     * @cloudformationAttribute DefaultEndpoint
     */
    readonly attrDefaultEndpoint: string;
    /**
     * The status of your Amazon Q Business web experience.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The Unix timestamp when your Amazon Q Business web experience was updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The Amazon Resource Name (ARN) of an Amazon Q Business web experience.
     *
     * @cloudformationAttribute WebExperienceArn
     */
    readonly attrWebExperienceArn: string;
    /**
     * The identifier of your Amazon Q Business web experience.
     *
     * @cloudformationAttribute WebExperienceId
     */
    readonly attrWebExperienceId: string;
    /**
     * The identifier of the Amazon Q Business web experience.
     */
    applicationId: string;
    /**
     * The container for browser extension configuration for an Amazon Q Business web experience.
     */
    browserExtensionConfiguration?: CfnWebExperience.BrowserExtensionConfigurationProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Contains the configuration information to customize the logo, font, and color of an Amazon Q Business web experience with individual files for each property or a CSS file for them all.
     */
    customizationConfiguration?: CfnWebExperience.CustomizationConfigurationProperty | cdk.IResolvable;
    /**
     * Provides information about the identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
     */
    identityProviderConfiguration?: CfnWebExperience.IdentityProviderConfigurationProperty | cdk.IResolvable;
    /**
     * Sets the website domain origins that are allowed to embed the Amazon Q Business web experience.
     */
    origins?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the service role attached to your web experience.
     */
    roleArn?: string;
    /**
     * Determines whether sample prompts are enabled in the web experience for an end user.
     */
    samplePromptsControlMode?: string;
    /**
     * A subtitle to personalize your Amazon Q Business web experience.
     */
    subtitle?: string;
    /**
     * A list of key-value pairs that identify or categorize your Amazon Q Business web experience.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The title for your Amazon Q Business web experience.
     */
    title?: string;
    /**
     * A message in an Amazon Q Business web experience.
     */
    welcomeMessage?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWebExperienceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWebExperience {
    /**
     * Provides information about the identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-identityproviderconfiguration.html
     */
    interface IdentityProviderConfigurationProperty {
        /**
         * The OIDC-compliant identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-identityproviderconfiguration.html#cfn-qbusiness-webexperience-identityproviderconfiguration-openidconnectconfiguration
         */
        readonly openIdConnectConfiguration?: cdk.IResolvable | CfnWebExperience.OpenIDConnectProviderConfigurationProperty;
        /**
         * The SAML 2.0-compliant identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-identityproviderconfiguration.html#cfn-qbusiness-webexperience-identityproviderconfiguration-samlconfiguration
         */
        readonly samlConfiguration?: cdk.IResolvable | CfnWebExperience.SamlProviderConfigurationProperty;
    }
    /**
     * Information about the SAML 2.0-compliant identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-samlproviderconfiguration.html
     */
    interface SamlProviderConfigurationProperty {
        /**
         * The URL where Amazon Q Business end users will be redirected for authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-samlproviderconfiguration.html#cfn-qbusiness-webexperience-samlproviderconfiguration-authenticationurl
         */
        readonly authenticationUrl: string;
    }
    /**
     * Information about the OIDC-compliant identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-openidconnectproviderconfiguration.html
     */
    interface OpenIDConnectProviderConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of a Secrets Manager secret containing the OIDC client secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-openidconnectproviderconfiguration.html#cfn-qbusiness-webexperience-openidconnectproviderconfiguration-secretsarn
         */
        readonly secretsArn: string;
        /**
         * An IAM role with permissions to access AWS KMS to decrypt the Secrets Manager secret containing your OIDC client secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-openidconnectproviderconfiguration.html#cfn-qbusiness-webexperience-openidconnectproviderconfiguration-secretsrole
         */
        readonly secretsRole: string;
    }
    /**
     * Contains the configuration information to customize the logo, font, and color of an Amazon Q Business web experience with individual files for each property or a CSS file for them all.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-customizationconfiguration.html
     */
    interface CustomizationConfigurationProperty {
        /**
         * Provides the URL where the custom CSS file is hosted for an Amazon Q web experience.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-customizationconfiguration.html#cfn-qbusiness-webexperience-customizationconfiguration-customcssurl
         */
        readonly customCssUrl?: string;
        /**
         * Provides the URL where the custom favicon file is hosted for an Amazon Q web experience.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-customizationconfiguration.html#cfn-qbusiness-webexperience-customizationconfiguration-faviconurl
         */
        readonly faviconUrl?: string;
        /**
         * Provides the URL where the custom font file is hosted for an Amazon Q web experience.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-customizationconfiguration.html#cfn-qbusiness-webexperience-customizationconfiguration-fonturl
         */
        readonly fontUrl?: string;
        /**
         * Provides the URL where the custom logo file is hosted for an Amazon Q web experience.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-customizationconfiguration.html#cfn-qbusiness-webexperience-customizationconfiguration-logourl
         */
        readonly logoUrl?: string;
    }
    /**
     * The container for browser extension configuration for an Amazon Q Business web experience.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-browserextensionconfiguration.html
     */
    interface BrowserExtensionConfigurationProperty {
        /**
         * Specify the browser extensions allowed for your Amazon Q web experience.
         *
         * - `CHROME` — Enables the extension for Chromium-based browsers (Google Chrome, Microsoft Edge, Opera, etc.).
         * - `FIREFOX` — Enables the extension for Mozilla Firefox.
         * - `CHROME` and `FIREFOX` — Enable the extension for Chromium-based browsers and Mozilla Firefox.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-browserextensionconfiguration.html#cfn-qbusiness-webexperience-browserextensionconfiguration-enabledbrowserextensions
         */
        readonly enabledBrowserExtensions: Array<string>;
    }
}
/**
 * Properties for defining a `CfnWebExperience`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html
 */
export interface CfnWebExperienceProps {
    /**
     * The identifier of the Amazon Q Business web experience.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-applicationid
     */
    readonly applicationId: string;
    /**
     * The container for browser extension configuration for an Amazon Q Business web experience.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-browserextensionconfiguration
     */
    readonly browserExtensionConfiguration?: CfnWebExperience.BrowserExtensionConfigurationProperty | cdk.IResolvable;
    /**
     * Contains the configuration information to customize the logo, font, and color of an Amazon Q Business web experience with individual files for each property or a CSS file for them all.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-customizationconfiguration
     */
    readonly customizationConfiguration?: CfnWebExperience.CustomizationConfigurationProperty | cdk.IResolvable;
    /**
     * Provides information about the identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-identityproviderconfiguration
     */
    readonly identityProviderConfiguration?: CfnWebExperience.IdentityProviderConfigurationProperty | cdk.IResolvable;
    /**
     * Sets the website domain origins that are allowed to embed the Amazon Q Business web experience.
     *
     * The *domain origin* refers to the base URL for accessing a website including the protocol ( `http/https` ), the domain name, and the port number (if specified).
     *
     * > You must only submit a *base URL* and not a full path. For example, `https://docs.aws.amazon.com` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-origins
     */
    readonly origins?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the service role attached to your web experience.
     *
     * > You must provide this value if you're using IAM Identity Center to manage end user access to your application. If you're using legacy identity management to manage user access, you don't need to provide this value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-rolearn
     */
    readonly roleArn?: string;
    /**
     * Determines whether sample prompts are enabled in the web experience for an end user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-samplepromptscontrolmode
     */
    readonly samplePromptsControlMode?: string;
    /**
     * A subtitle to personalize your Amazon Q Business web experience.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-subtitle
     */
    readonly subtitle?: string;
    /**
     * A list of key-value pairs that identify or categorize your Amazon Q Business web experience.
     *
     * You can also use tags to help control access to the web experience. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The title for your Amazon Q Business web experience.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-title
     */
    readonly title?: string;
    /**
     * A message in an Amazon Q Business web experience.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-welcomemessage
     */
    readonly welcomeMessage?: string;
}
