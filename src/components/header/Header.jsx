import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to="/"><img className='header_icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmm_mWhIl2JrIrx2mrAZCSyUUVJG1gjb9Xw&usqp=CAU'/></Link>
            <Link to="/product_cat/sweets" style={{textDecoration: "none"}}><span>Sweets</span></Link>
            <Link to="/product_cat/namkeen" style={{textDecoration: "none"}}><span>Namkeen</span></Link>
            <Link to="/product_cat/manwaar" style={{textDecoration: "none"}}><span>Manwaar</span></Link>
            <Link to="/page_id/aboutus" style={{textDecoration: "none"}}><span>About Us</span></Link>
            <Link to="/page_id/contact" style={{textDecoration: "none"}}><span>Contact</span></Link>
            <Link to="/login_page" style={{textDecoration: "none"}}><span>Login</span></Link>
        </div>
    </div>
  )
}
export default Header;