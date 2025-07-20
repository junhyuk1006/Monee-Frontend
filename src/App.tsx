import { useEffect } from 'react'
import { login } from './api/authApi';

function App() {
  useEffect(()=>{
    const doLogin = async() =>{
      try{
        const res = await login({
          email: "test@example.com",
          password: "1234abcd!"
        });
        console.log('로그인 성공:', res);
      }catch(err){
          console.error('로그인 실패:', err);
      }
    };
    doLogin();
  })
   return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Monee 백엔드 연결 테스트 중</h1>
    </div>
  );
}

export default App;
