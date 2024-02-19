import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
const Process = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="event">
        <div className="event_img">
          <img src="./images/event/process1.jpeg" width="1000px"/>
        </div>
      </div>
      <div>
        <ul className="point">
          <p>올바른 입양 문화를 지키겠습니다.</p>
        </ul>
      </div>
      <div>
      <img src="./images/event/process2.jpeg" width="1000px"/>
      </div>
    </div>
  );
};
export default Process;
