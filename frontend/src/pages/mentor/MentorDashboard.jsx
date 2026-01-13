import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MentorDashboard = () => {

  const navigate = useNavigate();
  const [loggedOut, setLoggedOut] = useState(false);

  const MentorName = "Mentor";

  const handleLogout = () => {
    setLoggedOut(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
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
          Thank you, {MentorName} 👋
        </div>
      ) : (
        <div className="container-fluid p-4">
          <h4 className="mb-4">
            Welcome, <strong>Mentor</strong>
          </h4>

          {/* Summary Cards */}
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="text-success">Pending</h6>
                  <h3>3</h3>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="text-primary">Approved</h6>
                  <h3>5</h3>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="text-danger">Rejected</h6>
                  <h3>1</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">Pending Gatepass Requests</h5>

              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-success">
                    <tr>
                      <th>Student Name</th>
                      <th>Roll No</th>
                      <th>Reason</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Ravi Kumar</td>
                      <td>21A91A05</td>
                      <td>Personal work</td>
                      <td>15-01-2026</td>
                      <td>10:00 AM - 2:00 PM</td>
                      <td>
                        <button className="btn btn-success btn-sm me-2">
                          Approve
                        </button>
                        <button className="btn btn-danger btn-sm">
                          Reject
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>Suresh</td>
                      <td>21A91A12</td>
                      <td>Medical</td>
                      <td>16-01-2026</td>
                      <td>9:00 AM - 1:00 PM</td>
                      <td>
                        <button className="btn btn-success btn-sm me-2">
                          Approve
                        </button>
                        <button className="btn btn-danger btn-sm">
                          Reject
                        </button>
                      </td>
                    </tr>
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MentorDashboard;
