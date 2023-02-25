import React from "react";
import {styled} from "@mui/system";
import {Button as MuiButton }  from "@mui/material";
const Button = ({ children,variant = "coatained",borderStyle = "rounded",...restProps }) => {
  return(
  <>
   <StyledButton variant={variant} borderStyle={borderStyle} {...restProps}>{children}</StyledButton> 
   {/* <StyledButton variant={variant} borderStyle={borderStyle} {...restProps}>{children}</StyledButton>; */}
  </>
  )
};
export default Button;

const getBackgroundColor = (variant) => {
  return variant === "coatained" ? " #8a2b06" : "#fff"
}

const getBorder = (variant) => {
  return variant === "coatained" ? "none" : " 1px solid #8a2b06"
}

const getColor = (variant) => {
  return variant === "coatained" ? "#fff" : "#8a2b06"
}

const getRadius = (borderStyle) => {
  return borderStyle === "rounded" ?"20px" : "6px"
}


const StyledButton = styled(MuiButton)((variant,borderStyle) => ({
  "&":{
    background:getBackgroundColor(variant),
    color:getColor(variant),
    borderRadius:getRadius(borderStyle),
    padding: "10px 32px",
    fontWeight: "600",
    lineHeight: "24px",
    border:getBorder(variant),
    display:"flex",
    alignItems:"center",
  cursor: "pointer",
  
  '&:hover': {
    background: "#7E2A0A",
    color:"#fff",
},
'&:active':  {
    background: "#993108",
},
  }
  
}))
 








