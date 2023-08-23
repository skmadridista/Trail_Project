import { Container, Nav, Navbar, Form } from "react-bootstrap";
import { useTheme } from "../utils/themeProvider";
import "../style/NavBar.css";

function NavBar({navList}) {
  const { hanldeModeChange, mode } = useTheme();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme={mode}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            {navList.map((e, index)=><Nav.Link key={index}>{e}</Nav.Link>)}
          </Nav>
          <br></br>
        </Navbar.Collapse>
      <Form.Check
          type="switch"
          id="theme-switch"
          label={` ${mode!=='light'?"Dark":"Light"} mode`}
          onClick={hanldeModeChange}
          title="Change theme"
          data-testid="checkbox-element"
        />
       
      </Container>
    </Navbar>
  );
}

export default NavBar;
