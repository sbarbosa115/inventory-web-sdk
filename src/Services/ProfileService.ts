import { ClientInterface } from "../Entity/ClientInterface";
import {ProfileRepository} from "../Repository/ProfileRepository";
import {ProfileServiceInterface} from "./Interfaces/ProfileServiceInterface";

export const ProfileService : ProfileServiceInterface =  {
    getUserProfile(): ClientInterface
    {
        return ProfileRepository.getUserProfile();
    }
}