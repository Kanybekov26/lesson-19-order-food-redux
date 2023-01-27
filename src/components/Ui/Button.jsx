import React from "react";
import styled from "styled-components";
const Button = ({ children }) => {
  return <StyledButton >{children}</StyledButton>;
};
export default Button;
const StyledButton = styled.button`
  background: #8A2B06;
  color: #fff;
  border-radius: 20px;
  padding: 10px 32px;
  font-weight: 600;
  line-height: 24px;
  border: none;
  display:flex;
  align-items:center;
cursor: pointer;
:hover {
    background: #7E2A0A;
}
:active {
    background: #993108;
}
`







