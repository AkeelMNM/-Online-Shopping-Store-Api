export interface Product {
    id: string,
    category: string[],
    title: string,
    isBestSeller: boolean,
    variants: Variant[]
}

interface Variant {
    id: string,
    size: string,
    color: string,
    price: string,
    stock: number,
    discount: string,
    image: string
}