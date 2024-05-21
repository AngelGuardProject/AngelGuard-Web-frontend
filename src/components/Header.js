import style from "../styles/Header.module.css"; // Correct import path
function Header() {
    //메인 헤더
    return (
        <div>
            {/* <div className={style.background}>
        <div className={style.loginWrap}>
          <div className={style.left}>
            <div>AngelGuard</div>
          </div>
          <div className={style.right}>
            <div>
              <div>Login</div>
              <input className={style.id} />
              <input className={style.pw} />
            </div>
          </div>
        </div>
      </div> */}
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
                                signup
                            </a>
                        </li>
                        <li>
                            <a href="#" className={style.menuItem2}>
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
