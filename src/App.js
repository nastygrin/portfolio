import React from "react";
import MainCard from "./components/MainCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./components/Landing";
import Snow from './components/Snow';
import About from "./components/About";
import Banner from "./components/Banner";
import Data from "./Static/Data";
import Blogs from "./components/Blogs";
import Datablogs from "./Static/Datablogs";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Contact from "./components/Contact";

function App() {
  function createEntry(props) {
  return <MainCard key={props.id} title={props.title} para1={props.para1} para2={props.para2} demo={props.demo} github={props.github} img1={props.img1} img2={props.img2} img3={props.img3} />;
}
function blogEntry(props) {
  return <Blogs key={props.id} title={props.title} link={props.link} img={props.img} />;
}
  return (
    <>
      <Snow />
      <Landing />
      <About />
      <Banner title="My projects" />
      {Data.map(createEntry)}
      <Banner title="My blogs" />
      <Container className="pb-5 pt-5">
        <Row className="ml-3">
          {Datablogs.map(blogEntry)}
        </Row>
      </Container>
      {/* <Banner title="Contact me" /> */}
      <Contact />
    </>
  );
}

export default App;
