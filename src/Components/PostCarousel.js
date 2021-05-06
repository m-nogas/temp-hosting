import { Carousel } from 'react-bootstrap';
import PostPlayer from './VideoPlayer/PostPlayer.jsx';
import './VideoPlayer/PostPlayer.jsx';
import React from 'react';

class PostCarousel extends React.Component {
  
  render() {
    if (this.props.postsList) {
      return (
        <div style={{height: '100%'}}>
            <Carousel interval={null} className="candor-carousel">
              {
                this.props.postsList.map( post => {
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
}

export default PostCarousel;
