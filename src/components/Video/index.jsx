import React from 'react';
import PropTypes from 'prop-types';
import { VideoWrapper } from './styled';

const Video = ({ control, playAuto, mute, looping, video }) => {
  const videoMap = {
    banner: '/videos/mp4/sessao1.mp4',
    intersection: '/videos/mp4/intersection.mp4',
    martech: '/videos/mp4/martech.mp4',
    mobile: '/videos/mp4/mobile_e_tech.mp4',
    academy: '/videos/mp4/bowe_academy.mp4',
  }
  return (
    <VideoWrapper
      controls={control}
      autoPlay={playAuto}
      muted={mute}
      loop={looping} >
      <source src={videoMap[video]} type="video/mp4" />
    </VideoWrapper >
  )
}

Video.defaultProps = {
  control: true,
  playAuto: true,
  mute: true,
  looping: true,
  video: 'banner',
}

Video.propTypes = {
  control: PropTypes.bool.isRequired,
  playAuto: PropTypes.bool.isRequired,
  mute: PropTypes.bool.isRequired,
  looping: PropTypes.bool.isRequired,
  video: PropTypes.string.isRequired,
}

export default Video;
