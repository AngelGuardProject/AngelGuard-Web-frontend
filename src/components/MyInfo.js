import React from "react";
import style from "../styles/MyInfo.module.css";

function MyInfo() {
    return (
        <div>
            <div className={style.contentTitle}>내 정보 수정</div>
            <div className={style.myInfo}>
                <div className={style.profiles}>
                    <img src={require("../assets/mypage.png")} alt="" />
                    <div className={style.myInfoName}>혜림맘</div>
                </div>
                <div className={style.inputInfo}>
                    <div className={style.inputTitle}>닉네임</div>
                    <div>
                        <input className={style.input} type="text" placeholder="혜림맘" />
                    </div>
                </div>
                <div className={style.inputInfo}>
                    <div className={style.inputTitle}>아이디</div>
                    <div>
                        <input className={style.input} type="text" placeholder="yabvei" />
                    </div>
                </div>
                <div className={style.inputInfo}>
                    <div className={style.inputTitle}>비밀번호</div>
                    <div>
                        <input className={style.input} type="password" placeholder="*********" />
                    </div>
                </div>
                <div className={style.btnBox}>
                    <button className={`${style.btn} ${style.edit}`}>수정</button>
                    <button className={`${style.btn} ${style.cancel}`}>취소</button>
                </div>
            </div>
        </div>
    );
}

export default MyInfo;
