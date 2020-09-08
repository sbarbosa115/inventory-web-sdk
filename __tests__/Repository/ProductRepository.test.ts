import {ProductRepository} from "../../src/Repository/ProductRepository";
import {Products} from "../../__tests__/Mocks/products";

it('Get all products from API', async () => {
    ProductRepository.all().then(data => expect(data).toEqual(Products.data));
});



