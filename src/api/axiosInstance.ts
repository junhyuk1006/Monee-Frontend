import axios from "axios";

// 전역 설정 및 토큰 자동 추가
const axiosInstance = axios.create({
    baseURL : 'http://localhost:8080', // 백엔드 주소 설정
    withCredentials: false, // 쿠키 인증 true, JWT는 false
});

axiosInstance.interceptors.request.use((config)=>{
    const token = localStorage.getItem('accessToken');
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})


export default axiosInstance;