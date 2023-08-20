import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbr() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Decoclico</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Nouveautés</Nav.Link>
          <Nav.Link href="#link">Mobilier</Nav.Link>
          <Nav.Link href="#link">Décoration</Nav.Link>
         


          <NavDropdown title="Décoration" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Luminaire</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">linge de maison    
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Art de la table</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Rangement</NavDropdown.Item>

        
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}

export default Navbr;