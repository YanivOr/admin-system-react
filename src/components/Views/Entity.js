import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getItems, changePage } from '../../actions/entity'
import { Sticker } from '../Common/Sticker'
import Table from '../Common/Table'

const Wrapper = styled.div``

const Entity = ({entity}) => {
  const { title, fields, rows, limit, page, count } = useSelector(state => state.entity[entity])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItems(entity))
  }, [dispatch, entity])

  const nextItems = limit * (page -1)
  const pagesCount = Math.ceil(count / limit) || 1

  return (
    <Wrapper>
      <Sticker>{title}</Sticker>
      <Table
        data={rows && rows.slice(nextItems, nextItems + limit)}
        fields={fields}
        page={page}
        pagesCount={pagesCount}
        changePage={value => dispatch(changePage(entity, value))}/>
    </Wrapper>
  )
}

export default Entity
