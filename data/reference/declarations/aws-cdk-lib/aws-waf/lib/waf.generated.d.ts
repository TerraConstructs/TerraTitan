import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * > This is *AWS WAF Classic* documentation.
 *
 * For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > *For the latest version of AWS WAF* , use the AWS WAF V2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) . With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * The `AWS::WAF::ByteMatchSet` resource creates an AWS WAF `ByteMatchSet` that identifies a part of a web request that you want to inspect.
 *
 * @cloudformationResource AWS::WAF::ByteMatchSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html
 */
export declare class CfnByteMatchSet extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnByteMatchSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnByteMatchSet;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Specifies the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.
     */
    byteMatchTuples?: Array<CfnByteMatchSet.ByteMatchTupleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the `ByteMatchSet` .
     */
    name: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnByteMatchSetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnByteMatchSet {
    /**
     * > AWS WAF Classic support will end on September 30, 2025.
     *
     * >
     * > This is *AWS WAF Classic* documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
     * >
     * > *For the latest version of AWS WAF* , use the AWS WAF V2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) . With the latest version, AWS WAF has a single set of endpoints for regional and global use.
     *
     * The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-bytematchtuple.html
     */
    interface ByteMatchTupleProperty {
        /**
         * The part of a web request that you want to inspect, such as a specified header or a query string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-bytematchtuple.html#cfn-waf-bytematchset-bytematchtuple-fieldtomatch
         */
        readonly fieldToMatch: CfnByteMatchSet.FieldToMatchProperty | cdk.IResolvable;
        /**
         * Within the portion of a web request that you want to search (for example, in the query string, if any), specify where you want AWS WAF to search.
         *
         * Valid values include the following:
         *
         * *CONTAINS*
         *
         * The specified part of the web request must include the value of `TargetString` , but the location doesn't matter.
         *
         * *CONTAINS_WORD*
         *
         * The specified part of the web request must include the value of `TargetString` , and `TargetString` must contain only alphanumeric characters or underscore (A-Z, a-z, 0-9, or _). In addition, `TargetString` must be a word, which means one of the following:
         *
         * - `TargetString` exactly matches the value of the specified part of the web request, such as the value of a header.
         * - `TargetString` is at the beginning of the specified part of the web request and is followed by a character other than an alphanumeric character or underscore (_), for example, `BadBot;` .
         * - `TargetString` is at the end of the specified part of the web request and is preceded by a character other than an alphanumeric character or underscore (_), for example, `;BadBot` .
         * - `TargetString` is in the middle of the specified part of the web request and is preceded and followed by characters other than alphanumeric characters or underscore (_), for example, `-BadBot;` .
         *
         * *EXACTLY*
         *
         * The value of the specified part of the web request must exactly match the value of `TargetString` .
         *
         * *STARTS_WITH*
         *
         * The value of `TargetString` must appear at the beginning of the specified part of the web request.
         *
         * *ENDS_WITH*
         *
         * The value of `TargetString` must appear at the end of the specified part of the web request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-bytematchtuple.html#cfn-waf-bytematchset-bytematchtuple-positionalconstraint
         */
        readonly positionalConstraint: string;
        /**
         * The value that you want AWS WAF to search for.
         *
         * AWS WAF searches for the specified string in the part of web requests that you specified in `FieldToMatch` . The maximum length of the value is 50 bytes.
         *
         * You must specify this property or the `TargetStringBase64` property.
         *
         * Valid values depend on the values that you specified for `FieldToMatch` :
         *
         * - `HEADER` : The value that you want AWS WAF to search for in the request header that you specified in `FieldToMatch` , for example, the value of the `User-Agent` or `Referer` header.
         * - `METHOD` : The HTTP method, which indicates the type of operation specified in the request. Amazon CloudFront supports the following methods: `DELETE` , `GET` , `HEAD` , `OPTIONS` , `PATCH` , `POST` , and `PUT` .
         * - `QUERY_STRING` : The value that you want AWS WAF to search for in the query string, which is the part of a URL that appears after a `?` character.
         * - `URI` : The value that you want AWS WAF to search for in the part of a URL that identifies a resource, for example, `/images/daily-ad.jpg` .
         * - `BODY` : The part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form. The request body immediately follows the request headers. Note that only the first `8192` bytes of the request body are forwarded to AWS WAF for inspection. To allow or block requests based on the length of the body, you can create a size constraint set.
         * - `SINGLE_QUERY_ARG` : The parameter in the query string that you will inspect, such as *UserName* or *SalesRegion* . The maximum length for `SINGLE_QUERY_ARG` is 30 characters.
         * - `ALL_QUERY_ARGS` : Similar to `SINGLE_QUERY_ARG` , but instead of inspecting a single parameter, AWS WAF inspects all parameters within the query string for the value or regex pattern that you specify in `TargetString` .
         *
         * If `TargetString` includes alphabetic characters A-Z and a-z, note that the value is case sensitive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-bytematchtuple.html#cfn-waf-bytematchset-bytematchtuple-targetstring
         */
        readonly targetString?: string;
        /**
         * The base64-encoded value that AWS WAF searches for. AWS CloudFormation sends this value to AWS WAF without encoding it.
         *
         * You must specify this property or the `TargetString` property.
         *
         * AWS WAF searches for this value in a specific part of web requests, which you define in the `FieldToMatch` property.
         *
         * Valid values depend on the Type value in the `FieldToMatch` property. For example, for a `METHOD` type, you must specify HTTP methods such as `DELETE, GET, HEAD, OPTIONS, PATCH, POST` , and `PUT` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-bytematchtuple.html#cfn-waf-bytematchset-bytematchtuple-targetstringbase64
         */
        readonly targetStringBase64?: string;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF .
         *
         * If you specify a transformation, AWS WAF performs the transformation on `FieldToMatch` before inspecting it for a match.
         *
         * You can only specify a single type of TextTransformation.
         *
         * *CMD_LINE*
         *
         * When you're concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:
         *
         * - Delete the following characters: \ " ' ^
         * - Delete spaces before the following characters: / (
         * - Replace the following characters with a space: , ;
         * - Replace multiple spaces with one space
         * - Convert uppercase letters (A-Z) to lowercase (a-z)
         *
         * *COMPRESS_WHITE_SPACE*
         *
         * Use this option to replace the following characters with a space character (decimal 32):
         *
         * - \f, formfeed, decimal 12
         * - \t, tab, decimal 9
         * - \n, newline, decimal 10
         * - \r, carriage return, decimal 13
         * - \v, vertical tab, decimal 11
         * - non-breaking space, decimal 160
         *
         * `COMPRESS_WHITE_SPACE` also replaces multiple spaces with one space.
         *
         * *HTML_ENTITY_DECODE*
         *
         * Use this option to replace HTML-encoded characters with unencoded characters. `HTML_ENTITY_DECODE` performs the following operations:
         *
         * - Replaces `(ampersand)quot;` with `"`
         * - Replaces `(ampersand)nbsp;` with a non-breaking space, decimal 160
         * - Replaces `(ampersand)lt;` with a "less than" symbol
         * - Replaces `(ampersand)gt;` with `>`
         * - Replaces characters that are represented in hexadecimal format, `(ampersand)#xhhhh;` , with the corresponding characters
         * - Replaces characters that are represented in decimal format, `(ampersand)#nnnn;` , with the corresponding characters
         *
         * *LOWERCASE*
         *
         * Use this option to convert uppercase letters (A-Z) to lowercase (a-z).
         *
         * *URL_DECODE*
         *
         * Use this option to decode a URL-encoded value.
         *
         * *NONE*
         *
         * Specify `NONE` if you don't want to perform any text transformations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-bytematchtuple.html#cfn-waf-bytematchset-bytematchtuple-texttransformation
         */
        readonly textTransformation: string;
    }
    /**
     * > AWS WAF Classic support will end on September 30, 2025.
     *
     * >
     * > This is *AWS WAF Classic* documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
     * >
     * > *For the latest version of AWS WAF* , use the AWS WAF V2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) . With the latest version, AWS WAF has a single set of endpoints for regional and global use.
     *
     * Specifies where in a web request to look for `TargetString` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-fieldtomatch.html
     */
    interface FieldToMatchProperty {
        /**
         * When the value of `Type` is `HEADER` , enter the name of the header that you want AWS WAF to search, for example, `User-Agent` or `Referer` .
         *
         * The name of the header is not case sensitive.
         *
         * When the value of `Type` is `SINGLE_QUERY_ARG` , enter the name of the parameter that you want AWS WAF to search, for example, `UserName` or `SalesRegion` . The parameter name is not case sensitive.
         *
         * If the value of `Type` is any other value, omit `Data` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-fieldtomatch.html#cfn-waf-bytematchset-fieldtomatch-data
         */
        readonly data?: string;
        /**
         * The part of the web request that you want AWS WAF to search for a specified string.
         *
         * Parts of a request that you can search include the following:
         *
         * - `HEADER` : A specified request header, for example, the value of the `User-Agent` or `Referer` header. If you choose `HEADER` for the type, specify the name of the header in `Data` .
         * - `METHOD` : The HTTP method, which indicated the type of operation that the request is asking the origin to perform. Amazon CloudFront supports the following methods: `DELETE` , `GET` , `HEAD` , `OPTIONS` , `PATCH` , `POST` , and `PUT` .
         * - `QUERY_STRING` : A query string, which is the part of a URL that appears after a `?` character, if any.
         * - `URI` : The part of a web request that identifies a resource, for example, `/images/daily-ad.jpg` .
         * - `BODY` : The part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form. The request body immediately follows the request headers. Note that only the first `8192` bytes of the request body are forwarded to AWS WAF for inspection. To allow or block requests based on the length of the body, you can create a size constraint set.
         * - `SINGLE_QUERY_ARG` : The parameter in the query string that you will inspect, such as *UserName* or *SalesRegion* . The maximum length for `SINGLE_QUERY_ARG` is 30 characters.
         * - `ALL_QUERY_ARGS` : Similar to `SINGLE_QUERY_ARG` , but rather than inspecting a single parameter, AWS WAF will inspect all parameters within the query for the value or regex pattern that you specify in `TargetString` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-fieldtomatch.html#cfn-waf-bytematchset-fieldtomatch-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnByteMatchSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html
 */
export interface CfnByteMatchSetProps {
    /**
     * Specifies the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html#cfn-waf-bytematchset-bytematchtuples
     */
    readonly byteMatchTuples?: Array<CfnByteMatchSet.ByteMatchTupleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the `ByteMatchSet` .
     *
     * You can't change `Name` after you create a `ByteMatchSet` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html#cfn-waf-bytematchset-name
     */
    readonly name: string;
}
/**
 * > AWS WAF Classic support will end on September 30, 2025.
 *
 * >
 * > This is *AWS WAF Classic* documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > *For the latest version of AWS WAF* , use the AWS WAF V2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) . With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128.
 *
 * To specify an individual IP address, you specify the four-part IP address followed by a `/32` , for example, 192.0.2.0/32. To block a range of IP addresses, you can specify /8 or any range between /16 through /32 (for IPv4) or /24, /32, /48, /56, /64, or /128 (for IPv6). For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) .
 *
 * @cloudformationResource AWS::WAF::IPSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html
 */
export declare class CfnIPSet extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIPSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIPSet;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The IP address type ( `IPV4` or `IPV6` ) and the IP address range (in CIDR notation) that web requests originate from.
     */
    ipSetDescriptors?: Array<CfnIPSet.IPSetDescriptorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the `IPSet` .
     */
    name: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIPSetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnIPSet {
    /**
     * > AWS WAF Classic support will end on September 30, 2025.
     *
     * >
     * > This is *AWS WAF Classic* documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
     * >
     * > *For the latest version of AWS WAF* , use the AWS WAF V2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) . With the latest version, AWS WAF has a single set of endpoints for regional and global use.
     *
     * Specifies the IP address type ( `IPV4` or `IPV6` ) and the IP address range (in CIDR format) that web requests originate from.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-ipset-ipsetdescriptor.html
     */
    interface IPSetDescriptorProperty {
        /**
         * Specify `IPV4` or `IPV6` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-ipset-ipsetdescriptor.html#cfn-waf-ipset-ipsetdescriptor-type
         */
        readonly type: string;
        /**
         * Specify an IPv4 address by using CIDR notation. For example:.
         *
         * - To configure AWS WAF to allow, block, or count requests that originated from the IP address 192.0.2.44, specify `192.0.2.44/32` .
         * - To configure AWS WAF to allow, block, or count requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify `192.0.2.0/24` .
         *
         * For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) .
         *
         * Specify an IPv6 address by using CIDR notation. For example:
         *
         * - To configure AWS WAF to allow, block, or count requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify `1111:0000:0000:0000:0000:0000:0000:0111/128` .
         * - To configure AWS WAF to allow, block, or count requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify `1111:0000:0000:0000:0000:0000:0000:0000/64` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-ipset-ipsetdescriptor.html#cfn-waf-ipset-ipsetdescriptor-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnIPSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html
 */
export interface CfnIPSetProps {
    /**
     * The IP address type ( `IPV4` or `IPV6` ) and the IP address range (in CIDR notation) that web requests originate from.
     *
     * If the `WebACL` is associated with an Amazon CloudFront distribution and the viewer did not use an HTTP proxy or a load balancer to send the request, this is the value of the c-ip field in the CloudFront access logs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html#cfn-waf-ipset-ipsetdescriptors
     */
    readonly ipSetDescriptors?: Array<CfnIPSet.IPSetDescriptorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the `IPSet` .
     *
     * You can't change the name of an `IPSet` after you create it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html#cfn-waf-ipset-name
     */
    readonly name: string;
}
/**
 * > This is *AWS WAF Classic* documentation.
 *
 * For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > *For the latest version of AWS WAF* , use the AWS WAF V2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) . With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * A combination of `ByteMatchSet` , `IPSet` , and/or `SqlInjectionMatchSet` objects that identify the web requests that you want to allow, block, or count. For example, you might create a `Rule` that includes the following predicates:
 *
 * - An `IPSet` that causes AWS WAF to search for web requests that originate from the IP address `192.0.2.44`
 * - A `ByteMatchSet` that causes AWS WAF to search for web requests for which the value of the `User-Agent` header is `BadBot` .
 *
 * To match the settings in this `Rule` , a request must originate from `192.0.2.44` AND include a `User-Agent` header for which the value is `BadBot` .
 *
 * @cloudformationResource AWS::WAF::Rule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html
 */
export declare class CfnRule extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRule;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the metrics for this `Rule` .
     */
    metricName: string;
    /**
     * The friendly name or description for the `Rule` .
     */
    name: string;
    /**
     * The `Predicates` object contains one `Predicate` element for each `ByteMatchSet` , `IPSet` , or `SqlInjectionMatchSet` object that you want to include in a `Rule` .
     */
    predicates?: Array<cdk.IResolvable | CfnRule.PredicateProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRuleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRule {
    /**
     * Specifies the `ByteMatchSet` , `IPSet` , `SqlInjectionMatchSet` , `XssMatchSet` , `RegexMatchSet` , `GeoMatchSet` , and `SizeConstraintSet` objects that you want to add to a `Rule` and, for each object, indicates whether you want to negate the settings, for example, requests that do NOT originate from the IP address 192.0.2.44.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-rule-predicate.html
     */
    interface PredicateProperty {
        /**
         * A unique identifier for a predicate in a `Rule` , such as `ByteMatchSetId` or `IPSetId` .
         *
         * The ID is returned by the corresponding `Create` or `List` command.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-rule-predicate.html#cfn-waf-rule-predicate-dataid
         */
        readonly dataId: string;
        /**
         * Set `Negated` to `False` if you want AWS WAF to allow, block, or count requests based on the settings in the specified `ByteMatchSet` , `IPSet` , `SqlInjectionMatchSet` , `XssMatchSet` , `RegexMatchSet` , `GeoMatchSet` , or `SizeConstraintSet` .
         *
         * For example, if an `IPSet` includes the IP address `192.0.2.44` , AWS WAF will allow or block requests based on that IP address.
         *
         * Set `Negated` to `True` if you want AWS WAF to allow or block a request based on the negation of the settings in the `ByteMatchSet` , `IPSet` , `SqlInjectionMatchSet` , `XssMatchSet` , `RegexMatchSet` , `GeoMatchSet` , or `SizeConstraintSet` . For example, if an `IPSet` includes the IP address `192.0.2.44` , AWS WAF will allow, block, or count requests based on all IP addresses *except* `192.0.2.44` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-rule-predicate.html#cfn-waf-rule-predicate-negated
         */
        readonly negated: boolean | cdk.IResolvable;
        /**
         * The type of predicate in a `Rule` , such as `ByteMatch` or `IPSet` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-rule-predicate.html#cfn-waf-rule-predicate-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html
 */
export interface CfnRuleProps {
    /**
     * The name of the metrics for this `Rule` .
     *
     * The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF , including "All" and "Default_Action." You can't change `MetricName` after you create the `Rule` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html#cfn-waf-rule-metricname
     */
    readonly metricName: string;
    /**
     * The friendly name or description for the `Rule` .
     *
     * You can't change the name of a `Rule` after you create it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html#cfn-waf-rule-name
     */
    readonly name: string;
    /**
     * The `Predicates` object contains one `Predicate` element for each `ByteMatchSet` , `IPSet` , or `SqlInjectionMatchSet` object that you want to include in a `Rule` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html#cfn-waf-rule-predicates
     */
    readonly predicates?: Array<cdk.IResolvable | CfnRule.PredicateProperty> | cdk.IResolvable;
}
/**
 * > AWS WAF Classic support will end on September 30, 2025.
 *
 * >
 * > This is *AWS WAF Classic* documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > *For the latest version of AWS WAF* , use the AWS WAF V2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) . With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * A complex type that contains `SizeConstraint` objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a `SizeConstraintSet` contains more than one `SizeConstraint` object, a request only needs to match one constraint to be considered a match.
 *
 * @cloudformationResource AWS::WAF::SizeConstraintSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html
 */
export declare class CfnSizeConstraintSet extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSizeConstraintSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSizeConstraintSet;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name, if any, of the `SizeConstraintSet` .
     */
    name: string;
    /**
     * The size constraint and the part of the web request to check.
     */
    sizeConstraints: Array<cdk.IResolvable | CfnSizeConstraintSet.SizeConstraintProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSizeConstraintSetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSizeConstraintSet {
    /**
     * > AWS WAF Classic support will end on September 30, 2025.
     *
     * >
     * > This is *AWS WAF Classic* documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
     * >
     * > *For the latest version of AWS WAF* , use the AWS WAF V2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) . With the latest version, AWS WAF has a single set of endpoints for regional and global use.
     *
     * Specifies a constraint on the size of a part of the web request. AWS WAF uses the `Size` , `ComparisonOperator` , and `FieldToMatch` to build an expression in the form of " `Size` `ComparisonOperator` size in bytes of `FieldToMatch` ". If that expression is true, the `SizeConstraint` is considered to match.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sizeconstraintset-sizeconstraint.html
     */
    interface SizeConstraintProperty {
        /**
         * The type of comparison you want AWS WAF to perform.
         *
         * AWS WAF uses this in combination with the provided `Size` and `FieldToMatch` to build an expression in the form of " `Size` `ComparisonOperator` size in bytes of `FieldToMatch` ". If that expression is true, the `SizeConstraint` is considered to match.
         *
         * *EQ* : Used to test if the `Size` is equal to the size of the `FieldToMatch`
         *
         * *NE* : Used to test if the `Size` is not equal to the size of the `FieldToMatch`
         *
         * *LE* : Used to test if the `Size` is less than or equal to the size of the `FieldToMatch`
         *
         * *LT* : Used to test if the `Size` is strictly less than the size of the `FieldToMatch`
         *
         * *GE* : Used to test if the `Size` is greater than or equal to the size of the `FieldToMatch`
         *
         * *GT* : Used to test if the `Size` is strictly greater than the size of the `FieldToMatch`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sizeconstraintset-sizeconstraint.html#cfn-waf-sizeconstraintset-sizeconstraint-comparisonoperator
         */
        readonly comparisonOperator: string;
        /**
         * The part of a web request that you want to inspect, such as a specified header or a query string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sizeconstraintset-sizeconstraint.html#cfn-waf-sizeconstraintset-sizeconstraint-fieldtomatch
         */
        readonly fieldToMatch: CfnSizeConstraintSet.FieldToMatchProperty | cdk.IResolvable;
        /**
         * The size in bytes that you want AWS WAF to compare against the size of the specified `FieldToMatch` .
         *
         * AWS WAF uses this in combination with `ComparisonOperator` and `FieldToMatch` to build an expression in the form of " `Size` `ComparisonOperator` size in bytes of `FieldToMatch` ". If that expression is true, the `SizeConstraint` is considered to match.
         *
         * Valid values for size are 0 - 21474836480 bytes (0 - 20 GB).
         *
         * If you specify `URI` for the value of `Type` , the / in the URI path that you specify counts as one character. For example, the URI `/logo.jpg` is nine characters long.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sizeconstraintset-sizeconstraint.html#cfn-waf-sizeconstraintset-sizeconstraint-size
         */
        readonly size: number;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF .
         *
         * If you specify a transformation, AWS WAF performs the transformation on `FieldToMatch` before inspecting it for a match.
         *
         * You can only specify a single type of TextTransformation.
         *
         * Note that if you choose `BODY` for the value of `Type` , you must choose `NONE` for `TextTransformation` because Amazon CloudFront forwards only the first 8192 bytes for inspection.
         *
         * *NONE*
         *
         * Specify `NONE` if you don't want to perform any text transformations.
         *
         * *CMD_LINE*
         *
         * When you're concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:
         *
         * - Delete the following characters: \ " ' ^
         * - Delete spaces before the following characters: / (
         * - Replace the following characters with a space: , ;
         * - Replace multiple spaces with one space
         * - Convert uppercase letters (A-Z) to lowercase (a-z)
         *
         * *COMPRESS_WHITE_SPACE*
         *
         * Use this option to replace the following characters with a space character (decimal 32):
         *
         * - \f, formfeed, decimal 12
         * - \t, tab, decimal 9
         * - \n, newline, decimal 10
         * - \r, carriage return, decimal 13
         * - \v, vertical tab, decimal 11
         * - non-breaking space, decimal 160
         *
         * `COMPRESS_WHITE_SPACE` also replaces multiple spaces with one space.
         *
         * *HTML_ENTITY_DECODE*
         *
         * Use this option to replace HTML-encoded characters with unencoded characters. `HTML_ENTITY_DECODE` performs the following operations:
         *
         * - Replaces `(ampersand)quot;` with `"`
         * - Replaces `(ampersand)nbsp;` with a non-breaking space, decimal 160
         * - Replaces `(ampersand)lt;` with a "less than" symbol
         * - Replaces `(ampersand)gt;` with `>`
         * - Replaces characters that are represented in hexadecimal format, `(ampersand)#xhhhh;` , with the corresponding characters
         * - Replaces characters that are represented in decimal format, `(ampersand)#nnnn;` , with the corresponding characters
         *
         * *LOWERCASE*
         *
         * Use this option to convert uppercase letters (A-Z) to lowercase (a-z).
         *
         * *URL_DECODE*
         *
         * Use this option to decode a URL-encoded value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sizeconstraintset-sizeconstraint.html#cfn-waf-sizeconstraintset-sizeconstraint-texttransformation
         */
        readonly textTransformation: string;
    }
    /**
     * The part of a web request that you want to inspect, such as a specified header or a query string.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sizeconstraintset-fieldtomatch.html
     */
    interface FieldToMatchProperty {
        /**
         * When the value of `Type` is `HEADER` , enter the name of the header that you want AWS WAF to search, for example, `User-Agent` or `Referer` .
         *
         * The name of the header is not case sensitive.
         *
         * When the value of `Type` is `SINGLE_QUERY_ARG` , enter the name of the parameter that you want AWS WAF to search, for example, `UserName` or `SalesRegion` . The parameter name is not case sensitive.
         *
         * If the value of `Type` is any other value, omit `Data` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sizeconstraintset-fieldtomatch.html#cfn-waf-sizeconstraintset-fieldtomatch-data
         */
        readonly data?: string;
        /**
         * The part of the web request that you want AWS WAF to search for a specified string.
         *
         * Parts of a request that you can search include the following:
         *
         * - `HEADER` : A specified request header, for example, the value of the `User-Agent` or `Referer` header. If you choose `HEADER` for the type, specify the name of the header in `Data` .
         * - `METHOD` : The HTTP method, which indicated the type of operation that the request is asking the origin to perform. Amazon CloudFront supports the following methods: `DELETE` , `GET` , `HEAD` , `OPTIONS` , `PATCH` , `POST` , and `PUT` .
         * - `QUERY_STRING` : A query string, which is the part of a URL that appears after a `?` character, if any.
         * - `URI` : The part of a web request that identifies a resource, for example, `/images/daily-ad.jpg` .
         * - `BODY` : The part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form. The request body immediately follows the request headers. Note that only the first `8192` bytes of the request body are forwarded to AWS WAF for inspection. To allow or block requests based on the length of the body, you can create a size constraint set.
         * - `SINGLE_QUERY_ARG` : The parameter in the query string that you will inspect, such as *UserName* or *SalesRegion* . The maximum length for `SINGLE_QUERY_ARG` is 30 characters.
         * - `ALL_QUERY_ARGS` : Similar to `SINGLE_QUERY_ARG` , but rather than inspecting a single parameter, AWS WAF will inspect all parameters within the query for the value or regex pattern that you specify in `TargetString` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sizeconstraintset-fieldtomatch.html#cfn-waf-sizeconstraintset-fieldtomatch-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnSizeConstraintSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html
 */
export interface CfnSizeConstraintSetProps {
    /**
     * The name, if any, of the `SizeConstraintSet` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html#cfn-waf-sizeconstraintset-name
     */
    readonly name: string;
    /**
     * The size constraint and the part of the web request to check.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html#cfn-waf-sizeconstraintset-sizeconstraints
     */
    readonly sizeConstraints: Array<cdk.IResolvable | CfnSizeConstraintSet.SizeConstraintProperty> | cdk.IResolvable;
}
/**
 * > AWS WAF Classic support will end on September 30, 2025.
 *
 * >
 * > This is *AWS WAF Classic* documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > *For the latest version of AWS WAF* , use the AWS WAF V2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) . With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * A complex type that contains `SqlInjectionMatchTuple` objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a `SqlInjectionMatchSet` contains more than one `SqlInjectionMatchTuple` object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.
 *
 * @cloudformationResource AWS::WAF::SqlInjectionMatchSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sqlinjectionmatchset.html
 */
export declare class CfnSqlInjectionMatchSet extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSqlInjectionMatchSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSqlInjectionMatchSet;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name, if any, of the `SqlInjectionMatchSet` .
     */
    name: string;
    /**
     * Specifies the parts of web requests that you want to inspect for snippets of malicious SQL code.
     */
    sqlInjectionMatchTuples?: Array<cdk.IResolvable | CfnSqlInjectionMatchSet.SqlInjectionMatchTupleProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSqlInjectionMatchSetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSqlInjectionMatchSet {
    /**
     * > AWS WAF Classic support will end on September 30, 2025.
     *
     * >
     * > This is *AWS WAF Classic* documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
     * >
     * > *For the latest version of AWS WAF* , use the AWS WAF V2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) . With the latest version, AWS WAF has a single set of endpoints for regional and global use.
     *
     * Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sqlinjectionmatchset-sqlinjectionmatchtuple.html
     */
    interface SqlInjectionMatchTupleProperty {
        /**
         * The part of a web request that you want to inspect, such as a specified header or a query string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sqlinjectionmatchset-sqlinjectionmatchtuple.html#cfn-waf-sqlinjectionmatchset-sqlinjectionmatchtuple-fieldtomatch
         */
        readonly fieldToMatch: CfnSqlInjectionMatchSet.FieldToMatchProperty | cdk.IResolvable;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF .
         *
         * If you specify a transformation, AWS WAF performs the transformation on `FieldToMatch` before inspecting it for a match.
         *
         * You can only specify a single type of TextTransformation.
         *
         * *CMD_LINE*
         *
         * When you're concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:
         *
         * - Delete the following characters: \ " ' ^
         * - Delete spaces before the following characters: / (
         * - Replace the following characters with a space: , ;
         * - Replace multiple spaces with one space
         * - Convert uppercase letters (A-Z) to lowercase (a-z)
         *
         * *COMPRESS_WHITE_SPACE*
         *
         * Use this option to replace the following characters with a space character (decimal 32):
         *
         * - \f, formfeed, decimal 12
         * - \t, tab, decimal 9
         * - \n, newline, decimal 10
         * - \r, carriage return, decimal 13
         * - \v, vertical tab, decimal 11
         * - non-breaking space, decimal 160
         *
         * `COMPRESS_WHITE_SPACE` also replaces multiple spaces with one space.
         *
         * *HTML_ENTITY_DECODE*
         *
         * Use this option to replace HTML-encoded characters with unencoded characters. `HTML_ENTITY_DECODE` performs the following operations:
         *
         * - Replaces `(ampersand)quot;` with `"`
         * - Replaces `(ampersand)nbsp;` with a non-breaking space, decimal 160
         * - Replaces `(ampersand)lt;` with a "less than" symbol
         * - Replaces `(ampersand)gt;` with `>`
         * - Replaces characters that are represented in hexadecimal format, `(ampersand)#xhhhh;` , with the corresponding characters
         * - Replaces characters that are represented in decimal format, `(ampersand)#nnnn;` , with the corresponding characters
         *
         * *LOWERCASE*
         *
         * Use this option to convert uppercase letters (A-Z) to lowercase (a-z).
         *
         * *URL_DECODE*
         *
         * Use this option to decode a URL-encoded value.
         *
         * *NONE*
         *
         * Specify `NONE` if you don't want to perform any text transformations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sqlinjectionmatchset-sqlinjectionmatchtuple.html#cfn-waf-sqlinjectionmatchset-sqlinjectionmatchtuple-texttransformation
         */
        readonly textTransformation: string;
    }
    /**
     * The part of a web request that you want to inspect, such as a specified header or a query string.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sqlinjectionmatchset-fieldtomatch.html
     */
    interface FieldToMatchProperty {
        /**
         * When the value of `Type` is `HEADER` , enter the name of the header that you want AWS WAF to search, for example, `User-Agent` or `Referer` .
         *
         * The name of the header is not case sensitive.
         *
         * When the value of `Type` is `SINGLE_QUERY_ARG` , enter the name of the parameter that you want AWS WAF to search, for example, `UserName` or `SalesRegion` . The parameter name is not case sensitive.
         *
         * If the value of `Type` is any other value, omit `Data` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sqlinjectionmatchset-fieldtomatch.html#cfn-waf-sqlinjectionmatchset-fieldtomatch-data
         */
        readonly data?: string;
        /**
         * The part of the web request that you want AWS WAF to search for a specified string.
         *
         * Parts of a request that you can search include the following:
         *
         * - `HEADER` : A specified request header, for example, the value of the `User-Agent` or `Referer` header. If you choose `HEADER` for the type, specify the name of the header in `Data` .
         * - `METHOD` : The HTTP method, which indicated the type of operation that the request is asking the origin to perform. Amazon CloudFront supports the following methods: `DELETE` , `GET` , `HEAD` , `OPTIONS` , `PATCH` , `POST` , and `PUT` .
         * - `QUERY_STRING` : A query string, which is the part of a URL that appears after a `?` character, if any.
         * - `URI` : The part of a web request that identifies a resource, for example, `/images/daily-ad.jpg` .
         * - `BODY` : The part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form. The request body immediately follows the request headers. Note that only the first `8192` bytes of the request body are forwarded to AWS WAF for inspection. To allow or block requests based on the length of the body, you can create a size constraint set.
         * - `SINGLE_QUERY_ARG` : The parameter in the query string that you will inspect, such as *UserName* or *SalesRegion* . The maximum length for `SINGLE_QUERY_ARG` is 30 characters.
         * - `ALL_QUERY_ARGS` : Similar to `SINGLE_QUERY_ARG` , but rather than inspecting a single parameter, AWS WAF will inspect all parameters within the query for the value or regex pattern that you specify in `TargetString` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sqlinjectionmatchset-fieldtomatch.html#cfn-waf-sqlinjectionmatchset-fieldtomatch-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnSqlInjectionMatchSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sqlinjectionmatchset.html
 */
export interface CfnSqlInjectionMatchSetProps {
    /**
     * The name, if any, of the `SqlInjectionMatchSet` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sqlinjectionmatchset.html#cfn-waf-sqlinjectionmatchset-name
     */
    readonly name: string;
    /**
     * Specifies the parts of web requests that you want to inspect for snippets of malicious SQL code.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sqlinjectionmatchset.html#cfn-waf-sqlinjectionmatchset-sqlinjectionmatchtuples
     */
    readonly sqlInjectionMatchTuples?: Array<cdk.IResolvable | CfnSqlInjectionMatchSet.SqlInjectionMatchTupleProperty> | cdk.IResolvable;
}
/**
 * > This is *AWS WAF Classic* documentation.
 *
 * For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > *For the latest version of AWS WAF* , use the AWS WAF V2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) . With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * Contains the `Rules` that identify the requests that you want to allow, block, or count. In a `WebACL` , you also specify a default action ( `ALLOW` or `BLOCK` ), and the action for each `Rule` that you add to a `WebACL` , for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the `WebACL` with a Amazon CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one `Rule` to a `WebACL` , a request needs to match only one of the specifications to be allowed, blocked, or counted.
 *
 * @cloudformationResource AWS::WAF::WebACL
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html
 */
export declare class CfnWebACL extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWebACL from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWebACL;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The action to perform if none of the `Rules` contained in the `WebACL` match.
     */
    defaultAction: cdk.IResolvable | CfnWebACL.WafActionProperty;
    /**
     * The name of the metrics for this `WebACL` .
     */
    metricName: string;
    /**
     * A friendly name or description of the `WebACL` .
     */
    name: string;
    /**
     * An array that contains the action for each `Rule` in a `WebACL` , the priority of the `Rule` , and the ID of the `Rule` .
     */
    rules?: Array<CfnWebACL.ActivatedRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWebACLProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWebACL {
    /**
     * > AWS WAF Classic support will end on September 30, 2025.
     *
     * >
     * > This is *AWS WAF Classic* documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
     * >
     * > *For the latest version of AWS WAF* , use the AWS WAF V2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) . With the latest version, AWS WAF has a single set of endpoints for regional and global use.
     *
     * For the action that is associated with a rule in a `WebACL` , specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a `WebACL` , specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a `WebACL` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-webacl-wafaction.html
     */
    interface WafActionProperty {
        /**
         * Specifies how you want AWS WAF to respond to requests that match the settings in a `Rule` .
         *
         * Valid settings include the following:
         *
         * - `ALLOW` : AWS WAF allows requests
         * - `BLOCK` : AWS WAF blocks requests
         * - `COUNT` : AWS WAF increments a counter of the requests that match all of the conditions in the rule. AWS WAF then continues to inspect the web request based on the remaining rules in the web ACL. You can't specify `COUNT` for the default action for a `WebACL` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-webacl-wafaction.html#cfn-waf-webacl-wafaction-type
         */
        readonly type: string;
    }
    /**
     * The `ActivatedRule` object in an `UpdateWebACL` request specifies a `Rule` that you want to insert or delete, the priority of the `Rule` in the `WebACL` , and the action that you want AWS WAF to take when a web request matches the `Rule` ( `ALLOW` , `BLOCK` , or `COUNT` ).
     *
     * To specify whether to insert or delete a `Rule` , use the `Action` parameter in the `WebACLUpdate` data type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-webacl-activatedrule.html
     */
    interface ActivatedRuleProperty {
        /**
         * Specifies the action that Amazon CloudFront or AWS WAF takes when a web request matches the conditions in the `Rule` .
         *
         * Valid values for `Action` include the following:
         *
         * - `ALLOW` : CloudFront responds with the requested object.
         * - `BLOCK` : CloudFront responds with an HTTP 403 (Forbidden) status code.
         * - `COUNT` : AWS WAF increments a counter of requests that match the conditions in the rule and then continues to inspect the web request based on the remaining rules in the web ACL.
         *
         * `ActivatedRule|OverrideAction` applies only when updating or adding a `RuleGroup` to a `WebACL` . In this case, you do not use `ActivatedRule|Action` . For all other update requests, `ActivatedRule|Action` is used instead of `ActivatedRule|OverrideAction` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-webacl-activatedrule.html#cfn-waf-webacl-activatedrule-action
         */
        readonly action?: cdk.IResolvable | CfnWebACL.WafActionProperty;
        /**
         * Specifies the order in which the `Rules` in a `WebACL` are evaluated.
         *
         * Rules with a lower value for `Priority` are evaluated before `Rules` with a higher value. The value must be a unique integer. If you add multiple `Rules` to a `WebACL` , the values don't need to be consecutive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-webacl-activatedrule.html#cfn-waf-webacl-activatedrule-priority
         */
        readonly priority: number;
        /**
         * The `RuleId` for a `Rule` .
         *
         * You use `RuleId` to get more information about a `Rule` , update a `Rule` , insert a `Rule` into a `WebACL` or delete a one from a `WebACL` , or delete a `Rule` from AWS WAF .
         *
         * `RuleId` is returned by `CreateRule` and by `ListRules` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-webacl-activatedrule.html#cfn-waf-webacl-activatedrule-ruleid
         */
        readonly ruleId: string;
    }
}
/**
 * Properties for defining a `CfnWebACL`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html
 */
export interface CfnWebACLProps {
    /**
     * The action to perform if none of the `Rules` contained in the `WebACL` match.
     *
     * The action is specified by the `WafAction` object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html#cfn-waf-webacl-defaultaction
     */
    readonly defaultAction: cdk.IResolvable | CfnWebACL.WafActionProperty;
    /**
     * The name of the metrics for this `WebACL` .
     *
     * The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF , including "All" and "Default_Action." You can't change `MetricName` after you create the `WebACL` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html#cfn-waf-webacl-metricname
     */
    readonly metricName: string;
    /**
     * A friendly name or description of the `WebACL` .
     *
     * You can't change the name of a `WebACL` after you create it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html#cfn-waf-webacl-name
     */
    readonly name: string;
    /**
     * An array that contains the action for each `Rule` in a `WebACL` , the priority of the `Rule` , and the ID of the `Rule` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html#cfn-waf-webacl-rules
     */
    readonly rules?: Array<CfnWebACL.ActivatedRuleProperty | cdk.IResolvable> | cdk.IResolvable;
}
/**
 * > AWS WAF Classic support will end on September 30, 2025.
 *
 * >
 * > This is *AWS WAF Classic* documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > *For the latest version of AWS WAF* , use the AWS WAF V2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) . With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * A complex type that contains `XssMatchTuple` objects, which specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header. If a `XssMatchSet` contains more than one `XssMatchTuple` object, a request needs to include cross-site scripting attacks in only one of the specified parts of the request to be considered a match.
 *
 * @cloudformationResource AWS::WAF::XssMatchSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html
 */
export declare class CfnXssMatchSet extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnXssMatchSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnXssMatchSet;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name, if any, of the `XssMatchSet` .
     */
    name: string;
    /**
     * Specifies the parts of web requests that you want to inspect for cross-site scripting attacks.
     */
    xssMatchTuples: Array<cdk.IResolvable | CfnXssMatchSet.XssMatchTupleProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnXssMatchSetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnXssMatchSet {
    /**
     * > AWS WAF Classic support will end on September 30, 2025.
     *
     * >
     * > This is *AWS WAF Classic* documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
     * >
     * > *For the latest version of AWS WAF* , use the AWS WAF V2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) . With the latest version, AWS WAF has a single set of endpoints for regional and global use.
     *
     * Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-xssmatchset-xssmatchtuple.html
     */
    interface XssMatchTupleProperty {
        /**
         * The part of a web request that you want to inspect, such as a specified header or a query string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-xssmatchset-xssmatchtuple.html#cfn-waf-xssmatchset-xssmatchtuple-fieldtomatch
         */
        readonly fieldToMatch: CfnXssMatchSet.FieldToMatchProperty | cdk.IResolvable;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF .
         *
         * If you specify a transformation, AWS WAF performs the transformation on `FieldToMatch` before inspecting it for a match.
         *
         * You can only specify a single type of TextTransformation.
         *
         * *CMD_LINE*
         *
         * When you're concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:
         *
         * - Delete the following characters: \ " ' ^
         * - Delete spaces before the following characters: / (
         * - Replace the following characters with a space: , ;
         * - Replace multiple spaces with one space
         * - Convert uppercase letters (A-Z) to lowercase (a-z)
         *
         * *COMPRESS_WHITE_SPACE*
         *
         * Use this option to replace the following characters with a space character (decimal 32):
         *
         * - \f, formfeed, decimal 12
         * - \t, tab, decimal 9
         * - \n, newline, decimal 10
         * - \r, carriage return, decimal 13
         * - \v, vertical tab, decimal 11
         * - non-breaking space, decimal 160
         *
         * `COMPRESS_WHITE_SPACE` also replaces multiple spaces with one space.
         *
         * *HTML_ENTITY_DECODE*
         *
         * Use this option to replace HTML-encoded characters with unencoded characters. `HTML_ENTITY_DECODE` performs the following operations:
         *
         * - Replaces `(ampersand)quot;` with `"`
         * - Replaces `(ampersand)nbsp;` with a non-breaking space, decimal 160
         * - Replaces `(ampersand)lt;` with a "less than" symbol
         * - Replaces `(ampersand)gt;` with `>`
         * - Replaces characters that are represented in hexadecimal format, `(ampersand)#xhhhh;` , with the corresponding characters
         * - Replaces characters that are represented in decimal format, `(ampersand)#nnnn;` , with the corresponding characters
         *
         * *LOWERCASE*
         *
         * Use this option to convert uppercase letters (A-Z) to lowercase (a-z).
         *
         * *URL_DECODE*
         *
         * Use this option to decode a URL-encoded value.
         *
         * *NONE*
         *
         * Specify `NONE` if you don't want to perform any text transformations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-xssmatchset-xssmatchtuple.html#cfn-waf-xssmatchset-xssmatchtuple-texttransformation
         */
        readonly textTransformation: string;
    }
    /**
     * The part of a web request that you want to inspect, such as a specified header or a query string.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-xssmatchset-fieldtomatch.html
     */
    interface FieldToMatchProperty {
        /**
         * When the value of `Type` is `HEADER` , enter the name of the header that you want AWS WAF to search, for example, `User-Agent` or `Referer` .
         *
         * The name of the header is not case sensitive.
         *
         * When the value of `Type` is `SINGLE_QUERY_ARG` , enter the name of the parameter that you want AWS WAF to search, for example, `UserName` or `SalesRegion` . The parameter name is not case sensitive.
         *
         * If the value of `Type` is any other value, omit `Data` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-xssmatchset-fieldtomatch.html#cfn-waf-xssmatchset-fieldtomatch-data
         */
        readonly data?: string;
        /**
         * The part of the web request that you want AWS WAF to search for a specified string.
         *
         * Parts of a request that you can search include the following:
         *
         * - `HEADER` : A specified request header, for example, the value of the `User-Agent` or `Referer` header. If you choose `HEADER` for the type, specify the name of the header in `Data` .
         * - `METHOD` : The HTTP method, which indicated the type of operation that the request is asking the origin to perform. Amazon CloudFront supports the following methods: `DELETE` , `GET` , `HEAD` , `OPTIONS` , `PATCH` , `POST` , and `PUT` .
         * - `QUERY_STRING` : A query string, which is the part of a URL that appears after a `?` character, if any.
         * - `URI` : The part of a web request that identifies a resource, for example, `/images/daily-ad.jpg` .
         * - `BODY` : The part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form. The request body immediately follows the request headers. Note that only the first `8192` bytes of the request body are forwarded to AWS WAF for inspection. To allow or block requests based on the length of the body, you can create a size constraint set.
         * - `SINGLE_QUERY_ARG` : The parameter in the query string that you will inspect, such as *UserName* or *SalesRegion* . The maximum length for `SINGLE_QUERY_ARG` is 30 characters.
         * - `ALL_QUERY_ARGS` : Similar to `SINGLE_QUERY_ARG` , but rather than inspecting a single parameter, AWS WAF will inspect all parameters within the query for the value or regex pattern that you specify in `TargetString` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-xssmatchset-fieldtomatch.html#cfn-waf-xssmatchset-fieldtomatch-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnXssMatchSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html
 */
export interface CfnXssMatchSetProps {
    /**
     * The name, if any, of the `XssMatchSet` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html#cfn-waf-xssmatchset-name
     */
    readonly name: string;
    /**
     * Specifies the parts of web requests that you want to inspect for cross-site scripting attacks.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html#cfn-waf-xssmatchset-xssmatchtuples
     */
    readonly xssMatchTuples: Array<cdk.IResolvable | CfnXssMatchSet.XssMatchTupleProperty> | cdk.IResolvable;
}
