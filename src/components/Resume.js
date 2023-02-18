import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Resume() {
  return (
    <>
      <Container>
        <h1 className='text-center'>Resume</h1>
        <div className="d-grid">
          <Button className='m-4' variant="light" size="lg">
            Download Resume
          </Button>
        </div>
      </Container>
      <Container>
        <h1 className='text-center'>Skills & Proficiencies</h1>
        <Row className= 'p-4'>
          <Col>
            <h3 className='mb-3'>Technical Proficiencies</h3>
            <Row>
              <Col>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Git</li>
                  <li>Bootstrap & React-Bootstrap</li>
                  <li>APIs</li>
                  <li>Handlebars</li>
                  <li>Node.js</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Express.js</li>
                  <li>MySQL</li>
                  <li>NoSQL</li>
                  <li>Sequelize</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>GraphQL</li>
                  <li>React</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col>
            <h3 className='mb-3'>Personal Skills</h3>
            <Row>
                <Col>
                    <ul>
                        <li>Prompt</li>
                        <li>Dependable</li>
                        <li>Easy to work with</li>
                        <li>Detail oriented</li>
                        <li>Collaborative skills</li>
                        <li>Responsible work ethic</li>
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <li>Open to new ideas</li>
                        <li>Responsive to criticism</li>
                        <li>Personal drive</li>
                        <li>Adaptable</li>
                        <li>Commitment to professional standards</li>
                    </ul>                
                </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Resume;