import React from "react";
import Button from "../../Ui/Button";
import { ReactComponent as PluseIcon } from "../../../assets/icons/plus-icon.svg.svg";
import styled from "styled-components";

const MealItemForm = ({id}) => {
  return (
    <StyledForm>
      <Container>
        <label htmlFor={id}>Amount</label>
        <input type="number" id={id} min={1} max={5} defaultChecked={1}/>
      </Container>
      <Button>
        <StyledIcon/>
        add
      </Button>
    </StyledForm>
  );
};

export default MealItemForm;

const StyledIcon = styled(PluseIcon)`
  margin-right: 10px;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Container = styled.div`
  margin-bottom: 12px;
  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    margin-right:20px;
  }

  input {
    width: 60px;
    height: 32px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    outline: none;
    padding:4px 12px;
    font-weight: 500;
font-size: 16px;
line-height: 24px;
  }
`;
