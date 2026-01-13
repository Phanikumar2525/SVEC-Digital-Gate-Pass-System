import React from "react";
import { gatepasses } from "../../data/gatepasses";
import { useNavigate } from "react-router-dom";

const MyGatepasses = () => {
  const navigate = useNavigate();

  return (
    <div className="min-vh-100 bg-light">
      <div className="bg-success text-white text-center py-3 fw-bold">
        My Gatepasses
      </div>

      <div className="container mt-4">
        <table className="table table-bordered text-center">
          <thead className="table-success">
            <tr>
              <th>ID</th>
              <th>Reason</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {gatepasses.map((g) => (
              <tr key={g.id}>
                <td>{g.id}</td>
                <td>{g.reason}</td>
                <td>{g.date}</td>
                <td>{g.time}</td>
                <td>
                  <span className={`badge ${
                    g.finalStatus === "Approved"
                      ? "bg-success"
                      : "bg-warning text-dark"
                  }`}>
                    {g.finalStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-secondary" onClick={() => navigate("/student")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default MyGatepasses;
