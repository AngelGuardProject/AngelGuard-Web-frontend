import style from "../styles/Header2.module.css";
function Header2() {
    return (
        <div>
            <header className={style.headerContainer}>
                <div className={style.logo}>AngelGuard</div>
                <nav className={style.menu}>
                    <ul>
                        <li>
                            <a href="#" className={style.menuItem}>
                                community
                            </a>
                        </li>
                        <li>
                            <a href="#" className={style.menuItem}>
                                logout
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img className={style.menuImg} src={require("../assets/profile.png")} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header2;
