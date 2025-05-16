import { Button, Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, TwitterX, Youtube } from "react-bootstrap-icons";

const BottomFooter = function () {
  return (
    <Container>
      <Row className="justify-content-center mt-5 pb-5">
        <Col sm={6}>
          <Row>
            <Col className="mb-2">
              <Facebook className="footer-icon me-2" />
              <Instagram className="footer-icon me-2" />
              <TwitterX className="footer-icon me-2" />
              <Youtube className="footer-icon" />
            </Col>
          </Row>
          <Row xs={1} sm={2} md={4}>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#" alt="footer-link">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Contact us
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>

            <Row>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Corporate Information
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2">
              <Button type="button" variant="outline-secondary" className="btn-sm footer-button rounded-0 mt-3">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2 mt-2 copyright">&copy; 1997-2023 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BottomFooter;
