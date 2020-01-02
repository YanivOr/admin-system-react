import React from 'react'
import styled from 'styled-components'
import { Sticker } from '../Sticker'
import {
  GO_TO_FIRST_PAGE,
  GO_TO_PREV_PAGE,
  GO_TO_NEXT_PAGE,
  GO_TO_LAST_PAGE,
  REFRESH,
} from '../../../constants/table'

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
      background: #aaaaaa;
    }
  }

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`

const GoToStartButton = styled.img`
  width: 24px;
  height: 24px;
`

const GoToPrevButton = styled.img`
  width: 24px;
  height: 24px;
`

const PageInput = styled.input`
  background: #cccccc;
  color: #222222;
  font-weight: bold;
  width: 60px;
  height: 33px;
  text-align: center;
  border: 0px;
  padding: 0px 10px;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

const GoToNextButton = styled.img`
  width: 24px;
  height: 24px;
`

const GoToLastButton = styled.img`
  width: 24px;
  height: 24px;
`

const RefreshButton = styled.img`
  width: 24px;
  height: 24px;
`

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

const Option = styled.option``

const PagingBar = ({page, pagesCount, changePage}) => (
  <Wrapper>
    <GoToStartButton
      onClick={changePage.bind(this, GO_TO_FIRST_PAGE)}
      src={require(`../../../assets/first_page-24px.svg`)}/>
    <GoToPrevButton
      onClick={changePage.bind(this, GO_TO_PREV_PAGE)}
      src={require(`../../../assets/chevron_left-24px.svg`)}/>
    <Sticker>page</Sticker>
    <PageInput
      value={page}
      onChange={event => changePage(event.target.value)}
      type="number"
      min="1"
      max={pagesCount}/>
    <Sticker>of</Sticker>
    <Sticker>{pagesCount}</Sticker>
    <GoToNextButton
      onClick={changePage.bind(this, GO_TO_NEXT_PAGE)}
      src={require(`../../../assets/chevron_right-24px.svg`)}/>
    <GoToLastButton
      onClick={changePage.bind(this, GO_TO_LAST_PAGE)}
      src={require(`../../../assets/last_page-24px.svg`)}/>
    <RefreshButton
      onClick={changePage.bind(this, REFRESH)}
      src={require(`../../../assets/refresh-24px.svg`)}/>
    <PageDropdown onChange={event => changePage(event.target.value)}>
      {pagesCount && Array(pagesCount).fill(0).map((_, key) => (
        <Option>{key + 1}</Option>
      ))}
    </PageDropdown>
  </Wrapper>
)

export default PagingBar
