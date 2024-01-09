import { CardTitle, Container } from "react-bootstrap";
import { Card, CardHeader, CardBody, CardImg, CardText } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileImage from '../assets/profile-pic.png';
import RanPoster from '../assets/ranPoster.jpg';

function Home() {
  return (
    <Container>
      <Row>
        <Col className="col-12 col-md-3">
          <Card className="p-3 mb-2 w-100 bg-white text-dark" style={{margin: "0"}}>
            <CardHeader>
              <CardImg src={ProfileImage}></CardImg>
            </CardHeader>
            <CardBody style={{margin: "auto"}}>
              <CardTitle style={{paddingLeft: "30%"}}><h3 style={{fontWeight: "bolder"}}>Summary</h3></CardTitle>
              <CardText style={{marginLeft: "10px"}}>
                Born and raised in Kuala Lumpur Malaysia. Software Engineer wannabe. Active on solving leetcode. Looking for something more challenging.
              </CardText>

              <CardTitle style={{paddingLeft: "30%"}}><h3 style={{fontWeight: "bolder"}}>Bio - Data</h3></CardTitle>
              <CardText style={{marginLeft: "14%"}}>
                <ul>
                  <li style={{listStyleType: "none"}}>Name : Cheah Meng Yew</li>
                  <li style={{listStyleType: "none"}}>Age : 25</li>
                  <li style={{listStyleType: "none"}}>University : Monash</li>
                  <li style={{listStyleType: "none"}}>Lives In : Kuala Lumpur</li>
                  <li style={{listStyleType: "none"}}>Interest : 
                    <ul>
                      <li style={{listStyleType: "none"}}>Programming</li>
                      <li style={{listStyleType: "none"}}>Board Games</li>
                      <li style={{listStyleType: "none"}}>Video Games</li>
                    </ul>
                  </li>
                </ul>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-12 col-md-9">
          <Card className="p-3 mb-2 w-100 bg-white text-dark" style={{margin: "0"}}>
            <CardHeader>
            <CardTitle ><h3 style={{fontWeight: "bolder"}}>This Week Movie Commentary</h3></CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col><CardImg src={RanPoster}  height={550}></CardImg></Col>
                <Col className="col-12 col-md-6">
                Ran : One of the best story telling by the late Akira Kurosawa, some even say the best. This movie is a must watch for samurai fans. It tells a story about an old warlord dividing his serdom to his three sons that eventually corrupts them. It was based on the story of King Leer by Shakespear. The method the movie was protrayed allows us to relate to the characters and feel what they felt. The amazing protrayal of Tatsuya Nakadai as Hidetora Ichimonji shows us how the warlord turn to Insanity. Overall I will give it a 10/10.

                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;