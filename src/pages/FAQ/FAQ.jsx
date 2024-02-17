import Header from "../../components/Header/Header";
import React, { useState, useEffect } from "react";
import "../FAQ/FAQ.css";
import { SliderImage } from "../../components/Slider/Slider";

const FAQ = () => {
  const [tab, TabChange] = useState(0);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "Q. 민쓰리 보호소는 무엇인가요?",
      answer:
        "A. 민쓰리는 원하는 고객의 지역에 맞춰 유기 동물의 정보를 제공하는 유기 동물보호 시스템입니다.",
    },
    {
      question:
        "Q. 보호 아이들 확인 후 방문을 원할시엔 어떻게 해야하나요?",
      answer:
        "A. 유선 전화 혹은 문의하기를 통해 말씀해주시면 민쓰리 담당자와 연결 됩니다.",
    },
    {
      question: "Q. 신청/등록은 어디서 해야 하나요?",
      answer: "A. 온라인으로 신청/등록 내용을 작성하거나, 유선으로도 신청 가능합니다. ",
    },
    {
      question: "Q. 민쓰리 보호소 위치가 어디인가요?",
      answer:
        "인천광역시 보호구 민쓰리동 123-1로 오시면 됩니다.",
    },
  ];

  return (
    <div>
      <Header />
      <div className="faq">
        <h1>FAQ</h1>
        <p>민쓰리에 대한 모든 궁금증을 풀어 드립니다.</p>
        <p>더 자세한 문의사항은 문의하기를 통해 신청 부탁드립니다.</p>
      </div>
      <div className="accordion_container">
      <div className="accordion-faq">
        {faqData.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className={`accordion-header ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleAccordionClick(index)}
            >
              {item.question}
            </div>
            {activeIndex === index && (
              <div className="accordion-content">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    <div className="slide_container"><SliderImage /> </div>
    </div>
  );
};
export default FAQ;
