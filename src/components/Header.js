import "../styles/Header.css";
function Header() {
  //메인 헤더
  return (
    <div>
      <div className="background">
        <div className="login-wrap">
          <div className="left">
            <div>AngelGuard</div>
          </div>
          <div className="right">
            <div>
              <div>Login</div>
              <input className="id" />
              <input className="pw" />
            </div>
          </div>
        </div>
      </div>
      <header id="header-container">
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
                signup
              </a>
            </li>
            <li>
              <a href="#" id="menu-item2">
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
