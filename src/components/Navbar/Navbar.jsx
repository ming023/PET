import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [askModalOpen, setAskModalOpen] = useState(false);
  const [adoptModalOpen, setAdoptModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const handleApplicationClick = () => {
    setApplicationModalOpen(!applicationModalOpen);
    setAskModalOpen(false);
    setAdoptModalOpen(false);
    setRegisterModalOpen(false);
  };

  const closeApplicationModal = () => {
    setApplicationModalOpen(false);
    setAskModalOpen(false);
    setAdoptModalOpen(false);
    setRegisterModalOpen(false);
  };

  const handleAskClick = () => {
    setAskModalOpen(!askModalOpen);
    setApplicationModalOpen(false);
    setAdoptModalOpen(false);
    setRegisterModalOpen(false);
  };

  const handleAdoptModalClick = () => {
    setAdoptModalOpen(!adoptModalOpen);
    setApplicationModalOpen(false);
    setAskModalOpen(false);
    setRegisterModalOpen(false);
  };

  const handleRegisterModalClick = () => {
    setRegisterModalOpen(!registerModalOpen);
    setApplicationModalOpen(false);
    setAskModalOpen(false);
    setAdoptModalOpen(false);
  };

  return (
    <div className="nav_container">
      <section>
        <img
          onClick={handleApplicationClick}
          src="/images/navbar/application.jpeg"
          alt="Application"
        />
        {applicationModalOpen && (
          <div className="application">
            <p onClick={closeApplicationModal}>x</p>
            <div className="application_content">
              <button onClick={handleAdoptModalClick}>입양 신청하기</button>
              <h5>사랑스러운 아이들과 함께 하시겠습니까?</h5>
              <button onClick={handleRegisterModalClick}>입양 등록하기</button>
              <h5>길을 잃은 아이들에게 안내를 해주시겠습니까?</h5>
            </div>
          </div>
        )}
      </section>
      <section>
        <img onClick={handleAskClick} src="/images/navbar/ask.jpeg" alt="Ask" />
        {askModalOpen && (
          <div className="ask">
            <p onClick={closeApplicationModal}>x</p>
            <div className="ask_content">
              <label>
                제목
                <input type="text" placeholder="제목을 입력해주세요." />
              </label>
              <br />
              <textarea
                maxLength="300"
                placeholder="민쓰리에게 문의하고 싶은 내용을 적어주세요."
              ></textarea>
              <button type="submit">보내기</button>
            </div>
          </div>
        )}
      </section>
      <section>
        <a href="/faq">
          <img src="/images/navbar/FAQ.jpeg" alt="FAQ" />
        </a>
      </section>
      {adoptModalOpen && (
        <div className="adopt">
          <p onClick={closeApplicationModal}>x</p>
          <div className="adopt_content">
            <input type="text" placeholder="거주지역" />
            <input type="text" placeholder="전화번호" />
            <input type="text" placeholder="원하는 상담 시간" />
            <input type="text" placeholder="입양 신청 지점" />
            <input type="text" placeholder="신청 보호 아이의 이름" />
            <h5>신청시 필요 절차 진행에 관한 동의/비동의</h5>
            <label className="adopt_checkbox">
              <input type="checkbox" />
              <a>동의</a>
              <input type="checkbox" />
              <a>비동의</a>
            </label>
            <button type="submit">신청하기</button>
          </div>
        </div>
      )}
      {registerModalOpen && (
        <div className="register">
          <p onClick={closeApplicationModal}>x</p>
          <div className="register_content">
            <input type="text" placeholder="전화번호" />
            <input type="text" placeholder="보호/발견 지역" />
            <input type="text" placeholder="등록 신청 지점" />
            <textarea maxLength="300" placeholder="등록 아이의 정보 및 전달 내용" />
            <h5>등록시 필요 절차 진행에 관한 동의/비동의</h5>
            <label className="register_checkbox">
              <input type="checkbox" />
              <a>동의</a>
              <input type="checkbox" />
              <a>비동의</a>
            </label>
            <button type="submit">신청하기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
