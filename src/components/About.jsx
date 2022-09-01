import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import pic from '../Static/logo.png';
import '../Styles/logostyle.css';
const About=()=>{
    return(
        <>
        <h2 className="d-flex justify-content-center p-4" style={{color:'white', fontFamily:'Source Sans Pro', background: 'linear-gradient(to right, #000f20, #00354c, #005e73, #008b8b, #07b893)'}}>About me</h2>
        <Container className="pb-5">
            <Row className="ml-3 pt-4">
                <Col className="d-flex justify-content-center p-5 mt-4">
                <div className="mx-auto" style={{align:'right'}}>
                <p style={{color:'#fff', fontSize:'1.25em', fontFamily:'Source Sans Pro'}}>I'm a final-year student pursuing Btech in Computer Science. I'm a data science enthusiast passionate about solving real-world problems by building efficient and impactful applications equipped with machine learning and artificial intelligence.</p>
                <p style={{color:'#fff', fontSize:'1.25em', fontFamily:'Source Sans Pro'}}>In this ever-growing digital world, I like to look at the numbers that drive action, meaning that the data tells us what to do next. I think of data as the new soil, Get in and get your hands dirty. </p>
                <p style={{color:'#fff', fontSize:'1.25em', fontFamily:'Source Sans Pro'}}>Another realm that intrigues me the most is frontend development. I like collaborating with my peers and incorporating the latest technologies into building applications that make daily life easier every day.</p>
                </div>
                </Col>
                <Col className="text-center mt-5">
                    <img src={pic} hieght="300px" width="358px" alt='logo'/>
                </Col>
            </Row>
        </Container>
        </>
    )
};

export default About;