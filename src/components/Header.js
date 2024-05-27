import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import style from "../styles/Header.module.css"; // Correct import path
import Login from "./modal/Login-modal";
import SignUp from "./modal/SignUp-modal";

function Header({color, scrolled}) {
  const [modal, setModal] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const openLogin = () => {
    setModal("login");
  };

  const openSignUp = () => {
    setModal("signup");
  };

  const closeModal = () => {
    setModal(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (scrolled && location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrolled && location.pathname === "/") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrolled, location]);

  const headerStyle = {
    backgroundColor: isScrolled ? "rgba(255, 244, 214, 0.4)" : color,
  };

  return (
    <div>
      {modal === "login" && <Login closeModal={closeModal} />}
      {modal === "signup" && <SignUp closeModal={closeModal} />}
      <header className={style.headerContainer} style={headerStyle}>
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
