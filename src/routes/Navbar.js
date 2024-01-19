import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Cheah Meng Yew</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            {/* <Nav.Link to="/about"><Link to="/about">About</Link></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
      </Container>
    </Navbar>
  )
}

export default Navigation;