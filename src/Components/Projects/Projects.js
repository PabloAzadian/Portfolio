import React, {useContext} from 'react'
import "./Projects.css"
import astral from "../../images/astralhero.webp"
import keno from "../../images/Kenoss.png"
import imageDark from "../../images/hero-img-dark.png"
import imageLight from "../../images/hero-img-light.png"
import { ThemeContext } from '../../ThemeContext';
import { FaGithub, FaPlayCircle } from "react-icons/fa";

function Projects() {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <section className='container' id='projects'>
        <h1 className='title'>My Projects</h1>
        
        <div className='projects-container'>
            <div className='project'>
                <img
                    src={astral}
                    height={"200px"}
                />
                <div className='project-text'>
                    <div className='header'>
                        <h2>Astral Eats</h2>
                        <div className='technologies-container'>
                            <div className='technologie'>
                                React
                            </div>
                            <div className='technologie'>
                                JavaScript
                            </div>
                            <div className='technologie'>
                                Bootstrap
                            </div>
                        </div>
                    </div>
                    
                    <p>Built a JavaScript/React website that allows users to order “Alien” food to their home planets. This project
                        focuses on delivering a user-friendly experience with intuitive navigation and visually appealing images created
                        using Midjourney AI. Key features include responsive design, dynamic content rendering, and seamless
                        integration with a mock backend.</p>
                        <div className='links-container'>
                            <a  
                                className='link-button'
                                href="https://github.com/PabloAzadian/astraleats" 
                                aria-label="GitHub"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                                <span>Repository</span>
                            </a>
                            
                        
                        
                            <a 
                                className='link-button'
                                href="https://astraleats.vercel.app/" 
                                aria-label="Demo"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaPlayCircle />
                                Live Demo
                            </a>
                        </div>
                    

                </div>

            </div>
            
            <div className='project'>
                <img
                    src={keno}
                    height={"200px"}
                />
                <div className='project-text'>
                    <div className='header'>
                        <h2>KenoTech</h2>
                        <div className='technologies-container'>
                            <div className='technologie'>
                                React
                            </div>
                            <div className='technologie'>
                                JavaScript
                            </div>
                            <div className='technologie'>
                                Bootstrap
                            </div>
                        </div>
                    </div>
                    <p>Developed a hardware store ecommerce platform using JavaScript and React. The platform features a clean
                    and responsive design, intuitive product search and filtering, a secure checkout process, and a comprehensive
                    user account management system. This project showcases my ability to build functional ecommerce solutions
                    with efficient state management.
                    </p>

                    <div className='links-container'>
                        <a  
                            className='link-button'
                            href="https://github.com/PabloAzadian/KenoTech" 
                            aria-label="GitHub"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span>Repository</span>
                        </a>
                        
                    
                    
                        <a 
                            className='link-button'
                            href="https://keno-tech.vercel.app/" 
                            aria-label="Demo"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaPlayCircle />
                            Live Demo
                        </a>
                    </div>

                </div>

            </div>

            <div className='project'>
                <img
                    src={theme === 'light' ? imageLight : imageDark}
                    height={"200px"}
                />
                <div className='project-text'>
                    <div className='header'>
                        <h2>Personal Portfolio</h2>
                        <div className='technologies-container'>
                            <div className='technologie'>
                                React
                            </div>
                            <div className='technologie'>
                                JavaScript
                            </div>
                        </div>
                    </div>
                    <p>This project is my personal portfolio website built with React and JavaScript. 
                        It showcases my skills, projects, and experience in a clean and professional design.
                        The site features a dark/light mode toggle, responsive layout, and smooth animations
                        to enhance user experience. Through this project, I demonstrate my ability to create
                        visually appealing and functional web applications, as well as my proficiency in
                        modern web development technologies.</p>
                    <div className='links-container'>
                        <a  
                            className='link-button'
                            href="https://github.com/PabloAzadian/Portfolio" 
                            aria-label="GitHub"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span>Repository</span>
                        </a>
 
                        <a 
                            className='link-button'
                            href="#home"
                            aria-label="Demo" 
                            rel="noopener noreferrer"
                        >
                            <FaPlayCircle />
                            Live Demo
                        </a>
                    </div>

                </div>

            </div>

        </div>
    </section>
  )
}

export default Projects