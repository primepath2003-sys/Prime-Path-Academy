import React from "react";

export default function DeleteModal({
  open,
  lessonTitle,
  onDelete,
  onClose,
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
          width: "420px",
          background: "#1b1b1b",
          border: "2px solid #ff4444",
          borderRadius: "15px",
          padding: "25px",
          color: "#fff",
        }}
      >
        <h2
          style={{
            color: "#ff4444",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Delete Lesson
        </h2>

        <p
          style={{
            textAlign: "center",
            marginBottom: "25px",
            lineHeight: "1.6",
          }}
        >
          Are you sure you want to delete
          <br />
          <strong style={{ color: "gold" }}>{lessonTitle}</strong> ?
        </p>

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
            onClick={onDelete}
            style={{
              padding: "10px 20px",
              background: "#ff4444",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}