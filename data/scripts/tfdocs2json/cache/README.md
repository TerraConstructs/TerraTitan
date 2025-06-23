# Provider schema cache

To parse an individual resource (i.e. `aws_rds_cluster`) out (debug):

```console
jq '.provider_schemas["registry.opentofu.org/hashicorp/aws"].resource_schemas["aws_rds_cluster"]' provider_schema_aws_5.93.0.json > rds_cluster.json
```
