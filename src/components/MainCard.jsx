import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import '../Static/mediaqueries.css';

const MainCard =(props)=>{
    return(
    <>
    <div>
    <Container className="fluid">
      <Row>
        <Col className="ca">
          <Card className="mx-lg-auto p-4 cc" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', width: '70vw', height:'auto', borderRadius: '20px', background:'#1c1c1a',  color:'white'}}>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Card.Title>{props.title}</Card.Title>
                <br/>
                <br/>
                <Card.Text className="pb-2">
                  <p>{props.para1}</p>
                  <p>{props.para2}</p>
                </Card.Text>
                <div>
                  <button xs={6} onClick={()=>window.open(props.demo)} style={{fontSize: '0.66rem', letterSpacing: '1.2px', textTransform: 'uppercase', padding: '0.75rem 1.5rem', fontWeight: 'bold', marginRight: '20px', borderRadius: '24px', position:'relative'}} className="butt">Demo</button>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <button xs={6} onClick={()=>window.open(props.github)} style={{fontSize: '0.66rem', letterSpacing: '1.2px', textTransform: 'uppercase', padding: '0.75rem 1.5rem', fontWeight: 'bold', marginRight: '20px', borderRadius: '24px', position:'relative'}}>Github</button>
                </div>
                <br />
              </Col>
              <Col md={6} style={{margin:'auto'}}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={props.img1}
                      alt="First slide"
                      style={{maxWidth:'100%', height:'auto'}}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={props.img2}
                      alt="Second slide"
                      style={{width: '100%', height:'auto'}}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={props.img3}
                      alt="Third slide"
                      style={{width: '100%', height:'auto'}}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
    <br />
    <br />
    <br />
    </div>
    </>
    )
};

export default MainCard;

