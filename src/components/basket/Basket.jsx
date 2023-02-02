import React, { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import Modal from "../Ui/Modal";
import Basketitem from "./Basketitem";
import TotalAmount from "./TotalAmount";

const Basket = ({ onClose }) => {
  const { items, updateBasketItem,deleteBasketItem } = useContext(BasketContext);
  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  };

  const decrementAmount = (id, amount) => {
    if (amount > 1) {
      updateBasketItem({ amount: amount - 1, id });
    }else{
      deleteBasketItem(id)
    }
  };

  const increamentAmount = (id, amount) => {
    updateBasketItem({ amount: amount + 1, id });
  };
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
