import React from 'react'
import styled from 'styled-components'

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
      status === 1 ? 
        'rotate(180deg)' :
      status === -1 ?
        'rotate(0deg)' :
        'scale(0)'
  };
`

const Head = ({fields, sort, sortTable}) => (
  <Wrapper>
    {fields.map((field, key) => (
      <Cell
        key={key}
        onClick={sortTable.bind(this, field)}>
        <ContentWrapper>
          <Text>{field}</Text>
          <Arrow
            status={sort[field]}
            src={require("../../../assets/arrow_drop_down-24px.svg")}/>
        </ContentWrapper>
      </Cell>
    ))}
  </Wrapper>
)

export default Head
