import { ClientInterface } from '../Entity/ClientInterface';

export const ProfileRepository = {
    getUserProfile(): ClientInterface  {
        // Check the client LocalStorage and check if user profile exist if not perform call to the backend.
        console.log('content from get ProfileRepository.getUserProfile()')
        return ;
    },
}