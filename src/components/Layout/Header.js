import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0px auto 0px auto;
  width: 98%;
  height: 70px;
  background: #333333;
  color: #dddddd;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

const MenuIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  cursor: pointer;
  background: #cccccc;
  box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.75);
  margin: 20px;

  :hover {
    background: #aaaaaa;
  }
`

const Header = ({btnClicked}) => (
  <Wrapper>
    <MenuIcon
      onClick={btnClicked}
      src={require(`../../assets/menu-24px.svg`)}/>
  </Wrapper>
)

export default Header
