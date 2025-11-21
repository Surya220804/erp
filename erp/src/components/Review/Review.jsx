import React from "react";
import "./Review.css";
import MemberImg from "../../assets/Member1.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Review = () => {
  return (
    <section className="review">
      <div className="container">
        <div className="title">
          <button className="btn btn-title">Testimonials</button>
          <h1>
            What Our <span className="span-color">Customers</span> Say
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            voluptas quisquam culpa ab facilis odit.
          </p>
        </div>

        <div className="review-grid">
          <div className="diamond-container">
            <img src={MemberImg} alt="customer" className="diamond-image" />
          </div>
          <div className="review-content">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium sapiente vero dolorum, enim voluptatem fuga officiis eius asperiores iusto ut, magni architecto possimus consequuntur beatae harum, dolore mollitia blanditiis tenetur. </p>
            <h4>Jakub, Inbound Marketing Team Lead, STX NEXT</h4>
            <div className="review-nav">
              <button className="btn nav-btn"><FaArrowLeft /> </button>
              <button className="btn nav-btn"><FaArrowRight /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
