import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: auto;
  background: #333333;
  color: #dddddd;
  margin: 20px;
  padding: 20px;
`

const Title = styled.input`
  background: #cccccc;
  color: #222222;
  font-weight: bold;
  width: 60%;
  height: 33px;
  border: 0px;
  padding: 0px 10px;
  margin: 0px 0px 20px 0px;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  height: 40px;
  cursor: pointer;
  border: 1px solid #333333;

  &:hover {
    border: 1px solid #999999;
  }
`

const Toolbar = styled.div`
  position: absolute;
  top: 0px;
  background: #cccccc;
  color: #222222;
  font-weight: bold;
  width: 300px;
  height: 80px;
  border: 0px;
  padding: 0px 00px;
  margin: 0px 0px 0px 0px;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

const GridEditor = ({rowClicked}) => (
  <Wrapper>
    <Title
      placeholder="enter a title"/>
    <GridWrapper>
      {[0,1,2,3].map(() => (
        <Row
          onClick={rowClicked}/>
      ))}
    </GridWrapper>
    <Toolbar/>
  </Wrapper>
)

export default GridEditor
