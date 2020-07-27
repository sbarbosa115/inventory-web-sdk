import { ClientInterface } from "../Entity/ClientInterface";
import {ProfileRepository} from "../Repository/ProfileRepository";
import {ProfileServiceInterface} from "./Interfaces/ProfileServiceInterface";

export let ProfileService : ProfileServiceInterface =  {
    getUserProfile(): ClientInterface
    {
        return ProfileRepository.getUserProfile();
    }
}