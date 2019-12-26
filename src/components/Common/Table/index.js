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

const Table = ({data, fields, page, pagesCount, changePage, sortTable}) => (
  <Wrapper>
    <Main>
      <THead>
        <Head
          fields={fields}
          sortTable={sortTable}/>
      </THead>
      <TBody>
        {data && data.map((item, key) => (
            <Row
              key={key}
              item={item}
              fields={fields}
            />
          )
        )}
      </TBody>
    </Main>
    <PagingBar
      page={page}
      pagesCount={pagesCount}
      changePage={changePage}/>
  </Wrapper>
)

export default Table
