import React from "react";
import { Link } from "@remix-run/react";

const Header: React.FC = () => {
  return (
    <header style={headerStyles}>
      <div style={logoContainerStyles}>
        <Link to="/" style={logoLinkStyles}>
         
          <span style={logoTextStyles}>My Web App</span>
        </Link>
      </div>
      <nav style={navStyles}>
        <ul style={navListStyles}>
          <li><Link to="/" style={navLinkStyles}>Home</Link></li>
          <li><Link to="/myPetLists" style={navLinkStyles}>myPetLists</Link></li>
          
        </ul>
      </nav>
    </header>
  );
};

// Styles
const headerStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  backgroundColor: "#34495e",
  color: "white",
};

const logoContainerStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const logoLinkStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "white",
};

const logoStyles: React.CSSProperties = {
  width: "40px",
  height: "40px",
  marginRight: "10px",
};

const logoTextStyles: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: "bold",
};

const navStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const navListStyles: React.CSSProperties = {
  display: "flex",
  listStyleType: "none",
  margin: 0,
  padding: 0,
};

const navLinkStyles: React.CSSProperties = {
  marginLeft: "20px",
  textDecoration: "none",
  color: "white",
  fontSize: "16px",
  fontWeight: "normal",
};

export default Header;
