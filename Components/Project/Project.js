import React, { useState } from 'react'
import './Project.css'
import img1 from '../../image/websiteScreen/2.png'
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ProjectBox from './ProjectBox'
import { ProjectData } from './ProjectData';


const Project = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <section className="project section-padding" id="project">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h2> <div className="content"><span> My </span><span>Projects</span><span>Projects</span></div></h2>
                            </div>
                        </div>
                    </div>
                    <div className="mTop">
                        <div className="row d-flex justify-content-center m-auto">
                            <ProjectBox handleShow = {handleShow} Data={ProjectData} />
                        </div>
                    </div>
                </div>
            </section>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={true}
                size="xl"
            >
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6 ">
                            <img src={img1} alt="" />
                        </div>
                        <div className="col-md-6 right-side">
                            <div className="body-text">
                                <h1>Cloud Website</h1>
                                <p>A portfolio full of animation, Developed in reactjs and by using pure css (Responsive websitesssss) and Bootstrap(library) .It includes 8 to 10 sections where different animation are been implemented (scroll-animations).</p>
                                <button id="button-6">
                                    <div className="spin"></div>
                                    <a target="_blank" href="https://shahjalalk.netlify.app/">Visit Site</a>
                                </button>
                            </div>
                            <div className="times" onClick={handleClose}>
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                    </div>

                </Modal.Body>

            </Modal>
        </>


    )
}

export default Project
