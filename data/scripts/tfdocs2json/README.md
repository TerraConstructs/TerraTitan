# tfdocs2json

Parse terraform provider aws docs to json.

## Version 2 (current)

Export terraform-provider-aws resources schema and "lookup" each argument in the typescript markdown document.

Resulting JSON is closer aligned to the Typescript interfaces.

Example usage with Human in the loop:

```console
./build/tfdocs2json -interactive -md ./fixtures/docs/rds_cluster.html.markdown  > outputs/rds_cluster-grep.json
```

## Version 1

Leverage terraform-provider-docs checker logic to parse markdown document, argument section and each argument list item

Reference: [docs-check target](https://github.com/hashicorp/terraform-provider-aws/blob/v5.100.0/GNUmakefile#L178-L185)

Note exceptions:

```console
-ignore-contents-check-data-sources aws_kms_secrets,aws_kms_secret \
-ignore-file-missing-data-sources aws_alb,aws_alb_listener,aws_alb_target_group,aws_albs \
-ignore-file-missing-resources aws_alb,aws_alb_listener,aws_alb_listener_certificate,aws_alb_listener_rule,aws_alb_target_group,aws_alb_target_group_attachment \
```

> NOTE: This approach misses a lot of arguments and was abandoned.

## References

- [YakDriver/tfproviderdocs](https://github.com/YakDriver/tfproviderdocs)
