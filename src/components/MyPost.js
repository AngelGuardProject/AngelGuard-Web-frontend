import React from "react";
import style from "../styles/MyPost.module.css";

const MyPost = () => {
    const myPosts = [
        { no: 1, title: "이건 내가 씀", date: "2023-05-01", likes: 10, author: "누구게" },
        { no: 2, title: "내가 썻어", date: "2023-05-02", likes: 40, author: "최혜림이다" },
        { no: 3, title: "나연 예빈 열애설 ", date: "2023-05-03", likes: 14, author: "나다" },
    ];

    return (
        <div>
            <div className={style.contentTitle}>게시글 조회</div>
            <div className={`${style.postInfo} ${style.totalPostsBox}`}>
                <div className={style.totalPosts}>총 게시글 {myPosts.length}</div>
            </div>
            <div className={style.postInfo}>
                <button className={style.writeBtn}>작성하기</button>
            </div>
            <div className={style.postList}>
                <div className={style.postHeader}>
                    <span className={style.postNo}>번호</span>
                    <span className={style.postTitle}>제목</span>
                    <span className={style.postDate}>날짜</span>
                    <span className={style.postLikes}>좋아요</span>
                    <span className={style.postAuthor}>작성자</span>
                </div>
                {myPosts.map((post) => (
                    <div key={post.no} className={style.postItem}>
                        <span className={style.postNo}>{post.no}</span>
                        <span className={style.postTitle}>{post.title}</span>
                        <span className={style.postDate}>{post.date}</span>
                        <span className={style.postLikes}>{post.likes}</span>
                        <span className={style.postAuthor}>{post.author}</span>
                    </div>
                ))}
                <div className={style.pagination}>
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
