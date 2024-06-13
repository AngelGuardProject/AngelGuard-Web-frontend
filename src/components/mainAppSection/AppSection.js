import React, { useEffect, useState } from "react";
import style from "../../styles/main.module.css";
import homeImage from "../../assets/home.png";
const MainSection2 = () => {
    return (
        <section id={style.mainSection2}>
            <div className={style.titleContainer}>
                <div className={style.angelGuardTitle}>
                    엔젤가드만의 <span className={style.bold800}>특별한 기능</span>
                </div>

                <div className={style.angelDescription}>가족들의 행복한 하루를 위해 다양한 서비스를 제공합니다.</div>
            </div>
            <div className={style.photosContainer}>
                <div className={style.photoBox}>
                    <img src={require("../../assets/mobile.png")} alt="사진1" />
                    <div className={style.photoTitle}>실시간 모니터링</div>
                    <div className={style.photoDescription}>
                        실시간 우리 아기를 볼 수 있어
                        <br />
                        신생아 케어 및 상호 안전성 확보
                    </div>
                </div>
                <div className={style.photoBox}>
                    <img src={require("../../assets/small-mobile.png")} alt="사진2" />
                    <div className={style.photoTitle}>모빌 컨트롤 가능 </div>
                    <div className={style.photoDescription}>
                        엔젤가드로 먼 곳에서도 <br />
                        모빌을 작동시킬 수 있어 편리성 제공
                    </div>
                </div>
                <div className={style.photoBox}>
                    <img src={require("../../assets/baby.png")} alt="사진3" />
                    <div className={style.photoTitle}>아기 울음 분석</div>
                    <div className={style.photoDescription}>
                        아기가 울면 엔젤가드에서 <br />
                        알림을 주고 어떤 울음인지 정보제공
                    </div>
                </div>
                <div className={style.photoBox}>
                    <img src={require("../../assets/temp.png")} alt="사진4" />
                    <div className={style.photoTitle}>아기 주변 온도 감지</div>
                    <div className={style.photoDescription}>
                        아기 주변 온도를 감지하여 <br />앱 홈화면에 표시하여 건강상태 관리
                    </div>
                </div>
            </div>
        </section>
    );
};
const AppSection = () => {
    useEffect(() => {
        const divs = document.querySelectorAll(`.${style.AppDep} div`);

        let delay = 0;
        divs.forEach((div, index) => {
            setTimeout(() => {
                div.classList.add(style.slideIn);
            }, delay);
            delay += 100;
        });
    }, []);

    return (
        <section className={style.AppSection}>
            <div className={style.titleContainer}>
                <div className={style.angelGuardTitle}>
                    엔젤가드만의 <span className={style.bold800}>어플리케이션</span>
                </div>
                <div className={style.angelDescription}>장난감 모빌과 어플리케이션을 통하여 아이를 보호합니다.</div>
            </div>
            <div className={style.AppContainer}>
                <div>
                    <img className={style.AppImg} src={homeImage} alt="홈화면사진" />
                </div>
                <div className={style.AppDep}>
                    <div>
                        엔젤가드는 장난감 모빌을 통해,
                        <br />
                        아이의 건강 상태를 체크하고 아이를 보호합니다.
                    </div>
                    <div>
                        장난감 모빌의 온습도 센서를 통해
                        <br />
                        아이의 주변 온도를 나타낼 수 있습니다.
                    </div>
                    <div>
                        모빌의 카메라 덕분에,
                        <br />먼 곳에 떨어져 있어도 아이를 확인할 수 있습니다.
                    </div>
                </div>
            </div>
        </section>
    );
};

