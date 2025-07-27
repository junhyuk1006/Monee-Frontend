import Navbar from "@/components/Navbar";
import "@/styles/home/MainPage.css"; 

const MainPage = () => {

  const dummyFeeds = [
    {
      id: 1,
      nickname: "절약왕 홍길동",
      content: "이번 달 커피값 0원 달성 ☕❌",
      createdAt: "2025-07-25",
      likes: 12,
    },
    {
      id: 2,
      nickname: "지출컷 이순신",
      content: "교통비 아끼려고 자전거 샀어요 🚲",
      createdAt: "2025-07-24",
      likes: 8,
    },
    {
      id: 3,
      nickname: "현명한 소비자 김철수",
      content: "마트에서 장 본 내역 정리했어요 🧾",
      createdAt: "2025-07-23",
      likes: 17,
    },
  ];

  return (
    <div className="main-container">
      {/* 상단 네비게이션 바 */}
        <Navbar/>
      {/* 메인 피드 */}
      <main className="feed-section">
        {dummyFeeds.map((feed) => (
          <div key={feed.id} className="feed-card">
            <div className="feed-header">
              <strong>{feed.nickname}</strong>
              <span className="feed-date">{feed.createdAt}</span>
            </div>
            <p className="feed-content">{feed.content}</p>
            <div className="feed-footer">❤️ {feed.likes} 좋아요</div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default MainPage;
