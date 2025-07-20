import axiosInstance from "./axiosInstance";

interface LoginRequest{
    email: string;
    password: string;
}

export const login = async (data: LoginRequest) => {
    const response = await axiosInstance.post('users/login',data);
    return response.data;
}