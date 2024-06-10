import style from "../../styles/SignUp.module.css";
import axios from "axios";
import {useState} from "react";

function SignUp({closeModal}) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwc, setPwc] = useState("");
  const [username, setUsername] = useState("");

  const signUp = () => {
    if (id == "") {
      alert("아이디를 입력해주세요.");
    }
    if (pw == "") {
      alert("비밀번호를 입력해주세요.");
    }
    if (pw != pwc) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    }
    if (username == "") {
      alert("닉네임을 입력해주세요.");
    } else if (id != "" && pw != "" && pw == pwc && username != "") {
      axios({
        method: "post",
        url: "http://louk342.iptime.org:3000/user/signUp",
        data: {
          username: username,
          user_login_id: id,
          pw: pw,
        },
      })
        .then(res => {
          if (res.data) console.log(res.data);
          alert("회원가입에 성공하였습니다");
          closeModal();
        })
        .catch(err => {
          if (err.response.status == 402) {
            alert("이미 존재하는 아이디입니다.");
          }
        });
    }
  };

  return (
    <div className={style.background}>
      <div className={style.loginWrap}>
        <div className={style.left}>
          <div className={style.logo}>AngelGuard</div>
        </div>
        <div className={style.right}>
          <div onClick={closeModal} className={style.XBtn}>
            <img src={require("../../assets/X.png")} />
          </div>
          <div className={style.loginForm}>
            <div className={style.loginTitle}>SignUp</div>
            <div style={{marginBottom: "26px"}}>
              <label>
                아이디<span style={{color: "red"}}>*</span>
              </label>
              <input
                type="text"
                name="id"
                value={id}
                onChange={e => {
                  setId(e.target.value);
                }}
                className={style.id}
                placeholder="아이디를 입력해주세요."
              />
            </div>

            <div style={{marginBottom: "26px"}}>
              <label>
                닉네임<span style={{color: "red"}}>*</span>
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={e => {
                  setUsername(e.target.value);
                }}
                className={style.nickname}
                placeholder="닉네임을 입력해주세요."
              />
            </div>

            <div style={{marginBottom: "26px"}}>
              <label>
                비밀번호<span style={{color: "red"}}>*</span>
              </label>
              <input
                type="password"
                name="pw"
                value={pw}
                onChange={e => {
                  setPw(e.target.value);
                }}
                className={style.pw}
                placeholder="비밀번호를 입력해주세요."
              />
            </div>

            <div>
              <label>
                비밀번호 확인<span style={{color: "red"}}>*</span>
              </label>
              <input
                type="password"
                name="pwc"
                value={pwc}
                onChange={e => {
                  setPwc(e.target.value);
                }}
                className={style.pwc}
                placeholder="비밀번호를 한번 더 입력해주세요."
              />
            </div>

            <button onClick={signUp} className={style.loginBtn}>
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
