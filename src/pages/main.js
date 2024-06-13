import React, { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import style from "../styles/main.module.css";
import Header from "../components/Header";
import { MainSection2, AppSection, MainSection3, BodySection } from "../components/mainAppSection/AppSection.js";

function Main() {
    return (
        <div>
            <Header color="#fff4d6" scrolled={true} />
            <section id={style.mainSection}>
                <div className={style.textContent}>
                    <img src={require("../assets/main.png")} className={style.mainImg} />
                    <div className={style.textContainer}>
                        <div className={style.mainText}>We are babycare</div>
                        <div className={style.mainText}>
                            Professionals <span className={style.smallText}>for family</span>
                        </div>
                        <div className={style.mainSub}>우리는 육아의 모든 단계에서 도움을 드리고, 편리함을 제공합니다.</div>
                    </div>
                </div>
                <div id={style.connectText}>
                    <img src={require("../assets/next.png")} alt="next" />
                </div>
            </section>
            <MainSection2 />
            <AppSection />
            <MainSection3 />
            <BodySection />
            <Footer />
        </div>
    );
}

export default Main;
