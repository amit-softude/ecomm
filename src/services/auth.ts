// import api from './api';
import { LoginCredentials, LoginResponse } from '@/types/auth';
import axiosHelper from '@/utils/axiosHelper';

export interface RegisterData {
    name: string;
    email: string;
    password: string;
}

export const authService = {
    login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
        const response = await axiosHelper.post<LoginResponse>('/auth/login', credentials);
        return response;
    },

    logout: async (): Promise<void> => {
        await axiosHelper.post('/auth/logout');
        localStorage.removeItem('token');
    },

    getCurrentUser: async () => {
        const response = await axiosHelper.get('/auth/me');
        return response;
    },

    forgotPassword: async (email: string): Promise<void> => {
        await axiosHelper.post('/auth/forgot-password', { email });
    },

    register: async (data: RegisterData): Promise<void> => {
        await axiosHelper.post('/auth/register', data);
    },
}; 