import React from "react";
import "./Review.css";
import MemberImg from "../../assets/Member1.jpg";
import { FaArrowLeft, FaArrowRight ,FaPlay} from "react-icons/fa";
import Reviewlogo from '../../assets/Reviewlogo.png'

const Review = () => {
  return (
    <section className="review">
      <div className="container">
        <div className="title review-title">
          <button className="btn btn-title">Testimonials</button>
          <h1>
            What Our <span className="span-color">Customers</span> Say
          </h1>
          <p>
           Hear from schools and educators who trust our platform to simplify operations, enhance communication, and deliver a smoother, more efficient management experience.
          </p>
        </div>
        <div className="review-grid">
            <div className="diamond-container">
              <img src={MemberImg} alt="customer" className="diamond-image" />
              <div className="play-btn-wrapper">
                <div className="play-btn">
                  <FaPlay />
                </div>
                </div>
            </div>
                  <div className="review-content">
                      <div className="review-para">
                        <p>Transform the way your institution operates with a powerful platform designed to simplify complex tasks and support every department. Our solution helps you manage academics, communication, and daily processes with ease, ensuring a smooth experience for teachers, students, and administrators. Gain clarity through real-time insights, automate routine work, and create an environment where productivity thrives. With reliable tools built for modern education, your school can focus on what matters most—delivering exceptional learning outcomes.</p>
                      </div>
                           <div className="review-author">
                             <h4>Jakub, Inbound Marketing Team Lead, STX NEXT</h4>
                              <div className="review-author-company ">
                                <img src={Reviewlogo} alt="" className="review-logo" />
                                  <div className="review-btn">
                                      <button className="btn nav-btn"><FaArrowLeft /></button>
                                      <button className="btn nav-btn"><FaArrowRight /></button>
                                  </div>
                              </div>
                          </div>  
                  </div>

        </div>
      </div>
    </section>
  );
};

export default Review;
