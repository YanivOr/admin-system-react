import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const FormWrapper = styled.div`
  width: 50%;
`

const Group = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    flex-basis: 50%;
  }

  & > span {
    text-align: right;
  }
`

const Label = styled.label`
  display: inline-block;
  padding: 5px 15px;
  background: #cccccc;
  color: #222222;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 2px;
  text-align: right;
`

const Input = styled.input`
  background: #cccccc;
  color: #222222;
  width: 200px;
  height: 33px;
  border: 0px;
  padding: 0px 10px;
  margin: 0px 2px;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

  &:hover {
    background: #aaaaaa;
  }
`

const ButtonsBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 5px;
  padding-right: 3px;

  & > button:first-child {
    margin-right: 8px;
  }

  & > button {
    background: #cccccc;
    color: #222222;
    font-weight: bold;
    height: 33px;
    border: 0px;
    padding: 0px 10px;
    margin: 0px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    cursor: pointer;

    &:hover {
      background: #aaaaaa;
    }
  }
`

const Submit = styled.button``

const Reset = styled.button``

const Form = ({data = {}, fields, fieldChanged}) => (
  <Wrapper>
    <FormWrapper>
      {fields.map((field, key) => (
        <Group
          key={key}>
          <Label>{field}</Label>
          <Input
            value={data[field]}
            onChange={event => fieldChanged(field, event.target.value)}
            type="text"/>
        </Group>
      ))}
      <ButtonsBar>
        <Reset>Reset</Reset>
        <Submit>Submit</Submit>
      </ButtonsBar>
    </FormWrapper>
  </Wrapper>
)

export default Form