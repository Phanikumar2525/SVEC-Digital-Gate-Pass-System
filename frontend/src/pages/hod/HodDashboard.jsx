import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateGatepassId } from "../../utils/generateGatepassId";

const HodDashboard = () => {

  const HodName = "HOD";

  const navigate = useNavigate();
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    setLoggedOut(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleApprove = (student) => {
    const gatepassId = generateGatepassId();

    navigate("/student/gatepass-approved", {
      state: {
        gatepassId,
        student,
      },
    });
  };

  return (
    <div>
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

      {/* ===== CONTENT ===== */}
      <div className="container-fluid p-4">
        <h4 className="mb-4">
          Welcome, <strong>{HodName}</strong>
        </h4>

        {loggedOut ? (
          <div className="alert alert-success text-center fw-bold m-4">
            Thank you, {HodName} 👋
          </div>
        ) : (
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">Gatepass Requests (Final Approval)</h5>

              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-success">
                    <tr>
                      <th>Student Name</th>
                      <th>Roll No</th>
                      <th>Reason</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Mentor Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Ravi Kumar</td>
                      <td>21A91A05</td>
                      <td>Medical</td>
                      <td>15-01-2026</td>
                      <td>10:00 AM - 2:00 PM</td>
                      <td>
                        <span className="badge bg-success">Approved</span>
                      </td>
                      <td>
                        <button
                          className="btn btn-success btn-sm me-2"
                          onClick={() =>
                            handleApprove({
                              name: "Ravi Kumar",
                              roll: "21A91A05",
                              type: "Hosteller",
                              date: "25/04/2024",
                              time: "10:00 AM to 2:00 PM",
                            })
                          }
                        >
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
        )}
      </div>
    </div>
  );
};

export default HodDashboard;
