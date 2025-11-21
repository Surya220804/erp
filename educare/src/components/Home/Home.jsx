import React from 'react'
import './Home.css'
import DashboardImg from '../../assets/dashboard.jpg'
const Home = () => {
  return (
    <section className='home'>
            <div className="home-grid">
                <div className="home-grid-items home-content">
                    <h1>Modern <span className='span-color'>ERP</span> solution designed
                    <span className='block-span'>for Your <span className='span-color'>School</span></span></h1>
                    <p>Streamline your school's operations with our comprehensive ERP solution, designed to enhance efficiency .</p>
                    <div className="home-btns">
                        <button className='btn btn-primary'>Get Started</button>
                        <button className='btn btn-secondary'>Pricing</button>
                    </div>
                </div>
                <div className="home-grid-items">
                    <img src={DashboardImg} alt="" className='home-img' />
                    <span className="image-dot"></span>
                </div>
            </div>
    </section>
  )
}

export default Home