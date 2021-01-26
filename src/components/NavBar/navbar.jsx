import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function NavbarComponent() {
  return (
    <div className="NavbarComponent">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Oliva-Bakery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Panaderia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pasteleria</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Postres</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Detalles</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <Nav.Link href="#link">Contactenos</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <h1>Oliva Bakery</h1>
    </div>
  );
}

export default NavbarComponent;
