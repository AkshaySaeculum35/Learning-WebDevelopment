import { Button } from "react-bootstrap";
import { Alert, Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
function Bootstrap() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>Add bottstrap in react js</h1>
      <Button variant="danger">click me</Button>
      <Button variant="success">click me</Button>
      <Button variant="warning">click me</Button>
      <Button
        onClick={() => alert("Bootstrap button clicked")}
        variant="danger"
      >
        Bootstrap button
      </Button>
      <Alert variant="success">Hello, BT installed</Alert>
    </div>

    // how to inslall bootstrap
    // first run this command "npm install react-bootstrap bootstrap" in CMD
    // than include "import "bootstrap/dist/css/bootstrap.min.css" in main.jsx file than we will import the bootstrap tags on our jsx page"
  );
}
export default Bootstrap;
