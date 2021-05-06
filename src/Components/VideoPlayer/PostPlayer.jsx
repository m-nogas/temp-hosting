import React from 'react';
import ReactPlayer from 'react-player';
import './post-player.css';


const muxURLPrefix = "https://stream.mux.com/"
const videoFileType = ".m3u8"

class PostPlayer extends React.Component {
  render() {
    const url = muxURLPrefix + this.props.post.asset.playback_ids[0].id + videoFileType
    console.log("ANSHAY printing urls for posts ", url)
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={url}
          width='100%'
          height='100%'
          controls={true}
        />
      </div>
    )
  }
}


  export default PostPlayer;