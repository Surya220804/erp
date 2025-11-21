  import React from 'react'
  import './Educare.css'
  import flower from '../../assets/flower.jpg'
  import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
  import { FaPlay } from 'react-icons/fa';
  const Educare = () => {
    return (
  <section>
    <div className="container">
       <div className="educare-content">
        <div className="top-left-icon">
          <SignalCellularAltIcon className='graph-icon'/>
          <span className="pro-badge">PRO</span>
        </div>
        <div className="top-right-icon">
          <img src={flower} alt="" />
        </div>
        <div className="hero-main">
          <h1>Let Educare boost your business!</h1>
          <p className="hero-description">
            Gain millions of schools that are already using Educare's Educational ERP system and start growing your
            reach, revenue and sales
          </p>
        </div>
        <div className="bottom-left-badge">
         <div className="dashboard-container">
                  <div className="dashboard-circle">
                       <span>75%</span>
                   </div>
                   <p>Hello this name <span className='block-span'>hello</span> </p>
               </div>
        </div>
        <div className="cta-buttons">
          <button className="btn btn-title btn-educare"><span><FaPlay/></span>Need more info?</button>
          <button className="btn btn-optional">Connect for demo</button>
        </div>
      </div>
    </div>
  </section>

    )
  }

  export default Educare