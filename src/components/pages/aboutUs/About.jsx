import React from 'react'
import "./about.css"
import jitu from "./jitendra.jpg"
import karamveer from "./karamveer.jpg"
import esha from "./esha.jpg"
import rishabsir from "./rishabsir.jpg"
import Footer from '../footer/Footer'

const About = () => {
    return (
        <>
        <div className='bgimgabout'>
            <div className='aboutmain'>

                <div className='somewords'>
                    <h3>SOME WORDS ABOUT US
                    </h3>
                    <h1>Well-coordinated teamwork speaks About Us</h1>
                </div>
                <div className='aboutinfo'>
                    <h3>The birth of Jodhpur Sweets</h3>
                    <p> It was conceptualized 51 years down the lane by Shri Kundan Lalji famously known as Sethji in the year 1965 in Kota. Shri Kundan Lalji belonged to the land of rich culture and heritage</p>
                </div>
                <div className='aboutinfo'>
                    <h3>Fine traditional sweets</h3>
                    <p>
                        The legacy of such fine traditional sweets was brought back to its home town by Sethji’s grandson Mr. Suresh Vyas who established the Jodhpur Sweets branding Jodhpur on 2nd June, 1991.</p>
                </div>
            </div>
            <div className='who'>
                <h1>WHO WE ARE ? </h1>
            </div>
            <div className='us'>
                <div>
                    <img src={karamveer} />
                </div>
                <div>
                    <p className='ourself'>Karamveer Singh Rathore is a dedicated and compassionate individual. He is known for his selfless acts of kindness and generosity. His efforts have touched the lives of many, making a positive impact in the community. Karamveer's commitment to serving others serves as an inspiration to all.</p>
                </div>
            </div>
            <div className='us'>
                <div className='ourself'>
                    <p>"Esha Dhoot is a talented young actress known for her captivating performances. With her natural charm and dedication, she has won the hearts of audiences worldwide. Esha's passion for acting shines through in every role she portrays, making her a rising star in the entertainment industry. Her versatility and remarkable talent make her a force to be reckoned with. Esha Dhoot is definitely one to watch out for in the coming years!"</p>
                </div>
                <div>
                    <img src={esha} />
                </div>
            </div>
            <div className='us'>
                <div>
                    <img src={jitu} />
                </div>
                <div>
                    <p className='ourself'>Jitendra Parmar is a talented individual with a passion for innovation. He excels in problem-solving and has a strong work ethic. Jitendra's dedication and positive attitude make him a valuable team member. He consistently delivers high-quality results and is always eager to learn and grow. Jitendra's commitment to excellence sets him apart and makes him a valuable asset in any endeavor.</p>
                </div>
            </div>

            <div className='mentor'>
                <h1>our mentor</h1>
            </div>

            <div className='teacher'>
                <div>
                    <img src={rishabsir} />
                </div>
                <div>
                    <p className='ourself'>
                        Dear Rishab Sir,<br></br>

                        I am writing this heartfelt note to express my deepest gratitude for your exceptional dedication and commitment to teaching. Your unwavering enthusiasm and profound knowledge have had an immeasurable impact on my educational journey, and I am truly grateful to have had the privilege of being your student.
                        Thank you, Rishab Sir, for the invaluable lessons, support, and inspiration you have provided. Your teaching has made a lasting impact on me, and I will forever be grateful for the knowledge and guidance you have bestowed upon me. Your passion for teaching and unwavering dedication to your students have made you an exceptional educator, and I consider myself incredibly fortunate to have been under your tutelage.
                    </p>
                </div>
            </div>
            </div>
<Footer/>
        </>
    )
}

export default About
