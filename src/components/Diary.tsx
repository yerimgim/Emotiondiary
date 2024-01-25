const Diary = () => {
  // 모달 창으로 구현? 아님 그냥 옆에?
  return (
    <>
      <label htmlFor="mood">기분</label>
      <input type="text" placeholder="오늘의 기분은? " id="mood" />
      <label htmlFor="diary"></label>
      <input type="text" placeholder="다이어리 " />
    </>
  );
};

export default Diary;
