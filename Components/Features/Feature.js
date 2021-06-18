import React, { useEffect } from 'react'
import AOS from 'aos'
import './Feature.css'
import img1 from '../../image/feature/1.jpg'
import img2 from '../../image/feature/2.jpg'
import img3 from '../../image/feature/3.jpg'

import FeatureCard from './FeatureCard'
import { FeatureData } from './FeatureData'


const Feature = () => {
    useEffect(() => {
        AOS.init();
    })
    return (
        <section className="features section-padding" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <h2> <div className="content"><span> Awesome </span><span>Features</span><span>Features</span></div></h2>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center m-auto ">
                    <FeatureCard data={FeatureData} />
                    
                    {/* <Fade bottom>
                        <div className="col-md-4">
                            <div className="card feature-card">
                                <div className="imgBox">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="contents">
                                    <h2>Business Growth</h2>
                                    <p>
                                        My mission is to transform our clients’ businesses, allowing them to utilise powerful technologies and grow their businesses, improve their processes that benefit businesses of all sizes, making them more efficient and effective.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="col-md-4">
                            <div className="card feature-card">
                                <div className="imgBox">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="contents">
                                    <h2>Responsive Design</h2>
                                    <p>
                                        Flat, Lightweight & Responsive Designs term is related to the idea of developing a website design in a way that helps the user to open a website on any size of screen the lay out to find changed according to the user’s PC screen motion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Fade> */}
                </div>
            </div>

        </section>





    )
}

export default Feature
