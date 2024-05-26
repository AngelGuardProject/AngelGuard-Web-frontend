import React, { useState } from "react";
import style from "../styles/MyInfo.module.css";
import defaultProfileImage from "../assets/mypage.png";
import cameraIcon from "../assets/camera-icon.png"; // 카메라 아이콘 이미지 경로

function MyInfo() {
    const [profileImage, setProfileImage] = useState(defaultProfileImage);
    const [showImageInput, setShowImageInput] = useState(false);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleImageInput = () => {
        setShowImageInput(!showImageInput);
    };

    return (
        <div>
            <div className={style.contentTitle}>내 정보 수정</div>
            <div className={style.myInfo}>
                <div className={style.profiles}>
                    <div className={style.profileImageContainer}>
                        <img src={profileImage} alt="Profile" className={style.profileImage} />
                        <img
                            src={cameraIcon}
                            alt="Change profile"
                            className={style.cameraIcon}
                            onClick={toggleImageInput}
                        />
                    </div>
                    {showImageInput && (
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className={style.fileInput}
                        />
                    )}
                    <div className={style.myInfoName}>혜림맘</div>
                </div>
                <div className={style.inputInfo}>
                    <div className={style.inputTitle}>닉네임</div>
                    <div>
                        <input className={style.input} type="text" placeholder="혜림맘" />
                    </div>
                </div>
                <div className={style.inputInfo}>
                    <div className={style.inputTitle}>아이디</div>
                    <div>
                        <input className={style.input} type="text" placeholder="yabvei" />
                    </div>
                </div>
                <div className={style.inputInfo}>
                    <div className={style.inputTitle}>비밀번호</div>
                    <div>
                        <input className={style.input} type="password" placeholder="*********" />
                    </div>
                </div>
                <div className={style.btnBox}>
                    <button className={`${style.btn} ${style.edit}`}>수정</button>
                    <button className={`${style.btn} ${style.cancel}`}>취소</button>
                </div>
            </div>
        </div>
    );
}

export default MyInfo;
