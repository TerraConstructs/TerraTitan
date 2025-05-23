import { Construct } from "constructs";
import { AmazonLinux2022ImageSsmParameterProps } from "./amazon-linux-2022";
import { AmazonLinux2023ImageSsmParameterProps } from "./amazon-linux-2023";
import { AmazonLinux2ImageSsmParameterProps } from "./amazon-linux2";
import { AmazonLinuxCpuType, AmazonLinuxEdition, AmazonLinuxGeneration, AmazonLinuxStorage, AmazonLinuxVirt, IMachineImage, MachineImageConfig, OperatingSystemType } from "./common";
import { UserData } from "../user-data";
import { WindowsVersion } from "../windows-versions";
/**
 * Factory functions for standard Amazon Machine Image objects.
 */
export declare abstract class MachineImage {
    /**
     * A Windows image that is automatically kept up-to-date
     *
     * This Machine Image automatically updates to the latest version on every
     * deployment. Be aware this will cause your instances to be replaced when a
     * new version of the image becomes available. Do not store stateful information
     * on the instance if you are using this image.
     */
    static latestWindows(version: WindowsVersion, props?: WindowsImageProps): IMachineImage;
    /**
     * An Amazon Linux 2 image that is automatically kept up-to-date
     *
     * This Machine Image automatically updates to the latest version on every
     * deployment. Be aware this will cause your instances to be replaced when a
     * new version of the image becomes available. Do not store stateful information
     * on the instance if you are using this image.
     */
    static latestAmazonLinux2(props?: AmazonLinux2ImageSsmParameterProps): IMachineImage;
    /**
     * An Amazon Linux 2022 image that is automatically kept up-to-date
     *
     * This Machine Image automatically updates to the latest version on every
     * deployment. Be aware this will cause your instances to be replaced when a
     * new version of the image becomes available. Do not store stateful information
     * on the instance if you are using this image.
     *
     * @deprecated - use latestAmazonLinux2023() instead
     */
    static latestAmazonLinux2022(props?: AmazonLinux2022ImageSsmParameterProps): IMachineImage;
    /**
     * An Amazon Linux 2023 image that is automatically kept up-to-date
     *
     * This Machine Image automatically updates to the latest version on every
     * deployment. Be aware this will cause your instances to be replaced when a
     * new version of the image becomes available. Do not store stateful information
     * on the instance if you are using this image.
     */
    static latestAmazonLinux2023(props?: AmazonLinux2023ImageSsmParameterProps): IMachineImage;
    /**
     * An Amazon Linux image that is automatically kept up-to-date
     *
     * This Machine Image automatically updates to the latest version on every
     * deployment. Be aware this will cause your instances to be replaced when a
     * new version of the image becomes available. Do not store stateful information
     * on the instance if you are using this image.
     *
     * N.B.: "latest" in the name of this function indicates that it always uses the most recent
     * image of a particular generation of Amazon Linux, not that it uses the "latest generation".
     * For backwards compatibility, this function uses Amazon Linux 1 if no generation
     * is specified.
     *
     * Specify the desired generation using the `generation` property:
     *
     * ```ts
     * compute.MachineImage.latestAmazonLinux({
     *   // Use Amazon Linux 2
     *   generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
     * })
     * ```
     * @deprecated use MachineImage.latestAmazonLinux2 instead
     */
    static latestAmazonLinux(props?: AmazonLinuxImageProps): IMachineImage;
    /**
     * A Linux image where you specify the AMI ID for every region
     *
     * @param amiMap For every region where you are deploying the stack,
     * specify the AMI ID for that region.
     * @param props Customize the image by supplying additional props
     */
    static genericLinux(amiMap: Record<string, string>, props?: GenericLinuxImageProps): IMachineImage;
    /**
     * A Windows image where you specify the AMI ID for every region
     *
     * @param amiMap For every region where you are deploying the stack,
     * specify the AMI ID for that region.
     * @param props Customize the image by supplying additional props
     */
    static genericWindows(amiMap: Record<string, string>, props?: GenericWindowsImageProps): IMachineImage;
    /**
     * An image specified in SSM parameter store that is automatically kept up-to-date
     *
     * This Machine Image automatically updates to the latest version on every
     * deployment. Be aware this will cause your instances to be replaced when a
     * new version of the image becomes available. Do not store stateful information
     * on the instance if you are using this image.
     *
     * @param parameterName The name of SSM parameter containing the AMi id
     * @param os The operating system type of the AMI
     * @param userData optional user data for the given image
     * @deprecated Use `MachineImage.fromSsmParameter()` instead
     */
    static fromSSMParameter(parameterName: string, os: OperatingSystemType, userData?: UserData): IMachineImage;
    /**
     * An image specified in SSM parameter store
     *
     * By default, the SSM parameter is refreshed at every deployment,
     * causing your instances to be replaced whenever a new version of the AMI
     * is released.
     *
     * Pass `{ cachedInContext: true }` to keep the AMI ID stable. If you do, you
     * will have to remember to periodically invalidate the context to refresh
     * to the newest AMI ID.
     */
    static fromSsmParameter(parameterName: string, options?: SsmParameterImageOptions): IMachineImage;
    /**
     * An image specified in SSM parameter store that will be resolved at instance launch time.
     *
     * The AMI ID will be resolved at instance launch time.
     *
     * @param parameterName The name of SSM parameter containing the AMI ID
     * @param options The parameter image options
     *
     * @see https://docs.aws.amazon.com/autoscaling/ec2/userguide/using-systems-manager-parameters.html
     *
     */
    static resolveSsmParameterAtLaunch(parameterName: string, options?: SsmParameterImageOptions): IMachineImage;
    /**
     * Look up a shared Machine Image using DescribeImages
     *
     * The most recent, available, launchable image matching the given filter
     * criteria will be used. Looking up AMIs may take a long time; specify
     * as many filter criteria as possible to narrow down the search.
     *
     * The AMI selected will be cached in `cdk.context.json` and the same value
     * will be used on future runs. To refresh the AMI lookup, you will have to
     * evict the value from the cache using the `cdk context` command. See
     * https://docs.aws.amazon.com/cdk/latest/guide/context.html for more information.
     *
     * This function can not be used in environment-agnostic stacks.
     */
    static lookup(props: LookupMachineImageProps): IMachineImage;
}
/**
 * Select the image based on a given SSM parameter at deployment time of the CloudFormation Stack.
 *
 * This Machine Image automatically updates to the latest version on every
 * deployment. Be aware this will cause your instances to be replaced when a
 * new version of the image becomes available. Do not store stateful information
 * on the instance if you are using this image.
 *
 * The AMI ID is selected using the values published to the SSM parameter store.
 */
