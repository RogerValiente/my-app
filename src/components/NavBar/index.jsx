import React from "react";
import logo from "./logo.png";
import CartWidget from "../CartWidget/index";
import "./styles.css";
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
    <div>
      <Navbar className="menu" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="..." width="50" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="font-weight-bold">
              Inicio
            </Nav.Link>
            <NavDropdown
              title="Productos"
              id="basic-nav-dropdown"
              className="font-weight-bold"
            >
              <NavDropdown.Item href="/catalog/pasteleria">
                Pasteleria
              </NavDropdown.Item>
              <NavDropdown.Item href="/catalog/postre">
                Postres
              </NavDropdown.Item>
              <NavDropdown.Item href="/catalog/detalle">
                Detalles
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="font-weight-bold">
              Nosotros
            </Nav.Link>
            <Nav.Link href="#link" className="font-weight-bold">
              Contactenos
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <CartWidget />
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
