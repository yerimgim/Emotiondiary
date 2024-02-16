import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, setToken } from "../utils/Auth";

const Login = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();

  const handleInputId = (e: any) => {
    setInputId(e.target.value);
  };

  const handleInputPassword = (e: any) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    // console.log("isUser", JSON.parse(isUser));
    if (inputId && inputPw) {
      setToken({ id: inputId, pw: inputPw });
    } else {
      console.error("에러발생");
    }
  };
  // useEffect(() => {
  //   const user = getToken("token");
  //   console.log(user);
  //   navigate("/calendar");
  // }, []);

  return (
    <div>
      <h1 className="font-['KOTRAHOPE']">Login</h1>
      <div className="border-b-4 border-indigo-500 mb-2 active:border-indigo-800">
        <label htmlFor="input_id">ID : </label>
        <input
          type="text"
          name="input_id"
          value={inputId}
          onChange={handleInputId}
        />
      </div>
      <div className="border-b-4 border-indigo-500 mb-6">
        <label htmlFor="input_pw">PW : </label>
        <input
          type="password"
          name="input_pw"
          value={inputPw}
          onChange={handleInputPassword}
        />
      </div>
      <div className="flex flex-row justify-around">
        <button onClick={() => console.log("Register")}>Register</button>
        <button onClick={onClickLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
