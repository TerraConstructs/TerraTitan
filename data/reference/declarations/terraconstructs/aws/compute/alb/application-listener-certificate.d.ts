import { Construct } from "constructs";
import { IApplicationListener } from "./application-listener";
import { IListenerCertificate } from "../lb-shared/listener-certificate";
/**
 * Properties for adding a set of certificates to a listener
 */
export interface ApplicationListenerCertificateProps {
    /**
     * The listener to attach the rule to
     */
    readonly listener: IApplicationListener;
    /**
     * ARNs of certificates to attach
     *
     * Duplicates are not allowed.
     *
     * @deprecated Use `certificates` instead.
     * @default - One of 'certificates' and 'certificateArns' is required.
     */
    readonly certificateArns?: string[];
    /**
     * Certificates to attach
     *
     * Duplicates are not allowed.
     *
     * @default - One of 'certificates' and 'certificateArns' is required.
     */
    readonly certificates?: IListenerCertificate[];
}
/**
 * Add certificates to a listener
 */
export declare class ApplicationListenerCertificate extends Construct {
    constructor(scope: Construct, id: string, props: ApplicationListenerCertificateProps);
}
