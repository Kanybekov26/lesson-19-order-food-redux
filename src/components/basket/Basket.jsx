import React from "react";
import styled from "styled-components";
import Modal from "../Ui/Modal";
import Basketitem from "./Basketitem";
import TotalAmount from "./TotalAmount";

const Basket = () => {
  const items = [
    {
      id: "1",
      title: "sishi",
      price: 22.99,
      amount: 1,
    },
    // {
    //   id: "2",
    //   title: "Schnitzel",
    //   price: 16.99,
    //   amount: 1,
    // },
    // {
    //   id: "3",
    //   title: "Barbecue Burger",
    //   price: 12.99,
    // },

    // {
    //   id: "4",
    //   title: "Green Bowl",
    //   price: 19.99,
    //   amount: 1,
    // },
  ];
  return (
    <Modal onClose={() => {}}>
      <Content>
      {items.length ?   <FixedHeightContainer>
       {items.map((item) => {
          return (
            <Basketitem
              key={item.id}
              title={item.title}
              price={item.price}
              amount={item.amount}
            />
          );
        })} 
        </FixedHeightContainer> :null}
       
        <TotalAmount price={200.5034} onClose={() => {}} onOrder={() => {}} />
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
`