import React from 'react'
import './Products.css' 
import { IonIcon } from "@ionic/react";
const Products = () => {
    const productsData = [
        {
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16">
            <path d="M0 0h1v15h15v1H0V0zm10 10h1v4h-1v-4zm-3-3h1v7H7V7zm-3 2h1v5H4V9zm-3 3h1v2H1v-2z"/>
          </svg>,
            title:"Rich Analytics",
            desc:"Gain clear insights through advanced reporting tools that help track performance, support decisions, and simplify data-driven planning",
        },
        {
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pie-chart" viewBox="0 0 16 16">
            <path d="M7.5 1.018a7 7 0 1 0 7 7.982h-7V1.018zM8.5 8h6.582a6.978 6.978 0 0 1-6.582 5.978V8zm0-1V1.018A6.978 6.978 0 0 1 15.082 7H8.5z"/>
          </svg>,
            title:"Smart Data Insights",
            desc:"Gain instant clarity with data-driven insights that help administrators monitor progress, identify trends, and make informed decisions with ease.",
        },
        {
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10.293 3.5a.5.5 0 0 1 .707 0l3 3a.5.5 0 0 1-.707.707L11 4.707V8.5a.5.5 0 0 1-1 0V4.707L8.354 6.854a.5.5 0 1 1-.708-.708l2.647-2.646zM4.5 8a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm3-2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5zm3-2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5z"/>
          </svg>,
            title:"Rich Analytics",
            desc:"Generate accurate, customizable reports that simplify academic and administrative tracking, ensuring smooth workflows across your institution.",
        },
        {
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-analytics" viewBox="0 0 16 16">
            <path d="M0 0h1v15h15v1H0V0zm6 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            <path d="M5.5 11a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3zm3-3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-6zm3-3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-9z"/>
          </svg>,
            title:"Advanced Reporting Tools",
            desc:"Visualize key metrics through intuitive dashboards that highlight student performance, staff efficiency, and overall school operations.",
        },
        {
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-trending-up" viewBox="0 0 16 16">
            <path d="M0 0h1v15h15v1H0V0zm15.293 3.5a.5.5 0 0 1 .707.707l-5 5a.5.5 0 0 1-.708 0L7.5 6.207l-3.146 3.147a.5.5 0 0 1-.708-.708l3.5-3.5a.5.5 0 0 1 .708 0L10 7.793l4.293-4.293z"/>
          </svg>,
            title:"Performance Dashboards",
            desc:"Access automated metrics that evaluate important parameters, offering a deeper understanding of school performance and areas for improvement.",
        },
        {
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
            <path d="M0 3a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1H0V3zm0 2h15v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5zm11 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>,
            title:"Intelligent Metrics System",
            desc:"Stay updated with live data monitoring that helps manage attendance, academics, finances, and daily activities without delays.",
        },
    ]
    const ProductUserData=[
        {
            title:"110+",
            desc:"Trusted by schools for efficient, modern, and streamlined daily management."
        }, 
        {
            title:"4M",
            desc:"Empowering institutions with fast, secure, smart, and reliable end-to-end operations."
        },
        {
            title:"99.99%",
            desc:"Delivering accurate insights to improve performance, communication, and school success."            
        },
        
    ]
  return (
    <section className='products'>
        <div className="container">
            <div className="title">
                <button className="btn btn-title">Product</button>
                <h2>Our <span className="span-color"> Featured </span> Products</h2>   
                <p>Explore powerful solutions built to simplify school tasks, improve communication, enhance productivity, and provide smooth administration for staff and students.    </p>
                <div className="product-btns">
                    <button className='btn btn-primary'>I'm Intrested</button>
                    <button className='btn btn-product'>Get started</button>
                </div>
            </div>
            <div className="products-grid">
                {productsData.map((product, index) => (
                    <div className="products-grid-item" key={index}>
                        <div className="product-icon">{product.icon}</div>
                        <h5>{product.title}</h5>
                        <p>{product.desc}</p>
                    </div>
                ))}
            </div>
            <div className="product-users">
                {ProductUserData.map((data, index) => (
                    <div className="product-user-grid" key={index}>
                        <h1>{data.title}</h1>
                        <p>{data.desc}</p>
                    </div>
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default Products