import React from 'react'
import styled from 'styled-components'
import Toolbar from './toolbar'
import EditForm from './editForm'
import {
  TEXT,
} from '../../../constants/entities'

const Wrapper = styled.div`
  flex: auto;
  background: #333333;
  color: #dddddd;
  margin: 20px;
  padding: 20px;
`

const Title = styled.input`
  background: #cccccc;
  color: #222222;
  font-weight: bold;
  width: 60%;
  height: 33px;
  border: 0px;
  padding: 0px 10px;
  margin: 0px 0px 20px 0px;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  height: 40px;
  cursor: pointer;
  border: 1px solid #333333;

  &:hover {
    border: 1px solid #999999;
  }
`

const GridEditor = ({
  gridEditor: {
    selectedGridRow: {
      boundingRect: {
        top,
        width,
      }, 
      clickEventData: {
        x 
      },
      toolbar
    },
    editForm,
    gridContent,
  },
  rowClicked,
  onLeaveGridRow,
  toolbarText,
  toolbarImage,
  toolbarVideo,
  editFormChanged,
  editFormSubmitted,
  editFormCanceled,
}) => (
  <Wrapper>
    <Title
      placeholder="enter a title"/>
    <GridWrapper>
      {gridContent.map(({rowType, rowStatus, rowContent}, key) => {
        let content

        if (rowType === TEXT) {
          content = rowContent
        }

        return (
          <Row
            onClick={rowClicked.bind(this, key)}>
              {content}
            </Row>
        )
      })}
    </GridWrapper>
    <Toolbar
      top={top}
      left={x}
      display={toolbar.display}
      onMouseLeave={onLeaveGridRow}
      toolbarText={toolbarText}
      toolbarImage={toolbarImage}
      toolbarVideo={toolbarVideo}/>
    <EditForm
      display={editForm.display}
      content={editForm.content}
      windowWidth={width}
      editFormChanged={editFormChanged}
      editFormSubmitted={editFormSubmitted}
      editFormCanceled={editFormCanceled}/>
  </Wrapper>
)

export default GridEditor
