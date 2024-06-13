import React, { useState, useEffect } from "react";
import BabyPlus from "./BabyPlus";
import BabyEdit from "./BabyEdit";
import style from "../../styles/BabyInfo.module.css";
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
                setBabies(res.data.babies);
            })
            .catch((error) => {
                console.error("Error fetching babies:", error);
            });
    };

    const calculateAge = (birthdate) => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        const age = today.getFullYear() - birthDate.getFullYear();
        return age;
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

    const handleUpdate = (updatedData) => {
        const updatedBabies = babies.filter((b) => b.baby_id !== updatedData.baby_id); // 삭제된 아기 정보를 제외하고 필터링
        setBabies(updatedBabies);
        setSelectedBaby(null); // 선택된 아기 정보 초기화
    };

    return (
        <div>
            {showBabyPlus && <BabyPlus onCancel={handleCancel} onAdd={handleAddBaby} />}
            {selectedBaby && <BabyEdit baby={selectedBaby} onCancel={() => setSelectedBaby(null)} onUpdate={handleUpdate} />}

            {!showBabyPlus && !selectedBaby && (
                <div className={style.BabyContainer}>
                    <div className={style.contentTitle}>아기 정보</div>
                    <div className={style.plusBaby} onClick={handleAddBabyClick}>
                        + 아기 등록하기
                    </div>
                    <div className={style.babyList}>
                        {babies.map((baby) => (
                            <div key={baby.baby_id} className={style.babyInfo} onClick={() => handleBabyClick(baby)}>
                                <div className={style.babyImgBox}>
                                    <img
                                        className={`${style.babyImg} ${baby.baby_sex !== "female" ? style.boy : ""}`}
                                        src={require(`../../assets/${baby.baby_sex === "female" ? "girl" : "boy"}.png`)}
                                        alt="Baby"
                                    />
                                </div>
                                <div className={style.babyName}>{baby.baby_name}</div>
                                <div className={style.babyBirth}>
                                    {baby.baby_sex === "female" ? "여아" : "남아"} / {calculateAge(baby.baby_birth)}세
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
