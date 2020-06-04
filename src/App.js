import React, {Fragment} from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

import Header from "./components/Header/Header";
import MainContents from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <Fragment>
          <Container fluid>
              <Row>
                  <Col style={{backgroundColor: "#cccccc"}}><Header /></Col>
              </Row>
              <Container>
                  <Row>
                      <Col style={{backgroundColor: "#f1f1f1"}}><MainContents /></Col>
                  </Row>
              </Container>
              <Row>
                    <Col style={{backgroundColor: "#d0d0d0"}}><Footer /></Col>
              </Row>
          </Container>
      </Fragment>
  );
}

export default App;