export declare class GenericSSMParameterImage implements IMachineImage {
    private readonly os;
    private readonly userData?;
    /**
     * Name of the SSM parameter we're looking up
     */
    readonly parameterName: string;
    constructor(parameterName: string, os: OperatingSystemType, userData?: UserData | undefined);
    /**
     * Return the image to use in the given context
     */
    getImage(scope: Construct): MachineImageConfig;
}
/**
 * Select the image based on a given SSM parameter at instance launch time.
 *
 * This Machine Image comes with an imageId as `resolve:ssm:parameter-name` or `resolve:ssm:parameter-name:version` format
 * as described in the document:
 *
 * @see https://docs.aws.amazon.com/autoscaling/ec2/userguide/using-systems-manager-parameters.html
 *
 * The AMI ID would be selected at instance launch time.
 */
export declare class ResolveSsmParameterAtLaunchImage implements IMachineImage {
    private readonly props;
    /**
     * Name of the SSM parameter we're looking up
     */
    readonly parameterName: string;
    constructor(parameterName: string, props?: SsmParameterImageOptions);
    /**
     * Return the image to use in the given context
     */
    getImage(_: Construct): MachineImageConfig;
}
/**
 * Properties for GenericSsmParameterImage
 */
export interface SsmParameterImageOptions {
    /**
     * Operating system
     *
     * @default OperatingSystemType.LINUX
     */
    readonly os?: OperatingSystemType;
    /**
     * Custom UserData
     *
     * @default - UserData appropriate for the OS
     */
    readonly userData?: UserData;
    /**
     * Whether the AMI ID is cached to be stable between deployments
     *
     * By default, the newest image is used on each deployment. This will cause
     * instances to be replaced whenever a new version is released, and may cause
     * downtime if there aren't enough running instances in the AutoScalingGroup
     * to reschedule the tasks on.
     *
     * If set to true, the AMI ID will be cached in `cdk.context.json` and the
     * same value will be used on future runs. Your instances will not be replaced
     * but your AMI version will grow old over time. To refresh the AMI lookup,
     * you will have to evict the value from the cache using the `cdk context`
     * command. See https://docs.aws.amazon.com/cdk/latest/guide/context.html for
     * more information.
     *
     * Can not be set to `true` in environment-agnostic stacks.
     *
     * @default false
     */
    readonly cachedInContext?: boolean;
    /**
     * The version of the SSM parameter.
     *
     * @default no version specified.
     */
    readonly parameterVersion?: string;
}
/**
 * Configuration options for WindowsImage
 */
