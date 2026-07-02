import React from "react";

function Home() {
  return (
    <div style={styles.container}>

      <div style={styles.glow}></div>

      <div style={styles.box}>

        <div style={styles.title}>
          Welcome Back, Founder 👑
        </div>

        <div style={styles.text}>
          “Discipline today builds success tomorrow. Keep learning, keep improving, and never stop.”
        </div>

        <div style={styles.sub}>
          Prime Path Academy 🚀
        </div>

      </div>

    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle, #000, #111)",
    fontFamily: "Arial"
  },

  glow: {
    position: "absolute",
    width: "350px",
    height: "350px",
    background: "radial-gradient(circle, gold, transparent)",
    filter: "blur(60px)",
    opacity: 0.5
  },

  box: {
    padding: "40px",
    border: "1px solid gold",
    borderRadius: "16px",
    textAlign: "center",
    background: "rgba(0,0,0,0.7)",
    boxShadow: "0 0 30px rgba(255,215,0,0.3)"
  },

  title: {
    fontSize: "24px",
    color: "gold",
    marginBottom: "15px",
    fontWeight: "bold"
  },

  text: {
    fontSize: "15px",
    color: "#fff",
    marginBottom: "15px"
  },

  sub: {
    fontSize: "12px",
    color: "#aaa"
  }
};

export default Home;