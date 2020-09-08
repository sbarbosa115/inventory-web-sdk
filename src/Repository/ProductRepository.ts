import axios from 'axios';
import {ENVIRONMENT_URL} from "../Config/Dotenv";
import {Product} from "@App/Entity/Product";
import {Products} from "../../__tests__/Mocks/products";

export const ProductRepository = {
    async all() : Promise<Product[]> {
        if (!ENVIRONMENT_URL) {
            return new Promise((resolve) => {
                return resolve(Products.data);
            });
        }

        return await axios({
          method: "GET",
          url: ENVIRONMENT_URL
        }).then((response: { data: Product }) => response.data ) as Product[];
    },
}