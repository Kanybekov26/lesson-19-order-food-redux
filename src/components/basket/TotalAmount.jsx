import React from 'react'
import styled from 'styled-components'
import Button from '../Ui/Button'

const TotalAmount = ({ price, onClose, onOrder }) => {
    const isOrderButton =
        price > 0 ? <Button onClick={onOrder}>Order</Button> : null
    const fixedPrice = price.toFixed(2)
    return (
        <div style={{ paddingTop: 30 }}>
            <InfoContainer>
                <Lable>Total amount</Lable>
                <Price>${fixedPrice}</Price>
            </InfoContainer>

            <ActionButtonContainer>
                <Button variant="outlined" onClick={onClose}>
                    Close
                </Button>
                {isOrderButton}
            </ActionButtonContainer>
        </div>
    )
}

export default TotalAmount

const Lable = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #222222;
    margin: 0;
`

const Price = styled.p`
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #8a2b06;
    margin: 0;
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const ActionButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    gap: 1rem;
`
