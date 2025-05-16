import TopBar from "./components/TopBar";

import "./App.css";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import ShowsList from "./components/ShowsList";

function App() {
  return (
    <>
      <TopBar />
      <Container fluid>
        <div className="d-flex align-items-center gap-4 mb-4">
          <h2 className="d-inline-block">TV Shows</h2>
          <DropdownButton variant="secondary" className="d-inline-block" id="dropdown-item-button" title="Genres">
            <Dropdown.Item as="button">Comedy</Dropdown.Item>
            <Dropdown.Item as="button">Drama</Dropdown.Item>
            <Dropdown.Item as="button">Thriller</Dropdown.Item>
          </DropdownButton>
          <ShowsList />
        </div>
      </Container>
    </>
  );
}

export default App;
