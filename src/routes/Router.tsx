import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import RegisterPage from "../features/auth/RegisterPage";
import WelcomePage from "../features/home/WelcomePage";
import MainPage from "@/features/home/MainPage";
import TransactionPage from "@/features/transaction/TransactionPage";

const AppRouter = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage/>} />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/main" element={<MainPage/>}/>
                <Route path="/transaction" element={<TransactionPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;