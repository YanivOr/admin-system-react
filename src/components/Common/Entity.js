import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  changePage,
  sortTable,
  searchTable,
  rowClicked,
  fieldChanged,
  saveItem,
  resetForm,
  clearForm,
} from '../../store/actions/entities'
import {
  gridRowClicked,
} from '../../store/actions/gridEditor'
import Container from './Container'
import { Sticker } from './Sticker'
import Table from './Table'
import Form from './Form'
import GridEditor from './GridEditor'

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
    table,
    form: {
      fields,
      selectedRow,
    },
    rows,
  } = useSelector(state => state.entities[entity])
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <Container>
      <TopBar>
        <Sticker>{title}</Sticker>
        <Search
          onChange={event => dispatch(searchTable(entity, event.target.value.trim()))}
          placeholder="search the table"/>
      </TopBar>
      </Container>
      <Container>
        <Table
          rows={rows}
          table={table}
          changePage={value => dispatch(changePage(entity, value))}
          sortTable={value => dispatch(sortTable(entity, value))}
          rowClicked={value => dispatch(rowClicked(entity, value))}/>
      </Container>
      <Container>
        <GridEditor
          rowClicked={() => dispatch(gridRowClicked(entity))}/>
      </Container>
      <Container>
        <Form
          fields={fields}
          selectedRow={selectedRow}
          fieldChanged={(field, value) => dispatch(fieldChanged(entity, {field, value}))}
          submitForm={() => dispatch(saveItem(entity))}
          resetForm={() => dispatch(resetForm(entity))}
          clearForm={() => dispatch(clearForm(entity))}/>
      </Container>
    </Wrapper>
  )
}

export default Entity
