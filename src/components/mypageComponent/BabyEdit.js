import React, { useState } from "react";
import style from "../../styles/BabyEdit.module.css";
import axios from "axios";

function BabyEdit({ baby, onCancel, onUpdate }) {
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

    const handleDeleteBaby = () => {
        const user_login_id = localStorage.getItem("user_login_id");

        axios
            .post(`http://louk342.iptime.org:3000/mypage/babydelete/${user_login_id}/${baby.baby_id}`)
            .then((res) => {
                alert("아기가 성공적으로 삭제되었습니다.");
                console.log("Baby deleted successfully:", res);
                onUpdate(null);
                onCancel();
            })
            .catch((error) => {
                console.error("Error deleting baby:", error);
            });
    };

    const handleEditBaby = () => {
        if (!name) {
            alert("이름을 입력해주세요!");
            return;
        }
        if (!birthYear || !birthMonth || !birthDay) {
            alert("생년월일을 모두 입력해주세요!");
            return;
        }
        if (!gender) {
            alert("성별을 선택해주세요!");
            return;
        }
        if (!height) {
            alert("키를 입력해주세요!");
            return;
        }
        if (!weight) {
            alert("몸무게를 입력해주세요!");
            return;
        }

        const user_login_id = localStorage.getItem("user_login_id");
        const newBirthdate = `${birthYear}-${birthMonth.padStart(2, "0")}-${birthDay.padStart(2, "0")}`;

        const updatedData = {
            ...baby,
            baby_name: name,
            baby_sex: gender,
            baby_birth: newBirthdate,
            baby_weight: parseInt(weight),
            baby_height: parseInt(height),
        };

        axios
            .post(`http://louk342.iptime.org:3000/mypage/babyupdate/${user_login_id}/${baby.baby_id}`, updatedData)
            .then((res) => {
                alert("아기 정보가 성공적으로 수정되었습니다.");
                console.log("Baby updated successfully:", res);
                onUpdate(updatedData);
                onCancel();
            })
            .catch((error) => {
                console.error("Error updating baby:", error);
                alert("아기 정보를 수정하는 데 문제가 발생했습니다.");
            });
    };

    return (
        <div>
            <div className={style.contentTitle}>아기 정보 수정</div>
            <div className={style.babyInfoContainer}>
                <div className={`${style.babyInput} ${style.babyGenderBox}`}>
                    <div className={style.babyTitle}> 이름</div>
                    <div>
                        <input className={style.babyNameInput} type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className={`${style.babyInput} ${style.babyBirthBox}`}>
                    <div className={style.babyTitle}> 생년월일</div>
                    <div className={style.babyBirth}>
                        <input className={style.babyBirthYear} type="text" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} />
                        <label>년도</label>
                        <input className={style.babyBirthMonth} type="text" value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)} />
                        <label>월</label>
                        <input className={style.babyBirthMonth} type="text" value={birthDay} onChange={(e) => setBirthDay(e.target.value)} />
                        <label>일</label>
                    </div>
                </div>

                <div className={`${style.babyInput} ${style.babyGenderBox}`}>
                    <div className={style.babyTitle}> 성별</div>
                    <div className={style.babyGender}>
                        <input
                            type="radio"
                            id="radioFemale"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={() => setGender("female")}
                        />
                        <label htmlFor="radioFemale">여자 </label>
                        <input
                            type="radio"
                            id="radioMale"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={() => setGender("male")}
                        />
                        <label htmlFor="radioMale">남자</label>
                    </div>
                </div>

                <div className={`${style.babyInput} ${style.babyBodyBox}`}>
                    <div className={style.babyTitle}> 신체정보</div>
                    <div className={style.babyBody}>
                        <label className={style.bodyLabel}>키</label>
                        <input className={style.bodyInputHeight} type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
                        <label className={style.bodyLabelCm}>cm</label>

                        <label className={style.bodyLabel}>몸무게</label>
                        <input className={style.bodyInputWeight} type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
                        <label>kg</label>
                    </div>
                </div>

                <div className={style.btnBox}>
                    <button className={style.btn} id={style.edit} onClick={handleEditBaby}>
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
