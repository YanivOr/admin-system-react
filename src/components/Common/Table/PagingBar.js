import React from 'react'
import styled from 'styled-components'
import { Sticker } from '../Sticker'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 30px 3px;

  & > img {
    width: 33px;
    height: 33px;
    cursor: pointer;
    background: #cccccc;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    :hover {
      background: #888888;
    }
  }

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`

const GoToStartButton = styled.img``

const GoToPrevButton = styled.img``

const PageInput = styled.input`
  background: #cccccc;
  color: #222222;
  font-weight: bold;
  width: 50px;
  height: 33px;
  border: 0px;
  padding: 0px 10px;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

const GoToNextButton = styled.img``

const GoToLastButton = styled.img``

const RefreshButton = styled.img``

const PageDropdown = styled.select`
  background: #cccccc;
  color: #222222;
  font-weight: bold;
  width: 50px;
  height: 33px;
  border: 0px;
  padding: 0px 10px;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

const PagingBar = ({btnClicked}) => {


  return (
    <Wrapper>
      <GoToStartButton
        onClick={btnClicked('goToStart')}
        src={require(`../../../assets/first_page-24px.svg`)}/>
      <GoToPrevButton
        onClick={btnClicked('goToPrev')}
        src={require(`../../../assets/chevron_left-24px.svg`)}/>
      <Sticker>Page</Sticker>
      <PageInput
        type="text"/>
      <Sticker>of</Sticker>
      <Sticker>24</Sticker>
      <GoToNextButton
        onClick={btnClicked('goToNext')}
        src={require(`../../../assets/chevron_right-24px.svg`)}/>
      <GoToLastButton
        onClick={btnClicked('goToLast')}
        src={require(`../../../assets/last_page-24px.svg`)}/>
      <RefreshButton
        onClick={btnClicked('refresh')}
        src={require(`../../../assets/refresh-24px.svg`)}/>
      <PageDropdown/>
    </Wrapper>
  )
}

export default PagingBar
