import React, {useEffect, useState} from "react";
import style from "../styles/Header.module.css";
import Login from "./modal/Login-modal";
import SignUp from "./modal/SignUp-modal";

function Header({color, scrolled}) {
  const [modal, setModal] = useState();
  const [token, setToken] = useState();

  const openLogin = () => {
    setModal("login");
  };

  const openSignUp = () => {
    setModal("signup");
  };

  const closeModal = () => {
    setModal(null);
  };

  const headerStyle = {
    backgroundColor: scrolled ? "rgba(255, 244, 214, 0.4)" : color,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  };

  useEffect(() => {}, [token]);

  return (
    <div style={headerStyle}>
      {modal === "login" && <Login closeModal={closeModal} />}
      {modal === "signup" && <SignUp closeModal={closeModal} />}
      <div
        className={scrolled ? style.headerWrapperScrolled : style.headerWrapper}
      >
        <header className={style.headerContainer}>
          <div className={style.logo}>AngelGuard</div>
          <nav className={style.menu}>
            <ul>
              <li>
                <a href="/community" className={style.menuItem}>
                  community
                </a>
              </li>
              {localStorage.getItem("token") == null ? (
                <>
                  <li onClick={openSignUp} className={style.menuItem}>
                    signup
                  </li>
                  <li onClick={openLogin} className={style.menuItem2}>
                    login
                  </li>
                </>
              ) : (
                <>
                  <li
                    onClick={() => {
                      localStorage.removeItem("token");
                      setToken(null);
                    }}
                    className={style.menuItem}
                  >
                    logout
                  </li>
                  <li>
                    <a href="/mypage">
                      <img
                        className={style.menuImg}
                        src={require("../assets/profile.png")}
                      />
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
