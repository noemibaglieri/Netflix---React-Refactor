import { Container, Nav, Navbar } from "react-bootstrap";
import { Bell, PersonCircle, Search } from "react-bootstrap-icons";

const TopBar = function () {
  return (
    <Navbar expand="lg" className="EpiflixNavbar bg-dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <a href="#">
            <img className="EpiflixLogo" src="./assets/logo.png" alt="Netflix Logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="fw-bold me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">TV Shows</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently Added</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
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
