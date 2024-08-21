import React from "react";
import footer from './footer';


const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "10px 20px",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        textAlign: "center",
      }}
    >
      <p>&copy;  เว็บแอปของ khettawan hoysang N.10</p>
      <p>
        <a style={{ color: "#ecf0f1", textDecoration: "none" }}>
          026630491014-1
        </a>{" "}
        |{" "}
        <a style={{ color: "#ecf0f1", textDecoration: "none" }}>
          khettawan.hoy@rmutto.ac.th
        </a>
      </p>
    </footer>
  );
};

export default Footer;
