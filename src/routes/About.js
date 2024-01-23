import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./About.css";
import ProfileImage from '../assets/profile4.png';
import CardText from "react-bootstrap/esm/CardText";
import CardTitle from "react-bootstrap/esm/CardTitle";
import CardBody from "react-bootstrap/esm/CardBody";
import CardImg from "react-bootstrap/esm/CardImg";
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
import Container from 'react-bootstrap/Container';
import DassaultSystemesImage from '../assets/DSLogo.jpg';
import FinologyImage from '../assets/finology_group_logo.jpg';
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
      {/* <Summary/> */}
      <Experience/>
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
      <Card className="border-0 p-5 m-0" style={{backgroundColor: "White", color: "Black"}}>
          <CardTitle className="SummaryCardTitle">Projects</CardTitle>
      </Card>
      <CarouselProjects/>
  </div>
    )
  }
}

function Summary () {
  return (
    <div className="Summary">
      <Card className="border-1 p-5 m-0" style={{backgroundColor: "gray", color: "white"}}>
        <CardTitle className="SummaryCardTitle">Experience</CardTitle>
        <CardBody style={{margin: "auto", maxWidth: "800px"}}>
          <CardText className="CardText">
            Internship in Finology Sdn Bhd as a Business Consultant (2021) 
          </CardText>
          <CardText className="CardText">
            Graduated with Bachelor of Computer Science from Monash University. (2022)
          </CardText>
          <CardText className="CardText">
            Work in Dassault Systemes as a Software Quality Assurance Engineer (2022 - now )
          </CardText>
          {/* <CardText className="CardText">
            Eager to learn new technologies to keep myself relevant. Looking for something more challenging.
          </CardText> */}
        </CardBody>
      </Card>
    </div>
  )
}

function Interest () {
  return (
    <div className="Interest">
      <Card className="border-0 p-5" style={{backgroundColor: "lightgray", color: "black"}}>
        <CardTitle className="InterestCardTitle p-3">Passion</CardTitle>
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

function Experience () {
  return (
    <div className="Summary">
    <Card className="border-0 p-4 m-0" style={{backgroundColor: "gray", color: "white", paddingBottom: "0"}}>
        <CardTitle className="SummaryCardTitle">Experience</CardTitle>
    </Card>
    <Container className="ExperienceCont" style={{border: "1px solid transparent"}}>
      <Row className="ExperienceContRow" style={{border: "1px solid transparent"}}>
        <Row style={{border: "1px solid transparent"}}>
          <Col className="col-lg-2 col-sm-3 col-md-2 col-3 p-3" style={{border: "1px solid transparent", marginTop: "28px"}}>
            <div style={{maxWidth: "100%", border: "1px solid transparent"}}> <img src={DassaultSystemesImage} style={{maxWidth: "100%"}}></img></div>
          </Col>
          <Col style={{border: "1px solid transparent"}}>        
            <Card className="border-0 bg-transparent" style={{color: "white"}}>
              <CardBody>
                <CardText className="font-weight-bold"><h2>Software Quality Assurance Engineer</h2></CardText>
                <CardText><h4>Dassault Systemes - Full Time</h4></CardText>
                <CardText className="m-0 p-0"><h5>Feb 2022 - Present 2 yrs</h5></CardText>
                <CardText className="m-0 p-0"><h5>Petaling Jaya, Selangor, Malaysia On Site</h5></CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Row>
      <Row className="ExperienceContRow" style={{border: "1px solid transparent"}}>
        <Row>
          <Col className="col-lg-2 col-sm-3 col-md-2 col-3 p-3" style={{border: "1px solid transparent", marginTop: "28px"}}>
            <div style={{maxWidth: "100%", border: "1px solid transparent", backgroundColor: "white", paddingLeft: "5%"}}> <img src={FinologyImage} style={{maxWidth: "100%"}}></img></div>
          </Col>
          <Col style={{border: "1px solid transparent"}}>        
            <Card className="border-0 bg-transparent" style={{color: "white"}}>
              <CardBody>
                <CardText className="font-weight-bold"><h2>Business Consultant Internship</h2></CardText>
                <CardText><h4>Finology- Full Time</h4></CardText>
                <CardText className="m-0 p-0"><h5>Nov 2020 - Feb 2021 3 mths</h5></CardText>
                <CardText className="m-0 p-0"><h5>Kuala Lumpur, Malaysia On Site</h5></CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
    </div>
  )
}
export default About;