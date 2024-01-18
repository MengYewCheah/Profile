import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { CardHeader,  } from "react-bootstrap";
import "./About.css";
import ProfileImage from '../assets/profile4.png';
import CardText from "react-bootstrap/esm/CardText";
import CardTitle from "react-bootstrap/esm/CardTitle";
import CardBody from "react-bootstrap/esm/CardBody";
import ChessImage from '../assets/chess.webp';
import ZeldaPoster from '../assets/zelda.jpg';
import LinkinParkPoster from '../assets/LinkinPark.jpg';
import CardImg from "react-bootstrap/esm/CardImg";
import RanPoster from '../assets/ranPoster.jpg';
import CatanPoster from '../assets/CatanPoster.jpg';
import Badminton from '../assets/badminton.jpg';
import Travel from '../assets/travel.jpg';
import Cooking from '../assets/cooking.jpg';
import Reading from '../assets/books.jpg';
import React from "react";
import ProfileProject from '../assets/Profile.png'
import CarouselProjects from '../routes/Carousel/CarouselProjects'
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
      <div className="Interest">
      <Card className="border-0 p-5" style={{backgroundColor: "lightgray", color: "black"}}>
          <CardTitle className="InterestCardTitle p-3">Interest</CardTitle>
          <CardBody className="InterestCardBody p-0">
              <Row className="m-0">
                <Col className="InterstCardImage">
                  <div className="InterstCardImageText">Travel</div>
                  <CardImg className="InterstCardImageImage" src={Travel}></CardImg>
                </Col>
                <Col className="InterstCardImage">
                  <div className="InterstCardImageText">Cooking</div>
                  <CardImg className="InterstCardImageImage" src={Cooking}></CardImg>
                </Col>
                <Col className="InterstCardImage">
                  <div className="InterstCardImageText">Badminton</div>
                  <CardImg className="InterstCardImageImage" src={Badminton}></CardImg>
                </Col>
              </Row>
              <Row className="m-0">
                <Col className="InterstCardImage">
                  <div className="InterstCardImageText">Movies</div>
                  <CardImg className="InterstCardImageImage" src={RanPoster}></CardImg>
                </Col>
                <Col className="InterstCardImage">             
                  <div className="InterstCardImageText">Music</div>
                  <CardImg className="InterstCardImageImage" src={LinkinParkPoster}></CardImg>
                </Col>
                <Col className="InterstCardImage">              
                  <div className="InterstCardImageText">Video Games</div>
                  <CardImg className="InterstCardImageImage" src={ZeldaPoster}></CardImg>
                </Col>
              </Row>
              <Row className="m-0">
                <Col className="InterstCardImage">
                  <div className="InterstCardImageText">Reading</div>
                  <CardImg className="InterstCardImageImage" src={Reading}></CardImg>
                </Col>
                <Col className="InterstCardImage">
                  <div className="InterstCardImageText">Chess</div>
                  <CardImg className="InterstCardImageImage" src={ChessImage}></CardImg>
                </Col>
                <Col className="InterstCardImage">
                  <div className="InterstCardImageText">Others</div>
                  <CardImg className="InterstCardImageImage" src={CatanPoster}></CardImg>
                </Col>
              </Row>
          </CardBody>
        </Card>
      </div>
      <div className="Summary">
        <Card className="border-0 p-5" style={{backgroundColor: "gray", color: "white"}}>
          <CardTitle className="SummaryCardTitle">Summary</CardTitle>
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

export default About;