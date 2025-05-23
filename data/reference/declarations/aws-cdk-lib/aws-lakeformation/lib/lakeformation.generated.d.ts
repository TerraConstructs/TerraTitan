import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * A structure that represents a data cell filter with column-level, row-level, and/or cell-level security.
 *
 * Data cell filters belong to a specific table in a Data Catalog . During a stack operation, AWS CloudFormation calls the AWS Lake Formation `CreateDataCellsFilter` API operation to create a `DataCellsFilter` resource, and calls the `DeleteDataCellsFilter` API operation to delete it.
 *
 * @cloudformationResource AWS::LakeFormation::DataCellsFilter
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datacellsfilter.html
 */
export declare class CfnDataCellsFilter extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataCellsFilter from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataCellsFilter;
    /**
     * An array of UTF-8 strings.
     */
    columnNames?: Array<string>;
    /**
     * A wildcard with exclusions.
     */
    columnWildcard?: CfnDataCellsFilter.ColumnWildcardProperty | cdk.IResolvable;
    /**
     * UTF-8 string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html) .
     */
    databaseName: string;
    /**
     * UTF-8 string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html) .
     */
    name: string;
    /**
     * A PartiQL predicate.
     */
    rowFilter?: cdk.IResolvable | CfnDataCellsFilter.RowFilterProperty;
    /**
     * Catalog id string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html) .
     */
    tableCatalogId: string;
    /**
     * UTF-8 string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html) .
     */
    tableName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDataCellsFilterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataCellsFilter {
    /**
     * A PartiQL predicate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datacellsfilter-rowfilter.html
     */
    interface RowFilterProperty {
        /**
         * A wildcard for all rows.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datacellsfilter-rowfilter.html#cfn-lakeformation-datacellsfilter-rowfilter-allrowswildcard
         */
        readonly allRowsWildcard?: any | cdk.IResolvable;
        /**
         * A filter expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datacellsfilter-rowfilter.html#cfn-lakeformation-datacellsfilter-rowfilter-filterexpression
         */
        readonly filterExpression?: string;
    }
    /**
     * A wildcard object, consisting of an optional list of excluded column names or indexes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datacellsfilter-columnwildcard.html
     */
    interface ColumnWildcardProperty {
        /**
         * Excludes column names.
         *
         * Any column with this name will be excluded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datacellsfilter-columnwildcard.html#cfn-lakeformation-datacellsfilter-columnwildcard-excludedcolumnnames
         */
        readonly excludedColumnNames?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnDataCellsFilter`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datacellsfilter.html
 */
export interface CfnDataCellsFilterProps {
    /**
     * An array of UTF-8 strings.
     *
     * A list of column names.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datacellsfilter.html#cfn-lakeformation-datacellsfilter-columnnames
     */
    readonly columnNames?: Array<string>;
    /**
     * A wildcard with exclusions.
     *
     * You must specify either a `ColumnNames` list or the `ColumnWildCard` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datacellsfilter.html#cfn-lakeformation-datacellsfilter-columnwildcard
     */
    readonly columnWildcard?: CfnDataCellsFilter.ColumnWildcardProperty | cdk.IResolvable;
    /**
     * UTF-8 string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html) .
     *
     * A database in the Data Catalog .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datacellsfilter.html#cfn-lakeformation-datacellsfilter-databasename
     */
    readonly databaseName: string;
    /**
     * UTF-8 string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html) .
     *
     * The name given by the user to the data filter cell.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datacellsfilter.html#cfn-lakeformation-datacellsfilter-name
     */
    readonly name: string;
    /**
     * A PartiQL predicate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datacellsfilter.html#cfn-lakeformation-datacellsfilter-rowfilter
     */
    readonly rowFilter?: cdk.IResolvable | CfnDataCellsFilter.RowFilterProperty;
    /**
     * Catalog id string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html) .
     *
     * The ID of the catalog to which the table belongs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datacellsfilter.html#cfn-lakeformation-datacellsfilter-tablecatalogid
     */
    readonly tableCatalogId: string;
    /**
     * UTF-8 string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html) .
     *
     * A table in the database.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datacellsfilter.html#cfn-lakeformation-datacellsfilter-tablename
     */
    readonly tableName: string;
}
/**
 * The `AWS::LakeFormation::DataLakeSettings` resource is an AWS Lake Formation resource type that manages the data lake settings for your account.
 *
 * @cloudformationResource AWS::LakeFormation::DataLakeSettings
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html
 */
export declare class CfnDataLakeSettings extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataLakeSettings from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataLakeSettings;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A list of AWS Lake Formation principals.
     */
    admins?: Array<CfnDataLakeSettings.DataLakePrincipalProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Whether to allow Amazon EMR clusters or other third-party query engines to access data managed by Lake Formation .
     */
    allowExternalDataFiltering?: boolean | cdk.IResolvable;
    /**
     * Specifies whether query engines and applications can get credentials without IAM session tags if the user has full table access.
     */
    allowFullTableExternalDataAccess?: boolean | cdk.IResolvable;
    /**
     * Lake Formation relies on a privileged process secured by Amazon EMR or the third party integrator to tag the user's role while assuming it.
     */
    authorizedSessionTagValueList?: Array<string>;
    /**
     * Specifies whether access control on a newly created database is managed by Lake Formation permissions or exclusively by IAM permissions.
     */
    createDatabaseDefaultPermissions?: Array<cdk.IResolvable | CfnDataLakeSettings.PrincipalPermissionsProperty> | cdk.IResolvable;
    /**
     * Specifies whether access control on a newly created table is managed by Lake Formation permissions or exclusively by IAM permissions.
     */
    createTableDefaultPermissions?: Array<cdk.IResolvable | CfnDataLakeSettings.PrincipalPermissionsProperty> | cdk.IResolvable;
    /**
     * A list of the account IDs of AWS accounts with Amazon EMR clusters or third-party engines that are allwed to perform data filtering.
     */
    externalDataFilteringAllowList?: Array<CfnDataLakeSettings.DataLakePrincipalProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies whether the data lake settings are updated by adding new values to the current settings ( `APPEND` ) or by replacing the current settings with new settings ( `REPLACE` ).
     */
    mutationType?: string;
    /**
     * A key-value map that provides an additional configuration on your data lake.
     */
    parameters?: any | cdk.IResolvable;
    /**
     * An array of UTF-8 strings.
     */
    trustedResourceOwners?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDataLakeSettingsProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataLakeSettings {
    /**
     * The Lake Formation principal.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-datalakeprincipal.html
     */
    interface DataLakePrincipalProperty {
        /**
         * An identifier for the Lake Formation principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-datalakeprincipal.html#cfn-lakeformation-datalakesettings-datalakeprincipal-datalakeprincipalidentifier
         */
        readonly dataLakePrincipalIdentifier: string;
    }
    /**
     * Permissions granted to a principal.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-principalpermissions.html
     */
    interface PrincipalPermissionsProperty {
        /**
         * The permissions that are granted to the principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-principalpermissions.html#cfn-lakeformation-datalakesettings-principalpermissions-permissions
         */
        readonly permissions: Array<string>;
        /**
         * The principal who is granted permissions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-principalpermissions.html#cfn-lakeformation-datalakesettings-principalpermissions-principal
         */
        readonly principal: CfnDataLakeSettings.DataLakePrincipalProperty | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnDataLakeSettings`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html
 */
export interface CfnDataLakeSettingsProps {
    /**
     * A list of AWS Lake Formation principals.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-admins
     */
    readonly admins?: Array<CfnDataLakeSettings.DataLakePrincipalProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Whether to allow Amazon EMR clusters or other third-party query engines to access data managed by Lake Formation .
     *
     * If set to true, you allow Amazon EMR clusters or other third-party engines to access data in Amazon S3 locations that are registered with Lake Formation .
     *
     * If false or null, no third-party query engines will be able to access data in Amazon S3 locations that are registered with Lake Formation.
     *
     * For more information, see [External data filtering setting](https://docs.aws.amazon.com/lake-formation/latest/dg/initial-LF-setup.html#external-data-filter) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-allowexternaldatafiltering
     */
    readonly allowExternalDataFiltering?: boolean | cdk.IResolvable;
    /**
     * Specifies whether query engines and applications can get credentials without IAM session tags if the user has full table access.
     *
     * It provides query engines and applications performance benefits as well as simplifies data access. Amazon EMR on Amazon EC2 is able to leverage this setting.
     *
     * For more information, see [](https://docs.aws.amazon.com/lake-formation/latest/dg/using-cred-vending.html)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-allowfulltableexternaldataaccess
     */
    readonly allowFullTableExternalDataAccess?: boolean | cdk.IResolvable;
    /**
     * Lake Formation relies on a privileged process secured by Amazon EMR or the third party integrator to tag the user's role while assuming it.
     *
     * Lake Formation will publish the acceptable key-value pair, for example key = "LakeFormationTrustedCaller" and value = "TRUE" and the third party integrator must properly tag the temporary security credentials that will be used to call Lake Formation 's administrative API operations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-authorizedsessiontagvaluelist
     */
    readonly authorizedSessionTagValueList?: Array<string>;
    /**
     * Specifies whether access control on a newly created database is managed by Lake Formation permissions or exclusively by IAM permissions.
     *
     * A null value indicates that the access is controlled by Lake Formation permissions. `ALL` permissions assigned to `IAM_ALLOWED_PRINCIPALS` group indicates that the user's IAM permissions determine the access to the database. This is referred to as the setting "Use only IAM access control," and is to support backward compatibility with the AWS Glue permission model implemented by IAM permissions.
     *
     * The only permitted values are an empty array or an array that contains a single JSON object that grants `ALL` to `IAM_ALLOWED_PRINCIPALS` .
     *
     * For more information, see [Changing the default security settings for your data lake](https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-createdatabasedefaultpermissions
     */
    readonly createDatabaseDefaultPermissions?: Array<cdk.IResolvable | CfnDataLakeSettings.PrincipalPermissionsProperty> | cdk.IResolvable;
    /**
     * Specifies whether access control on a newly created table is managed by Lake Formation permissions or exclusively by IAM permissions.
     *
     * A null value indicates that the access is controlled by Lake Formation permissions. `ALL` permissions assigned to `IAM_ALLOWED_PRINCIPALS` group indicate that the user's IAM permissions determine the access to the table. This is referred to as the setting "Use only IAM access control," and is to support the backward compatibility with the AWS Glue permission model implemented by IAM permissions.
     *
     * The only permitted values are an empty array or an array that contains a single JSON object that grants `ALL` permissions to `IAM_ALLOWED_PRINCIPALS` .
     *
     * For more information, see [Changing the default security settings for your data lake](https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-createtabledefaultpermissions
     */
    readonly createTableDefaultPermissions?: Array<cdk.IResolvable | CfnDataLakeSettings.PrincipalPermissionsProperty> | cdk.IResolvable;
    /**
     * A list of the account IDs of AWS accounts with Amazon EMR clusters or third-party engines that are allwed to perform data filtering.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-externaldatafilteringallowlist
     */
    readonly externalDataFilteringAllowList?: Array<CfnDataLakeSettings.DataLakePrincipalProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies whether the data lake settings are updated by adding new values to the current settings ( `APPEND` ) or by replacing the current settings with new settings ( `REPLACE` ).
     *
     * > If you choose `REPLACE` , your current data lake settings will be replaced with the new values in your template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-mutationtype
     */
    readonly mutationType?: string;
    /**
     * A key-value map that provides an additional configuration on your data lake.
     *
     * `CrossAccountVersion` is the key you can configure in the `Parameters` field. Accepted values for the `CrossAccountVersion` key are 1, 2, and 3.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-parameters
     */
    readonly parameters?: any | cdk.IResolvable;
    /**
     * An array of UTF-8 strings.
     *
     * A list of the resource-owning account IDs that the caller's account can use to share their user access details (user ARNs). The user ARNs can be logged in the resource owner's CloudTrail log. You may want to specify this property when you are in a high-trust boundary, such as the same team or company.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-trustedresourceowners
     */
    readonly trustedResourceOwners?: Array<string>;
}
/**
 * The `AWS::LakeFormation::Permissions` resource represents the permissions that a principal has on an AWS Glue Data Catalog resource (such as AWS Glue database or AWS Glue tables).
 *
 * When you upload a permissions stack, the permissions are granted to the principal and when you remove the stack, the permissions are revoked from the principal. If you remove a stack, and the principal does not have the permissions referenced in the stack then AWS Lake Formation will throw an error because you can’t call revoke on non-existing permissions. To successfully remove the stack, you’ll need to regrant those permissions and then remove the stack.
 *
 * > New versions of AWS Lake Formation permission resources are now available. For more information, see: [AWS:LakeFormation::PrincipalPermissions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html)
 *
 * @cloudformationResource AWS::LakeFormation::Permissions
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-permissions.html
 */
export declare class CfnPermissions extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPermissions from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPermissions;
    /**
     * A unique identifier for the batch permissions request entry.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The AWS Lake Formation principal.
     */
    dataLakePrincipal: CfnPermissions.DataLakePrincipalProperty | cdk.IResolvable;
    /**
     * The permissions granted or revoked.
     */
    permissions?: Array<string>;
    /**
     * Indicates the ability to grant permissions (as a subset of permissions granted).
     */
    permissionsWithGrantOption?: Array<string>;
    /**
     * A structure for the resource.
     */
    resource: cdk.IResolvable | CfnPermissions.ResourceProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPermissionsProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPermissions {
    /**
     * The Lake Formation principal.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-datalakeprincipal.html
     */
    interface DataLakePrincipalProperty {
        /**
         * An identifier for the Lake Formation principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-datalakeprincipal.html#cfn-lakeformation-permissions-datalakeprincipal-datalakeprincipalidentifier
         */
        readonly dataLakePrincipalIdentifier?: string;
    }
    /**
     * A structure for the resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-resource.html
     */
    interface ResourceProperty {
        /**
         * A structure for the database object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-resource.html#cfn-lakeformation-permissions-resource-databaseresource
         */
        readonly databaseResource?: CfnPermissions.DatabaseResourceProperty | cdk.IResolvable;
        /**
         * A structure for a data location object where permissions are granted or revoked.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-resource.html#cfn-lakeformation-permissions-resource-datalocationresource
         */
        readonly dataLocationResource?: CfnPermissions.DataLocationResourceProperty | cdk.IResolvable;
        /**
         * A structure for the table object.
         *
         * A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-resource.html#cfn-lakeformation-permissions-resource-tableresource
         */
        readonly tableResource?: cdk.IResolvable | CfnPermissions.TableResourceProperty;
        /**
         * A structure for a table with columns object.
         *
         * This object is only used when granting a SELECT permission.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-resource.html#cfn-lakeformation-permissions-resource-tablewithcolumnsresource
         */
        readonly tableWithColumnsResource?: cdk.IResolvable | CfnPermissions.TableWithColumnsResourceProperty;
    }
    /**
     * A structure for the table object.
     *
     * A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tableresource.html
     */
    interface TableResourceProperty {
        /**
         * The identifier for the Data Catalog .
         *
         * By default, it is the account ID of the caller.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tableresource.html#cfn-lakeformation-permissions-tableresource-catalogid
         */
        readonly catalogId?: string;
        /**
         * The name of the database for the table.
         *
         * Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tableresource.html#cfn-lakeformation-permissions-tableresource-databasename
         */
        readonly databaseName?: string;
        /**
         * The name of the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tableresource.html#cfn-lakeformation-permissions-tableresource-name
         */
        readonly name?: string;
        /**
         * An empty object representing all tables under a database.
         *
         * If this field is specified instead of the `Name` field, all tables under `DatabaseName` will have permission changes applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tableresource.html#cfn-lakeformation-permissions-tableresource-tablewildcard
         */
        readonly tableWildcard?: cdk.IResolvable | CfnPermissions.TableWildcardProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tablewildcard.html
     */
    interface TableWildcardProperty {
    }
    /**
     * A structure for the database object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-databaseresource.html
     */
    interface DatabaseResourceProperty {
        /**
         * The identifier for the Data Catalog .
         *
         * By default, it is the account ID of the caller.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-databaseresource.html#cfn-lakeformation-permissions-databaseresource-catalogid
         */
        readonly catalogId?: string;
        /**
         * The name of the database resource.
         *
         * Unique to the Data Catalog.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-databaseresource.html#cfn-lakeformation-permissions-databaseresource-name
         */
        readonly name?: string;
    }
    /**
     * A structure for a data location object where permissions are granted or revoked.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-datalocationresource.html
     */
    interface DataLocationResourceProperty {
        /**
         * The identifier for the Data Catalog .
         *
         * By default, it is the account ID of the caller.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-datalocationresource.html#cfn-lakeformation-permissions-datalocationresource-catalogid
         */
        readonly catalogId?: string;
        /**
         * The Amazon Resource Name (ARN) that uniquely identifies the data location resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-datalocationresource.html#cfn-lakeformation-permissions-datalocationresource-s3resource
         */
        readonly s3Resource?: string;
    }
    /**
     * A structure for a table with columns object. This object is only used when granting a SELECT permission.
     *
     * This object must take a value for at least one of `ColumnsNames` , `ColumnsIndexes` , or `ColumnsWildcard` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tablewithcolumnsresource.html
     */
    interface TableWithColumnsResourceProperty {
        /**
         * The identifier for the Data Catalog .
         *
         * By default, it is the account ID of the caller.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tablewithcolumnsresource.html#cfn-lakeformation-permissions-tablewithcolumnsresource-catalogid
         */
        readonly catalogId?: string;
        /**
         * The list of column names for the table.
         *
         * At least one of `ColumnNames` or `ColumnWildcard` is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tablewithcolumnsresource.html#cfn-lakeformation-permissions-tablewithcolumnsresource-columnnames
         */
        readonly columnNames?: Array<string>;
        /**
         * A wildcard specified by a `ColumnWildcard` object.
         *
         * At least one of `ColumnNames` or `ColumnWildcard` is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tablewithcolumnsresource.html#cfn-lakeformation-permissions-tablewithcolumnsresource-columnwildcard
         */
        readonly columnWildcard?: CfnPermissions.ColumnWildcardProperty | cdk.IResolvable;
        /**
         * The name of the database for the table with columns resource.
         *
         * Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tablewithcolumnsresource.html#cfn-lakeformation-permissions-tablewithcolumnsresource-databasename
         */
        readonly databaseName?: string;
        /**
         * The name of the table resource.
         *
         * A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tablewithcolumnsresource.html#cfn-lakeformation-permissions-tablewithcolumnsresource-name
         */
        readonly name?: string;
    }
    /**
     * A wildcard object, consisting of an optional list of excluded column names or indexes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-columnwildcard.html
     */
    interface ColumnWildcardProperty {
        /**
         * Excludes column names.
         *
         * Any column with this name will be excluded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-columnwildcard.html#cfn-lakeformation-permissions-columnwildcard-excludedcolumnnames
         */
        readonly excludedColumnNames?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnPermissions`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-permissions.html
 */
export interface CfnPermissionsProps {
    /**
     * The AWS Lake Formation principal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-permissions.html#cfn-lakeformation-permissions-datalakeprincipal
     */
    readonly dataLakePrincipal: CfnPermissions.DataLakePrincipalProperty | cdk.IResolvable;
    /**
     * The permissions granted or revoked.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-permissions.html#cfn-lakeformation-permissions-permissions
     */
    readonly permissions?: Array<string>;
    /**
     * Indicates the ability to grant permissions (as a subset of permissions granted).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-permissions.html#cfn-lakeformation-permissions-permissionswithgrantoption
     */
    readonly permissionsWithGrantOption?: Array<string>;
    /**
     * A structure for the resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-permissions.html#cfn-lakeformation-permissions-resource
     */
    readonly resource: cdk.IResolvable | CfnPermissions.ResourceProperty;
}
/**
 * The `AWS::LakeFormation::PrincipalPermissions` resource represents the permissions that a principal has on a Data Catalog resource (such as AWS Glue databases or AWS Glue tables).
 *
 * When you create a `PrincipalPermissions` resource, the permissions are granted via the AWS Lake Formation `GrantPermissions` API operation. When you delete a `PrincipalPermissions` resource, the permissions on principal-resource pair are revoked via the AWS Lake Formation `RevokePermissions` API operation.
 *
 * @cloudformationResource AWS::LakeFormation::PrincipalPermissions
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html
 */
export declare class CfnPrincipalPermissions extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPrincipalPermissions from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPrincipalPermissions;
    /**
     * Json encoding of the input principal. For example: `{"DataLakePrincipalIdentifier":"arn:aws:iam::123456789012:role/ExampleRole"}`
     *
     * @cloudformationAttribute PrincipalIdentifier
     */
    readonly attrPrincipalIdentifier: string;
    /**
     * Json encoding of the input resource. For example: `{"Catalog":null,"Database":null,"Table":null,"TableWithColumns":null,"DataLocation":null,"DataCellsFilter":{"TableCatalogId":"123456789012","DatabaseName":"ExampleDatabase","TableName":"ExampleTable","Name":"ExampleFilter"},"LFTag":null,"LFTagPolicy":null}`
     *
     * @cloudformationAttribute ResourceIdentifier
     */
    readonly attrResourceIdentifier: string;
    /**
     * The identifier for the Data Catalog .
     */
    catalog?: string;
    /**
     * The permissions granted or revoked.
     */
    permissions: Array<string>;
    /**
     * Indicates the ability to grant permissions (as a subset of permissions granted).
     */
    permissionsWithGrantOption: Array<string>;
    /**
     * The principal to be granted a permission.
     */
    principal: CfnPrincipalPermissions.DataLakePrincipalProperty | cdk.IResolvable;
    /**
     * The resource to be granted or revoked permissions.
     */
    resource: cdk.IResolvable | CfnPrincipalPermissions.ResourceProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPrincipalPermissionsProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPrincipalPermissions {
    /**
     * A structure for the resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-resource.html
     */
    interface ResourceProperty {
        /**
         * The identifier for the Data Catalog.
         *
         * By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-resource.html#cfn-lakeformation-principalpermissions-resource-catalog
         */
        readonly catalog?: any | cdk.IResolvable;
        /**
         * The database for the resource.
         *
         * Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-resource.html#cfn-lakeformation-principalpermissions-resource-database
         */
        readonly database?: CfnPrincipalPermissions.DatabaseResourceProperty | cdk.IResolvable;
        /**
         * A data cell filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-resource.html#cfn-lakeformation-principalpermissions-resource-datacellsfilter
         */
        readonly dataCellsFilter?: CfnPrincipalPermissions.DataCellsFilterResourceProperty | cdk.IResolvable;
        /**
         * The location of an Amazon S3 path where permissions are granted or revoked.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-resource.html#cfn-lakeformation-principalpermissions-resource-datalocation
         */
        readonly dataLocation?: CfnPrincipalPermissions.DataLocationResourceProperty | cdk.IResolvable;
        /**
         * The LF-tag key and values attached to a resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-resource.html#cfn-lakeformation-principalpermissions-resource-lftag
         */
        readonly lfTag?: cdk.IResolvable | CfnPrincipalPermissions.LFTagKeyResourceProperty;
        /**
         * A list of LF-tag conditions that define a resource's LF-tag policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-resource.html#cfn-lakeformation-principalpermissions-resource-lftagpolicy
         */
        readonly lfTagPolicy?: cdk.IResolvable | CfnPrincipalPermissions.LFTagPolicyResourceProperty;
        /**
         * The table for the resource.
         *
         * A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-resource.html#cfn-lakeformation-principalpermissions-resource-table
         */
        readonly table?: cdk.IResolvable | CfnPrincipalPermissions.TableResourceProperty;
        /**
         * The table with columns for the resource.
         *
         * A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-resource.html#cfn-lakeformation-principalpermissions-resource-tablewithcolumns
         */
        readonly tableWithColumns?: cdk.IResolvable | CfnPrincipalPermissions.TableWithColumnsResourceProperty;
    }
    /**
     * A structure containing an LF-tag key and values for a resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagkeyresource.html
     */
    interface LFTagKeyResourceProperty {
        /**
         * The identifier for the Data Catalog where the location is registered with Data Catalog .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagkeyresource.html#cfn-lakeformation-principalpermissions-lftagkeyresource-catalogid
         */
        readonly catalogId: string;
        /**
         * The key-name for the LF-tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagkeyresource.html#cfn-lakeformation-principalpermissions-lftagkeyresource-tagkey
         */
        readonly tagKey: string;
        /**
         * A list of possible values for the corresponding `TagKey` of an LF-tag key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagkeyresource.html#cfn-lakeformation-principalpermissions-lftagkeyresource-tagvalues
         */
        readonly tagValues: Array<string>;
    }
    /**
     * A structure for the table object.
     *
     * A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tableresource.html
     */
    interface TableResourceProperty {
        /**
         * The identifier for the Data Catalog.
         *
         * By default, it is the account ID of the caller.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tableresource.html#cfn-lakeformation-principalpermissions-tableresource-catalogid
         */
        readonly catalogId: string;
        /**
         * The name of the database for the table.
         *
         * Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tableresource.html#cfn-lakeformation-principalpermissions-tableresource-databasename
         */
        readonly databaseName: string;
        /**
         * The name of the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tableresource.html#cfn-lakeformation-principalpermissions-tableresource-name
         */
        readonly name?: string;
        /**
         * A wildcard object representing every table under a database.
         *
         * At least one of `TableResource$Name` or `TableResource$TableWildcard` is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tableresource.html#cfn-lakeformation-principalpermissions-tableresource-tablewildcard
         */
        readonly tableWildcard?: any | cdk.IResolvable;
    }
    /**
     * A structure that describes certain columns on certain rows.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datacellsfilterresource.html
     */
    interface DataCellsFilterResourceProperty {
        /**
         * A database in the Data Catalog .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datacellsfilterresource.html#cfn-lakeformation-principalpermissions-datacellsfilterresource-databasename
         */
        readonly databaseName: string;
        /**
         * The name given by the user to the data filter cell.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datacellsfilterresource.html#cfn-lakeformation-principalpermissions-datacellsfilterresource-name
         */
        readonly name: string;
        /**
         * The ID of the catalog to which the table belongs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datacellsfilterresource.html#cfn-lakeformation-principalpermissions-datacellsfilterresource-tablecatalogid
         */
        readonly tableCatalogId: string;
        /**
         * The name of the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datacellsfilterresource.html#cfn-lakeformation-principalpermissions-datacellsfilterresource-tablename
         */
        readonly tableName: string;
    }
    /**
     * A structure for a table with columns object. This object is only used when granting a SELECT permission.
     *
     * This object must take a value for at least one of `ColumnsNames` , `ColumnsIndexes` , or `ColumnsWildcard` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tablewithcolumnsresource.html
     */
    interface TableWithColumnsResourceProperty {
        /**
         * The identifier for the Data Catalog where the location is registered with AWS Lake Formation .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tablewithcolumnsresource.html#cfn-lakeformation-principalpermissions-tablewithcolumnsresource-catalogid
         */
        readonly catalogId: string;
        /**
         * The list of column names for the table.
         *
         * At least one of `ColumnNames` or `ColumnWildcard` is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tablewithcolumnsresource.html#cfn-lakeformation-principalpermissions-tablewithcolumnsresource-columnnames
         */
        readonly columnNames?: Array<string>;
        /**
         * A wildcard specified by a `ColumnWildcard` object.
         *
         * At least one of `ColumnNames` or `ColumnWildcard` is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tablewithcolumnsresource.html#cfn-lakeformation-principalpermissions-tablewithcolumnsresource-columnwildcard
         */
        readonly columnWildcard?: CfnPrincipalPermissions.ColumnWildcardProperty | cdk.IResolvable;
        /**
         * The name of the database for the table with columns resource.
         *
         * Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tablewithcolumnsresource.html#cfn-lakeformation-principalpermissions-tablewithcolumnsresource-databasename
         */
        readonly databaseName: string;
        /**
         * The name of the table resource.
         *
         * A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tablewithcolumnsresource.html#cfn-lakeformation-principalpermissions-tablewithcolumnsresource-name
         */
        readonly name: string;
    }
    /**
     * A wildcard object, consisting of an optional list of excluded column names or indexes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-columnwildcard.html
     */
    interface ColumnWildcardProperty {
        /**
         * Excludes column names.
         *
         * Any column with this name will be excluded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-columnwildcard.html#cfn-lakeformation-principalpermissions-columnwildcard-excludedcolumnnames
         */
        readonly excludedColumnNames?: Array<string>;
    }
    /**
     * A list of LF-tag conditions that define a resource's LF-tag policy.
     *
     * A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns that do not have the LF-tag 'PII' in tables that have the LF-tag 'Prod'.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagpolicyresource.html
     */
    interface LFTagPolicyResourceProperty {
        /**
         * The identifier for the Data Catalog .
         *
         * The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagpolicyresource.html#cfn-lakeformation-principalpermissions-lftagpolicyresource-catalogid
         */
        readonly catalogId: string;
        /**
         * A list of LF-tag conditions that apply to the resource's LF-tag policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagpolicyresource.html#cfn-lakeformation-principalpermissions-lftagpolicyresource-expression
         */
        readonly expression: Array<cdk.IResolvable | CfnPrincipalPermissions.LFTagProperty> | cdk.IResolvable;
        /**
         * The resource type for which the LF-tag policy applies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagpolicyresource.html#cfn-lakeformation-principalpermissions-lftagpolicyresource-resourcetype
         */
        readonly resourceType: string;
    }
    /**
     * The LF-tag key and values attached to a resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftag.html
     */
    interface LFTagProperty {
        /**
         * The key-name for the LF-tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftag.html#cfn-lakeformation-principalpermissions-lftag-tagkey
         */
        readonly tagKey?: string;
        /**
         * A list of possible values of the corresponding `TagKey` of an LF-tag key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftag.html#cfn-lakeformation-principalpermissions-lftag-tagvalues
         */
        readonly tagValues?: Array<string>;
    }
    /**
     * A structure for the database object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-databaseresource.html
     */
    interface DatabaseResourceProperty {
        /**
         * The identifier for the Data Catalog.
         *
         * By default, it is the account ID of the caller.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-databaseresource.html#cfn-lakeformation-principalpermissions-databaseresource-catalogid
         */
        readonly catalogId: string;
        /**
         * The name of the database resource.
         *
         * Unique to the Data Catalog.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-databaseresource.html#cfn-lakeformation-principalpermissions-databaseresource-name
         */
        readonly name: string;
    }
    /**
     * A structure for a data location object where permissions are granted or revoked.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datalocationresource.html
     */
    interface DataLocationResourceProperty {
        /**
         * The identifier for the Data Catalog where the location is registered with AWS Lake Formation .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datalocationresource.html#cfn-lakeformation-principalpermissions-datalocationresource-catalogid
         */
        readonly catalogId: string;
        /**
         * The Amazon Resource Name (ARN) that uniquely identifies the data location resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datalocationresource.html#cfn-lakeformation-principalpermissions-datalocationresource-resourcearn
         */
        readonly resourceArn: string;
    }
    /**
     * The AWS Lake Formation principal.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datalakeprincipal.html
     */
    interface DataLakePrincipalProperty {
        /**
         * An identifier for the AWS Lake Formation principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datalakeprincipal.html#cfn-lakeformation-principalpermissions-datalakeprincipal-datalakeprincipalidentifier
         */
        readonly dataLakePrincipalIdentifier?: string;
    }
}
/**
 * Properties for defining a `CfnPrincipalPermissions`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html
 */
export interface CfnPrincipalPermissionsProps {
    /**
     * The identifier for the Data Catalog .
     *
     * By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html#cfn-lakeformation-principalpermissions-catalog
     */
    readonly catalog?: string;
    /**
     * The permissions granted or revoked.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html#cfn-lakeformation-principalpermissions-permissions
     */
    readonly permissions: Array<string>;
    /**
     * Indicates the ability to grant permissions (as a subset of permissions granted).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html#cfn-lakeformation-principalpermissions-permissionswithgrantoption
     */
    readonly permissionsWithGrantOption: Array<string>;
    /**
     * The principal to be granted a permission.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html#cfn-lakeformation-principalpermissions-principal
     */
    readonly principal: CfnPrincipalPermissions.DataLakePrincipalProperty | cdk.IResolvable;
    /**
     * The resource to be granted or revoked permissions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html#cfn-lakeformation-principalpermissions-resource
     */
    readonly resource: cdk.IResolvable | CfnPrincipalPermissions.ResourceProperty;
}
/**
 * The `AWS::LakeFormation::Resource` represents the data (  buckets and folders) that is being registered with AWS Lake Formation .
 *
 * During a stack operation, AWS CloudFormation calls the AWS Lake Formation [`RegisterResource`](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-credential-vending.html#aws-lake-formation-api-credential-vending-RegisterResource) API operation to register the resource. To remove a `Resource` type, AWS CloudFormation calls the AWS Lake Formation [`DeregisterResource`](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-credential-vending.html#aws-lake-formation-api-credential-vending-DeregisterResource) API operation.
 *
 * @cloudformationResource AWS::LakeFormation::Resource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html
 */
export declare class CfnResource extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResource;
    /**
     * An identifier for the catalog resource.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Indicates whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies.
     */
    hybridAccessEnabled?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: string;
    /**
     * The IAM role that registered a resource.
     */
    roleArn?: string;
    /**
     * Designates a trusted caller, an IAM principal, by registering this caller with the Data Catalog .
     */
    useServiceLinkedRole: boolean | cdk.IResolvable;
    /**
     * Allows Lake Formation to assume a role to access tables in a federated database.
     */
    withFederation?: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourceProps);
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
 * Properties for defining a `CfnResource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html
 */
export interface CfnResourceProps {
    /**
     * Indicates whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html#cfn-lakeformation-resource-hybridaccessenabled
     */
    readonly hybridAccessEnabled?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html#cfn-lakeformation-resource-resourcearn
     */
    readonly resourceArn: string;
    /**
     * The IAM role that registered a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html#cfn-lakeformation-resource-rolearn
     */
    readonly roleArn?: string;
    /**
     * Designates a trusted caller, an IAM principal, by registering this caller with the Data Catalog .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html#cfn-lakeformation-resource-useservicelinkedrole
     */
    readonly useServiceLinkedRole: boolean | cdk.IResolvable;
    /**
     * Allows Lake Formation to assume a role to access tables in a federated database.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html#cfn-lakeformation-resource-withfederation
     */
    readonly withFederation?: boolean | cdk.IResolvable;
}
/**
 * The `AWS::LakeFormation::Tag` resource represents an LF-tag, which consists of a key and one or more possible values for the key.
 *
 * During a stack operation, AWS CloudFormation calls the AWS Lake Formation `CreateLFTag` API to create a tag, and `UpdateLFTag` API to update a tag resource, and a `DeleteLFTag` to delete it.
 *
 * @cloudformationResource AWS::LakeFormation::Tag
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tag.html
 */
export declare class CfnTag extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTag from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTag;
    /**
     * Catalog id string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html) .
     */
    catalogId?: string;
    /**
     * UTF-8 string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html) .
     */
    tagKey: string;
    /**
     * An array of UTF-8 strings, not less than 1 or more than 50 strings.
     */
    tagValues: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTagProps);
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
 * Properties for defining a `CfnTag`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tag.html
 */
export interface CfnTagProps {
    /**
     * Catalog id string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html) .
     *
     * The identifier for the Data Catalog . By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tag.html#cfn-lakeformation-tag-catalogid
     */
    readonly catalogId?: string;
    /**
     * UTF-8 string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html) .
     *
     * The key-name for the LF-tag.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tag.html#cfn-lakeformation-tag-tagkey
     */
    readonly tagKey: string;
    /**
     * An array of UTF-8 strings, not less than 1 or more than 50 strings.
     *
     * A list of possible values of the corresponding `TagKey` of an LF-tag key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tag.html#cfn-lakeformation-tag-tagvalues
     */
    readonly tagValues: Array<string>;
}
/**
 * The `AWS::LakeFormation::TagAssociation` resource represents an assignment of an LF-tag to a Data Catalog resource (database, table, or column).
 *
 * During a stack operation, CloudFormation calls AWS Lake Formation `AddLFTagsToResource` API to create a `TagAssociation` resource and calls the `RemoveLFTagsToResource` API to delete it.
 *
 * @cloudformationResource AWS::LakeFormation::TagAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tagassociation.html
 */
export declare class CfnTagAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTagAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTagAssociation;
    /**
     * Json encoding of the input resource.
     *
     * **Examples** - Database: `{"Catalog":null,"Database":{"CatalogId":"123456789012","Name":"ExampleDbName"},"Table":null,"TableWithColumns":null}`
     * - Table: `{"Catalog":null,"Database":null,"Table":{"CatalogId":"123456789012","DatabaseName":"ExampleDbName","Name":"ExampleTableName","TableWildcard":null},"TableWithColumns":null}`
     * - Columns: `{"Catalog":null,"Database":null,"Table":null,"TableWithColumns":{"CatalogId":"123456789012","DatabaseName":"ExampleDbName","Name":"ExampleTableName","ColumnNames":["ExampleColName1","ExampleColName2"]}}`
     *
     * @cloudformationAttribute ResourceIdentifier
     */
    readonly attrResourceIdentifier: string;
    /**
     * Json encoding of the input LFTags list.
     *
     * For example: `[{"CatalogId":null,"TagKey":"tagKey1","TagValues":null},{"CatalogId":null,"TagKey":"tagKey2","TagValues":null}]`
     *
     * @cloudformationAttribute TagsIdentifier
     */
    readonly attrTagsIdentifier: string;
    /**
     * A structure containing an LF-tag key-value pair.
     */
    lfTags: Array<cdk.IResolvable | CfnTagAssociation.LFTagPairProperty> | cdk.IResolvable;
    /**
     * UTF-8 string (valid values: `DATABASE | TABLE` ).
     */
    resource: cdk.IResolvable | CfnTagAssociation.ResourceProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTagAssociationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTagAssociation {
    /**
     * A structure containing the catalog ID, tag key, and tag values of an LF-tag key-value pair.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-lftagpair.html
     */
    interface LFTagPairProperty {
        /**
         * The identifier for the Data Catalog .
         *
         * By default, it is the account ID of the caller.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-lftagpair.html#cfn-lakeformation-tagassociation-lftagpair-catalogid
         */
        readonly catalogId: string;
        /**
         * The key-name for the LF-tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-lftagpair.html#cfn-lakeformation-tagassociation-lftagpair-tagkey
         */
        readonly tagKey: string;
        /**
         * A list of possible values of the corresponding `TagKey` of an LF-tag key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-lftagpair.html#cfn-lakeformation-tagassociation-lftagpair-tagvalues
         */
        readonly tagValues: Array<string>;
    }
    /**
     * A structure for the resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-resource.html
     */
    interface ResourceProperty {
        /**
         * The identifier for the Data Catalog.
         *
         * By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-resource.html#cfn-lakeformation-tagassociation-resource-catalog
         */
        readonly catalog?: any | cdk.IResolvable;
        /**
         * The database for the resource.
         *
         * Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-resource.html#cfn-lakeformation-tagassociation-resource-database
         */
        readonly database?: CfnTagAssociation.DatabaseResourceProperty | cdk.IResolvable;
        /**
         * The table for the resource.
         *
         * A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-resource.html#cfn-lakeformation-tagassociation-resource-table
         */
        readonly table?: cdk.IResolvable | CfnTagAssociation.TableResourceProperty;
        /**
         * The table with columns for the resource.
         *
         * A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-resource.html#cfn-lakeformation-tagassociation-resource-tablewithcolumns
         */
        readonly tableWithColumns?: cdk.IResolvable | CfnTagAssociation.TableWithColumnsResourceProperty;
    }
    /**
     * A structure for the table object.
     *
     * A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tableresource.html
     */
    interface TableResourceProperty {
        /**
         * The identifier for the Data Catalog .
         *
         * By default, it is the account ID of the caller.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tableresource.html#cfn-lakeformation-tagassociation-tableresource-catalogid
         */
        readonly catalogId: string;
        /**
         * The name of the database for the table.
         *
         * Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tableresource.html#cfn-lakeformation-tagassociation-tableresource-databasename
         */
        readonly databaseName: string;
        /**
         * The name of the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tableresource.html#cfn-lakeformation-tagassociation-tableresource-name
         */
        readonly name?: string;
        /**
         * A wildcard object representing every table under a database.This is an object with no properties that effectively behaves as a true or false depending on whether not it is passed as a parameter. The valid inputs for a property with this type in either yaml or json is null or {}.
         *
         * At least one of `TableResource$Name` or `TableResource$TableWildcard` is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tableresource.html#cfn-lakeformation-tagassociation-tableresource-tablewildcard
         */
        readonly tableWildcard?: any | cdk.IResolvable;
    }
    /**
     * A structure for a table with columns object. This object is only used when granting a SELECT permission.
     *
     * This object must take a value for at least one of `ColumnsNames` , `ColumnsIndexes` , or `ColumnsWildcard` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tablewithcolumnsresource.html
     */
    interface TableWithColumnsResourceProperty {
        /**
         * A wildcard object representing every table under a database.
         *
         * At least one of TableResource$Name or TableResource$TableWildcard is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tablewithcolumnsresource.html#cfn-lakeformation-tagassociation-tablewithcolumnsresource-catalogid
         */
        readonly catalogId: string;
        /**
         * The list of column names for the table.
         *
         * At least one of `ColumnNames` or `ColumnWildcard` is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tablewithcolumnsresource.html#cfn-lakeformation-tagassociation-tablewithcolumnsresource-columnnames
         */
        readonly columnNames: Array<string>;
        /**
         * The name of the database for the table with columns resource.
         *
         * Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tablewithcolumnsresource.html#cfn-lakeformation-tagassociation-tablewithcolumnsresource-databasename
         */
        readonly databaseName: string;
        /**
         * The name of the table resource.
         *
         * A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tablewithcolumnsresource.html#cfn-lakeformation-tagassociation-tablewithcolumnsresource-name
         */
        readonly name: string;
    }
    /**
     * A structure for the database object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-databaseresource.html
     */
    interface DatabaseResourceProperty {
        /**
         * The identifier for the Data Catalog .
         *
         * By default, it should be the account ID of the caller.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-databaseresource.html#cfn-lakeformation-tagassociation-databaseresource-catalogid
         */
        readonly catalogId: string;
        /**
         * The name of the database resource.
         *
         * Unique to the Data Catalog.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-databaseresource.html#cfn-lakeformation-tagassociation-databaseresource-name
         */
        readonly name: string;
    }
}
/**
 * Properties for defining a `CfnTagAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tagassociation.html
 */
export interface CfnTagAssociationProps {
    /**
     * A structure containing an LF-tag key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tagassociation.html#cfn-lakeformation-tagassociation-lftags
     */
    readonly lfTags: Array<cdk.IResolvable | CfnTagAssociation.LFTagPairProperty> | cdk.IResolvable;
    /**
     * UTF-8 string (valid values: `DATABASE | TABLE` ).
     *
     * The resource for which the LF-tag policy applies.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tagassociation.html#cfn-lakeformation-tagassociation-resource
     */
    readonly resource: cdk.IResolvable | CfnTagAssociation.ResourceProperty;
}
