import fetch from 'node-fetch';
import {mocked} from 'ts-jest/utils';
import {ProfileRepository} from "../../src/Repository/ProfileRepository";

it('getPeople should fetch a person', async () => {
    const response = await ProfileRepository.getUserProfile();
    console.log(response.title);
});