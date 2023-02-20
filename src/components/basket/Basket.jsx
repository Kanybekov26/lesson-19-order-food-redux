import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteBasketItem, updateBasketItem } from "../../store/basket/basketSlice";
import Modal from "../Ui/Modal";
import Basketitem from "./Basketitem";
import TotalAmount from "./TotalAmount";

const Basket = ({ onClose }) => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.basket.items)
  const getTotalPrice = useCallback(() => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  }, [items]);

  const decrementAmount = useCallback(
    (id, amount) => {
      if (amount > 1) {
       dispatch( updateBasketItem({ amount: amount - 1, id }));
      } else {
       dispatch( deleteBasketItem(id));
      }
    },
    // [updateBasketItem, deleteBasketItem]
  );

  const increamentAmount = useCallback(
    (id, amount) => {
     dispatch( updateBasketItem({ amount: amount + 1, id }));
    },
    // [updateBasketItem]
  );
  return (
    <Modal onClose={onClose}>

      <Content>
        {items.length ? (
          <FixedHeightContainer>
            {items.map((item) => {
              return (
                <Basketitem
                  key={item._id}
                  increamentAmount={() =>
                    increamentAmount(item._id, item.amount)
                  }
                  decrementAmount={() => decrementAmount(item._id, item.amount)}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                />
              );
            })}
          </FixedHeightContainer>
        ) : null}

        <TotalAmount
          price={getTotalPrice()}
          onClose={onClose}
          onOrder={() => {}}
        />
      </Content>
    </Modal>
  );
};

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1rem;
`;

const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
