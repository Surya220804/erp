import React from 'react'
import './Educare.css'
import flower from '../../assets/flower.jpg'
const Educare = () => {
  return (
  <section>
  <div className="container">
    <div className="edu-title">
      <div className="heading-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-trending-up" viewBox="0 0 16 16">
            <path d="M0 0h1v15h15v1H0V0zm15.293 3.5a.5.5 0 0 1 .707.707l-5 5a.5.5 0 0 1-.708 0L7.5 6.207l-3.146 3.147a.5.5 0 0 1-.708-.708l3.5-3.5a.5.5 0 0 1 .708 0L10 7.793l4.293-4.293z"/>
          </svg>
        <h1>Let Educare boost your business</h1>
        <img src={flower} alt="Small Image" className="heading-image" />
      </div>
      <div className="dashboard-content">
      <div className="dashboard-container">
                <div className="dashboard-circle">
                    <span>75%</span>
                </div>
                <p>Hello this name </p>
            </div>
         <p className='educare-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus harum qui consequatur temporibus ut blanditiis earum commodi possimus? Necessitatibus, corrupti? Impedit temporibus cupiditate autem blanditiis, molestias distinctio in sed!</p> 
     </div>
            <div className="product-btns">
            <button className='btn btn-primary'>I'm Interested</button>
            <button className='btn btn-secondary'>Get started</button>
        </div>
    </div>
  </div>
</section>

  )
}

export default Educare