const MainSection3 = () => {
    return (
        <section id={style.mainSection3}>
            <div className={style.leftContainer}>
                <div className={style.main3Title}>엔젤가드를 이용하는 우리들의</div>
                <div className={style.main3Title2}>진짜 후기를 만나보세요.</div>
                <div className={style.main3dep}>
                    *실제 엔젤가드를 일생활에 함께하고 계시는 가족분들의
                    <br />
                    소중하고 감사한 실제 후기입니다.
                </div>
            </div>
            <div className={`${style.rightContainer} slider`}>
                <img src={require("../../assets/Review1.png")} />
                <img src={require("../../assets/Review2.png")} />
                <img src={require("../../assets/Review3.png")} />
                <img src={require("../../assets/Review2.png")} />
                <img src={require("../../assets/Review6.png")} />
                <img src={require("../../assets/Review4.png")} />
                <img src={require("../../assets/Review5.png")} />
                <img src={require("../../assets/Review7.png")} />
                <img src={require("../../assets/Review1.png")} />
                <img src={require("../../assets/Review2.png")} />
                <img src={require("../../assets/Review3.png")} />
                <img src={require("../../assets/Review2.png")} />
                <img src={require("../../assets/Review6.png")} />
                <img src={require("../../assets/Review4.png")} />
                <img src={require("../../assets/Review5.png")} />
                <img src={require("../../assets/Review7.png")} />
                <img src={require("../../assets/Review1.png")} />
                <img src={require("../../assets/Review2.png")} />
                <img src={require("../../assets/Review3.png")} />
                <img src={require("../../assets/Review2.png")} />
                <img src={require("../../assets/Review6.png")} />
                <img src={require("../../assets/Review4.png")} />
                <img src={require("../../assets/Review5.png")} />
                <img src={require("../../assets/Review7.png")} />
                <img src={require("../../assets/Review1.png")} />
                <img src={require("../../assets/Review2.png")} />
                <img src={require("../../assets/Review3.png")} />
                <img src={require("../../assets/Review2.png")} />
                <img src={require("../../assets/Review6.png")} />
                <img src={require("../../assets/Review4.png")} />
                <img src={require("../../assets/Review5.png")} />
                <img src={require("../../assets/Review7.png")} />
            </div>
        </section>
    );
};
const BodySection = () => {
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const growthChart = {
        "0-6": { height: [45, 75], weight: [2, 10] },
        "7-12": { height: [70, 85], weight: [8, 12] },
        "13-24": { height: [80, 95], weight: [9, 14] },
        "25-36": { height: [85, 100], weight: [10, 16] },
    };

    const handleSubmit = () => {
        if (!age || !height || !weight) {
            alert("개월수, 키, 몸무게를 모두 입력해주세요.");
            return;
        }

        if (submitted) {
            setAge("");
            setHeight("");
            setWeight("");
            setMessage("");
            setSubmitted(false);
        } else {
            const ageNumber = parseInt(age);

            const ageGroup = Object.keys(growthChart).find((range) => {
                const [min, max] = range.split("-").map(Number);
                return ageNumber >= min && ageNumber <= max;
            });

            if (!ageGroup) {
                setMessage("입력된 나이에 해당하는 성장 표준이 없습니다.");
                setSubmitted(true);
                return;
            }

            const { height: heightRange, weight: weightRange } = growthChart[ageGroup];

            let result;
            if (height < heightRange[0] || weight < weightRange[0]) {
                result = "저체중입니다";
            } else if (height <= heightRange[1] && weight <= weightRange[1]) {
                result = "정상체중입니다";
            } else {
                result = "과체중입니다";
            }

            setMessage(result);
            setSubmitted(true);
        }
    };

    return (
        <section id={style.bodySection}>
            <div className={style.bodyAllContnet}>
                <div className={style.bodyTitle}>
                    <div className={style.bold800}> TRY THIS !</div>
                    MY BABY BODY ANALYSIS
                </div>
                <div className={style.bodyContent}>
                    <div className={style.bodyInputContainer}>
                        <div className={style.bodyImg}>
                            <img src={require("../../assets/age.png")} alt="" />
                            <img src={require("../../assets/height.png")} alt="" />
                            <img src={require("../../assets/kg.png")} alt="" />
                        </div>
                        <div id={style.bodyInputContainer}>
                            <div className={style.bodyInputBox}>
                                <input className={style.bodyInput} type="text" value={age} onChange={(e) => setAge(e.target.value)} /> 개월
                            </div>
                            <div>
                                <input className={style.bodyInput} type="text" value={height} onChange={(e) => setHeight(e.target.value)} /> cm
                            </div>
                            <div>
                                <input className={style.bodyInput} type="text" value={weight} onChange={(e) => setWeight(e.target.value)} /> kg
                            </div>
                        </div>
                        <div className={style.bodyBtn}>
                            {message && <div className={style.resultMessage}> " {message} "</div>}
                            <button onClick={handleSubmit}>{submitted ? "다시하기" : "입력하기"}</button>
                        </div>
                    </div>

                    <div className={style.bodyDepContainer}>
                        <div className={style.depContainer}>
                            • 보건복지부와 대한소아과학회가 공동으로 약 10년마다 제정·발표하는 <br />
                            <a
                                href="https://knhanes.kdca.go.kr/knhanes/sub08/sub08_02.do"
                                className={style.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <strong>「2017 소아청소년 성장도표」</strong>
                            </a>{" "}
                            기준 아기성장 발달 계산기입니다.
                        </div>
                        <div className={style.depContainer2}>
                            • 자녀들의 성장 정도를 같은 또래의 다른 아이들과 비교해 볼 수 있고, <br />
                            저신장, 저체중, 비만 등 소아청소년의 성장상태를 확인하실 수 있습니다. <br />
                            <a
                                href="https://knhanes.kdca.go.kr/knhanes/sub08/sub08_02.do"
                                className={style.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <strong>질병관리청 2017 소아청소년성장도표</strong>
                            </a>
                            를 기준으로 계산됩니다.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { AppSection, MainSection2, MainSection3, BodySection };
