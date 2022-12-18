import React from 'react'
import { Link } from 'react-router-dom' 
import './styles.css'

const ConectSection = () => {
  return (
    <>
        <div className="conect_header">
            <div className="header_content">
                <h1 className="header_title">Intertwine roots</h1>
                <p className="header_subtitle">Plants are extraordinary living things. Although they seem simple, they are actually, in some ways, more complicated than us</p>
                <Link to="/store" className='btn'>More</Link>
            </div>
        </div>
    </>
  )
}

export default ConectSection