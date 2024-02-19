import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import './Community.css';
import Navbar from "../../components/Navbar/Navbar";
const Community = () => {

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/ming023/PET/main/src/news.json"
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
      <Navbar />
      <div className="event">
        <div className="event_img">
          <img src="./images/event/news.jpeg"/>
        </div>
      </div>
      <div className="community">
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
                      width={200}
                      alt="news"
                    />
                    <h3>{news.name}</h3>
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
