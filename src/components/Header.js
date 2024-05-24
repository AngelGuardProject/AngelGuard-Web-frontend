import {useState} from "react";
import style from "../styles/Header.module.css"; // Correct import path
import Login from "./modal/Login-modal";
import SignUp from "./modal/SignUp-modal";
function Header() {
  const [modal, setModal] = useState();

  const openLogin = () => {
    setModal("login");
  };

  const openSignUp = () => {
    setModal("signup");
  };

  const closeModal = () => {
    setModal(null);
  };
  //메인 헤더
  return (
    <div>
      {modal == "login" ? <Login closeModal={closeModal} /> : null}
      {modal == "signup" ? <SignUp closeModal={closeModal} /> : null}
      <header className={style.headerContainer}>
        <div className={style.logo}>AngelGuard</div>
        <nav className={style.menu}>
          <ul>
            <li>
              <a href="/community" className={style.menuItem}>
                community
              </a>
            </li>
            <li onClick={openSignUp} className={style.menuItem}>
              signup
            </li>
            <li onClick={openLogin} className={style.menuItem2}>
              login
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
