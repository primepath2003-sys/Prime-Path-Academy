import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

export default function VideoPlayer() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const videoUrl =
    state?.video ||
    "https://drive.google.com/uc?export=view&id=1d2VngE-s2halVhe49WQYLnakuE3l_5FH";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "25px",
        fontFamily: "Arial"
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "transparent",
          border: "2px solid gold",
          color: "gold",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        ← Back
      </button>

      <h1
        style={{
          color: "gold",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "25px"
        }}
      >
        {state?.title || "Lesson Video"}
      </h1>

      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          border: "2px solid gold",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(255,215,0,.35)"
        }}
      >
        <ReactPlayer
          url={videoUrl}
          controls
          playing={false}
          width="100%"
          height="70vh"
        />
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "35px"
        }}
      >
        <button
          style={{
            background: "gold",
            color: "#000",
            border: "none",
            padding: "15px 35px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "18px"
          }}
        >
          ▶ Next Lesson
        </button>
      </div>
    </div>
  );
}


