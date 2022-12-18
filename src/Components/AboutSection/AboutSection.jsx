import React from 'react'
import { Link } from 'react-router-dom' 
import './styles.css'

const AboutSection = () => {
  return (
    <>
        <div className="about_header">
            <div className="header_content">
                <h1 className="header_title">Who we are</h1>
                <p className="header_subtitle">Plants are extraordinary living things. Although they seem simple, they are actually, in some ways, more complicated than us</p>
                <Link to="/contact" className='btn'>Contact</Link>
            </div>
        </div>
    </>
  )
}

export default AboutSection