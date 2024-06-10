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
    const token = localStorage.getItem("token");
    const user_login_id = localStorage.getItem("user_login_id");

    useEffect(() => {
        axios
            .get(`http://louk342.iptime.org:3000/user/myprofile/${user_login_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                const userData = res.data.data;
                setUserInfo({
                    userId: userData.user_login_id,
                    userNickname: userData.user_nickname,
                });
            })
            .catch((error) => {
                console.error("Error fetching user info:", error);
            });

        axios
            .post(`http://louk342.iptime.org:3000/image/porfile/${user_login_id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                const userImage = res.data.result[0].user_image;
                setProfileImage(userImage || defaultProfileImage);
            })
            .catch((error) => {
                console.error("Error fetching profile image:", error);
            });
    }, [token, user_login_id]);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("image", file);

            axios
                .post(`http://louk342.iptime.org:3000/image/upload/${user_login_id}`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    alert("이미지가 업로드 되었습니다.");
                    const imageUrl = res.data.result.user_image;
                    setProfileImage(imageUrl);
                })
                .catch((error) => {
                    console.error("Error uploading image:", error);
                });
        }
    };

    const handleUpdateUserInfo = () => {
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
                alert("수정되었습니다.");
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
