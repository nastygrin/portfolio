import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../Styles/logostyle.css';
import '../Styles/Blogbuttonstyle.css';

const Blogs=(props)=>{
    return(
        <>
        <Col sm={12} md={4}>
            <Card className="mx-auto pb-4 mb-4" style={{ width: '18rem', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', height:'auto', borderRadius: '20px', background:'#1c1c1a',  color:'white', fontFamily:'Source Sans Pro'}}>
                <Card.Img variant="top" src={props.img} style={{borderRadius: '20px', height:'18rem'}} />
                <Card.Body className="text-center">
                <Card.Title className="p-2" style={{fontSize:'1.3em'}}>{props.title}</Card.Title>
                <br />
                <button className="button-85" onClick={()=>window.open(props.link)}>Link</button>
                </Card.Body>
            </Card>
        </Col>
        </>
    )
};

export default Blogs;