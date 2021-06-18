import React from 'react'
import Tilt from 'react-parallax-tilt';
import {Flip} from 'react-reveal';

const ExperienceCard = ({Data}) => {
    return (
        <>
        {Data.map((data) => {
            return (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Tilt tiltAngleXInitial="0">
                    <Flip left>
                        <div className="items" style={data.items}>
                            <div className="item">
                                <div className="title">
                                    <h1>{data.title} <img src={data.image} alt="" />  </h1>
                                </div>
                                
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle style={data.css} cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="number">
                                        <h2 style={data.color}>{data.spane}<span>%</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Flip>
                    </Tilt>
                    </div>
            )
        })}
            
        </>
    )
}

export default ExperienceCard
