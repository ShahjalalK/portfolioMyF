import React from 'react'
import html from '../../image/icons/html.png'
import './Experience.css'
import ExperienceCard  from './ExperienceCard'
import {ExprenceData} from './ExperinceData'

const Experience = () => {
    return (
        <section className="experience section-padding" id="experience">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <h2> <div className="content"><span> My </span><span>Experience</span><span>Experience</span></div></h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <ExperienceCard Data = {ExprenceData} />                    
                </div>
            </div>
        </section>

    )
}

export default Experience
