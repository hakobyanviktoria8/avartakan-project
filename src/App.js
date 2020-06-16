import React, {Fragment} from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Header from "./components/Header/Header";
import MainContents from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/NavBar/Navigation";

function App() {
  return (
      <Fragment>
          <Container fluid>
              <Row>
                  <Col className={"navigation"}><Navigation/></Col>                              {/*<Col><Navbar /></Col>*/}
              </Row>
              <Row>
                  {/*<Col><Header /></Col>*/}
              </Row>
              <Row>
                  <Col><MainContents /></Col>
              </Row>
              <Row>
                    <Col><Footer /></Col>
              </Row>
          </Container>
      </Fragment>
  );
}

export default App;
