export interface User {
    id: string;
    name: string;
    email: string;
}

export interface AuthCredentials {
    token: string | null;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface ApiResponse<T> {
    data: T;
    error?: string;
}