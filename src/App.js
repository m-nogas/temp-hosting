import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/VideoPlayer/ResponsivePlayer.jsx';
import ResponsivePlayer from './components/VideoPlayer/ResponsivePlayer.jsx';
import { Carousel, Container, Col, Row, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid className="candor-container">
        <Row className="candor-row">
          <Col xs={12} md={4}>
            <p className="candor-bold">Coleman H / Glenn L</p>
            <p className="h2">Why hasn't Canada developed their own COVID-19 vaccine?</p>
            <p className="font-weight-light">7 responses</p>
          </Col>
          <Col xs={12} md={4} className="candor-carousel">
            <Carousel interval={null} className="candor-carousel">
              <Carousel.Item className="candor-carousel">
                <ResponsivePlayer />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="logo192.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="logo192.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} md={4} className="text-center d-flex align-items-end candor-col-height">
            <div className="pb-5">
              <p className="h2">Join the conversation!</p>
              <p className="font-weight-light">Download Candor to comment, like, and start your own conversations</p>
              <a href='https://play.google.com/store/apps/details?id=com.talkcandor&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className="candor-android-badge" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
              <a href='https://apps.apple.com/ca/app/candor-talk/id1552310457'><img className="candor-apple-badge" alt='Get it on the App Store' src='AppleBadge.svg'/></a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
