import { Construct } from "constructs";
import { InstanceType } from ".";
import { Connections } from "./connections";
import { IInstance, Instance, InstanceOutputs } from "./instance";
import { IMachineImage } from "./machine-image";
import { IPeer } from "./peer";
import { ISecurityGroup } from "./security-group";
import { BlockDevice } from "./volume";
import { IVpc, SubnetSelection } from "./vpc";
import { AwsConstructBase } from "../aws-construct";
import { AwsStack } from "../aws-stack";
import { IPrincipal, IRole } from "../iam";
/**
 * Properties of the bastion host
 *
 *
 */
export interface BastionHostLinuxProps {
    /**
     * In which AZ to place the instance within the VPC
     *
     * @default - Random zone.
     */
    readonly availabilityZone?: string;
    /**
     * VPC to launch the instance in.
     */
    readonly vpc: IVpc;
    /**
     * The name of the instance
     *
     * @default 'BastionHost'
     */
    readonly instanceName?: string;
    /**
     * Select the subnets to run the bastion host in.
     * Set this to PUBLIC if you need to connect to this instance via the internet and cannot use SSM.
     * You have to allow port 22 manually by using the connections field
     *
     * @default - private subnets of the supplied VPC
     */
    readonly subnetSelection?: SubnetSelection;
    /**
     * Security Group to assign to this instance
     *
     * @default - create new security group with no inbound and all outbound traffic allowed
     */
    readonly securityGroup?: ISecurityGroup;
    /**
     * Type of instance to launch
     * @default 't3.nano'
     */
    readonly instanceType?: InstanceType;
    /**
     * The machine image to use, assumed to have SSM Agent preinstalled.
     *
     * @default - An Amazon Linux 2023 image if the `@aws-cdk/aws-ec2:bastionHostUseAmazonLinux2023ByDefault` feature flag is enabled. Otherwise, an Amazon Linux 2 image. In both cases, the image is kept up-to-date automatically (the instance
     * may be replaced on every deployment) and already has SSM Agent installed.
     */
    readonly machineImage?: IMachineImage;
    /**
     * Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.
     *
     * Each instance that is launched has an associated root device volume,
     * either an Amazon EBS volume or an instance store volume.
     * You can use block device mappings to specify additional EBS volumes or
     * instance store volumes to attach to an instance when it is launched.
     *
     * @see https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html
     *
     * @default - Uses the block device mapping of the AMI
     */
    readonly blockDevices?: BlockDevice[];
    /**
     * Whether IMDSv2 should be required on this instance
     *
     * @default - false
     */
    readonly requireImdsv2?: boolean;
    /**
     * Determines whether changes to the UserData will force instance replacement.
     *
     * Depending on the EC2 instance type, modifying the UserData may either restart
     * or replace the instance:
     *
     * - Instance store-backed instances are replaced.
     * - EBS-backed instances are restarted.
     *
     * Note that by default, restarting does not execute the updated UserData, so an alternative
     * mechanism is needed to ensure the instance re-executes the UserData.
     *
     * When set to `true`, the instance's Logical ID will depend on the UserData, causing
     * CloudFormation to replace the instance if the UserData changes.
     *
     * @default - `true` if `initOptions` is specified, otherwise `false`.
     */
    readonly userDataCausesReplacement?: boolean;
}
/**
 * This creates a linux bastion host you can use to connect to other instances or services in your VPC.
 * The recommended way to connect to the bastion host is by using AWS Systems Manager Session Manager.
 *
 * The operating system is Amazon Linux 2 with the latest SSM agent installed
 *
 * You can also configure this bastion host to allow connections via SSH
 *
 *
 * @resource aws_instance
 */
export declare class BastionHostLinux extends AwsConstructBase implements IInstance {
    get instanceOutputs(): InstanceOutputs;
    get outputs(): Record<string, any>;
    readonly stack: AwsStack;
    /**
     * Allows specify security group connections for the instance.
     */
    readonly connections: Connections;
    /**
     * The IAM role assumed by the instance.
     */
    readonly role: IRole;
    /**
     * The principal to grant permissions to
     */
    readonly grantPrincipal: IPrincipal;
    /**
     * The underlying instance resource
     */
    readonly instance: Instance;
    /**
     * @attribute
     */
    readonly instanceId: string;
    /**
     * @attribute
     */
    readonly instanceAvailabilityZone: string;
    /**
     * @attribute
     */
    readonly instancePrivateDnsName: string;
    /**
     * @attribute
     */
    readonly instancePrivateIp: string;
    /**
     * @attribute
     */
    readonly instancePublicDnsName: string;
    /**
     * @attribute
     */
    readonly instancePublicIp: string;
    constructor(scope: Construct, id: string, props: BastionHostLinuxProps);
    /**
     * Returns the AmazonLinuxCpuType corresponding to the given instance architecture
     * @param architecture the instance architecture value to convert
     */
    private toAmazonLinuxCpuType;
    /**
     * Allow SSH access from the given peer or peers
     *
     * Necessary if you want to connect to the instance using ssh. If not
     * called, you should use SSM Session Manager to connect to the instance.
     */
    allowSshAccessFrom(...peer: IPeer[]): void;
    /**
     * Returns the machine image to use for the bastion host, respecting the feature flag
     * to default to Amazon Linux 2023 if enabled, otherwise defaulting to Amazon Linux 2.
     */
    private getMachineImage;
}
