import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import RegisterPage from "../features/auth/RegisterPage";
import WelcomePage from "../features/home/WelcomePage";
import MainPage from "@/features/home/MainPage";

const AppRouter = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage/>} />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/main" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;