import ReactQuill from "react-quill";

const Diary = () => {
  return (
    <div className="">
      <div>
        <h3>오늘의 기분은 어떤가요?</h3>
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
        <label htmlFor="diary">일기</label>
        {/* <input type="text" placeholder="" id="diary" /> */}
        <ReactQuill />
      </div>
    </div>
  );
};

export default Diary;
