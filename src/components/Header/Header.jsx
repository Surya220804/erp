import { IonIcon } from "@ionic/react";
import { menu, close } from "ionicons/icons";
import './Header.css'
import { useState } from 'react';
import logo from '../../assets/logo1.jpg'
    
const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="left">
                        <a href="#" className="nav-brand">
                            <img src={logo} alt="logo" />
                        </a>
                        <ul className="nav-menu">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Developers</a></li>
                            <li><a href="#">Resource</a></li>
                            <li><a href="#" className="whitespace">NFT Score</a></li>
                        </ul>
                    </div>
                    <div className="menu-icons open" onClick={() => setNavOpen(true)}>
                        <IonIcon icon={menu} />
                    </div>
                    <div className={`right ${navOpen ? "active" : ""}`}>
                        <div className="menu-icons close" onClick={() => setNavOpen(false)}>
                            <IonIcon icon={close} />
                        </div>
                        {/* for mobile */}
                         <ul className="mobile-nav-menu">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Developers</a></li>
                            <li><a href="#">Resource</a></li>
                            <li><a href="#" className="whitespace">NFT Score</a></li>
                         </ul>
                        <ul className="nav-buttons">
                            <li><a href="#" className="btn">App</a></li>
                            <li><a href="#" className="btn">English</a></li>
                            <button className="btn btn-secondary">Sign in</button>
                            <button className="btn btn-primary">Create an account</button>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
