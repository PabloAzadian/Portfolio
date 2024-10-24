import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import imageDark from "../../images/hero-img-dark.png"
import imageLight from "../../images/hero-img-light.png"
import "./Hero.css"
import { FaMapPin, FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

function Hero() {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className='container' id='home'>
        <div className='hero-upper-container'>
            <div className='hero-text'>
                <h3>Pablo Azadian</h3>
                <h1>FrontEnd Developer</h1>
                <h6>I build pixel-perfect, engaging, and accessible digital experiences.</h6>
                <h6> <FaMapPin/> Cologne, Germany</h6>
                <div className='hero-icons'>
                        <a 
                            href="https://github.com/PabloAzadian" 
                            aria-label="GitHub"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/pablo-azadian" 
                            aria-label="LinkedIn"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                        <a 
                            href="/Cv_Pablo_Azadian.pdf"
                            aria-label="Download CV"
                            download
                        >
                            <FaFileDownload />
                        </a>
                </div>
            </div>
            <div className='hero-img'>
                <img
                src={theme === 'light' ? imageLight : imageDark} />

            </div>
        </div>
        <div className='hero-lower-container'>
            <div className='tech-stack-container'>
                <h4>Tech Stack:</h4>
                <div className='skill-icons-container'>
                    <div className='d-flex flex-row'>
                        <div className='skill'>
                            <img src="https://skillicons.dev/icons?i=react" alt="React" className='skill-icon' />
                            <p>React</p>
                        </div>
                        <div className='skill'>
                            <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" className='skill-icon' />
                            <p>JavaScript</p>
                        </div>
                        <div className='skill'>
                            <img src="https://skillicons.dev/icons?i=html" alt="HTML" className='skill-icon' />
                            <p>HTML</p>
                        </div>
                        <div className='skill'>
                            <img src="https://skillicons.dev/icons?i=css" alt="CSS" className='skill-icon' />
                            <p>CSS</p>
                        </div>
                    </div>
                    <div className='d-flex flex-row'>
                    <div className='skill'>
                            <img src="https://skillicons.dev/icons?i=ts" alt="CSS" className='skill-icon' />
                            <p>Typescript</p>
                        </div>
                        <div className='skill'>
                            <img src="https://skillicons.dev/icons?i=tailwind" alt="CSS" className='skill-icon' />
                            <p>Tailwind</p>
                        </div>
                        <div className='skill'>
                            <img src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap" className='skill-icon' />
                            <p>Bootstrap</p>
                        </div>
                        <div className='skill'>
                            <img src="https://skillicons.dev/icons?i=git" alt="Git" className='skill-icon' />
                            <p>Git</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='buttons-container'>
                <a href="#projects">My Projects</a>
                <a href="#contact">Contact Me</a>
            </div>
        </div>
    </div>
  )
}

export default Hero