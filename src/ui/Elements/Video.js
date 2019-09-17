import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const VideoBase = styled.div`
  position: relative;
  padding-top: 56.25%;
`

const Video = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;

  .react-player__preview {
    border-radius: 15px;
    box-shadow: 15px 15px 30px 0 rgba(0, 0, 0, 0.15);
  }

  .react-player__shadow {
    border: 7px solid #fff !important;
    border-radius: 999em !important;

    height: 75px !important;
    width: 75px !important;
    padding: 75px !important;

    opacity: 0.8 !important;
  }

  .react-player__play-icon {
    border-width: 28px 0px 28px 42px !important;
  }
`

const VideoPlayer = props => (
  <VideoBase>
    <Video width="100%" height="100%" url={props.url} {...props} />
  </VideoBase>
)

export const AboutVideo = props => {
  return (
    <VideoPlayer
      controls
      light="https://elementor.thelandingfactory.com/wp-content/uploads/2018/01/videos-placeholder_0003_Layer-6.jpg"
      url="https://www.youtube.com/watch?v=6v2L2UGZJAM"
    />
  )
}
