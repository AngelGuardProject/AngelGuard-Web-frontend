import { useState } from "react";
import style from "../../styles/Login.module.css";
import axios from "axios";

function Login({ closeModal, openSignUp }) {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const login = () => {
        axios
            .post("http://louk342.iptime.org:3000/user/login", {
                user_login_id: id,
                pw: pw,
            })
            .then((res) => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user_login_id", res.data.data.user_login_id);
                closeModal();
            })
            .catch((err) => {
                if (err.response.status === 403) {
                    alert("아이디와 비밀번호를 입력해주세요.");
                } else if (err.response.status === 406) {
                    alert("비밀번호가 일치하지 않습니다.");
                } else if (err.response.status === 405) {
                    alert("존재하지 않는 아이디입니다.");
                }
            });
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            login();
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className={style.background} onClick={handleOverlayClick}>
            <div className={style.loginWrap}>
                <div className={style.left}>
                    <div className={style.logo}>AngelGuard</div>
                    <div className={style.leftTxt}>" 오늘도 방문해주셔서 감사합니다! "</div>
                </div>
                <div className={style.right}>
                    <div onClick={closeModal} className={style.XBtn}>
                        <img src={require("../../assets/X.png")} alt="Close" />
                    </div>
                    <div className={style.loginForm}>
                        <div className={style.loginTitle}>Login</div>
                        <input
                            name="id"
                            value={id}
                            onChange={(e) => {
                                setId(e.target.value);
                            }}
                            onKeyPress={handleKeyPress}
                            className={style.id}
                            placeholder="아이디를 입력해주세요."
                        />
                        <input
                            type="password"
                            name="pw"
                            value={pw}
                            onChange={(e) => {
                                setPw(e.target.value);
                            }}
                            onKeyPress={handleKeyPress}
                            className={style.pw}
                            placeholder="비밀번호를 입력해주세요."
                        />
                        <button onClick={login} className={style.loginBtn}>
                            Login
                        </button>
                        <div
                            onClick={() => {
                                closeModal();
                                openSignUp();
                            }}
                            className={style.moveRegister}
                        >
                            아이디가 없다면? 회원가입 하러가기
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
