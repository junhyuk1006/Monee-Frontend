import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/authApi";

const LoginPage = () =>{
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () =>{
        try{
            const response = await login({email, password});
            // 토큰 저장
            localStorage.setItem('accessToken', response.token);
            
            // 유저 정보 저장
            localStorage.setItem('user',JSON.stringify({
                email: response.email,
                nickname: response.nickname,
            }));

            navigate('/transactions');
        } catch (err) {
            alert('로그인 실패!');
            console.error(err);
        }
    }

    return (
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">로그인</h2>

            <input
                type="email"
                placeholder="이메일"
                className="border p-2 mb-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="비밀번호"
                className="border p-2 mb-4 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white py-2 px-4 w-full rounded hover:bg-blue-600"
            >
                로그인
            </button>
        </div>
    );
}

export default LoginPage;