/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecoveryreadinessResourceSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#id Route53RecoveryreadinessResourceSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#resource_set_name Route53RecoveryreadinessResourceSet#resource_set_name}
    */
    readonly resourceSetName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#resource_set_type Route53RecoveryreadinessResourceSet#resource_set_type}
    */
    readonly resourceSetType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#tags Route53RecoveryreadinessResourceSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#tags_all Route53RecoveryreadinessResourceSet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * resources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#resources Route53RecoveryreadinessResourceSet#resources}
    */
    readonly resources: Route53RecoveryreadinessResourceSetResources[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#timeouts Route53RecoveryreadinessResourceSet#timeouts}
    */
    readonly timeouts?: Route53RecoveryreadinessResourceSetTimeouts;
}
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#arn Route53RecoveryreadinessResourceSet#arn}
    */
    readonly arn?: string;
}
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource): any;
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToHclTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource): any;
export declare class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource | undefined;
    set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
}
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}
    */
    readonly recordSetId?: string;
}
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource): any;
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToHclTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource): any;
export declare class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource | undefined;
    set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource | undefined);
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    resetDomainName(): void;
    get domainNameInput(): string | undefined;
    private _recordSetId?;
    get recordSetId(): string;
    set recordSetId(value: string);
    resetRecordSetId(): void;
    get recordSetIdInput(): string | undefined;
}
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource {
    /**
    * nlb_resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#nlb_resource Route53RecoveryreadinessResourceSet#nlb_resource}
    */
    readonly nlbResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource;
    /**
    * r53_resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#r53_resource Route53RecoveryreadinessResourceSet#r53_resource}
    */
    readonly r53Resource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource;
}
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource): any;
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToHclTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource): any;
export declare class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource | undefined;
    set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource | undefined);
    private _nlbResource;
    get nlbResource(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference;
    putNlbResource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource): void;
    resetNlbResource(): void;
    get nlbResourceInput(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource | undefined;
    private _r53Resource;
    get r53Resource(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference;
    putR53Resource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource): void;
    resetR53Resource(): void;
    get r53ResourceInput(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource | undefined;
}
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#hosted_zone_arn Route53RecoveryreadinessResourceSet#hosted_zone_arn}
    */
    readonly hostedZoneArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}
    */
    readonly recordSetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#record_type Route53RecoveryreadinessResourceSet#record_type}
    */
    readonly recordType?: string;
    /**
    * target_resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#target_resource Route53RecoveryreadinessResourceSet#target_resource}
    */
    readonly targetResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource;
}
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResource): any;
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToHclTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResource): any;
export declare class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResource | undefined;
    set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource | undefined);
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _hostedZoneArn?;
    get hostedZoneArn(): string;
    set hostedZoneArn(value: string);
    resetHostedZoneArn(): void;
    get hostedZoneArnInput(): string | undefined;
    private _recordSetId?;
    get recordSetId(): string;
    set recordSetId(value: string);
    resetRecordSetId(): void;
    get recordSetIdInput(): string | undefined;
    private _recordType?;
    get recordType(): string;
    set recordType(value: string);
    resetRecordType(): void;
    get recordTypeInput(): string | undefined;
    private _targetResource;
    get targetResource(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference;
    putTargetResource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource): void;
    resetTargetResource(): void;
    get targetResourceInput(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource | undefined;
}
export interface Route53RecoveryreadinessResourceSetResources {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#readiness_scopes Route53RecoveryreadinessResourceSet#readiness_scopes}
    */
    readonly readinessScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#resource_arn Route53RecoveryreadinessResourceSet#resource_arn}
    */
    readonly resourceArn?: string;
    /**
    * dns_target_resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#dns_target_resource Route53RecoveryreadinessResourceSet#dns_target_resource}
    */
    readonly dnsTargetResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource;
}
export declare function route53RecoveryreadinessResourceSetResourcesToTerraform(struct?: Route53RecoveryreadinessResourceSetResources | cdktf.IResolvable): any;
export declare function route53RecoveryreadinessResourceSetResourcesToHclTerraform(struct?: Route53RecoveryreadinessResourceSetResources | cdktf.IResolvable): any;
export declare class Route53RecoveryreadinessResourceSetResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53RecoveryreadinessResourceSetResources | cdktf.IResolvable | undefined;
    set internalValue(value: Route53RecoveryreadinessResourceSetResources | cdktf.IResolvable | undefined);
    get componentId(): string;
    private _readinessScopes?;
    get readinessScopes(): string[];
    set readinessScopes(value: string[]);
    resetReadinessScopes(): void;
    get readinessScopesInput(): string[] | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    resetResourceArn(): void;
    get resourceArnInput(): string | undefined;
    private _dnsTargetResource;
    get dnsTargetResource(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference;
    putDnsTargetResource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource): void;
    resetDnsTargetResource(): void;
    get dnsTargetResourceInput(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResource | undefined;
}
export declare class Route53RecoveryreadinessResourceSetResourcesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53RecoveryreadinessResourceSetResources[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53RecoveryreadinessResourceSetResourcesOutputReference;
}
export interface Route53RecoveryreadinessResourceSetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#delete Route53RecoveryreadinessResourceSet#delete}
    */
    readonly delete?: string;
}
export declare function route53RecoveryreadinessResourceSetTimeoutsToTerraform(struct?: Route53RecoveryreadinessResourceSetTimeouts | cdktf.IResolvable): any;
export declare function route53RecoveryreadinessResourceSetTimeoutsToHclTerraform(struct?: Route53RecoveryreadinessResourceSetTimeouts | cdktf.IResolvable): any;
export declare class Route53RecoveryreadinessResourceSetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecoveryreadinessResourceSetTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Route53RecoveryreadinessResourceSetTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set aws_route53recoveryreadiness_resource_set}
*/
export declare class Route53RecoveryreadinessResourceSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53recoveryreadiness_resource_set";
    /**
    * Generates CDKTF code for importing a Route53RecoveryreadinessResourceSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53RecoveryreadinessResourceSet to import
    * @param importFromId The id of the existing Route53RecoveryreadinessResourceSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53RecoveryreadinessResourceSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoveryreadiness_resource_set aws_route53recoveryreadiness_resource_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessResourceSetConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoveryreadinessResourceSetConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _resourceSetName?;
    get resourceSetName(): string;
    set resourceSetName(value: string);
    get resourceSetNameInput(): string | undefined;
    private _resourceSetType?;
    get resourceSetType(): string;
    set resourceSetType(value: string);
    get resourceSetTypeInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _resources;
    get resources(): Route53RecoveryreadinessResourceSetResourcesList;
    putResources(value: Route53RecoveryreadinessResourceSetResources[] | cdktf.IResolvable): void;
    get resourcesInput(): cdktf.IResolvable | Route53RecoveryreadinessResourceSetResources[] | undefined;
    private _timeouts;
    get timeouts(): Route53RecoveryreadinessResourceSetTimeoutsOutputReference;
    putTimeouts(value: Route53RecoveryreadinessResourceSetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Route53RecoveryreadinessResourceSetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
