import React from "react";
import "./Review.css";
import MemberImg from "../../assets/Member1.jpg";
import { FaArrowLeft, FaArrowRight ,FaPlay} from "react-icons/fa";
import Reviewlogo from '../../assets/Reviewlogo.png'

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
              <div className="play-btn-wrapper">
                <div className="play-btn">
                  <FaPlay />
                </div>
                </div>
            </div>
                  <div className="review-content">
                      <div className="review-para">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere quas aut mollitia cumque quaerat iusto vel officia nostrum eos, in tempore! Consectetur animi, ad illo praesentium dolorum libero eaque eum? Quam reiciendis odio ea in nisi eveniet eaque repellat, provident ut perspiciatis voluptas cupiditate doloremque tempore, iste culpa. Sed! </p>
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
