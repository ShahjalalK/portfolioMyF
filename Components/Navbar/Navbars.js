import React, { useState } from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import { NavHashLink } from 'react-router-hash-link';
import './Navbars.css'
import {Fade, Flip} from 'react-reveal'

const Navbars = () => {
    const [Bars, setBars] = useState(false)
    const Change = () => {
        setBars(!Bars)
    }
    const ChangeManu = () => {
        setBars(!Bars)
    }

    const [Scroll, setScroll] = useState(false)
    const Scroler = () => {
        if (window.scrollY >= 80) {
            setScroll(true)

        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', Scroler)



    return (
        <>

            <nav className={Scroll ? 'navbars navbars-shirnk' : 'navbars'} variant="dark" expand="lg" fixed="top">
                <div className="container">
                    <div className="navbar-inner">
                        <div className="logo">                            
                        <Fade left><a className="logo-link">Shahjalal<span>K</span></a></Fade>
                        <Flip top><div className="sub-logo">FRONT-END DEVELOPER</div></Flip>

                        </div>
                        <div className={Scroll ? 'nav-manu active' : 'nav-manu'} onClick={Change}>
                            <i class={Bars ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className={Bars ? 'manu active' : 'manu'}>
                            <li><Link 
                                
                            to="about" onClick={Change} activeClassName="active" className="reActive" spy={true} smooth={true} duration={400} delay={500} hashSpy={true}  >About</Link></li>

                            <li><Link 
                                
                            to="experience" onClick={Change} activeClassName="active" className="reActive" spy={true} smooth={true}  duration={400} delay={500} hashSpy={true}>Experience</Link></li>

                            <li><Link 
                                
                            to="project" onClick={Change} activeClassName="active" className="reActive" spy={true} smooth={true}  duration={400} delay={500} hashSpy={true} >My Projects</Link></li>

                            <li><Link 
                                
                            to="contact" onClick={Change} activeClassName="active" className="reActive" spy={true} smooth={true}  duration={400} delay={500} hashSpy={true}>Contact</Link></li>
                        </ul>

                    </div>
                </div>

            </nav>
            <div className={Bars ? 'overflow active' : 'overflow'} onClick={ChangeManu}>
            </div>



        </>
    )
}

export default Navbars
