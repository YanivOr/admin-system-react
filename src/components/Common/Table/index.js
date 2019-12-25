import React from 'react'
import styled from 'styled-components'
import Head from './Head'
import Row from './Row'
import PagingBar from './PagingBar'

const Wrapper = styled.div``

const Main = styled.table`
  width: 100%;
`

const THead = styled.thead``;

const TBody = styled.tbody``;

const Table = ({data, schema}) => {

  const pagingBtnClicked = action => {
    console.log(action)
  }

  return (
    <Wrapper>
      <Main>
        <THead>
          <Head schema={schema}></Head>
        </THead>
        <TBody>
          {data.map((item, key) => (
              <Row
                key={key}
                item={item}
                schema={schema}
              />
            )
          )}
        </TBody>
      </Main>
      <PagingBar
        btnClicked={action => pagingBtnClicked.bind(this, action)}/>
    </Wrapper>
  )
}

export default Table
