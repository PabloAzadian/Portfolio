// src/Components/Navbar/Navbar.js
import React, { useContext, useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { ThemeContext } from '../../ThemeContext';
import "./Navbar.css"
import { FaMoon, FaSun  } from "react-icons/fa";


const CustomNavbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isOn, setIsOn] = useState(theme === 'dark');

    const handleToggle = () => {
        toggleTheme();
        setIsOn(!isOn);
    };

    
    useEffect(() => {
        setIsOn(theme === 'dark');
    }, [theme]);

    return (
        <Navbar bg={theme} variant={theme} expand="lg">
            <Container className="w-100 d-flex justify-content-between">
                
                    <Navbar.Brand href="#home">PabloAzadian</Navbar.Brand>
                    
                    <div className="switch-container">
                        <FaSun className="icon sun-icon" />
                        <label className="switch">
                            <input type="checkbox" checked={isOn} onChange={handleToggle} />
                            <span className="slider"></span>
                        </label>
                        <FaMoon className="icon moon-icon" />
                     </div>
                    
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
                
                
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
