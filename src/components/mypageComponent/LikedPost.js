import React, { useState, useEffect } from "react";
import style from "../../styles/LikedPost.module.css";
import axios from "axios";
import MyPageNation from "./MyPageNation";

const LikedPost = () => {
  const [likedPosts, setLikedPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [pnTotal, setPnTotal] = useState(1);

  const user_login_id = localStorage.getItem("user_login_id");

  useEffect(() => {
    axios
      .get(
        `http://34.47.76.73:3000/board/likedlist/${user_login_id}/?page=${page}`
      )
      .then((res) => {
        console.log(res);
        setPage(res.data.pageNum);
        setLikedPosts(res.data.contents);
        setTotalPosts(res.data.totalCount);
        setPnTotal(res.data.pnTotal);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, user_login_id]);

  return (
    <div>
      <div className={style.contentTitle}>좋아요한 게시글</div>
      <div className={style.totalLikedPosts}>
        좋아요한 게시글 {totalPosts}
      </div>{" "}
      {/* totalPosts 상태 사용 */}
      <div className={style.community}>
        <div className={style.contents}>
          {likedPosts.length > 0 ? (
            likedPosts.map((post) => (
              <a
                className={style.a}
                key={post.board_id}
                href={`/com-detail/${post.board_id}`}
              >
                <div className={style.listContents}>
                  <div className={style.left}>
                    <div className={style.left_top}>
                      <img
                        className={style.profile}
                        src={
                          post.user_image && post.user_image !== "null"
                            ? post.user_image
                            : require("../../assets/mypage.png")
                        }
                        alt="profile"
                      />
                      <div>
                        <div className={style.username}>
                          {post.user_nickname}
                        </div>
                        <div className={style.date}>{post.board_date}</div>
                      </div>
                    </div>
                    <div className={style.board_title}>{post.board_title}</div>
                  </div>
                  <div className={style.right}>
                    <div className={style.like_count}>
                      좋아요 {post.like_count}개
                    </div>
                    {post.board_thumbnail ? (
                      <img
                        className={style.thumbnail}
                        src={post.board_thumbnail}
                        alt="thumbnail"
                      />
                    ) : null}
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className={style.noPostsMessage}>
              아직 좋아요한 게시글이 없습니다.
            </div>
          )}
        </div>
      </div>
      {totalPosts > 0 && (
        <div className={style.pagination}>
          <MyPageNation pnTotal={pnTotal} setPage={setPage} page={page} />
        </div>
      )}
    </div>
  );
};

export default LikedPost;
