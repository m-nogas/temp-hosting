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
            <Carousel.Item className="candor-carousel">
              <ResponsivePlayer />
            </Carousel.Item>
            <Carousel.Item className="candor-carousel">
              <ResponsivePlayer />
            </Carousel.Item>
          </Carousel>
        </div>
    )
}

export default DialogueCarousel
