import { internalAxios } from './internal-axios';

interface ICredentials {
    email: string;
    password: string;
}

interface IUserPayload {
    email: string;
}

export const logoutRequest = async () => {
    await internalAxios.get('/logout');
    return;
}

export const signupRequest = async (credentials: ICredentials) => {
    const response = await internalAxios.post('/signup', credentials)
    if (response.status === 201) {
        return true;
    }
    return false;
}

export const loginRequest = async (credentials: ICredentials) => {
    const response = await internalAxios.post('/login', credentials)
    if(response.status === 200) {
        return true;
    }
    return false;
}

export const getAuthenticatedUser = async () => {
    const response = await internalAxios.get<IUserPayload>('/login');
    if (response.status == 200) {
        return response.data;
    }
    return undefined;
}