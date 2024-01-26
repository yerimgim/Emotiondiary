const Home = () => {
  const handleLogin = () => {
    console.log("login!");
  };
  return (
    <>
      <div>🥳</div>
      <h1>Emotion diary</h1>
      <button onClick={handleLogin}>로그인</button>
    </>
  );
};

export default Home;
