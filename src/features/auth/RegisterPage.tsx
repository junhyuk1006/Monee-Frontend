import "@/styles/auth/RegisterPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "@/api/authApi";

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await register({ email, nickname, password });
      alert('회원가입 성공!');
      navigate("/login");
    } catch (err) {
      alert('회원가입 실패!');
      console.error(err);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">회원가입</h2>

        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="이메일"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="닉네임"
            className="register-input"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="비밀번호"
            className="register-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="register-button">
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
