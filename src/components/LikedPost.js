import style from "../styles/LikedPost.module.css";

const LikedPost = () => {
    // 예시 데이터
    const likedPosts = [
        { no: 1, title: "예시 작성글1", date: "2023.05.01", likes: 10, author: "엄마" },
        { no: 2, title: "예시 작성글2", date: "2023.05.02", likes: 40, author: "엄마" },
        { no: 3, title: "예시 작성글3 ", date: "2023.05.03", likes: 14, author: "엄마" },
    ];

    return (
        <div>
            <div className={style.contentTitle}>좋아요한 게시글</div>
            <div className={style.totalLikedPosts}>좋아요한 게시글 {likedPosts.length}개 </div>

            <div className={style.postList}>
                <div className={style.postHeader}>
                    <span className={style.postNo}>번호</span>
                    <span className={style.postTitle}>제목</span>
                    <span className={style.postDate}>날짜</span>
                    <span className={style.postLikes}>좋아요</span>
                    <span className={style.postAuthor}>작성자</span>
                </div>
                {likedPosts.map((post) => (
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

export default LikedPost;