export interface WindowsImageProps {
    /**
     * Initial user data
     *
     * @default - Empty UserData for Windows machines
     */
    readonly userData?: UserData;
}
/**
 * Select the latest version of the indicated Windows version
 *
 * This Machine Image automatically updates to the latest version on every
 * deployment. Be aware this will cause your instances to be replaced when a
 * new version of the image becomes available. Do not store stateful information
 * on the instance if you are using this image.
 *
 * The AMI ID is selected using the values published to the SSM parameter store.
 *
 * https://aws.amazon.com/blogs/mt/query-for-the-latest-windows-ami-using-systems-manager-parameter-store/
 */
export declare class WindowsImage extends GenericSSMParameterImage {
    private static DEPRECATED_VERSION_NAME_MAP;
    constructor(version: WindowsVersion, props?: WindowsImageProps);
}
/**
 * Amazon Linux image properties
 */
export interface AmazonLinuxImageProps {
    /**
     * What generation of Amazon Linux to use
     *
     * @default AmazonLinux
     */
    readonly generation?: AmazonLinuxGeneration;
    /**
     * What edition of Amazon Linux to use
     *
     * @default Standard
     */
    readonly edition?: AmazonLinuxEdition;
    /**
     * What kernel version of Amazon Linux to use
     *
     * @default -
     */
    readonly kernel?: AmazonLinuxKernel;
    /**
     * What storage backed image to use
     *
     * @default GeneralPurpose
     */
    readonly storage?: AmazonLinuxStorage;
    /**
     * Initial user data
     *
     * @default - Empty UserData for Linux machines
     */
    readonly userData?: UserData;
    /**
     * CPU Type
     *
     * @default X86_64
     */
    readonly cpuType?: AmazonLinuxCpuType;
    /**
     * Virtualization type
     *
     * @default HVM
     */
    readonly virtualization?: AmazonLinuxVirt;
    /**
     * Whether the AMI ID is cached to be stable between deployments
     *
     * By default, the newest image is used on each deployment. This will cause
     * instances to be replaced whenever a new version is released, and may cause
     * downtime if there aren't enough running instances in the AutoScalingGroup
     * to reschedule the tasks on.
     *
     * If set to true, the AMI ID will be cached in `cdk.context.json` and the
     * same value will be used on future runs. Your instances will not be replaced
     * but your AMI version will grow old over time. To refresh the AMI lookup,
     * you will have to evict the value from the cache using the `cdk context`
     * command. See https://docs.aws.amazon.com/cdk/latest/guide/context.html for
     * more information.
     *
     * Can not be set to `true` in environment-agnostic stacks.
     *
     * @default false
     */
    readonly cachedInContext?: boolean;
}
/**
 * Selects the latest version of Amazon Linux
 *
 * This Machine Image automatically updates to the latest version on every
 * deployment. Be aware this will cause your instances to be replaced when a
 * new version of the image becomes available. Do not store stateful information
 * on the instance if you are using this image.
 *
 * The AMI ID is selected using the values published to the SSM parameter store.
 */
