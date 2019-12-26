import React from 'react'
import styled from 'styled-components'
import {
  NONE,
  ASC,
  DESC,
} from './constants'

const Wrapper = styled.tr``

const Cell = styled.th`
  text-align: left;
  padding: 5px 15px;
  background: #cccccc;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  margin-bottom: 30px;
  cursor: pointer;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Text = styled.span`
  color: #222222;
  font-weight: bold;
  font-size: 20px;
`

const Arrow = styled.img`
  transform: ${
    ({status}) => 
      status === ASC ? 
        'rotate(0)' :
      status === DESC ?
        'rotate(180deg)' :
      status === NONE ?        
        'scale(0)' : 'none'
  };
`

const Head = ({fields, sortTable}) => (
  <Wrapper>
    {fields.map((field, key) => (
      <Cell
        key={key}
        onClick={sortTable.bind(this, field)}>
        <ContentWrapper>
          <Text>{field}</Text>
          <Arrow
            status={NONE}
            src={require("../../../assets/arrow_drop_down-24px.svg")}/>
        </ContentWrapper>
      </Cell>
    ))}
  </Wrapper>
)

export default Head
