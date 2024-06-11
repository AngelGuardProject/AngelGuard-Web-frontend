import React, { useState, useEffect } from "react";
import style from "../styles/BabyEdit.module.css";
import axios from "axios";

function BabyEdit({ baby, onCancel }) {
    const date = new Date(baby.baby_birth);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const [name, setName] = useState(baby.baby_name);
    const [birthYear, setBirthYear] = useState(year.toString());
    const [birthMonth, setBirthMonth] = useState(month.toString());
    const [birthDay, setBirthDay] = useState(day.toString());

    const [gender, setGender] = useState(baby.baby_sex);
    const [height, setHeight] = useState(baby.baby_height);
    const [weight, setWeight] = useState(baby.baby_weight);

    useEffect(() => {
        const user_login_id = localStorage.getItem("user_login_id");
        axios
            .post(`http://louk342.iptime.org:3000/mypage/babyupdate/${user_login_id}/${baby.baby_id}`)
            .then((res) => {
                console.log("Baby updated successfully:", res);
            })
            .catch((error) => {
                console.error("Error updating baby:", error);
            });
    }, []);

    const handleDeleteBaby = () => {
        const user_login_id = localStorage.getItem("user_login_id");

        axios
            .post(`http://louk342.iptime.org:3000/mypage/babydelete/${user_login_id}/${baby.baby_id}`)
            .then((res) => {
                console.log("Baby deleted successfully:", res);
                onCancel();
            })
            .catch((error) => {
                console.error("Error deleting baby:", error);
            });
    };

    return (
        <div>
            <div className={style.contentTitle}>아기 정보 수정</div>
            <div className={style.babyInfoContainer}>
                <div className={`${style.babyInput} ${style.babyGenderBox}`}>
                    <div className={style.babyTitle}> 이름</div>
                    <div>
                        <input className={style.babyNameInput} type="text" />
                    </div>
                </div>
                <div className={`${style.babyInput} ${style.babyBirthBox}`}>
                    <div className={style.babyTitle}> 생년월일</div>
                    <div className={style.babyBirth}>
                        <input className={style.babyBirthYear} type="text" />
                        <label>년도</label>
                        <input className={style.babyBirthMonth} type="text" />
                        <label>월</label>
                        <input className={style.babyBirthMonth} type="text" />
                        <label>일</label>
                    </div>
                </div>

                <div className={`${style.babyInput} ${style.babyGenderBox}`}>
                    <div className={style.babyTitle}> 성별</div>
                    <div className={style.babyGender}>
                        <input type="radio" id="radioFemale" name="gender" value="female" />
                        <label htmlFor="radioFemale">여자 </label>
                        <input type="radio" id="radioMale" name="gender" value="male" />
                        <label htmlFor="radioMale">남자</label>
                    </div>
                </div>

                <div className={`${style.babyInput} ${style.babyBodyBox}`}>
                    <div className={style.babyTitle}> 신체정보</div>
                    <div className={style.babyBody}>
                        <label className={style.bodyLabel}>키</label>
                        <input className={style.bodyInputHeight} type="text" />
                        <label className={style.bodyLabelCm}>cm</label>

                        <label className={style.bodyLabel}>몸무게</label>
                        <input className={style.bodyInputWeight} type="text" />
                        <label>kg</label>
                    </div>
                </div>

                <div className={style.btnBox}>
                    <button className={style.btn} id={style.edit}>
                        수정
                    </button>
                    <button className={style.btn} id={style.cancel} onClick={handleDeleteBaby}>
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BabyEdit;
