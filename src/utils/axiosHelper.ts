import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

class AxiosHelper {
    instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            timeout: 50000, // set timeout to 50 seconds
        });

        this.instance.interceptors.response.use(
            (response) => response,
            (error) => {
                // const state = store.getState();
                // const { isAuthenticated } = state.auth;
                // if (error.response && error.response.status === 401 && isAuthenticated) {
                //     // Handle 401 error by logging out
                //     logout();
                // }
                // return Promise.reject(error);
            }
        );
    }

    async get<T = any>(endpoint: string, params?: any, handleApiErrors: boolean = true): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.instance.get(endpoint, {
                params,
                headers: this.getAuthHeader(),
            });
            return response.data;
        } catch (error) {
            if (handleApiErrors) {
                // apiErrors(error);
            }

            throw error;
        }
    }

    async post<T = any>(endpoint: string, data?: any): Promise<T> {
        try {
            let headers: Record<string, string> = this.getAuthHeader();
            let payload: any = data;

            if (data instanceof FormData) {
                headers = {
                    ...headers,
                    'Content-Type': 'multipart/form-data',
                };
            }

            const response: AxiosResponse<T> = await this.instance.post(endpoint, payload, {
                headers: headers,
            });
            return response.data;
        } catch (error) {
            // apiErrors(error);

            throw error;
        }
    }

    async put<T = any>(endpoint: string, data?: any): Promise<T> {
        try {
            let headers: Record<string, string> = this.getAuthHeader();
            let payload: any = data;

            if (data instanceof FormData) {
                headers = {
                    ...headers,
                    'Content-Type': 'multipart/form-data',
                };
            }

            const response: AxiosResponse<T> = await this.instance.put(endpoint, payload, {
                headers: headers,
            });
            return response.data;
        } catch (error) {
            // apiErrors(error);

            throw error;
        }
    }

    async patch<T = any>(endpoint: string, data?: any): Promise<T> {
        try {
            let headers: Record<string, string> = this.getAuthHeader();
            let payload: any = data;

            if (data instanceof FormData) {
                headers = {
                    ...headers,
                    'Content-Type': 'multipart/form-data',
                };
            }

            const response: AxiosResponse<T> = await this.instance.patch(endpoint, payload, {
                headers: headers,
            });
            return response.data;
        } catch (error) {
            // apiErrors(error);

            throw error;
        }
    }

    async delete<T = any>(endpoint: string): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.instance.delete(endpoint, {
                headers: this.getAuthHeader(),
            });
            return response.data;
        } catch (error) {
            // apiErrors(error);

            throw error;
        }
    }

    private getAuthHeader(): Record<string, string> {
        const headers: Record<string, string> = {};
        const token = Cookies.get('authToken');
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }
        return headers;
    }
}

const axiosHelper = new AxiosHelper();
export default axiosHelper;
