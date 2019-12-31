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

const Table = ({
  rows,
  table: { fields, sort, page, pagesCount, rowIds },
  changePage,
  sortTable,
  rowClicked
}) => (
  <Wrapper>
    <Main>
      <THead>
        <Head
          fields={fields}
          sort={sort}
          sortTable={sortTable}/>
      </THead>
      <TBody>
        {rowIds && rowIds.map(id => (
          <Row
            key={id}
            item={rows[id]}
            fields={fields}
            rowClicked={rowClicked}/>
        ))}
      </TBody>
    </Main>
    <PagingBar
      page={page}
      pagesCount={pagesCount}
      changePage={changePage}/>
  </Wrapper>
)

export default Table
