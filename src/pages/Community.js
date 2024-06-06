import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import style from "../styles/Community.module.css";
import {useEffect, useState} from "react";
import axios from "axios";

function Community() {
  const [board, setBoard] = useState([]);
  const [page, setPage] = useState();

  useEffect(() => {
    axios
      .get("http://louk342.iptime.org:3000/board/?page=1")
      .then(res => {
        console.log(res);
        setPage(res.data.pageNum);
        setBoard(res.data.contents);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header color="#ffffff" scrolled={false} />
      <div>
        <div className={style.titleBox}>
          <div className={style.title}>COMMUNITY</div>
          <div className={style.smallTitle}>부모님들의 소통 커뮤니티</div>
          <div className={style.line}></div>
        </div>
        <div className={style.boardCnt}>총 게시물 1004개</div>
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
                        src={require("../assets/mypage.png")}
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
          <button className={style.writeBtn}>작성하기</button>
          <div className={style.pagenation}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Community;

const data = [
  {
    no: "1",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "2",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "3",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "4",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "5",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "6",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "7",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "8",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "9",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "10",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
];
