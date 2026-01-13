import { Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import StudentDashboard from "./pages/student/StudentDashboard";
import ApplyGatepass from "./pages/student/ApplyGatepass";

import MyGatepasses from "./pages/student/MyGatepasses";
import PendingGatepasses from "./pages/student/PendingGatepasses";
import ApprovedGatepassView from "./pages/student/ApprovedGatepassView";

import MentorDashboard from "./pages/mentor/MentorDashboard";
import HodDashboard from "./pages/hod/HodDashboard";
import SecurityVerify from "./pages/security/SecurityVerify";

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Student */}
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/student/apply-gatepass" element={<ApplyGatepass />} />
      <Route path="/student/my-gatepasses" element={<MyGatepasses />} />
      <Route path="/student/pending-approvals" element={<PendingGatepasses />} />
      <Route path="/student/approved-gatepass" element={<ApprovedGatepassView/>} />

      {/* Mentor & HOD */}
      <Route path="/mentor" element={<MentorDashboard />} />
      <Route path="/hod" element={<HodDashboard />} />

      {/* Security */}
      <Route path="/security" element={<SecurityVerify />} />
    </Routes>
  );
}

export default App;
