import { Owner } from '../Entity/Owner';

export class ProfileRepository {
    getProfile() {
        return new Owner('Example User', 'exampleuser', 'user@example.com');
    }
}