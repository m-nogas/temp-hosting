import { Carousel } from 'react-bootstrap';
import ResponsivePlayer from './VideoPlayer/ResponsivePlayer.jsx';
import './VideoPlayer/ResponsivePlayer.jsx';

const DialogueCarousel = () => {
    return (
        <div style={{height: '100%'}}>
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
        </div>
    )
}

export default DialogueCarousel
