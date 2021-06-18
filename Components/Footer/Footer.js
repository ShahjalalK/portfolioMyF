import React from 'react'
import './Footer.css'
import Slide from 'react-reveal/Slide';

const Footer = () => {
    return (
        <>

            <footer id="footer" >
                <Slide bottom >
                    <div className="footer-inner section-padding" id="contact">

                        <div className="logo">
                            <a>Shahjalal<span>K</span></a>
                            <div className="sub-logo">FRONT-END DEVELOPER</div>
                        </div>
                        <div className="social-icon">
                            <span className="linkedin"><i class="fab fa-linkedin"></i></span>
                            <span className="github"><i class="fab fa-github"></i></span>
                        </div>
                        <div className="contact-info">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="leftFooter">
                                        Email:
                                        <br />
                                        <a href="mailto:your@gmail.com">yourgmailxyz@gmail.com</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="rightFooter">
                                        Whatsapp No:
                                        <br />
                                        <a href="tel:123456789">123456-789</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="para">
                            <p> &copy; 2021 . All rights Reserved</p>
                        </div>
                    </div>
                </Slide>
            </footer>

        </>
    )
}

export default Footer
