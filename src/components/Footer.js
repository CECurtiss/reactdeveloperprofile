import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import gitHubImg from "../assets/icons/githublogo.webp";
import instaImg from "../assets/icons/instalogo.png";
import linkedInImg from "../assets/icons/linkedinlogo1.png";

function Footer() {
  const imgStyle = {
    height: "75px",
    width: "75px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const footerStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%",
    padding: "10px",
  };
  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col>
            <a href="https://github.com/CECurtiss">
              <Image style={imgStyle} src={gitHubImg} />
            </a>
          </Col>
          <Col>
            <a href="https://www.instagram.com/clintcurtiss/">
              <Image style={imgStyle} src={instaImg} />
            </a>
          </Col>
          <Col>
            <a href="https://www.linkedin.com/in/clinton-curtiss-25783a266/">
              <Image style={imgStyle} roundedCircle="true" src={linkedInImg} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
