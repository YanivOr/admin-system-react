import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  changePage,
  sortTable,
  searchTable,
  rowClicked,
} from '../../store/actions/entities/table/index'
import {
  fieldChanged,
  saveItem,
  resetForm,
  clearForm,
} from '../../store/actions/entities/form/index'
import {
  gridRowClicked,
} from '../../store/actions/entities/gridEditor/index'
import Board from '../Common/Board'
import { Sticker } from '../Common/Sticker'
import Table from '../Common/Table'
import Form from '../Common/Form'
import GridEditor from '../Common/GridEditor'

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
      <Board>
      <TopBar>
        <Sticker>{title}</Sticker>
        <Search
          onChange={event => dispatch(searchTable(entity, event.target.value.trim()))}
          placeholder="search the table"/>
      </TopBar>
      </Board>
      <Board>
        <Table
          rows={rows}
          table={table}
          changePage={value => dispatch(changePage(entity, value))}
          sortTable={value => dispatch(sortTable(entity, value))}
          rowClicked={value => dispatch(rowClicked(entity, value))}/>
      </Board>
      <Board>
        <GridEditor
          rowClicked={(event) => dispatch(
            gridRowClicked(entity, event.target.getBoundingClientRect()))}/>
      </Board>
      <Board>
        <Form
          fields={fields}
          selectedRow={selectedRow}
          fieldChanged={(field, value) => dispatch(fieldChanged(entity, {field, value}))}
          submitForm={() => dispatch(saveItem(entity))}
          resetForm={() => dispatch(resetForm(entity))}
          clearForm={() => dispatch(clearForm(entity))}/>
      </Board>
    </Wrapper>
  )
}

export default Entity
