import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  getItems,
  changePage,
  sortTable,
  searchTable,
  rowClicked,
  fieldChanged,
} from '../../actions/entity'
import { Sticker } from '../Common/Sticker'
import Table from '../Common/Table'
import Form from '../Common/Form'

const Wrapper = styled.div``

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 3px;
`

const Search = styled.input`
  background: #cccccc;
  color: #222222;
  font-weight: bold;
  width: 200px;
  height: 33px;
  border: 0px;
  padding: 0px 10px;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

const Entity = ({entity}) => {
  const {
    title,
    fields,
    filteredRows,
    selectedRowId,
    limit,
    page,
    count,
    sort,
  } = useSelector(state => state.entity[entity])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItems(entity))
  }, [dispatch, entity])

  const nextItems = limit * (page -1)
  const pagesCount = Math.ceil(count / limit) || 1

  return (
    <Wrapper>
      <TopBar>
        <Sticker>{title}</Sticker>
        <Search
          onChange={event => dispatch(searchTable(entity, event.target.value.trim()))}
          placeholder="search the table"/>
      </TopBar>
      <Table
        data={filteredRows && filteredRows.slice(nextItems, nextItems + limit)}
        fields={fields}
        page={page}
        pagesCount={pagesCount}
        sort={sort}
        changePage={value => dispatch(changePage(entity, value))}
        sortTable={value => dispatch(sortTable(entity, value))}
        rowClicked={value => dispatch(rowClicked(entity, value))}/>
      <Form
        data={filteredRows && filteredRows.filter(({id}) => id === selectedRowId)[0]}
        fields={fields}
        fieldChanged={(field, value) => dispatch(fieldChanged(entity, {field, value}))}/>
    </Wrapper>
  )
}

export default Entity
