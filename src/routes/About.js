import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./About.css";
import ProfileImage from '../assets/profile4.png';
import CardText from "react-bootstrap/esm/CardText";
import CardTitle from "react-bootstrap/esm/CardTitle";
import CardBody from "react-bootstrap/esm/CardBody";
import ChessImage from '../assets/chess.webp';
import CardImg from "react-bootstrap/esm/CardImg";
import CatanPoster from '../assets/CatanPoster.jpg';
import React from "react";
import PythonProgramming from '../assets/PythonProgramming.jpg';
import JavaScript from '../assets/Javascript.jpg';
import CarouselProjects from '../routes/Carousel/CarouselProjects';
import ReactImage from '../assets/React.png';
import NodeJSImage from '../assets/Node.png';
import JavaImage from '../assets/Java.png';
import MySQLImage from '../assets/MySQL.png';
import ShellScriptingImage from '../assets/ShellScripting.jpg';
import HTMLCSSImage from '../assets/HTMLCSS.png';
import AlgorithmAndDataStructure from '../assets/algorithmAndDataStructure.png';
function About() {
  return (
    <div style={{padding: "0px", margin: "0px"}}>
      <div className="About">
        <Row className="p-0 m-0">
          <Col className="p-5 col-6 m-0 p-0">
            <img src={ProfileImage} className="ProfileImg"></img>
          </Col>
          <Col style={{margin: "auto", fontFamily: 'Playfair Display'}}>
            <Row className="p-0 m-0">Hi, I am Cheah Meng Yew</Row>
            <div>
              <br></br>
              <text className="Title">I am a </text>
              <text className="Title" style={{fontFamily: 'Tektur'}}>Software Developer</text> 
              <text className="Wannabe">(wannabe)</text>
            </div>
          </Col>
        </Row>
      </div>
      <Interest/>
      <Summary/>
      <Project/>
    </div>
  )
}

class Project extends React.Component{
  constructor(props){
    super();
    this.state = {
      windowWidth: window.innerWidth >= 900, 
      windowHeight: window.innerHeight,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({
      windowWidth: window.innerWidth >= 900,
      windowHeight: window.innerHeight,
    })
  }

  render () {
    return (
      <div className="Projects">
      <div className="ProjectsTitle" >Projects</div>
      <CarouselProjects/>
  </div>
    )
  }
}

function Summary () {
  return (
    <div className="Summary">
      <Card className="border-0 p-5" style={{backgroundColor: "gray", color: "white"}}>
        <CardTitle className="SummaryCardTitle">About Me</CardTitle>
        <CardBody style={{margin: "auto"}}>
          <CardText className="CardText">
            Born and raised in Kuala Lumpur Malaysia.
          </CardText>
          <CardText className="CardText">
            Graduated with Bachelor of Computer Science from Monash University. 
          </CardText>
          <CardText className="CardText">
            Actively learning new technologies.
          </CardText>
          <CardText className="CardText">
            Looking for something more challenging.
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}

function Interest () {
  return (
    <div className="Interest">
      <Card className="border-0 p-5" style={{backgroundColor: "lightgray", color: "black"}}>
        <CardTitle className="InterestCardTitle p-3">Skills</CardTitle>
        <CardBody className="InterestCardBody p-0">
            <Row className="m-0">
              <Col className="InterstCardImage">
                <div className="InterstCardImageText">PYTHON</div>
                <CardImg className="InterstCardImageImage" src={PythonProgramming}></CardImg>
              </Col>
              <Col className="InterstCardImage">
                <div className="InterstCardImageText">JAVASCRIPT</div>
                <CardImg className="InterstCardImageImage" src={JavaScript}></CardImg>
              </Col>
              <Col className="InterstCardImage">
                <div className="InterstCardImageText">REACT</div>
                <CardImg className="InterstCardImageImage" src={ReactImage}></CardImg>
              </Col>
            </Row>
            <Row className="m-0">
              <Col className="InterstCardImage">
                <div className="InterstCardImageText">NODE JS</div>
                <CardImg className="InterstCardImageImage" src={NodeJSImage}></CardImg>
              </Col>
              <Col className="InterstCardImage">             
                <div className="InterstCardImageText">HTML + CSS</div>
                <CardImg className="InterstCardImageImage" src={HTMLCSSImage}></CardImg>
              </Col>
              <Col className="InterstCardImage">              
                <div className="InterstCardImageText">MY SQL</div>
                <CardImg className="InterstCardImageImage" src={MySQLImage}></CardImg>
              </Col>
            </Row>
            <Row className="m-0">
              <Col className="InterstCardImage">
                <div className="InterstCardImageText">Shell Scripting</div>
                <CardImg className="InterstCardImageImage" src={ShellScriptingImage}></CardImg>
              </Col>
              <Col className="InterstCardImage">
                <div className="InterstCardImageText">JAVA</div>
                <CardImg className="InterstCardImageImage" src={JavaImage}></CardImg>
              </Col>
              <Col className="InterstCardImage">
                <div className="InterstCardImageText">ALGORITHM</div>
                <CardImg className="InterstCardImageImage" src={AlgorithmAndDataStructure}></CardImg>
              </Col>
            </Row>
        </CardBody>
      </Card>
    </div>
  )
}

export default About;