import React, { useState } from "react";
import style from "../styles/MyPage.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/mypageComponent/Sidebar";
import MyInfo from "../components/mypageComponent/MyInfo";
import BabyInfo from "../components/mypageComponent/BabyInfo";
import MyPost from "../components/mypageComponent/MyPost";
import LikedPost from "../components/mypageComponent/LikedPost";

const MyPage = () => {
    const [activeMenuItem, setActiveMenuItem] = useState("내 정보 수정");

    const handleMenuItemClick = (item) => {
        setActiveMenuItem(item);
    };
    const handleLogOut = () => {
        alert("로그인 후 이용할 수 있는 컨텐츠입니다.");
        window.location.href = "/";
    };

    return (
        <div>
            <Header onLogout={handleLogOut} />
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
