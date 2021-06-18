import React, { useEffect } from 'react'
import { Button, Carousel } from 'react-bootstrap'
import './Hero.css'
import img1 from '../../image/4.png'
import img2 from '../../image/2.jpg'
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js'
import {Slide , Zoom} from 'react-reveal'



const Hero = () => {
  
    return (
        <>
         
            <section className="hero" id="about">
            <Particles id="particles-js"
            params={{
                particles: {
                    number: {
                        value: 75,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    size: {
                        value: 2,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 6
                        }
                    },
                    move: {
                        speed: 1
                    },
                  
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            	
                    
                 }    
            }}    
        />

                <Carousel indicators={false} slide={false}>


                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />



                    
                      <Carousel.Caption>
                      <Slide top>
                            <h3>Hello! My name is SHAHJALAL KHAN</h3>
                            <p>Hey! Are you looking For a Web developer or React developer? I have two years of experience and working to make your development faster, easier and efficient. Available 24/7 get in touch to discuss details.</p>
                            <div className="btn">
                                {/* <Link href="https://fontawesome.com/v5.15/icons/bars?style=solid" target="_blank">Contact Me</Link> */}
                                 <a href="mailto:webmaster@example.com">Contact Me</a> 
                            </div>
                        </Slide>
                            
                        
                    </Carousel.Caption>
                    
                    </Carousel.Item>


                </Carousel>
            </section>

        </>
    )
}

export default Hero
