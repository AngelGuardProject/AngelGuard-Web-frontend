import "../styles/Babyinfo.css";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
function Babyinfo() {
    return (
        <div>
            <Header2 />
            <div id="mypage-container">
                <div id="mypage-title">MY PAGE</div>
                <div id="container">
                    <Sidebar />
                    <div id="content">
                        <div className="content-title">아기 정보 수정</div>
                        <div className="plus-baby">+ 아기 등록하기</div>
                        <div id="baby-list">
                            <div className="baby-info">
                                <div className="baby-name">오주희</div>
                                <div className="baby-birth">여아 / 2003.11.30</div>
                            </div>
                            <div className="baby-info">
                                <div className="baby-name">오주희</div>
                                <div className="baby-birth">여아 / 2003.11.30</div>
                            </div>
                            <div className="baby-info">
                                <div className="baby-name">오주희</div>
                                <div className="baby-birth">여아 / 2003.11.30</div>
                            </div>
                            <div className="baby-info">
                                <div className="baby-name">오주희</div>
                                <div className="baby-birth">2003/11/30</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Babyinfo;
