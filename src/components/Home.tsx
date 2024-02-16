import Login from "./Login";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleEmailLogin = () => {
    console.log("login!");
    navigate("/login");
  };
  return (
    <div className="relative flex flex-col items-center">
      <div>
        <img src="src/assets/🤪.png" />
        <img src="src/assets/😀.png" />
        <img src="src/assets/🥳.png" />
      </div>

      <h1 className="font-['KOTRAHOPE']">Emotion diary</h1>
      <div className="flex flex-row justify-around">
        <button>
          <a href={`http://localhost:1337/api/connect/google`}>
            <FaGoogle className="pr-1" />
            구글 로그인
          </a>
        </button>
        <button onClick={handleEmailLogin}>
          <MdEmail className="pr-1" />
          이메일 로그인
        </button>
      </div>
    </div>
  );
};

export default Home;
