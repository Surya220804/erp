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
      title: "Products",
      items: ["Courses","Live Classes", "Mobile App", "Learning Paths", "Certifications"],
    },
    {
      title: "Download",
      items: ["Mobile App", "Brochure", "Course Catalog"],
    },
    {
      title: "Get Started",
      items: ["Sign Up", "Login", "Start Learning", "Browse Courses", "Contact Support"]
    },
    {
      title: "Solutions",
      items:  ["Online Learning","Student Management","Assessment Tools","E-Learning Platform","Virtual Classroom","Analytics & Reports","Course Authoring","Learning Management System","Teaching Resources","Skill Development","Certification Management"]
    },
    {
      title: "Build",
      items: ["Create Course","Build Curriculum","Design Lessons","Set Up Classroom","Manage Students","Track Progress"]
    },
    {
      title: "Loom",
      items: ["Record Videos","Share Lessons","Edit Clips","Manage Library","Embed Recordings"]
    },
    {
      title: "Resources",
      items: ["Help Center","Blog","Tutorials","Case Studies","Community Forum","FAQs","Guides","Webinars","Developer Docs","API Reference","Support"]
    }
  ];

  const footerGroup = [["Products", "Solutions"],["Download", "Build", "Loom"],["Get Started", "Resources"]];

  return (
    <footer className="footer">
      <div className="containe">
        <div className="footer-top">
          <div className="footer-top-left">
            <img src={logo} alt="" className="footer-logo"/>
            <div className="footer-social">
              <a href=""><FaFacebook/></a>
              <a href=""><FaYoutube/></a>
              <a href=""><FaInstagram/></a>
              <a href=""><FaLinkedin/></a>
            </div>
            <div className="footer-options">
              <select name="" id="">
                <option value="">English</option>
                <option value="">Tamil</option>
                <option value="">France</option>

              </select>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-grid">
              {footerGroup.map((group, groupIndex) => (
                <div className="footer-grid-column" key={groupIndex}>
                  {group.map((title, i) => {
                    const columnData = footerData.find(item => item.title === title);
                    return (
                      <div className="footer-section" key={i}>
                        <h4>{columnData.title}</h4>
                        <ul>
                          {columnData.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="newsletter-container">
          <h3>Subscribe to Newsletter</h3>
          <label htmlFor="">Stay Up to date</label>
          <div className="newsletter-input">
            <div className="input-wrapper">
              <input type="email" placeholder="Your Email"/>
            <button className="subscribe-btn">Subscribe</button>
            </div>
             <div className="company-info">
                <div className="company-name">Surya Technologies Pvt Ltd.</div>
                <div className="copyright">  © 2025 Your Company. All Rights Reserved.</div>
              </div>
          </div>    
        </div>
      
      </div>
    </footer>
  );
}
