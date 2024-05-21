import React, { useState } from "react";
import "../styles/Sidebar.css";

function Sidebar({ onMenuItemClick }) {
    const [clickedItem, setClickedItem] = useState("내 정보 수정");

    const handleClick = (item) => {
        setClickedItem(item);
        onMenuItemClick(item);
    };

    return (
        <div id="sidebars">
            <div className={`sidebar ${clickedItem === "내 정보 수정" ? "clicked" : ""}`} onClick={() => handleClick("내 정보 수정")}>
                내 정보 수정
            </div>
            <div className={`sidebar ${clickedItem === "아기 정보 수정" ? "clicked" : ""}`} onClick={() => handleClick("아기 정보 수정")}>
                아기 정보 수정
            </div>
            <div className={`sidebar ${clickedItem === "게시글 조회" ? "clicked" : ""}`} onClick={() => handleClick("게시글 조회")}>
                게시글 조회
            </div>
            <div className={`sidebar ${clickedItem === "좋아요한 게시글" ? "clicked" : ""}`} onClick={() => handleClick("좋아요한 게시글")}>
                좋아요한 게시글
            </div>
        </div>
    );
}

export default Sidebar;
