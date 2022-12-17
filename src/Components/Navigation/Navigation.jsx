import React, { useState }  from 'react'
import './styles.css'
import { NavLink, Link} from 'react-router-dom'

const Navigation = () => {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <nav className='nav'>
        <div className="logo">
          <NavLink to="/"><img src="./img/logo.png" alt="logo" className='logo_img'/></NavLink>
          <Link to="/"><span>Plantstore</span></Link>
        </div>
        <div className="nav__items">
          <NavLink to="/" className='nav_item'>Home</NavLink>
          <NavLink to="/store" className='nav_item'>Store</NavLink>
          <NavLink to="/about" className='nav_item'>About</NavLink>
          <NavLink to="/contact" className='nav_item'>Contact</NavLink>
        </div>
        <div className='ham_ico'>
          <img src="./img/hamburger-menu.svg" alt="ham-menu" onClick={()=>setMenuState((menuState)=> menuState=!menuState)}/>
        </div>
      </nav>

      {menuState && 
      <div className="mobile_menu">
        <div className='mobile_menu_top'>
          <div className="logo">
            <NavLink to="/"><img src="./img/logo.png" alt="logo" className='logo_img'/></NavLink>
            <Link to="/"><span>Plantstore</span></Link>
          </div>
          <div className='ham_ico'>
            <img src="./img/cross.svg" alt="ham-menu" onClick={()=>setMenuState((menuState)=> menuState=!menuState)}/>
          </div>
        </div>
        <div className="mobile_menu_items">
          <NavLink to="/" className='nav_item mobile_menu_item'>Home</NavLink>
          <NavLink to="/store" className='nav_item mobile_menu_item'>Store</NavLink>
          <NavLink to="/about" className='nav_item mobile_menu_item'>About</NavLink>
          <NavLink to="/contact" className='nav_item mobile_menu_item'>Contact</NavLink>
        </div>
      </div>
      }
      
    </>
  )
}

export default Navigation