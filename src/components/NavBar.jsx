import { Container, Nav, Navbar, Form } from "react-bootstrap";
import { useTheme } from "../utils/themeProvider";
import "../style/NavBar.css";
function NavBar() {
  const { hanldeModeChange, mode } = useTheme();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme={mode}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Coolers</Nav.Link>
            <Nav.Link>Almiras</Nav.Link>
            <Nav.Link>Accessories</Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>
          </Nav>
          <br></br>
        </Navbar.Collapse>
      <Form.Check
          type="switch"
          id="theme-switch"
          label={` ${mode!=='light'?"Dark":"Light"} mode`}
          onClick={hanldeModeChange}
          title="Change theme"
        />
       
      </Container>
    </Navbar>
  );
}

export default NavBar;
