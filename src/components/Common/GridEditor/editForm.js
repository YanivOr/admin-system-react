import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  display: ${({display}) => display ? `flex` : `none`};
  top: 50px;
  left: ${({windowWidth}) => `${windowWidth / 2 - 600 / 2}px`};
  flex-direction: column;
  align-items: center;
  background: #555555;
  color: #222222;
  font-weight: bold;
  width: 600px;
  border: 0px;
  padding: 30px 30px;
  margin: 0px 0px 0px 0px;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

const Textarea = styled.textarea`
  width: 100%;
  height: 400px;
  resize: none;
  background: #dddddd;
  border: 0px;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  justify-content: flex-end;

  & > button:first-child {
    margin-right: 10px;
  }
`

const Button = styled.button`
  display: inline-block;
  padding: 5px 15px;
  background: #cccccc;
  border: 0px;
  color: #222222;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`

const EditForm = ({
  display,
  content,
  windowWidth,
  editFormChanged,
  editFormSubmitted,
  editFormCanceled,
}) => (
  <Wrapper
    display={display}
    windowWidth={windowWidth}>
    <Textarea
      onChange={(event) => editFormChanged(event.target.value)}
      value={content}/>
    <ButtonsWrapper>
      <Button
        onClick={editFormCanceled}>Cancel</Button>
      <Button
        onClick={editFormSubmitted}>Submit</Button>
    </ButtonsWrapper>
  </Wrapper>
)

export default EditForm
