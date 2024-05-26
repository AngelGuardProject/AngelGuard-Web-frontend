import style from "../styles/BabyPlus.module.css";

function BabyPlus() {
    return (
        <div>
            <div className={style.contentTitle}>아기 정보 등록</div>
            <div className={style.babyInfoContainer}>
                <div className={`${style.babyInput} ${style.babyGenderBox}`}>
                    <div className={style.babyTitle}>이름</div>
                    <div>
                        <input className={style.babyNameInput} type="text" placeholder="이름을 입력해주세요," />
                    </div>
                </div>
                <div className={`${style.babyInput} ${style.babyBirthBox}`}>
                    <div className={style.babyTitle}> 생년월일</div>
                    <div className={style.babyBirth}>
                        <input className={style.babyBirthYear} type="text" placeholder="" /> <label>년도</label>
                        <input className={style.babyBirthMonth} type="text" placeholder="" /> <label>월</label>
                        <input className={style.babyBirthMonth} type="text" placeholder="" /> <label>일</label>
                    </div>
                </div>

                <div className={`${style.babyInput} ${style.babyGenderBox}`}>
                    <div className={style.babyTitle}>성별</div>
                    <div className={style.babyGender}>
                        <input type="radio" id="radioFemale" name="gender" value="female" />
                        <label htmlFor="radioFemale">여자 </label>
                        <input type="radio" id="radioMale" name="gender" value="male" />
                        <label htmlFor="radioMale">남자</label>
                    </div>
                </div>

                <div className={`${style.babyInput} ${style.babyBodyBox}`}>
                    <div className={style.babyTitle}>신체정보</div>
                    <div className={style.babyBody}>
                        <label className={style.bodyLabel}>키</label>
                        <input className={style.bodyInputHeight} type="text" placeholder="" />
                        <label className={style.bodyLabelCm}>cm</label>

                        <label className={style.bodyLabel}>몸무게</label>
                        <input className={style.bodyInputWeight} type="text" placeholder="" />
                        <label>kg</label>
                    </div>
                </div>

                <div className={style.btnBox}>
                    <button className={style.btn} id={style.edit}>
                        등록
                    </button>
                    <button className={style.btn} id={style.cancle}>
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BabyPlus;
