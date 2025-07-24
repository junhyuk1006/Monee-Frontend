import axiosInstance from "./axiosInstance";

interface LoginRequest{
    email: string;
    password: string;
}

interface RegisterRequest{
    email: string;
    nickname: string;
    password: string;
}

export const login = async (data: LoginRequest) => {
    const response = await axiosInstance.post('users/login', data);
    return response.data;
}

export const register = async (data: RegisterRequest) => {
    const response = await axiosInstance.post('/users/signup', data);
    return response.data;
}