import "../styles/Header.css";
function Header() {
    //메인 헤더
    return (
        <div>
            <header id="header-container">
                <div className="logo">AngelGuard</div>
                <nav className="menu">
                    <ul>
                        <li>
                            <a href="#" className="menu-item">
                                community
                            </a>
                        </li>
                        <li>
                            <a href="#" className="menu-item">
                                signup
                            </a>
                        </li>
                        <li>
                            <a href="#" className="menu-item2">
                                login
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
