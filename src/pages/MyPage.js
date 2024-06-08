import React, { useState } from "react";
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
    const [contentHeight, setContentHeight] = useState(""); // State to store content height

    // Function to set content height based on active menu item
    const handleMenuItemClick = (item) => {
        setActiveMenuItem(item);
        // Set content height based on the active menu item
        if (item === "게시글 조회" || item === "좋아요한 게시글") {
            setContentHeight("650px");
        } else {
            setContentHeight(""); // Reset content height for other menu items
        }
    };

    return (
        <div>
            <Header />
            <div id={style.mypageContainer}>
                <div id={style.mypageTitle}>MY PAGE</div>
                <div id={style.container}>
                    <Sidebar onMenuItemClick={handleMenuItemClick} />
                    {/* Apply dynamic height to content */}
                    <div id={style.content} style={{ height: contentHeight }}>
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
