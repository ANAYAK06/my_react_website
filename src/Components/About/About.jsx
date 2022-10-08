import React from 'react'
import './About.css'
import {BsAward} from 'react-icons/bs'
import {BsBank} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/about.jpg'

function About() {
  return (
    <section id='about'>
        <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="">
            <img src={ME} alt="" className='about_me-image' />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about-card'>
            <BsAward className='about_icon ' />
              <h5> Total Experience</h5>
              
              <small> 11+ Years Working</small>
              
            </article>
            <article className='about-card'>
            <BsBank className='about_icon ' />
              <h5>Experience in Bank</h5>
              
              <small> 1 Year</small>
              
            </article>
            <article className='about-card'>
            <VscFolderLibrary className='about_icon ' />
              <h5>Projects Experience</h5>
              
              <small> 9 + Years</small>
              
            </article>

          </div>
          <p>
            Working on different areas of Web app development.   Last 9+ years working on a ERP app which is  mostly suitable for construction companies. Also have knowledge in Accounts field and different areas of Business Management.

          </p>
          <a href="http://" className='btn btn-primary'>Lt's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About