import { useState, useRef } from "react";
import axios from "axios";
import Header from "../components/Header";
import TextEditor from "../components/ckeditor/TextEditor";
import style from "../styles/WriteBoard.module.css";
import cameraIcon from "../assets/camera-icon2.png";
import defaultThumbnailImage from "../assets/thumbnail.png";

function WriteBoard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnailImage, setThumbnailImage] = useState(defaultThumbnailImage);

  const fileInputRef = useRef(null);

  // 데이터 전송
  const uploadDataToServer = async () => {
    const formData = new FormData();

    // 섬네일 추가되었는지 확인
    if (fileInputRef.current.files[0]) {
      formData.append("board_thumbnail", fileInputRef.current.files[0]);
    } else {
      // 섬네일을 추가하지 않은 경우에는 null 전송
      formData.append("board_thumbnail", null);
    }

    formData.append("user_login_id", localStorage.getItem("user_login_id"));
    formData.append("board_title", title);
    formData.append("board_content", content);

    axios
      .post("http://34.47.76.73:3000/board/write", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          window.location.href = `/com-detail/${res.data.board_id}`;
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400) {
          alert("제목 또는 내용을 작성해주세요.");
        }
      });
  };

  // 업로드할 이미지 처리
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // 이미지 클릭 시 input 태그 실행
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 취소 버튼 클릭 시 -> 이전 페이지
  const handleCancel = () => {
    window.history.back();
  };

  return (
    <div>
      <Header color="white" />
      <div
        className={style.thumbnail}
        style={{ backgroundImage: `url(${thumbnailImage})` }}
      >
        <img
          src={cameraIcon}
          alt="Change profile"
          className={style.cameraIcon}
          onClick={handleImageClick}
        />
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <div className={style.titleWrap}>
          <input
            className={style.titleInput}
            name="board_title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="제목을 입력하세요."
          />
        </div>
      </div>
      <div>
        <TextEditor setData={setContent} />
      </div>
      <div className={style.btnBox}>
        <button
          className={`${style.btn} ${style.cancel}`}
          onClick={handleCancel}
        >
          취소
        </button>
        <button
          className={`${style.btn} ${style.submit}`}
          onClick={uploadDataToServer}
        >
          완료
        </button>
      </div>
    </div>
  );
}

export default WriteBoard;
