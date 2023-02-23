import React, { useState } from "react";
import Button from "../../Ui/Button";
import { ReactComponent as PluseIcon } from "../../../assets/icons/plus-icon.svg.svg";
import styledComponents from "styled-components";
import {styled} from "@mui/system";
import { addToBasket } from "../../../store/basket/basketSlice";
import { useDispatch } from "react-redux";
import {TextField} from "@mui/material"

const MealItemForm = ({ id, title, price }) => {
 const dispatch = useDispatch()
  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount( +event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const basketItem = {
      id,
      title,
      price,
      amount,
    };
    dispatch(addToBasket(basketItem));
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <Container>
        <label htmlFor={id}>Amount</label>
        <input
          type="number"
          id={id}
          min={1}
          max={5}
          defaultChecked={1}
          value={amount}
          onChange={amountChangeHandler}
        />
      </Container>
     <Container>

     {/* <TextField
          id="outlined-number"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          error
        /> */}
     </Container>

      <Button>
        <StyledIcon />
        add
      </Button>
    </StyledForm>
  );
};

export default MealItemForm;

// const StyledTextField = styled(TextField)(() => {
//   '.MuiTextField-root': {
//     width: "70px",

//   }
// })

const StyledIcon = styledComponents(PluseIcon)`
  margin-right: 10px;
`;

const StyledForm = styledComponents.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Container = styledComponents.div`
  margin-bottom: 12px;
  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    margin-right: 20px;
  }

  input {
    width: 60px;
    height: 32px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    outline: none;
    padding: 4px 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;
