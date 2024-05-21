import React from "react";
import "../styles/MyPost.css";

const MyPost = () => {
    const myPosts = [
        { no: 1, title: "이건 내가 씀", date: "2023-05-01", likes: 10, author: "누구게" },
        { no: 2, title: "내가 썻어", date: "2023-05-02", likes: 40, author: "최혜림이다" },
        { no: 3, title: "나연 예빈 열애설 ", date: "2023-05-03", likes: 14, author: "나다" },
    ];

    return (
        <div>
            <div className="content-title">게시글 조회</div>
            <div className="post-info total-posts-box">
                <div className="total-posts">총 게시글 {myPosts.length}</div>
            </div>
            <div className="post-info">
                <button className="write-btn">작성하기</button>
            </div>
            <div className="post-list">
                <div className="post-header">
                    <span className="post-no">번호</span>
                    <span className="post-title">제목</span>
                    <span className="post-date">날짜</span>
                    <span className="post-likes">좋아요</span>
                    <span className="post-author">작성자</span>
                </div>
                {myPosts.map((post) => (
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

export default MyPost;
