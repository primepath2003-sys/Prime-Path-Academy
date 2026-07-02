import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Profile() {
  const user = auth.currentUser;

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #ffecd2, #fcb69f)"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
      }}>
        
        <h1>👤 User Profile</h1>

        <p><b>Email:</b> {user?.email}</p>

        <p><b>Status:</b> Active Member</p>

        <div style={{
          marginTop: "10px",
          fontWeight: "bold",
          color: "#333"
        }}>
          👑 Founder: Shashindu Dilshan
        </div>

        <button
          onClick={() => {
            signOut(auth);
            window.location.href = "/";
          }}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#ff4d4d",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Profile;