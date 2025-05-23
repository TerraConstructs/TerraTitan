/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DevopsguruEventSourcesConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * event_sources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_event_sources_config#event_sources DevopsguruEventSourcesConfig#event_sources}
    */
    readonly eventSources?: DevopsguruEventSourcesConfigEventSources[] | cdktf.IResolvable;
}
export interface DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_event_sources_config#status DevopsguruEventSourcesConfig#status}
    */
    readonly status: string;
}
export declare function devopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerToTerraform(struct?: DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler | cdktf.IResolvable): any;
export declare function devopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerToHclTerraform(struct?: DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler | cdktf.IResolvable): any;
export declare class DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler | cdktf.IResolvable | undefined;
    set internalValue(value: DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler | cdktf.IResolvable | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
}
export declare class DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference;
}
export interface DevopsguruEventSourcesConfigEventSources {
    /**
    * amazon_code_guru_profiler block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_event_sources_config#amazon_code_guru_profiler DevopsguruEventSourcesConfig#amazon_code_guru_profiler}
    */
    readonly amazonCodeGuruProfiler?: DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler[] | cdktf.IResolvable;
}
export declare function devopsguruEventSourcesConfigEventSourcesToTerraform(struct?: DevopsguruEventSourcesConfigEventSources | cdktf.IResolvable): any;
export declare function devopsguruEventSourcesConfigEventSourcesToHclTerraform(struct?: DevopsguruEventSourcesConfigEventSources | cdktf.IResolvable): any;
export declare class DevopsguruEventSourcesConfigEventSourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DevopsguruEventSourcesConfigEventSources | cdktf.IResolvable | undefined;
    set internalValue(value: DevopsguruEventSourcesConfigEventSources | cdktf.IResolvable | undefined);
    private _amazonCodeGuruProfiler;
    get amazonCodeGuruProfiler(): DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList;
    putAmazonCodeGuruProfiler(value: DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler[] | cdktf.IResolvable): void;
    resetAmazonCodeGuruProfiler(): void;
    get amazonCodeGuruProfilerInput(): cdktf.IResolvable | DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler[] | undefined;
}
export declare class DevopsguruEventSourcesConfigEventSourcesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DevopsguruEventSourcesConfigEventSources[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DevopsguruEventSourcesConfigEventSourcesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_event_sources_config aws_devopsguru_event_sources_config}
*/
export declare class DevopsguruEventSourcesConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_devopsguru_event_sources_config";
    /**
    * Generates CDKTF code for importing a DevopsguruEventSourcesConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DevopsguruEventSourcesConfig to import
    * @param importFromId The id of the existing DevopsguruEventSourcesConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_event_sources_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DevopsguruEventSourcesConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_event_sources_config aws_devopsguru_event_sources_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DevopsguruEventSourcesConfigConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DevopsguruEventSourcesConfigConfig);
    get id(): string;
    private _eventSources;
    get eventSources(): DevopsguruEventSourcesConfigEventSourcesList;
    putEventSources(value: DevopsguruEventSourcesConfigEventSources[] | cdktf.IResolvable): void;
    resetEventSources(): void;
    get eventSourcesInput(): cdktf.IResolvable | DevopsguruEventSourcesConfigEventSources[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
