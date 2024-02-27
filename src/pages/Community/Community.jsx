import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import "./Community.css";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";

const StyledCommunityDetail = styled.div`
  .modal {
    display: ${(props) => (props.show ? "block" : "none")};
    position: fixed;
    width: 500px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    background-color: white;
    padding: 20px;
    z-index: 1;
  }
  .modal_content {
    overflow: hidden;
  }
  .modal_content h3 {
     margin-top:20px;
  }
  .modal_content p {
    overflow: hidden;
    display: flex;
    justify-content: center;
    alien-items: center;
  }
  .modal_content p,
  .modal_content h2 {
    margin: 26px;
  }
  .modal_content h4 {
    margin-right: 10px;
    color: rgb(0, 14, 82);
    font-weight: bold;
  }
  .modal img {
    display: flex;
    justify-content: space-between;
    alien-items: center;
    width: 300px;
    float: left;
  }
  #modal_btn {
    margin-top: 20px;
    float: right;
    width: 80px;
    height: 20px;
    float: right;
    background-color: rgba(255, 192, 0);
    border: none;
    color: black;
    font-weight: bold;
  }
  .modal_bg {
    background-color: gray;
    color: white;
    font-weight: bold;
    padding: 10px;
  }
  .modal_bg > h5 {
    font-size: 18px;
    font-weight: bold;
  }
  .modal-image {
    cursor: pointer;
  }
`;
const Community = () => {
  const [newsData, setNewsData] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/ming023/PET/main/src/news.json"
        );
        setNewsData(response.data.news);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setShowModal(false);
  };

  return (
    <div>
      <Header />
      <Navbar />

      <div className="event">
        <div className="event_img">
          <img src="./images/event/news.jpeg" alt="이벤트" />
        </div>
      </div>

      <div className="community">
        <h3>행복한 나날을 보내는 아이들의 이야기</h3>
      </div>

      <StyledCommunityDetail show={showModal}>
        <div className="community_Detail">
          <div className="community_circle">
            {Array.isArray(newsData) && newsData.length > 0 ? (
              <ul id="community_box">
                {newsData.map((news) => (
                  <li id="community_li" key={news.id}>
                    {/* Open the modal when clicking on the news image */}
                    <img
                      src={`./images/news/news${news.id}.jpeg`}
                      width={200}
                      alt="뉴스"
                      onClick={() => handleNewsClick(news)}
                    />
                    <h2>{news.name}</h2>
                    <p>{news.location}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading..</p>
            )}
            <div className="modal">
              {selectedNews && (
                <>
                  <div className="modal_content">
                    <div className="modal_bg">
                      <h5>입양 온 {selectedNews.name} 잘지내고 있어요~</h5>
                    </div>
                    <img
                      src={`./images/news/news${selectedNews.id}.jpeg`}
                      width={200}
                      alt="뉴스"
                    />
                    <h3>{selectedNews.name}</h3>
                    <p>위치: {selectedNews.location}</p>
                  </div>
                  <div className="modal_bg">
                      <h5></h5>
                    </div>
                  <button
                    id="modal_btn"
                    onClick={closeModal}
                    style={{ cursor: "pointer" }}
                  >
                    닫기
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </StyledCommunityDetail>
    </div>
  );
};

export default Community;
