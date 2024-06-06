import {Link, useParams} from "react-router-dom";
import Header from "../components/Header";
import style from "../styles/CommunityDetail.module.css";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import axios from "axios";

function CommunityDetail() {
  const params = useParams();
  const [data, setData] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios
      .get(`http://louk342.iptime.org:3000/board/${params.id}`, {
        params: {
          board_id: params.id,
        },
      })
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const addComment = () => {
    axios
      .post(
        "http://louk342.iptime.org:3000/comment/write",
        {
          board_id: params.id,
          user_id: "test",
          comment_content: comment,
        }
        // {
        //   headers: {
        //     Authorization: localStorage.getItem("token"),
        //   },
        // }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <Header color="#ffffff" scrolled={false} />
        <div className={style.background}>
          <div className={style.title}>COMMUNITY</div>
          <div className={style.contentBox}>
            <div className={style.writeContent}>
              <div className={style.left}>
                <div className={style.writerBox}>
                  {data.user_image == "null" ? (
                    <img
                      className={style.profile}
                      src={require("../assets/mypage.png")}
                    />
                  ) : (
                    <img className={style.profile} src={data.user_image} />
                  )}

                  <div>{data.user_nickname}</div>
                </div>
                <div className={style.boardTitle}>{data.board_title}</div>
              </div>
              <div className={style.date}>작성일자 : {data.board_date}</div>
            </div>
            <div className={style.line}></div>
            <div
              className={style.content}
              dangerouslySetInnerHTML={{__html: data.board_content}}
            ></div>
          </div>
          <div className={style.commentBox}>
            <div>
              <div className={style.commentTitle}>COMMENT</div>
              <textarea
                name="comment"
                onChange={e => {
                  setComment(e.target.value);
                  console.log(comment);
                }}
                className={style.input}
                placeholder="커뮤니티에서는 바른말만 사용해주세요"
              />
            </div>
            <button onClick={addComment} className={style.submitBtn}>
              등록
            </button>
          </div>
          <div className={style.comments}>
            {/* {comment.map(item => (
              <div className={style.comment}>
                <div className={style.commentInfo}>
                  <img
                    className={style.profile}
                    src={require("../assets/mypage.png")}
                  />
                  <div className={style.commentWriter}>{item.writer}</div>
                  <div className={style.commentDate}>{item.date}</div>
                </div>
                <div className={style.commentContent}>{item.content}</div>
              </div>
            ))} */}
          </div>
          <a className={style.a} href="/community">
            <div className={style.backBtn}>목록</div>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CommunityDetail;

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

const comment = [
  {
    writer: "예빈맘",
    date: "2024.05.27 13:20PM",
    content:
      "개인적으로는 P사의 돌려돌려돌림판이 좋은것 같더라구요 실리콘 재질이라 세균 번식이 적고 세척이 쉬워서 저는 좋았어요 ㅎㅎ",
  },
  {
    writer: "예빈맘",
    date: "2024.05.27 13:20PM",
    content:
      "개인적으로는 P사의 돌려돌려돌림판이 좋은것 같더라구요 실리콘 재질이라 세균 번식이 적고 세척이 쉬워서 저는 좋았어요 ㅎㅎ",
  },
  {
    writer: "예빈맘",
    date: "2024.05.27 13:20PM",
    content:
      "개인적으로는 P사의 돌려돌려돌림판이 좋은것 같더라구요 실리콘 재질이라 세균 번식이 적고 세척이 쉬워서 저는 좋았어요 ㅎㅎ",
  },
  {
    writer: "예빈맘",
    date: "2024.05.27 13:20PM",
    content:
      "개인적으로는 P사의 돌려돌려돌림판이 좋은것 같더라구요 실리콘 재질이라 세균 번식이 적고 세척이 쉬워서 저는 좋았어요 ㅎㅎ",
  },
];
