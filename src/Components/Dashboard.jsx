import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div style={styles.wrapper}>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <div style={styles.logo}>👑 PRIME PATH</div>

        <button
          onClick={() => navigate("/lesson-topics")}
          style={{
            ...styles.btn,
            borderColor: isActive("/lesson-topics")
              ? "gold"
              : "rgba(255,215,0,0.3)"
          }}
        >
          <span style={styles.glowText}>
            📚 Lesson Topics
          </span>
        </button>

        <button
          onClick={() => navigate("/lessons")}
          style={{
            ...styles.btn,
            borderColor: isActive("/lessons")
              ? "gold"
              : "rgba(255,215,0,0.3)"
          }}
        >
          📖 Lessons
        </button>

        <button
          onClick={() => navigate("/faq")}
          style={{
            ...styles.btn,
            borderColor: isActive("/faq")
              ? "gold"
              : "rgba(255,215,0,0.3)"
          }}
        >
          ❓ F & Q
        </button>

        <button
          onClick={() => navigate("/community")}
          style={{
            ...styles.btn,
            borderColor: isActive("/community")
              ? "gold"
              : "rgba(255,215,0,0.3)"
          }}
        >
          👥 Community
        </button>

        <button
          style={styles.logout}
          onClick={() => navigate("/")}
        >
          Log out
        </button>
      </div>

      {/* MAIN */}
      <div style={styles.main}>
        <div style={styles.card}>
          <h1 style={styles.title}>👑 Welcome Back, You ✨</h1>

          <p style={styles.text}>
            ⭐ Success is built daily — keep learning<br />
            🚀 Discipline creates freedom<br />
            🎯 Stay focused, stay consistent
          </p>

          <div style={styles.footer}>
            Prime Path Academy 🚀
          </div>
        </div>
      </div>

    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    fontFamily: "Arial",
    color: "white",
    background:
      "radial-gradient(circle at 20% 20%, rgba(255,215,0,0.25), transparent 40%), radial-gradient(circle at 80% 40%, rgba(255,215,0,0.12), transparent 45%), linear-gradient(120deg, #000, #0a0a0a)"
  },

  sidebar: {
    width: "260px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    borderRight: "1px solid rgba(255,215,0,0.3)",
    background: "rgba(0,0,0,0.85)"
  },

  logo: {
    color: "gold",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px"
  },

  btn: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255,215,0,0.3)",
    background: "rgba(255,255,255,0.05)",
    cursor: "pointer",
    color: "white"
  },

  glowText: {
    color: "#FFD700",
    fontWeight: "bold",
    textShadow:
      "0 0 4px #FFD700, 0 0 8px #FFD700, 0 0 16px #FFD700"
  },

  logout: {
    marginTop: "auto",
    padding: "12px",
    borderRadius: "10px",
    background: "rgba(255,0,0,0.15)",
    border: "1px solid red",
    color: "red",
    cursor: "pointer"
  },

  main: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  card: {
    width: "600px",
    padding: "40px",
    borderRadius: "20px",
    border: "1px solid rgba(255,215,0,0.5)",
    background: "rgba(0,0,0,0.7)",
    textAlign: "center",
    boxShadow: "0 0 40px rgba(255,215,0,0.2)"
  },

  title: {
    color: "gold",
    fontSize: "28px",
    marginBottom: "15px"
  },

  text: {
    fontSize: "14px",
    marginBottom: "15px"
  },

  footer: {
    fontSize: "12px",
    color: "#aaa"
  }
};