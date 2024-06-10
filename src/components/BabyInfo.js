import React, { useState, useEffect } from "react";
import BabyPlus from "./BabyPlus";
import BabyEdit from "./BabyEdit";
import style from "../styles/BabyInfo.module.css";
import axios from "axios";

function BabyInfo() {
    const [showBabyPlus, setShowBabyPlus] = useState(false);
    const [selectedBaby, setSelectedBaby] = useState(null);
    const [babies, setBabies] = useState([]);
    const user_login_id = localStorage.getItem("user_login_id");

    useEffect(() => {
        fetchBabies();
    }, []);

    const fetchBabies = () => {
        axios
            .get(`http://louk342.iptime.org:3000/mypage/baby/${user_login_id}`)
            .then((res) => {
                console.log(res.data.babies);
                const formattedBabies = res.data.babies.map((baby) => {
                    return {
                        ...baby,
                        baby_birth: new Date(baby.baby_birth).toLocaleDateString("ko-KR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }),
                    };
                });
                setBabies(formattedBabies);
            })
            .catch((error) => {
                console.error("Error fetching babies:", error);
            });
    };

    const handleBabyClick = (baby) => {
        setSelectedBaby(baby);
        setShowBabyPlus(false);
    };

    const handleAddBabyClick = () => {
        setSelectedBaby(null);
        setShowBabyPlus(true);
    };

    const handleCancel = () => {
        setShowBabyPlus(false);
    };

    const handleAddBaby = () => {
        fetchBabies();
        setShowBabyPlus(false);
    };

    return (
        <div>
            {showBabyPlus && <BabyPlus onCancel={handleCancel} onAdd={handleAddBaby} />}
            {selectedBaby && (
                <BabyEdit
                    baby={selectedBaby}
                    onCancel={() => setSelectedBaby(null)}
                    onUpdate={(updatedBaby) => {
                        const updatedBabies = babies.map((baby) => (baby.baby_id === updatedBaby.baby_id ? updatedBaby : baby));
                        setBabies(updatedBabies);
                        setSelectedBaby(updatedBaby);
                        setShowBabyPlus(false); // BabyEdit에서 수정 완료 후 BabyInfo로 돌아가기
                    }}
                    onDelete={() => {
                        fetchBabies();
                        setSelectedBaby(null);
                        setShowBabyPlus(false); // BabyEdit에서 삭제 완료 후 BabyInfo로 돌아가기
                    }}
                />
            )}
            {!showBabyPlus && !selectedBaby && (
                <div>
                    <div className={style.contentTitle}>아기 정보</div>
                    <div className={style.plusBaby} onClick={handleAddBabyClick}>
                        + 아기 등록하기
                    </div>
                    <div className={style.babyList}>
                        {babies.map((baby) => (
                            <div key={baby.baby_id} className={style.babyInfo} onClick={() => handleBabyClick(baby)}>
                                <div className={style.babyName}>{baby.baby_name}</div>
                                <div className={style.babyBirth}>
                                    {baby.baby_sex === "female" ? "여아" : "남아"} / {baby.baby_birth}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default BabyInfo;
