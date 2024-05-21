import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-menu">
        <div className="menu-item">회사 소개</div>
        <div className="menu-separator">|</div>
        <div className="menu-item">이용 약관</div>
        <div className="menu-separator">|</div>
        <div className="menu-item">개인정보처리방침</div>
        <div className="menu-separator">|</div>
        <div className="menu-item">제휴 문의</div>
        <div className="menu-separator">|</div>
        <div className="menu-item">구매문의</div>
      </div>
      <div className="footer-content">
        <div className="company-info">
          <div className="company-name">(주)AngelGuard</div>
          <div className="details">
            <div className="detail">
              대표이사 : 응애 애기 2조
              <span className="separator">|</span>
              서울특별시 구로구 고척동
              <span className="separator">|</span>
              호스팅서비스 사업자 : 엔젤가드 시스템
            </div>
            <div className="detail">
              통신판매업신고 : 2024-서울어쩌구-8888
              <span className="separator">|</span>
              고객센터 1588-1588
            </div>
          </div>
          <div className="sns-icons">
            <img
              className="icon"
              src={require("../assets/instagram.png")}
              alt="Instagram"
            />
            <img
              className="icon"
              src={require("../assets/facebook.png")}
              alt="Facebook"
            />
            <img
              className="icon"
              src={require("../assets/twitter.png")}
              alt="Twitter"
            />
            <img
              className="icon"
              src={require("../assets/youtube.png")}
              alt="YouTube"
            />
          </div>
        </div>
        <div className="customer-service">
          <div className="customer-title">
            <div className="title">고객센터 1588-1588</div>
            <button className="inquiry-button">1:1문의하기</button>
          </div>
          <div className="hours">운영시간 : 평일 09:00 ~ 18:00</div>
          <div className="check">
            고객센터 바로가기
            <input type="checkbox" className="checkbox" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
