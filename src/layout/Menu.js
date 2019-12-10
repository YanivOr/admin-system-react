import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 100px;
  left: ${({isVisible}) => isVisible ? '30px' : '-270px'};
  transition: left 0.5s;
  width: 250px;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`;

const Li = styled.li`
  padding: 5px;
  margin-bottom: 8px;
  background: #cccccc;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  font-weight: bold;

  &:hover {
    background: #cccccc;
  }

  & > a {
    display: block;
    text-decoration: none;
    color: #333333;
  }
`;


const Menu = ({isVisible, btnClicked}) => {
  return (
    <Nav
      isVisible={isVisible}>
      <Ul>
        <Li onClick={btnClicked}>
          <Link to="/">Dashboard</Link>
        </Li>
        <Li onClick={btnClicked}>
          <Link to="/accounts">Accounts</Link>
        </Li>
        <Li onClick={btnClicked}>
          <Link to="/posts">Posts</Link>
        </Li>
      </Ul>
    </Nav>
  );
}

export default Menu;
