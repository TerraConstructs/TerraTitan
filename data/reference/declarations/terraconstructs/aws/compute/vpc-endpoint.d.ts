import { vpcEndpoint } from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { Connections, IConnectable } from "./connections";
import { ISecurityGroup } from "./security-group";
import { IVpc, SubnetSelection } from "./vpc";
import { IAwsConstruct, AwsConstructBase, AwsConstructProps } from "../aws-construct";
import * as iam from "../iam";
/**
 * Outputs which may be registered for output via the Grid.
 */
export interface VpcEndpointOutputs {
    /**
     * The VPC endpoint identifier.
     * @attribute
     */
    readonly vpcEndpointId: string;
}
/**
 * A VPC endpoint.
 */
export interface IVpcEndpoint extends IAwsConstruct {
    /** Strongly typed outputs */
    readonly vpcEndpointOutputs: VpcEndpointOutputs;
    /**
     * The VPC endpoint identifier.
     * @attribute
     */
    readonly vpcEndpointId: string;
}
export declare abstract class VpcEndpoint extends AwsConstructBase implements IVpcEndpoint {
    abstract readonly vpcEndpointId: string;
    get vpcEndpointOutputs(): VpcEndpointOutputs;
    get outputs(): Record<string, any>;
    protected policyDocument?: iam.PolicyDocument;
    /**
     * Adds a statement to the policy document of the VPC endpoint. The statement
     * must have a Principal.
     *
     * Not all interface VPC endpoints support policy. For more information
     * see https://docs.aws.amazon.com/vpc/latest/userguide/vpce-interface.html
     *
     * @param statement the IAM statement to add
     */
    addToPolicy(statement: iam.PolicyStatement): void;
}
/**
 * A gateway VPC endpoint.
 */
export interface IGatewayVpcEndpoint extends IVpcEndpoint {
}
/**
 * The type of VPC endpoint.
 */
export declare enum VpcEndpointType {
    /**
     * Interface
     *
     * An interface endpoint is an elastic network interface with a private IP
     * address that serves as an entry point for traffic destined to a supported
     * service.
     */
    INTERFACE = "Interface",
    /**
     * Gateway
     *
     * A gateway endpoint is a gateway that is a target for a specified route in
     * your route table, used for traffic destined to a supported AWS service.
     */
    GATEWAY = "Gateway"
}
/**
 * A service for a gateway VPC endpoint.
 */
export interface IGatewayVpcEndpointService {
    /**
     * The name of the service.
     */
    readonly name: string;
}
/**
 * An AWS service for a gateway VPC endpoint.
 */
export declare class GatewayVpcEndpointAwsService implements IGatewayVpcEndpointService {
    static readonly DYNAMODB: GatewayVpcEndpointAwsService;
    static readonly S3: GatewayVpcEndpointAwsService;
    static readonly S3_EXPRESS: GatewayVpcEndpointAwsService;
    /**
     * The name of the service.
     */
    readonly name: string;
    /**
     * The short name of the service. e.g. ecs
     */
    readonly shortName: string;
    constructor(name: string, prefix?: string);
}
/**
 * Options to add a gateway endpoint to a VPC.
 */
export interface GatewayVpcEndpointOptions {
    /**
     * The service to use for this gateway VPC endpoint.
     */
    readonly service: IGatewayVpcEndpointService;
    /**
     * Where to add endpoint routing.
     *
     * By default, this endpoint will be routable from all subnets in the VPC.
     * Specify a list of subnet selection objects here to be more specific.
     *
     * @default - All subnets in the VPC
     * @example
     *
     * declare const vpc: compute.Vpc;
     *
     * vpc.addGatewayEndpoint('DynamoDbEndpoint', {
     *   service: ec2.GatewayVpcEndpointAwsService.DYNAMODB,
     *   // Add only to ISOLATED subnets
     *   subnets: [
     *     { subnetType: ec2.SubnetType.PRIVATE_ISOLATED }
     *   ]
     * });
     *
     *
     */
    readonly subnets?: SubnetSelection[];
}
/**
 * Construction properties for a GatewayVpcEndpoint.
 */
export interface GatewayVpcEndpointProps extends GatewayVpcEndpointOptions, AwsConstructProps {
    /**
     * The VPC network in which the gateway endpoint will be used.
     */
    readonly vpc: IVpc;
}
/**
 * A gateway VPC endpoint.
 * @resource aws_vpc_endpoint
 */
export declare class GatewayVpcEndpoint extends VpcEndpoint implements IGatewayVpcEndpoint {
    static fromGatewayVpcEndpointId(scope: Construct, id: string, gatewayVpcEndpointId: string): IGatewayVpcEndpoint;
    /**
     * The gateway VPC endpoint identifier.
     */
    readonly vpcEndpointId: string;
    /**
     * @attribute
     */
    readonly vpcEndpointNetworkInterfaceIds: string[];
    /**
     * @attribute
     */
    readonly vpcEndpointDnsEntries: vpcEndpoint.VpcEndpointDnsEntryList;
    constructor(scope: Construct, id: string, props: GatewayVpcEndpointProps);
}
/**
 * A service for an interface VPC endpoint.
 */
export interface IInterfaceVpcEndpointService {
    /**
     * The name of the service.
     */
    readonly name: string;
    /**
     * The port of the service.
     */
    readonly port: number;
    /**
     * Whether Private DNS is supported by default.
     */
    readonly privateDnsDefault?: boolean;
}
/**
 * A custom-hosted service for an interface VPC endpoint.
 */
export declare class InterfaceVpcEndpointService implements IInterfaceVpcEndpointService {
    /**
     * The name of the service.
     */
    readonly name: string;
    /**
     * The port of the service.
     */
    readonly port: number;
    /**
     * Whether Private DNS is supported by default.
     */
    readonly privateDnsDefault?: boolean;
    constructor(name: string, port?: number);
}
/**
 * Optional properties for the InterfaceVpcEndpointAwsService class
 */
