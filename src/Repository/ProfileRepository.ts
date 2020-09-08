import axios from 'axios';

import {ENVIRONMENT_URL} from "../Config/Dotenv";
import {StoreOwner} from "../Entity/StoreOwner";

export const StoreOwnerUserRepository = {
    async showUser() : Promise<StoreOwner> {
        return await axios({
          method: "GET",
          url: ENVIRONMENT_URL
        }).then((response: { data: StoreOwner }) => response.data ) as StoreOwner;
    },
    async createUser(user: StoreOwner): Promise<StoreOwner> {
        return await axios({
            method: 'POST',
            url: ENVIRONMENT_URL,
            data: user
        }).then((response: { data: StoreOwner }) => response.data ) as StoreOwner;
    },
    async deleteUser(userId: number): Promise<void> {
        await axios({
            method: 'DELETE',
            url: `${ENVIRONMENT_URL}/user/delete`,
        })
    }
}