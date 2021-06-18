import React from 'react'
import { Badge, Button, Carousel, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Pagination, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'


import Hero from './Components/HeroSection/Hero';
import Navbars from './Components/Navbar/Navbars';
import Skills from './Components/Skills/Skills'
import Feature from './Components/Features/Feature'
import Experience from './Components/Experience/Experience'
import Project from './Components/Project/Project'
import Footer from './Components/Footer/Footer';

const SetAllPage = () => {
    return (
        <>
            <BrowserRouter>
                <Navbars />
                <Hero />
                <Skills />
                <Feature />
                <Experience />
                <Project />
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default SetAllPage
