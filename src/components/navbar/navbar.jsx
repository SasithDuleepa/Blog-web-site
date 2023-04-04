import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavScrollExample() {
    const currentUrl = window.location.href;
    const domainName = new URL(currentUrl).pathname;
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Sasith_Duleepa</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
       
        <Nav className="me-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          
        </Nav>


        <Nav>
          <Nav.Link active={domainName=== "/"?"true":""}  href='/'>Home</Nav.Link>
          
          <Nav.Link active={domainName=== "/about"?"true":""} href='/about'>About</Nav.Link>
          <Nav.Link active={domainName=== "/blog"?"true":""} href='/blog'>Blog</Nav.Link>
          <Nav.Link active={domainName=== "/contact"?"true":""} href='/contact'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavScrollExample;