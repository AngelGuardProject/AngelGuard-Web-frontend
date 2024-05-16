import "../styles/Header2.css";
function Header2() {
    //메인 헤더
    return (
        <div>
            <header id="header-container2">
                <div className="logo">AngelGuard</div>
                <nav className="menu">
                    <ul>
                        <li>
                            <a href="#" id="menu-item">
                                community
                            </a>
                        </li>
                        <li>
                            <a href="#" id="menu-item">
                                logout
                            </a>
                        </li>
                        <li>
                            <a href="#" id="menu-img">
                                <img src={require("../assets/mypage.png")} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header2;
