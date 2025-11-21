import React from 'react'
import './Team.css'
import MemberImg1 from '../../assets/Member1.jpg'
import MemberImg2 from '../../assets/Member2.Webp'
import MemberImg3 from '../../assets/Member3.jpg'
import MemberImg4 from '../../assets/Member4.jpg'
import MemberImg5 from '../../assets/Member5.jpg'
import MemberImg6 from '../../assets/Member6.jpg'
import MemberImg7 from '../../assets/Member7.jpg'
import MemberImg8 from '../../assets/Member8.jpg'


const Team = () => {
    const TeamMembers = [
        {
            img:MemberImg1,
            name:"Aravind Kumar",
            role:"Chief Technology Officer (CTO)",
        },
        {
            img:MemberImg2,
            name:"Priya Shanmugam",
            role:"Senior Software Engineer",
        },
        {
            img:MemberImg3,
            name:"Karthik",
            role:"DevOps Engineer",
        },
        {
            img:MemberImg4,
            name:"Divya ",
            role:"UI/UX Designer",
        },
        {
            img:MemberImg5,
            name:"Santhosh",
            role:"Data Scientist",
        },
        {
            img:MemberImg6,
            name:"Venkatesh",
            role:"QA Lead",
        },
        {
            img:MemberImg7,
            name:"Prabakar",
            role:"Network & Security Analyst",
        },
        {
            img:MemberImg8,
            name:"Vijay",
            role:"Project Manager",
        },
    ]
  return (
    <section className='team'>
        <div className="container">
            <div className="title">
                <button className="btn btn-title">Our Team</button>
                <h1>Meet Our <span className="span-color">Amazing</span>  Squad</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos omnis deleniti veniam sequi consequuntur.</p>
            </div>
            <div className="team-grid">
                {TeamMembers.map((member, index) => (
                    <div className="team-grid-item" key={index}>
                        <div className="team-member-img">
                            <img src={member.img} alt="" />
                        </div>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
            <div className="career-grid">
                <div className="career-grid-item">
                    <h1>Join Our Team</h1>
                </div>
                <div className="career-grid-item">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A obcaecati, illum nam inventore fugiat delectus commodi enim sint! Consequuntur labore sapiente iusto amet fuga quis molestiae aperiam et quisquam voluptatibus!</p>
                    <a href="" className='btn btn-carreer'>Explore Intergrations</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team