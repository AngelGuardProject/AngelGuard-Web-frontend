import React, { useEffect, useState } from "react";
import style from "../styles/Header.module.css";
import Login from "./modal/Login-modal";
import SignUp from "./modal/SignUp-modal";
import axios from "axios";

function Header({ color, scrolled }) {
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

    const headerStyle = {
        backgroundColor: scrolled ? "rgba(255, 244, 214, 0.4)" : color,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    };

    const logout = () => {
        axios
            .post("http://louk342.iptime.org:3000/user/logout", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                console.log(res);
                localStorage.removeItem("user_login_id");
                localStorage.removeItem("token");
                window.location.href = "/";
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {}, []);

    return (
        <div style={headerStyle}>
            {modal === "login" && <Login closeModal={closeModal} openSignUp={openSignUp} />}
            {modal === "signup" && <SignUp closeModal={closeModal} />}
            <div className={scrolled ? style.headerWrapperScrolled : style.headerWrapper}>
                <header className={style.headerContainer}>
                    <a href="/" className={style.logo}>
                        AngelGuard
                    </a>
                    <nav className={style.menu}>
                        <ul>
                            <li>
                                <a href="/community" className={style.menuItem}>
                                    Community
                                </a>
                            </li>
                            {localStorage.getItem("token") == null ? (
                                <>
                                    <li onClick={openSignUp} className={style.menuItem}>
                                        SignUp
                                    </li>
                                    <li onClick={openLogin} className={style.menuItem2}>
                                        LogIn
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li
                                        onClick={() => {
                                            console.log(localStorage.getItem("token"));
                                            logout();
                                        }}
                                        className={style.menuItem}
                                    >
                                        LogOut
                                    </li>
                                    <li>
                                        <a href="/mypage">
                                            <img className={style.menuImg} src={require("../assets/profile.png")} />
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
