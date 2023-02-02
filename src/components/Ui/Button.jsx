import React from "react";
import styled from "styled-components";
const Button = ({ children,variant = "coatained",borderStyle = "rounded",...restProps }) => {
  return <StyledButton variant={variant} borderStyle={borderStyle} {...restProps}>{children}</StyledButton>;
};
export default Button;

const getBackgroundColor = (props) => {
  return props.variant === "coatained" ?" #8a2b06" : "#fff"
}

const getBorder = (props) => {
  return props.variant === "coatained" ?"none" : " 1px solid #8a2b06"
}

const getColor = (props) => {
  return props.variant === "coatained" ?"#fff" : "#8a2b06"
}

const getRadius = (props) => {
  return props.borderStyle === "rounded" ?"20px" : "6px"
}


const StyledButton = styled.button`
  background:${getBackgroundColor};
  color:${getColor};
  border-radius:${getRadius} ;
  padding: 10px 32px;
  font-weight: 600;
  line-height: 24px;
  border:${getBorder};
  display:flex;
  align-items:center;
cursor: pointer;
:hover {
    background: #7E2A0A;
    color:#fff;
}
:active {
    background: #993108;
}
`