export declare class AmazonLinuxImage extends GenericSSMParameterImage {
    private readonly props;
    /**
     * Return the SSM parameter name that will contain the Amazon Linux image with the given attributes
     */
    static ssmParameterName(props?: AmazonLinuxImageProps): string;
    private readonly cachedInContext;
    constructor(props?: AmazonLinuxImageProps);
    /**
     * Return the image to use in the given context
     */
    getImage(scope: Construct): MachineImageConfig;
}
/**
 * Amazon Linux Kernel
 */
export declare enum AmazonLinuxKernel {
    /**
     * Kernel version 5.10
     */
    KERNEL5_X = "kernel-5.10",
    /**
     * Kernel version 6.1
     */
    KERNEL6_1 = "kernel-6.1"
}
/**
 * Configuration options for GenericLinuxImage
 */
export interface GenericLinuxImageProps {
    /**
     * Initial user data
     *
     * @default - Empty UserData for Linux machines
     */
    readonly userData?: UserData;
}
/**
 * Configuration options for GenericWindowsImage
 */
export interface GenericWindowsImageProps {
    /**
     * Initial user data
     *
     * @default - Empty UserData for Windows machines
     */
    readonly userData?: UserData;
}
/**
 * Construct a Linux machine image from an AMI map
 *
 * Linux images IDs are not published to SSM parameter store yet, so you'll have to
 * manually specify an AMI map.
 */
export declare class GenericLinuxImage implements IMachineImage {
    private readonly amiMap;
    private readonly props;
    constructor(amiMap: {
        [region: string]: string;
    }, props?: GenericLinuxImageProps);
    getImage(scope: Construct): MachineImageConfig;
}
/**
 * Construct a Windows machine image from an AMI map
 *
 * Allows you to create a generic Windows EC2 , manually specify an AMI map.
 */
export declare class GenericWindowsImage implements IMachineImage {
    private readonly amiMap;
    private readonly props;
    constructor(amiMap: {
        [region: string]: string;
    }, props?: GenericWindowsImageProps);
    getImage(scope: Construct): MachineImageConfig;
}
/**
 * A machine image whose AMI ID will be searched using DescribeImages.
 *
 * The most recent, available, launchable image matching the given filter
 * criteria will be used. Looking up AMIs may take a long time; specify
 * as many filter criteria as possible to narrow down the search.
 *
 * The AMI selected will be cached in `grid.context.json` and the same value
 * will be used on future runs. To refresh the AMI lookup, you will have to
 * evict the value from the cache using the `grid context` command. See
 * https://docs.aws.amazon.com/cdk/latest/guide/context.html for more information.
 */
export declare class LookupMachineImage implements IMachineImage {
    private readonly props;
    constructor(props: LookupMachineImageProps);
    getImage(scope: Construct): MachineImageConfig;
}
/**
 * Properties for looking up an image
 */
export interface LookupMachineImageProps {
    /**
     * Name of the image (may contain wildcards)
     */
    readonly name: string;
    /**
     * Owner account IDs or aliases
     *
     * @default - All owners
     */
    readonly owners?: string[];
    /**
     * Additional filters on the AMI
     *
     * @see https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html
     * @default - No additional filters
     */
    readonly filters?: {
        [key: string]: string[];
    };
    /**
     * Look for Windows images
     *
     * @default false
     */
    readonly windows?: boolean;
    /**
     * Custom userdata for this image
     *
     * @default - Empty user data appropriate for the platform type
     */
    readonly userData?: UserData;
}
