import { Container, Nav, Navbar } from "react-bootstrap";
import { Bell, PersonCircle, Search } from "react-bootstrap-icons";

const TopBar = function () {
  return (
    <Navbar expand="lg" className="EpiflixNavbar bg-dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img className="EpiflixLogo" src="./assets/logo.png" alt="Netflix Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="fw-bold me-auto">
            <Nav.Link href="#home" className="active">
              Home
            </Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <Search className="icons" />
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <Bell className="icons" />
            <PersonCircle className="icons" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
