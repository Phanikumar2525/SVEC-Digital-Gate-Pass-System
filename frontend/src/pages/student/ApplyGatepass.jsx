import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ApplyGatepass = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentType: "Dayscholar",
    reason: "",
    fromDate: "",
    toDate: "",
    fromTime: "",
    toTime: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/gatepass/apply", {
        studentId: "21A91A05", // later from login/JWT
        ...formData,
      });

      alert("Gatepass request submitted successfully");
      navigate("/student");
    } catch (error) {
      alert("Failed to submit gatepass");
    }
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* ===== HEADER ===== */}
      <div className="bg-success text-white py-3">
        <h5 className="mb-0 fw-bold text-center">Apply Gatepass</h5>
      </div>

      {/* ===== FORM CARD ===== */}
      <div className="container mt-4">
        <div className="card shadow-sm mx-auto" style={{ maxWidth: "650px" }}>
          <div className="card-body">
            <h4 className="text-center fw-bold text-success mb-4">
              APPLY GATEPASS
            </h4>

            <form onSubmit={handleSubmit}>
              {/* Student Type */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Student Type
                </label>
                <div className="d-flex gap-4">
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="studentType"
                      value="Dayscholar"
                      checked={formData.studentType === "Dayscholar"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">
                      Dayscholar
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="studentType"
                      value="Hosteller"
                      checked={formData.studentType === "Hosteller"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">
                      Hosteller
                    </label>
                  </div>
                </div>
              </div>

              {/* Reason */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Reason for Leave
                </label>
                <textarea
                  className="form-control"
                  name="reason"
                  rows="4"
                  placeholder="Enter reason (each line will be preserved)"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Dates */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    From Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="fromDate"
                    value={formData.fromDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    To Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="toDate"
                    value={formData.toDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Time */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    From Time
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    name="fromTime"
                    value={formData.fromTime}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    To Time
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    name="toTime"
                    value={formData.toTime}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="d-flex gap-3">
                <button
                  type="button"
                  className="btn btn-outline-secondary w-50 fw-bold"
                  onClick={() => navigate("/student")}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn btn-success w-50 fw-bold"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyGatepass;
