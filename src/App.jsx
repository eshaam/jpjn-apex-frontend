import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Players from "./components/Players";
import Matches from "./components/Matches";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function App() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">JPJN Apex Legends</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text></Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Tabs
            defaultActiveKey="players"
            id="uncontrolled-tab-example"
            className="mb-2"
            fill
          >
            <Tab eventKey="players" title="PLayers">
              <Players />
            </Tab>
            <Tab eventKey="matches" title="Matches">
              <Matches />
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </>
  );
}

export default App;
