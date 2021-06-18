import React from 'react'
import { Fade } from 'react-reveal'
import './Feature.css'

const FeatureCard = ({data}) => {
    return (
        <>
        {data.map((item) => {
            return(
                <Fade bottom>   
                <div className="col-md-4">
                    <div className="card feature-card">
                        <div className="imgBox">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="contents">
                            <h2>{item.title}</h2>
                            <p>{item.para}</p>
                        </div>
                    </div>
                </div>
            </Fade>
            )
        })}        
        </>
    )
}

export default FeatureCard
