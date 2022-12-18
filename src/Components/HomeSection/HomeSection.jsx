import React from 'react'
import { Link } from 'react-router-dom' 
import './styles.css'

const HomeSection = () => {
  return (
    <>
        <div className="header">
            <div className="header_content">
                <h1 className="header_title">Nature is more <br/> important</h1>
                <p className="header_subtitle">Plants are extraordinary living things. Although they seem simple, they are actually, in some ways, more complicated than us</p>
                <Link to="/store" className='btn'>More</Link>
            </div>
        </div>
    </>
  )
}

export default HomeSection