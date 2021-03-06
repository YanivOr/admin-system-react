import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  display: ${({display}) => display ? `flex` : `none`};
  flex-direction: row;
  align-items: center;
  top: ${({top}) =>`${top}px`};
  left: ${({left}) => `${left - 20}px`};
  background: #cccccc;
  color: #222222;
  font-weight: bold;
  height: 80px;
  border: 0px;
  padding: 0px 20px;
  margin: 0px 0px 0px 0px;
  cursor: pointer;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`

const TextIcon = styled.img`
  width: 34px;
  height: 34px;
`

const ImageIcon = styled.img`
  width: 34px;
  height: 34px;
`

const VideoIcon = styled.img`
  width: 34px;
  height: 34px;
`

const Toolbar = ({
  top,
  left,
  display,
  onMouseLeave,
  toolbarText,
  toolbarImage,
  toolbarVideo,
}) => (
  <Wrapper
    top={top}
    left={left}
    display={display}
    onMouseLeave={onMouseLeave}>
      <TextIcon
        src={require("../../../assets/create-24px.svg")}
        onClick={toolbarText}/>
      <ImageIcon
        src={require("../../../assets/insert_photo-24px.svg")}
        onClick={toolbarImage}/>
      <VideoIcon
        src={require("../../../assets/videocam-24px.svg")}
        onClick={toolbarVideo}/>
  </Wrapper>
)

export default Toolbar
