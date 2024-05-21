import "../styles/BabyEdit.css";

function BabyEdit() {
    return (
        <div>
            <div className="content-title">아기 정보 수정</div>
            <div className="babyinfo">
                <div className="baby-input">
                    <div className="baby-title">아이 이름</div>
                    <div>
                        <input className="baby-name-input" type="text" placeholder="오주희" />
                    </div>
                </div>

                <div className="baby-input baby-birth-box">
                    <div className="baby-title">아이 생년월일</div>
                    <div className="baby-birth">
                        <input className="baby-birth-year" type="text" placeholder="2003" /> <label>년도</label>
                        <input className="baby-birth-month" type="text" placeholder="11" /> <label>월</label>
                        <input className="baby-birth-month" type="text" placeholder="30" /> <label>일</label>
                    </div>
                </div>

                <div className="baby-input baby-gender-box">
                    <div className="baby-title">아이 성별</div>
                    <div className="baby-gender">
                        <input type="radio" id="radio" name="gender" value="female" />
                        <label>여자 </label>
                        <input type="radio" id="radio" name="gender" value="male" />
                        <label>남자</label>
                    </div>
                </div>

                <div className="baby-input baby-body-box">
                    <div className="baby-title">아이 신체정보</div>
                    <div className="baby-body">
                        <label className="body-label">키</label>
                        <input id="body-input height" type="text" placeholder="160" />
                        <label className="body-label-cm">cm</label>

                        <label className="body-label">몸무게</label>
                        <input id="body-input weight" type="text" placeholder="50" />
                        <label>kg</label>
                    </div>
                </div>

                <div className="btn-box">
                    <button className="btn edit">수정</button>
                    <button className="btn cancle">취소</button>
                </div>
            </div>
        </div>
    );
}

export default BabyEdit;
