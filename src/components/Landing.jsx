import React from "react";
import '../Styles/landingstyle.css';
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Resume from '../Static/resume.pdf';
import '../Static/mediaqueries.css';

const Landing=()=>{
    return(
        <>
        <Container>
            <Row>
                <Col>
            <div className="ml-auto" align='center' style={{height: "59vh", color: 'white'}}>
                <h3 style={{marginTop:'35vh', fontFamily:'Source Sans Pro', fontSize:'3vw', color:'#fff'}}>Hello! My name is</h3>
                <h1>Nishkarsh Gautam</h1>
                <hr />
            </div>
                </Col>
            </Row>
        </Container>
        <div className="text-center">
            <button variant="light" style={{transform:'translateY(-25vh)'}} onClick={()=>window.open(Resume)}>RESUME</button>
        </div>
        {/* <hr /> */}
        </>
    )
}

export default Landing;