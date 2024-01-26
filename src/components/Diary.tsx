const Diary = () => {
  // 모달 창으로 구현? 아님 그냥 옆에?
  return (
    <>
      <div>
        <label htmlFor="mood">오늘의 기분은 어떤가요? </label>
        <input type="text" placeholder="오늘의 기분은?" id="mood" />
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
        <label htmlFor="weather">오늘의 날씨는 어떤가요?</label>
        <input type="text" placeholder="오늘 날씨는?" id="weather" />
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
        <input type="text" placeholder="" id="diary" />
      </div>
      <button>등록</button>
    </>
  );
};

export default Diary;
