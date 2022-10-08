import React from 'react'
import './Experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoJavascript} from 'react-icons/io'
import {FaBootstrap} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {DiCss3} from 'react-icons/di'
import {IoLogoNodejs} from 'react-icons/io'
import {SiMongodb} from 'react-icons/si'
import {DiMsqlServer} from 'react-icons/di'
import {SiDjango} from 'react-icons/si'
import {IoLogoPython} from 'react-icons/io'
function Experience() {
  return (
    <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience_container">
        <div className="expereince_forntend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <AiFillHtml5 className ='experience_details-icon'/>
            <div>
            <h4>HTML</h4>
            <div className='experience_progress'>
                <div className='experience_progress-bar html '></div>
            </div>
            

            </div>
            </article>
            <article className='experience_details'>
            <IoLogoJavascript className ='experience_details-icon'/>
            <div>
            <h4>JavaScripts</h4>
            <div className='experience_progress'>
                <div className='experience_progress-bar javascript'></div>
            </div>
            </div>

            </article>
            <article className='experience_details'>
            <FaBootstrap className ='experience_details-icon'/>
           <div>
           <h4>Bootstrap</h4>
           <div className='experience_progress'>
                <div className='experience_progress-bar bootstrap'></div>
            </div>
           </div>

            </article>
            <article className='experience_details'>
            <FaReact className ='experience_details-icon'/>
            <div>
            <h4>React</h4>
            <div className='experience_progress'>
                <div className='experience_progress-bar react'></div>
            </div>
            </div>

            </article>
            <article className='experience_details'>
            <DiCss3 className ='experience_details-icon '/>
           <div>
           <h4>CSS</h4>
           <div className='experience_progress'>
                <div className='experience_progress-bar css'></div>
            </div>
           </div>

            </article>
          </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <IoLogoNodejs className ='experience_details-icon'/>
            <div>
            <h4>NodeJs</h4>
            <div className='experience_progress'>
                <div className='experience_progress-bar'></div>
            </div>

            </div>
            </article>
            <article className='experience_details'>
            <SiMongodb className ='experience_details-icon'/>
            <div>
            <h4>MongoDB</h4>
            <div className='experience_progress'>
                <div className='experience_progress-bar'></div>
            </div>

            </div>
            </article>
            <article className='experience_details'>
            <DiMsqlServer className ='experience_details-icon'/>
            <div>
            <h4>SQL</h4>
            <div className='experience_progress'>
                <div className='experience_progress-bar'></div>
            </div>
            </div>

            </article>
            <article className='experience_details'>
            <SiDjango className ='experience_details-icon'/>
            <div>
            <h4>Django</h4>
            <div className='experience_progress'>
                <div className='experience_progress-bar'></div>
            </div>

            </div>
            </article>
            <article className='experience_details'>
            <IoLogoPython className ='experience_details-icon'/>
           <div>
           <h4>Python</h4>
           <div className='experience_progress'>
                <div className='experience_progress-bar'></div>
            </div>
           </div>

            </article>
          </div>
        </div>

      </div>


    </section>
  )
}

export default Experience