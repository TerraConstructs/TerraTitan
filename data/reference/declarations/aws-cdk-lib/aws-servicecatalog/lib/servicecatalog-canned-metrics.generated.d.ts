export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class ServiceCatalogMetrics {
    static provisionedProductLaunchSum(this: void, dimensions: {
        ProductId: string;
    }): MetricWithDims<{
        ProductId: string;
    }>;
}
