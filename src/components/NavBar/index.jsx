import React from "react";
import logo from "./logo.png";
import CartWidget from "../CartWidget/index";
import "./styles.css";
import { Link } from "react-router-dom";
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
    <>
      <Navbar
        className="menu bg-dark"
        variant="dark"
        expand="lg"
        style={{ position: "fixed", top: "0" }}
      >
        <Navbar.Brand>
          <Link to="/" className="font-weight-bold">
            <img src={logo} alt="..." width="50" height="50" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {" "}
            <Nav.Link>
              <Link to="/" className="font-weight-bold">
                Inicio
              </Link>
            </Nav.Link>
            <NavDropdown
              title="Productos"
              id="basic-nav-dropdown"
              className="font-weight-bold"
            >
              <NavDropdown.Item>
                <Link to="/catalog/pasteleria" className="text-dark">
                  Pasteleria
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/catalog/postre" className="text-dark">
                  Postres
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/catalog/detalle" className="text-dark">
                  Detalles
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="font-weight-bold">Nosotros</Nav.Link>
            <Nav.Link className="font-weight-bold">Contactenos</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <CartWidget />
      </Navbar>
    </>
  );
}

export default NavbarComponent;
