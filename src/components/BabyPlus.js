import React, { useState } from "react";
import style from "../styles/BabyPlus.module.css";
import axios from "axios";

function BabyPlus({ onCancel, onAdd }) {
    const [name, setName] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [birthMonth, setBirthMonth] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const handleAddBaby = () => {
        const user_login_id = localStorage.getItem("user_login_id");
        const babyData = {
            user_login_id,
            baby_id: Math.floor(Math.random() * 1000),
            baby_name: name,
            baby_sex: gender,
            baby_birth: `${birthYear}-${birthMonth}-${birthDay}`,
            baby_weight: parseInt(weight),
            baby_height: parseInt(height),
        };

        axios
            .post(`http://louk342.iptime.org:3000/mypage/babycreate`, babyData)
            .then((res) => {
                console.log("Baby added successfully:", res);
                setName("");
                setBirthYear("");
                setBirthMonth("");
                setBirthDay("");
                setGender("");
                setHeight("");
                setWeight("");
                if (onAdd) {
                    onAdd();
                }
            })
            .catch((error) => {
                console.error("Error adding baby:", error);
            });
    };

    return (
        <div>
            <div className={style.contentTitle}>아기 정보 등록</div>
            <div className={style.babyInfoContainer}>
                <div className={`${style.babyInput} ${style.babyGenderBox}`}>
                    <div className={style.babyTitle}>이름</div>
                    <div>
                        <input
                            className={style.babyNameInput}
                            type="text"
                            placeholder="이름을 입력해주세요,"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className={`${style.babyInput} ${style.babyBirthBox}`}>
                    <div className={style.babyTitle}> 생년월일</div>
                    <div className={style.babyBirth}>
                        <input
                            className={style.babyBirthYear}
                            type="text"
                            placeholder="YYYY"
                            value={birthYear}
                            onChange={(e) => setBirthYear(e.target.value)}
                        />
                        <label>년</label>
                        <input
                            className={style.babyBirthMonth}
                            type="text"
                            placeholder="MM"
                            value={birthMonth}
                            onChange={(e) => setBirthMonth(e.target.value)}
                        />
                        <label>월</label>
                        <input
                            className={style.babyBirthMonth}
                            type="text"
                            placeholder="DD"
                            value={birthDay}
                            onChange={(e) => setBirthDay(e.target.value)}
                        />
                        <label>일</label>
                    </div>
                </div>
                <div className={`${style.babyInput} ${style.babyGenderBox}`}>
                    <div className={style.babyTitle}>성별</div>
                    <div className={style.babyGender}>
                        <input type="radio" id="radioFemale" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
                        <label htmlFor="radioFemale">여자 </label>
                        <input type="radio" id="radioMale" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />
                        <label htmlFor="radioMale">남자</label>
                    </div>
                </div>
                <div className={`${style.babyInput} ${style.babyBodyBox}`}>
                    <div className={style.babyTitle}>신체정보</div>
                    <div className={style.babyBody}>
                        <label className={style.bodyLabel}>키</label>
                        <input
                            className={style.bodyInputHeight}
                            type="text"
                            placeholder=""
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                        <label className={style.bodyLabelCm}>cm</label>
                        <label className={style.bodyLabel}>몸무게</label>
                        <input
                            className={style.bodyInputWeight}
                            type="text"
                            placeholder=""
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        <label>kg</label>
                    </div>
                </div>
                <div className={style.btnBox}>
                    <button className={style.btn} id={style.edit} onClick={handleAddBaby}>
                        등록
                    </button>
                    <button className={style.btn} id={style.cancle} onClick={onCancel}>
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BabyPlus;
