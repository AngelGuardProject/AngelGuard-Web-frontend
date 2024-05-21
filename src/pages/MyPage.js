import React, { useState } from "react";

import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import MyInfo from "../components/MyInfo";
import BabyInfo from "../components/BabyInfo";
import MyPost from "../components/MyPost";
import LikedPost from "../components/LikedPost";

const MyPage = () => {
    const [activeMenuItem, setActiveMenuItem] = useState("내 정보 수정");

    const handleMenuItemClick = (item) => {
        setActiveMenuItem(item);
    };

    return (
        <div>
            <Header2 />
            <div id="mypage-container">
                <div id="mypage-title">MY PAGE</div>
                <div id="container">
                    <Sidebar onMenuItemClick={handleMenuItemClick} />
                    <div id="content">
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
