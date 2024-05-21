import style from "../../styles/SignUp.module.css";

function SignUp({closeModal}) {
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
                className={style.id}
                placeholder="아이디를 입력해주세요."
              />
            </div>

            <div style={{marginBottom: "26px"}}>
              <label>
                닉네임<span style={{color: "red"}}>*</span>
              </label>
              <input
                className={style.nickname}
                placeholder="닉네임을 입력해주세요."
              />
            </div>

            <div style={{marginBottom: "26px"}}>
              <label>
                비밀번호<span style={{color: "red"}}>*</span>
              </label>
              <input
                className={style.pw}
                placeholder="비밀번호를 입력해주세요."
              />
            </div>

            <div>
              <label>
                비밀번호 확인<span style={{color: "red"}}>*</span>
              </label>
              <input
                className={style.pwc}
                placeholder="비밀번호를 한번 더 입력해주세요."
              />
            </div>

            <button className={style.loginBtn}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