export interface InterfaceVpcEndpointAwsServiceProps {
    /**
     * If true, the service is a global endpoint and
     * its name will not be prefixed with the stack's region.
     *
     * @default false
     */
    readonly global?: boolean;
}
/**
 * An AWS service for an interface VPC endpoint.
 */
export declare class InterfaceVpcEndpointAwsService implements IInterfaceVpcEndpointService {
    static readonly ACCESS_ANALYZER: InterfaceVpcEndpointAwsService;
    static readonly ACCOUNT_MANAGEMENT: InterfaceVpcEndpointAwsService;
    static readonly AIRFLOW_API: InterfaceVpcEndpointAwsService;
    static readonly AIRFLOW_API_FIPS: InterfaceVpcEndpointAwsService;
    static readonly AIRFLOW_ENV: InterfaceVpcEndpointAwsService;
    static readonly AIRFLOW_ENV_FIPS: InterfaceVpcEndpointAwsService;
    static readonly AIRFLOW_OPS: InterfaceVpcEndpointAwsService;
    static readonly APIGATEWAY: InterfaceVpcEndpointAwsService;
    /** @deprecated - Use InterfaceVpcEndpointAwsService.APP_MESH_ENVOY_MANAGEMENT instead. */
    static readonly APP_MESH: InterfaceVpcEndpointAwsService;
    static readonly APP_MESH_ENVOY_MANAGEMENT: InterfaceVpcEndpointAwsService;
    static readonly APP_MESH_OPS: InterfaceVpcEndpointAwsService;
    static readonly APP_RUNNER: InterfaceVpcEndpointAwsService;
    static readonly APP_RUNNER_REQUESTS: InterfaceVpcEndpointAwsService;
    static readonly APP_SYNC: InterfaceVpcEndpointAwsService;
    static readonly APPCONFIG: InterfaceVpcEndpointAwsService;
    static readonly APPCONFIGDATA: InterfaceVpcEndpointAwsService;
    static readonly APPLICATION_AUTOSCALING: InterfaceVpcEndpointAwsService;
    static readonly APPLICATION_DISCOVERY_ARSENAL: InterfaceVpcEndpointAwsService;
    static readonly APPLICATION_DISCOVERY_SERVICE: InterfaceVpcEndpointAwsService;
    static readonly APPLICATION_MIGRATION_SERVICE: InterfaceVpcEndpointAwsService;
    static readonly APPSTREAM_API: InterfaceVpcEndpointAwsService;
    static readonly APPSTREAM_STREAMING: InterfaceVpcEndpointAwsService;
    static readonly ATHENA: InterfaceVpcEndpointAwsService;
    static readonly AUDIT_MANAGER: InterfaceVpcEndpointAwsService;
    static readonly AUTOSCALING: InterfaceVpcEndpointAwsService;
    static readonly AUTOSCALING_PLANS: InterfaceVpcEndpointAwsService;
    static readonly B2B_DATA_INTERCHANGE: InterfaceVpcEndpointAwsService;
    static readonly BACKUP: InterfaceVpcEndpointAwsService;
    static readonly BACKUP_GATEWAY: InterfaceVpcEndpointAwsService;
    static readonly BATCH: InterfaceVpcEndpointAwsService;
    static readonly BEDROCK: InterfaceVpcEndpointAwsService;
    static readonly BEDROCK_AGENT: InterfaceVpcEndpointAwsService;
    static readonly BEDROCK_AGENT_RUNTIME: InterfaceVpcEndpointAwsService;
    static readonly BEDROCK_RUNTIME: InterfaceVpcEndpointAwsService;
    static readonly BILLING: InterfaceVpcEndpointAwsService;
    static readonly BILLING_AND_COST_MANAGEMENT_FREETIER: InterfaceVpcEndpointAwsService;
    static readonly BILLING_AND_COST_MANAGEMENT_TAX: InterfaceVpcEndpointAwsService;
    static readonly BILLING_CONDUCTOR: InterfaceVpcEndpointAwsService;
    static readonly BRAKET: InterfaceVpcEndpointAwsService;
    static readonly CLEAN_ROOMS: InterfaceVpcEndpointAwsService;
    static readonly CLEAN_ROOMS_ML: InterfaceVpcEndpointAwsService;
    static readonly CLOUD_CONTROL_API: InterfaceVpcEndpointAwsService;
    static readonly CLOUD_CONTROL_API_FIPS: InterfaceVpcEndpointAwsService;
    static readonly CLOUD_DIRECTORY: InterfaceVpcEndpointAwsService;
    static readonly CLOUD_MAP_DATA_SERVICE_DISCOVERY: InterfaceVpcEndpointAwsService;
    static readonly CLOUD_MAP_DATA_SERVICE_DISCOVERY_FIPS: InterfaceVpcEndpointAwsService;
    static readonly CLOUD_MAP_SERVICE_DISCOVERY: InterfaceVpcEndpointAwsService;
    static readonly CLOUD_MAP_SERVICE_DISCOVERY_FIPS: InterfaceVpcEndpointAwsService;
    static readonly CLOUDFORMATION: InterfaceVpcEndpointAwsService;
    static readonly CLOUDHSM: InterfaceVpcEndpointAwsService;
    static readonly CLOUDTRAIL: InterfaceVpcEndpointAwsService;
    /** @deprecated Use InterfaceVpcEndpointAwsService.Q_DEVELOPER_CODE_WHISPERER instead.*/
    static readonly CODEWHISPERER: InterfaceVpcEndpointAwsService;
    /** @deprecated - Use InterfaceVpcEndpointAwsService.CLOUDWATCH_MONITORING instead. */
    static readonly CLOUDWATCH: InterfaceVpcEndpointAwsService;
    static readonly CLOUDWATCH_APPLICATION_INSIGHTS: InterfaceVpcEndpointAwsService;
    static readonly CLOUDWATCH_APPLICATION_SIGNALS: InterfaceVpcEndpointAwsService;
    /** @deprecated - Use InterfaceVpcEndpointAwsService.EVENTBRIDGE instead. */
    static readonly CLOUDWATCH_EVENTS: InterfaceVpcEndpointAwsService;
    static readonly CLOUDWATCH_EVIDENTLY: InterfaceVpcEndpointAwsService;
    static readonly CLOUDWATCH_EVIDENTLY_DATAPLANE: InterfaceVpcEndpointAwsService;
    static readonly CLOUDWATCH_LOGS: InterfaceVpcEndpointAwsService;
    static readonly CLOUDWATCH_MONITORING: InterfaceVpcEndpointAwsService;
    static readonly CLOUDWATCH_NETWORK_MONITOR: InterfaceVpcEndpointAwsService;
    static readonly CLOUDWATCH_RUM: InterfaceVpcEndpointAwsService;
    static readonly CLOUDWATCH_RUM_DATAPLANE: InterfaceVpcEndpointAwsService;
    static readonly CLOUDWATCH_SYNTHETICS: InterfaceVpcEndpointAwsService;
    static readonly CLOUDWATCH_SYNTHETICS_FIPS: InterfaceVpcEndpointAwsService;
    static readonly CODEARTIFACT_API: InterfaceVpcEndpointAwsService;
    static readonly CODEARTIFACT_REPOSITORIES: InterfaceVpcEndpointAwsService;
    static readonly CODEBUILD: InterfaceVpcEndpointAwsService;
    static readonly CODEBUILD_FIPS: InterfaceVpcEndpointAwsService;
    static readonly CODECATALYST: InterfaceVpcEndpointAwsService;
    static readonly CODECATALYST_GIT: InterfaceVpcEndpointAwsService;
    static readonly CODECATALYST_PACKAGES: InterfaceVpcEndpointAwsService;
    static readonly CODECOMMIT: InterfaceVpcEndpointAwsService;
    static readonly CODECOMMIT_FIPS: InterfaceVpcEndpointAwsService;
    static readonly CODEDEPLOY: InterfaceVpcEndpointAwsService;
    static readonly CODEDEPLOY_COMMANDS_SECURE: InterfaceVpcEndpointAwsService;
    static readonly CODEGURU_PROFILER: InterfaceVpcEndpointAwsService;
    static readonly CODEGURU_REVIEWER: InterfaceVpcEndpointAwsService;
    static readonly CODEPIPELINE: InterfaceVpcEndpointAwsService;
    static readonly CODESTAR_CONNECTIONS: InterfaceVpcEndpointAwsService;
    static readonly CODE_CONNECTIONS: InterfaceVpcEndpointAwsService;
    static readonly COMPREHEND: InterfaceVpcEndpointAwsService;
    static readonly COMPREHEND_MEDICAL: InterfaceVpcEndpointAwsService;
    static readonly COMPUTE_OPTIMIZER: InterfaceVpcEndpointAwsService;
    static readonly CONFIG: InterfaceVpcEndpointAwsService;
    static readonly CONNECT_APP_INTEGRATIONS: InterfaceVpcEndpointAwsService;
    static readonly CONNECT_CASES: InterfaceVpcEndpointAwsService;
    static readonly CONNECT_CONNECT_CAMPAIGNS: InterfaceVpcEndpointAwsService;
    static readonly CONNECT_PROFILE: InterfaceVpcEndpointAwsService;
    static readonly CONNECT_VOICEID: InterfaceVpcEndpointAwsService;
    static readonly CONNECT_WISDOM: InterfaceVpcEndpointAwsService;
    static readonly CONTROL_CATALOG: InterfaceVpcEndpointAwsService;
    static readonly COST_EXPLORER: InterfaceVpcEndpointAwsService;
    static readonly COST_OPTIMIZATION_HUB: InterfaceVpcEndpointAwsService;
    static readonly DATA_EXCHANGE: InterfaceVpcEndpointAwsService;
    static readonly DATA_EXPORTS: InterfaceVpcEndpointAwsService;
    static readonly DATASYNC: InterfaceVpcEndpointAwsService;
    static readonly DATAZONE: InterfaceVpcEndpointAwsService;
    static readonly DATABASE_MIGRATION_SERVICE: InterfaceVpcEndpointAwsService;
    static readonly DATABASE_MIGRATION_SERVICE_FIPS: InterfaceVpcEndpointAwsService;
    static readonly DEADLINE_CLOUD_MANAGEMENT: InterfaceVpcEndpointAwsService;
    static readonly DEADLINE_CLOUD_SCHEDULING: InterfaceVpcEndpointAwsService;
    static readonly DEVOPS_GURU: InterfaceVpcEndpointAwsService;
    static readonly DIRECTORY_SERVICE: InterfaceVpcEndpointAwsService;
    static readonly DIRECTORY_SERVICE_DATA: InterfaceVpcEndpointAwsService;
    static readonly DYNAMODB: InterfaceVpcEndpointAwsService;
    static readonly DYNAMODB_FIPS: InterfaceVpcEndpointAwsService;
    static readonly EBS_DIRECT: InterfaceVpcEndpointAwsService;
    static readonly EC2: InterfaceVpcEndpointAwsService;
    static readonly EC2_MESSAGES: InterfaceVpcEndpointAwsService;
    static readonly ECR: InterfaceVpcEndpointAwsService;
    static readonly ECR_DOCKER: InterfaceVpcEndpointAwsService;
    static readonly ECS: InterfaceVpcEndpointAwsService;
    static readonly ECS_AGENT: InterfaceVpcEndpointAwsService;
    static readonly ECS_TELEMETRY: InterfaceVpcEndpointAwsService;
    static readonly EKS: InterfaceVpcEndpointAwsService;
    static readonly EKS_AUTH: InterfaceVpcEndpointAwsService;
    static readonly ELASTIC_BEANSTALK: InterfaceVpcEndpointAwsService;
    static readonly ELASTIC_BEANSTALK_HEALTH: InterfaceVpcEndpointAwsService;
    static readonly ELASTIC_DISASTER_RECOVERY: InterfaceVpcEndpointAwsService;
    static readonly ELASTIC_FILESYSTEM: InterfaceVpcEndpointAwsService;
    static readonly ELASTIC_FILESYSTEM_FIPS: InterfaceVpcEndpointAwsService;
    static readonly ELASTIC_INFERENCE_RUNTIME: InterfaceVpcEndpointAwsService;
    static readonly ELASTIC_LOAD_BALANCING: InterfaceVpcEndpointAwsService;
    static readonly ELASTICACHE: InterfaceVpcEndpointAwsService;
    static readonly ELASTICACHE_FIPS: InterfaceVpcEndpointAwsService;
    static readonly ELEMENTAL_MEDIACONNECT: InterfaceVpcEndpointAwsService;
    static readonly EMAIL_SMTP: InterfaceVpcEndpointAwsService;
    static readonly EMR: InterfaceVpcEndpointAwsService;
    static readonly EMR_EKS: InterfaceVpcEndpointAwsService;
    static readonly EMR_SERVERLESS: InterfaceVpcEndpointAwsService;
    static readonly EMR_SERVERLESS_LIVY: InterfaceVpcEndpointAwsService;
    static readonly EMR_WAL: InterfaceVpcEndpointAwsService;
    static readonly END_USER_MESSAGING_SOCIAL: InterfaceVpcEndpointAwsService;
    static readonly ENTITY_RESOLUTION: InterfaceVpcEndpointAwsService;
    static readonly EVENTBRIDGE: InterfaceVpcEndpointAwsService;
    static readonly EVENTBRIDGE_SCHEMA_REGISTRY: InterfaceVpcEndpointAwsService;
    static readonly FAULT_INJECTION_SIMULATOR: InterfaceVpcEndpointAwsService;
    static readonly FINSPACE: InterfaceVpcEndpointAwsService;
    static readonly FINSPACE_API: InterfaceVpcEndpointAwsService;
    static readonly FORECAST: InterfaceVpcEndpointAwsService;
    static readonly FORECAST_QUERY: InterfaceVpcEndpointAwsService;
    static readonly FORECAST_FIPS: InterfaceVpcEndpointAwsService;
    static readonly FORECAST_QUERY_FIPS: InterfaceVpcEndpointAwsService;
    static readonly FRAUD_DETECTOR: InterfaceVpcEndpointAwsService;
    static readonly FSX: InterfaceVpcEndpointAwsService;
    static readonly FSX_FIPS: InterfaceVpcEndpointAwsService;
    static readonly CODECOMMIT_GIT: InterfaceVpcEndpointAwsService;
    static readonly CODECOMMIT_GIT_FIPS: InterfaceVpcEndpointAwsService;
    static readonly GLUE: InterfaceVpcEndpointAwsService;
    static readonly GLUE_DATABREW: InterfaceVpcEndpointAwsService;
    static readonly GLUE_DASHBOARD: InterfaceVpcEndpointAwsService;
    static readonly GRAFANA: InterfaceVpcEndpointAwsService;
    static readonly GRAFANA_WORKSPACE: InterfaceVpcEndpointAwsService;
    static readonly GROUNDSTATION: InterfaceVpcEndpointAwsService;
    static readonly GUARDDUTY: InterfaceVpcEndpointAwsService;
    static readonly GUARDDUTY_FIPS: InterfaceVpcEndpointAwsService;
    static readonly GUARDDUTY_DATA: InterfaceVpcEndpointAwsService;
    static readonly GUARDDUTY_DATA_FIPS: InterfaceVpcEndpointAwsService;
    static readonly HEALTH_IMAGING: InterfaceVpcEndpointAwsService;
    static readonly HEALTH_IMAGING_RUNTIME: InterfaceVpcEndpointAwsService;
    static readonly HEALTH_IMAGING_DICOM: InterfaceVpcEndpointAwsService;
    static readonly HEALTHLAKE: InterfaceVpcEndpointAwsService;
    static readonly IAM: InterfaceVpcEndpointAwsService;
    static readonly IAM_IDENTITY_CENTER: InterfaceVpcEndpointAwsService;
    static readonly IAM_ROLES_ANYWHERE: InterfaceVpcEndpointAwsService;
    static readonly IMAGE_BUILDER: InterfaceVpcEndpointAwsService;
    static readonly INSPECTOR: InterfaceVpcEndpointAwsService;
    static readonly INSPECTOR_SCAN: InterfaceVpcEndpointAwsService;
    static readonly INTERNET_MONITOR: InterfaceVpcEndpointAwsService;
    static readonly INTERNET_MONITOR_FIPS: InterfaceVpcEndpointAwsService;
    static readonly INVOICING: InterfaceVpcEndpointAwsService;
    static readonly IOT_CORE: InterfaceVpcEndpointAwsService;
    static readonly IOT_CORE_CREDENTIALS: InterfaceVpcEndpointAwsService;
    static readonly IOT_CORE_DEVICE_ADVISOR: InterfaceVpcEndpointAwsService;
    static readonly IOT_CORE_FLEETHUB_API: InterfaceVpcEndpointAwsService;
    static readonly IOT_CORE_FOR_LORAWAN: InterfaceVpcEndpointAwsService;
    static readonly IOT_FLEETWISE: InterfaceVpcEndpointAwsService;
    static readonly IOT_LORAWAN_CUPS: InterfaceVpcEndpointAwsService;
    static readonly IOT_LORAWAN_LNS: InterfaceVpcEndpointAwsService;
    static readonly IOT_GREENGRASS: InterfaceVpcEndpointAwsService;
    static readonly IOT_ROBORUNNER: InterfaceVpcEndpointAwsService;
    static readonly IOT_SITEWISE_API: InterfaceVpcEndpointAwsService;
    static readonly IOT_SITEWISE_DATA: InterfaceVpcEndpointAwsService;
    static readonly IOT_TWINMAKER_API: InterfaceVpcEndpointAwsService;
    static readonly IOT_TWINMAKER_DATA: InterfaceVpcEndpointAwsService;
    static readonly KAFKA: InterfaceVpcEndpointAwsService;
    static readonly KAFKA_FIPS: InterfaceVpcEndpointAwsService;
    static readonly KAFKA_CONNECT: InterfaceVpcEndpointAwsService;
    static readonly KENDRA: InterfaceVpcEndpointAwsService;
    static readonly KENDRA_RANKING: InterfaceVpcEndpointAwsService;
    static readonly KEYSPACES: InterfaceVpcEndpointAwsService;
    static readonly KEYSPACES_FIPS: InterfaceVpcEndpointAwsService;
    static readonly KINESIS_STREAMS: InterfaceVpcEndpointAwsService;
    static readonly KINESIS_STREAMS_FIPS: InterfaceVpcEndpointAwsService;
    static readonly KINESIS_FIREHOSE: InterfaceVpcEndpointAwsService;
    static readonly KMS: InterfaceVpcEndpointAwsService;
    static readonly KMS_FIPS: InterfaceVpcEndpointAwsService;
    static readonly LAKE_FORMATION: InterfaceVpcEndpointAwsService;
    static readonly LAUNCH_WIZARD: InterfaceVpcEndpointAwsService;
    static readonly LAMBDA: InterfaceVpcEndpointAwsService;
    static readonly LEX_MODELS: InterfaceVpcEndpointAwsService;
    static readonly LEX_RUNTIME: InterfaceVpcEndpointAwsService;
    static readonly LICENSE_MANAGER: InterfaceVpcEndpointAwsService;
    static readonly LICENSE_MANAGER_FIPS: InterfaceVpcEndpointAwsService;
    static readonly LICENSE_MANAGER_LINUX_SUBSCRIPTIONS: InterfaceVpcEndpointAwsService;
    static readonly LICENSE_MANAGER_LINUX_SUBSCRIPTIONS_FIPS: InterfaceVpcEndpointAwsService;
    static readonly LICENSE_MANAGER_USER_SUBSCRIPTIONS: InterfaceVpcEndpointAwsService;
    static readonly LOOKOUT_EQUIPMENT: InterfaceVpcEndpointAwsService;
    static readonly LOOKOUT_METRICS: InterfaceVpcEndpointAwsService;
    static readonly LOOKOUT_VISION: InterfaceVpcEndpointAwsService;
    static readonly MAINFRAME_MODERNIZATION: InterfaceVpcEndpointAwsService;
    static readonly MAINFRAME_MODERNIZATION_APP_TEST: InterfaceVpcEndpointAwsService;
    static readonly MACIE: InterfaceVpcEndpointAwsService;
    static readonly MANAGEMENT_CONSOLE: InterfaceVpcEndpointAwsService;
    static readonly MANAGEMENT_CONSOLE_SIGNIN: InterfaceVpcEndpointAwsService;
    static readonly MANAGED_BLOCKCHAIN_QUERY: InterfaceVpcEndpointAwsService;
    static readonly MANAGED_BLOCKCHAIN_BITCOIN_MAINNET: InterfaceVpcEndpointAwsService;
    static readonly MANAGED_BLOCKCHAIN_BITCOIN_TESTNET: InterfaceVpcEndpointAwsService;
    static readonly MEMORY_DB: InterfaceVpcEndpointAwsService;
    static readonly MEMORY_DB_FIPS: InterfaceVpcEndpointAwsService;
    static readonly MIGRATIONHUB_ORCHESTRATOR: InterfaceVpcEndpointAwsService;
    static readonly MIGRATIONHUB_REFACTOR_SPACES: InterfaceVpcEndpointAwsService;
    static readonly MIGRATIONHUB_STRATEGY: InterfaceVpcEndpointAwsService;
    static readonly MQ: InterfaceVpcEndpointAwsService;
    static readonly NEPTUNE_ANALYTICS: InterfaceVpcEndpointAwsService;
    static readonly NEPTUNE_ANALYTICS_DATA: InterfaceVpcEndpointAwsService;
    static readonly NEPTUNE_ANALYTICS_FIPS: InterfaceVpcEndpointAwsService;
    static readonly NETWORK_FIREWALL: InterfaceVpcEndpointAwsService;
    static readonly NETWORK_FIREWALL_FIPS: InterfaceVpcEndpointAwsService;
    static readonly NETWORK_FLOW_MONITOR: InterfaceVpcEndpointAwsService;
    static readonly NETWORK_FLOW_MONITOR_REPORTS: InterfaceVpcEndpointAwsService;
    static readonly NIMBLE_STUDIO: InterfaceVpcEndpointAwsService;
    static readonly OBSERVABILITY_ADMIN: InterfaceVpcEndpointAwsService;
    static readonly OUTPOSTS: InterfaceVpcEndpointAwsService;
    static readonly ORGANIZATIONS: InterfaceVpcEndpointAwsService;
    static readonly ORGANIZATIONS_FIPS: InterfaceVpcEndpointAwsService;
    static readonly OMICS_ANALYTICS: InterfaceVpcEndpointAwsService;
    static readonly OMICS_CONTROL_STORAGE: InterfaceVpcEndpointAwsService;
    static readonly OMICS_STORAGE: InterfaceVpcEndpointAwsService;
    static readonly OMICS_TAGS: InterfaceVpcEndpointAwsService;
    static readonly OMICS_WORKFLOWS: InterfaceVpcEndpointAwsService;
    static readonly PANORAMA: InterfaceVpcEndpointAwsService;
    static readonly PARALLEL_COMPUTING_SERVICE: InterfaceVpcEndpointAwsService;
    static readonly PARALLEL_COMPUTING_SERVICE_FIPS: InterfaceVpcEndpointAwsService;
    static readonly PAYMENT_CRYPTOGRAPHY_CONTROLPLANE: InterfaceVpcEndpointAwsService;
    static readonly PAYMENT_CRYPTOGRAPHY_DATAPLANE: InterfaceVpcEndpointAwsService;
    static readonly PERSONALIZE: InterfaceVpcEndpointAwsService;
    static readonly PERSONALIZE_EVENTS: InterfaceVpcEndpointAwsService;
    static readonly PERSONALIZE_RUNTIME: InterfaceVpcEndpointAwsService;
    static readonly PINPOINT_V1: InterfaceVpcEndpointAwsService;
    /** @deprecated - Use InterfaceVpcEndpointAwsService.PINPOINT_SMS_VOICE_V2 instead. */
    static readonly PINPOINT: InterfaceVpcEndpointAwsService;
    static readonly PINPOINT_SMS_VOICE_V2: InterfaceVpcEndpointAwsService;
    static readonly PIPES: InterfaceVpcEndpointAwsService;
    static readonly PIPES_DATA: InterfaceVpcEndpointAwsService;
    static readonly PIPES_FIPS: InterfaceVpcEndpointAwsService;
    static readonly PRICE_LIST: InterfaceVpcEndpointAwsService;
    static readonly PRICING_CALCULATOR: InterfaceVpcEndpointAwsService;
    static readonly POLLY: InterfaceVpcEndpointAwsService;
    static readonly PRIVATE_5G: InterfaceVpcEndpointAwsService;
    static readonly PRIVATE_CERTIFICATE_AUTHORITY: InterfaceVpcEndpointAwsService;
    static readonly PRIVATE_CERTIFICATE_AUTHORITY_CONNECTOR_AD: InterfaceVpcEndpointAwsService;
    static readonly PRIVATE_CERTIFICATE_AUTHORITY_CONNECTOR_SCEP: InterfaceVpcEndpointAwsService;
    static readonly PROMETHEUS: InterfaceVpcEndpointAwsService;
    static readonly PROMETHEUS_WORKSPACES: InterfaceVpcEndpointAwsService;
    static readonly PROTON: InterfaceVpcEndpointAwsService;
    static readonly Q_BUSSINESS: InterfaceVpcEndpointAwsService;
    static readonly Q_DEVELOPER: InterfaceVpcEndpointAwsService;
    static readonly Q_DEVELOPER_CODE_WHISPERER: InterfaceVpcEndpointAwsService;
    static readonly Q_DEVELOPER_QAPPS: InterfaceVpcEndpointAwsService;
    static readonly Q_USER_SUBSCRIPTIONS: InterfaceVpcEndpointAwsService;
    static readonly QLDB: InterfaceVpcEndpointAwsService;
    static readonly QUICKSIGHT_WEBSITE: InterfaceVpcEndpointAwsService;
    static readonly RDS: InterfaceVpcEndpointAwsService;
    static readonly RDS_DATA: InterfaceVpcEndpointAwsService;
    static readonly RDS_PERFORMANCE_INSIGHTS: InterfaceVpcEndpointAwsService;
    static readonly RDS_PERFORMANCE_INSIGHTS_FIPS: InterfaceVpcEndpointAwsService;
    static readonly REDSHIFT: InterfaceVpcEndpointAwsService;
    static readonly REDSHIFT_FIPS: InterfaceVpcEndpointAwsService;
    static readonly REDSHIFT_DATA: InterfaceVpcEndpointAwsService;
    static readonly REDSHIFT_DATA_FIPS: InterfaceVpcEndpointAwsService;
    static readonly REDSHIFT_SERVERLESS: InterfaceVpcEndpointAwsService;
    static readonly REDSHIFT_SERVERLESS_FIPS: InterfaceVpcEndpointAwsService;
    static readonly REKOGNITION: InterfaceVpcEndpointAwsService;
    static readonly REKOGNITION_FIPS: InterfaceVpcEndpointAwsService;
    static readonly REKOGNITION_STREAMING: InterfaceVpcEndpointAwsService;
    static readonly REKOGNITION_STREAMING_FIPS: InterfaceVpcEndpointAwsService;
    static readonly REPOST_SPACE: InterfaceVpcEndpointAwsService;
    static readonly RESOURCE_ACCESS_MANAGER: InterfaceVpcEndpointAwsService;
    static readonly RESOURCE_GROUPS: InterfaceVpcEndpointAwsService;
    static readonly RESOURCE_GROUPS_FIPS: InterfaceVpcEndpointAwsService;
    static readonly ROBOMAKER: InterfaceVpcEndpointAwsService;
    static readonly RECYCLE_BIN: InterfaceVpcEndpointAwsService;
    static readonly S3: InterfaceVpcEndpointAwsService;
    static readonly S3_OUTPOSTS: InterfaceVpcEndpointAwsService;
    static readonly S3_MULTI_REGION_ACCESS_POINTS: InterfaceVpcEndpointAwsService;
    static readonly S3_TABLES: InterfaceVpcEndpointAwsService;
    static readonly SAVINGS_PLANS: InterfaceVpcEndpointAwsService;
    static readonly SAGEMAKER_API: InterfaceVpcEndpointAwsService;
    static readonly SAGEMAKER_API_FIPS: InterfaceVpcEndpointAwsService;
    static readonly SAGEMAKER_DATA_SCIENCE_ASSISTANT: InterfaceVpcEndpointAwsService;
    static readonly SAGEMAKER_EXPERIMENTS: InterfaceVpcEndpointAwsService;
    static readonly SAGEMAKER_FEATURESTORE_RUNTIME: InterfaceVpcEndpointAwsService;
    static readonly SAGEMAKER_GEOSPATIAL: InterfaceVpcEndpointAwsService;
    static readonly SAGEMAKER_METRICS: InterfaceVpcEndpointAwsService;
    static readonly SAGEMAKER_NOTEBOOK: InterfaceVpcEndpointAwsService;
    static readonly SAGEMAKER_PARTNER_APP: InterfaceVpcEndpointAwsService;
    static readonly SAGEMAKER_RUNTIME: InterfaceVpcEndpointAwsService;
    static readonly SAGEMAKER_RUNTIME_FIPS: InterfaceVpcEndpointAwsService;
    static readonly SAGEMAKER_STUDIO: InterfaceVpcEndpointAwsService;
    static readonly SECRETS_MANAGER: InterfaceVpcEndpointAwsService;
    static readonly SECURITYHUB: InterfaceVpcEndpointAwsService;
    static readonly SERVICE_CATALOG: InterfaceVpcEndpointAwsService;
    static readonly SERVICE_CATALOG_APPREGISTRY: InterfaceVpcEndpointAwsService;
    static readonly SERVER_MIGRATION_SERVICE: InterfaceVpcEndpointAwsService;
    static readonly SERVER_MIGRATION_SERVICE_FIPS: InterfaceVpcEndpointAwsService;
    static readonly SERVER_MIGRATION_SERVICE_AWSCONNECTOR: InterfaceVpcEndpointAwsService;
    static readonly SERVERLESS_APPLICATION_REPOSITORY: InterfaceVpcEndpointAwsService;
    /** @deprecated - Use InterfaceVpcEndpointAwsService.EMAIL_SMTP instead. */
    static readonly SES: InterfaceVpcEndpointAwsService;
    static readonly SIMSPACE_WEAVER: InterfaceVpcEndpointAwsService;
    static readonly SNOW_DEVICE_MANAGEMENT: InterfaceVpcEndpointAwsService;
    static readonly SNS: InterfaceVpcEndpointAwsService;
    static readonly SQS: InterfaceVpcEndpointAwsService;
    static readonly SSM: InterfaceVpcEndpointAwsService;
    static readonly SSM_FIPS: InterfaceVpcEndpointAwsService;
    static readonly SSM_MESSAGES: InterfaceVpcEndpointAwsService;
    static readonly SSM_CONTACTS: InterfaceVpcEndpointAwsService;
    static readonly SSM_INCIDENTS: InterfaceVpcEndpointAwsService;
    static readonly SSM_QUICK_SETUP: InterfaceVpcEndpointAwsService;
    static readonly STEP_FUNCTIONS: InterfaceVpcEndpointAwsService;
    static readonly STEP_FUNCTIONS_SYNC: InterfaceVpcEndpointAwsService;
    static readonly STORAGE_GATEWAY: InterfaceVpcEndpointAwsService;
    static readonly STS: InterfaceVpcEndpointAwsService;
    static readonly SUPPLY_CHAIN: InterfaceVpcEndpointAwsService;
    static readonly SWF: InterfaceVpcEndpointAwsService;
    static readonly SWF_FIPS: InterfaceVpcEndpointAwsService;
    static readonly TAGGING: InterfaceVpcEndpointAwsService;
    static readonly TELCO_NETWORK_BUILDER: InterfaceVpcEndpointAwsService;
    static readonly TEXTRACT: InterfaceVpcEndpointAwsService;
    static readonly TEXTRACT_FIPS: InterfaceVpcEndpointAwsService;
    static readonly TIMESTREAM_INFLUXDB: InterfaceVpcEndpointAwsService;
    static readonly TIMESTREAM_INFLUXDB_FIPS: InterfaceVpcEndpointAwsService;
    static readonly TRANSCRIBE: InterfaceVpcEndpointAwsService;
    static readonly TRANSCRIBE_STREAMING: InterfaceVpcEndpointAwsService;
    static readonly TRANSFER: InterfaceVpcEndpointAwsService;
    static readonly TRANSFER_SERVER: InterfaceVpcEndpointAwsService;
    static readonly TRANSLATE: InterfaceVpcEndpointAwsService;
    static readonly TRUSTED_ADVISOR: InterfaceVpcEndpointAwsService;
    static readonly WELL_ARCHITECTED_TOOL: InterfaceVpcEndpointAwsService;
    static readonly WORKMAIL: InterfaceVpcEndpointAwsService;
    static readonly WORKSPACES: InterfaceVpcEndpointAwsService;
    static readonly WORKSPACES_THIN_CLIENT: InterfaceVpcEndpointAwsService;
    static readonly WORKSPACES_WEB: InterfaceVpcEndpointAwsService;
    static readonly WORKSPACES_WEB_FIPS: InterfaceVpcEndpointAwsService;
    static readonly XRAY: InterfaceVpcEndpointAwsService;
    static readonly VERIFIED_PERMISSIONS: InterfaceVpcEndpointAwsService;
    static readonly VPC_LATTICE: InterfaceVpcEndpointAwsService;
    /**
     * The name of the service. e.g. com.amazonaws.us-east-1.ecs
     */
    readonly name: string;
    /**
     * The short name of the service. e.g. ecs
     */
    readonly shortName: string;
    /**
     * The port of the service.
     */
    readonly port: number;
    /**
     * Whether Private DNS is supported by default.
     */
    readonly privateDnsDefault?: boolean;
    constructor(name: string, prefix?: string, port?: number, props?: InterfaceVpcEndpointAwsServiceProps);
    /**
     * Get the endpoint prefix for the service in the specified region
     * because the prefix for some of the services in cn-north-1 and cn-northwest-1 are different
     *
     * For future maintenance， the vpc endpoint services could be fetched using AWS CLI Commmand:
     * aws ec2 describe-vpc-endpoint-services
     */
    private getDefaultEndpointPrefix;
    /**
     * Get the endpoint suffix for the service in the specified region.
     * In cn-north-1 and cn-northwest-1, the vpc endpoint of transcribe is:
     *   cn.com.amazonaws.cn-north-1.transcribe.cn
     *   cn.com.amazonaws.cn-northwest-1.transcribe.cn
     * so suffix '.cn' should be return in these scenarios.
     *
     * For future maintenance， the vpc endpoint services could be fetched using AWS CLI Commmand:
     * aws ec2 describe-vpc-endpoint-services
     */
    private getDefaultEndpointSuffix;
}
/**
 * Options to add an interface endpoint to a VPC.
 */
