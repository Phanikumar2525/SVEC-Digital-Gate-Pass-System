import React, { createContext, useContext, useState } from "react";

const GatepassContext = createContext();

export const GatepassProvider = ({ children }) => {
  const [student, setStudent] = useState(null);      // student object
  const [gatepasses, setGatepasses] = useState([]);  // list of final gatepass objects
  const [activeRequest, setActiveRequest] = useState(null); // GP103 etc

  return (
    <GatepassContext.Provider
      value={{
        student,
        setStudent,
        gatepasses,
        setGatepasses,
        activeRequest,
        setActiveRequest
      }}
    >
      {children}
    </GatepassContext.Provider>
  );
};

export const useGatepass = () => useContext(GatepassContext);
