import React from 'react'
import './Portfolio.css'
import {data } from './portfoliodata'
import {BsGithub} from 'react-icons/bs'
import {BsDisplay} from 'react-icons/bs'



function Portfolio() {
  return (
    <section id='portfolio'>
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio_container">
            {
               data.map(({id,image,title,demo,github})=>{
                return(
                    
                    <article key={id} className='portfolio_item'>
                        <div className='p-browser'>
                        <div className="p-circle r"></div>
                        <div className="p-circle y"></div>
                        <div className="p-circle g"></div>
                        </div>
                    <div className='portfolio_item-image'>
                        <img src={image} alt="" className='p_item-image' />
                    </div>
                    
                    
                    <div className='portfolio_item-cta'>
                        <a href={github} ><BsGithub className='p-icon'  /></a>
                        <a href={demo}><BsDisplay  className='p-icon' /></a>
                        
                    </div>
    
                </article  >
                
                )
               })
               

            }
        </div>


        

    </section>
  )
}

export default Portfolio