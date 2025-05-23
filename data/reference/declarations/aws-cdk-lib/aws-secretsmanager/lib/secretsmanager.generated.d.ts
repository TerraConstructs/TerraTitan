import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Attaches a resource-based permission policy to a secret.
 *
 * A resource-based policy is optional. If a secret already has a resource policy attached, you must first remove it before attaching a new policy using this CloudFormation resource. You can remove the policy using the [console](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-policies.html) , [CLI](https://docs.aws.amazon.com/cli/latest/reference/secretsmanager/delete-resource-policy.html) , or [API](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteResourcePolicy.html) . For more information, see [Authentication and access control for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html) .
 *
 * *Required permissions:* `secretsmanager:PutResourcePolicy` , `secretsmanager:GetResourcePolicy` . For more information, see [IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecretsmanager.html#awssecretsmanager-actions-as-permissions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html) .
 *
 * @cloudformationResource AWS::SecretsManager::ResourcePolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html
 */
export declare class CfnResourcePolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourcePolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourcePolicy;
    /**
     * The Arn of the secret.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Specifies whether to block resource-based policies that allow broad access to the secret.
     */
    blockPublicPolicy?: boolean | cdk.IResolvable;
    /**
     * A JSON-formatted string for an AWS resource-based policy.
     */
    resourcePolicy: any | cdk.IResolvable;
    /**
     * The ARN or name of the secret to attach the resource-based policy.
     */
    secretId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourcePolicyProps);
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
 * Properties for defining a `CfnResourcePolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html
 */
export interface CfnResourcePolicyProps {
    /**
     * Specifies whether to block resource-based policies that allow broad access to the secret.
     *
     * By default, Secrets Manager blocks policies that allow broad access, for example those that use a wildcard for the principal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html#cfn-secretsmanager-resourcepolicy-blockpublicpolicy
     */
    readonly blockPublicPolicy?: boolean | cdk.IResolvable;
    /**
     * A JSON-formatted string for an AWS resource-based policy.
     *
     * For example policies, see [Permissions policy examples](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html#cfn-secretsmanager-resourcepolicy-resourcepolicy
     */
    readonly resourcePolicy: any | cdk.IResolvable;
    /**
     * The ARN or name of the secret to attach the resource-based policy.
     *
     * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html#cfn-secretsmanager-resourcepolicy-secretid
     */
    readonly secretId: string;
}
/**
 * Configure the rotation schedule and Lambda rotation function for a secret. For more information, see [How rotation works](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html) .
 *
 * For database credentials, refer to the following resources:
 *
 * - Amazon RDS master user credentials: [AWS::RDS::DBCluster MasterUserSecret](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html)
 * - Amazon Redshift admin user credentials: [AWS::Redshift::Cluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html)
 *
 * Choose one of the following options for the rotation function:
 *
 * - Create a new rotation function using `HostedRotationLambda` based on a [Secrets Manager rotation function template](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html) .
 * - Use an existing rotation function by specifying its ARN with `RotationLambdaARN` .
 *
 * > For database secrets defined in the same AWS CloudFormation template as the database or service:
 * >
 * > - Use the [AWS::SecretsManager::SecretTargetAttachment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html) resource to populate the secret with connection details.
 * > - Add a `DependsOn` attribute to the `RotationSchedule` resource that uses a `SecretTargetAttachment` . This ensures the rotation is configured after the secret is populated with connection details. > You can define only one rotation schedule per secret.
 *
 * @cloudformationResource AWS::SecretsManager::RotationSchedule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html
 */
export declare class CfnRotationSchedule extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRotationSchedule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRotationSchedule;
    /**
     * The ARN of the secret.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Creates a new Lambda rotation function based on one of the [Secrets Manager rotation function templates](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html) . To use a rotation function that already exists, specify `RotationLambdaARN` instead.
     */
    hostedRotationLambda?: CfnRotationSchedule.HostedRotationLambdaProperty | cdk.IResolvable;
    /**
     * Determines whether to rotate the secret immediately or wait until the next scheduled rotation window when the rotation schedule is updated.
     */
    rotateImmediatelyOnUpdate?: boolean | cdk.IResolvable;
    /**
     * The ARN of an existing Lambda rotation function.
     */
    rotationLambdaArn?: string;
    /**
     * A structure that defines the rotation configuration for this secret.
     */
    rotationRules?: cdk.IResolvable | CfnRotationSchedule.RotationRulesProperty;
    /**
     * The ARN or name of the secret to rotate. This is unique for each rotation schedule definition.
     */
    secretId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRotationScheduleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRotationSchedule {
    /**
     * Creates a new Lambda rotation function based on one of the [Secrets Manager rotation function templates](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html) .
     *
     * You must specify `Transform: AWS::SecretsManager-2024-09-16` at the beginning of the CloudFormation template.
     *
     * For Amazon RDS master user credentials, see [AWS::RDS::DBCluster MasterUserSecret](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html) .
     *
     * For Amazon Redshift admin user credentials, see [AWS::Redshift::Cluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.html
     */
    interface HostedRotationLambdaProperty {
        /**
         * A string of the characters that you don't want in the password.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.html#cfn-secretsmanager-rotationschedule-hostedrotationlambda-excludecharacters
         */
        readonly excludeCharacters?: string;
        /**
         * The ARN of the KMS key that Secrets Manager uses to encrypt the secret.
         *
         * If you don't specify this value, then Secrets Manager uses the key `aws/secretsmanager` . If `aws/secretsmanager` doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.html#cfn-secretsmanager-rotationschedule-hostedrotationlambda-kmskeyarn
         */
        readonly kmsKeyArn?: string;
        /**
         * The ARN of the secret that contains superuser credentials, if you use the [Alternating users rotation strategy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets_strategies.html#rotating-secrets-two-users) . CloudFormation grants the execution role for the Lambda rotation function `GetSecretValue` permission to the secret in this property. For more information, see [Lambda rotation function execution role permissions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-required-permissions-function.html) .
         *
         * You must create the superuser secret before you can set this property.
         *
         * You must also include the superuser secret ARN as a key in the JSON of the rotating secret so that the Lambda rotation function can find it. CloudFormation does not hardcode secret ARNs in the Lambda rotation function, so you can use the function to rotate multiple secrets. For more information, see [JSON structure of Secrets Manager secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_secret_json_structure.html) .
         *
         * You can specify `MasterSecretArn` or `SuperuserSecretArn` but not both. They represent the same superuser secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.html#cfn-secretsmanager-rotationschedule-hostedrotationlambda-mastersecretarn
         */
        readonly masterSecretArn?: string;
        /**
         * The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the [alternating users strategy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets_strategies.html#rotating-secrets-two-users) and the superuser secret is encrypted with a customer managed key. You don't need to specify this property if the superuser secret is encrypted using the key `aws/secretsmanager` . CloudFormation grants the execution role for the Lambda rotation function `Decrypt` , `DescribeKey` , and `GenerateDataKey` permission to the key in this property. For more information, see [Lambda rotation function execution role permissions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-required-permissions-function.html) .
         *
         * You can specify `MasterSecretKmsKeyArn` or `SuperuserSecretKmsKeyArn` but not both. They represent the same superuser secret KMS key .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.html#cfn-secretsmanager-rotationschedule-hostedrotationlambda-mastersecretkmskeyarn
         */
        readonly masterSecretKmsKeyArn?: string;
        /**
         * The name of the Lambda rotation function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.html#cfn-secretsmanager-rotationschedule-hostedrotationlambda-rotationlambdaname
         */
        readonly rotationLambdaName?: string;
        /**
         * The rotation template to base the rotation function on, one of the following:.
         *
         * - `Db2SingleUser` to use the template [SecretsManagerRDSDb2RotationSingleUser](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-db2-singleuser) .
         * - `Db2MultiUser` to use the template [SecretsManagerRDSDb2RotationMultiUser](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-db2-multiuser) .
         * - `MySQLSingleUser` to use the template [SecretsManagerRDSMySQLRotationSingleUser](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-mysql-singleuser) .
         * - `MySQLMultiUser` to use the template [SecretsManagerRDSMySQLRotationMultiUser](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-mysql-multiuser) .
         * - `PostgreSQLSingleUser` to use the template [SecretsManagerRDSPostgreSQLRotationSingleUser](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-postgre-singleuser)
         * - `PostgreSQLMultiUser` to use the template [SecretsManagerRDSPostgreSQLRotationMultiUser](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-postgre-multiuser) .
         * - `OracleSingleUser` to use the template [SecretsManagerRDSOracleRotationSingleUser](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-oracle-singleuser) .
         * - `OracleMultiUser` to use the template [SecretsManagerRDSOracleRotationMultiUser](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-oracle-multiuser) .
         * - `MariaDBSingleUser` to use the template [SecretsManagerRDSMariaDBRotationSingleUser](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-mariadb-singleuser) .
         * - `MariaDBMultiUser` to use the template [SecretsManagerRDSMariaDBRotationMultiUser](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-mariadb-multiuser) .
         * - `SQLServerSingleUser` to use the template [SecretsManagerRDSSQLServerRotationSingleUser](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-sqlserver-singleuser) .
         * - `SQLServerMultiUser` to use the template [SecretsManagerRDSSQLServerRotationMultiUser](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-sqlserver-multiuser) .
         * - `RedshiftSingleUser` to use the template [SecretsManagerRedshiftRotationSingleUsr](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-redshift-singleuser) .
         * - `RedshiftMultiUser` to use the template [SecretsManagerRedshiftRotationMultiUser](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-redshift-multiuser) .
         * - `MongoDBSingleUser` to use the template [SecretsManagerMongoDBRotationSingleUser](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-mongodb-singleuser) .
         * - `MongoDBMultiUser` to use the template [SecretsManagerMongoDBRotationMultiUser](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#sar-template-mongodb-multiuser) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.html#cfn-secretsmanager-rotationschedule-hostedrotationlambda-rotationtype
         */
        readonly rotationType: string;
        /**
         * > Do not set this value if you are using `Transform: AWS::SecretsManager-2024-09-16` .
         *
         * Over time, the updated rotation lambda artifacts vended by AWS may not be compatible with the code or shared object files defined in the rotation function deployment package.
         * >
         * > Only define the `Runtime` key if:
         * >
         * > - You are using `Transform: AWS::SecretsManager-2020-07-23` .
         * > - The code or shared object files defined in the rotation function deployment package are incompatible with Python 3.9.
         *
         * The Python Runtime version for with the rotation function. By default, CloudFormation deploys Python 3.9 binaries for the rotation function. To use a different version of Python, you must do the following two steps:
         *
         * - Deploy the matching version Python binaries with your rotation function.
         * - Set the version number in this field. For example, for Python 3.7, enter *python3.7* .
         *
         * If you only do one of the steps, your rotation function will be incompatible with the binaries. For more information, see [Why did my Lambda rotation function fail with a "pg module not found" error](https://docs.aws.amazon.com/https://repost.aws/knowledge-center/secrets-manager-lambda-rotation) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.html#cfn-secretsmanager-rotationschedule-hostedrotationlambda-runtime
         */
        readonly runtime?: string;
        /**
         * The ARN of the secret that contains superuser credentials, if you use the [Alternating users rotation strategy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets_strategies.html#rotating-secrets-two-users) . CloudFormation grants the execution role for the Lambda rotation function `GetSecretValue` permission to the secret in this property. For more information, see [Lambda rotation function execution role permissions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-required-permissions-function.html) .
         *
         * You must create the superuser secret before you can set this property.
         *
         * You must also include the superuser secret ARN as a key in the JSON of the rotating secret so that the Lambda rotation function can find it. CloudFormation does not hardcode secret ARNs in the Lambda rotation function, so you can use the function to rotate multiple secrets. For more information, see [JSON structure of Secrets Manager secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_secret_json_structure.html) .
         *
         * You can specify `MasterSecretArn` or `SuperuserSecretArn` but not both. They represent the same superuser secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.html#cfn-secretsmanager-rotationschedule-hostedrotationlambda-superusersecretarn
         */
        readonly superuserSecretArn?: string;
        /**
         * The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the [alternating users strategy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets_strategies.html#rotating-secrets-two-users) and the superuser secret is encrypted with a customer managed key. You don't need to specify this property if the superuser secret is encrypted using the key `aws/secretsmanager` . CloudFormation grants the execution role for the Lambda rotation function `Decrypt` , `DescribeKey` , and `GenerateDataKey` permission to the key in this property. For more information, see [Lambda rotation function execution role permissions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-required-permissions-function.html) .
         *
         * You can specify `MasterSecretKmsKeyArn` or `SuperuserSecretKmsKeyArn` but not both. They represent the same superuser secret KMS key .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.html#cfn-secretsmanager-rotationschedule-hostedrotationlambda-superusersecretkmskeyarn
         */
        readonly superuserSecretKmsKeyArn?: string;
        /**
         * A comma-separated list of security group IDs applied to the target database.
         *
         * The template applies the same security groups as on the Lambda rotation function that is created as part of this stack.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.html#cfn-secretsmanager-rotationschedule-hostedrotationlambda-vpcsecuritygroupids
         */
        readonly vpcSecurityGroupIds?: string;
        /**
         * A comma separated list of VPC subnet IDs of the target database network.
         *
         * The Lambda rotation function is in the same subnet group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.html#cfn-secretsmanager-rotationschedule-hostedrotationlambda-vpcsubnetids
         */
        readonly vpcSubnetIds?: string;
    }
    /**
     * The rotation schedule and window.
     *
     * We recommend you use `ScheduleExpression` to set a cron or rate expression for the schedule and `Duration` to set the length of the rotation window.
     *
     * > When changing an existing rotation schedule and setting `RotateImmediatelyOnUpdate` to `false` :
     * >
     * > - If using `AutomaticallyAfterDays` or a `ScheduleExpression` with `rate()` , the previously scheduled rotation might still occur.
     * > - To prevent unintended rotations, use a `ScheduleExpression` with `cron()` for granular control over rotation windows.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-rotationrules.html
     */
    interface RotationRulesProperty {
        /**
         * The number of days between automatic scheduled rotations of the secret.
         *
         * You can use this value to check that your secret meets your compliance guidelines for how often secrets must be rotated.
         *
         * In `DescribeSecret` and `ListSecrets` , this value is calculated from the rotation schedule after every successful rotation. In `RotateSecret` , you can set the rotation schedule in `RotationRules` with `AutomaticallyAfterDays` or `ScheduleExpression` , but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-rotationrules.html#cfn-secretsmanager-rotationschedule-rotationrules-automaticallyafterdays
         */
        readonly automaticallyAfterDays?: number;
        /**
         * The length of the rotation window in hours, for example `3h` for a three hour window.
         *
         * Secrets Manager rotates your secret at any time during this window. The window must not extend into the next rotation window or the next UTC day. The window starts according to the `ScheduleExpression` . If you don't specify a `Duration` , for a `ScheduleExpression` in hours, the window automatically closes after one hour. For a `ScheduleExpression` in days, the window automatically closes at the end of the UTC day. For more information, including examples, see [Schedule expressions in Secrets Manager rotation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_schedule.html) in the *Secrets Manager Users Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-rotationrules.html#cfn-secretsmanager-rotationschedule-rotationrules-duration
         */
        readonly duration?: string;
        /**
         * A `cron()` or `rate()` expression that defines the schedule for rotating your secret.
         *
         * Secrets Manager rotation schedules use UTC time zone. Secrets Manager rotates your secret any time during a rotation window.
         *
         * Secrets Manager `rate()` expressions represent the interval in hours or days that you want to rotate your secret, for example `rate(12 hours)` or `rate(10 days)` . You can rotate a secret as often as every four hours. If you use a `rate()` expression, the rotation window starts at midnight. For a rate in hours, the default rotation window closes after one hour. For a rate in days, the default rotation window closes at the end of the day. You can set the `Duration` to change the rotation window. The rotation window must not extend into the next UTC day or into the next rotation window.
         *
         * You can use a `cron()` expression to create a rotation schedule that is more detailed than a rotation interval. For more information, including examples, see [Schedule expressions in Secrets Manager rotation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_schedule.html) in the *Secrets Manager Users Guide* . For a cron expression that represents a schedule in hours, the default rotation window closes after one hour. For a cron expression that represents a schedule in days, the default rotation window closes at the end of the day. You can set the `Duration` to change the rotation window. The rotation window must not extend into the next UTC day or into the next rotation window.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-rotationrules.html#cfn-secretsmanager-rotationschedule-rotationrules-scheduleexpression
         */
        readonly scheduleExpression?: string;
    }
}
/**
 * Properties for defining a `CfnRotationSchedule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html
 */
export interface CfnRotationScheduleProps {
    /**
     * Creates a new Lambda rotation function based on one of the [Secrets Manager rotation function templates](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html) . To use a rotation function that already exists, specify `RotationLambdaARN` instead.
     *
     * You must specify `Transform: AWS::SecretsManager-2024-09-16` at the beginning of the CloudFormation template. Transforms are macros hosted by AWS CloudFormation that help you create and manage complex infrastructure. The `Transform: AWS::SecretsManager-2024-09-16` transform automatically extends the CloudFormation stack to include a nested stack (of type `AWS::CloudFormation::Stack` ), which then creates and updates on your behalf during subsequent stack operations, the appropriate rotation Lambda function for your database or service. For general information on transforms, see the [AWS CloudFormation documentation.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-reference.html)
     *
     * For Amazon RDS master user credentials, see [AWS::RDS::DBCluster MasterUserSecret](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html) .
     *
     * For Amazon Redshift admin user credentials, see [AWS::Redshift::Cluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html#cfn-secretsmanager-rotationschedule-hostedrotationlambda
     */
    readonly hostedRotationLambda?: CfnRotationSchedule.HostedRotationLambdaProperty | cdk.IResolvable;
    /**
     * Determines whether to rotate the secret immediately or wait until the next scheduled rotation window when the rotation schedule is updated.
     *
     * The rotation schedule is defined in `RotationRules` .
     *
     * The default for `RotateImmediatelyOnUpdate` is `true` . If you don't specify this value, Secrets Manager rotates the secret immediately.
     *
     * If you set `RotateImmediatelyOnUpdate` to `false` , Secrets Manager tests the rotation configuration by running the [`testSecret` step](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html) of the Lambda rotation function. This test creates an `AWSPENDING` version of the secret and then removes it.
     *
     * > When changing an existing rotation schedule and setting `RotateImmediatelyOnUpdate` to `false` :
     * >
     * > - If using `AutomaticallyAfterDays` or a `ScheduleExpression` with `rate()` , the previously scheduled rotation might still occur.
     * > - To prevent unintended rotations, use a `ScheduleExpression` with `cron()` for granular control over rotation windows.
     *
     * Rotation is an asynchronous process. For more information, see [How rotation works](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html#cfn-secretsmanager-rotationschedule-rotateimmediatelyonupdate
     */
    readonly rotateImmediatelyOnUpdate?: boolean | cdk.IResolvable;
    /**
     * The ARN of an existing Lambda rotation function.
     *
     * To specify a rotation function that is also defined in this template, use the [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html) function.
     *
     * For Amazon RDS master user credentials, see [AWS::RDS::DBCluster MasterUserSecret](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html) .
     *
     * For Amazon Redshift admin user credentials, see [AWS::Redshift::Cluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html) .
     *
     * To create a new rotation function based on one of the [Secrets Manager rotation function templates](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html) , specify `HostedRotationLambda` instead.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html#cfn-secretsmanager-rotationschedule-rotationlambdaarn
     */
    readonly rotationLambdaArn?: string;
    /**
     * A structure that defines the rotation configuration for this secret.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html#cfn-secretsmanager-rotationschedule-rotationrules
     */
    readonly rotationRules?: cdk.IResolvable | CfnRotationSchedule.RotationRulesProperty;
    /**
     * The ARN or name of the secret to rotate. This is unique for each rotation schedule definition.
     *
     * To reference a secret also created in this template, use the [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html) function with the secret's logical ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html#cfn-secretsmanager-rotationschedule-secretid
     */
    readonly secretId: string;
}
/**
 * Creates a new secret.
 *
 * A *secret* can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager.
 *
 * For Amazon RDS master user credentials, see [AWS::RDS::DBCluster MasterUserSecret](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html) .
 *
 * For Amazon Redshift admin user credentials, see [AWS::Redshift::Cluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html) .
 *
 * To retrieve a secret in a CloudFormation template, use a *dynamic reference* . For more information, see [Retrieve a secret in an AWS CloudFormation resource](https://docs.aws.amazon.com/secretsmanager/latest/userguide/cfn-example_reference-secret.html) .
 *
 * For information about creating a secret in the console, see [Create a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_create-basic-secret.html) . For information about creating a secret using the CLI or SDK, see [CreateSecret](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html) .
 *
 * For information about retrieving a secret in code, see [Retrieve secrets from Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html) .
 *
 * @cloudformationResource AWS::SecretsManager::Secret
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html
 */
export declare class CfnSecret extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSecret from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSecret;
    /**
     * The ARN of the secret.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The description of the secret.
     */
    description?: string;
    /**
     * A structure that specifies how to generate a password to encrypt and store in the secret.
     */
    generateSecretString?: CfnSecret.GenerateSecretStringProperty | cdk.IResolvable;
    /**
     * The ARN, key ID, or alias of the AWS KMS key that Secrets Manager uses to encrypt the secret value in the secret.
     */
    kmsKeyId?: string;
    /**
     * The name of the new secret.
     */
    name?: string;
    /**
     * A custom type that specifies a `Region` and the `KmsKeyId` for a replica secret.
     */
    replicaRegions?: Array<cdk.IResolvable | CfnSecret.ReplicaRegionProperty> | cdk.IResolvable;
    /**
     * The text to encrypt and store in the secret.
     */
    secretString?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags to attach to the secret.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnSecretProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSecret {
    /**
     * Generates a random password.
     *
     * We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.
     *
     * *Required permissions:* `secretsmanager:GetRandomPassword` . For more information, see [IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecretsmanager.html#awssecretsmanager-actions-as-permissions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-generatesecretstring.html
     */
    interface GenerateSecretStringProperty {
        /**
         * A string of the characters that you don't want in the password.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-generatesecretstring.html#cfn-secretsmanager-secret-generatesecretstring-excludecharacters
         */
        readonly excludeCharacters?: string;
        /**
         * Specifies whether to exclude lowercase letters from the password.
         *
         * If you don't include this switch, the password can contain lowercase letters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-generatesecretstring.html#cfn-secretsmanager-secret-generatesecretstring-excludelowercase
         */
        readonly excludeLowercase?: boolean | cdk.IResolvable;
        /**
         * Specifies whether to exclude numbers from the password.
         *
         * If you don't include this switch, the password can contain numbers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-generatesecretstring.html#cfn-secretsmanager-secret-generatesecretstring-excludenumbers
         */
        readonly excludeNumbers?: boolean | cdk.IResolvable;
        /**
         * Specifies whether to exclude the following punctuation characters from the password: `!
         *
         * " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~` . If you don't include this switch, the password can contain punctuation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-generatesecretstring.html#cfn-secretsmanager-secret-generatesecretstring-excludepunctuation
         */
        readonly excludePunctuation?: boolean | cdk.IResolvable;
        /**
         * Specifies whether to exclude uppercase letters from the password.
         *
         * If you don't include this switch, the password can contain uppercase letters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-generatesecretstring.html#cfn-secretsmanager-secret-generatesecretstring-excludeuppercase
         */
        readonly excludeUppercase?: boolean | cdk.IResolvable;
        /**
         * The JSON key name for the key/value pair, where the value is the generated password.
         *
         * This pair is added to the JSON structure specified by the `SecretStringTemplate` parameter. If you specify this parameter, then you must also specify `SecretStringTemplate` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-generatesecretstring.html#cfn-secretsmanager-secret-generatesecretstring-generatestringkey
         */
        readonly generateStringKey?: string;
        /**
         * Specifies whether to include the space character.
         *
         * If you include this switch, the password can contain space characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-generatesecretstring.html#cfn-secretsmanager-secret-generatesecretstring-includespace
         */
        readonly includeSpace?: boolean | cdk.IResolvable;
        /**
         * The length of the password.
         *
         * If you don't include this parameter, the default length is 32 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-generatesecretstring.html#cfn-secretsmanager-secret-generatesecretstring-passwordlength
         */
        readonly passwordLength?: number;
        /**
         * Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation.
         *
         * If you don't include this switch, the password contains at least one of every character type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-generatesecretstring.html#cfn-secretsmanager-secret-generatesecretstring-requireeachincludedtype
         */
        readonly requireEachIncludedType?: boolean | cdk.IResolvable;
        /**
         * A template that the generated string must match.
         *
         * When you make a change to this property, a new secret version is created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-generatesecretstring.html#cfn-secretsmanager-secret-generatesecretstring-secretstringtemplate
         */
        readonly secretStringTemplate?: string;
    }
    /**
     * Specifies a `Region` and the `KmsKeyId` for a replica secret.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-replicaregion.html
     */
    interface ReplicaRegionProperty {
        /**
         * The ARN, key ID, or alias of the KMS key to encrypt the secret.
         *
         * If you don't include this field, Secrets Manager uses `aws/secretsmanager` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-replicaregion.html#cfn-secretsmanager-secret-replicaregion-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * A string that represents a `Region` , for example "us-east-1".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-replicaregion.html#cfn-secretsmanager-secret-replicaregion-region
         */
        readonly region: string;
    }
}
/**
 * Properties for defining a `CfnSecret`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html
 */
export interface CfnSecretProps {
    /**
     * The description of the secret.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html#cfn-secretsmanager-secret-description
     */
    readonly description?: string;
    /**
     * A structure that specifies how to generate a password to encrypt and store in the secret.
     *
     * To include a specific string in the secret, use `SecretString` instead. If you omit both `GenerateSecretString` and `SecretString` , you create an empty secret. When you make a change to this property, a new secret version is created.
     *
     * We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html#cfn-secretsmanager-secret-generatesecretstring
     */
    readonly generateSecretString?: CfnSecret.GenerateSecretStringProperty | cdk.IResolvable;
    /**
     * The ARN, key ID, or alias of the AWS KMS key that Secrets Manager uses to encrypt the secret value in the secret.
     *
     * An alias is always prefixed by `alias/` , for example `alias/aws/secretsmanager` . For more information, see [About aliases](https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html) .
     *
     * To use a AWS KMS key in a different account, use the key ARN or the alias ARN.
     *
     * If you don't specify this value, then Secrets Manager uses the key `aws/secretsmanager` . If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
     *
     * If the secret is in a different AWS account from the credentials calling the API, then you can't use `aws/secretsmanager` to encrypt the secret, and you must create and use a customer managed AWS KMS key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html#cfn-secretsmanager-secret-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The name of the new secret.
     *
     * The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@-
     *
     * Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html#cfn-secretsmanager-secret-name
     */
    readonly name?: string;
    /**
     * A custom type that specifies a `Region` and the `KmsKeyId` for a replica secret.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html#cfn-secretsmanager-secret-replicaregions
     */
    readonly replicaRegions?: Array<cdk.IResolvable | CfnSecret.ReplicaRegionProperty> | cdk.IResolvable;
    /**
     * The text to encrypt and store in the secret.
     *
     * We recommend you use a JSON structure of key/value pairs for your secret value. To generate a random password, use `GenerateSecretString` instead. If you omit both `GenerateSecretString` and `SecretString` , you create an empty secret. When you make a change to this property, a new secret version is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html#cfn-secretsmanager-secret-secretstring
     */
    readonly secretString?: string;
    /**
     * A list of tags to attach to the secret.
     *
     * Each tag is a key and value pair of strings in a JSON text string, for example:
     *
     * `[{"Key":"CostCenter","Value":"12345"},{"Key":"environment","Value":"production"}]`
     *
     * Secrets Manager tag key names are case sensitive. A tag with the key "ABC" is a different tag from one with key "abc".
     *
     * Stack-level tags, tags you apply to the CloudFormation stack, are also attached to the secret.
     *
     * If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an `Access Denied` error. For more information, see [Control access to secrets using tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#tag-secrets-abac) and [Limit access to identities with tags that match secrets' tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#auth-and-access_tags2) .
     *
     * For information about how to format a JSON parameter for the various command line tool environments, see [Using JSON for Parameters](https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json) . If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text.
     *
     * The following restrictions apply to tags:
     *
     * - Maximum number of tags per secret: 50
     * - Maximum key length: 127 Unicode characters in UTF-8
     * - Maximum value length: 255 Unicode characters in UTF-8
     * - Tag keys and values are case sensitive.
     * - Do not use the `aws:` prefix in your tag names or values because AWS reserves it for AWS use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.
     * - If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : / @.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html#cfn-secretsmanager-secret-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::SecretsManager::SecretTargetAttachment` resource completes the final link between a Secrets Manager secret and the associated database by adding the database connection information to the secret JSON.
 *
 * If you want to turn on automatic rotation for a database credential secret, the secret must contain the database connection information. For more information, see [JSON structure of Secrets Manager database credential secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_secret_json_structure.html) .
 *
 * A single secret resource can only have one target attached to it.
 *
 * When you remove a `SecretTargetAttachment` from a stack, Secrets Manager removes the database connection information from the secret with a `PutSecretValue` call.
 *
 * For Amazon RDS master user credentials, see [AWS::RDS::DBCluster MasterUserSecret](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html) .
 *
 * For Amazon Redshift admin user credentials, see [AWS::Redshift::Cluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html) .
 *
 * @cloudformationResource AWS::SecretsManager::SecretTargetAttachment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html
 */
export declare class CfnSecretTargetAttachment extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSecretTargetAttachment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSecretTargetAttachment;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ARN or name of the secret.
     */
    secretId: string;
    /**
     * The ID of the database or cluster.
     */
    targetId: string;
    /**
     * A string that defines the type of service or database associated with the secret.
     */
    targetType: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSecretTargetAttachmentProps);
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
 * Properties for defining a `CfnSecretTargetAttachment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html
 */
export interface CfnSecretTargetAttachmentProps {
    /**
     * The ARN or name of the secret.
     *
     * To reference a secret also created in this template, use the see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html) function with the secret's logical ID. This field is unique for each target attachment definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html#cfn-secretsmanager-secrettargetattachment-secretid
     */
    readonly secretId: string;
    /**
     * The ID of the database or cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html#cfn-secretsmanager-secrettargetattachment-targetid
     */
    readonly targetId: string;
    /**
     * A string that defines the type of service or database associated with the secret.
     *
     * This value instructs Secrets Manager how to update the secret with the details of the service or database. This value must be one of the following:
     *
     * - AWS::RDS::DBInstance
     * - AWS::RDS::DBCluster
     * - AWS::Redshift::Cluster
     * - AWS::RedshiftServerless::Namespace
     * - AWS::DocDB::DBInstance
     * - AWS::DocDB::DBCluster
     * - AWS::DocDBElastic::Cluster
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html#cfn-secretsmanager-secrettargetattachment-targettype
     */
    readonly targetType: string;
}
