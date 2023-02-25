import React from "react";
import styledComponents from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/BasketIcon.svg";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

const BasketButton = ({ count, ...restProps }) => {
  console.log(count);
  return (
    <div>
      {/* <Button>addd</Button> */}
      <StyledButton {...restProps}>
        <BasketIcon /> <StyledSpan> Your cart</StyledSpan>
        <StyledCounter id="counter">{count || 0}</StyledCounter>
      </StyledButton>
    </div>
  );
};

export default BasketButton;

const StyledButton = styled(Button)(() => ({
  borderRadius: "20px",
  padding: "12px 32px",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#ffffff",
  border: "none",
  display: "flex",
  alignItems: "center",
  background: "#4a1703",
  cursor: "pointer",

  "&:hover": {
    background: "#611e03",
  },
  "&:hover > #counter" : {
    background: "#662207",
  },

  "&.bump" : {
    animation: "bump 300ms ease-out",
  },

  "@keyframes bump": {
    " 0% ": {
      transform: "scale(1)",
    },
    "10%": {
      transform: "scale(0.9)",
    },
    "30%": {
      transform: "scale(1.1)",
    },
    "50%": {
      transform: "scale(1.15)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
}));



const StyledSpan = styledComponents.span`
  margin-left: 12px;
  margin-right: 24px;
`;

const StyledCounter = styledComponents.span`
  background: #8a2b06;
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  color: #ffffff;
  padding: 4px 20px;
`;
