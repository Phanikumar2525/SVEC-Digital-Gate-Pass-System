import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SecurityVerify = () => {
  const [search, setSearch] = useState("");
  const [verified, setVerified] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  // Counts
  const [pendingCount, setPendingCount] = useState(4);
  const [allowedCount, setAllowedCount] = useState(2);

  const navigate = useNavigate();
  const securityName = "Security";

  const handleVerify = () => {
    if (search.trim()) {
      setVerified(true);
      setPendingCount((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleAllowExit = () => {
    setAllowedCount((prev) => prev + 1);
    setVerified(false);
    setSearch("");
  };

  const handleLogout = () => {
    setLoggedOut(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
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

        <button className="btn btn-light btn-sm fw-bold" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* ===== CONDITIONAL CONTENT ===== */}
      {loggedOut ? (
        <div className="alert alert-success text-center fw-bold m-4">
          Thank you, {securityName} 👋
        </div>
      ) : (
        <div className="container-fluid p-4">
          <h4 className="mb-4">
            Welcome, <strong>Security</strong>
          </h4>

          {/* ===== COUNTS ===== */}
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="text-warning fw-bold">Pending Gatepasses</h6>
                  <h2>{pendingCount}</h2>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="text-success fw-bold">Allowed Exits</h6>
                  <h2>{allowedCount}</h2>
                </div>
              </div>
            </div>
          </div>

          {/* ===== SEARCH ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h6 className="fw-bold mb-2">Verify Gatepass</h6>

              <div className="row g-3">
                <div className="col-md-9">
                  <input
                    className="form-control"
                    placeholder="Enter Roll Number or Gatepass ID"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="col-md-3 d-grid">
                  <button
                    className="btn btn-success fw-bold"
                    onClick={handleVerify}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ===== VERIFIED RESULT ===== */}
          {verified && (
            <div
              className="card shadow-sm"
              style={{
                border: "1px solid #22c55e",
                background: "#ecfdf5",
              }}
            >
              <div className="card-body">
                <small className="text-muted">REASON FOR EXIT</small>
                <div className="form-control bg-light mt-1">
                  Fever
                </div>

                <button
                  className="btn btn-success w-100 fw-bold mt-4"
                  onClick={handleAllowExit}
                >
                  ✓ Allow Exit
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SecurityVerify;
