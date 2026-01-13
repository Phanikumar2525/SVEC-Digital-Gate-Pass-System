import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("Student");

  const handleLogin = () => {
    if (role === "Student") navigate("/student");
    else if (role === "Mentor") navigate("/mentor");
    else if (role === "HOD") navigate("/hod");
    else if (role === "Security") navigate("/security");
  };

  const roleButton = (name) =>
    `btn ${role === name ? "btn-success" : "btn-outline-success"} fw-bold`;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url(/bg.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      ></div>

      {/* Login Card */}
      <div
        className="card p-4 shadow-lg position-relative"
        style={{ width: "100%", maxWidth: "420px" }}
      >
        {/* HIGHLIGHTED COLLEGE NAME */}
        <div className="text-center mb-3">
          <h5 className="fw-bold text-dark text-uppercase">
            Sri Vasavi Engineering College
          </h5>
          <p className="fw-bold text-success mb-3">
            DIGITAL GATEPASS SYSTEM
          </p>
        </div>

        {/* ROLE BUTTONS */}
        <div className="d-grid gap-2 mb-2">
          <button className={roleButton("Student")} onClick={() => setRole("Student")}>
            STUDENT LOGIN
          </button>
          <button className={roleButton("Mentor")} onClick={() => setRole("Mentor")}>
            MENTOR LOGIN
          </button>
          <button className={roleButton("HOD")} onClick={() => setRole("HOD")}>
            HOD LOGIN
          </button>
          <button className={roleButton("Security")} onClick={() => setRole("Security")}>
            SECURITY LOGIN
          </button>
        </div>

        {/* ✅ MESSAGE IN BLACK */}
        <p className="text-center fw-semibold text-dark mb-3">
          Login as <span className="text-uppercase">{role}</span>
        </p>

        {/* FORM */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Username</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input type="password" className="form-control" />
        </div>

        <button className="btn btn-success w-100 fw-bold" onClick={handleLogin}>
          LOGIN
        </button>

        {/* REGISTER LINK */}
        <p className="text-center mt-3 mb-0">
          New user?{" "}
          <span
            className="fw-bold text-success"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
