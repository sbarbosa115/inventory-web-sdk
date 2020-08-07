import fetch from 'node-fetch';
import {ENVIRONMENT_URL} from "../Config/Dotenv";
import {ProfileEntity} from "../Entity/ProfileEntity";

export const ProfileRepository = {
    async getUserProfile() : Promise<ProfileEntity> {
        return await fetch(ENVIRONMENT_URL)
            .then(response => response.json()) as ProfileEntity;
    },
}