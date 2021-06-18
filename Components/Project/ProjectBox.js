import React from 'react'
import Tilt from 'react-parallax-tilt';
import Slide from 'react-reveal/Slide';

const ProjectBox = ({ handleShow, Data }) => {
    return (
        <>
            {Data.map((item) => {
                return (
                    <div className="col-lg-4 col-md-6 mb-5 col-lg-4 col-md-6 col-sm-6 mb-5 SingleProjectQ">
                        <Tilt style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>
                            <Slide left>
                                
                                    <div className="singlePContainer" >
                                        <img src={item.image} alt="" />
                                        <div className="singlePContainerBody">
                                            <h1>{item.title}</h1>
                                            <div className="wrapper">
                                                <button onClick={handleShow}><span>View More</span></button>

                                            </div>
                                        </div>
                                    </div>
                               
                            </Slide>
                        </Tilt>
                    </div>
                )
            })}
        </>
    )
}

export default ProjectBox
