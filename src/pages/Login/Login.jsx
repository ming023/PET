import "./Login.css";
const Login = () => {
  return (
    <div className="login">
        <div className="login_content"> 
        <form>
          <h1>로그인</h1>
          <h3>아이디 또는 이메일<input type="login"></input></h3>
          <h3>비밀번호<input type="signUp"></input></h3>
          <a>아이디/비밀번호 찾기</a>
          <a href="signUp">회원가입</a><br></br>
          <a><button>로그인</button></a>
          </form>
        </div>
    </div>
  );
};

export default Login;
