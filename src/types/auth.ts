export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: {
        id: string;
        email: string;
        name: string;
    };
}

export interface AuthError {
    message: string;
    code?: string;
}

export interface ForgotPasswordResponse {
    message: string;
    success: boolean;
} 