// src/Components/Navbar/Navbar.js
import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { ThemeContext } from '../../ThemeContext';
import "./Navbar.css"

const CustomNavbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Navbar bg={theme} variant={theme} expand="lg">
            <Container>
                <Navbar.Brand href="#home">PabloAzadian</Navbar.Brand>

                <button className="switch-button" onClick={toggleTheme}>
                    {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
                
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
