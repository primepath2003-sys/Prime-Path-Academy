import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "/dashboard";
      })
      .catch((e) => alert(e.message))
      .finally(() => setLoading(false));
  };

  const signup = () => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "/dashboard";
      })
      .catch((e) => alert(e.message))
      .finally(() => setLoading(false));
  };

  return (
    <div style={styles.container}>
      <div style={styles.glow}></div>

      <div style={styles.card}>
        <div style={styles.titleBox}>
          <h1 style={styles.title}>PRIME PATH</h1>
          <div style={styles.subtitle}>ACADEMY</div>
        </div>

        <p style={styles.sub}>Luxury Learning Access</p>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <label style={styles.agree}>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I agree to terms
        </label>

        <button
          disabled={!agree || loading}
          onClick={login}
          style={styles.btn}
        >
          {loading ? "Loading..." : "Login"}
        </button>

        <button
          disabled={!agree || loading}
          onClick={signup}
          style={styles.btn2}
        >
          Sign Up
        </button>
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
    fontFamily: "Arial",
    background: "radial-gradient(circle, #000, #111)",
    overflow: "hidden",
    position: "relative"
  },

  glow: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, gold, transparent)",
    filter: "blur(40px)",
    opacity: 0.4,
    pointerEvents: "none"
  },

  card: {
    width: "340px",
    padding: "30px",
    borderRadius: "16px",
    background: "rgba(0,0,0,0.85)",
    border: "1px solid gold",
    textAlign: "center",
    position: "relative",
    zIndex: 2
  },

  titleBox: {
    marginBottom: "15px",
    lineHeight: "1.2"
  },

  title: {
    color: "gold",
    margin: 0,
    fontSize: "22px",
    letterSpacing: "2px"
  },

  subtitle: {
    color: "gold",
    fontSize: "14px",
    letterSpacing: "3px",
    marginTop: "4px"
  },

  sub: {
    color: "#aaa",
    marginBottom: "15px"
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    borderRadius: "8px",
    border: "1px solid gold",
    background: "#111",
    color: "white",
    outline: "none"
  },

  agree: {
    fontSize: "12px",
    color: "#ccc"
  },

  btn: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    background: "gold",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer"
  },

  btn2: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    background: "transparent",
    border: "1px solid gold",
    color: "gold",
    cursor: "pointer"
  }
};

export default Login;