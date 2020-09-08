import { Image } from "@App/Entity/Image";

export interface Product {
    id: string,
    code: string,
    title: string,
    detail: null | string
    status: number,
    price: number,
    sku: null | string,
    isUnlimited: boolean,
    images: Image[]
}