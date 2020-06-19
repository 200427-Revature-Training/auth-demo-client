import { internalAxios } from './internal-axios';

interface ICredentials {
    email: string;
    password: string;
}


export const signupRequest = async (credentials: ICredentials) => {
    const response = await internalAxios.post('/signup', credentials)
    console.log(response);
}

export const loginRequest = async (credentials: ICredentials) => {
    const response = await internalAxios.post('/login', credentials)
    console.log(response);
}
