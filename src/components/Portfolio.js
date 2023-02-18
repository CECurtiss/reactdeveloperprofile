import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function Portfolio() {
  return (
    <Container>
      <Card className="flip-card">
        <Card.Img></Card.Img>
        <Card.Body>
          <Card.Title>Front End</Card.Title>
          <Card.Text>project1</Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img></Card.Img>
        <Card.Body>
          <Card.Title>Back End</Card.Title>
          <Card.Text>project2</Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img></Card.Img>
        <Card.Body>
          <Card.Title>Other</Card.Title>
          <Card.Text>project 3</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Portfolio;
