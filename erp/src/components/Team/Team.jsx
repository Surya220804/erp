import React from 'react'
import './Team.css'
import MemberImg from '../../assets/Member1.jpg'
const Team = () => {
    const TeamMembers = [
        {
            img:MemberImg,
            name:"Surya",
            role:"Developer",
        },
        {
            img:MemberImg,
            name:"Surya",
            role:"Developer",
        },
        {
            img:MemberImg,
            name:"Surya",
            role:"Developer",
        },
        {
            img:MemberImg,
            name:"Surya",
            role:"Developer",
        },
        {
            img:MemberImg,
            name:"Surya",
            role:"Developer",
        },
        {
            img:MemberImg,
            name:"Surya",
            role:"Developer",
        },
        {
            img:MemberImg,
            name:"Surya",
            role:"Developer",
        },
        {
            img:MemberImg,
            name:"Surya",
            role:"Developer",
        },
    ]
  return (
    <section className='team'>
        <div className="container">
            <div className="title">
                <button className="btn btn-title">Our Team</button>
                <h1>Meet Our <span className="span-color">Amazing</span>  Squad</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus velit recusandae in amet temporibus, ullam, nostrum reprehenderit quasi tempora veniam, laboriosam consequatur. Voluptatibus dolores, molestiae voluptatum esse aliquid dolore reprehenderit.</p>
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
                    <a href="" className='btn'>Explore Intergrations</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team