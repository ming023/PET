import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledPointDetail = styled.div`
  .pointDetail {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .point_circle {
    width: 80%;
  }
  #Detail_box {
    display: flex;
    justify-content: space-around;

    align-items: center;
    flex-flow: row;
    flex-wrap: wrap;
    margin: 30px;
  }
  #Detail_li {
    width: 200px;
    margin: 30px;
  }
  #Detail_li > a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .point_circle img {
    border:3px solid rgba(255, 192, 0);
    width: 200px;
    height: 200px;
  }
  .modal {
    display: ${(props) => (props.show ? "block" : "none")};
    position: fixed;
    width: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    background-color: white;
    padding: 20px;
    z-index: 1;
  }
  .modal_content {
    overflow:hidden;
  }
  .modal_content p {
    overflow:hidden;
    display:flex;
    justify-content:center;
    alien-items:center;

  }
  .modal_content p,h1{
    margin:26px;
  }
  .modal_content h4{
    margin-right:10px;
    color:rgb(0, 14, 82);
    font-weight:bold;
  }
  .modal img {
    display: flex;
    justify-content: space-between;
    alien-items: center;
    margin:30px;
    float:left;
  }
  #modal_btn {
    margin-top: 15px;
    float: right;
    background-color: rgba(255, 192, 0);
    border: none;
    color: black;
    font-weight: bold;
    width: 50px;
  }
  .modal_bg {
    background-color: rgba(255, 192, 0);
    color: white;
    font-weight: bold;
    padding: 10px;
  }
  .modal_bg > h5 {
    font-size: 18px;
    font-weight:bold;
  }
  .modal-image {
    cursor: pointer;
  }
`;

const PointDetail = ({ location }) => {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPet(null);
  };

  const handleShowModal = (pet) => {
    setShowModal(true);
    setSelectedPet(pet);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/ming023/project/main/Pet.json"
        );

        // Point.js에서 전달된 location을 기준으로 데이터를 필터링
        const filteredData = response.data.pet.filter(
          (pet) => pet.location === location
        );
        setData(filteredData);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, [location]);

  return (
    <StyledPointDetail show={showModal}>
      <div className="pointDetail">
        <div className="point_circle">
          {Array.isArray(data) && data.length > 0 ? (
            <ul id="Detail_box">
              {data.map((pet) => (
                <li id="Detail_li" key={pet.id}>
                  <img
                    src={`./images/pet/pet${pet.id}.jpeg`}
                    width={300}
                    style={{ borderRadius: "50%" }}
                    alt="Pet"
                    className="modal-image"
                    onClick={() => handleShowModal(pet)}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading..</p>
          )}
          <div className="modal">
            {selectedPet && (
              <>
                <div className="modal_content">
                <img
                  src={`./images/pet/pet${selectedPet.id}.jpeg`}
                  width={300}
                  alt="Pet"
                />

                  <h1>{selectedPet.name}</h1>
                  <p><h4>묘종/견종</h4> {selectedPet.breed}</p>
                  <p><h4>성별</h4> {selectedPet.gender}</p>
                  <p><h4>나이</h4> {selectedPet.age}</p>
                  <p><h4>지점</h4> {selectedPet.location}</p>
                </div>
                <div className="modal_bg">
                  <h5>
                    오늘도 많은 아이들이<br></br> 각자의 안타까운 사연을 가지고
                    <br></br> 민쓰리에 찾아오게 되었습니다.<br></br>행복힌
                    유기동물 보호소 민쓰리입니다.
                  </h5>
                  <button
                    id="modal_btn"
                    onClick={handleCloseModal}
                    style={{ cursor: "pointer" }}
                  >
                    닫기
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </StyledPointDetail>
  );
};

export default PointDetail;
