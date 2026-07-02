import React from "react";

export default function LessonModal({
  open,
  title,
  setTitle,
  video,
  setVideo,
  onSave,
  onClose,
  editing,
}) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          width: "450px",
          background: "#1b1b1b",
          border: "2px solid gold",
          borderRadius: "15px",
          padding: "25px",
        }}
      >
        <h2
          style={{
            color: "gold",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {editing ? "Edit Lesson" : "Add Lesson"}
        </h2>

        <input
          type="text"
          placeholder="Lesson Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        />

        <input
          type="text"
          placeholder="Google Drive Preview Link"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "10px 20px",
              background: "#555",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>

          <button
            onClick={onSave}
            style={{
              padding: "10px 20px",
              background: "gold",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {editing ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}