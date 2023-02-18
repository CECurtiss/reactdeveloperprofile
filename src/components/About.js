import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import profilePic from '../assets/profilepic/profilepic.jpg'

function About() {
  return (
    <Container className='m-5'>
        <Row>
      <Col>
        <Image roundedCircle='true' src={profilePic} style={{height: '500px', width: '500px'}} />
      </Col>
      <Col>
        <div>
          <h1 className='text-center m-4'>About Me</h1>
        </div>
        <div>
          <p>
            Hello! My name is Clinton Curtiss. I live in Lawrence, KS and I'm a
            full stack web developer. I'm an avid runner and I love being
            outdoors. I enjoy challenges and I have a desire to be as proficient
            as possible when learning something new. I've spent a majority of my
            career in the liquor industry where my main duties have involved
            inventory management, customer service, and some social media
            management. Got beer questions? I'm your guy! I am absolutely
            excited to dig in to something new and can't wait to learn as much
            as I can!
          </p>
        </div>
      </Col>
      </Row>
    </Container>
  );
}

export default About;
