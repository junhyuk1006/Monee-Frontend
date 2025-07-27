import { Link } from "react-router-dom";
import { useState } from "react";
import "@/styles/common/Navbar.css";

const Navbar = () =>{
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="main-header">
            <div className="logo">Monee</div>
            <nav className="nav-menu">
                <Link to="/main">홈</Link>
                <Link to="/post">글 작성</Link>
                <Link to="/transaction">가계부</Link>
            </nav>
            <div className="user-icon" onClick={()=> setShowMenu(!showMenu)}>
            👤
                {showMenu &&(
                    <div className="user-menu">
                        <div>내 정보</div>
                        <div>계정 설정</div>
                        <div>로그아웃</div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;