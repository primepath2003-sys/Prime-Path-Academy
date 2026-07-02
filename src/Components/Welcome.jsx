function Welcome({ onStart }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>WELCOME PAGE</h1>

      <button onClick={onStart}>
        START LEARNING
      </button>
    </div>
  );
}

export default Welcome;