import React from "react";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavigationBar({ category, setCategory }) {
  // submit event
  async function submitHandler(event) {
    event.preventDefault();
    const newCategory = event.target.search.value;
    setCategory(newCategory);
  }

  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand href="https://github.com/Softdude47">
          {" "}
          Softdude{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Ashe</NavDropdown.Item>
              <NavDropdown.Item href="#">Benita</NavDropdown.Item>
              <NavDropdown.Item href="#">Aderemi</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#S"> Precious </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={submitHandler}>
            {/* change image category */}
            <Form.Control
              type="search"
              name="search"
              className="me-2"
              aria-label="search"
              placeholder={category || "search"}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
