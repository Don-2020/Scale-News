import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl"
import NavDropdown from 'react-bootstrap/NavDropdown'
// import './style.css'
import style from './style'
import images from './images.js';
// import { Link } from 'react-router-dom';

function Wtf() {
    return (
        <>
            <Navbar style={style.nav} expand="lg">
                <Navbar.Brand href="#home"><img alt="logo" src={images[0].src} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Topics</Nav.Link> 
                        {/* <Link to="/topics">Topic</Link>

                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search Scale" className="mr-sm-2"
                            style={style.searchForm1} />
                        <Button variant style={style.button1}><img alt="logo" src={images[1].src}></img></Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            {/* <Navbar style={style.nav}>
                <Navbar.Brand href="#home">
                    <img alt="logo" src={images[0].src} /> </Navbar.Brand>
                {console.log(images[0].src)}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Form inline style={style.searchForm}>
                    <FormControl type="text" placeholder="Search Scale" className="mr-sm-2"
                      style= {style.searchForm1} />
                    <Button variant style={style.button1}><img alt="logo" src={images[1].src}></img></Button>
                </Form>
                </Navbar.Collapse>
            </Navbar> */}
        </>
    )
};
export default Wtf;