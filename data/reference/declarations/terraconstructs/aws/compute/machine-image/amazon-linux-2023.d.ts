import { AmazonLinuxImageSsmParameterCommonOptions, AmazonLinuxImageSsmParameterBase } from "./common";
/**
 * Amazon Linux 2023 kernel versions
 */
export declare class AmazonLinux2023Kernel {
    private readonly version;
    /**
     * The latest kernel version currently available in a published AMI.
     *
     * When a new kernel version is available for an al2023 AMI this will be
     * updated to contain the latest kernel version and will cause your instances
     * to be replaced. Do not store stateful information on the instance if you are
     * using this version.
     */
    static readonly CDK_LATEST: AmazonLinux2023Kernel;
    /**
     * The default kernel version for Amazon Linux 2023 is 6.1 and
     * the SSM parameter does not include it in the name
     * (i.e. /aws/service/ami-amazon-linux-latest/amzn2023-ami-kernel-default-x86_64)
     */
    static readonly DEFAULT: AmazonLinux2023Kernel;
    /**
     * Kernel version 6.1
     */
    static readonly KERNEL_6_1: AmazonLinux2023Kernel;
    constructor(version: string);
    /**
     * Generate a string representation of the kernel
     */
    toString(): string;
}
/**
 * Properties specific to al2023 images
 */
export interface AmazonLinux2023ImageSsmParameterProps extends AmazonLinuxImageSsmParameterCommonOptions {
    /**
     * What kernel version of Amazon Linux to use
     *
     * @default AmazonLinux2023Kernel.DEFAULT
     */
    readonly kernel?: AmazonLinux2023Kernel;
}
/**
 * A SSM Parameter that contains the AMI ID for Amazon Linux 2023
 */
export declare class AmazonLinux2023ImageSsmParameter extends AmazonLinuxImageSsmParameterBase {
    /**
     * Generates a SSM Parameter name for a specific amazon linux 2023 AMI
     *
     * Example values:
     *
     *     "/aws/service/ami-amazon-linux-latest/al2023-ami-kernel-6.1-arm64",
     *     "/aws/service/ami-amazon-linux-latest/al2023-ami-kernel-6.1-x86_64",
     *     "/aws/service/ami-amazon-linux-latest/al2023-ami-minimal-kernel-6.1-arm64",
     *     "/aws/service/ami-amazon-linux-latest/al2023-ami-minimal-kernel-6.1-x86_64",
     *     "/aws/service/ami-amazon-linux-latest/al2023-ami-minimal-kernel-default-arm64",
     *     "/aws/service/ami-amazon-linux-latest/al2023-ami-kernel-default-x86_64",
     *     "/aws/service/ami-amazon-linux-latest/al2023-ami-minimal-kernel-default-x86_64",
     *     "/aws/service/ami-amazon-linux-latest/al2023-ami-kernel-default-arm64",
     */
    static ssmParameterName(props: AmazonLinux2023ImageSsmParameterProps): string;
    constructor(props?: AmazonLinux2023ImageSsmParameterProps);
}
