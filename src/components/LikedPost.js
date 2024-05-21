import React from "react";
import "../styles/LikedPost.css";

const LikedPost = () => {
    // 예시 데이터
    const likedPosts = [
        { no: 1, title: "울 혜림공주 일기~", date: "2023-05-01", likes: 10, author: "나" },
        { no: 2, title: "제호님 하드웨어 천재설 ㄷㄷ", date: "2023-05-02", likes: 20, author: "나예요" },
        { no: 3, title: "응애 애기 2조 조강홍교수님이랑 단체샷", date: "2023-05-03", likes: 30, author: "나라고" },
    ];

    return (
        <div>
            <div className="content-title">좋아요한 게시글</div>
            <div className="post-info total-posts-box">
                <div className="total-liked-posts">좋아요한 게시글 {likedPosts.length}</div>
            </div>

            <div className="post-list">
                <div className="post-header">
                    <span className="post-no">번호</span>
                    <span className="post-title">제목</span>
                    <span className="post-date">날짜</span>
                    <span className="post-likes">좋아요</span>
                    <span className="post-author">작성자</span>
                </div>
                {likedPosts.map((post) => (
                    <div key={post.no} className="post-item">
                        <span className="post-no">{post.no}</span>
                        <span className="post-title">{post.title}</span>
                        <span className="post-date">{post.date}</span>
                        <span className="post-likes">{post.likes}</span>
                        <span className="post-author">{post.author}</span>
                    </div>
                ))}
                <div className="pagination">
                    <span>&lt;</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>&gt;</span>
                </div>
            </div>
        </div>
    );
};

export default LikedPost;
