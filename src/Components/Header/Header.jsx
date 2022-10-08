import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../assets/me.png'


function Header() {
  return (
    <header>
        <div className=" header_container">
            <div className="left_container">
                <div className="left_container-wrapper">
                    <h2>Hello, My Name is </h2>
                    <h1>Anoop Narayanan</h1>
                    <div className="download_cv">
                        <CTA />
                    </div>
                </div>

            </div>
            <div className="right_container">
                <div className='color-bg i-bg'>
                </div>
                <img src={me} alt="" className="i-img" />
            </div>
        </div>

    </header>
  )
}

export default Header