import React, { useState, useEffect } from "react";
import style from "../styles/MyPost.module.css";
import axios from "axios";

const MyPost = () => {
    const [myPosts, setMyPosts] = useState([]);
    const [page, setPage] = useState(1); // Initialize page number to 1
    const user_login_id = localStorage.getItem("user_login_id"); // Retrieve user_login_id from localStorage

    useEffect(() => {
        axios
            .get(`http://louk342.iptime.org:3000/board/postedlist/${user_login_id}/?page=${page}`)
            .then((res) => {
                console.log(res);
                setPage(res.data.pageNum);
                setMyPosts(res.data.contents);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [page, user_login_id]);
    return (
        <div>
            <div className={style.contentTitle}>게시글 조회</div>
            <div className={style.topInfoContainer}>
                <div className={style.totalPosts}>총 게시글 {myPosts.length}</div>
                <div className={style.postInfo}>
                    <button className={style.writeBtn}>작성하기</button>
                </div>
            </div>
            <div className={style.community}>
                <div className={style.contents}>
                    {myPosts.map((post) => (
                        <a className={style.a} key={post.board_id} href={`/com-detail/${post.board_id}`}>
                            <div className={style.listContents}>
                                <div className={style.left}>
                                    <div className={style.left_top}>
                                        <img className={style.profile} src={require("../assets/mypage.png")} />
                                        <div>
                                            <div className={style.username}>{post.user_nickname}</div>
                                            <div className={style.date}>{post.board_date}</div>
                                        </div>
                                    </div>
                                    <div className={style.board_title}>{post.board_title}</div>
                                </div>
                                <div className={style.right}>
                                    <div className={style.like_count}>좋아요 {post.like_count}개</div>
                                    {post.board_thumbnail ? <img className={style.thumbnail} src={post.board_thumbnail} /> : null}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
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
    );
};

export default MyPost;
