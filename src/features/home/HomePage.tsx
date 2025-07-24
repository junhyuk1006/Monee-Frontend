import { Link } from "react-router-dom";
import "../../styles/home/HomePage.css";
const HomePage = () => {
   return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="home-title">Monee 💸</h1>
        <p className="home-subtitle">당신의 현명한 소비를 위한 가계부</p>

        <div className="home-button-group">
          <Link to="/login" className="home-button login">로그인</Link>
          <Link to="/register" className="home-button register">회원가입</Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;