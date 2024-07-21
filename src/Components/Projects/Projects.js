import React from 'react'
import "./Projects.css"
import astral from "../../images/astralss.png"
import keno from "../../images/keno1.png"

function Projects() {
  return (
    <section className='container'>
        <h1 className='title'>My Projects</h1>
        <div className='projects-container'>
            <div className='project'>
                <img
                    src={astral}
                    height={"100px"}
                />
                <div className='project-text'>
                    <h2>Astral Eats</h2>
                    <p>Built a JavaScript/React website that allows users to order “Alien” food to their home planets. This project
                        focuses on delivering a user-friendly experience with intuitive navigation and visually appealing images created
                        using Midjourney AI. Key features include responsive design, dynamic content rendering, and seamless
                        integration with a mock backend.</p>
                    <div className='technologies-container'>
                        <div className='techonologie'>
                            React
                        </div>
                        <div className='techonologie'>
                            React
                        </div>
                        <div className='techonologie'>
                            React
                        </div>
                        <div className='techonologie'>
                            React
                        </div>
                        <div className='techonologie'>
                            React
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section>
  )
}

export default Projects