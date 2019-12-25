import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Sticker } from '../Common/Sticker'
import Table from '../Common/Table'

const Wrapper = styled.div``

const Entity = ({type, getEntities}) => {
  const { title, fields, rows } = useSelector(state => state[type])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEntities())
  }, [dispatch, getEntities])

  return (
    <Wrapper>
      <Sticker>{title}</Sticker>
      <Table
        schema={fields}
        data={rows}/>
    </Wrapper>
  )
}

export default Entity
