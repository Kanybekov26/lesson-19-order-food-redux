import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/BasketIcon.svg";

const BasketButton = ({ count, ...restProps }) => {
  console.log(count)
  return (
    <div>
      <StyledButton {...restProps}>
        <BasketIcon /> <StyledSpan> Your cart</StyledSpan>
        <StyledCounter id="counter">{count || 0}</StyledCounter>
      </StyledButton>
    </div>
  );
};

export default BasketButton;

const StyledButton = styled.button`
  border-radius: 20px;
  padding: 12px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  background: #4a1703;
  cursor: pointer;

  &:hover {
    background: #611e03;
  }
  &:hover > #counter {
    background: #4d1702;
  }

  &.bump {
  animation: bump 300ms ease-out;
}

@keyframes bump {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
`;

const StyledSpan = styled.span`
  margin-left: 12px;
  margin-right: 24px;
`;

const StyledCounter = styled.span`
  background: #8a2b06;
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  color: #ffffff;
  padding: 4px 20px;
`;
