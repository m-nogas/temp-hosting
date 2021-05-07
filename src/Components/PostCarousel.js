import { Carousel } from 'react-bootstrap';
import PostPlayer from './VideoPlayer/PostPlayer.jsx';
import './VideoPlayer/PostPlayer.jsx';

const PostCarousel = (props) => {
  if (props.postsList) {
    return (
      <div style={{height: '100%'}}>
          <Carousel interval={null} className="candor-carousel">
            {
              props.postsList.map( post => {
                return (
                  <Carousel.Item className="candor-carousel">
                    <PostPlayer post={post} />
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </div>
    )
  } else {
    return (
      // TODO: Find a petter way to return this
      <div></div>
    )
  }
}

export default PostCarousel;
