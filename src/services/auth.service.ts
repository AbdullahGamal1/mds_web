import api from './api';

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterData {
    email: string;
    password: string;
    name: string;
}

export const authService = {
    login: async (credentials: LoginCredentials) => {
        const response = await api.post('/auth/login', credentials);
        const { accessToken, refreshToken, user } = response.data;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('user', JSON.stringify(user));

        return response.data;
    },

    register: async (data: RegisterData) => {
        const response = await api.post('/auth/register', data);
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
    },

    getCurrentUser: async () => {
        const response = await api.get('/auth/me');
        return response.data.user;
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('accessToken');
    },
};
