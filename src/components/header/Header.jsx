import { useEffect, useState } from 'react';
import { links } from '../../Data';
import './header.css';

export function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const [headerActive, setHeaderActive] = useState(false);

    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setHeaderActive(true);
        } else {
            setHeaderActive(false);
        }
        // Close the menu when scrolling
        setMenuActive(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header fixed-top ${headerActive ? 'active' : ''}`}>
            <div className="container">
                <div className="nav-bar d-flex align-items-center justify-content-between">
                    <a href="/" className="logo d-flex">
                        <i className='bx bx-dumbbell bx-tada'></i>
                        Ultra Fitness
                    </a>
                    <nav className={`nav-items d-flex align-items-center list-unstyled ${menuActive ? 'active' : ''}`}>
                        {links.map(({ name, path }, index) => (
                            <li key={index}>
                                <a href={path}>{name}</a>
                            </li>
                        ))}
                    </nav>
                    <a href="#booking" className="link-btn">Book Free Intro Session</a>
                    <div 
                        id="menu-btn" 
                        className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`} 
                        onClick={handleMenuToggle}
                    ></div>
                </div>
            </div>
        </header>
    );
}