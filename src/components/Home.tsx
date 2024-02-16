import Login from "./Login";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Home = () => {
  const handleLogin = () => {
    console.log("login!");
  };
  return (
    <div className="relative flex flex-col items-center">
      <div>
        <img src="src/assets/🤪.png" />
        <img src="src/assets/😀.png" />
        <img src="src/assets/🥳.png" className="" />
      </div>

      <h1 className="font-['KOTRAHOPE']">Emotion diary</h1>
      <div className="flex flex-row">
        <button onClick={handleLogin}>
          <a href={`${import.meta.env.REACT_APP_API_URL}/api/connect/google`}>
            <FaGoogle className="pr-1" />
            구글 로그인
          </a>
        </button>
        <button onClick={handleLogin}>
          <MdEmail className="pr-1" />
          이메일 로그인
        </button>
      </div>
    </div>
  );
};

export default Home;
