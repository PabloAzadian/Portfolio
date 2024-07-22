import React from 'react'
import "./Contact.css"
import { MdOutlineEmail } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa"

function Contact() {
  return (
    <section className='contact' id="contact">
        <div className='container contact-info'>
        <h2>Contact Me</h2>
        <p>If you’d like to get in touch, feel free to reach out via:</p>
        <div className='contact-buttons'>
            
            <a 
                href="mailto:pabloazadian09@gmail.com" 
                aria-label="Email" 
                rel="noopener noreferrer"
            >
                <MdOutlineEmail />
                pabloazadian09@gmail.com
            </a>

            <a 
                href="https://www.linkedin.com/in/pablo-azadian" 
                aria-label="LinkedIn"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FaLinkedin />
                LinkedIn <GoArrowUpRight/>
            </a>
        </div>

        </div>
    </section>
  )
}

export default Contact