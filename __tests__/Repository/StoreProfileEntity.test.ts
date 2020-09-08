import axios from 'axios';
import {StoreOwnerUserRepository} from '../../src/Repository/ProfileRepository';

const StoreProfileResponse = {
    "status": 200,
    "data": {
        "name": "Store",
        "lastName": "Client",
        "username": "storeclient",
        "email": "storeclient@example.com",
        "files": [
            {
                "name": "filename.png",
                "type": "image"
            }
        ]
    }
};

it('Show User Profile', async () => {
    axios.get = jest.fn().mockResolvedValue(StoreOwnerUserRepository);
    StoreOwnerUserRepository.showUser().then(data => expect(data).toEqual(StoreProfileResponse.data));
});

it('Update User Profile', async () => {
    //@TODO To implement the user profile Logic.
})