export interface InterfaceVpcEndpointOptions {
    /**
     * The service to use for this interface VPC endpoint.
     */
    readonly service: IInterfaceVpcEndpointService;
    /**
     * Whether to associate a private hosted zone with the specified VPC. This
     * allows you to make requests to the service using its default DNS hostname.
     *
     * @default set by the instance of IInterfaceVpcEndpointService, or true if
     * not defined by the instance of IInterfaceVpcEndpointService
     */
    readonly privateDnsEnabled?: boolean;
    /**
     * The subnets in which to create an endpoint network interface. At most one
     * per availability zone.
     *
     * @default - private subnets
     */
    readonly subnets?: SubnetSelection;
    /**
     * The security groups to associate with this interface VPC endpoint.
     *
     * @default - a new security group is created
     */
    readonly securityGroups?: ISecurityGroup[];
    /**
     * Whether to automatically allow VPC traffic to the endpoint
     *
     * If enabled, all traffic to the endpoint from within the VPC will be
     * automatically allowed. This is done based on the VPC's CIDR range.
     *
     * @default true
     */
    readonly open?: boolean;
}
/**
 * Construction properties for an InterfaceVpcEndpoint.
 */
export interface InterfaceVpcEndpointProps extends InterfaceVpcEndpointOptions {
    /**
     * The VPC network in which the interface endpoint will be used.
     */
    readonly vpc: IVpc;
}
/**
 * An interface VPC endpoint.
 */
