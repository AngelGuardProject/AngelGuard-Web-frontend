import "../styles/MyInfo.css";

function MyInfo() {
    return (
        <div>
            <div className="content-title">내 정보 수정</div>
            <div className="myinfo">
                <div className="profiles">
                    <img src={require("../assets/mypage.png")} alt="" />
                    <div className="myinfo-name">혜림맘</div>
                </div>
                <div className="input-info">
                    <div className="input-title">닉네임</div>
                    <div>
                        <input className="input" type="text" placeholder="혜림맘" />
                    </div>
                </div>
                <div className="input-info">
                    <div className="input-title">아이디</div>
                    <div>
                        <input className="input" type="text" placeholder="yabvei" />
                    </div>
                </div>
                <div className="input-info">
                    <div className="input-title">비밀번호</div>
                    <div>
                        <input className="input" type="password" placeholder="*********" />
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

export default MyInfo;
