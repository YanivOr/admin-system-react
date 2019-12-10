import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: auto;
  background: #666666;
  color: #dddddd;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  margin: 20px 15px;
  padding: 20px;
  border-bottom: 1px solid orange;
`;

const Content = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Content;
