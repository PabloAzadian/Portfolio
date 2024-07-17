import React from 'react'
import "./About.css"
import { VscTerminalCmd, VscChromeMinimize} from "react-icons/vsc";
import { MdOutlineRectangle } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaWindowMinimize } from "react-icons/fa6";

function About() {
  return (
    <section className='about'>
        <div className='container'>
            <div className='about-terminal'>
                <div className='window-tab'>
                    <div className='tab-route'>
                        < VscTerminalCmd/>
                        <h4> PabloAzadian/Portfolio/About Me</h4>
                    </div>
                    <div className='tab-icons'>
                        <VscChromeMinimize/>
                        <MdOutlineRectangle/>
                        <IoMdClose/>
                    </div>
                </div>
                <div className='terminal-window'>
                    <h4>starting aboutme section</h4>
                    <h4>...</h4>
                    <h4>...</h4>
                    <h4>...</h4>

                    <h4> > I've always been a computer geek ever since I was seven years old. My journey into the world of programming
                    started when I was fifteen, and I discovered the magic of bringing ideas to life with a few lines of code. From my
                    first <span>"Hello World"</span> application, I knew I had found my passion. Software development is not just a job for me; it's an
                    exciting challenge that keeps me learning and pushing my limits every day. Below, you'll find projects I've completed
                    that showcase my skills and dedication to creating high-quality software.
                    </h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About