import React, { useState } from "react";
import style from "../../styles/Sidebar.module.css";

function Sidebar({ onMenuItemClick }) {
    const [clickedItem, setClickedItem] = useState("내 정보 수정");

    const handleClick = (item) => {
        setClickedItem(item);
        onMenuItemClick(item);
    };

    return (
        <div className={style.sidebarContainer}>
            <div
                className={`${style.sidebarItem} ${clickedItem === "내 정보 수정" ? style.clicked : ""}`}
                onClick={() => handleClick("내 정보 수정")}
            >
                내 정보 수정
            </div>
            <div
                className={`${style.sidebarItem} ${clickedItem === "아기 정보 수정" ? style.clicked : ""}`}
                onClick={() => handleClick("아기 정보 수정")}
            >
                아기 정보 수정
            </div>
            <div className={`${style.sidebarItem} ${clickedItem === "게시글 조회" ? style.clicked : ""}`} onClick={() => handleClick("게시글 조회")}>
                게시글 조회
            </div>
            <div
                className={`${style.sidebarItem} ${clickedItem === "좋아요한 게시글" ? style.clicked : ""}`}
                onClick={() => handleClick("좋아요한 게시글")}
            >
                좋아요한 게시글
            </div>
        </div>
    );
}

export default Sidebar;
