import {useParams} from "react-router-dom";
import Header from "../components/Header";
import style from "../styles/CommunityDetail.module.css";

function CommunityDetail() {
  const params = useParams();
  return (
    <div>
      <Header color="#ffffff" />
      <div className={style.background}>
        <div className={style.title}>COMMUNITY</div>
        <div className={style.contentBox}>
          <div className={style.writeContent}>
            <div className={style.left}>
              <div className={style.writerBox}>
                <img
                  className={style.profile}
                  src={require("../assets/mypage.png")}
                />
                <div>{data[params.id].writer}</div>
              </div>
              <div className={style.boardTitle}>{data[params.id].title}</div>
            </div>
            <div className={style.date}>작성일자 : {data[params.id].date}</div>
          </div>
          <div className={style.line}></div>
          <div className={style.content}>
            content 어쩌구 저쩌구 어쩔래미 저짤래미
          </div>
        </div>
        <div className={style.commentBox}>
          <div>
            <div className={style.commentTitle}>COMMENT</div>
            <textarea
              className={style.input}
              placeholder="커뮤니티에서는 바른말만 사용해주세요"
            />
          </div>
          <button className={style.submitBtn}>등록</button>
        </div>
        <div className={style.comments}>
          {comment.map(item => (
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
          ))}
        </div>
      </div>
    </div>
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
