import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Bio.css";
import Portrait from "./Portrait";

function Bio() {
  return (
    <div className="body">
      <Container>
        <Row>
            {/* Future Change: Work on making each of theses a call to a database and fill */}
          <Col className="col-lg-3" id="img-box">
            <Portrait />
          </Col>
          <Col className="col-lg-9">
            <Row>
              <Col className="col-md-12">
                <h4 class="bio-heading">About</h4>
              </Col>
              <Col className="col-md-12">
                <h2 class="bio-name">Zian Choudhury</h2>
              </Col>
              <Col className="col-md-12">
                <div class="bio-body">
                <p>
                  Curabitur tortor. Pellentesque nibh. Aenean quam. In
                  scelerisque sem at dolor. Maecenas mattis. Sed convallis
                  tristique sem. Proin ut ligula vel nunc egestas porttitor.
                  Morbi lectus risus, iaculis vel, suscipit quis, luctus non,
                  massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris
                  ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
                  euismod in, nibh.
                </p>

                <p>
                  Quisque volutpat condimentum velit. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt
                  mattis, tortor neque adipiscing diam, a cursus ipsum ante quis
                  turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti.
                  Nunc feugiat mi a tellus consequat imperdiet. Vestibulum
                  sapien. Proin quam. Etiam ultrices.
                </p>

                <p>
                  Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                  Integer euismod lacus luctus magna. Quisque cursus, metus
                  vitae pharetra auctor, sem massa mattis sem, at interdum magna
                  augue eget diam. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia Curae; Morbi lacinia
                  molestie dui. Praesent blandit dolor. Sed non quam. In vel mi
                  sit amet augue congue elementum. Morbi in ipsum sit amet pede
                  facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
                  egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut
                  ultrices ultrices enim. Curabitur sit amet mauris.
                </p>
                </div>  
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Bio;
