import "../styles/Header.css";
import Login from "./modal/Login-modal";
import SignUp from "./modal/SignUp-modal";
import React, {useState} from "react";

function Header() {
  const [modal, setModal] = useState(null);
  //메인 헤더
  return (
    <div>
      {modal == "signup" ? <SignUp /> : null}
      {modal == "login" ? <Login /> : null}
      <header id="header-container">
        <div className="logo">AngelGuard</div>
        <nav className="menu">
          <ul>
            <li>
              <a href="#" id="menu-item">
                community
              </a>
            </li>
            <li
              onClick={() => {
                setModal("signup");
              }}
              id="menu-item"
            >
              signup
            </li>
            <li
              onClick={() => {
                setModal("login");
              }}
              id="menu-item2"
            >
              login
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
