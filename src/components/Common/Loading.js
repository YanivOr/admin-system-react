import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333333;
  width: 100%;
  height: 100%;
`

const Gif = styled.img`
  width: 200px;
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin { 
    from { 
        transform: rotate(0deg); 
    } to { 
        transform: rotate(360deg); 
    }
  }
`

const Loading = () => {
  return (
    <Wrapper>
      <Gif src={require("../../assets/loading-1.png")}></Gif>
    </Wrapper>
  )
}

export default Loading
