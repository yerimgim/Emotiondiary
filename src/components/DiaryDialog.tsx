import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Diary = () => {
  const modules = {
    toolbar: {
      container: [
        ["image"],
        [{ header: [1, 2, 3, 4, 5, false] }],
        ["bold", "underline"],
      ],
    },
  };
  const [content, setContent] = useState("");
  console.log(content);
  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };
  const handleSubmit = async () => {
    const date = new Date();
    try {
      console.log("post data");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div>
        <h3 className="font-medium">오늘의 기분은 어떤가요?</h3>
        <div className="diary-button-box">
          <button>😀</button>
          <button>🥲</button>
          <button>🥳</button>
          <button>🤒</button>
          <button>🤬</button>
          <button>🤪</button>
        </div>
      </div>
      <div>
        <h3>오늘의 날씨는 어떤가요?</h3>
        <div className="diary-button-box">
          <button>🌞</button>
          <button>🌦️</button>
          <button>☁️</button>
          <button>🌈</button>
          <button>☔</button>
          <button>️⛄️</button>
        </div>
      </div>
      <div className="">
        <div>
          <label htmlFor="diary">일기</label>
          <ReactQuill
            style={{ width: "400px", height: "300px" }}
            modules={modules}
            onChange={setContent}
          />
        </div>
      </div>
    </div>
  );
};

export default Diary;
