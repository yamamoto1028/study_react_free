import React from "react";
import "./Footer.css";
import { ToContact } from "./ToContact";
import { Recruit } from "./Recruit";

export const Footer = () => {
  return (
    <div className="footerPage">
      <footer>
        <ToContact />
        <Recruit />
      </footer>
    </div>
  );
};
