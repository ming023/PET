import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import styled from "styled-components";

const Community = () => {
  const StyledCommunity = styled.div`
    .community_Detail {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .community_circle {
      width: 80%;
    }
    #community_box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-flow: row;
      flex-wrap: wrap;
      margin: 30px;
    }
    #community_li {
      width: 200px;
      margin: 30px;
    }
  `;

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/ming023/PET/main/news.json"
        );
        setNewsData(response.data.news);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="Point">
        <div className="point_img">
          <img src="./img/content2.gif"/>
        </div>
      </div>
      <div>
        <ul className="point">
          <h1>입양 후 소식</h1>
          <p>민쓰리 보호소에서 보호 중인 아이들이 새로운 가족을 만나게 되었습니다.</p>
        </ul>
        <h3>행복한 나날을 보내는 아이들의 이야기</h3>
      </div>
      <div>
        <div className="community_Detail">
          <div className="community_circle">
            {Array.isArray(newsData) && newsData.length > 0 ? (
              <ul id="community_box">
                {newsData.map((news) => (
                  <li id="community_li" key={news.id}>
                    <img
                      src={`./images/news/news${news.id}.jpeg`}
                      width={300}
                      style={{ borderRadius: "50%" }}
                      alt="news"
                    />
                    <p>{news.name}</p>
                    <p>{news.location}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading..</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
