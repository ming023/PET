import "./Main.css"
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
function Main() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="main_img">
         <a href="/point"><img src="./images/event/point.jpeg"/></a>
         <a href="/system"><img src="./images/event/point2.jpeg"/></a>
        </div>
    </div>
  )
}
export default Main;