export interface IInterfaceVpcEndpoint extends IVpcEndpoint, IConnectable {
}
/**
 * A interface VPC endpoint.
 * @resource AWS::EC2::VPCEndpoint
 */
export declare class InterfaceVpcEndpoint extends VpcEndpoint implements IInterfaceVpcEndpoint {
    /**
     * Imports an existing interface VPC endpoint.
     */
    static fromInterfaceVpcEndpointAttributes(scope: Construct, id: string, attrs: InterfaceVpcEndpointAttributes): IInterfaceVpcEndpoint;
    /**
     * The interface VPC endpoint identifier.
     */
    readonly vpcEndpointId: string;
    /**
     * The DNS entries for the interface VPC endpoint.
     * Each entry is a combination of the hosted zone ID and the DNS name.
     * The entries are ordered as follows: regional public DNS, zonal public DNS, private DNS, and wildcard DNS.
     * This order is not enforced for AWS Marketplace services.
     *
     * The following is an example. In the first entry, the hosted zone ID is Z1HUB23UULQXV
     * and the DNS name is vpce-01abc23456de78f9g-12abccd3.ec2.us-east-1.vpce.amazonaws.com.
     *
     * [
     *  { hostedZoneId: "Z1HUB23UULQXV", "dnsName": "vpce-01abc23456de78f9g-12abccd3.ec2.us-east-1.vpce.amazonaws.com" },
     *  { hostedZoneId: "Z1HUB23UULQXV, "dnsName": "vpce-01abc23456de78f9g-12abccd3-us-east-1a.ec2.us-east-1.vpce.amazonaws.com" },
     *  { hostedZoneId: "Z1C12344VYDITB0, "dnsName": "ec2.us-east-1.amazonaws.com" }
     * ]
     *
     * If you update the PrivateDnsEnabled or SubnetIds properties, the DNS entries in the list will change.
     * @attribute
     */
    readonly vpcEndpointDnsEntries: vpcEndpoint.VpcEndpointDnsEntryList;
    /**
     * One or more network interfaces for the interface VPC endpoint.
     * @attribute
     */
    readonly vpcEndpointNetworkInterfaceIds: string[];
    /**
     * The identifier of the first security group associated with this interface
     * VPC endpoint.
     *
     * @deprecated use the `connections` object
     */
    readonly securityGroupId: string;
    /**
     * Access to network connections.
     */
    readonly connections: Connections;
    resource: vpcEndpoint.VpcEndpoint;
    constructor(scope: Construct, id: string, props: InterfaceVpcEndpointProps);
    /**
     * Determine which subnets to place the endpoint in. This is in its own function
     * because there's a lot of code.
     */
    private endpointSubnets;
}
/**
 * Construction properties for an ImportedInterfaceVpcEndpoint.
 */
export interface InterfaceVpcEndpointAttributes {
    /**
     * The interface VPC endpoint identifier.
     */
    readonly vpcEndpointId: string;
    /**
     * The identifier of the security group associated with the interface VPC endpoint.
     *
     * @deprecated use `securityGroups` instead
     */
    readonly securityGroupId?: string;
    /**
     * The security groups associated with the interface VPC endpoint.
     *
     * If you wish to manage the network connections associated with this endpoint,
     * you will need to specify its security groups.
     */
    readonly securityGroups?: ISecurityGroup[];
    /**
     * The port of the service of the interface VPC endpoint.
     */
    readonly port: number;
}
