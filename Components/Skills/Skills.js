import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import img1 from '../../image/Slider/html.png'
import img2 from '../../image/Slider/css.png'
import img3 from '../../image/Slider/js.png'
import img4 from '../../image/Slider/react.png'
import img5 from '../../image/Slider/bootstrap.png'
import img6 from '../../image/Slider/ui.png'
import './Skills.css'
import AOS from 'aos'

const Skills = () => {

    useEffect(() => {
        AOS.init()
    })
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    };
    return (
        <section className="SkillsContainer bg-white">
            <div className="sliders">

                <Slider {...settings}>
                    <span className="slide"  data-aos="fade-up"><img src={img1} alt="" /></span>
                    <span className="slide" data-aos="fade-up"><img src={img2} alt="" /></span>
                    <span className="slide" data-aos="fade-up"><img src={img3} alt="" /></span>
                    <span className="slide" data-aos="fade-up"><img src={img4} alt="" /></span>
                    <span className="slide" data-aos="fade-up"><img src={img5} alt="" /></span>
                    <span className="slide" data-aos="fade-up"><img src={img6} alt="" /></span>

                    <span className="slide" data-aos="fade-up"><img src={img1} alt="" /></span>
                    <span className="slide" data-aos="fade-up"><img src={img2} alt="" /></span>
                    <span className="slide" data-aos="fade-up"><img src={img3} alt="" /></span>
                    <span className="slide" data-aos="fade-up"><img src={img4} alt="" /></span>
                    <span className="slide" data-aos="fade-up"><img src={img5} alt="" /></span>
                    <span className="slide" data-aos="fade-up"><img src={img6} alt="" /></span>
                </Slider>

            </div>
        </section>

    )
}

export default Skills
