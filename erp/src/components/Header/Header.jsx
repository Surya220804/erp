import { IonIcon } from "@ionic/react";
import { menu, close } from "ionicons/icons";
import './Header.css'
import { useState } from 'react';
import logo from '../../assets/logo1.jpg'
const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const openMenu = () => {
        setNavOpen(true);
    }  
    const closeMenu = () => {
        setNavOpen(false);
    }   
  return (
    <header>
        <div className="container">
            <nav>
                <div className="nav-brand">
                    <a href="">
                        <img src={logo} alt="" />
                    </a>
                </div>
                    <div className="menu-icons open" onClick={openMenu}>
                    <IonIcon icon={menu} />
                    </div>
                    <div className={`nav-list ${navOpen ? 'active' : ''}`}>
                    <ul className="nav-menu">
                        <div className="menu-icons close" onClick={closeMenu}>
                            <IonIcon icon={close} />
                        </div>
                        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#products" className="nav-link">Products</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link"    >Contact</a></li>
                    </ul>
                    <ul className="nav-buttons">
                        <li className="nav-item"><a href="" className='btn btn-header'>App</a></li>
                        <li className="nav-item"><a href="" className='btn btn-header'>English</a></li>
                        <button className='btn btn-secondary'>Sign in</button>
                        <button className='btn btn-primary'>Create an account</button>
                    </ul>
                    </div>
            </nav>
        </div>
    </header>
  )
}

export default Header