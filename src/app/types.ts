export type ElasticModel = {
    id: number;
    modelName: string;
    brandName: string;
}

export type Query = {
    searchModelByKey: ElasticModel[];
}