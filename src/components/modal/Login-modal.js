import style from "../../styles/Login.module.css";

function Login() {
  return (
    <div className={style.background}>
      <div className={style.loginWrap}>
        <div className={style.left}>
          <div className={style.logo}>AngelGuard</div>
        </div>
        <div className={style.right}>
          <div className={style.loginForm}>
            <div className={style.loginTitle}>Login</div>
            <input className={style.id} placeholder="아이디를 입력해주세요." />
            <input
              className={style.pw}
              placeholder="비밀번호를 입력해주세요."
            />
            <button className={style.loginBtn}>Login</button>
            <div className={style.moveRegister}>
              아이디가 없다면? 회원가입 하러가기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
