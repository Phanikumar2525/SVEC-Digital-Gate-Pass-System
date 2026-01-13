import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [loggedOut, setLoggedOut] = useState(false);

  const studentName = "Ravi Kumar";
  const rollNo = "21A91A05";

  const handleLogout = () => {
    setLoggedOut(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const boxStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "30px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f8",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ===== HEADER ===== */}
          <div
        style={{
        backgroundColor: "#198754", 
        color: "#fff",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
  {/* Left: Logo + Title */}
  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <img
      src="/logo.jpg"
      alt="SVEC Logo"
      style={{ height: "40px", width: "40px", objectFit: "contain" }}
    />
    <h5 style={{ margin: 0, fontWeight: "bold", letterSpacing: "0.5px" }}>
      SVEC DIGITAL GATEPASS SYSTEM
    </h5>
  </div>

  {/* Right: Logout */}
  <button className="btn btn-light btn-sm fw-bold" onClick={handleLogout}>
    Logout
  </button>
</div>


      {/* ===== CONTENT ===== */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "30px auto",
            padding: "0 15px",
          }}
        >

          {loggedOut ? (
            <div className="alert alert-success text-center fw-bold">
              Thank you, {studentName} 👋
            </div>
          ) : (
            <>
              <h5 className="mb-4">
                Welcome, <strong>{studentName}</strong> ({rollNo})
              </h5>

              {/* Apply Gatepass */}
              <div style={boxStyle}>
                <div>
                  <h5 className="text-success fw-bold">Apply Gatepass</h5>
                  <p className="text-muted mb-0">
                    Submit a new gatepass request
                  </p>
                </div>
                <button
                  className="btn btn-outline-success fw-bold"
                  onClick={() => navigate("/student/apply-gatepass")}
                >
                  Apply
                </button>
              </div>

              {/* My Gatepasses */}
              <div style={boxStyle}>
                <div>
                  <h5 className="text-success fw-bold">My Gatepasses</h5>
                  <p className="text-muted mb-0">
                    View all your gatepass history
                  </p>
                </div>
                <button
                  className="btn btn-outline-success fw-bold"
                  onClick={() => navigate("/student/my-gatepasses")}
                >
                  View
                </button>
              </div>

              {/* Pending Approvals */}
              <div style={boxStyle}>
                <div>
                  <h5 className="fw-bold">Pending Approvals</h5>
                  <p className="text-muted mb-0">
                    Waiting for mentor / HOD approval
                  </p>
                </div>
                <button
                  className="btn btn-outline-success fw-bold"
                  onClick={() => navigate("/student/pending-approvals")}
                >
                  Check
                </button>
              </div>

              {/* Approved Gatepasses */}
              <div style={boxStyle}>
                <div>
                  <h5 className="fw-bold">Approved Gatepasses</h5>
                  <p className="text-muted mb-0">
                    Ready to show at security
                  </p>
                </div>
                <button
                  className="btn btn-outline-success fw-bold"
                  onClick={() => navigate("/student/approved-gatepass")}
                >
                  Open
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
