import React, { useEffect, useState } from "react";
import style from "../styles/MyInfo.module.css";
import defaultProfileImage from "../assets/mypage.png";
import cameraIcon from "../assets/camera-icon.png";
import axios from "axios";

function MyInfo() {
    const [userInfo, setUserInfo] = useState({
        userId: "",
        userNickname: "",
    });
    const [password, setPassword] = useState("");
    const [newNickname, setNewNickname] = useState("");
    const [profileImage, setProfileImage] = useState(defaultProfileImage);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const user_login_id = localStorage.getItem("user_login_id");

        axios
            .get(`http://louk342.iptime.org:3000/user/myprofile/${user_login_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log(res);
                const userData = res.data.data;
                console.log(res.data.data);
                setUserInfo({
                    userId: userData.user_login_id,
                    userNickname: userData.user_nickname,
                });
            })
            .catch((error) => {
                console.error("Error :", error);
            });
    }, []);

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

    const handleUpdateUserInfo = () => {
        const token = localStorage.getItem("token");
        const user_login_id = localStorage.getItem("user_login_id");

        const updatedUserInfo = {
            pw: password,
            username: newNickname || userInfo.userNickname,
        };

        axios
            .post(`http://louk342.iptime.org:3000/user/update/${user_login_id}`, updatedUserInfo, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log("User info updated successfully:", res);
                setUserInfo((prevUserInfo) => ({
                    ...prevUserInfo,
                    userNickname: newNickname || prevUserInfo.userNickname,
                }));
            })
            .catch((error) => {
                console.error("Error updating user info:", error);
            });
    };

    return (
        <div>
            <div className={style.contentTitle}>내 정보 수정</div>
            <div className={style.myInfo}>
                <div className={style.profiles}>
                    <div className={style.profileImageContainer}>
                        <img src={profileImage} alt="Profile" className={style.profileImage} />
                        <label htmlFor="fileInput">
                            <img src={cameraIcon} alt="Change profile" className={style.cameraIcon} />
                        </label>
                        <input id="fileInput" type="file" accept="image/*" onChange={handleImageUpload} className={style.fileInput} />
                    </div>
                </div>
                <div className={style.inputInfo}>
                    <div className={style.inputTitle}>닉네임</div>
                    <div>
                        <input
                            className={style.input}
                            type="text"
                            value={newNickname || userInfo.userNickname}
                            onChange={(e) => setNewNickname(e.target.value)}
                        />
                    </div>
                </div>
                <div className={style.inputInfo}>
                    <div className={style.inputTitle}>아이디</div>
                    <div>
                        <input className={style.input} type="text" value={userInfo.userId} readOnly />
                    </div>
                </div>
                <div className={style.inputInfo}>
                    <div className={style.inputTitle}>비밀번호</div>
                    <div>
                        <input className={style.input} type="password" placeholder="*********" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className={style.btnBox}>
                    <button className={`${style.btn} ${style.edit}`} onClick={handleUpdateUserInfo}>
                        수정
                    </button>
                    <button className={`${style.btn} ${style.cancel}`}>취소</button>
                </div>
            </div>
        </div>
    );
}

export default MyInfo;
