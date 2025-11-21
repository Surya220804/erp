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
                <p>Transform your institution with intelligent analytics that simplify decisions, enhance efficiency, and provide deeper clarity across every academic and administrative process.</p>
            </div>
            <div className="about-grid">
                <div className="about-grid-item">
                    <button className="btn btn-about btn-primary-about"><span><FaRegHandPaper/></span> Hello</button>
                    <h2>Comprehensive School Management</h2>
                    <p>Empower your entire institution with an all-in-one platform that streamlines academics, administration, communication, and daily operations. Simplify complex tasks, improve accuracy, and ensure smooth management for teachers, students, and staff with intelligent, integrated tools built for modern schools.</p>
               </div>
                <div className="about-grid-item">
                    <button className="btn btn-about btn-secondary-about"><span><HiEye/></span> View</button>
                    <h2>Advanced Analytics & Reporting</h2>
                    <p>Unlock meaningful insights with powerful analytics that simplify complex data, highlight trends, and enhance decision-making across your school. Generate accurate reports, monitor performance, and gain a clearer view of academic and administrative operations with intelligent, easy-to-use tools.</p>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default About