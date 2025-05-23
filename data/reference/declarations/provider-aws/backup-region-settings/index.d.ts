/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupRegionSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_region_settings#id BackupRegionSettings#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_region_settings#resource_type_management_preference BackupRegionSettings#resource_type_management_preference}
    */
    readonly resourceTypeManagementPreference?: {
        [key: string]: (boolean | cdktf.IResolvable);
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_region_settings#resource_type_opt_in_preference BackupRegionSettings#resource_type_opt_in_preference}
    */
    readonly resourceTypeOptInPreference: {
        [key: string]: (boolean | cdktf.IResolvable);
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_region_settings aws_backup_region_settings}
*/
export declare class BackupRegionSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_backup_region_settings";
    /**
    * Generates CDKTF code for importing a BackupRegionSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BackupRegionSettings to import
    * @param importFromId The id of the existing BackupRegionSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_region_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BackupRegionSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_region_settings aws_backup_region_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupRegionSettingsConfig
    */
    constructor(scope: Construct, id: string, config: BackupRegionSettingsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _resourceTypeManagementPreference?;
    get resourceTypeManagementPreference(): {
        [key: string]: (boolean | cdktf.IResolvable);
    };
    set resourceTypeManagementPreference(value: {
        [key: string]: (boolean | cdktf.IResolvable);
    });
    resetResourceTypeManagementPreference(): void;
    get resourceTypeManagementPreferenceInput(): {
        [key: string]: boolean | cdktf.IResolvable;
    } | undefined;
    private _resourceTypeOptInPreference?;
    get resourceTypeOptInPreference(): {
        [key: string]: (boolean | cdktf.IResolvable);
    };
    set resourceTypeOptInPreference(value: {
        [key: string]: (boolean | cdktf.IResolvable);
    });
    get resourceTypeOptInPreferenceInput(): {
        [key: string]: boolean | cdktf.IResolvable;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
