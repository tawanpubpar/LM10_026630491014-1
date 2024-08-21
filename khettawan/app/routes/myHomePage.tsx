import React from "react";

interface PetHomePageProps {
  fullName: string;
  studentId: string;
  contact: string;
}

const PetHomePage: React.FC<PetHomePageProps> = ({ fullName, studentId, contact }) => {
  return (
    <div style={containerStyles}>
      <h1 style={titleStyles}>ข้อมูลส่วนตัว</h1>
      <div style={infoContainerStyles}>
        <p><strong>ชื่อ-นามสกุล:</strong> {fullName}</p>
        <p><strong>รหัสนักศึกษา:</strong> {studentId}</p>
        <p><strong>ช่องทางการติดต่อ:</strong> {contact}</p>
      </div>
    </div>
  );
};

// Styles
const containerStyles: React.CSSProperties = {
  margin: "20px auto",
  padding: "20px",
  maxWidth: "600px",
  backgroundColor: "#f4f4f4",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const titleStyles: React.CSSProperties = {
  fontSize: "24px",
  marginBottom: "20px",
  textAlign: "center",
  color: "#2c3e50",
};

const infoContainerStyles: React.CSSProperties = {
  fontSize: "18px",
  lineHeight: "1.6",
  color: "#34495e",
};

export default PetHomePage;
