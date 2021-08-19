import React, { useContext } from "react";
import "./Footer.css";
import ThemeContext from "../../context/ThemeContext";

const Footer = () => {
  const themeValues = useContext(ThemeContext)
  return (
    <div className="footer">
      <p>Develope by Mohammadreza</p>
      <div>
        <button onClick={() => themeValues.setActiveTheme('green')} className="green"> Green</button>
        <button onClick={() => themeValues.setActiveTheme('blue')} className="blue"> Blue</button>
      </div>
    </div>
  );
};
export default Footer;
