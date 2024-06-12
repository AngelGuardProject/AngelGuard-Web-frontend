import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "../styles/MyPage.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import MyInfo from "../components/MyInfo";
import BabyInfo from "../components/BabyInfo";
import MyPost from "../components/MyPost";
import LikedPost from "../components/LikedPost";

const MyPage = () => {
    const [activeMenuItem, setActiveMenuItem] = useState("내 정보 수정");
    const navigate = useNavigate();
    const initialRender = useRef(true);

    useEffect(() => {
        const user_login_id = localStorage.getItem("user_login_id");
        if (!user_login_id && initialRender.current) {
            alert("로그인 후 이용할 수 있는 컨텐츠 입니다");
            navigate("/");
            initialRender.current = false;
        }
    }, [navigate]);

    const handleMenuItemClick = (item) => {
        setActiveMenuItem(item);
    };
    const handleLogout = () => {
        alert("로그인 후 이용할 수 있는 컨텐츠 입니다");
        navigate("/");
    };
    return (
        <div>
            <Header onLogout={handleLogout} />
            <div id={style.mypageContainer}>
                <div id={style.mypageTitle}>MY PAGE</div>
                <div id={style.container}>
                    <Sidebar onMenuItemClick={handleMenuItemClick} />
                    <div id={style.content}>
                        {activeMenuItem === "내 정보 수정" && <MyInfo />}
                        {activeMenuItem === "아기 정보 수정" && <BabyInfo />}
                        {activeMenuItem === "게시글 조회" && <MyPost />}
                        {activeMenuItem === "좋아요한 게시글" && <LikedPost />}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyPage;
