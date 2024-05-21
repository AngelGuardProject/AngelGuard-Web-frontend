import React, { useState } from "react";
import BabyPlus from "./BabyPlus"; // BabyPlus 컴포넌트 import
import BabyEdit from "./BabyEdit"; // BabyEdit 컴포넌트 import
import "../styles/BabyInfo.css";

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
                    <div className="content-title">아기 정보</div>
                    <div className="plus-baby" onClick={handleAddBabyClick}>
                        + 아기 등록하기
                    </div>
                    <div id="baby-list">
                        <div className="baby-info" onClick={() => handleBabyClick("오주희")}>
                            <div className="baby-name">오주희</div>
                            <div className="baby-birth">여아 / 2003.11.30</div>
                        </div>
                        <div className="baby-info" onClick={() => handleBabyClick("김선우")}>
                            <div className="baby-name">김선우</div>
                            <div className="baby-birth">남아 / 2004.12.01</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BabyInfo;
