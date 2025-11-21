import React from 'react'
import './About.css'
import {  HiEye } from "react-icons/hi";

import { FaRegHandPaper } from "react-icons/fa";
const About = () => {
  return (
    <section className='about'>
        <div className="container">
            <div className="title">
                <button className="btn btn-title">About Us</button>
                <h1>Unleash The <span className="span-color">Power</span> Of Data With Educare</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil culpa facilis dolorem dolore quam repellendus atque a dolorum! </p>
            </div>
            <div className="about-grid">
                <div className="about-grid-item">
                    <button className="btn btn-about btn-primary-about"><span><FaRegHandPaper/></span> Hello</button>
                    <h2>Comprehensive School Management</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo esse repellat eius, in, officiis ipsam quia maxime error ab exercitationem necessitatibus. Doloremque maiores ut aperiam nemo libero, aut inventore laborum.</p>
               </div>
                <div className="about-grid-item">
                    <button className="btn btn-about btn-secondary-about"><span><HiEye/></span> View</button>
                    <h2>Advanced Analytics & Reporting</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo esse repellat eius, in, officiis ipsam quia maxime error ab exercitationem necessitatibus. Doloremque maiores ut aperiam nemo libero, aut inventore laborum.</p>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default About