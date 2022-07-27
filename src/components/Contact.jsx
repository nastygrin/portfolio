import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import '../Static/Contactstyle.css';

const Contact=()=>{
    return(
        <>
        <div className="d-flex text-center justify-content-center p-5 phone" style={{color:'white', fontFamily:'Source Sans Pro', background: 'linear-gradient(to right, #000f20, #00354c, #005e73, #008b8b, #07b893)'}}>
        <Container>
            <Row>
                <Col>
                    <h2>Contact me</h2>
                </Col>
            </Row>
            <Row>
                <Col className='float-end'>
                <div class="social-container">
                <ul class="social-icons">
                <li><a href="https://www.instagram.com/nishkarsh_03/"><i class="fa fa-instagram"></i></a></li>
                <li><a href="https://github.com/nastygrin"><i class="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/nishkarsh-gautam-6395a0208/"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="mailto:nishkarsh.gautam@gmail.com"><i class="fa fa-envelope"></i></a></li>
                </ul>
                </div>
                </Col>
            </Row>
        </Container>
        </div>
        
        </>
    )
}

export default Contact;