import React from 'react'
import styled from 'styled-components'
import Head from './Head'
import Row from './Row'

const Wrapper = styled.div``

const Main = styled.table`
  width: 100%;
`

const THead = styled.thead``;

const TBody = styled.tbody``;

const Table = ({data, schema}) => (
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
  </Wrapper>
)

export default Table
