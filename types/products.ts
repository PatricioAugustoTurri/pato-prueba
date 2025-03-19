export type ProductType = {

    id: number,
    productName: string;
    documentId: string;
    slug: string;
    description: string;
    active: boolean;
    isFeatured: boolean,
    price: number,
    images: {
            id: number,
            url: string,
        }[]
    category: {
        categoryName: string;
        slug: string;
    };
    size: string;
}