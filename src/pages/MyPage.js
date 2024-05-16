import "../styles/MyPage.css";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
function MyPage() {
    return (
        <div>
            <Header2 />
            <div id="mypage-container">
                <div id="mypage-title">MY PAGE</div>
                <div id="container">
                    <Sidebar />
                    <div id="content">
                        <div className="content-title">내 정보 수정</div>
                        <div className="myinfo">
                            <div className="profiles">
                                <img src={require("../assets/profile.png")} alt="" />
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
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MyPage;
