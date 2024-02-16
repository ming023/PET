import Header from "../../components/Header/Header";
import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "./Point.css";
import PointDetail from "./PointDetail";

const Point = () => {
  const [tab, TabChange] = useState(0);
  const [fade, setFade] = useState("");

  const locations = [
    "강남점",
    "공덕점",
    "노원점",
    "분당점",
    "안산점",
    "수원점",
  ];

  const handleTabChange = (selectedTab) => {
    setFade("end");
    TabChange(selectedTab);
    setTimeout(() => {
      setFade("");
    }, 300);
  };

  return (
    <div>
      <Header />
      <div className="point">
        <div className="point_img">
          <img src="./images/event/point1.jpeg" />
          <img src="./images/event/point2.jpeg" />
        </div>
      </div>
      <div>
        <ul className="point">
          <h1>입양하기</h1>
          <p>민쓰리와 함께 하고 있는 아이들을 소개합니다.</p>
        </ul>
      </div>
      <Nav
        variant="tabs"
        defaultActiveKey={`link${tab}`}
        className="content_navbar"
      >
        {locations.map((location, index) => (
          <Nav.Item key={index}>
            <Nav.Link
              onClick={() => handleTabChange(index)}
              eventKey={`link${index}`}
            >
              {location}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <TapContent tab={tab} location={locations[tab]} fade={fade} />
    </div>
  );
};

function TapContent({ tab, location, fade }) {
  return (
    <div className={`start ${fade}`}>
      <div>
        {tab === 0 && <PointDetail location={location} />}
        {tab === 1 && <PointDetail location={location} />}
        {tab === 2 && <PointDetail location={location} />}
        {tab === 3 && <PointDetail location={location} />}
        {tab === 4 && <PointDetail location={location} />}
        {tab === 5 && <PointDetail location={location} />}
        {tab === 6 && <PointDetail location={location} />}
      </div>
    </div>
  );
}

export default Point;
