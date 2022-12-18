import React from 'react'
import { Link } from 'react-router-dom' 
import './styles.css'

const StoreSection = () => {
  return (
    <>
        <div className="store_header">
            <div className="header_content">
                <h1 className="header_title">Bring comfort to<br/>your home</h1>
                <p className="header_subtitle">Plants are extraordinary living things. Although they seem simple, they are actually, in some ways, more complicated than us</p>
                <Link to="/about" className='btn'>About</Link>
            </div>
        </div>
    </>
  )
}

export default StoreSection