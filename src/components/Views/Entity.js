import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Sticker } from '../Common/Sticker'
import Table from '../Common/Table'

const Wrapper = styled.div``

const Entity = ({type, getEntities, changePage}) => {
  const { title, fields, rows, limit, page, count } = useSelector(state => state[type])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEntities())
  }, [dispatch, getEntities])

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
        changePage={value => dispatch(changePage(value))}/>
    </Wrapper>
  )
}

export default Entity
