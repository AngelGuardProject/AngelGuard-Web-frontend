import React, { useState } from "react";
import BabyPlus from "./BabyPlus";    
import BabyEdit from "./BabyEdit"; 
import style from "../styles/BabyInfo.module.css";

function BabyInfo() {
    const [showBabyPlus, setShowBabyPlus] = useState(false);
    const [selectedBaby, setSelectedBaby] = useState(null);

    const handleBabyClick = (baby) => {
        setSelectedBaby(baby);
        setShowBabyPlus(false);
    };

    const handleAddBabyClick = () => {
        setSelectedBaby(null);
        setShowBabyPlus(true);
    };

    return (
        <div>
            {showBabyPlus && <BabyPlus />}
            {selectedBaby && <BabyEdit baby={selectedBaby} />}
            {!showBabyPlus && !selectedBaby && (
                <div>
                    <div className={style.contentTitle}>아기 정보</div>
                    <div className={style.plusBaby} onClick={handleAddBabyClick}>
                        + 아기 등록하기
                    </div>
                    <div className={style.babyList}>
                        <div className={style.babyInfo} onClick={() => handleBabyClick("오주희")}>
                            <div className={style.babyName}>오주희</div>
                            <div className={style.babyBirth}>여아 / 2003.11.30</div>
                        </div>
                        <div className={style.babyInfo} onClick={() => handleBabyClick("김선우")}>
                            <div className={style.babyName}>김선우</div>
                            <div className={style.babyBirth}>남아 / 2004.12.01</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BabyInfo;
