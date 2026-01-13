import React from "react";
import { gatepasses } from "../../data/gatepasses";
import { useNavigate } from "react-router-dom";

const ApprovedGatepassView = () => {
  const navigate = useNavigate();

  const approved = gatepasses.find(
    (g) => g.finalStatus === "Approved"
  );

  if (!approved) {
    return <h4 className="text-center mt-5">No Approved Gatepass</h4>;
  }

  return (
    <div className="min-vh-100 bg-light">
      <div className="bg-success text-white text-center py-3 fw-bold">
        DIGITAL GATEPASS
      </div>

      <div className="container mt-4">
        <div className="card shadow mx-auto" style={{ maxWidth: "400px" }}>
          <div className="card-body">
            <p><strong>Gatepass ID:</strong> {approved.id}</p>
            <p><strong>Name:</strong> {approved.studentName}</p>
            <p><strong>Roll No:</strong> {approved.rollNo}</p>
            <p><strong>Date:</strong> {approved.date}</p>
            <p><strong>Time:</strong> {approved.time}</p>

            <div className="btn btn-success w-100 fw-bold">
              STATUS: APPROVED
            </div>
          </div>
        </div>

        <button className="btn btn-secondary mt-3" onClick={() => navigate("/student")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default ApprovedGatepassView;
