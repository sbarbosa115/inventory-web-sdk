import {Image} from "./Image";

export interface StoreOwner {
    name: string;
    lastName: string;
    userName: string;
    email: string;
    files: Array<Image>,
}