import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Use the `AWS::SimSpaceWeaver::Simulation` resource to specify a simulation that AWS CloudFormation starts in the AWS Cloud , in your AWS account .
 *
 * In the resource properties section of your template, provide the name of an existing IAM role configured with the proper permissions, and the name of an existing Amazon S3 bucket. Your account must have permissions to read the Amazon S3 bucket. The Amazon S3 bucket must contain a valid schema. The schema must refer to simulation assets that are already uploaded to the AWS Cloud . For more information, see the [detailed tutorial](https://docs.aws.amazon.com/simspaceweaver/latest/userguide/getting-started_detailed.html) in the *AWS SimSpace Weaver User Guide* .
 *
 * Specify a `SnapshotS3Location` to start a simulation from a snapshot instead of from a schema. When you start a simulation from a snapshot, SimSpace Weaver initializes the entity data in the State Fabric with data saved in the snapshot, starts the spatial and service apps that were running when the snapshot was created, and restores the clock to the appropriate tick. Your app zip files must be in the same location in Amazon S3 as they were in for the original simulation. You must start any custom apps separately. For more information about snapshots, see [Snapshots](https://docs.aws.amazon.com/simspaceweaver/latest/userguide/working-with_snapshots.html) in the *AWS SimSpace Weaver User Guide* .
 *
 * @cloudformationResource AWS::SimSpaceWeaver::Simulation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html
 */
export declare class CfnSimulation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSimulation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSimulation;
    /**
     * The JSON blob that the [DescribeSimulation](https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_DescribeSimulation.html) action returns.
     *
     * @cloudformationAttribute DescribePayload
     */
    readonly attrDescribePayload: string;
    /**
     * The maximum running time of the simulation, specified as a number of minutes (m or M), hours (h or H), or days (d or D).
     */
    maximumDuration?: string;
    /**
     * The name of the simulation.
     */
    name: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management ( IAM ) role that the simulation assumes to perform actions.
     */
    roleArn: string;
    /**
     * The location of the simulation schema in Amazon Simple Storage Service ( Amazon S3 ).
     */
    schemaS3Location?: cdk.IResolvable | CfnSimulation.S3LocationProperty;
    /**
     * The location of the snapshot in Amazon Simple Storage Service ( Amazon S3 ).
     */
    snapshotS3Location?: cdk.IResolvable | CfnSimulation.S3LocationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSimulationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSimulation {
    /**
     * A location in Amazon Simple Storage Service ( Amazon S3 ) where SimSpace Weaver stores simulation data, such as your app .zip files and schema file. For more information about Amazon S3 , see the [*Amazon Simple Storage Service User Guide*](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-simspaceweaver-simulation-s3location.html
     */
    interface S3LocationProperty {
        /**
         * The name of an Amazon S3 bucket.
         *
         * For more information about buckets, see [Creating, configuring, and working with Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) in the *Amazon Simple Storage Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-simspaceweaver-simulation-s3location.html#cfn-simspaceweaver-simulation-s3location-bucketname
         */
        readonly bucketName: string;
        /**
         * The key name of an object in Amazon S3.
         *
         * For more information about Amazon S3 objects and object keys, see [Uploading, downloading, and working with objects in Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/uploading-downloading-objects.html) in the *Amazon Simple Storage Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-simspaceweaver-simulation-s3location.html#cfn-simspaceweaver-simulation-s3location-objectkey
         */
        readonly objectKey: string;
    }
}
/**
 * Properties for defining a `CfnSimulation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html
 */
export interface CfnSimulationProps {
    /**
     * The maximum running time of the simulation, specified as a number of minutes (m or M), hours (h or H), or days (d or D).
     *
     * The simulation stops when it reaches this limit. The maximum value is `14D` , or its equivalent in the other units. The default value is `14D` . A value equivalent to `0` makes the simulation immediately transition to `STOPPING` as soon as it reaches `STARTED` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html#cfn-simspaceweaver-simulation-maximumduration
     */
    readonly maximumDuration?: string;
    /**
     * The name of the simulation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html#cfn-simspaceweaver-simulation-name
     */
    readonly name: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management ( IAM ) role that the simulation assumes to perform actions.
     *
     * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *AWS General Reference* . For more information about IAM roles, see [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) in the *AWS Identity and Access Management User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html#cfn-simspaceweaver-simulation-rolearn
     */
    readonly roleArn: string;
    /**
     * The location of the simulation schema in Amazon Simple Storage Service ( Amazon S3 ).
     *
     * For more information about Amazon S3 , see the [*Amazon Simple Storage Service User Guide*](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) .
     *
     * Provide a `SchemaS3Location` to start your simulation from a schema.
     *
     * If you provide a `SchemaS3Location` then you can't provide a `SnapshotS3Location` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html#cfn-simspaceweaver-simulation-schemas3location
     */
    readonly schemaS3Location?: cdk.IResolvable | CfnSimulation.S3LocationProperty;
    /**
     * The location of the snapshot in Amazon Simple Storage Service ( Amazon S3 ).
     *
     * For more information about Amazon S3 , see the [*Amazon Simple Storage Service User Guide*](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) .
     *
     * Provide a `SnapshotS3Location` to start your simulation from a snapshot.
     *
     * If you provide a `SnapshotS3Location` then you can't provide a `SchemaS3Location` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html#cfn-simspaceweaver-simulation-snapshots3location
     */
    readonly snapshotS3Location?: cdk.IResolvable | CfnSimulation.S3LocationProperty;
}
