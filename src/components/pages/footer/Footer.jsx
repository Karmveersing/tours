import React from 'react'
import './footer.css'
import { FaLocationArrow } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { FiMail } from "react-icons/fi";
const Footer = () => {
    return (
        <>
            <nav>
                <div id='footerIcon'>
                    <a href="http://localhost:3001/product_cat/sweets">
                        <img src={"https://jodhpursweets.com/wp-content/uploads/2022/10/specialsawan.png"} />
                    </a>
                    <a href="http://localhost:3001/product_cat/namkeen">
                        <img src="https://jodhpursweets.com/wp-content/uploads/2022/10/nameekn.png" />
                    </a>

                    <img src="https://jodhpursweets.com/wp-content/uploads/2022/10/khoya.png" />
                    <img src="https://jodhpursweets.com/wp-content/uploads/2022/10/dryfruit.png" />
                    <img src="https://jodhpursweets.com/wp-content/uploads/2022/10/desighees.png" />
                    <img src="https://jodhpursweets.com/wp-content/uploads/2022/10/nameekn.png" />

                </div>
            </nav>
            <div id='footerLinks'>


                <div className='footernav'>
                    <img src="https://jodhpursweets.com/wp-content/uploads/elementor/thumbs/Jodhpur_sweets_logo-pvuhgirt6vcnfxz7myr6xfu7xk17zqs5lsgmy760aw.png" />
                    <div className='footerdetails'> <FaLocationArrow />
                        <h5 > Sardarpura,Jodhpur-INDIA.</h5>
                    </div>
                    <div className='footerdetails'>
                        <ImMobile />

                        <h5 >Phone: +91 7014018057
                        </h5>
                    </div>
                    <div className='footerdetails'>
                        <FiMail />
                        <h5 >
                            karmveersingh2003@gmail.com</h5>
                    </div>

                </div>
                <div className='footernav'>
                    <h3 id='shopnow'>SHOP NOW</h3>
                    <div className='footerdetails'>
                        <h5 > <a href="http://localhost:3001/product_cat/sweets">Manwaar</a>


                        </h5>
                    </div>
                    <div className='footerdetails'>
                        <h5 >
                            <a href="http://localhost:3001/product_cat/namkeen">Namkeen </a>
                        </h5>
                    </div>
                    <div className='footerdetails'>
                        <h5 >
                            <a href="http://localhost:3001/product_cat/sweets">Sawan Special</a>
                        </h5>
                    </div>
                    <div className='footerdetails'>

                        <h5 > <a href="http://localhost:3001/product_cat/sweets">Sweets</a>
                        </h5>
                    </div>
                </div>
                <div className='footernav'>
                    <h3>USEFUL LINKS</h3>
                    <div className='footerdetails'>
                        <h5 > <a href="http://localhost:3001/page_id/contact">Contact Us</a>


                        </h5>
                    </div>

                </div>
                <div className='footernav'>
                    <h3>MORE LINKS</h3>
                    <div className='footerdetails'>
                        <h5 > <a href="https://www.instagram.com/_karmveersing/">Instagram</a>
                        </h5>
                    </div>
                <div className='footerdetails'>
                        <h5 > <a href="https://www.linkedin.com/in/karamveer-singh-222ba5250">Linked In</a>
                        </h5>
                    </div>
                    <div className='footerdetails'>
                        <h5 > <a href="https://www.linkedin.com/in/karamveer-singh-222ba5250">About Us</a>
                        </h5>
                    </div>


                </div>
                    




            </div>
        </>
    )
}

export default Footer
