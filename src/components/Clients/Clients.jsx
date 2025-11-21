import React from 'react'
import './Clients.css'
import Marquee from "react-fast-marquee";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Clients = () => {
  const companies = [
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
  { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
  { name: "Tesla", logo: "https://logo.clearbit.com/tesla.com" },
  { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "Intel", logo: "https://logo.clearbit.com/intel.com" },
  { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
  { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" },
  { name: "Sony", logo: "https://logo.clearbit.com/sony.com" },
  { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
  { name: "Uber", logo: "https://logo.clearbit.com/uber.com" },
  { name: "Airbnb", logo: "https://logo.clearbit.com/airbnb.com" },
  { name: "PayPal", logo: "https://logo.clearbit.com/paypal.com" },
  { name: "Spotify", logo: "https://logo.clearbit.com/spotify.com" },
  { name: "Snapchat", logo: "https://logo.clearbit.com/snapchat.com" },
  { name: "Twitter", logo: "https://logo.clearbit.com/twitter.com" }
];
  return (
    <section className='client'>
        <div className="container">
            <div className="title">
            <button className='btn btn-title'>Our clients</button>
            <div className="rating">
            <p>Trusted by 20000+ Clients Worldwide</p>
            <div className='stars'>
            <AiFillStar size={28} color="#8b5cf6" /> 
              <AiFillStar size={28} color="#8b5cf6" />
              <AiFillStar size={28} color="#8b5cf6" />
              <AiFillStar size={28} color="#8b5cf6" />
              <AiOutlineStar size={28} color="gray" />
            </div>
      </div>
            <h1>They <span className='span-color'>Trust</span> Us</h1>
            </div>
           <div className="marquee-wrapper">
            <div className="marquee-row">
              <Marquee speed={50} gradient={false}>
                {companies.map((c, i) => (
                  <div key={i} className="company-item">
                    <div className="company-logo-box">
                      <img src={c.logo} alt={c.name} className="company-logo" />
                    </div>
                    <span>{c.name}</span>
                  </div>
                ))}
              </Marquee>
            </div>
              <Marquee speed={50} gradient={false} direction="right">
                {companies.map((c, i) => (
                  <div key={i} className="company-item">
                    <div className="company-logo-box">
                      <img src={c.logo} alt={c.name} className="company-logo" />
                    </div>
                    <span>{c.name}</span>
                  </div>
                ))}
              </Marquee>

x          </div>

        </div>
    </section>
    
  )
}

export default Clients