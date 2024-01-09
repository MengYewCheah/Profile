import { CardTitle, Container } from "react-bootstrap";
import { Card, CardHeader, CardBody, CardImg, CardText } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileImage from '../assets/profile-pic.png';

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
              <CardText style={{marginLeft: "-10px"}}>
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
        <Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;