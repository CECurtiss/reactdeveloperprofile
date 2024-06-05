import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import parks from "../assets/projectscreenshots/parksweather.png";
import techBlog from "../assets/projectscreenshots/techblog.png";
import workScheduler from "../assets/projectscreenshots/workdayscheduler.png";
import noteTaker from "../assets/projectscreenshots/notetakerapp.png";
import quiz from "../assets/projectscreenshots/quizapp.png";
import cork from "../assets/projectscreenshots/corkwebsite.png";

const cardStyle = {
  width: "350px",
  height: "auto",
  margin: "30px auto 10px auto",
  boxShadow: "5px 10px 5px #d6d6d6",
};

function Portfolio() {
  return (
    <Container>
      <Row className="flex-row">
        <Card style={cardStyle}>
          <Card.Img variant="top" src={parks} />
          <Card.Body>
            <Card.Title>
              <Card.Link href="https://cecurtiss.github.io/parks-and-weather-app/">
                National Park & Weather App
              </Card.Link>
            </Card.Title>
            <Card.Text>This application allows the user to enter a US state and see the National Parks in that state. It offers cards to
              select and then provides information about the park, as well as weather in the area of that park over the next week.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={cardStyle}>
          <Card.Img variant="top" src={techBlog} />
          <Card.Body>
            <Card.Title>
              <Card.Link href="https://cryptic-gorge-77238.herokuapp.com/">
                Tech Blog
              </Card.Link>
            </Card.Title>
            <Card.Text>This application is a social interaction application. It allows users to create an account, create their own posts, as well as comment on other 
              posts displayed on the main page.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={cardStyle}>
          <Card.Img variant="top" src={workScheduler} />
          <Card.Body>
            <Card.Title>
              <Card.Link href="https://cecurtiss.github.io/work_day_scheduler_challenge/">
                Work Day Scheduler
              </Card.Link>
            </Card.Title>
            <Card.Text>This application is a daily scheduler. The information can be added and saved, and persists as it is stored
              in local storage.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={cardStyle}>
          <Card.Img variant="top" src={noteTaker} />
          <Card.Body>
            <Card.Title>
              <Card.Link href="https://evening-fjord-58216.herokuapp.com/">
                Note Taker Application
              </Card.Link>
            </Card.Title>
            <Card.Text>This application will take notes entered by the user and store them so they can be referenced later.</Card.Text>
          </Card.Body>
        </Card>

        <Card style={cardStyle}>
          <Card.Img variant="top" src={quiz} />
          <Card.Body>
            <Card.Title>
              <Card.Link href="https://cecurtiss.github.io/JS-HTML-CSS-coding-quiz/">
                Coding Quiz Game
              </Card.Link>
            </Card.Title>
            <Card.Text>This application is a short quiz game for people learning about HTML and CSS. It will ask questions and provide feedback on the answers.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={cardStyle}>
          <Card.Img variant="top" src={cork} />
          <Card.Body>
            <Card.Title>
              <Card.Link href="https://cecurtiss.github.io/CorkBarrelFrontend/">
                Cork & Barrel Frontend
              </Card.Link>
            </Card.Title>
            <Card.Text> WORK IN PROGRESS. This is a Frontend deisgn for Cork & Barrel, a business in Lawrence, KS. It will later have login, a backend, and an ecommerce feature with an API that connects to the businesses database.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Portfolio;
