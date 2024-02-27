import "./SignUp.css";
import Header from "../../components/Header/Header";
const SignUp = () => {
  return (
    <div>
      <Header/>
    <div className="signUp">
        <div className="signUp_content"> 
        <img src={`${process.env.PUBLIC_URL}/images/signUp/signUp.jpeg`}/>
        <form>
          <h1>회원가입</h1>
          <h3>ID/Email<input type="signUp"></input></h3>
          <h3>PW<input type="signUp"></input></h3>
          <h3>이름<input type="signUp"></input></h3>
          <h3>연락처<input type="signUp"></input></h3>
          <a href="/login">로그인 하러가기</a><br></br>
          <a><button>회원가입</button></a>
          </form>
        </div>
    </div>
    </div>
  );
};

export default SignUp;
