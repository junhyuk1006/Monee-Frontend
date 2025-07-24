import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/authApi";
import "@/styles/auth/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // ✅ form 제출 시 새로고침 막기

    try {
      const response = await login({ email, password });

      // 토큰 저장
      localStorage.setItem('accessToken', response.token);

      // 유저 정보 저장
      localStorage.setItem('user', JSON.stringify({
        email: response.email,
        nickname: response.nickname,
      }));

      navigate('/');
    } catch (err) {
      alert('로그인 실패!');
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">로그인</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="이메일"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="비밀번호"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
