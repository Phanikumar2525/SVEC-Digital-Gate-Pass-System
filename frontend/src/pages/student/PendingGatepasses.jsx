import React from "react";
import { gatepasses } from "../../data/gatepasses";
import { useNavigate } from "react-router-dom";

const PendingApprovals = () => {
  const navigate = useNavigate();

  const pending = gatepasses.filter(
    (g) => g.finalStatus === "Pending"
  );

  return (
    <div className="min-vh-100 bg-light">
      <div className="bg-success text-white text-center py-3 fw-bold">
        Pending Approvals
      </div>

      <div className="container mt-4">
        {pending.map((g) => (
          <div key={g.id} className="card shadow-sm mb-3">
            <div className="card-body">
              <h6 className="fw-bold">{g.reason}</h6>
              <p className="mb-1"><strong>Date:</strong> {g.date}</p>
              <p className="mb-2"><strong>Time:</strong> {g.time}</p>

              <div className="d-flex gap-3">
                <span className={`badge ${g.mentorStatus === "Approved" ? "bg-success" : "bg-warning text-dark"}`}>
                  Mentor: {g.mentorStatus}
                </span>

                <span className={`badge ${g.hodStatus === "Approved" ? "bg-success" : "bg-warning text-dark"}`}>
                  HOD: {g.hodStatus}
                </span>
              </div>
            </div>
          </div>
        ))}

        <button className="btn btn-secondary" onClick={() => navigate("/student")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default PendingApprovals;
