import React from 'react'
import "./Projects.css"
import astral from "../../images/astralhero.webp"
import keno from "../../images/keno1.png"
import { FaGithub, FaPlayCircle } from "react-icons/fa";

function Projects() {
  return (
    <section className='container'>
        <h1 className='title'>My Projects</h1>
        <div className='projects-container'>
            <div className='project'>
                <img
                    src={astral}
                    height={"200px"}
                />
                <div className='project-text'>
                    <h2>Astral Eats</h2>
                    <p>Built a JavaScript/React website that allows users to order “Alien” food to their home planets. This project
                        focuses on delivering a user-friendly experience with intuitive navigation and visually appealing images created
                        using Midjourney AI. Key features include responsive design, dynamic content rendering, and seamless
                        integration with a mock backend.</p>
                    <div className='footer'>
                        
                        
                        <div className='technologies-container'>
                            <div className='technologie'>
                                React
                            </div>
                            <div className='technologie'>
                                React
                            </div>
                            <div className='technologie'>
                                React
                            </div>
                            <div className='technologie'>
                                React
                            </div>
                            <div className='technologie'>
                                React
                            </div>
                        </div>
                        <div className='links-container'>
                            <a 
                                href="https://github.com/PabloAzadian" 
                                aria-label="GitHub"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>

                            <a 
                                href="https://astraleats.vercel.app/" 
                                aria-label="Demo"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaPlayCircle />
                            </a>
                        </div>
                    </div>

                </div>

            </div>
            
            <div className='project'>
                <img
                    src={astral}
                    height={"200px"}
                />
                <div className='project-text'>
                    <h2>KenoTech</h2>
                    <p>Developed a hardware store ecommerce platform using JavaScript and React. The platform features a clean
                    and responsive design, intuitive product search and filtering, a secure checkout process, and a comprehensive
                    user account management system. This project showcases my ability to build functional ecommerce solutions
                    with efficient state management..
                    </p>
                    <div className='footer'>
                        
                        
                        <div className='technologies-container'>
                            <div className='technologie'>
                                React
                            </div>
                            <div className='technologie'>
                                React
                            </div>
                            <div className='technologie'>
                                React
                            </div>
                            <div className='technologie'>
                                React
                            </div>
                            <div className='technologie'>
                                React
                            </div>
                        </div>
                        <div className='links-container'>
                            <a 
                                href="https://github.com/PabloAzadian/KenoTech" 
                                aria-label="GitHub"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>

                            <a 
                                href="https://keno-tech.vercel.app/" 
                                aria-label="Demo"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaPlayCircle />
                            </a>
                        </div>
                    </div>

                </div>

            </div>

            <div className='project'>
                <img
                    src={astral}
                    height={"200px"}
                />
                <div className='project-text'>
                    <h2>Astral Eats</h2>
                    <p>Built a JavaScript/React website that allows users to order “Alien” food to their home planets. This project
                        focuses on delivering a user-friendly experience with intuitive navigation and visually appealing images created
                        using Midjourney AI. Key features include responsive design, dynamic content rendering, and seamless
                        integration with a mock backend.</p>
                    <div className='footer'>
                        
                        
                        <div className='technologies-container'>
                            <div className='technologie'>
                                React
                            </div>
                            <div className='technologie'>
                                React
                            </div>
                            <div className='technologie'>
                                React
                            </div>
                            <div className='technologie'>
                                React
                            </div>
                            <div className='technologie'>
                                React
                            </div>
                        </div>
                        <div className='links-container'>
                            <a 
                                href="https://github.com/PabloAzadian/astraleats" 
                                aria-label="GitHub"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>

                            <a 
                                href="https://astraleats.vercel.app/" 
                                aria-label="Demo"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaPlayCircle />
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section>
  )
}

export default Projects