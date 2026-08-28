export interface IProperty {
    id: string;

    title: string;
    category: string;

    location?: string;
    price: number;
    propertyType?: string;

    bedrooms?: number;
    bathrooms?: number;

    area?: number;
    builtYear?: number;

    shortDescription: string;
    fullDescription?: string;

    features?: string[];
    images: string[];
}
