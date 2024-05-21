import "../styles/Header.css";
import Login from "./modal/Login-modal";
function Header() {
  //메인 헤더
  return (
    <div>
      {<Login />}
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
