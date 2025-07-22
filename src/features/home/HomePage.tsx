import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white text-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Monee 💸</h1>
        <p className="text-gray-500 mb-8 text-lg">당신의 현명한 소비를 위한 가계부</p>

        <div className="flex justify-center space-x-4">
          <Link
            to="/login"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            로그인
          </Link>
          <Link
            to="/register"
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-300 transition"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;