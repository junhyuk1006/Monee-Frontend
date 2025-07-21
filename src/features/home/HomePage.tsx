import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
            <h1 className="text-4xl font-bold mb-6">Monee 💸</h1>
            <p className="mb-6 text-gray-600">당신의 현명한 소비를 위한 가계부</p>

            <div className="space-x-4">
                <Link
                to="/login"
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                로그인
                </Link>
                <Link
                to="/register"
                className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400"
                >
                회원가입
                </Link>
            </div>
        </div>
    )

}
export default HomePage;