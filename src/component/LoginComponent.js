import "../css/login.css";
import { useState } from "react";

const Login = () => {
  const [user_details, set_user_details] = useState({
    user_id: "",
    password: "",
  });
  const [users] = useState([
    { user_id: "john" },
    { user_id: "david" },
    { user_id: "john1" },
    { user_id: "david1" },
  ]);

  const [userMsg, set_userMsg] = useState("");
  const [passwordMsg, set_passwordMsg] = useState("");

  function hide_userMsg(e) {
    if (e.target.value == "") {
      set_userMsg("User Id required");
    } else {
      set_userMsg("");
    }
    console.log(e.target.value);
  }

  function hide_passwordMsg() {
    set_passwordMsg("");
  }

  function handle_user_change(e) {
    set_user_details({
      user_id: e.target.value,
      password: user_details.password,
    });
  }

  function handle_password_change(e) {
    set_user_details({
      user_id: user_details.user_id,
      password: e.target.value,
    });
  }

  function verifyUserid(e) {
    for (var user of users) {
      if (user.user_id == e.target.value) {
        set_userMsg("User ID Taken - Try another");
        console.log("User ID Taken - Try another");
        break;
      } else {
        set_userMsg("User ID Available");
        console.log("User Availble");
      }
    }
  }

  function verifyPassword(e) {
    if (e.target.value.match(/(?=.*[A-Z])\w{4,10}/)) {
      set_passwordMsg("Strong Password");
    } else {
      if (e.target.value < 4) {
        set_passwordMsg("Poor Password");
      } else {
        set_passwordMsg("Weak Password");
      }
    }
  }

  function sign_in() {
    alert(JSON.stringify(user_details));
    console.log(user_details);
  }

  const dotElement = []
  for(let i= 500 ; i < 542 ;i++){
    dotElement.push(<div className="dot"  key={i}></div>)
  }
  return (
    <>
      <div className="ellipse"></div>
      {" "}
      <div className="login_page">
      <div className="right">
      {dotElement}
      </div>

        <div className="main_content">
          <h1>Logo</h1>
          <div>Enter your credentials to access your account</div>
          <br />
          <form>
            <input
              type="email"
              id="email"
              placeholder="USER ID"
              onBlur={hide_userMsg}
              onChange={handle_user_change}
              onKeyUp={verifyUserid}
            />
            <br />
            <dd>{userMsg}</dd>
            <input
              type="password"
              id="password"
              placeholder="PASSWORD"
              onBlur={hide_passwordMsg}
              onChange={handle_password_change}
              onKeyUp={verifyPassword}
            />
            <br />
            <dd>{passwordMsg}</dd>
          </form>
          <br />
          <button className="sign-in-btn" type="button" onClick={sign_in}>
            Sign In
          </button>
          <br />
          <br />
          <button className="sign-up-btn" type="button">
            Sign Up
          </button>
        </div>
        <div className="left">{dotElement}</div>
      </div>
    </>
  );
};

export default Login;
