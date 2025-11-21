import React from "react";
import "./Footer.css";
import logo from "../../assets/logo1.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const footerData = [
  {
    title: "Column 1",
    items: ["Item A", "Item B", "Item C","Item D","Item E","Item F"]
  },
  {
    title: "Column 2",
    items: ["Item A", "Item B", "Item C","Item D","Item E","Item F"]
  },
  {
    title: "Column 3",
    items: ["Item A", "Item B", "Item C","Item D","Item E","Item F"]
  },
  {
    title: "Column 4",
    items: ["Item A", "Item B", "Item C","Item D","Item E","Item F"]
  },
  {
    title: "Column 5",
    items: ["Item A", "Item B", "Item C","Item D","Item E","Item F"]
  },
  {
    title: "Column 6",
    items: ["Item A", "Item B", "Item C","Item D","Item E","Item F"]
  },
  {
    title: "Column 7",
    items: ["Item A", "Item B", "Item C","Item D","Item E","Item F"]
  }
];

  return (
    <footer className="footer">
        <div className="container">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" className="footer-logo"/>
          <div className="footer-social">
            <a href=""><FaFacebook/></a>
            <a href=""><FaYoutube/></a>
            <a href=""><FaInstagram/></a>
            <a href=""><FaLinkedin/></a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-grid">
            {footerData.map((column, index) => (
              <div className="footer-grid-column" key={index}>
                <h4>{column.title}</h4>
                <ul>
                  {column.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="newsletter">
        <h3>Subscribe to Newsletter</h3>
        <p>Stay up to date</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email" />
          <button className="btn">Subscribe</button>
        </div>
      </div>

      <div className="footer-copy">
        © 2025 Your Company. All Rights Reserved.
      </div>
      </div>
    </footer>
  );
}
