import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Card from "react-bootstrap/Card";
import parks from '../assets/projectscreenshots/parksweather.png'
import techBlog from '../assets/projectscreenshots/techblog.png'
import workScheduler from '../assets/projectscreenshots/workdayscheduler.png'

const cardStyle = {
  width: '300px',
  margin: '10px'
}

function Portfolio() {


  return (
    <Container>
      <Row className='flex-row'>
      <Card style={cardStyle}>
        <Card.Img variant='top' src={parks} />
        <Card.Body>
          <Card.Title>National Park & Weather App</Card.Title>
          <Card.Text>project1</Card.Text>
        </Card.Body>
      </Card>

      <Card style={cardStyle}>
        <Card.Img variant='top' src={techBlog} />
        <Card.Body>
          <Card.Title>Tech Blog</Card.Title>
          <Card.Text>project2</Card.Text>
        </Card.Body>
      </Card>

      <Card style={cardStyle}>
        <Card.Img variant='top' src={workScheduler} />
        <Card.Body>
          <Card.Title>Work Day Scheduler</Card.Title>
          <Card.Text>project 3</Card.Text>
        </Card.Body>
      </Card>

      <Card style={cardStyle}>
        <Card.Img variant='top' src={workScheduler} />
        <Card.Body>
          <Card.Title>Other</Card.Title>
          <Card.Text>project 3</Card.Text>
        </Card.Body>
      </Card>
      </Row>
    </Container>
  );
}

export default Portfolio;
