import {Link, useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import style from "../styles/Community.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import PageNation from "../components/PageNation";

function Community() {
  const [board, setBoard] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://louk342.iptime.org:3000/board/?page=${page}`)
      .then(res => {
        console.log(res.data);
        setTotal(res.data.totalCount);
        setBoard(res.data.contents);
      })
      .catch(err => {
        console.log(err);
      });
  }, [page]);

  return (
    <div>
      <Header color="#ffffff" scrolled={false} />
      <div>
        <div className={style.titleBox}>
          <div className={style.title}>COMMUNITY</div>
          <div className={style.smallTitle}>부모님들의 소통 커뮤니티</div>
          <div className={style.line}></div>
        </div>
        <div className={style.boardCnt}>총 게시물 {total}개</div>
        <div className={style.community}>
          <div className={style.contents}>
            {board.map(item => (
              <a
                className={style.a}
                key={item.board_id}
                href={`/com-detail/${item.board_id}`}
              >
                <div className={style.listContents}>
                  <div className={style.left}>
                    <div className={style.left_top}>
                      <img
                        className={style.profile}
                        src={
                          item.user_image == "null"
                            ? require("../assets/mypage.png")
                            : item.user_image
                        }
                      />
                      <div>
                        <div className={style.username}>
                          {item.user_nickname}
                        </div>
                        <div className={style.date}>{item.board_date}</div>
                      </div>
                    </div>
                    <div className={style.board_title}>{item.board_title}</div>
                  </div>
                  <div className={style.right}>
                    <div className={style.like_count}>
                      좋아요 {item.like_count}개
                    </div>
                    {item.board_thumbnail != "null" ? (
                      <img
                        className={style.thumbnail}
                        src={item.board_thumbnail}
                      />
                    ) : null}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              if (localStorage.getItem("token")) {
                navigate("/write");
              } else {
                alert("로그인 후 이용할 수 있는 컨텐츠입니다.");
              }
            }}
            className={style.writeBtn}
          >
            작성하기
          </button>
          <PageNation />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Community;
