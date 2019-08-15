import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl"
// import './style.css'
import style from './style'
import images from './images.js';

function Wtf() {
    return (
        <>
            <Navbar style={style.nav}>
                <Navbar.Brand href="#home">
                    <img alt="logo" src={images[0].src} /></Navbar.Brand>
                {console.log(images[0].src)}
                

                <Form inline style={style.searchForm}>
                    <FormControl type="text" placeholder="Search Scale" className="mr-sm-2"
                      style= {style.searchForm1} />
                    <Button variant style={style.button1}><img alt="logo" src={images[1].src}></img></Button>
                </Form>

{/* 
                <Nav className="mr-auto">
      
      <Nav.Link href="#Login" style= {style.navLogin} >Login</Nav.Link>
    </Nav> */}
            </Navbar>
        </>
    )
};
export default Wtf;